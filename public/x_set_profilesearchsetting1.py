#!/usr/local/bin/python3.7
# coding:utf-8
# MySQLdbのインポート
import MySQLdb
import sys, json
import datetime
import SQLconfig

# データベースへの接続とカーソルの生成
connection = MySQLdb.connect(
    host=SQLconfig.host,
    user=SQLconfig.user,
    passwd=SQLconfig.passwd,
    db=SQLconfig.db)

ProfileSearchSetting1="ProfileSearchSetting1"

# field name込みの場合はこっちを使う
# cursor = connection.cursor(MySQLdb.cursors.DictCursor)

cursor = connection.cursor()

# profileTableのUUIDのチェック（外部からの変更防止？）
cursor.execute(f"SELECT * FROM {ProfileSearchSetting1} WHERE UUID='{sys.argv[1]}'")
checkExist = cursor.fetchone()

# UUIDが存在しない→初めての追加？（それとも外部からのアタックか）
if checkExist==None:
    try:
        cursor.execute(f" \
            INSERT INTO `{ProfileSearchSetting1}` \
            SET \
                UUID='{sys.argv[1]}', \
                PSGender0={sys.argv[2]}, \
                PSGender1={sys.argv[3]}, \
                PSGender2={sys.argv[4]}, \
                PSGender3={sys.argv[5]}, \
                PSGender4={sys.argv[6]}, \
                PSGender5={sys.argv[7]}, \
                PSGender6={sys.argv[8]}, \
                PSGender7={sys.argv[9]}, \
                PSAge0={sys.argv[10]}, \
                PSAge1={sys.argv[11]}, \
                PSAge2={sys.argv[12]}, \
                PSAge3={sys.argv[13]}, \
                PSAge4={sys.argv[14]}, \
                PSAge5={sys.argv[15]}, \
                PSAge6={sys.argv[16]}, \
                PSAge7={sys.argv[17]}, \
                PSAge8={sys.argv[18]}, \
                PSAge9={sys.argv[19]}, \
                PSAge10={sys.argv[20]}, \
                PSAge11={sys.argv[21]}, \
                PSAge12={sys.argv[22]}, \
                PSAge13={sys.argv[23]}, \
                PSAge14={sys.argv[24]}, \
                PSAge15={sys.argv[25]}, \
                PSAge16={sys.argv[26]}, \
                PSAge17={sys.argv[27]}, \
                PSProfilePicture0={sys.argv[28]}, \
                PSProfilePicture1={sys.argv[29]}, \
                PSProfilePicture2={sys.argv[30]}, \
                PSProfileMessage0={sys.argv[31]}, \
                PSProfileMessage1={sys.argv[32]}, \
                PSProfileMessage2={sys.argv[33]}, \
                PSHeight0={sys.argv[34]}, \
                PSHeight1={sys.argv[35]}, \
                PSHeight2={sys.argv[36]}, \
                PSHeight3={sys.argv[37]}, \
                PSHeight4={sys.argv[38]}, \
                PSHeight5={sys.argv[39]}, \
                PSHeight6={sys.argv[40]}, \
                PSHeight7={sys.argv[41]}, \
                PSHeight8={sys.argv[42]}, \
                PSHeight9={sys.argv[43]}, \
                PSStyle0={sys.argv[44]}, \
                PSStyle1={sys.argv[45]}, \
                PSStyle2={sys.argv[46]}, \
                PSStyle3={sys.argv[47]}, \
                PSStyle4={sys.argv[48]}, \
                PSStyle5={sys.argv[49]}, \
                PSStyle6={sys.argv[50]}, \
                PSStyle7={sys.argv[51]}, \
                PSStyle8={sys.argv[52]}, \
                PSStyle9={sys.argv[53]}, \
                PSLooks0={sys.argv[54]}, \
                PSLooks1={sys.argv[55]}, \
                PSLooks2={sys.argv[56]}, \
                PSLooks3={sys.argv[57]}, \
                PSLooks4={sys.argv[58]}, \
                PSLooks5={sys.argv[59]}, \
                PSLooks6={sys.argv[60]}, \
                PSLooks7={sys.argv[61]}, \
                PSLooks8={sys.argv[62]}, \
                PSLooks9={sys.argv[63]}, \
                PSCup0={sys.argv[64]}, \
                PSCup1={sys.argv[65]}, \
                PSCup2={sys.argv[66]}, \
                PSCup3={sys.argv[67]}, \
                PSCup4={sys.argv[68]}, \
                PSCup5={sys.argv[69]}, \
                PSCup6={sys.argv[70]}, \
                PSCup7={sys.argv[71]}, \
                PSCup8={sys.argv[72]}, \
                PSCup9={sys.argv[73]}, \
                PSBloodType0={sys.argv[74]}, \
                PSBloodType1={sys.argv[75]}, \
                PSBloodType2={sys.argv[76]}, \
                PSBloodType3={sys.argv[77]}, \
                PSBloodType4={sys.argv[78]}, \
                PSJob0={sys.argv[79]}, \
                PSJob1={sys.argv[80]}, \
                PSJob2={sys.argv[81]}, \
                PSJob3={sys.argv[82]}, \
                PSJob4={sys.argv[83]}, \
                PSJob5={sys.argv[84]}, \
                PSJob6={sys.argv[85]}, \
                PSJob7={sys.argv[86]}, \
                PSJob8={sys.argv[87]}, \
                PSJob9={sys.argv[88]}, \
                PSJob10={sys.argv[89]}, \
                PSJob11={sys.argv[90]}, \
                PSJob12={sys.argv[91]}, \
                PSJob13={sys.argv[92]}, \
                PSJob14={sys.argv[93]}, \
                PSJob15={sys.argv[94]}, \
                PSJob16={sys.argv[95]}, \
                PSJob17={sys.argv[96]}, \
                PSJob18={sys.argv[97]}, \
                PSJob19={sys.argv[98]}, \
                PSJob20={sys.argv[99]}, \
                PSJob21={sys.argv[100]}, \
                PSJob22={sys.argv[101]}, \
                PSJob23={sys.argv[102]}, \
                PSJob24={sys.argv[103]}, \
                PSJob25={sys.argv[104]}, \
                PSJob26={sys.argv[105]}, \
                PSEduBack0={sys.argv[106]}, \
                PSEduBack1={sys.argv[107]}, \
                PSEduBack2={sys.argv[108]}, \
                PSEduBack3={sys.argv[109]}, \
                PSEduBack4={sys.argv[110]}, \
                PSEduBack5={sys.argv[111]}, \
                PSZodiac0={sys.argv[112]}, \
                PSZodiac1={sys.argv[113]}, \
                PSZodiac2={sys.argv[114]}, \
                PSZodiac3={sys.argv[115]}, \
                PSZodiac4={sys.argv[116]}, \
                PSZodiac5={sys.argv[117]}, \
                PSZodiac6={sys.argv[118]}, \
                PSZodiac7={sys.argv[119]}, \
                PSZodiac8={sys.argv[120]}, \
                PSZodiac9={sys.argv[121]}, \
                PSZodiac10={sys.argv[122]}, \
                PSZodiac11={sys.argv[123]}, \
                PSZodiac12={sys.argv[124]}, \
                PSMarriageStatus0={sys.argv[125]}, \
                PSMarriageStatus1={sys.argv[126]}, \
                PSMarriageStatus2={sys.argv[127]}, \
                PSMarriageStatus3={sys.argv[128]}, \
                PSMarriageStatus4={sys.argv[129]}, \
                PSMarriageStatus5={sys.argv[130]}, \
                PSMarriageStatus6={sys.argv[131]}, \
                PSKids0={sys.argv[132]}, \
                PSKids1={sys.argv[133]}, \
                PSKids2={sys.argv[134]}, \
                PSKids3={sys.argv[135]}, \
                PSTabacco0={sys.argv[136]}, \
                PSTabacco1={sys.argv[137]}, \
                PSTabacco2={sys.argv[138]}, \
                PSTabacco3={sys.argv[139]}, \
                PSTabacco4={sys.argv[140]}, \
                PSAlchole0={sys.argv[141]}, \
                PSAlchole1={sys.argv[142]}, \
                PSAlchole2={sys.argv[143]}, \
                PSAlchole3={sys.argv[144]}, \
                PSCar0={sys.argv[145]}, \
                PSCar1={sys.argv[146]}, \
                PSCar2={sys.argv[147]}, \
                PSInterest0={sys.argv[148]}, \
                PSInterest1={sys.argv[149]}, \
                PSInterest2={sys.argv[150]}, \
                PSInterest3={sys.argv[151]}, \
                PSInterest4={sys.argv[152]}, \
                PSInterest5={sys.argv[153]}, \
                PSInterest6={sys.argv[154]}, \
                PSInterest7={sys.argv[155]}, \
                PSInterest8={sys.argv[156]}, \
                PSInterest9={sys.argv[157]}, \
                PSInterest10={sys.argv[158]}, \
                PSInterest11={sys.argv[159]}, \
                PSInterest12={sys.argv[160]}, \
                PSInterest13={sys.argv[161]}, \
                PSInterest14={sys.argv[162]}, \
                PSInterest15={sys.argv[163]}, \
                PSInterest16={sys.argv[164]}, \
                PSInterest17={sys.argv[165]}, \
                PSInterest18={sys.argv[166]}, \
                PSInterest19={sys.argv[167]}, \
                PSInterest20={sys.argv[168]}, \
                PSInterest21={sys.argv[169]}, \
                PSInterest22={sys.argv[170]}, \
                PSInterest23={sys.argv[171]}, \
                PSInterest24={sys.argv[172]}, \
                PSInterest25={sys.argv[173]}, \
                PSInterest26={sys.argv[174]}, \
                PSInterest27={sys.argv[175]}, \
                PSInterest28={sys.argv[176]}, \
                PSPersonality0={sys.argv[177]}, \
                PSPersonality1={sys.argv[178]}, \
                PSPersonality2={sys.argv[179]}, \
                PSPersonality3={sys.argv[180]}, \
                PSPersonality4={sys.argv[181]}, \
                PSPersonality5={sys.argv[182]}, \
                PSPersonality6={sys.argv[183]}, \
                PSPersonality7={sys.argv[184]}, \
                PSPersonality8={sys.argv[185]}, \
                PSPersonality9={sys.argv[186]}, \
                PSPersonality10={sys.argv[187]}, \
                PSPersonality11={sys.argv[188]}, \
                PSPersonality12={sys.argv[189]}, \
                PSPersonality13={sys.argv[190]}, \
                PSPersonality14={sys.argv[191]}, \
                PSPersonality15={sys.argv[192]}, \
                PSPersonality16={sys.argv[193]}, \
                PSPersonality17={sys.argv[194]}, \
                PSPersonality18={sys.argv[195]}, \
                PSPersonality19={sys.argv[196]}, \
                PSPersonality20={sys.argv[197]}, \
                PSPersonality21={sys.argv[198]}, \
                PSPersonality22={sys.argv[199]}, \
                PSPersonality23={sys.argv[200]}, \
                PSPersonality24={sys.argv[201]}, \
                PSPersonality25={sys.argv[202]}, \
                PSPersonality26={sys.argv[203]}, \
                PSPersonality27={sys.argv[204]}, \
                PSPersonality28={sys.argv[205]}, \
                PSPersonality29={sys.argv[206]}, \
                PSPersonality30={sys.argv[207]}, \
                PSPersonality31={sys.argv[208]}, \
                PSPersonality32={sys.argv[209]}, \
                PSPersonality33={sys.argv[210]}, \
                PSPersonality34={sys.argv[211]}, \
                PSPersonality35={sys.argv[212]}, \
                PSPersonality36={sys.argv[213]}, \
                PSPersonality37={sys.argv[214]}, \
                PSPersonality38={sys.argv[215]}, \
                PSPersonality39={sys.argv[216]}, \
                PSPersonality40={sys.argv[217]}, \
                PSPersonality41={sys.argv[218]}, \
                PSPersonality42={sys.argv[219]}, \
                PSPersonality43={sys.argv[220]}, \
                PSPersonality44={sys.argv[221]}, \
                PSPersonality45={sys.argv[222]}, \
                PSPersonality46={sys.argv[223]}, \
                PSAnnuIncome0={sys.argv[224]}, \
                PSAnnuIncome1={sys.argv[225]}, \
                PSAnnuIncome2={sys.argv[226]}, \
                PSAnnuIncome3={sys.argv[227]}, \
                PSAnnuIncome4={sys.argv[228]}, \
                PSAnnuIncome5={sys.argv[229]}, \
                PSAnnuIncome6={sys.argv[230]}, \
                PSAnnuIncome7={sys.argv[231]}, \
                PSAnnuIncome8={sys.argv[232]}, \
                PSAnnuIncome9={sys.argv[233]}, \
                PSAnnuIncome10={sys.argv[234]}, \
                PSCute0={sys.argv[235]}, \
                PSCute1={sys.argv[236]}, \
                PSCute2={sys.argv[237]}, \
                PSCute3={sys.argv[238]}, \
                PSCute4={sys.argv[239]}, \
                PSCute5={sys.argv[240]}, \
                PSSexy0={sys.argv[241]}, \
                PSSexy1={sys.argv[242]}, \
                PSSexy2={sys.argv[243]}, \
                PSSexy3={sys.argv[244]}, \
                PSSexy4={sys.argv[245]}, \
                PSSexy5={sys.argv[246]}, \
                PSKindness0={sys.argv[247]}, \
                PSKindness1={sys.argv[248]}, \
                PSKindness2={sys.argv[249]}, \
                PSKindness3={sys.argv[250]}, \
                PSKindness4={sys.argv[251]}, \
                PSKindness5={sys.argv[252]}, \
                PSSmartness0={sys.argv[253]}, \
                PSSmartness1={sys.argv[254]}, \
                PSSmartness2={sys.argv[255]}, \
                PSSmartness3={sys.argv[256]}, \
                PSSmartness4={sys.argv[257]}, \
                PSSmartness5={sys.argv[258]}, \
                PSNeatness0={sys.argv[259]}, \
                PSNeatness1={sys.argv[260]}, \
                PSNeatness2={sys.argv[261]}, \
                PSNeatness3={sys.argv[262]}, \
                PSNeatness4={sys.argv[263]}, \
                PSNeatness5={sys.argv[264]}, \
                PSFashionable0={sys.argv[265]}, \
                PSFashionable1={sys.argv[266]}, \
                PSFashionable2={sys.argv[267]}, \
                PSFashionable3={sys.argv[268]}, \
                PSFashionable4={sys.argv[269]}, \
                PSFashionable5={sys.argv[270]}, \
                PSBrightness0={sys.argv[271]}, \
                PSBrightness1={sys.argv[272]}, \
                PSBrightness2={sys.argv[273]}, \
                PSBrightness3={sys.argv[274]}, \
                PSBrightness4={sys.argv[275]}, \
                PSBrightness5={sys.argv[276]}, \
                PSElegance0={sys.argv[277]}, \
                PSElegance1={sys.argv[278]}, \
                PSElegance2={sys.argv[279]}, \
                PSElegance3={sys.argv[280]}, \
                PSElegance4={sys.argv[281]}, \
                PSElegance5={sys.argv[282]} \
        ")
        print("SPSSS") # Set Profile Search Setting Success
    except (MySQLdb.Error, MySQLdb.Warning, IndexError, TypeError) as e:
        print(e)
        print("SPSSNS") # Set Profile Search Setting Not Success

# UUIDが存在する場合→更新（変更ないところはそのままにしたいが・・・ロジックが必要）
else:
    try:
        cursor.execute(f" \
            UPDATE `{ProfileSearchSetting1}` \
            SET \
                PSGender0={sys.argv[2]}, \
                PSGender1={sys.argv[3]}, \
                PSGender2={sys.argv[4]}, \
                PSGender3={sys.argv[5]}, \
                PSGender4={sys.argv[6]}, \
                PSGender5={sys.argv[7]}, \
                PSGender6={sys.argv[8]}, \
                PSGender7={sys.argv[9]}, \
                PSAge0={sys.argv[10]}, \
                PSAge1={sys.argv[11]}, \
                PSAge2={sys.argv[12]}, \
                PSAge3={sys.argv[13]}, \
                PSAge4={sys.argv[14]}, \
                PSAge5={sys.argv[15]}, \
                PSAge6={sys.argv[16]}, \
                PSAge7={sys.argv[17]}, \
                PSAge8={sys.argv[18]}, \
                PSAge9={sys.argv[19]}, \
                PSAge10={sys.argv[20]}, \
                PSAge11={sys.argv[21]}, \
                PSAge12={sys.argv[22]}, \
                PSAge13={sys.argv[23]}, \
                PSAge14={sys.argv[24]}, \
                PSAge15={sys.argv[25]}, \
                PSAge16={sys.argv[26]}, \
                PSAge17={sys.argv[27]}, \
                PSProfilePicture0={sys.argv[28]}, \
                PSProfilePicture1={sys.argv[29]}, \
                PSProfilePicture2={sys.argv[30]}, \
                PSProfileMessage0={sys.argv[31]}, \
                PSProfileMessage1={sys.argv[32]}, \
                PSProfileMessage2={sys.argv[33]}, \
                PSHeight0={sys.argv[34]}, \
                PSHeight1={sys.argv[35]}, \
                PSHeight2={sys.argv[36]}, \
                PSHeight3={sys.argv[37]}, \
                PSHeight4={sys.argv[38]}, \
                PSHeight5={sys.argv[39]}, \
                PSHeight6={sys.argv[40]}, \
                PSHeight7={sys.argv[41]}, \
                PSHeight8={sys.argv[42]}, \
                PSHeight9={sys.argv[43]}, \
                PSStyle0={sys.argv[44]}, \
                PSStyle1={sys.argv[45]}, \
                PSStyle2={sys.argv[46]}, \
                PSStyle3={sys.argv[47]}, \
                PSStyle4={sys.argv[48]}, \
                PSStyle5={sys.argv[49]}, \
                PSStyle6={sys.argv[50]}, \
                PSStyle7={sys.argv[51]}, \
                PSStyle8={sys.argv[52]}, \
                PSStyle9={sys.argv[53]}, \
                PSLooks0={sys.argv[54]}, \
                PSLooks1={sys.argv[55]}, \
                PSLooks2={sys.argv[56]}, \
                PSLooks3={sys.argv[57]}, \
                PSLooks4={sys.argv[58]}, \
                PSLooks5={sys.argv[59]}, \
                PSLooks6={sys.argv[60]}, \
                PSLooks7={sys.argv[61]}, \
                PSLooks8={sys.argv[62]}, \
                PSLooks9={sys.argv[63]}, \
                PSCup0={sys.argv[64]}, \
                PSCup1={sys.argv[65]}, \
                PSCup2={sys.argv[66]}, \
                PSCup3={sys.argv[67]}, \
                PSCup4={sys.argv[68]}, \
                PSCup5={sys.argv[69]}, \
                PSCup6={sys.argv[70]}, \
                PSCup7={sys.argv[71]}, \
                PSCup8={sys.argv[72]}, \
                PSCup9={sys.argv[73]}, \
                PSBloodType0={sys.argv[74]}, \
                PSBloodType1={sys.argv[75]}, \
                PSBloodType2={sys.argv[76]}, \
                PSBloodType3={sys.argv[77]}, \
                PSBloodType4={sys.argv[78]}, \
                PSJob0={sys.argv[79]}, \
                PSJob1={sys.argv[80]}, \
                PSJob2={sys.argv[81]}, \
                PSJob3={sys.argv[82]}, \
                PSJob4={sys.argv[83]}, \
                PSJob5={sys.argv[84]}, \
                PSJob6={sys.argv[85]}, \
                PSJob7={sys.argv[86]}, \
                PSJob8={sys.argv[87]}, \
                PSJob9={sys.argv[88]}, \
                PSJob10={sys.argv[89]}, \
                PSJob11={sys.argv[90]}, \
                PSJob12={sys.argv[91]}, \
                PSJob13={sys.argv[92]}, \
                PSJob14={sys.argv[93]}, \
                PSJob15={sys.argv[94]}, \
                PSJob16={sys.argv[95]}, \
                PSJob17={sys.argv[96]}, \
                PSJob18={sys.argv[97]}, \
                PSJob19={sys.argv[98]}, \
                PSJob20={sys.argv[99]}, \
                PSJob21={sys.argv[100]}, \
                PSJob22={sys.argv[101]}, \
                PSJob23={sys.argv[102]}, \
                PSJob24={sys.argv[103]}, \
                PSJob25={sys.argv[104]}, \
                PSJob26={sys.argv[105]}, \
                PSEduBack0={sys.argv[106]}, \
                PSEduBack1={sys.argv[107]}, \
                PSEduBack2={sys.argv[108]}, \
                PSEduBack3={sys.argv[109]}, \
                PSEduBack4={sys.argv[110]}, \
                PSEduBack5={sys.argv[111]}, \
                PSZodiac0={sys.argv[112]}, \
                PSZodiac1={sys.argv[113]}, \
                PSZodiac2={sys.argv[114]}, \
                PSZodiac3={sys.argv[115]}, \
                PSZodiac4={sys.argv[116]}, \
                PSZodiac5={sys.argv[117]}, \
                PSZodiac6={sys.argv[118]}, \
                PSZodiac7={sys.argv[119]}, \
                PSZodiac8={sys.argv[120]}, \
                PSZodiac9={sys.argv[121]}, \
                PSZodiac10={sys.argv[122]}, \
                PSZodiac11={sys.argv[123]}, \
                PSZodiac12={sys.argv[124]}, \
                PSMarriageStatus0={sys.argv[125]}, \
                PSMarriageStatus1={sys.argv[126]}, \
                PSMarriageStatus2={sys.argv[127]}, \
                PSMarriageStatus3={sys.argv[128]}, \
                PSMarriageStatus4={sys.argv[129]}, \
                PSMarriageStatus5={sys.argv[130]}, \
                PSMarriageStatus6={sys.argv[131]}, \
                PSKids0={sys.argv[132]}, \
                PSKids1={sys.argv[133]}, \
                PSKids2={sys.argv[134]}, \
                PSKids3={sys.argv[135]}, \
                PSTabacco0={sys.argv[136]}, \
                PSTabacco1={sys.argv[137]}, \
                PSTabacco2={sys.argv[138]}, \
                PSTabacco3={sys.argv[139]}, \
                PSTabacco4={sys.argv[140]}, \
                PSAlchole0={sys.argv[141]}, \
                PSAlchole1={sys.argv[142]}, \
                PSAlchole2={sys.argv[143]}, \
                PSAlchole3={sys.argv[144]}, \
                PSCar0={sys.argv[145]}, \
                PSCar1={sys.argv[146]}, \
                PSCar2={sys.argv[147]}, \
                PSInterest0={sys.argv[148]}, \
                PSInterest1={sys.argv[149]}, \
                PSInterest2={sys.argv[150]}, \
                PSInterest3={sys.argv[151]}, \
                PSInterest4={sys.argv[152]}, \
                PSInterest5={sys.argv[153]}, \
                PSInterest6={sys.argv[154]}, \
                PSInterest7={sys.argv[155]}, \
                PSInterest8={sys.argv[156]}, \
                PSInterest9={sys.argv[157]}, \
                PSInterest10={sys.argv[158]}, \
                PSInterest11={sys.argv[159]}, \
                PSInterest12={sys.argv[160]}, \
                PSInterest13={sys.argv[161]}, \
                PSInterest14={sys.argv[162]}, \
                PSInterest15={sys.argv[163]}, \
                PSInterest16={sys.argv[164]}, \
                PSInterest17={sys.argv[165]}, \
                PSInterest18={sys.argv[166]}, \
                PSInterest19={sys.argv[167]}, \
                PSInterest20={sys.argv[168]}, \
                PSInterest21={sys.argv[169]}, \
                PSInterest22={sys.argv[170]}, \
                PSInterest23={sys.argv[171]}, \
                PSInterest24={sys.argv[172]}, \
                PSInterest25={sys.argv[173]}, \
                PSInterest26={sys.argv[174]}, \
                PSInterest27={sys.argv[175]}, \
                PSInterest28={sys.argv[176]}, \
                PSPersonality0={sys.argv[177]}, \
                PSPersonality1={sys.argv[178]}, \
                PSPersonality2={sys.argv[179]}, \
                PSPersonality3={sys.argv[180]}, \
                PSPersonality4={sys.argv[181]}, \
                PSPersonality5={sys.argv[182]}, \
                PSPersonality6={sys.argv[183]}, \
                PSPersonality7={sys.argv[184]}, \
                PSPersonality8={sys.argv[185]}, \
                PSPersonality9={sys.argv[186]}, \
                PSPersonality10={sys.argv[187]}, \
                PSPersonality11={sys.argv[188]}, \
                PSPersonality12={sys.argv[189]}, \
                PSPersonality13={sys.argv[190]}, \
                PSPersonality14={sys.argv[191]}, \
                PSPersonality15={sys.argv[192]}, \
                PSPersonality16={sys.argv[193]}, \
                PSPersonality17={sys.argv[194]}, \
                PSPersonality18={sys.argv[195]}, \
                PSPersonality19={sys.argv[196]}, \
                PSPersonality20={sys.argv[197]}, \
                PSPersonality21={sys.argv[198]}, \
                PSPersonality22={sys.argv[199]}, \
                PSPersonality23={sys.argv[200]}, \
                PSPersonality24={sys.argv[201]}, \
                PSPersonality25={sys.argv[202]}, \
                PSPersonality26={sys.argv[203]}, \
                PSPersonality27={sys.argv[204]}, \
                PSPersonality28={sys.argv[205]}, \
                PSPersonality29={sys.argv[206]}, \
                PSPersonality30={sys.argv[207]}, \
                PSPersonality31={sys.argv[208]}, \
                PSPersonality32={sys.argv[209]}, \
                PSPersonality33={sys.argv[210]}, \
                PSPersonality34={sys.argv[211]}, \
                PSPersonality35={sys.argv[212]}, \
                PSPersonality36={sys.argv[213]}, \
                PSPersonality37={sys.argv[214]}, \
                PSPersonality38={sys.argv[215]}, \
                PSPersonality39={sys.argv[216]}, \
                PSPersonality40={sys.argv[217]}, \
                PSPersonality41={sys.argv[218]}, \
                PSPersonality42={sys.argv[219]}, \
                PSPersonality43={sys.argv[220]}, \
                PSPersonality44={sys.argv[221]}, \
                PSPersonality45={sys.argv[222]}, \
                PSPersonality46={sys.argv[223]}, \
                PSAnnuIncome0={sys.argv[224]}, \
                PSAnnuIncome1={sys.argv[225]}, \
                PSAnnuIncome2={sys.argv[226]}, \
                PSAnnuIncome3={sys.argv[227]}, \
                PSAnnuIncome4={sys.argv[228]}, \
                PSAnnuIncome5={sys.argv[229]}, \
                PSAnnuIncome6={sys.argv[230]}, \
                PSAnnuIncome7={sys.argv[231]}, \
                PSAnnuIncome8={sys.argv[232]}, \
                PSAnnuIncome9={sys.argv[233]}, \
                PSAnnuIncome10={sys.argv[234]}, \
                PSCute0={sys.argv[235]}, \
                PSCute1={sys.argv[236]}, \
                PSCute2={sys.argv[237]}, \
                PSCute3={sys.argv[238]}, \
                PSCute4={sys.argv[239]}, \
                PSCute5={sys.argv[240]}, \
                PSSexy0={sys.argv[241]}, \
                PSSexy1={sys.argv[242]}, \
                PSSexy2={sys.argv[243]}, \
                PSSexy3={sys.argv[244]}, \
                PSSexy4={sys.argv[245]}, \
                PSSexy5={sys.argv[246]}, \
                PSKindness0={sys.argv[247]}, \
                PSKindness1={sys.argv[248]}, \
                PSKindness2={sys.argv[249]}, \
                PSKindness3={sys.argv[250]}, \
                PSKindness4={sys.argv[251]}, \
                PSKindness5={sys.argv[252]}, \
                PSSmartness0={sys.argv[253]}, \
                PSSmartness1={sys.argv[254]}, \
                PSSmartness2={sys.argv[255]}, \
                PSSmartness3={sys.argv[256]}, \
                PSSmartness4={sys.argv[257]}, \
                PSSmartness5={sys.argv[258]}, \
                PSNeatness0={sys.argv[259]}, \
                PSNeatness1={sys.argv[260]}, \
                PSNeatness2={sys.argv[261]}, \
                PSNeatness3={sys.argv[262]}, \
                PSNeatness4={sys.argv[263]}, \
                PSNeatness5={sys.argv[264]}, \
                PSFashionable0={sys.argv[265]}, \
                PSFashionable1={sys.argv[266]}, \
                PSFashionable2={sys.argv[267]}, \
                PSFashionable3={sys.argv[268]}, \
                PSFashionable4={sys.argv[269]}, \
                PSFashionable5={sys.argv[270]}, \
                PSBrightness0={sys.argv[271]}, \
                PSBrightness1={sys.argv[272]}, \
                PSBrightness2={sys.argv[273]}, \
                PSBrightness3={sys.argv[274]}, \
                PSBrightness4={sys.argv[275]}, \
                PSBrightness5={sys.argv[276]}, \
                PSElegance0={sys.argv[277]}, \
                PSElegance1={sys.argv[278]}, \
                PSElegance2={sys.argv[279]}, \
                PSElegance3={sys.argv[280]}, \
                PSElegance4={sys.argv[281]}, \
                PSElegance5={sys.argv[282]} \
            WHERE \
                UUID='{sys.argv[1]}' \
        ")
        print("SPSSS") # Set Profile Search Setting Success
    except (MySQLdb.Error, MySQLdb.Warning, IndexError, TypeError) as e:
        print(e)
        print("SPSSNS") # Set Profile Search Setting Not Success

# 保存を実行
connection.commit()

# 接続を閉じる
connection.close()

# data=json.load(sys.argv[2])
# print(sys.argv)
# print(sys.argv[3])
# print(sys.argv[4])
# print(sys.argv[5])
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