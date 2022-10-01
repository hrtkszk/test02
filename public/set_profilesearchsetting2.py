#!/usr/local/bin/python3.7
# coding:utf-8
# MySQLdbのインポート
import MySQLdb
import sys, json
import datetime
import SQLconfig
import json

try:
    RecieveData=json.loads(sys.argv[1])
except (IndexError, TypeError, ValueError) as e:
    print(e)

SettingValue = ""
for k,v in RecieveData.items():
    SettingValue += k + "='" + v + "', "
print(SettingValue)

# データベースへの接続とカーソルの生成
connection = MySQLdb.connect(
    host=SQLconfig.host,
    user=SQLconfig.user,
    passwd=SQLconfig.passwd,
    db=SQLconfig.db)

ProfileSearchSetting="ProfileSearchSetting"

# field name込みの場合はこっちを使う
# cursor = connection.cursor(MySQLdb.cursors.DictCursor)

cursor = connection.cursor()

try:
    cursor.execute(f" \
        DELETE FROM `{ProfileSearchSetting}` \
        WHERE UUID='{RecieveData['UUID']}' \
    ")
    cursor.execute(f" \
        INSERT INTO `{ProfileSearchSetting}` \
        SET {SettingValue[:-2]} \
    ")
    # 保存を実行
    connection.commit()

    # 接続を閉じる
    connection.close()
    
    print("SPSSS") # Set Profile Search Setting Success
except (MySQLdb.Error, MySQLdb.Warning, IndexError, TypeError) as e:
    print(e)
    print("SPSSNS") # Set Profile Search Setting Not Success

