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

MessageDB="MessageDB"
ProfileTable="ProfileTable"

# field name込みの場合はこっちを使う
# cursor = connection.cursor(MySQLdb.cursors.DictCursor)
cursor = connection.cursor()

# ここから下はreceive_get.phpで流してもよさそう(同じ)
# cursor.execute(f"SELECT * FROM {table_name} WHERE ID='{sys.argv[1]}' GROUP BY aiteID ORDER BY messagedDateTime")
# AND messagedDateTime=(SELECT max(messagedDateTime) FROM {table_name} AS md WHERE {table_name}.aiteID=md.aiteID)
try:
    cursor.execute(f" \
        SELECT * \
        FROM {MessageDB} AS t1 \
        INNER JOIN ( \
            SELECT UUID, aiteID, MAX(messagedDateTime) AS latestDateTime \
            FROM {MessageDB} \
            WHERE UUID='{sys.argv[1]}' \
            GROUP BY aiteID) AS t2 \
        ON t1.UUID = t2.UUID AND t1.aiteID = t2.aiteID AND t1.messagedDateTime = t2.latestDateTime \
        INNER JOIN (\
            SELECT UUID, NickName, Gender, AgeRange \
            FROM {ProfileTable}) AS t3\
        ON t1.aiteID = t3.UUID\
        ORDER BY t1.messagedDateTime DESC\
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
