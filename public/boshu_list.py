#!/usr/local/bin/python3.7
# coding:utf-8
# MySQLdbのインポート
import MySQLdb
import sys
import datetime
import SQLconfig
import json

# データベースへの接続とカーソルの生成
connection = MySQLdb.connect(
    host=SQLconfig.host,
    user=SQLconfig.user,
    passwd=SQLconfig.passwd,
    db=SQLconfig.db)

BoshuSearchSetting="BoshuSearchSetting"
BoshuDB="BoshuDB"
ProfileTable="ProfileTable"
BSArea="BSArea"

# field name込みの場合はこっちを使う
# cursor = connection.cursor(MySQLdb.cursors.DictCursor)
cursor = connection.cursor()

# ここから下はreceive_get.phpで流してもよさそう(同じ)
# cursor.execute(f"SELECT * FROM {table_name} WHERE ID='{sys.argv[1]}' GROUP BY aiteID ORDER BY messagedDateTime")
# AND messagedDateTime=(SELECT max(messagedDateTime) FROM {table_name} AS md WHERE {table_name}.aiteID=md.aiteID)



# 自分の検索設定の入手
try:
    cursor.execute(f"SELECT * FROM {BoshuSearchSetting} WHERE UUID='{sys.argv[1]}'")
except (MySQLdb.Error, MySQLdb.Warning, IndexError, TypeError, KeyError, ValueError) as e:
    print("Execute to Obtain BSS:", e)

try:
    field_names = [i[0] for i in cursor.description]
    result_data = cursor.fetchone()

    DictData = dict(zip(field_names, result_data))
    DictData1 = {}

    for k, v in DictData.items():
        if k[:2] == "BS":
            if v == None:
                DictData1[k[2:]] = "0"
            elif v != "0":
                # PSを削除
                DictData1[k[2:]] = v
        else:
            DictData1[k] = v
except Exception as e:
    print("Create Dict:", e)

# SQL文の作成
BSS_SQL = ""
try:
    print(DictData1)
    for k, v in DictData1.items():
        if k == "UUID":
            BSS_SQL += "t1." +k + " != '" + v + "'"
            continue
        elif k == "AgeRange":
            if v == 0 or v=="null" or v == None or v == "0_0":
                continue
            elif ("_" in v):
                each_value = v.split("_")
                BSS_SQL += " AND ( " + k + " >= " + each_value[0] + " AND "+ k + " <= " + each_value[1] + " )" 
                continue
        elif v == "" or v=="0":
            BSS_SQL += " AND " + k + " = '0'"
            continue
        elif "_" in v:
            num = v.split("_")
            BSS_SQL += " AND ("
            for item in num:
                BSS_SQL += k + " = " + item + " OR "
            BSS_SQL = BSS_SQL[:-4]
            BSS_SQL += ")"
            continue
        else:
            BSS_SQL += " AND " + k + " = '" + v + "'"
    print(BSS_SQL)
    # print(json.dumps(DictPSS1))
except (MySQLdb.Error, MySQLdb.Warning, IndexError, TypeError, KeyError, ValueError) as e:
    print("Create SQL for BSS:", e)


try:
    cursor.execute(f"SELECT Area FROM {BSArea} WHERE UUID='{sys.argv[1]}'")
    AreaList = cursor.fetchall()
    if len(AreaList) == 0:
        None
    elif len(AreaList) ==1:
        if str(AreaList[0][0])[2:] == "000000":
            BSS_SQL += " AND (BoshuArea >= '" + str(AreaList[0][0]) + "' AND BoshuArea < '" + str(AreaList[0][0]+1000000) + "')"
        elif str(AreaList[0][0])[4:] == "0000":
            BSS_SQL += " AND (BoshuArea >= '" + str(AreaList[0][0]) + "' AND BoshuArea < '" + str(AreaList[0][0]+10000) + "')"
        elif str(AreaList[0][0])[6:] == "00": 
            BSS_SQL += " AND (BoshuArea >= '" + str(AreaList[0][0]) + "' AND BoshuArea < '" + str(AreaList[0][0]+100) + "')"
        else:
            BSS_SQL += " AND BoshuArea = '" + str(AreaList[0][0]) + "'"
    else:
        count = 1
        for Area in AreaList:
            if count == 1:
                if str(Area[0])[2:] == "000000":
                    BSS_SQL += " AND (BoshuArea >= '" + str(Area[0]) + "' AND BoshuArea < '" + str(Area[0]+1000000) + "'"
                elif str(Area[0])[4:] == "0000":
                    BSS_SQL += " AND (BoshuArea >= '" + str(Area[0]) + "' AND BoshuArea < '" + str(Area[0]+10000) + "'"
                elif str(Area[0])[6:] == "00":
                    BSS_SQL += " AND (BoshuArea >= '" + str(Area[0]) + "' AND BoshuArea < '" + str(Area[0]+100) + "'"
                else:
                    BSS_SQL += " AND (BoshuArea = '" + str(Area[0]) + "'"
                count += 1
            elif count == len(AreaList):
                if str(Area[0])[2:] == "000000":
                    BSS_SQL += " OR BoshuArea >= '" + str(Area[0]) + "' AND BoshuArea < '" + str(Area[0]+1000000) + "')"
                elif str(Area[0])[4:] == "0000":
                    BSS_SQL += " OR BoshuArea >= '" + str(Area[0]) + "' AND BoshuArea < '" + str(Area[0]+10000) + "')"
                elif str(Area[0])[6:] == "00":
                    BSS_SQL += " OR BoshuArea >= '" + str(Area[0]) + "' AND BoshuArea < '" + str(Area[0]+100) + "')"
                else:
                    BSS_SQL += " OR BoshuArea = '" + str(Area[0]) + "')"
            else:
                if str(Area[0])[2:] == "000000":
                    BSS_SQL += " OR BoshuArea >= '" + str(Area[0]) + "' AND BoshuArea < '" + str(Area[0]+1000000) + "'"
                elif str(Area[0])[4:] == "0000":
                    BSS_SQL += " OR BoshuArea >= '" + str(Area[0]) + "' AND BoshuArea < '" + str(Area[0]+10000) + "'"
                elif str(Area[0])[6:] == "00":
                    BSS_SQL += " OR BoshuArea >= '" + str(Area[0]) + "' AND BoshuArea < '" + str(Area[0]+100) + "'"
                else:
                    BSS_SQL += " OR BoshuArea = '" +str(Area[0]) + "'"
                count += 1
except (MySQLdb.Error, MySQLdb.Warning, IndexError, TypeError, KeyError, ValueError) as e:
    print("Obtain BSArea:", e)

# print("BSS_SQL:", BSS_SQL)

try:
    # SELECT t1.UUID, BoshuID, BoshuArea, BoshuPrefecture, BoshuCity, BoshuWard, BoshuCategory, BoshuTitle, ViewCount, PostDateTime, nickname, gender, age \
    # SELECT t1.UUID, BoshuID, BoshuArea, BoshuPrefecture, BoshuCity, BoshuCategory, BoshuTitle, ViewCount, PostDateTime
    cursor.execute(f" \
        SELECT * \
        FROM `{BoshuDB}` AS t1\
        INNER JOIN ( \
            SELECT UUID, NickName, Gender, AgeRange \
            FROM `{ProfileTable}`) AS t2\
        ON t1.UUID = t2.UUID \
        WHERE {BSS_SQL} \
        ORDER BY t1.PostDateTime DESC\
    ")
except (MySQLdb.Error, MySQLdb.Warning, IndexError, TypeError) as e:
    print("SQL Execution:", e)

try:
    # num_fields = len(cursor.description)
    field_names = [i[0] for i in cursor.description]
    # print(field_names)

    for row in cursor:
        row1 = list()
        for item in row:
            if str(type(item)) == "<class 'datetime.datetime'>":
                # 時間を文字列に変換（php側の処理対策）
                row1.append(str(item.strftime("%Y/%m/%d %H:%M:%S")))
            elif str(type(item)) == "<class 'str'>":
                # phpでの文字列から配列への変換時の誤動作防止用前処理
                item = item.replace("'","’")
                row1.append(item.replace(', ', '，'))
            else:
                row1.append(item)
        DictProfile=dict(zip(field_names, row1))
        DictProfile1 = {}
        for k, v in DictProfile.items():
            if v != 0:
                DictProfile1[k] = v
        print(json.dumps(DictProfile1))
        # printでのpythonからphpへの受け渡し
        # print (row1)
except (IndexError, TypeError, ValueError) as e:
    print("Create List:", e)

# 保存を実行
connection.commit()

# 接続を閉じる
connection.close()
