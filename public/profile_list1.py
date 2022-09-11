#!/usr/local/bin/python3.7
# coding:utf-8
# MySQLdbのインポート
import MySQLdb
import sys
import datetime
import SQLconfig
import json

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
                # PSを削除
                DictPSS1[k[2:]] = v
        else:
            DictPSS1[k] = v
    print(json.dumps(DictPSS1))
except (MySQLdb.Error, MySQLdb.Warning, IndexError, TypeError, KeyError, ValueError) as e:
    print("Obtain Profile Search Setting:", e)

try:
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
    # いくつ検索する必要があるかカウント
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
    # print("AgeConfNo:" ,AgeConfNo)
    # print("OrderNo:" ,OrderNo)
    # print("GenderNo:" ,GenderNo)
    # print("AgeNo:" ,AgeNo)
    # print("ProfilePictureNo:" ,ProfilePictureNo)
    # print("ProfileMessageNo:" ,ProfileMessageNo)
    # print("HeightNo:" ,HeightNo)
    # print("StyleNo:" ,StyleNo)
    # print("LooksNo:" ,LooksNo)
    # print("CupNo:" ,CupNo)
    # print("BloodTypeNo:" ,BloodTypeNo)
    # print("JobNo:" ,JobNo)
    # print("EduBackNo:" ,EduBackNo)
    # print("ZodiacNo:" ,ZodiacNo)
    # print("MarriageStatusNo:" ,MarriageStatusNo)
    # print("KidsNo:" ,KidsNo)
    # print("TabaccoNo:" ,TabaccoNo)
    # print("CarNo:" ,CarNo)
    # print("InterestNo:" ,InterestNo)
    # print("PersonalityNo:" ,PersonalityNo)
    # print("AnnuIncomeNo:" ,AnnuIncomeNo)
    # print("CuteNo:" ,CuteNo)
    # print("SexyNo:" ,SexyNo)
    # print("KindnessNo:" ,KindnessNo)
    # print("SmartnessNo:" ,SmartnessNo)
    # print("NeatnessNo:" ,NeatnessNo)
    # print("FashionableNo:" ,FashionableNo)
    # print("BrightnessNo:" ,BrightnessNo)
    # print("EleganceNo:" ,EleganceNo)
except (IndexError, TypeError, KeyError, ValueError) as e:
    print("Count Profile Search Setting:", e)

try:
    AgeConfFlag = 1
    OrderFlag = 1
    GenderFlag = 1
    AgeFlag = 1
    ProfilePictureFlag = 1
    ProfileMessageFlag = 1
    HeightFlag = 1
    StyleFlag = 1
    LooksFlag = 1
    CupFlag = 1
    BloodTypeFlag = 1
    JobFlag = 1
    EduBackFlag = 1
    ZodiacFlag = 1
    MarriageStatusFlag = 1
    KidsFlag = 1
    TabaccoFlag = 1
    CarFlag = 1
    InterestFlag = 1
    PersonalityFlag = 1
    AnnuIncomeFlag = 1
    CuteFlag = 1
    SexyFlag = 1
    KindnessFlag = 1
    SmartnessFlag = 1
    NeatnessFlag = 1
    FashionableFlag = 1
    BrightnessFlag = 1
    EleganceFlag = 1
    # SQL文の作成
    PSS_SQL = ""
    for k, v in DictPSS1.items():
        if k == "UUID":
            PSS_SQL += k + " != '" + v + "'"
            continue
        if k == "NickName":
            if v != None:
                PSS_SQL += " AND " + k + " = '" + v + "'"
                continue
        if ("AgeConf" in k): 
            # 一番最初(ANDが必要)か判断
            if AgeConfFlag == 1:
                # 同じアイテムの検索数で、カッコが必要か判断
                if AgeConfNo == 1:
                    # 一個だけのアイテムの場合
                    PSS_SQL += " AND " + k + " = 1"
                    AgeConfFlag += 1
                    continue
                elif AgeConfNo >= 2:
                    # 2個以上のアイテムの場合
                    PSS_SQL += " AND (" + k + " = 1"
                    AgeConfFlag += 1
                    continue
            else:
                # 最後のアイテムかで、カッコが必要か判断
                if AgeConfFlag == AgeConfNo:
                    PSS_SQL += " OR " + k + " = 1)"
                    continue
                # 最後でなく、まだ続く場合はカッコなし
                else:
                    PSS_SQL += " OR " + k + " = 1"
                    AgeConfFlag += 1
                    continue
        # if ("Order" in k): 
        #     if OrderFlag == 1:
        #         if OrderNo == 1:
        #             PSS_SQL += " AND " + k + " = 1"
        #             OrderFlag += 1
        #             continue
        #         elif OrderNo >= 2:
        #             PSS_SQL += " AND (" + k + " = 1"
        #             OrderFlag += 1
        #             continue
        #     else:
        #         if OrderFlag == OrderNo:
        #             PSS_SQL += " OR " + k + " = 1)"
        #             continue
        #         else:
        #             PSS_SQL += " OR " + k + " = 1"
        #             OrderFlag += 1
        #             continue
        if ("Gender" in k): 
            if GenderFlag == 1:
                if GenderNo == 1:
                    PSS_SQL += " AND " + k + " = 1"
                    GenderFlag += 1
                    continue
                elif GenderNo >= 2:
                    PSS_SQL += " AND (" + k + " = 1"
                    GenderFlag += 1
                    continue
            else:
                if GenderFlag == GenderNo:
                    PSS_SQL += " OR " + k + " = 1)"
                    continue
                else:
                    PSS_SQL += " OR " + k + " = 1"
                    GenderFlag += 1
                    continue
        if ("Age" in k): 
            if AgeFlag == 1:
                if AgeNo == 1:
                    PSS_SQL += " AND " + k + " = 1"
                    AgeFlag += 1
                    continue
                elif AgeNo >= 2:
                    PSS_SQL += " AND (" + k + " = 1"
                    AgeFlag += 1
                    continue
            else:
                if AgeFlag == AgeNo:
                    PSS_SQL += " OR " + k + " = 1)"
                    continue
                else:
                    PSS_SQL += " OR " + k + " = 1"
                    AgeFlag += 1
                    continue
        # if ("ProfilePicture" in k): 
        #     if ProfilePictureFlag == 1:
        #         if ProfilePictureNo == 1:
        #             PSS_SQL += " AND " + k + " = 1"
        #             ProfilePictureFlag += 1
        #             continue
        #         elif ProfilePictureNo >= 2:
        #             PSS_SQL += " AND (" + k + " = 1"
        #             ProfilePictureFlag += 1
        #             continue
        #     else:
        #         if ProfilePictureFlag == ProfilePictureNo:
        #             PSS_SQL += " OR " + k + " = 1)"
        #             continue
        #         else:
        #             PSS_SQL += " OR " + k + " = 1"
        #             ProfilePictureFlag += 1
        #             continue
        # if ("ProfileMessage" in k): 
        #     if ProfileMessageFlag == 1:
        #         if ProfileMessageNo == 1:
        #             PSS_SQL += " AND " + k + " = 1"
        #             ProfileMessageFlag += 1
        #             continue
        #         elif ProfileMessageNo >= 2:
        #             PSS_SQL += " AND (" + k + " = 1"
        #             ProfileMessageFlag += 1
        #             continue
        #     else:
        #         if ProfileMessageFlag == ProfileMessageNo:
        #             PSS_SQL += " OR " + k + " = 1)"
        #             continue
        #         else:
        #             PSS_SQL += " OR " + k + " = 1"
        #             ProfileMessageFlag += 1
        #             continue
        if ("Height" in k): 
            if HeightFlag == 1:
                if HeightNo == 1:
                    PSS_SQL += " AND " + k + " = 1"
                    HeightFlag += 1
                    continue
                elif HeightNo >= 2:
                    PSS_SQL += " AND (" + k + " = 1"
                    HeightFlag += 1
                    continue
            else:
                if HeightFlag == HeightNo:
                    PSS_SQL += " OR " + k + " = 1)"
                    continue
                else:
                    PSS_SQL += " OR " + k + " = 1"
                    HeightFlag += 1
                    continue
        if ("Style" in k): 
            if StyleFlag == 1:
                if StyleNo == 1:
                    PSS_SQL += " AND " + k + " = 1"
                    StyleFlag += 1
                    continue
                elif StyleNo >= 2:
                    PSS_SQL += " AND (" + k + " = 1"
                    StyleFlag += 1
                    continue
            else:
                if StyleFlag == StyleNo:
                    PSS_SQL += " OR " + k + " = 1)"
                    continue
                else:
                    PSS_SQL += " OR " + k + " = 1"
                    StyleFlag += 1
                    continue
        if ("Looks" in k): 
            if LooksFlag == 1:
                if LooksNo == 1:
                    PSS_SQL += " AND " + k + " = 1"
                    LooksFlag += 1
                    continue
                elif LooksNo >= 2:
                    PSS_SQL += " AND (" + k + " = 1"
                    LooksFlag += 1
                    continue
            else:
                if LooksFlag == LooksNo:
                    PSS_SQL += " OR " + k + " = 1)"
                    continue
                else:
                    PSS_SQL += " OR " + k + " = 1"
                    LooksFlag += 1
                    continue
        if ("Cup" in k): 
            if CupFlag == 1:
                if CupNo == 1:
                    PSS_SQL += " AND " + k + " = 1"
                    CupFlag += 1
                    continue
                elif CupNo >= 2:
                    PSS_SQL += " AND (" + k + " = 1"
                    CupFlag += 1
                    continue
            else:
                if CupFlag == CupNo:
                    PSS_SQL += " OR " + k + " = 1)"
                    continue
                else:
                    PSS_SQL += " OR " + k + " = 1"
                    CupFlag += 1
                    continue
        if ("BloodType" in k): 
            if BloodTypeFlag == 1:
                if BloodTypeNo == 1:
                    PSS_SQL += " AND " + k + " = 1"
                    BloodTypeFlag += 1
                    continue
                elif BloodTypeNo >= 2:
                    PSS_SQL += " AND (" + k + " = 1"
                    BloodTypeFlag += 1
                    continue
            else:
                if BloodTypeFlag == BloodTypeNo:
                    PSS_SQL += " OR " + k + " = 1)"
                    continue
                else:
                    PSS_SQL += " OR " + k + " = 1"
                    BloodTypeFlag += 1
                    continue
        if ("Job" in k): 
            if JobFlag == 1:
                if JobNo == 1:
                    PSS_SQL += " AND " + k + " = 1"
                    JobFlag += 1
                    continue
                elif JobNo >= 2:
                    PSS_SQL += " AND (" + k + " = 1"
                    JobFlag += 1
                    continue
            else:
                if JobFlag == JobNo:
                    PSS_SQL += " OR " + k + " = 1)"
                    continue
                else:
                    PSS_SQL += " OR " + k + " = 1"
                    JobFlag += 1
                    continue
        if ("EduBack" in k): 
            if EduBackFlag == 1:
                if EduBackNo == 1:
                    PSS_SQL += " AND " + k + " = 1"
                    EduBackFlag += 1
                    continue
                elif EduBackNo >= 2:
                    PSS_SQL += " AND (" + k + " = 1"
                    EduBackFlag += 1
                    continue
            else:
                if EduBackFlag == EduBackNo:
                    PSS_SQL += " OR " + k + " = 1)"
                    continue
                else:
                    PSS_SQL += " OR " + k + " = 1"
                    EduBackFlag += 1
                    continue
        if ("Zodiac" in k): 
            if ZodiacFlag == 1:
                if ZodiacNo == 1:
                    PSS_SQL += " AND " + k + " = 1"
                    ZodiacFlag += 1
                    continue
                elif ZodiacNo >= 2:
                    PSS_SQL += " AND (" + k + " = 1"
                    ZodiacFlag += 1
                    continue
            else:
                if ZodiacFlag == ZodiacNo:
                    PSS_SQL += " OR " + k + " = 1)"
                    continue
                else:
                    PSS_SQL += " OR " + k + " = 1"
                    ZodiacFlag += 1
                    continue
        if ("MarriageStatus" in k): 
            if MarriageStatusFlag == 1:
                if MarriageStatusNo == 1:
                    PSS_SQL += " AND " + k + " = 1"
                    MarriageStatusFlag += 1
                    continue
                elif MarriageStatusNo >= 2:
                    PSS_SQL += " AND (" + k + " = 1"
                    MarriageStatusFlag += 1
                    continue
            else:
                if MarriageStatusFlag == MarriageStatusNo:
                    PSS_SQL += " OR " + k + " = 1)"
                    continue
                else:
                    PSS_SQL += " OR " + k + " = 1"
                    MarriageStatusFlag += 1
                    continue
        if ("Kids" in k): 
            if KidsFlag == 1:
                if KidsNo == 1:
                    PSS_SQL += " AND " + k + " = 1"
                    KidsFlag += 1
                    continue
                elif KidsNo >= 2:
                    PSS_SQL += " AND (" + k + " = 1"
                    KidsFlag += 1
                    continue
            else:
                if KidsFlag == KidsNo:
                    PSS_SQL += " OR " + k + " = 1)"
                    continue
                else:
                    PSS_SQL += " OR " + k + " = 1"
                    KidsFlag += 1
                    continue
        if ("Tabacco" in k): 
            if TabaccoFlag == 1:
                if TabaccoNo == 1:
                    PSS_SQL += " AND " + k + " = 1"
                    TabaccoFlag += 1
                    continue
                elif TabaccoNo >= 2:
                    PSS_SQL += " AND (" + k + " = 1"
                    TabaccoFlag += 1
                    continue
            else:
                if TabaccoFlag == TabaccoNo:
                    PSS_SQL += " OR " + k + " = 1)"
                    continue
                else:
                    PSS_SQL += " OR " + k + " = 1"
                    TabaccoFlag += 1
                    continue
        if ("Car" in k): 
            if CarFlag == 1:
                if CarNo == 1:
                    PSS_SQL += " AND " + k + " = 1"
                    CarFlag += 1
                    continue
                elif CarNo >= 2:
                    PSS_SQL += " AND (" + k + " = 1"
                    CarFlag += 1
                    continue
            else:
                if CarFlag == CarNo:
                    PSS_SQL += " OR " + k + " = 1)"
                    continue
                else:
                    PSS_SQL += " OR " + k + " = 1"
                    CarFlag += 1
                    continue
        if ("Interest" in k): 
            if InterestFlag == 1:
                if InterestNo == 1:
                    PSS_SQL += " AND " + k + " = 1"
                    InterestFlag += 1
                    continue
                elif InterestNo >= 2:
                    PSS_SQL += " AND (" + k + " = 1"
                    InterestFlag += 1
                    continue
            else:
                if InterestFlag == InterestNo:
                    PSS_SQL += " OR " + k + " = 1)"
                    continue
                else:
                    PSS_SQL += " OR " + k + " = 1"
                    InterestFlag += 1
                    continue
        if ("Personality" in k): 
            if PersonalityFlag == 1:
                if PersonalityNo == 1:
                    PSS_SQL += " AND " + k + " = 1"
                    PersonalityFlag += 1
                    continue
                elif PersonalityNo >= 2:
                    PSS_SQL += " AND (" + k + " = 1"
                    PersonalityFlag += 1
                    continue
            else:
                if PersonalityFlag == PersonalityNo:
                    PSS_SQL += " OR " + k + " = 1)"
                    continue
                else:
                    PSS_SQL += " OR " + k + " = 1"
                    PersonalityFlag += 1
                    continue
        if ("AnnuIncome" in k): 
            if AnnuIncomeFlag == 1:
                if AnnuIncomeNo == 1:
                    PSS_SQL += " AND " + k + " = 1"
                    AnnuIncomeFlag += 1
                    continue
                elif AnnuIncomeNo >= 2:
                    PSS_SQL += " AND (" + k + " = 1"
                    AnnuIncomeFlag += 1
                    continue
            else:
                if AnnuIncomeFlag == AnnuIncomeNo:
                    PSS_SQL += " OR " + k + " = 1)"
                    continue
                else:
                    PSS_SQL += " OR " + k + " = 1"
                    AnnuIncomeFlag += 1
                    continue
        if ("Cute" in k): 
            if CuteFlag == 1:
                if CuteNo == 1:
                    PSS_SQL += " AND " + k + " = 1"
                    CuteFlag += 1
                    continue
                elif CuteNo >= 2:
                    PSS_SQL += " AND (" + k + " = 1"
                    CuteFlag += 1
                    continue
            else:
                if CuteFlag == CuteNo:
                    PSS_SQL += " OR " + k + " = 1)"
                    continue
                else:
                    PSS_SQL += " OR " + k + " = 1"
                    CuteFlag += 1
                    continue
        if ("Sexy" in k): 
            if SexyFlag == 1:
                if SexyNo == 1:
                    PSS_SQL += " AND " + k + " = 1"
                    SexyFlag += 1
                    continue
                elif SexyNo >= 2:
                    PSS_SQL += " AND (" + k + " = 1"
                    SexyFlag += 1
                    continue
            else:
                if SexyFlag == SexyNo:
                    PSS_SQL += " OR " + k + " = 1)"
                    continue
                else:
                    PSS_SQL += " OR " + k + " = 1"
                    SexyFlag += 1
                    continue
        if ("Kindness" in k): 
            if KindnessFlag == 1:
                if KindnessNo == 1:
                    PSS_SQL += " AND " + k + " = 1"
                    KindnessFlag += 1
                    continue
                elif KindnessNo >= 2:
                    PSS_SQL += " AND (" + k + " = 1"
                    KindnessFlag += 1
                    continue
            else:
                if KindnessFlag == KindnessNo:
                    PSS_SQL += " OR " + k + " = 1)"
                    continue
                else:
                    PSS_SQL += " OR " + k + " = 1"
                    KindnessFlag += 1
                    continue
        if ("Smartness" in k): 
            if SmartnessFlag == 1:
                if SmartnessNo == 1:
                    PSS_SQL += " AND " + k + " = 1"
                    SmartnessFlag += 1
                    continue
                elif SmartnessNo >= 2:
                    PSS_SQL += " AND (" + k + " = 1"
                    SmartnessFlag += 1
                    continue
            else:
                if SmartnessFlag == SmartnessNo:
                    PSS_SQL += " OR " + k + " = 1)"
                    continue
                else:
                    PSS_SQL += " OR " + k + " = 1"
                    SmartnessFlag += 1
                    continue
        if ("Neatness" in k): 
            if NeatnessFlag == 1:
                if NeatnessNo == 1:
                    PSS_SQL += " AND " + k + " = 1"
                    NeatnessFlag += 1
                    continue
                elif NeatnessNo >= 2:
                    PSS_SQL += " AND (" + k + " = 1"
                    NeatnessFlag += 1
                    continue
            else:
                if NeatnessFlag == NeatnessNo:
                    PSS_SQL += " OR " + k + " = 1)"
                    continue
                else:
                    PSS_SQL += " OR " + k + " = 1"
                    NeatnessFlag += 1
                    continue
        if ("Fashionable" in k): 
            if FashionableFlag == 1:
                if FashionableNo == 1:
                    PSS_SQL += " AND " + k + " = 1"
                    FashionableFlag += 1
                    continue
                elif FashionableNo >= 2:
                    PSS_SQL += " AND (" + k + " = 1"
                    FashionableFlag += 1
                    continue
            else:
                if FashionableFlag == FashionableNo:
                    PSS_SQL += " OR " + k + " = 1)"
                    continue
                else:
                    PSS_SQL += " OR " + k + " = 1"
                    FashionableFlag += 1
                    continue
        if ("Brightness" in k): 
            if BrightnessFlag == 1:
                if BrightnessNo == 1:
                    PSS_SQL += " AND " + k + " = 1"
                    BrightnessFlag += 1
                    continue
                elif BrightnessNo >= 2:
                    PSS_SQL += " AND (" + k + " = 1"
                    BrightnessFlag += 1
                    continue
            else:
                if BrightnessFlag == BrightnessNo:
                    PSS_SQL += " OR " + k + " = 1)"
                    continue
                else:
                    PSS_SQL += " OR " + k + " = 1"
                    BrightnessFlag += 1
                    continue
        if ("Elegance" in k): 
            if EleganceFlag == 1:
                if EleganceNo == 1:
                    PSS_SQL += " AND " + k + " = 1"
                    EleganceFlag += 1
                    continue
                elif EleganceNo >= 2:
                    PSS_SQL += " AND (" + k + " = 1"
                    EleganceFlag += 1
                    continue
            else:
                if EleganceFlag == EleganceNo:
                    PSS_SQL += " OR " + k + " = 1)"
                    continue
                else:
                    PSS_SQL += " OR " + k + " = 1"
                    EleganceFlag += 1
                    continue
    print(PSS_SQL)
except (MySQLdb.Error, MySQLdb.Warning, IndexError, TypeError, KeyError) as e:
    print("Create SQL statement:", e)

# 検索設定に基づいたProfileTable1の検索
try:
    cursor.execute(f" \
        SELECT * \
        FROM {ProfileTable1} \
        WHERE \
            {PSS_SQL} \
    ")
    field_names = [i[0] for i in cursor.description]
    print(cursor.fetchone())
    # ProfileSearchResult = [int.from_bytes(i, "big") if isinstance(i, bytes) else i for i in cursor.fetchone()]
    # DictPSS = dict(zip(field_names, ProfileSearchResult))
    # print(DictPSS)
except (MySQLdb.Error, MySQLdb.Warning, IndexError, TypeError) as e:
    print("Profile Search and Result:", e)

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
