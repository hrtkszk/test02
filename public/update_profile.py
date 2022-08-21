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
                SettingArea='{sys.argv[5]}', \
                Area='{sys.argv[6]}', \
                Prefecture='{sys.argv[7]}', \
                City='{sys.argv[8]}', \
                Ward='{sys.argv[9]}', \
                Height='{sys.argv[10]}', \
                Style='{sys.argv[11]}', \
                Looks='{sys.argv[12]}', \
                Cup='{sys.argv[13]}', \
                BustSize='{sys.argv[14]}', \
                WestSize='{sys.argv[15]}', \
                HipSize='{sys.argv[16]}', \
                BloodType='{sys.argv[17]}', \
                Job='{sys.argv[18]}', \
                EduBack='{sys.argv[19]}', \
                BirthArea='{sys.argv[20]}', \
                BirthPrefecture='{sys.argv[21]}', \
                Zodiac='{sys.argv[22]}', \
                MarriageStatus='{sys.argv[23]}', \
                Kids='{sys.argv[24]}', \
                Tabacco='{sys.argv[25]}', \
                Alchole='{sys.argv[26]}', \
                Car='{sys.argv[27]}', \
                Interest='{sys.argv[28]}', \
                ProfilePicture='{sys.argv[29]}', \
                ProfileMessage='{sys.argv[30]}', \
                PreferedAge1='{sys.argv[31]}', \
                PreferedAge2='{sys.argv[32]}', \
                PreferedPersonality='{sys.argv[33]}', \
                Personality='{sys.argv[34]}', \
                SelfCute='{sys.argv[35]}', \
                SelfSexy='{sys.argv[36]}', \
                SelfKindness='{sys.argv[37]}', \
                SelfSmartness='{sys.argv[38]}', \
                SelfNeatness='{sys.argv[39]}', \
                SelfFashionable='{sys.argv[40]}', \
                SelfBrightness='{sys.argv[41]}', \
                SelfElegance='{sys.argv[42]}' \
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
                SettingArea='{sys.argv[5]}', \
                Area='{sys.argv[6]}', \
                Prefecture='{sys.argv[7]}', \
                City='{sys.argv[8]}', \
                Ward='{sys.argv[9]}', \
                Height='{sys.argv[10]}', \
                Style='{sys.argv[11]}', \
                Looks='{sys.argv[12]}', \
                Cup='{sys.argv[13]}', \
                BustSize='{sys.argv[14]}', \
                WestSize='{sys.argv[15]}', \
                HipSize='{sys.argv[16]}', \
                BloodType='{sys.argv[17]}', \
                Job='{sys.argv[18]}', \
                EduBack='{sys.argv[19]}', \
                BirthArea='{sys.argv[20]}', \
                BirthPrefecture='{sys.argv[21]}', \
                Zodiac='{sys.argv[22]}', \
                MarriageStatus='{sys.argv[23]}', \
                Kids='{sys.argv[24]}', \
                Tabacco='{sys.argv[25]}', \
                Alchole='{sys.argv[26]}', \
                Car='{sys.argv[27]}', \
                Interest='{sys.argv[28]}', \
                ProfilePicture='{sys.argv[29]}', \
                ProfileMessage='{sys.argv[30]}', \
                PreferedAge1='{sys.argv[31]}', \
                PreferedAge2='{sys.argv[32]}', \
                PreferedPersonality='{sys.argv[33]}', \
                Personality='{sys.argv[34]}', \
                SelfCute='{sys.argv[35]}', \
                SelfSexy='{sys.argv[36]}', \
                SelfKindness='{sys.argv[37]}', \
                SelfSmartness='{sys.argv[38]}', \
                SelfNeatness='{sys.argv[39]}', \
                SelfFashionable='{sys.argv[40]}', \
                SelfBrightness='{sys.argv[41]}', \
                SelfElegance='{sys.argv[42]}' \
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
