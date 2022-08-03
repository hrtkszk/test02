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
                BirthPlace='{sys.argv[15]}', \
                Zodiac='{sys.argv[16]}', \
                MarriageStatus='{sys.argv[17]}', \
                Kids='{sys.argv[18]}', \
                Tabacco='{sys.argv[19]}', \
                Alchole='{sys.argv[20]}', \
                Car='{sys.argv[21]}', \
                Interest='{sys.argv[22]}', \
                ProfilePicture='{sys.argv[23]}', \
                ProfileMessage='{sys.argv[24]}', \
                PreferedAge1='{sys.argv[25]}', \
                PreferedAge2='{sys.argv[26]}', \
                PreferedPersonality='{sys.argv[27]}', \
                Personality='{sys.argv[28]}', \
                SelfCute='{sys.argv[29]}', \
                SelfSexy='{sys.argv[30]}', \
                SelfKindness='{sys.argv[31]}', \
                SelfSmartness='{sys.argv[32]}', \
                SelfNeatness='{sys.argv[33]}', \
                SelfFashionable='{sys.argv[34]}', \
                SelfBrightness='{sys.argv[35]}', \
                SelfElegance='{sys.argv[36]}' \
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
                BirthPlace='{sys.argv[15]}', \
                Zodiac='{sys.argv[16]}', \
                MarriageStatus='{sys.argv[17]}', \
                Kids='{sys.argv[18]}', \
                Tabacco='{sys.argv[19]}', \
                Alchole='{sys.argv[20]}', \
                Car='{sys.argv[21]}', \
                Interest='{sys.argv[22]}', \
                ProfilePicture='{sys.argv[23]}', \
                ProfileMessage='{sys.argv[24]}', \
                PreferedAge1='{sys.argv[25]}', \
                PreferedAge2='{sys.argv[26]}', \
                PreferedPersonality='{sys.argv[27]}', \
                Personality='{sys.argv[28]}', \
                SelfCute='{sys.argv[29]}', \
                SelfSexy='{sys.argv[30]}', \
                SelfKindness='{sys.argv[31]}', \
                SelfSmartness='{sys.argv[32]}', \
                SelfNeatness='{sys.argv[33]}', \
                SelfFashionable='{sys.argv[34]}', \
                SelfBrightness='{sys.argv[35]}', \
                SelfElegance='{sys.argv[36]}' \
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
