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
    pwdtable="PwdSettings"

    #先に、UUIDが存在するか確認する。存在しない場合は、エラーを返す。

    # field name込みの場合はこっちを使う
    # cursor = connection.cursor(MySQLdb.cursors.DictCursor)
    cursor = connection.cursor()

    # 該当するUUIDのRegistrationStatusを1に変更する。
    cursor.execute(f"INSERT `{SQLconfig.db}`.`{profiletable}` (`UUID`, `nickname`, `gender`, `age`, `RegistrationStatus`, `ageConfirmation`) VALUES ('{sys.argv[1]}', '{sys.argv[2]}', '{sys.argv[3]}', '{sys.argv[4]}', '1', '0')")

    print("RC") # Registration Complete

    # 保存を実行
    connection.commit()

    # 接続を閉じる
    connection.close()
except (MySQLdb.Error, MySQLdb.Warning) as e:
    print(e)
