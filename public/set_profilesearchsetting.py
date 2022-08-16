#!/usr/local/bin/python3.7
# coding:utf-8
# MySQLdbのインポート
import MySQLdb
import sys, json
import datetime
import SQLconfig

# # データベースへの接続とカーソルの生成
# connection = MySQLdb.connect(
#     host=SQLconfig.host,
#     user=SQLconfig.user,
#     passwd=SQLconfig.passwd,
#     db=SQLconfig.db)

# ProfileSearchSetting="ProfileSearchSetting"

# # field name込みの場合はこっちを使う
# # cursor = connection.cursor(MySQLdb.cursors.DictCursor)

# cursor = connection.cursor()

# # profileTableのUUIDのチェック（外部からの変更防止？）
# cursor.execute(f"SELECT * FROM {ProfileSearchSetting} WHERE UUID='{sys.argv[1]}'")
# checkExist = cursor.fetchone()

# # UUIDが存在しない→初めての追加？（それとも外部からのアタックか）
# if checkExist==None:
#     try:
#         cursor.execute(f" \
#             INSERT INTO `{ProfileSearchSetting}` \
#             SET \
#                 UUID='{sys.argv[1]}', \
#                 PSGender=('{sys.argv[2]}'), \
#                 PSAge1='{sys.argv[3]}', \
#                 PSAge2='{sys.argv[4]}'\
#                 PSArea=('{sys.argv[5]}'), \
#                 PSHeight1='{sys.argv[6]}', \
#                 PSHeight2='{sys.argv[7]}', \
#                 PSStyle=('{sys.argv[8]}'), \
#                 PSLooks=('{sys.argv[9]}'), \
#                 PSCup1='{sys.argv[10]}', \
#                 PSCup2='{sys.argv[11]}', \
#                 PSBust1='{sys.argv[12]}', \
#                 PSBust2='{sys.argv[13]}', \
#                 PSWest1='{sys.argv[14]}', \
#                 PSWest2='{sys.argv[15]}', \
#                 PSHip1='{sys.argv[16]}', \
#                 PSHip2='{sys.argv[17]}', \
#                 PSBloodType=('{sys.argv[18]}'), \
#                 PSJob=('{sys.argv[19]}'), \
#                 PSEduBack=('{sys.argv[20]}'), \
#                 PSBirthArea=('{sys.argv[21]}'), \
#                 PSZodiac=('{sys.argv[22]}'), \
#                 PSMarriageStatus=('{sys.argv[23]}'), \
#                 PSKids=('{sys.argv[24]}'), \
#                 PSTabacco=('{sys.argv[25]}'), \
#                 PSAlchole=('{sys.argv[26]}'), \
#                 PSCar=('{sys.argv[27]}'), \
#                 PSProfilePicture=('{sys.argv[28]}'), \
#                 PSProfileMessage=('{sys.argv[29]}'), \
#                 PSCute1='{sys.argv[30]}', \
#                 PSCute2='{sys.argv[31]}', \
#                 PSSexy1='{sys.argv[32]}', \
#                 PSSexy2='{sys.argv[33]}', \
#                 PSKindness1='{sys.argv[34]}', \
#                 PSKindness2='{sys.argv[35]}', \
#                 PSSmartness1='{sys.argv[36]}', \
#                 PSSmartness2='{sys.argv[37]}', \
#                 PSNeatness1='{sys.argv[38]}', \
#                 PSNeatness2='{sys.argv[39]}', \
#                 PSFashionable1='{sys.argv[30]}', \
#                 PSFashionable2='{sys.argv[31]}', \
#                 PSBrightness1='{sys.argv[32]}', \
#                 PSBrightness2='{sys.argv[33]}', \
#                 PSElegance1='{sys.argv[34]}', \
#                 PSElegance2='{sys.argv[35]}', \
#                 PSInterest=('{sys.argv[36]}'), \
#                 PSPersonality=('{sys.argv[37]})'\
#         ")
#         print("SPSSS") # Set Profile Search Setting Success
#     except (MySQLdb.Error, MySQLdb.Warning, IndexError, TypeError) as e:
#         print(e)
#         print("SPSSNS") # Set Profile Search Setting Not Success

# # UUIDが存在する場合→更新（変更ないところはそのままにしたいが・・・ロジックが必要）
# else:
#     try:
#         cursor.execute(f" \
#             UPDATE `{ProfileSearchSetting}` \
#             SET \
#                 PSGender=('{sys.argv[2]}'), \
#                 PSAge1='{sys.argv[3]}', \
#                 PSAge2='{sys.argv[4]}'\
#                 PSArea=('{sys.argv[5]}'), \
#                 PSHeight1='{sys.argv[6]}', \
#                 PSHeight2='{sys.argv[7]}', \
#                 PSStyle=('{sys.argv[8]}'), \
#                 PSLooks=('{sys.argv[9]}'), \
#                 PSCup1='{sys.argv[10]}', \
#                 PSCup2='{sys.argv[11]}', \
#                 PSBust1='{sys.argv[12]}', \
#                 PSBust2='{sys.argv[13]}', \
#                 PSWest1='{sys.argv[14]}', \
#                 PSWest2='{sys.argv[15]}', \
#                 PSHip1='{sys.argv[16]}', \
#                 PSHip2='{sys.argv[17]}', \
#                 PSBloodType=('{sys.argv[18]}'), \
#                 PSJob=('{sys.argv[19]}'), \
#                 PSEduBack=('{sys.argv[20]}'), \
#                 PSBirthArea=('{sys.argv[21]}'), \
#                 PSZodiac=('{sys.argv[22]}'), \
#                 PSMarriageStatus=('{sys.argv[23]}'), \
#                 PSKids=('{sys.argv[24]}'), \
#                 PSTabacco=('{sys.argv[25]}'), \
#                 PSAlchole=('{sys.argv[26]}'), \
#                 PSCar=('{sys.argv[27]}'), \
#                 PSProfilePicture=('{sys.argv[28]}'), \
#                 PSProfileMessage=('{sys.argv[29]}'), \
#                 PSCute1='{sys.argv[30]}', \
#                 PSCute2='{sys.argv[31]}', \
#                 PSSexy1='{sys.argv[32]}', \
#                 PSSexy2='{sys.argv[33]}', \
#                 PSKindness1='{sys.argv[34]}', \
#                 PSKindness2='{sys.argv[35]}', \
#                 PSSmartness1='{sys.argv[36]}', \
#                 PSSmartness2='{sys.argv[37]}', \
#                 PSNeatness1='{sys.argv[38]}', \
#                 PSNeatness2='{sys.argv[39]}', \
#                 PSFashionable1='{sys.argv[30]}', \
#                 PSFashionable2='{sys.argv[31]}', \
#                 PSBrightness1='{sys.argv[32]}', \
#                 PSBrightness2='{sys.argv[33]}', \
#                 PSElegance1='{sys.argv[34]}', \
#                 PSElegance2='{sys.argv[35]}', \
#                 PSInterest=('{sys.argv[36]}'), \
#                 PSPersonality=('{sys.argv[37]})'\
#             WHERE \
#                 UUID='{sys.argv[1]}' \
#         ")
#         print("SPSSS") # Set Profile Search Setting Success
#     except (MySQLdb.Error, MySQLdb.Warning, IndexError, TypeError) as e:
#         print(e)
#         print("SPSSNS") # Set Profile Search Setting Not Success

# # 保存を実行
# connection.commit()

# # 接続を閉じる
# connection.close()
print(sys.argv[2])
print(sys.argv[3])
print(sys.argv[4])
print(sys.argv[5])
# print(json.loads(sys.argv[2]))
# try:
#     PSGender=json.loads(sys.argv[2])
#     PSArea=json.loads(sys.argv[5])

#     print(f" \
#         UUID='{sys.argv[1]}', \
#         PSGender='{PSGender}', \
#         PSAge1='{sys.argv[3]}', \
#         PSAge2='{sys.argv[4]}'\
#         PSArea='{PSArea}' \
#     ")
# except (json.Error, json.Warning, IndexError, TypeError) as e:
#     print(e)