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

pwdtable="PwdSettings"

# OldPwdをチェック。
# OldPwdがOKなら、NewPwdを追加する。

# field name込みの場合はこっちを使う
# cursor = connection.cursor(MySQLdb.cursors.DictCursor)

cursor = connection.cursor()

try:
    cursor.execute(f"SELECT * FROM {pwdtable} WHERE UUID='{sys.argv[1]}'")
    checkExist = cursor.fetchone()
except Exception as e:
    print(e)
    

if checkExist==None:
    print("UNE") # UUID Not Exist
else:
    try:
        # 最新パスワードの確認
        cursor.execute(f"SELECT password FROM {pwdtable} WHERE UUID='{sys.argv[1]}' AND datetime = (SELECT MAX(datetime) FROM {pwdtable} WHERE UUID='{sys.argv[1]}')")
        OldPwdDB = cursor.fetchone()[0]
    except Exception as e:
        print(e)
    if OldPwdDB == sys.argv[2]:
        try:
            # 新パスワード登録
            cursor.execute(f"INSERT `{pwdtable}` (`UUID`, `password`, `datetime`) VALUES ('{sys.argv[1]}', '{sys.argv[3]}', CURRENT_TIME)")
        except Exception as e:
            print(e)

        print("CPS") # Change Password Success
        print(OldPwdDB)
        # print(datetime_pwd)
    else:
        print("NS") # Not Success
        # print(datetime_pwd)
        print(OldPwdDB)

# 保存を実行
connection.commit()

# 接続を閉じる
connection.close()
