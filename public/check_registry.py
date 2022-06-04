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
    checkExist = cursor.fetchone()
    print(checkExist)
    try:
        RegistrationStatus = checkExist[1]
        print(RegistrationStatus)
    finally:
        print("")

    if checkExist==None:
        print("NRY") # Not Registered Yet
        if RegistrationStatus=="":
            print("EBNR") # Exist But Not Registered
    
    # 保存を実行
    connection.commit()

    # 接続を閉じる
    connection.close()
except (MySQLdb.Error, MySQLdb.Warning) as e:
    print(e)
