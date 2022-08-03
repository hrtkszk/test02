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

# field name込みの場合はこっちを使う
# cursor = connection.cursor(MySQLdb.cursors.DictCursor)

cursor = connection.cursor()

# UUIDのチェック（外部からの変更防止）
cursor.execute(f"SELECT * FROM {profileTable} WHERE UUID='{sys.argv[1]}'")
checkExist = cursor.fetchone()

# UUIDが存在しない→初めての追加？（それとも外部からのアタックか）
if checkExist==None:
    try:
        cursor.execute(f" \
            INSERT INTO `{profileTable}` \
            SET \
                UUID='{sys.argv[1]}', \
                Area='{sys.argv[2]}', \
                Prefecture='{sys.argv[3]}', \
                City='{sys.argv[4]}', \
                Height='{sys.argv[5]}', \
                Style='{sys.argv[6]}', \
                Looks='{sys.argv[7]}', \
                Cup='{sys.argv[8]}', \
                BustSize='{sys.argv[9]}', \
                WestSize='{sys.argv[10]}', \
                HipSize='{sys.argv[11]}', \
                BloodType='{sys.argv[12]}', \
                Job='{sys.argv[13]}', \
                EduBack='{sys.argv[14]}', \
                BirthArea='{sys.argv[15]}', \
                BirthPrefecture='{sys.argv[16]}', \
                Zodiac='{sys.argv[17]}', \
                MarriageStatus='{sys.argv[18]}', \
                Kids='{sys.argv[19]}', \
                Tabacco='{sys.argv[20]}', \
                Alchole='{sys.argv[21]}', \
                Car='{sys.argv[22]}', \
                Interest='{sys.argv[23]}', \
                ProfilePicture='{sys.argv[24]}', \
                ProfileMessage='{sys.argv[25]}', \
                PreferedAge1='{sys.argv[26]}', \
                PreferedAge2='{sys.argv[27]}', \
                PreferedPersonality='{sys.argv[28]}', \
                Personality='{sys.argv[29]}', \
                SelfCute='{sys.argv[30]}', \
                SelfSexy='{sys.argv[31]}', \
                SelfKindness='{sys.argv[32]}', \
                SelfSmartness='{sys.argv[33]}', \
                SelfNeatness='{sys.argv[34]}', \
                SelfFashionable='{sys.argv[35]}', \
                SelfBrightness='{sys.argv[36]}', \
                SelfElegance='{sys.argv[37]}' \
        ")
        print("UPS") # Update Profile Success
    except (MySQLdb.Error, MySQLdb.Warning, IndexError, TypeError) as e:
        print(e)
        print("UPNS") # Update Profile Not Success

# UUIDが存在する場合→更新（変更ないところはそのままにしたいが・・・ロジックが必要）
else:
    try:
        cursor.execute(f" \
            UPDATE `{profileTable}` \
            SET \
                Area='{sys.argv[2]}', \
                Prefecture='{sys.argv[3]}', \
                City='{sys.argv[4]}', \
                Height='{sys.argv[5]}', \
                Style='{sys.argv[6]}', \
                Looks='{sys.argv[7]}', \
                Cup='{sys.argv[8]}', \
                BustSize='{sys.argv[9]}', \
                WestSize='{sys.argv[10]}', \
                HipSize='{sys.argv[11]}', \
                BloodType='{sys.argv[12]}', \
                Job='{sys.argv[13]}', \
                EduBack='{sys.argv[14]}', \
                BirthArea='{sys.argv[15]}', \
                BirthPrefecture='{sys.argv[16]}', \
                Zodiac='{sys.argv[17]}', \
                MarriageStatus='{sys.argv[18]}', \
                Kids='{sys.argv[19]}', \
                Tabacco='{sys.argv[20]}', \
                Alchole='{sys.argv[21]}', \
                Car='{sys.argv[22]}', \
                Interest='{sys.argv[23]}', \
                ProfilePicture='{sys.argv[24]}', \
                ProfileMessage='{sys.argv[25]}', \
                PreferedAge1='{sys.argv[26]}', \
                PreferedAge2='{sys.argv[27]}', \
                PreferedPersonality='{sys.argv[28]}', \
                Personality='{sys.argv[29]}', \
                SelfCute='{sys.argv[30]}', \
                SelfSexy='{sys.argv[31]}', \
                SelfKindness='{sys.argv[32]}', \
                SelfSmartness='{sys.argv[33]}', \
                SelfNeatness='{sys.argv[34]}', \
                SelfFashionable='{sys.argv[35]}', \
                SelfBrightness='{sys.argv[36]}', \
                SelfElegance='{sys.argv[37]}' \
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
