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

emailtable="EmailSettings"
pwdtable="PwdSettings"

# メールアドレスが存在するかチェック。存在しなければ、アドレス・PW・UUID追加に進む。存在したら、同じUUIDでパスワードを追加する。

# field name込みの場合はこっちを使う
# cursor = connection.cursor(MySQLdb.cursors.DictCursor)
cursor = connection.cursor()

cursor.execute(f"SELECT * FROM {emailtable} WHERE email='{sys.argv[1]}'")

checkExist = cursor.fetchall()
if not(checkExist):
    # UUID、メールアドレス登録→パスワード登録
    # UUID、メールアドレス登録
    cursor.execute(f"INSERT `{SQLconfig.db}`.`{emailtable}` (`UUID`, `email`, `datetime`) VALUES (UUID(), '{sys.argv[1]}', CURRENT_TIME)")
    cursor.execute(f"SELECT UUID FROM {emailtable} WHERE email='{sys.argv[1]}'")
    UUID = {cursor.fetchone()[0]}
    # パスワード登録
    cursor.execute(f"INSERT `{SQLconfig.db}`.`{pwdtable}` (`UUID`, `password`, `datetime`) VALUES ('{UUID}', '{sys.argv[2]}', CURRENT_TIME)")
    
    print("TRC") # Temp Registration Complete
    # print(UUID)

else:
    print("EE") # Email Exist

# 保存を実行
connection.commit()

# 接続を閉じる
connection.close()
