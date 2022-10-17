#!/usr/local/bin/python3.7
# coding:utf-8
# MySQLdbのインポート
import MySQLdb
import sys
import datetime
import SQLconfig

# try:
    # GenderInt=int(sys.argv[3])
    # Gender=""
    # if GenderInt==0: Gender += "Gender0=1,"
    # else: Gender += "Gender0=0,"
    # if GenderInt==1: Gender += "Gender1=1,"
    # else: Gender += "Gender1=0,"
    # if GenderInt==2: Gender += "Gender2=1,"
    # else: Gender += "Gender2=0,"
    # if GenderInt==3: Gender += "Gender3=1,"
    # else: Gender += "Gender3=0,"
    # if GenderInt==4: Gender += "Gender4=1,"
    # else: Gender += "Gender4=0,"
    # if GenderInt==5: Gender += "Gender5=1,"
    # else: Gender += "Gender5=0,"
    # if GenderInt==6: Gender += "Gender6=1,"
    # else: Gender += "Gender6=0,"
    # if GenderInt==7: Gender += "Gender7=1,"
    # else: Gender += "Gender7=0,"

    # Age=int(sys.argv[4])
    # AgeRange="" SQLで勝手に計算されるようにした
    # if 18 <= Age and Age <= 120: AgeRange += "Age0=0,"
    # else: AgeRange += "Age0=1,"
    # if 18 <= Age and Age <= 19: AgeRange += "Age1=1,"
    # else: AgeRange += "Age1=0,"
    # if 20 <= Age and Age <= 23: AgeRange += "Age2=1,"
    # else: AgeRange += "Age2=0,"
    # if 24 <= Age and Age <= 26: AgeRange += "Age3=1,"
    # else: AgeRange += "Age3=0,"
    # if 27 <= Age and Age <= 29: AgeRange += "Age4=1,"
    # else: AgeRange += "Age4=0,"
    # if 30 <= Age and Age <= 33: AgeRange += "Age5=1,"
    # else: AgeRange += "Age5=0,"
    # if 34 <= Age and Age <= 36: AgeRange += "Age6=1,"
    # else: AgeRange += "Age6=0,"
    # if 37 <= Age and Age <= 39: AgeRange += "Age7=1,"
    # else: AgeRange += "Age7=0,"
    # if 40 <= Age and Age <= 43: AgeRange += "Age8=1,"
    # else: AgeRange += "Age8=0,"
    # if 44 <= Age and Age <= 46: AgeRange += "Age9=1,"
    # else: AgeRange += "Age9=0,"
    # if 47 <= Age and Age <= 49: AgeRange += "Age10=1,"
    # else: AgeRange += "Age10=0,"
    # if 50 <= Age and Age <= 53: AgeRange += "Age11=1,"
    # else: AgeRange += "Age11=0,"
    # if 54 <= Age and Age <= 56: AgeRange += "Age12=1,"
    # else: AgeRange += "Age12=0,"
    # if 57 <= Age and Age <= 59: AgeRange += "Age13=1,"
    # else: AgeRange += "Age13=0,"
    # if 60 <= Age and Age <= 63: AgeRange += "Age14=1,"
    # else: AgeRange += "Age14=0,"
    # if 64 <= Age and Age <= 66: AgeRange += "Age15=1,"
    # else: AgeRange += "Age15=0,"
    # if 67 <= Age and Age <= 69: AgeRange += "Age16=1,"
    # else: AgeRange += "Age16=0,"
    # if 70 <= Age: AgeRange += "Age17=1,"
    # else: AgeRange += "Age17=0,"
    # データベースへの接続とカーソルの生成
# except (ValueError, Exception) as e:
#     print(e)


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
    cursor.execute(f"INSERT `{BSS}` SET UUID='{sys.argv[1]}'")
except (MySQLdb.Error, MySQLdb.Warning) as e:
    print(e)


print("RC") # Registration Complete

# 保存を実行
connection.commit()

# 接続を閉じる
connection.close()
