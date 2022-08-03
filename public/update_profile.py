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

profileTable="profileTable"
basicProfileTable="basicProfileTable"

# field name込みの場合はこっちを使う
# cursor = connection.cursor(MySQLdb.cursors.DictCursor)

cursor = connection.cursor()

# profileTableのUUIDのチェック（外部からの変更防止？）
cursor.execute(f"SELECT * FROM {profileTable} WHERE UUID='{sys.argv[1]}'")
checkExist = cursor.fetchone()

# UUIDが存在しない→初めての追加？（それとも外部からのアタックか）
if checkExist==None:
    try:
        cursor.execute(f" \
            UPDATE `{basicProfileTable}` \
            SET \
                nickname='{sys.argv[2]}', \
                gender='{sys.argv[3]}', \
                age='{sys.argv[4]}'\
            WHERE \
                UUID='{sys.argv[1]}' \
        ")
        cursor.execute(f" \
            INSERT INTO `{profileTable}` \
            SET \
                UUID='{sys.argv[1]}', \
                Area='{sys.argv[5]}', \
                Prefecture='{sys.argv[6]}', \
                City='{sys.argv[7]}', \
                Height='{sys.argv[8]}', \
                Style='{sys.argv[9]}', \
                Looks='{sys.argv[10]}', \
                Cup='{sys.argv[11]}', \
                BustSize='{sys.argv[12]}', \
                WestSize='{sys.argv[13]}', \
                HipSize='{sys.argv[14]}', \
                BloodType='{sys.argv[15]}', \
                Job='{sys.argv[16]}', \
                EduBack='{sys.argv[17]}', \
                BirthArea='{sys.argv[18]}', \
                BirthPrefecture='{sys.argv[19]}', \
                Zodiac='{sys.argv[20]}', \
                MarriageStatus='{sys.argv[21]}', \
                Kids='{sys.argv[22]}', \
                Tabacco='{sys.argv[23]}', \
                Alchole='{sys.argv[24]}', \
                Car='{sys.argv[25]}', \
                Interest='{sys.argv[26]}', \
                ProfilePicture='{sys.argv[27]}', \
                ProfileMessage='{sys.argv[28]}', \
                PreferedAge1='{sys.argv[29]}', \
                PreferedAge2='{sys.argv[30]}', \
                PreferedPersonality='{sys.argv[31]}', \
                Personality='{sys.argv[32]}', \
                SelfCute='{sys.argv[33]}', \
                SelfSexy='{sys.argv[34]}', \
                SelfKindness='{sys.argv[35]}', \
                SelfSmartness='{sys.argv[36]}', \
                SelfNeatness='{sys.argv[37]}', \
                SelfFashionable='{sys.argv[38]}', \
                SelfBrightness='{sys.argv[39]}', \
                SelfElegance='{sys.argv[40]}' \
        ")
        print("UPS") # Update Profile Success
    except (MySQLdb.Error, MySQLdb.Warning, IndexError, TypeError) as e:
        print(e)
        print("UPNS") # Update Profile Not Success

# UUIDが存在する場合→更新（変更ないところはそのままにしたいが・・・ロジックが必要）
else:
    try:
        cursor.execute(f" \
            UPDATE `{basicProfileTable}` \
            SET \
                nickname='{sys.argv[2]}', \
                gender='{sys.argv[3]}', \
                age='{sys.argv[4]}'\
            WHERE \
                UUID='{sys.argv[1]}' \
        ")
        cursor.execute(f" \
            UPDATE `{profileTable}` \
            SET \
                Area='{sys.argv[5]}', \
                Prefecture='{sys.argv[6]}', \
                City='{sys.argv[7]}', \
                Height='{sys.argv[8]}', \
                Style='{sys.argv[9]}', \
                Looks='{sys.argv[10]}', \
                Cup='{sys.argv[11]}', \
                BustSize='{sys.argv[12]}', \
                WestSize='{sys.argv[13]}', \
                HipSize='{sys.argv[14]}', \
                BloodType='{sys.argv[15]}', \
                Job='{sys.argv[16]}', \
                EduBack='{sys.argv[17]}', \
                BirthArea='{sys.argv[18]}', \
                BirthPrefecture='{sys.argv[19]}', \
                Zodiac='{sys.argv[20]}', \
                MarriageStatus='{sys.argv[21]}', \
                Kids='{sys.argv[22]}', \
                Tabacco='{sys.argv[23]}', \
                Alchole='{sys.argv[24]}', \
                Car='{sys.argv[25]}', \
                Interest='{sys.argv[26]}', \
                ProfilePicture='{sys.argv[27]}', \
                ProfileMessage='{sys.argv[28]}', \
                PreferedAge1='{sys.argv[29]}', \
                PreferedAge2='{sys.argv[30]}', \
                PreferedPersonality='{sys.argv[31]}', \
                Personality='{sys.argv[32]}', \
                SelfCute='{sys.argv[33]}', \
                SelfSexy='{sys.argv[34]}', \
                SelfKindness='{sys.argv[35]}', \
                SelfSmartness='{sys.argv[36]}', \
                SelfNeatness='{sys.argv[37]}', \
                SelfFashionable='{sys.argv[38]}', \
                SelfBrightness='{sys.argv[39]}', \
                SelfElegance='{sys.argv[40]}' \
            WHERE \
                UUID='{sys.argv[1]}' \
        ")
        print("UPS") # Update Profile Success
    except (MySQLdb.Error, MySQLdb.Warning, IndexError, TypeError) as e:
        print(e)
        print("UPNS") # Update Profile Not Success

# 保存を実行
connection.commit()

# 接続を閉じる
connection.close()
