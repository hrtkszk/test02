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
profiletable="basicProfileTable"

# TempPwdをチェック。
# TempPwdがOKなら、NewPwdを追加する。

# field name込みの場合はこっちを使う
# cursor = connection.cursor(MySQLdb.cursors.DictCursor)
cursor = connection.cursor()

cursor.execute(f"SELECT * FROM {pwdtable} WHERE UUID='{sys.argv[1]}'")

checkExist = cursor.fetchone()
if checkExist==None:
    print("UNE") # UUID Not Exist


else:
    # 最新パスワードの確認
    cursor.execute(f"SELECT password, MAX(datetime) FROM {pwdtable} WHERE UUID='{sys.argv[1]}'")
    # TempPwdDB = cursor.fetchone()[0]
    print(cursor.fetchone())

    # if TempPwdDB == sys.argv[2]:
    #     # 新パスワード登録
    #     cursor.execute(f"INSERT `{pwdtable}` (`UUID`, `password`, `datetime`) VALUES ('{sys.argv[1]}', '{sys.argv[3]}', CURRENT_TIME)")
    #     cursor.execute(f"SELECT RegistrationStatus FROM {profiletable} WHERE UUID='{sys.argv[1]}'")
    #     RegistrationStatus = cursor.fetchone()[0]
    #     print("PRC") # Password Reset Complete
    #     print(RegistrationStatus)
    #     print(TempPwdDB)
    #     # print(datetime_pwd)
    # else:
    #     print("TPNC") # Temp Password Not Correct
    #     # print(datetime_pwd)
    #     print(TempPwdDB)

# 保存を実行
connection.commit()

# 接続を閉じる
connection.close()
