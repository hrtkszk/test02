#!/usr/local/bin/python3.7
# coding:utf-8
# MySQLdbのインポート
import MySQLdb
import sys
import datetime
import SQLconfig
import json

print(sys.argv[1])
teststr0=print(sys.argv[1])
teststr1 = teststr0.replace("\'", "\"")
try:
    test=json.loads(teststr1)
    print(test)
except (IndexError, TypeError, ValueError) as e:
    print(e)

# # データベースへの接続とカーソルの生成
# connection = MySQLdb.connect(
#     host=SQLconfig.host,
#     user=SQLconfig.user,
#     passwd=SQLconfig.passwd,
#     db=SQLconfig.db)

# # profileTable="profileTable"
# # basicProfileTable="basicProfileTable"
# ProfileTable="ProfileTable1"

# # field name込みの場合はこっちを使う
# # cursor = connection.cursor(MySQLdb.cursors.DictCursor)

# cursor = connection.cursor()

# try:
#     cursor.execute(f" \
#         UPDATE `{ProfileTable}` \
#         SET \
#             NickName='{sys.argv[2]}', \
#             gender='{sys.argv[3]}', \
#             age='{sys.argv[4]}'\
#             UUID='{sys.argv[1]}', \
#             SettingArea='{sys.argv[5]}', \
#             Area='{sys.argv[6]}', \
#             Prefecture='{sys.argv[7]}', \
#             City='{sys.argv[8]}', \
#             Ward='{sys.argv[9]}', \
#             Height='{sys.argv[10]}', \
#             Style='{sys.argv[11]}', \
#             Looks='{sys.argv[12]}', \
#             Cup='{sys.argv[13]}', \
#             BustSize='{sys.argv[14]}', \
#             WestSize='{sys.argv[15]}', \
#             HipSize='{sys.argv[16]}', \
#             BloodType='{sys.argv[17]}', \
#             Job='{sys.argv[18]}', \
#             EduBack='{sys.argv[19]}', \
#             SettingBirthArea='{sys.argv[20]}', \
#             BirthArea='{sys.argv[21]}', \
#             BirthPrefecture='{sys.argv[22]}', \
#             Zodiac='{sys.argv[23]}', \
#             MarriageStatus='{sys.argv[24]}', \
#             Kids='{sys.argv[25]}', \
#             Tabacco='{sys.argv[26]}', \
#             Alchole='{sys.argv[27]}', \
#             Car='{sys.argv[28]}', \
#             Interest='{sys.argv[29]}', \
#             ProfilePicture='{sys.argv[30]}', \
#             ProfileMessage='{sys.argv[31]}', \
#             PreferedAge1='{sys.argv[32]}', \
#             PreferedAge2='{sys.argv[33]}', \
#             PreferedPersonality='{sys.argv[34]}', \
#             Personality='{sys.argv[35]}', \
#             SelfCute='{sys.argv[36]}', \
#             SelfSexy='{sys.argv[37]}', \
#             SelfKindness='{sys.argv[38]}', \
#             SelfSmartness='{sys.argv[39]}', \
#             SelfNeatness='{sys.argv[40]}', \
#             SelfFashionable='{sys.argv[41]}', \
#             SelfBrightness='{sys.argv[42]}', \
#             SelfElegance='{sys.argv[43]}' \
#         WHERE \
#             UUID='{sys.argv[1]}' \
#     ")
#     print("UPS") # Update Profile Success
# except (MySQLdb.Error, MySQLdb.Warning, IndexError, TypeError) as e:
#     print(e)
#     print("UPNS") # Update Profile Not Success

# # 保存を実行
# connection.commit()

# # 接続を閉じる
# connection.close()
