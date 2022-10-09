#!/usr/local/bin/python3.7
# coding:utf-8
# MySQLdbのインポート
from asyncio.windows_events import NULL
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

ProfileSearchSetting="ProfileSearchSetting"
ProfileTable="ProfileTable"
PSArea="PSArea"
PSBirthArea="PSBirthArea"

# field name込みの場合はこっちを使う
# cursor = connection.cursor(MySQLdb.cursors.DictCursor)
cursor = connection.cursor()


# 自分の検索設定の入手
try:
    cursor.execute(f"SELECT * FROM {ProfileSearchSetting} WHERE UUID='{sys.argv[1]}'")
    field_names = [i[0] for i in cursor.description]
    recieved_data = cursor.fetchone()
except (MySQLdb.Error, MySQLdb.Warning, IndexError, TypeError, KeyError, ValueError) as e:
    print("Obtain Profile Search Setting:", e)

DictData = dict(zip(field_names, recieved_data))
DictData1 = {}
for k, v in DictData.items():
    if k[:2] == "PS":
        if v != 0 or v != NULL:
            # PSを削除
            DictData1[k[2:]] = v
    else:
        DictData1[k] = v

# SQL文の作成
PSS_SQL = ""
try:
    for k, v in DictData1.items():
        if k == "UUID":
            PSS_SQL += k + " != '" + v + "'"
            continue
        elif k == "NickName":
            if v != None:
                PSS_SQL += " AND " + k + " = '" + v + "'"
                continue
        else:
            # _が入っているか？(複数選択か？)で単独検索、()付き検索かが変わる
            if ("_" in v):
                PSS_SQL += " AND ( "
                each_value = v.split("_")
                for value in each_value:
                    PSS_SQL += k + " = " + value + " OR "
                PSS_SQL = PSS_SQL[:-3]
                PSS_SQL += ")"
                continue
            else:
                PSS_SQL += " AND " + k + " = " + v
                continue
    # print(PSS_SQL)
except (IndexError, TypeError, KeyError, ValueError) as e:
    print("Create SQL statement:", e)

try:
    cursor.execute(f"SELECT Area FROM {PSArea} WHERE UUID='{sys.argv[1]}'")
    AreaList = cursor.fetchall()
    if len(AreaList) == 0:
        None
    elif len(AreaList) ==1:
        if str(AreaList[0][0])[2:] == "000000":
            PSS_SQL += " AND (Area >= '" + str(AreaList[0][0]) + "' AND Area < '" + str(AreaList[0][0]+1000000) + "')"
        elif str(AreaList[0][0])[4:] == "0000":
            PSS_SQL += " AND (Area >= '" + str(AreaList[0][0]) + "' AND Area < '" + str(AreaList[0][0]+10000) + "')"
        elif str(AreaList[0][0])[6:] == "00": 
            PSS_SQL += " AND (Area >= '" + str(AreaList[0][0]) + "' AND Area < '" + str(AreaList[0][0]+100) + "')"
        else:
            PSS_SQL += " AND Area = '" + str(AreaList[0][0]) + "'"
    else:
        count = 1
        for Area in AreaList:
            if count == 1:
                if str(Area[0])[2:] == "000000":
                    PSS_SQL += " AND (Area >= '" + str(Area[0]) + "' AND Area < '" + str(Area[0]+1000000) + "'"
                elif str(Area[0])[4:] == "0000":
                    PSS_SQL += " AND (Area >= '" + str(Area[0]) + "' AND Area < '" + str(Area[0]+10000) + "'"
                elif str(Area[0])[6:] == "00":
                    PSS_SQL += " AND (Area >= '" + str(Area[0]) + "' AND Area < '" + str(Area[0]+100) + "'"
                else:
                    PSS_SQL += " AND (Area = '" + str(Area[0]) + "'"
                count += 1
            elif count == len(AreaList):
                if str(Area[0])[2:] == "000000":
                    PSS_SQL += " OR Area >= '" + str(Area[0]) + "' AND Area < '" + str(Area[0]+1000000) + "')"
                elif str(Area[0])[4:] == "0000":
                    PSS_SQL += " OR Area >= '" + str(Area[0]) + "' AND Area < '" + str(Area[0]+10000) + "')"
                elif str(Area[0])[6:] == "00":
                    PSS_SQL += " OR Area >= '" + str(Area[0]) + "' AND Area < '" + str(Area[0]+100) + "')"
                else:
                    PSS_SQL += " OR Area = '" + str(Area[0]) + "')"
            else:
                if str(Area[0])[2:] == "000000":
                    PSS_SQL += " OR Area >= '" + str(Area[0]) + "' AND Area < '" + str(Area[0]+1000000) + "'"
                elif str(Area[0])[4:] == "0000":
                    PSS_SQL += " OR Area >= '" + str(Area[0]) + "' AND Area < '" + str(Area[0]+10000) + "'"
                elif str(Area[0])[6:] == "00":
                    PSS_SQL += " OR Area >= '" + str(Area[0]) + "' AND Area < '" + str(Area[0]+100) + "'"
                else:
                    PSS_SQL += " OR Area = '" +str(Area[0]) + "'"
                count += 1
except (MySQLdb.Error, MySQLdb.Warning, IndexError, TypeError, KeyError, ValueError) as e:
    print("Obtain PSArea:", e)

try:
    cursor.execute(f"SELECT BirthArea FROM {PSBirthArea} WHERE UUID='{sys.argv[1]}'")
    BirthAreaList = cursor.fetchall()
    if len(BirthAreaList) == 0:
        None
    elif len(BirthAreaList) ==1:
        PSS_SQL += " AND BirthArea = '" + str(BirthAreaList[0][0]) + "'"
    else:
        count = 1
        for BirthArea in BirthAreaList:
            if count == 1:
                PSS_SQL += " AND (BirthArea = '" + str(BirthArea[0]) + "'"
                count += 1
            elif count == len(BirthAreaList):
                PSS_SQL += " OR BirthArea = '" + str(BirthArea[0]) + "')"
            else:
                PSS_SQL += " OR BirthArea = '" +str(BirthArea[0]) + "'"
                count += 1
except (MySQLdb.Error, MySQLdb.Warning, IndexError, TypeError, KeyError, ValueError) as e:
    print("Obtain PSBirthArea:", e)
    
print(PSS_SQL)

# 検索設定に基づいたProfileTable1の検索
try:
    cursor.execute(f" \
        SELECT * \
        FROM {ProfileTable} \
        WHERE \
            {PSS_SQL} \
    ")
    field_names = [i[0] for i in cursor.description]

    for EachId in cursor:
        row1 = list()
        for item in EachId:
            if str(type(item)) == "<class 'datetime.datetime'>":
                # 時間を文字列に変換（php側の処理対策）
                row1.append(str(item.strftime("%Y/%m/%d %H:%M:%S")))
            elif str(type(item)) == "<class 'str'>":
                # phpでの文字列から配列への変換時の誤動作防止用前処理
                item = item.replace("'","’")
                row1.append(item.replace(', ', '，'))
            else:
                row1.append(item)
        # printでのpythonからphpへの受け渡し
        DictProfile=dict(zip(field_names, row1))
        DictProfile1 = {}
        for k, v in DictProfile.items():
            if v != 0:
                DictProfile1[k] = v
        print(json.dumps(DictProfile1))
except (MySQLdb.Error, MySQLdb.Warning, IndexError, TypeError) as e:
    print("Profile Search and Result:", e)

# 保存を実行
connection.commit()

# 接続を閉じる
connection.close()
