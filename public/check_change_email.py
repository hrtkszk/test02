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

# UUIDが存在しない→弾く
if checkExist==None:
    print("UNE") # UUID Not Exist

# UUIDが存在する場合→進む
else:
    # DB全体で同じメールアドレスが存在するかの確認
    cursor.execute(f"SELECT * FROM {emailtable} WHERE email='{sys.argv[2]}'")
    SameEmailDB = cursor.fetchone()

    # 存在しない→変更する
    if SameEmailDB == None:
        cursor.execute(f"INSERT `{emailtable}` (`UUID`, `email`, `datetime`) VALUES ('{sys.argv[1]}', '{sys.argv[2]}', CURRENT_TIME)")
        print("CES") # Change Email Success
        print(SameEmailDB)

    # 存在する場合    
    else:
        # 同じUUIDで過去に同じメールアドレスが登録されているかの確認
        cursor.execute(f"SELECT * FROM {emailtable} WHERE UUID='{sys.argv[1]}' AND email='{sys.argv[2]}'")
        SameEmail = cursor.fetchone()
        print("test")

        # 同じUUIDで同じメールアドレスが存在しない場合→弾く
        if SameEmail == None:
            print("test1")
            print("NS") # Not Success
            print(SameEmail)
            # print(datetime_pwd)

        # 同じUUIDで同じメールアドレスが存在する場合→datetimeをアップデートする
        else:
            print("test2")
            cursor.execute(f"UPDATE `{emailtable}` (`datetime`) VALUES (CURRENT_TIME) WHERE UUID='{sys.argv[1]}' AND email='{sys.argv[2]}'")
            print("CES") # Change Email Success
            print(SameEmail)

# 保存を実行
connection.commit()

# 接続を閉じる
connection.close()
