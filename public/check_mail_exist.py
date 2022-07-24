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


# field name込みの場合はこっちを使う
# cursor = connection.cursor(MySQLdb.cursors.DictCursor)
cursor = connection.cursor()

# メールアドレスが存在するかチェック。
cursor.execute(f"SELECT * FROM {emailtable} WHERE email='{sys.argv[1]}'")
checkExist = cursor.fetchone()

# メールアドレスが存在しない場合は何もしない。
if checkExist==None:
    print("ENE") # Email Not Exist

# メールアドレスが存在したら、同じUUIDで仮パスワードを追加する。
else:
    cursor.execute(f"SELECT UUID FROM {emailtable} WHERE email='{sys.argv[1]}'")
    UUID = cursor.fetchone()[0]
    # 新しいpwdの発行（ランダム生成要）
    NewPwd ="test"

    # パスワード登録
    cursor.execute(f"INSERT `{pwdtable}` (`UUID`, `password`, `datetime`) VALUES ('{UUID}', '{NewPwd}', CURRENT_TIME)")


    print("EE") # Email Exist
    print(UUID)
    print(NewPwd)

    # 新たしいpwdの発行（ランダム生成要）

# 保存を実行
connection.commit()

# 接続を閉じる
connection.close()
