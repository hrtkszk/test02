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
BSArea="BSArea"

# field name込みの場合はこっちを使う
# cursor = connection.cursor(MySQLdb.cursors.DictCursor)
cursor = connection.cursor()

try:
    cursor.execute(f"SELECT * FROM {BoshuSearchSetting} WHERE UUID='{sys.argv[1]}'")

    # num_fields = len(cursor.description)
    field_names = [i[0] for i in cursor.description]
    recieved_data =cursor.fetchone()
except (MySQLdb.Error, MySQLdb.Warning, IndexError, TypeError) as e:
    print(e)

DictData = dict(zip(field_names, recieved_data))
print(json.dumps(DictData))

try:
    cursor.execute(f"SELECT Area FROM {BSArea} WHERE UUID='{sys.argv[1]}'")
    DictPSArea = {}
    for row in cursor:
        DictPSArea[row[0]] = True
    print (json.dumps(DictPSArea))
except (MySQLdb.Error, MySQLdb.Warning, IndexError, TypeError) as e:
    print(e)

# 保存を実行
connection.commit()
# 接続を閉じる
connection.close()



# try:
#     DictData = dict(zip(field_names, result_data))
#     DictData1 = {}
#     for k, v in DictData.items():
#         DictData1[k] = {}
#         if v == "":
#             DictData1[k] = "0"
#         elif "_" in v:
#             num = v.split("_")
#             for item in num:
#                 DictData1[k][item] = True
#         else:
#             DictData1[k] = v
#     JsonData1 = json.dumps(DictData1)
#     print(JsonData1)
# except (IndexError, TypeError, ValueError) as e:
#     print(e)