#!/usr/local/bin/python3.7
# coding:utf-8
# MySQLdbのインポート
import MySQLdb
import sys
import datetime
import SQLconfig

# データベースへの接続とカーソルの生成
connection = MySQLdb.connect(
    host=SQLconfig.host,
    user=SQLconfig.user,
    passwd=SQLconfig.passwd,
    db=SQLconfig.db)

PSArea="PSArea"

# field name込みの場合はこっちを使う
# cursor = connection.cursor(MySQLdb.cursors.DictCursor)

cursor = connection.cursor()

try:
    cursor.execute(f" \
        DELETE FROM `{PSArea}` \
        WHERE UUID='{sys.argv[1]}' \
    ")
    
    UUID_Area = ""
    for Area in sys.argv[2:]:
        cursor.execute(f" \
            INSERT INTO `{PSArea}` \
            SET \
                UUID='{sys.argv[1]}', \
                Area='{Area}' \
        ")
    print("SPSASS") # Set Profile Search Area Setting Success
except (MySQLdb.Error, MySQLdb.Warning, IndexError, TypeError) as e:
    print(e)
    print("SPSASNS") # Set Profile Search Area Setting Not Success



# 保存を実行
connection.commit()

# 接続を閉じる
connection.close()
