#!/usr/local/bin/python3.7
# coding:utf-8
# MySQLdbのインポート
import MySQLdb
import sys
import datetime
import SQLconfig

connection = MySQLdb.connect(
    host=SQLconfig.host,
    user=SQLconfig.user,
    passwd=SQLconfig.passwd,
    db=SQLconfig.db)

# profiletable="basicProfileTable"
# pwdtable="PwdSettings"
ProfileTable="ProfileTable"
PSS="ProfileSearchSetting"
BSS="BoshuSearchSetting"

#先に、UUIDが存在するか確認する。存在しない場合は、エラーを返す。

# field name込みの場合はこっちを使う
# cursor = connection.cursor(MySQLdb.cursors.DictCursor)
cursor = connection.cursor()

try:
    # 該当するUUIDのRegistrationStatusを1に変更する。
    cursor.execute(f" \
        INSERT `{ProfileTable}` \
        SET \
            UUID='{sys.argv[1]}', \
            NickName='{sys.argv[2]}', \
            Age={sys.argv[4]}, \
            RegistrationDateTime=CURRENT_TIME, \
            LastAccessDateTime=CURRENT_TIME, \
            Gender={sys.argv[3]}, \
            RegistrationStatus=1\
        ")
except (MySQLdb.Error, MySQLdb.Warning) as e:
    print(e)

try:
    cursor.execute(f"INSERT `{PSS}` SET UUID='{sys.argv[1]}'")
except (MySQLdb.Error, MySQLdb.Warning) as e:
    print(e)

try:
    cursor.execute(f" \
        INSERT `{BSS}` \
        SET \
            UUID='{sys.argv[1]}', \
            BSGender='0', \
            BSBoshuCategory='0', \
            BSAgeRange='0_0' \
        ")
except (MySQLdb.Error, MySQLdb.Warning) as e:
    print(e)


print("RC") # Registration Complete

# 保存を実行
connection.commit()

# 接続を閉じる
connection.close()
