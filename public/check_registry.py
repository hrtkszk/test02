#!/usr/local/bin/python3.7
# coding:utf-8
# MySQLdbのインポート
import MySQLdb
import sys
import datetime
import SQLconfig

# データベースへの接続とカーソルの生成
try:
    connection = MySQLdb.connect(
        host=SQLconfig.host,
        user=SQLconfig.user,
        passwd=SQLconfig.passwd,
        db=SQLconfig.db)

    profiletable="basicProfileTable"

    #先に、UUIDが存在するか確認する。存在しない場合は、エラーを返す。

    # field name込みの場合はこっちを使う
    # cursor = connection.cursor(MySQLdb.cursors.DictCursor)
    cursor = connection.cursor()

    # 該当するUUIDのRegistrationStatusを1に変更する。
    cursor.execute(f"SELECT UUID, RegistrationStatus FROM {profiletable} WHERE UUID='{sys.argv[1]}'")
    # checkExist = cursor.fetchall()
    checkExist1 = cursor.fetchone()
    # print(type(len(checkExist)))
    # print(len(checkExist))
    print(checkExist1)
    print(type(checkExist1))
    print(len(checkExist1))
    # try:
    #     RegistrationStatus = cursor.fetchone()[1]
    #     print(RegistrationStatus)
    # except (MySQLdb.Error, MySQLdb.Warning) as e:
    #     print(e)

    if checkExist1=="None":
        print("NRY") # Not Registered Yet
        # if RegistrationStatus=="":
        #     print("EBNR") # Exist But Not Registered
    
    # 保存を実行
    connection.commit()

    # 接続を閉じる
    connection.close()
except (MySQLdb.Error, MySQLdb.Warning) as e:
    print(e)
