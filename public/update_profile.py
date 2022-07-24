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
print("test")
cursor.execute(f"SELECT * FROM {profileTable} WHERE UUID='{sys.argv[1]}'")
checkExist = cursor.fetchone()

# UUIDが存在しない→初めての追加？（それとも外部からのアタックか）
if checkExist==None:
    print("test1")
    cursor.execute(f" \
        INSERT `{profileTable}` \
        SET \
            UUID='{sys.argv[1]}' \
            Prefecture='{sys.argv[2]}' \
            City='{sys.argv[3]}' \
            Height='{sys.argv[4]}' \
            Style='{sys.argv[5]}' \
            Looks='{sys.argv[6]}' \
            Cup='{sys.argv[7]}' \
            BustSize='{sys.argv[8]}' \
            WestSize='{sys.argv[9]}' \
            HipSize='{sys.argv[10]}' \
            BloodType='{sys.argv[11]}' \
            Job='{sys.argv[12]}' \
            EduBack='{sys.argv[13]}' \
            BirthPrefecture='{sys.argv[14]}' \
            Zodiac='{sys.argv[15]}' \
            MarriageStatus='{sys.argv[16]}' \
            Kids='{sys.argv[17]}' \
            Tabacco='{sys.argv[18]}' \
            Alchole='{sys.argv[19]}' \
            Car='{sys.argv[20]}' \
            Interest='{sys.argv[21]}' \
            ProfilePicture='{sys.argv[22]}' \
            ProfileMessage='{sys.argv[23]}' \
            PreferedAge='{sys.argv[24]}' \
            PreferedPersonality='{sys.argv[25]}' \
            Personality='{sys.argv[26]}' \
            SelfCute='{sys.argv[27]}' \
            SelfSexy='{sys.argv[28]}' \
            SelfKindness='{sys.argv[29]}' \
            SelfSmartness='{sys.argv[30]}' \
            SelfNeatness='{sys.argv[31]}' \
            SelfFashionable='{sys.argv[32]}' \
            SelfBrightness='{sys.argv[33]}' \
            SelfElegance='{sys.argv[34]}' \
    ")
    print("UPS") # Update Profile Success

# UUIDが存在する場合→更新（変更ないところはそのままにしたいが・・・ロジックが必要）
else:
    print("test2")
    cursor.execute(f" \
        UPDATE `{profileTable}` \
        SET \
            Prefecture='{sys.argv[2]}' \
            City='{sys.argv[3]}' \
            Height='{sys.argv[4]}' \
            Style='{sys.argv[5]}' \
            Looks='{sys.argv[6]}' \
            Cup='{sys.argv[7]}' \
            BustSize='{sys.argv[8]}' \
            WestSize='{sys.argv[9]}' \
            HipSize='{sys.argv[10]}' \
            BloodType='{sys.argv[11]}' \
            Job='{sys.argv[12]}' \
            EduBack='{sys.argv[13]}' \
            BirthPrefecture='{sys.argv[14]}' \
            Zodiac='{sys.argv[15]}' \
            MarriageStatus='{sys.argv[16]}' \
            Kids='{sys.argv[17]}' \
            Tabacco='{sys.argv[18]}' \
            Alchole='{sys.argv[19]}' \
            Car='{sys.argv[20]}' \
            Interest='{sys.argv[21]}' \
            ProfilePicture='{sys.argv[22]}' \
            ProfileMessage='{sys.argv[23]}' \
            PreferedAge='{sys.argv[24]}' \
            PreferedPersonality='{sys.argv[25]}' \
            Personality='{sys.argv[26]}' \
            SelfCute='{sys.argv[27]}' \
            SelfSexy='{sys.argv[28]}' \
            SelfKindness='{sys.argv[29]}' \
            SelfSmartness='{sys.argv[30]}' \
            SelfNeatness='{sys.argv[31]}' \
            SelfFashionable='{sys.argv[32]}' \
            SelfBrightness='{sys.argv[33]}' \
            SelfElegance='{sys.argv[34]}' \
        WHERE \
            UUID='{sys.argv[1]}' \
    ")
    print("UPS") # Update Profile Success

# 保存を実行
connection.commit()

# 接続を閉じる
connection.close()
