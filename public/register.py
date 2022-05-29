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

    # メールアドレスが存在するかチェック。存在しなければ、アドレス・PW・UUID追加に進む。存在したら、同じUUIDでパスワードを追加する。

    # field name込みの場合はこっちを使う
    # cursor = connection.cursor(MySQLdb.cursors.DictCursor)
    cursor = connection.cursor()

    # 該当するUUIDのRegistrationStatusを1に変更する。
    cursor.execute(f"INSERT `{SQLconfig.db}`.`{profiletable}` (`UUID`, `nickname`, `gender`, `age`, `RegistrationStatus`, `ageConfirmation`) VALUES ('{sys.argv[1]}', 'nickname1', 'm', '20', '1', '0')")

    print("RC") # Registration Complete

    # 保存を実行
    connection.commit()

    # 接続を閉じる
    connection.close()
except (MySQLdb.Error, MySQLdb.Warning) as e:
    print(e)
