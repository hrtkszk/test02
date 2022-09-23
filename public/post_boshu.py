#!/usr/local/bin/python3.7
# coding:utf-8
# MySQLdbのインポート
import MySQLdb
import sys
import datetime
import SQLconfig
import json

try:
    RecieveData=json.loads(sys.argv[1])
except (IndexError, TypeError, ValueError) as e:
    print(e)

SettingValue = ""
UUID = ""
for k,v in RecieveData.items():
    if k == "UUID" or k == "BoshuTitle" or k == "BoshuMessage":
        SettingValue += k + "='" + v + "', "
        if k == "UUID":
            UUID = v
    else:
        SettingValue += k + "=" + v + ", "
print(SettingValue)

# データベースへの接続とカーソルの生成
connection = MySQLdb.connect(
    host=SQLconfig.host,
    user=SQLconfig.user,
    passwd=SQLconfig.passwd,
    db=SQLconfig.db)

BoshuDB="BoshuDB"

# field name込みの場合はこっちを使う
# cursor = connection.cursor(MySQLdb.cursors.DictCursor)

cursor = connection.cursor()

BoshuID = str(UUID)+"_"+str(datetime.datetime.now()).replace(" ", "").replace("-", "").replace(".", "").replace(":", "")

# profileTableのUUIDのチェック（外部からの変更防止？）

try:
    cursor.execute(f" \
        INSERT INTO `{BoshuDB}` \
        SET {SettingValue} \
            BoshuID='{BoshuID}', \
            EntryCount='0', \
            ViewCount='0', \
            PostDateTime=CURRENT_TIMESTAMP \
    ")
    print("PBS") # Posting Boshu Success
except (MySQLdb.Error, MySQLdb.Warning, IndexError, TypeError) as e:
    print(e)
    print("PBNS") # Posting Boshu Not Success


# 保存を実行
connection.commit()

# 接続を閉じる
connection.close()
