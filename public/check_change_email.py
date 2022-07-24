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

# SameEmailをチェック。
# SameEmailがOKなら、NewPwdを追加する。

# field name込みの場合はこっちを使う
# cursor = connection.cursor(MySQLdb.cursors.DictCursor)

cursor = connection.cursor()

# UUIDのチェック（外部からの変更防止）

cursor.execute(f"SELECT * FROM {emailtable} WHERE UUID='{sys.argv[1]}'")
checkExist = cursor.fetchone()
print(checkExist)

# UUIDが存在しない→弾く
if checkExist==None:
    print("UNE") # UUID Not Exist

# UUIDが存在する場合→進む
else:
    print("test")
    # DB全体で同じメールアドレスが存在するかの確認
    cursor.execute(f"SELECT * FROM {emailtable} WHERE email='{sys.argv[2]}'")
    SameEmailDB = cursor.fetchone()
    print(SameEmailDB)

    # 存在しない→変更する
    if SameEmailDB == None:
        cursor.execute(f"INSERT `{emailtable}` (`UUID`, `email`, `datetime`) VALUES ('{sys.argv[1]}', '{sys.argv[2]}', CURRENT_TIME)")
        print("CES") # Change Email Success
        print(SameEmailDB)

    # 存在する→変更しない
    else:
        print("NS") # Not Success
        print(SameEmailDB)
        # print(datetime_pwd)

# 保存を実行
connection.commit()

# 接続を閉じる
connection.close()
