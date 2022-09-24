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

# field name込みの場合はこっちを使う
# cursor = connection.cursor(MySQLdb.cursors.DictCursor)
cursor = connection.cursor()

try:
    cursor.execute(f"SELECT * FROM {BoshuSearchSetting} WHERE UUID='{sys.argv[1]}'")

    # num_fields = len(cursor.description)
    field_names = [i[0] for i in cursor.description]
    result_data =cursor.fetchone()

    # 保存を実行
    connection.commit()
    # 接続を閉じる
    connection.close()

except (MySQLdb.Error, MySQLdb.Warning, IndexError, TypeError) as e:
    print(e)

try:
    DictProfile = dict(zip(field_names, result_data))
    DictProfile1 = {}
    for k, v in DictProfile.items():
        DictProfile1[k] = {}
        count = 0
        if v == "":
            DictProfile1[k][count] = "0"
        elif v in "_":
            num = v.split("_")
            for item in num:
                DictProfile1[k][count] = item
                count += 1
        else:
            DictProfile1[k][count] = v
    print(DictProfile1)
    JsonProfile1 = json.dumps(DictProfile1)
    print(JsonProfile1)
except (IndexError, TypeError, ValueError) as e:
    print(e)