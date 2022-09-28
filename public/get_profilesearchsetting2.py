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

ProfileSearchSetting="ProfileSearchSetting"
PSArea="PSArea"
PSBirthArea="PSBirthArea"

# field name込みの場合はこっちを使う
# cursor = connection.cursor(MySQLdb.cursors.DictCursor)
cursor = connection.cursor()

try:
    cursor.execute(f"SELECT * FROM {ProfileSearchSetting} WHERE UUID='{sys.argv[1]}'")
    # num_fields = len(cursor.description)
    field_names = [i[0] for i in cursor.description]
    recieved_data = cursor.fetchone()
except (MySQLdb.Error, MySQLdb.Warning, IndexError, TypeError) as e:
    print(e)

DictData = dict(zip(field_names, recieved_data))
print(json.dumps(DictData))

try:
    cursor.execute(f"SELECT Area FROM {PSArea} WHERE UUID='{sys.argv[1]}'")
    DictPSArea = {}
    for row in cursor:
        DictPSArea[row[0]] = True
    print (json.dumps(DictPSArea))
except (MySQLdb.Error, MySQLdb.Warning, IndexError, TypeError) as e:
    print(e)

try:
    cursor.execute(f"SELECT Area FROM {PSBirthArea} WHERE UUID='{sys.argv[1]}'")
    DictPSBirthArea = {}
    for row in cursor:
        DictPSBirthArea[row[0]] = True
    print (json.dumps(DictPSBirthArea))
except (MySQLdb.Error, MySQLdb.Warning, IndexError, TypeError) as e:
    print(e)

# 保存を実行
connection.commit()

# 接続を閉じる
connection.close()
