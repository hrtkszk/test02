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

# メールアドレスが存在するかチェック。存在しなければ、入力間違い。存在したら、同じUUIDを取得し、パスワードを照合する。
# パスワードが間違っていたら、入力間違い。合っていたら、ログイン。

# field name込みの場合はこっちを使う
# cursor = connection.cursor(MySQLdb.cursors.DictCursor)
cursor = connection.cursor()

# メールアドレスが存在するかチェック。
cursor.execute(f"SELECT * FROM {emailtable} WHERE email='{sys.argv[1]}'")
checkExist = cursor.fetchone()

# メールアドレスが存在する場合：
if checkExist!=None:
    # メールアドレスからUUID取得
    cursor.execute(f"SELECT UUID FROM {emailtable} WHERE email='{sys.argv[1]}'")
    UUID = cursor.fetchone()[0]

    # UUIDから「最新の」パスワード照合
    cursor.execute(f"SELECT password FROM {pwdtable} WHERE UUID='{UUID}'")
    print(UUID)
    latestpwd = cursor.fetchone()[0]
    print(latestpwd)
    if latestpwd == sys.argv[2]:
        print("LS") # Login Success
    else:
        print("ICI") # InCorrect Input

# メールアドレスが存在しない場合：
else:
    print("ICI") # InCorrect Input

# 保存を実行
connection.commit()

# 接続を閉じる
connection.close()
