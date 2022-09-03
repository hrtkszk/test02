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

ProfileSearchSetting1="ProfileSearchSetting1"
ProfileTable1="ProfileTable1"

# field name込みの場合はこっちを使う
# cursor = connection.cursor(MySQLdb.cursors.DictCursor)
cursor = connection.cursor()

# 自分の検索設定の入手
try:
    cursor.execute(f"SELECT * FROM {ProfileSearchSetting1} WHERE UUID='{sys.argv[1]}'")
    field_names = [i[0] for i in cursor.description]
    profileSearchSetting = [int.from_bytes(i, "big") if isinstance(i, bytes) else i for i in cursor.fetchone()]
    DictPSS = dict(zip(field_names, profileSearchSetting))
    DictPSS1 = {}
    for k, v in DictPSS.items():
        if k[:2] == "PS":
            if v != 0:
                DictPSS1[k[2:]] = v
        else:
            DictPSS1[k] = v
    AgeConfNo = 0
    OrderNo = 0
    GenderNo = 0
    AgeNo = 0
    ProfilePictureNo = 0
    ProfileMessageNo = 0
    HeightNo = 0
    StyleNo = 0
    LooksNo = 0
    CupNo = 0
    BloodTypeNo = 0
    JobNo = 0
    EduBackNo = 0
    ZodiacNo = 0
    MarriageStatusNo = 0
    KidsNo = 0
    TabaccoNo = 0
    CarNo = 0
    InterestNo = 0
    PersonalityNo = 0
    AnnuIncomeNo = 0
    CuteNo = 0
    SexyNo = 0
    KindnessNo = 0
    SmartnessNo = 0
    NeatnessNo = 0
    FashionableNo = 0
    BrightnessNo = 0
    EleganceNo = 0
    for k in DictPSS1.keys():
        if ("AgeConf" in k): 
            AgeConfNo += 1
            continue
        if ("Order" in k): 
            OrderNo += 1
            continue
        if ("Gender" in k): 
            GenderNo += 1
            continue
        if ("Age" in k): 
            AgeNo += 1
            continue
        if ("ProfilePicture" in k): 
            ProfilePictureNo += 1
            continue
        if ("ProfileMessage" in k): 
            ProfileMessageNo += 1
            continue
        if ("Height" in k): 
            HeightNo += 1
            continue
        if ("Style" in k): 
            StyleNo += 1
            continue
        if ("Looks" in k): 
            LooksNo += 1
            continue
        if ("Cup" in k): 
            CupNo += 1
            continue
        if ("BloodType" in k): 
            BloodTypeNo += 1
            continue
        if ("Job" in k): 
            JobNo += 1
            continue
        if ("EduBack" in k): 
            EduBackNo += 1
            continue
        if ("Zodiac" in k): 
            ZodiacNo += 1
            continue
        if ("MarriageStatus" in k): 
            MarriageStatusNo += 1
            continue
        if ("Kids" in k): 
            KidsNo += 1
            continue
        if ("Tabacco" in k): 
            TabaccoNo += 1
            continue
        if ("Car" in k): 
            CarNo += 1
            continue
        if ("Interest" in k): 
            InterestNo += 1
            continue
        if ("Personality" in k): 
            PersonalityNo += 1
            continue
        if ("AnnuIncome" in k): 
            AnnuIncomeNo += 1
            continue
        if ("Cute" in k): 
            CuteNo += 1
            continue
        if ("Sexy" in k): 
            SexyNo += 1
            continue
        if ("Kindness" in k): 
            KindnessNo += 1
            continue
        if ("Smartness" in k): 
            SmartnessNo += 1
            continue
        if ("Neatness" in k): 
            NeatnessNo += 1
            continue
        if ("Fashionable" in k): 
            FashionableNo += 1
            continue
        if ("Brightness" in k): 
            BrightnessNo += 1
            continue
        if ("Elegance" in k): 
            EleganceNo += 1
            continue
    print("AgeConfNo:" ,AgeConfNo)
    print("OrderNo:" ,OrderNo)
    print("GenderNo:" ,GenderNo)
    print("AgeNo:" ,AgeNo)
    print("ProfilePictureNo:" ,ProfilePictureNo)
    print("ProfileMessageNo:" ,ProfileMessageNo)
    print("HeightNo:" ,HeightNo)
    print("StyleNo:" ,StyleNo)
    print("LooksNo:" ,LooksNo)
    print("CupNo:" ,CupNo)
    print("BloodTypeNo:" ,BloodTypeNo)
    print("JobNo:" ,JobNo)
    print("EduBackNo:" ,EduBackNo)
    print("ZodiacNo:" ,ZodiacNo)
    print("MarriageStatusNo:" ,MarriageStatusNo)
    print("KidsNo:" ,KidsNo)
    print("TabaccoNo:" ,TabaccoNo)
    print("CarNo:" ,CarNo)
    print("InterestNo:" ,InterestNo)
    print("PersonalityNo:" ,PersonalityNo)
    print("AnnuIncomeNo:" ,AnnuIncomeNo)
    print("CuteNo:" ,CuteNo)
    print("SexyNo:" ,SexyNo)
    print("KindnessNo:" ,KindnessNo)
    print("SmartnessNo:" ,SmartnessNo)
    print("NeatnessNo:" ,NeatnessNo)
    print("FashionableNo:" ,FashionableNo)
    print("BrightnessNo:" ,BrightnessNo)
    print("EleganceNo:" ,EleganceNo)

except (MySQLdb.Error, MySQLdb.Warning, IndexError, TypeError, KeyError) as e:
    print(e)

# 検索設定に基づいたProfileTable1の検索
try:
    cursor.execute(f" \
        SELECT * \
        FROM {ProfileTable1} \
        WHERE \
            UUID != '{sys.argv[1]}' \
    ")
except (MySQLdb.Error, MySQLdb.Warning, IndexError, TypeError) as e:
    print(e)

# 本当は、検索設定に基づいて検索したい。（SQL上で対応。そのときに自分のUUIDのsys.argv[1]を使う）
# 複数のテーブルに跨るので、テーブルの合体などが必要。
# cursor.execute(f"SELECT UUID, nickname, gender, age FROM {table_name} WHERE UUID != '{sys.argv[1]}'")

# num_fields = len(cursor.description)
# field_names = [i[0] for i in cursor.description]
# print(field_names)

# for row in cursor:
#     row1 = list()
#     for item in row:
#         if str(type(item)) == "<class 'datetime.datetime'>":
#             # 時間を文字列に変換（php側の処理対策）
#             row1.append(str(item.strftime("%Y/%m/%d %H:%M:%S")))
#         elif str(type(item)) == "<class 'str'>":
#             # phpでの文字列から配列への変換時の誤動作防止用前処理
#             item = item.replace("'","’")
#             row1.append(item.replace(', ', '，'))
#         else:
#             row1.append(item)
#     # printでのpythonからphpへの受け渡し
#     print (row1)

# 保存を実行
connection.commit()

# 接続を閉じる
connection.close()
