#!/usr/local/bin/python3.7
# coding:utf-8
# MySQLdbのインポート
import MySQLdb
import sys
import datetime
import SQLconfig

print("test0")

# 空白＝未設定とする（SQLエラー[list index out of range]対策）
if sys.argv[2]!=None:
    Prefecture=sys.argv[2]
else:
    Prefecture="None"
print("test2")

if sys.argv[3]!=None:
    City=sys.argv[3]
else:
    City="None"
print("test4")
if sys.argv[4]!=None:
    Hight=sys.argv[4]
else:
    Hight="None"
if sys.argv[5]!=None:
    Style=sys.argv[5]
else:
    Style="None"
if sys.argv[6]!=None:
    Looks=sys.argv[6]
else:
    Looks="None"
if sys.argv[7]!=None:
    Cup=sys.argv[7]
else:
    Cup="None"
if sys.argv[8]!=None:
    BustSize=sys.argv[8]
else:
    BustSize="None"
if sys.argv[9]!=None:
    WestSize=sys.argv[9]
else:
    WestSize="None"
if sys.argv[10]!=None:
    HipSize=sys.argv[10]
else:
    HipSize="None"
if sys.argv[11]!=None:
    BloodType=sys.argv[11]
else:
    BloodType="None"
if sys.argv[12]!=None:
    Job=sys.argv[12]
else:
    Job="None"
if sys.argv[13]!=None:
    EduBack=sys.argv[13]
else:
    EduBack="None"
if sys.argv[14]!=None:
    BirthPrefecture=sys.argv[14]
else:
    BirthPrefecture="None"
if sys.argv[15]!=None:
    Zodiac=sys.argv[15]
else:
    Zodiac="None"
if sys.argv[16]!=None:
    MarriageStatus=sys.argv[16]
else:
    MarriageStatus="None"
if sys.argv[17]!=None:
    Kids=sys.argv[17]
else:
    Kids="None"
print("test3")
if sys.argv[18]!=None:
    Tabacco=sys.argv[18]
else:
    Tabacco="None"
if sys.argv[19]!=None:
    Alchole=sys.argv[19]
else:
    Alchole="None"
if sys.argv[20]!=None:
    Car=sys.argv[20]
else:
    Car="None"
if sys.argv[21]!=None:
    Interest=sys.argv[21]
else:
    Interest="None"
if sys.argv[22]!=None:
    ProfilePicture=sys.argv[22]
else:
    ProfilePicture="None"
if sys.argv[23]!=None:
    ProfileMessage=sys.argv[23]
else:
    ProfileMessage="None"
if sys.argv[24]!=None:
    PreferedAge=sys.argv[24]
else:
    PreferedAge="None"
if sys.argv[25]!=None:
    PreferedPersonality=sys.argv[25]
else:
    PreferedPersonality="None"
if sys.argv[26]!=None:
    Personality=sys.argv[26]
else:
    Personality="None"
if sys.argv[27]!=None:
    SelfCute=sys.argv[27]
else:
    SelfCute="None"
if sys.argv[28]!=None:
    SelfSexy=sys.argv[28]
else:
    SelfSexy="None"
if sys.argv[29]!=None:
    SelfKindness=sys.argv[29]
else:
    SelfKindness="None"
if sys.argv[30]!=None:
    SelfSmartness=sys.argv[30]
else:
    SelfSmartness="None"
if sys.argv[31]!=None:
    SelfNeatness=sys.argv[31]
else:
    SelfNeatness="None"
if sys.argv[32]!=None:
    SelfFashionable=sys.argv[32]
else:
    SelfFashionable="None"
if sys.argv[33]!=None:
    SelfBrightness=sys.argv[33]
else:
    SelfBrightness="None"
if sys.argv[34]!=None:
    SelfElegance=sys.argv[34]
else:
    SelfElegance="None"

print("test")

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
    print("test1")
    try:
        cursor.execute(f" \
            INSERT INTO `{profileTable}` \
            SET \
                UUID='{sys.argv[1]}', \
                Prefecture='{Prefecture}', \
                City='{City}', \
                Hight='{Hight}', \
                Style='{Style}', \
                Looks='{Looks}', \
                Cup='{Cup}', \
                BustSize='{BustSize}', \
                WestSize='{WestSize}', \
                HipSize='{HipSize}', \
                BloodType='{BloodType}', \
                Job='{Job}', \
                EduBack='{EduBack}', \
                BirthPrefecture='{BirthPrefecture}', \
                Zodiac='{Zodiac}', \
                MarriageStatus='{MarriageStatus}', \
                Kids='{Kids}', \
                Tabacco='{Tabacco}', \
                Alchole='{Alchole}', \
                Car='{Car}', \
                Interest='{Interest}', \
                ProfilePicture='{ProfilePicture}', \
                ProfileMessage='{ProfileMessage}', \
                PreferedAge='{PreferedAge}', \
                PreferedPersonality='{PreferedPersonality}', \
                Personality='{Personality}', \
                SelfCute='{SelfCute}', \
                SelfSexy='{SelfSexy}', \
                SelfKindness='{SelfKindness}', \
                SelfSmartness='{SelfSmartness}', \
                SelfNeatness='{SelfNeatness}', \
                SelfFashionable='{SelfFashionable}', \
                SelfBrightness='{SelfBrightness}', \
                SelfElegance='{SelfElegance}' \
        ")
        print("UPS") # Update Profile Success
    except (MySQLdb.Error, MySQLdb.Warning, IndexError, TypeError) as e:
        print(e)
        print("UPNS") # Update Profile Not Success

# UUIDが存在する場合→更新（変更ないところはそのままにしたいが・・・ロジックが必要）
else:
    print("test2")
    cursor.execute(f" \
        UPDATE `{profileTable}` \
        SET \
            Prefecture='{Prefecture}', \
            City='{City}', \
            Hight='{Hight}', \
            Style='{Style}', \
            Looks='{Looks}', \
            Cup='{Cup}', \
            BustSize='{BustSize}', \
            WestSize='{WestSize}', \
            HipSize='{HipSize}', \
            BloodType='{BloodType}', \
            Job='{Job}', \
            EduBack='{EduBack}', \
            BirthPrefecture='{BirthPrefecture}', \
            Zodiac='{Zodiac}', \
            MarriageStatus='{MarriageStatus}', \
            Kids='{Kids}', \
            Tabacco='{Tabacco}', \
            Alchole='{Alchole}', \
            Car='{Car}', \
            Interest='{Interest}', \
            ProfilePicture='{ProfilePicture}', \
            ProfileMessage='{ProfileMessage}', \
            PreferedAge='{PreferedAge}', \
            PreferedPersonality='{PreferedPersonality}', \
            Personality='{Personality}', \
            SelfCute='{SelfCute}', \
            SelfSexy='{SelfSexy}', \
            SelfKindness='{SelfKindness}', \
            SelfSmartness='{SelfSmartness}', \
            SelfNeatness='{SelfNeatness}', \
            SelfFashionable='{SelfFashionable}', \
            SelfBrightness='{SelfBrightness}', \
            SelfElegance='{SelfElegance}' \
        WHERE \
            UUID='{sys.argv[1]}' \
    ")
    print("UPS") # Update Profile Success

# 保存を実行
connection.commit()

# 接続を閉じる
connection.close()
