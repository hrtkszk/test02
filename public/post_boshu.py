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

profileTable="profileTable"

# field name込みの場合はこっちを使う
# cursor = connection.cursor(MySQLdb.cursors.DictCursor)

cursor = connection.cursor()

BoshuID = str(sys.argv[1])+"_"+str(datetime.datetime.now())

# profileTableのUUIDのチェック（外部からの変更防止？）

try:
    cursor.execute(f" \
        INSERT INTO '{profileTable}' \
        SET \
            UUID='{sys.argv[1]}', \
            BoshuID='{BoshuID}', \
            BoshuArea='{sys.argv[2]}', \
            BoshuPrefecture='{sys.argv[3]}', \
            BoshuCity='{sys.argv[4]}', \
            BoshuCategory='{sys.argv[5]}', \
            BoshuTitle='{sys.argv[6]}', \
            BoshuMessage='{sys.argv[7]}', \
            BoshuLimit='{sys.argv[8]}', \
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
