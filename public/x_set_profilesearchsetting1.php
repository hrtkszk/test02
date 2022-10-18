<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Content-Type');
$rest_json = file_get_contents("php://input"); // JSONでPOSTされたデータを取り出す
$_POST = json_decode($rest_json, true); // JSON文字列をデコード
if ($_POST['PSGender0']==null) {$PSGender0=0;} else {$PSGender0=$_POST['PSGender0'];}
if ($_POST['PSGender1']==null) {$PSGender1=0;} else {$PSGender1=$_POST['PSGender1'];}
if ($_POST['PSGender2']==null) {$PSGender2=0;} else {$PSGender2=$_POST['PSGender2'];}
if ($_POST['PSGender3']==null) {$PSGender3=0;} else {$PSGender3=$_POST['PSGender3'];}
if ($_POST['PSGender4']==null) {$PSGender4=0;} else {$PSGender4=$_POST['PSGender4'];}
if ($_POST['PSGender5']==null) {$PSGender5=0;} else {$PSGender5=$_POST['PSGender5'];}
if ($_POST['PSGender6']==null) {$PSGender6=0;} else {$PSGender6=$_POST['PSGender6'];}
if ($_POST['PSGender7']==null) {$PSGender7=0;} else {$PSGender7=$_POST['PSGender7'];}
if ($_POST['PSAge0']==null) {$PSAge0=0;} else {$PSAge0=$_POST['PSAge0'];}
if ($_POST['PSAge1']==null) {$PSAge1=0;} else {$PSAge1=$_POST['PSAge1'];}
if ($_POST['PSAge2']==null) {$PSAge2=0;} else {$PSAge2=$_POST['PSAge2'];}
if ($_POST['PSAge3']==null) {$PSAge3=0;} else {$PSAge3=$_POST['PSAge3'];}
if ($_POST['PSAge4']==null) {$PSAge4=0;} else {$PSAge4=$_POST['PSAge4'];}
if ($_POST['PSAge5']==null) {$PSAge5=0;} else {$PSAge5=$_POST['PSAge5'];}
if ($_POST['PSAge6']==null) {$PSAge6=0;} else {$PSAge6=$_POST['PSAge6'];}
if ($_POST['PSAge7']==null) {$PSAge7=0;} else {$PSAge7=$_POST['PSAge7'];}
if ($_POST['PSAge8']==null) {$PSAge8=0;} else {$PSAge8=$_POST['PSAge8'];}
if ($_POST['PSAge9']==null) {$PSAge9=0;} else {$PSAge9=$_POST['PSAge9'];}
if ($_POST['PSAge10']==null) {$PSAge10=0;} else {$PSAge10=$_POST['PSAge10'];}
if ($_POST['PSAge11']==null) {$PSAge11=0;} else {$PSAge11=$_POST['PSAge11'];}
if ($_POST['PSAge12']==null) {$PSAge12=0;} else {$PSAge12=$_POST['PSAge12'];}
if ($_POST['PSAge13']==null) {$PSAge13=0;} else {$PSAge13=$_POST['PSAge13'];}
if ($_POST['PSAge14']==null) {$PSAge14=0;} else {$PSAge14=$_POST['PSAge14'];}
if ($_POST['PSAge15']==null) {$PSAge15=0;} else {$PSAge15=$_POST['PSAge15'];}
if ($_POST['PSAge16']==null) {$PSAge16=0;} else {$PSAge16=$_POST['PSAge16'];}
if ($_POST['PSAge17']==null) {$PSAge17=0;} else {$PSAge17=$_POST['PSAge17'];}
if ($_POST['PSProfilePicture0']==null) {$PSProfilePicture0=0;} else {$PSProfilePicture0=$_POST['PSProfilePicture0'];}
if ($_POST['PSProfilePicture1']==null) {$PSProfilePicture1=0;} else {$PSProfilePicture1=$_POST['PSProfilePicture1'];}
if ($_POST['PSProfilePicture2']==null) {$PSProfilePicture2=0;} else {$PSProfilePicture2=$_POST['PSProfilePicture2'];}
if ($_POST['PSProfileMessage0']==null) {$PSProfileMessage0=0;} else {$PSProfileMessage0=$_POST['PSProfileMessage0'];}
if ($_POST['PSProfileMessage1']==null) {$PSProfileMessage1=0;} else {$PSProfileMessage1=$_POST['PSProfileMessage1'];}
if ($_POST['PSProfileMessage2']==null) {$PSProfileMessage2=0;} else {$PSProfileMessage2=$_POST['PSProfileMessage2'];}
if ($_POST['PSHeight0']==null) {$PSHeight0=0;} else {$PSHeight0=$_POST['PSHeight0'];}
if ($_POST['PSHeight1']==null) {$PSHeight1=0;} else {$PSHeight1=$_POST['PSHeight1'];}
if ($_POST['PSHeight2']==null) {$PSHeight2=0;} else {$PSHeight2=$_POST['PSHeight2'];}
if ($_POST['PSHeight3']==null) {$PSHeight3=0;} else {$PSHeight3=$_POST['PSHeight3'];}
if ($_POST['PSHeight4']==null) {$PSHeight4=0;} else {$PSHeight4=$_POST['PSHeight4'];}
if ($_POST['PSHeight5']==null) {$PSHeight5=0;} else {$PSHeight5=$_POST['PSHeight5'];}
if ($_POST['PSHeight6']==null) {$PSHeight6=0;} else {$PSHeight6=$_POST['PSHeight6'];}
if ($_POST['PSHeight7']==null) {$PSHeight7=0;} else {$PSHeight7=$_POST['PSHeight7'];}
if ($_POST['PSHeight8']==null) {$PSHeight8=0;} else {$PSHeight8=$_POST['PSHeight8'];}
if ($_POST['PSHeight9']==null) {$PSHeight9=0;} else {$PSHeight9=$_POST['PSHeight9'];}
if ($_POST['PSStyle0']==null) {$PSStyle0=0;} else {$PSStyle0=$_POST['PSStyle0'];}
if ($_POST['PSStyle1']==null) {$PSStyle1=0;} else {$PSStyle1=$_POST['PSStyle1'];}
if ($_POST['PSStyle2']==null) {$PSStyle2=0;} else {$PSStyle2=$_POST['PSStyle2'];}
if ($_POST['PSStyle3']==null) {$PSStyle3=0;} else {$PSStyle3=$_POST['PSStyle3'];}
if ($_POST['PSStyle4']==null) {$PSStyle4=0;} else {$PSStyle4=$_POST['PSStyle4'];}
if ($_POST['PSStyle5']==null) {$PSStyle5=0;} else {$PSStyle5=$_POST['PSStyle5'];}
if ($_POST['PSStyle6']==null) {$PSStyle6=0;} else {$PSStyle6=$_POST['PSStyle6'];}
if ($_POST['PSStyle7']==null) {$PSStyle7=0;} else {$PSStyle7=$_POST['PSStyle7'];}
if ($_POST['PSStyle8']==null) {$PSStyle8=0;} else {$PSStyle8=$_POST['PSStyle8'];}
if ($_POST['PSStyle9']==null) {$PSStyle9=0;} else {$PSStyle9=$_POST['PSStyle9'];}
if ($_POST['PSLooks0']==null) {$PSLooks0=0;} else {$PSLooks0=$_POST['PSLooks0'];}
if ($_POST['PSLooks1']==null) {$PSLooks1=0;} else {$PSLooks1=$_POST['PSLooks1'];}
if ($_POST['PSLooks2']==null) {$PSLooks2=0;} else {$PSLooks2=$_POST['PSLooks2'];}
if ($_POST['PSLooks3']==null) {$PSLooks3=0;} else {$PSLooks3=$_POST['PSLooks3'];}
if ($_POST['PSLooks4']==null) {$PSLooks4=0;} else {$PSLooks4=$_POST['PSLooks4'];}
if ($_POST['PSLooks5']==null) {$PSLooks5=0;} else {$PSLooks5=$_POST['PSLooks5'];}
if ($_POST['PSLooks6']==null) {$PSLooks6=0;} else {$PSLooks6=$_POST['PSLooks6'];}
if ($_POST['PSLooks7']==null) {$PSLooks7=0;} else {$PSLooks7=$_POST['PSLooks7'];}
if ($_POST['PSLooks8']==null) {$PSLooks8=0;} else {$PSLooks8=$_POST['PSLooks8'];}
if ($_POST['PSLooks9']==null) {$PSLooks9=0;} else {$PSLooks9=$_POST['PSLooks9'];}
if ($_POST['PSCup0']==null) {$PSCup0=0;} else {$PSCup0=$_POST['PSCup0'];}
if ($_POST['PSCup1']==null) {$PSCup1=0;} else {$PSCup1=$_POST['PSCup1'];}
if ($_POST['PSCup2']==null) {$PSCup2=0;} else {$PSCup2=$_POST['PSCup2'];}
if ($_POST['PSCup3']==null) {$PSCup3=0;} else {$PSCup3=$_POST['PSCup3'];}
if ($_POST['PSCup4']==null) {$PSCup4=0;} else {$PSCup4=$_POST['PSCup4'];}
if ($_POST['PSCup5']==null) {$PSCup5=0;} else {$PSCup5=$_POST['PSCup5'];}
if ($_POST['PSCup6']==null) {$PSCup6=0;} else {$PSCup6=$_POST['PSCup6'];}
if ($_POST['PSCup7']==null) {$PSCup7=0;} else {$PSCup7=$_POST['PSCup7'];}
if ($_POST['PSCup8']==null) {$PSCup8=0;} else {$PSCup8=$_POST['PSCup8'];}
if ($_POST['PSCup9']==null) {$PSCup9=0;} else {$PSCup9=$_POST['PSCup9'];}
if ($_POST['PSBloodType0']==null) {$PSBloodType0=0;} else {$PSBloodType0=$_POST['PSBloodType0'];}
if ($_POST['PSBloodType1']==null) {$PSBloodType1=0;} else {$PSBloodType1=$_POST['PSBloodType1'];}
if ($_POST['PSBloodType2']==null) {$PSBloodType2=0;} else {$PSBloodType2=$_POST['PSBloodType2'];}
if ($_POST['PSBloodType3']==null) {$PSBloodType3=0;} else {$PSBloodType3=$_POST['PSBloodType3'];}
if ($_POST['PSBloodType4']==null) {$PSBloodType4=0;} else {$PSBloodType4=$_POST['PSBloodType4'];}
if ($_POST['PSJob0']==null) {$PSJob0=0;} else {$PSJob0=$_POST['PSJob0'];}
if ($_POST['PSJob1']==null) {$PSJob1=0;} else {$PSJob1=$_POST['PSJob1'];}
if ($_POST['PSJob2']==null) {$PSJob2=0;} else {$PSJob2=$_POST['PSJob2'];}
if ($_POST['PSJob3']==null) {$PSJob3=0;} else {$PSJob3=$_POST['PSJob3'];}
if ($_POST['PSJob4']==null) {$PSJob4=0;} else {$PSJob4=$_POST['PSJob4'];}
if ($_POST['PSJob5']==null) {$PSJob5=0;} else {$PSJob5=$_POST['PSJob5'];}
if ($_POST['PSJob6']==null) {$PSJob6=0;} else {$PSJob6=$_POST['PSJob6'];}
if ($_POST['PSJob7']==null) {$PSJob7=0;} else {$PSJob7=$_POST['PSJob7'];}
if ($_POST['PSJob8']==null) {$PSJob8=0;} else {$PSJob8=$_POST['PSJob8'];}
if ($_POST['PSJob9']==null) {$PSJob9=0;} else {$PSJob9=$_POST['PSJob9'];}
if ($_POST['PSJob10']==null) {$PSJob10=0;} else {$PSJob10=$_POST['PSJob10'];}
if ($_POST['PSJob11']==null) {$PSJob11=0;} else {$PSJob11=$_POST['PSJob11'];}
if ($_POST['PSJob12']==null) {$PSJob12=0;} else {$PSJob12=$_POST['PSJob12'];}
if ($_POST['PSJob13']==null) {$PSJob13=0;} else {$PSJob13=$_POST['PSJob13'];}
if ($_POST['PSJob14']==null) {$PSJob14=0;} else {$PSJob14=$_POST['PSJob14'];}
if ($_POST['PSJob15']==null) {$PSJob15=0;} else {$PSJob15=$_POST['PSJob15'];}
if ($_POST['PSJob16']==null) {$PSJob16=0;} else {$PSJob16=$_POST['PSJob16'];}
if ($_POST['PSJob17']==null) {$PSJob17=0;} else {$PSJob17=$_POST['PSJob17'];}
if ($_POST['PSJob18']==null) {$PSJob18=0;} else {$PSJob18=$_POST['PSJob18'];}
if ($_POST['PSJob19']==null) {$PSJob19=0;} else {$PSJob19=$_POST['PSJob19'];}
if ($_POST['PSJob20']==null) {$PSJob20=0;} else {$PSJob20=$_POST['PSJob20'];}
if ($_POST['PSJob21']==null) {$PSJob21=0;} else {$PSJob21=$_POST['PSJob21'];}
if ($_POST['PSJob22']==null) {$PSJob22=0;} else {$PSJob22=$_POST['PSJob22'];}
if ($_POST['PSJob23']==null) {$PSJob23=0;} else {$PSJob23=$_POST['PSJob23'];}
if ($_POST['PSJob24']==null) {$PSJob24=0;} else {$PSJob24=$_POST['PSJob24'];}
if ($_POST['PSJob25']==null) {$PSJob25=0;} else {$PSJob25=$_POST['PSJob25'];}
if ($_POST['PSJob26']==null) {$PSJob26=0;} else {$PSJob26=$_POST['PSJob26'];}
if ($_POST['PSEduBack0']==null) {$PSEduBack0=0;} else {$PSEduBack0=$_POST['PSEduBack0'];}
if ($_POST['PSEduBack1']==null) {$PSEduBack1=0;} else {$PSEduBack1=$_POST['PSEduBack1'];}
if ($_POST['PSEduBack2']==null) {$PSEduBack2=0;} else {$PSEduBack2=$_POST['PSEduBack2'];}
if ($_POST['PSEduBack3']==null) {$PSEduBack3=0;} else {$PSEduBack3=$_POST['PSEduBack3'];}
if ($_POST['PSEduBack4']==null) {$PSEduBack4=0;} else {$PSEduBack4=$_POST['PSEduBack4'];}
if ($_POST['PSEduBack5']==null) {$PSEduBack5=0;} else {$PSEduBack5=$_POST['PSEduBack5'];}
if ($_POST['PSZodiac0']==null) {$PSZodiac0=0;} else {$PSZodiac0=$_POST['PSZodiac0'];}
if ($_POST['PSZodiac1']==null) {$PSZodiac1=0;} else {$PSZodiac1=$_POST['PSZodiac1'];}
if ($_POST['PSZodiac2']==null) {$PSZodiac2=0;} else {$PSZodiac2=$_POST['PSZodiac2'];}
if ($_POST['PSZodiac3']==null) {$PSZodiac3=0;} else {$PSZodiac3=$_POST['PSZodiac3'];}
if ($_POST['PSZodiac4']==null) {$PSZodiac4=0;} else {$PSZodiac4=$_POST['PSZodiac4'];}
if ($_POST['PSZodiac5']==null) {$PSZodiac5=0;} else {$PSZodiac5=$_POST['PSZodiac5'];}
if ($_POST['PSZodiac6']==null) {$PSZodiac6=0;} else {$PSZodiac6=$_POST['PSZodiac6'];}
if ($_POST['PSZodiac7']==null) {$PSZodiac7=0;} else {$PSZodiac7=$_POST['PSZodiac7'];}
if ($_POST['PSZodiac8']==null) {$PSZodiac8=0;} else {$PSZodiac8=$_POST['PSZodiac8'];}
if ($_POST['PSZodiac9']==null) {$PSZodiac9=0;} else {$PSZodiac9=$_POST['PSZodiac9'];}
if ($_POST['PSZodiac10']==null) {$PSZodiac10=0;} else {$PSZodiac10=$_POST['PSZodiac10'];}
if ($_POST['PSZodiac11']==null) {$PSZodiac11=0;} else {$PSZodiac11=$_POST['PSZodiac11'];}
if ($_POST['PSZodiac12']==null) {$PSZodiac12=0;} else {$PSZodiac12=$_POST['PSZodiac12'];}
if ($_POST['PSMarriageStatus0']==null) {$PSMarriageStatus0=0;} else {$PSMarriageStatus0=$_POST['PSMarriageStatus0'];}
if ($_POST['PSMarriageStatus1']==null) {$PSMarriageStatus1=0;} else {$PSMarriageStatus1=$_POST['PSMarriageStatus1'];}
if ($_POST['PSMarriageStatus2']==null) {$PSMarriageStatus2=0;} else {$PSMarriageStatus2=$_POST['PSMarriageStatus2'];}
if ($_POST['PSMarriageStatus3']==null) {$PSMarriageStatus3=0;} else {$PSMarriageStatus3=$_POST['PSMarriageStatus3'];}
if ($_POST['PSMarriageStatus4']==null) {$PSMarriageStatus4=0;} else {$PSMarriageStatus4=$_POST['PSMarriageStatus4'];}
if ($_POST['PSMarriageStatus5']==null) {$PSMarriageStatus5=0;} else {$PSMarriageStatus5=$_POST['PSMarriageStatus5'];}
if ($_POST['PSMarriageStatus6']==null) {$PSMarriageStatus6=0;} else {$PSMarriageStatus6=$_POST['PSMarriageStatus6'];}
if ($_POST['PSKids0']==null) {$PSKids0=0;} else {$PSKids0=$_POST['PSKids0'];}
if ($_POST['PSKids1']==null) {$PSKids1=0;} else {$PSKids1=$_POST['PSKids1'];}
if ($_POST['PSKids2']==null) {$PSKids2=0;} else {$PSKids2=$_POST['PSKids2'];}
if ($_POST['PSKids3']==null) {$PSKids3=0;} else {$PSKids3=$_POST['PSKids3'];}
if ($_POST['PSTabacco0']==null) {$PSTabacco0=0;} else {$PSTabacco0=$_POST['PSTabacco0'];}
if ($_POST['PSTabacco1']==null) {$PSTabacco1=0;} else {$PSTabacco1=$_POST['PSTabacco1'];}
if ($_POST['PSTabacco2']==null) {$PSTabacco2=0;} else {$PSTabacco2=$_POST['PSTabacco2'];}
if ($_POST['PSTabacco3']==null) {$PSTabacco3=0;} else {$PSTabacco3=$_POST['PSTabacco3'];}
if ($_POST['PSTabacco4']==null) {$PSTabacco4=0;} else {$PSTabacco4=$_POST['PSTabacco4'];}
if ($_POST['PSAlchole0']==null) {$PSAlchole0=0;} else {$PSAlchole0=$_POST['PSAlchole0'];}
if ($_POST['PSAlchole1']==null) {$PSAlchole1=0;} else {$PSAlchole1=$_POST['PSAlchole1'];}
if ($_POST['PSAlchole2']==null) {$PSAlchole2=0;} else {$PSAlchole2=$_POST['PSAlchole2'];}
if ($_POST['PSAlchole3']==null) {$PSAlchole3=0;} else {$PSAlchole3=$_POST['PSAlchole3'];}
if ($_POST['PSCar0']==null) {$PSCar0=0;} else {$PSCar0=$_POST['PSCar0'];}
if ($_POST['PSCar1']==null) {$PSCar1=0;} else {$PSCar1=$_POST['PSCar1'];}
if ($_POST['PSCar2']==null) {$PSCar2=0;} else {$PSCar2=$_POST['PSCar2'];}
if ($_POST['PSInterest0']==null) {$PSInterest0=0;} else {$PSInterest0=$_POST['PSInterest0'];}
if ($_POST['PSInterest1']==null) {$PSInterest1=0;} else {$PSInterest1=$_POST['PSInterest1'];}
if ($_POST['PSInterest2']==null) {$PSInterest2=0;} else {$PSInterest2=$_POST['PSInterest2'];}
if ($_POST['PSInterest3']==null) {$PSInterest3=0;} else {$PSInterest3=$_POST['PSInterest3'];}
if ($_POST['PSInterest4']==null) {$PSInterest4=0;} else {$PSInterest4=$_POST['PSInterest4'];}
if ($_POST['PSInterest5']==null) {$PSInterest5=0;} else {$PSInterest5=$_POST['PSInterest5'];}
if ($_POST['PSInterest6']==null) {$PSInterest6=0;} else {$PSInterest6=$_POST['PSInterest6'];}
if ($_POST['PSInterest7']==null) {$PSInterest7=0;} else {$PSInterest7=$_POST['PSInterest7'];}
if ($_POST['PSInterest8']==null) {$PSInterest8=0;} else {$PSInterest8=$_POST['PSInterest8'];}
if ($_POST['PSInterest9']==null) {$PSInterest9=0;} else {$PSInterest9=$_POST['PSInterest9'];}
if ($_POST['PSInterest10']==null) {$PSInterest10=0;} else {$PSInterest10=$_POST['PSInterest10'];}
if ($_POST['PSInterest11']==null) {$PSInterest11=0;} else {$PSInterest11=$_POST['PSInterest11'];}
if ($_POST['PSInterest12']==null) {$PSInterest12=0;} else {$PSInterest12=$_POST['PSInterest12'];}
if ($_POST['PSInterest13']==null) {$PSInterest13=0;} else {$PSInterest13=$_POST['PSInterest13'];}
if ($_POST['PSInterest14']==null) {$PSInterest14=0;} else {$PSInterest14=$_POST['PSInterest14'];}
if ($_POST['PSInterest15']==null) {$PSInterest15=0;} else {$PSInterest15=$_POST['PSInterest15'];}
if ($_POST['PSInterest16']==null) {$PSInterest16=0;} else {$PSInterest16=$_POST['PSInterest16'];}
if ($_POST['PSInterest17']==null) {$PSInterest17=0;} else {$PSInterest17=$_POST['PSInterest17'];}
if ($_POST['PSInterest18']==null) {$PSInterest18=0;} else {$PSInterest18=$_POST['PSInterest18'];}
if ($_POST['PSInterest19']==null) {$PSInterest19=0;} else {$PSInterest19=$_POST['PSInterest19'];}
if ($_POST['PSInterest20']==null) {$PSInterest20=0;} else {$PSInterest20=$_POST['PSInterest20'];}
if ($_POST['PSInterest21']==null) {$PSInterest21=0;} else {$PSInterest21=$_POST['PSInterest21'];}
if ($_POST['PSInterest22']==null) {$PSInterest22=0;} else {$PSInterest22=$_POST['PSInterest22'];}
if ($_POST['PSInterest23']==null) {$PSInterest23=0;} else {$PSInterest23=$_POST['PSInterest23'];}
if ($_POST['PSInterest24']==null) {$PSInterest24=0;} else {$PSInterest24=$_POST['PSInterest24'];}
if ($_POST['PSInterest25']==null) {$PSInterest25=0;} else {$PSInterest25=$_POST['PSInterest25'];}
if ($_POST['PSInterest26']==null) {$PSInterest26=0;} else {$PSInterest26=$_POST['PSInterest26'];}
if ($_POST['PSInterest27']==null) {$PSInterest27=0;} else {$PSInterest27=$_POST['PSInterest27'];}
if ($_POST['PSInterest28']==null) {$PSInterest28=0;} else {$PSInterest28=$_POST['PSInterest28'];}
if ($_POST['PSPersonality0']==null) {$PSPersonality0=0;} else {$PSPersonality0=$_POST['PSPersonality0'];}
if ($_POST['PSPersonality1']==null) {$PSPersonality1=0;} else {$PSPersonality1=$_POST['PSPersonality1'];}
if ($_POST['PSPersonality2']==null) {$PSPersonality2=0;} else {$PSPersonality2=$_POST['PSPersonality2'];}
if ($_POST['PSPersonality3']==null) {$PSPersonality3=0;} else {$PSPersonality3=$_POST['PSPersonality3'];}
if ($_POST['PSPersonality4']==null) {$PSPersonality4=0;} else {$PSPersonality4=$_POST['PSPersonality4'];}
if ($_POST['PSPersonality5']==null) {$PSPersonality5=0;} else {$PSPersonality5=$_POST['PSPersonality5'];}
if ($_POST['PSPersonality6']==null) {$PSPersonality6=0;} else {$PSPersonality6=$_POST['PSPersonality6'];}
if ($_POST['PSPersonality7']==null) {$PSPersonality7=0;} else {$PSPersonality7=$_POST['PSPersonality7'];}
if ($_POST['PSPersonality8']==null) {$PSPersonality8=0;} else {$PSPersonality8=$_POST['PSPersonality8'];}
if ($_POST['PSPersonality9']==null) {$PSPersonality9=0;} else {$PSPersonality9=$_POST['PSPersonality9'];}
if ($_POST['PSPersonality10']==null) {$PSPersonality10=0;} else {$PSPersonality10=$_POST['PSPersonality10'];}
if ($_POST['PSPersonality11']==null) {$PSPersonality11=0;} else {$PSPersonality11=$_POST['PSPersonality11'];}
if ($_POST['PSPersonality12']==null) {$PSPersonality12=0;} else {$PSPersonality12=$_POST['PSPersonality12'];}
if ($_POST['PSPersonality13']==null) {$PSPersonality13=0;} else {$PSPersonality13=$_POST['PSPersonality13'];}
if ($_POST['PSPersonality14']==null) {$PSPersonality14=0;} else {$PSPersonality14=$_POST['PSPersonality14'];}
if ($_POST['PSPersonality15']==null) {$PSPersonality15=0;} else {$PSPersonality15=$_POST['PSPersonality15'];}
if ($_POST['PSPersonality16']==null) {$PSPersonality16=0;} else {$PSPersonality16=$_POST['PSPersonality16'];}
if ($_POST['PSPersonality17']==null) {$PSPersonality17=0;} else {$PSPersonality17=$_POST['PSPersonality17'];}
if ($_POST['PSPersonality18']==null) {$PSPersonality18=0;} else {$PSPersonality18=$_POST['PSPersonality18'];}
if ($_POST['PSPersonality19']==null) {$PSPersonality19=0;} else {$PSPersonality19=$_POST['PSPersonality19'];}
if ($_POST['PSPersonality20']==null) {$PSPersonality20=0;} else {$PSPersonality20=$_POST['PSPersonality20'];}
if ($_POST['PSPersonality21']==null) {$PSPersonality21=0;} else {$PSPersonality21=$_POST['PSPersonality21'];}
if ($_POST['PSPersonality22']==null) {$PSPersonality22=0;} else {$PSPersonality22=$_POST['PSPersonality22'];}
if ($_POST['PSPersonality23']==null) {$PSPersonality23=0;} else {$PSPersonality23=$_POST['PSPersonality23'];}
if ($_POST['PSPersonality24']==null) {$PSPersonality24=0;} else {$PSPersonality24=$_POST['PSPersonality24'];}
if ($_POST['PSPersonality25']==null) {$PSPersonality25=0;} else {$PSPersonality25=$_POST['PSPersonality25'];}
if ($_POST['PSPersonality26']==null) {$PSPersonality26=0;} else {$PSPersonality26=$_POST['PSPersonality26'];}
if ($_POST['PSPersonality27']==null) {$PSPersonality27=0;} else {$PSPersonality27=$_POST['PSPersonality27'];}
if ($_POST['PSPersonality28']==null) {$PSPersonality28=0;} else {$PSPersonality28=$_POST['PSPersonality28'];}
if ($_POST['PSPersonality29']==null) {$PSPersonality29=0;} else {$PSPersonality29=$_POST['PSPersonality29'];}
if ($_POST['PSPersonality30']==null) {$PSPersonality30=0;} else {$PSPersonality30=$_POST['PSPersonality30'];}
if ($_POST['PSPersonality31']==null) {$PSPersonality31=0;} else {$PSPersonality31=$_POST['PSPersonality31'];}
if ($_POST['PSPersonality32']==null) {$PSPersonality32=0;} else {$PSPersonality32=$_POST['PSPersonality32'];}
if ($_POST['PSPersonality33']==null) {$PSPersonality33=0;} else {$PSPersonality33=$_POST['PSPersonality33'];}
if ($_POST['PSPersonality34']==null) {$PSPersonality34=0;} else {$PSPersonality34=$_POST['PSPersonality34'];}
if ($_POST['PSPersonality35']==null) {$PSPersonality35=0;} else {$PSPersonality35=$_POST['PSPersonality35'];}
if ($_POST['PSPersonality36']==null) {$PSPersonality36=0;} else {$PSPersonality36=$_POST['PSPersonality36'];}
if ($_POST['PSPersonality37']==null) {$PSPersonality37=0;} else {$PSPersonality37=$_POST['PSPersonality37'];}
if ($_POST['PSPersonality38']==null) {$PSPersonality38=0;} else {$PSPersonality38=$_POST['PSPersonality38'];}
if ($_POST['PSPersonality39']==null) {$PSPersonality39=0;} else {$PSPersonality39=$_POST['PSPersonality39'];}
if ($_POST['PSPersonality40']==null) {$PSPersonality40=0;} else {$PSPersonality40=$_POST['PSPersonality40'];}
if ($_POST['PSPersonality41']==null) {$PSPersonality41=0;} else {$PSPersonality41=$_POST['PSPersonality41'];}
if ($_POST['PSPersonality42']==null) {$PSPersonality42=0;} else {$PSPersonality42=$_POST['PSPersonality42'];}
if ($_POST['PSPersonality43']==null) {$PSPersonality43=0;} else {$PSPersonality43=$_POST['PSPersonality43'];}
if ($_POST['PSPersonality44']==null) {$PSPersonality44=0;} else {$PSPersonality44=$_POST['PSPersonality44'];}
if ($_POST['PSPersonality45']==null) {$PSPersonality45=0;} else {$PSPersonality45=$_POST['PSPersonality45'];}
if ($_POST['PSPersonality46']==null) {$PSPersonality46=0;} else {$PSPersonality46=$_POST['PSPersonality46'];}
if ($_POST['PSAnnuIncome0']==null) {$PSAnnuIncome0=0;} else {$PSAnnuIncome0=$_POST['PSAnnuIncome0'];}
if ($_POST['PSAnnuIncome1']==null) {$PSAnnuIncome1=0;} else {$PSAnnuIncome1=$_POST['PSAnnuIncome1'];}
if ($_POST['PSAnnuIncome2']==null) {$PSAnnuIncome2=0;} else {$PSAnnuIncome2=$_POST['PSAnnuIncome2'];}
if ($_POST['PSAnnuIncome3']==null) {$PSAnnuIncome3=0;} else {$PSAnnuIncome3=$_POST['PSAnnuIncome3'];}
if ($_POST['PSAnnuIncome4']==null) {$PSAnnuIncome4=0;} else {$PSAnnuIncome4=$_POST['PSAnnuIncome4'];}
if ($_POST['PSAnnuIncome5']==null) {$PSAnnuIncome5=0;} else {$PSAnnuIncome5=$_POST['PSAnnuIncome5'];}
if ($_POST['PSAnnuIncome6']==null) {$PSAnnuIncome6=0;} else {$PSAnnuIncome6=$_POST['PSAnnuIncome6'];}
if ($_POST['PSAnnuIncome7']==null) {$PSAnnuIncome7=0;} else {$PSAnnuIncome7=$_POST['PSAnnuIncome7'];}
if ($_POST['PSAnnuIncome8']==null) {$PSAnnuIncome8=0;} else {$PSAnnuIncome8=$_POST['PSAnnuIncome8'];}
if ($_POST['PSAnnuIncome9']==null) {$PSAnnuIncome9=0;} else {$PSAnnuIncome9=$_POST['PSAnnuIncome9'];}
if ($_POST['PSAnnuIncome10']==null) {$PSAnnuIncome10=0;} else {$PSAnnuIncome10=$_POST['PSAnnuIncome10'];}
if ($_POST['PSCute0']==null) {$PSCute0=0;} else {$PSCute0=$_POST['PSCute0'];}
if ($_POST['PSCute1']==null) {$PSCute1=0;} else {$PSCute1=$_POST['PSCute1'];}
if ($_POST['PSCute2']==null) {$PSCute2=0;} else {$PSCute2=$_POST['PSCute2'];}
if ($_POST['PSCute3']==null) {$PSCute3=0;} else {$PSCute3=$_POST['PSCute3'];}
if ($_POST['PSCute4']==null) {$PSCute4=0;} else {$PSCute4=$_POST['PSCute4'];}
if ($_POST['PSCute5']==null) {$PSCute5=0;} else {$PSCute5=$_POST['PSCute5'];}
if ($_POST['PSSexy0']==null) {$PSSexy0=0;} else {$PSSexy0=$_POST['PSSexy0'];}
if ($_POST['PSSexy1']==null) {$PSSexy1=0;} else {$PSSexy1=$_POST['PSSexy1'];}
if ($_POST['PSSexy2']==null) {$PSSexy2=0;} else {$PSSexy2=$_POST['PSSexy2'];}
if ($_POST['PSSexy3']==null) {$PSSexy3=0;} else {$PSSexy3=$_POST['PSSexy3'];}
if ($_POST['PSSexy4']==null) {$PSSexy4=0;} else {$PSSexy4=$_POST['PSSexy4'];}
if ($_POST['PSSexy5']==null) {$PSSexy5=0;} else {$PSSexy5=$_POST['PSSexy5'];}
if ($_POST['PSKindness0']==null) {$PSKindness0=0;} else {$PSKindness0=$_POST['PSKindness0'];}
if ($_POST['PSKindness1']==null) {$PSKindness1=0;} else {$PSKindness1=$_POST['PSKindness1'];}
if ($_POST['PSKindness2']==null) {$PSKindness2=0;} else {$PSKindness2=$_POST['PSKindness2'];}
if ($_POST['PSKindness3']==null) {$PSKindness3=0;} else {$PSKindness3=$_POST['PSKindness3'];}
if ($_POST['PSKindness4']==null) {$PSKindness4=0;} else {$PSKindness4=$_POST['PSKindness4'];}
if ($_POST['PSKindness5']==null) {$PSKindness5=0;} else {$PSKindness5=$_POST['PSKindness5'];}
if ($_POST['PSSmartness0']==null) {$PSSmartness0=0;} else {$PSSmartness0=$_POST['PSSmartness0'];}
if ($_POST['PSSmartness1']==null) {$PSSmartness1=0;} else {$PSSmartness1=$_POST['PSSmartness1'];}
if ($_POST['PSSmartness2']==null) {$PSSmartness2=0;} else {$PSSmartness2=$_POST['PSSmartness2'];}
if ($_POST['PSSmartness3']==null) {$PSSmartness3=0;} else {$PSSmartness3=$_POST['PSSmartness3'];}
if ($_POST['PSSmartness4']==null) {$PSSmartness4=0;} else {$PSSmartness4=$_POST['PSSmartness4'];}
if ($_POST['PSSmartness5']==null) {$PSSmartness5=0;} else {$PSSmartness5=$_POST['PSSmartness5'];}
if ($_POST['PSNeatness0']==null) {$PSNeatness0=0;} else {$PSNeatness0=$_POST['PSNeatness0'];}
if ($_POST['PSNeatness1']==null) {$PSNeatness1=0;} else {$PSNeatness1=$_POST['PSNeatness1'];}
if ($_POST['PSNeatness2']==null) {$PSNeatness2=0;} else {$PSNeatness2=$_POST['PSNeatness2'];}
if ($_POST['PSNeatness3']==null) {$PSNeatness3=0;} else {$PSNeatness3=$_POST['PSNeatness3'];}
if ($_POST['PSNeatness4']==null) {$PSNeatness4=0;} else {$PSNeatness4=$_POST['PSNeatness4'];}
if ($_POST['PSNeatness5']==null) {$PSNeatness5=0;} else {$PSNeatness5=$_POST['PSNeatness5'];}
if ($_POST['PSFashionable0']==null) {$PSFashionable0=0;} else {$PSFashionable0=$_POST['PSFashionable0'];}
if ($_POST['PSFashionable1']==null) {$PSFashionable1=0;} else {$PSFashionable1=$_POST['PSFashionable1'];}
if ($_POST['PSFashionable2']==null) {$PSFashionable2=0;} else {$PSFashionable2=$_POST['PSFashionable2'];}
if ($_POST['PSFashionable3']==null) {$PSFashionable3=0;} else {$PSFashionable3=$_POST['PSFashionable3'];}
if ($_POST['PSFashionable4']==null) {$PSFashionable4=0;} else {$PSFashionable4=$_POST['PSFashionable4'];}
if ($_POST['PSFashionable5']==null) {$PSFashionable5=0;} else {$PSFashionable5=$_POST['PSFashionable5'];}
if ($_POST['PSBrightness0']==null) {$PSBrightness0=0;} else {$PSBrightness0=$_POST['PSBrightness0'];}
if ($_POST['PSBrightness1']==null) {$PSBrightness1=0;} else {$PSBrightness1=$_POST['PSBrightness1'];}
if ($_POST['PSBrightness2']==null) {$PSBrightness2=0;} else {$PSBrightness2=$_POST['PSBrightness2'];}
if ($_POST['PSBrightness3']==null) {$PSBrightness3=0;} else {$PSBrightness3=$_POST['PSBrightness3'];}
if ($_POST['PSBrightness4']==null) {$PSBrightness4=0;} else {$PSBrightness4=$_POST['PSBrightness4'];}
if ($_POST['PSBrightness5']==null) {$PSBrightness5=0;} else {$PSBrightness5=$_POST['PSBrightness5'];}
if ($_POST['PSElegance0']==null) {$PSElegance0=0;} else {$PSElegance0=$_POST['PSElegance0'];}
if ($_POST['PSElegance1']==null) {$PSElegance1=0;} else {$PSElegance1=$_POST['PSElegance1'];}
if ($_POST['PSElegance2']==null) {$PSElegance2=0;} else {$PSElegance2=$_POST['PSElegance2'];}
if ($_POST['PSElegance3']==null) {$PSElegance3=0;} else {$PSElegance3=$_POST['PSElegance3'];}
if ($_POST['PSElegance4']==null) {$PSElegance4=0;} else {$PSElegance4=$_POST['PSElegance4'];}
if ($_POST['PSElegance5']==null) {$PSElegance5=0;} else {$PSElegance5=$_POST['PSElegance5'];}


$command_post="python3 set_profilesearchsetting1.py " //pythonに引数を渡す
.$_POST['UUID']." "
.$PSGender0." "
.$PSGender1." "
.$PSGender2." "
.$PSGender3." "
.$PSGender4." "
.$PSGender5." "
.$PSGender6." "
.$PSGender7." "
.$PSAge0." "
.$PSAge1." "
.$PSAge2." "
.$PSAge3." "
.$PSAge4." "
.$PSAge5." "
.$PSAge6." "
.$PSAge7." "
.$PSAge8." "
.$PSAge9." "
.$PSAge10." "
.$PSAge11." "
.$PSAge12." "
.$PSAge13." "
.$PSAge14." "
.$PSAge15." "
.$PSAge16." "
.$PSAge17." "
.$PSProfilePicture0." "
.$PSProfilePicture1." "
.$PSProfilePicture2." "
.$PSProfileMessage0." "
.$PSProfileMessage1." "
.$PSProfileMessage2." "
.$PSHeight0." "
.$PSHeight1." "
.$PSHeight2." "
.$PSHeight3." "
.$PSHeight4." "
.$PSHeight5." "
.$PSHeight6." "
.$PSHeight7." "
.$PSHeight8." "
.$PSHeight9." "
.$PSStyle0." "
.$PSStyle1." "
.$PSStyle2." "
.$PSStyle3." "
.$PSStyle4." "
.$PSStyle5." "
.$PSStyle6." "
.$PSStyle7." "
.$PSStyle8." "
.$PSStyle9." "
.$PSLooks0." "
.$PSLooks1." "
.$PSLooks2." "
.$PSLooks3." "
.$PSLooks4." "
.$PSLooks5." "
.$PSLooks6." "
.$PSLooks7." "
.$PSLooks8." "
.$PSLooks9." "
.$PSCup0." "
.$PSCup1." "
.$PSCup2." "
.$PSCup3." "
.$PSCup4." "
.$PSCup5." "
.$PSCup6." "
.$PSCup7." "
.$PSCup8." "
.$PSCup9." "
.$PSBloodType0." "
.$PSBloodType1." "
.$PSBloodType2." "
.$PSBloodType3." "
.$PSBloodType4." "
.$PSJob0." "
.$PSJob1." "
.$PSJob2." "
.$PSJob3." "
.$PSJob4." "
.$PSJob5." "
.$PSJob6." "
.$PSJob7." "
.$PSJob8." "
.$PSJob9." "
.$PSJob10." "
.$PSJob11." "
.$PSJob12." "
.$PSJob13." "
.$PSJob14." "
.$PSJob15." "
.$PSJob16." "
.$PSJob17." "
.$PSJob18." "
.$PSJob19." "
.$PSJob20." "
.$PSJob21." "
.$PSJob22." "
.$PSJob23." "
.$PSJob24." "
.$PSJob25." "
.$PSJob26." "
.$PSEduBack0." "
.$PSEduBack1." "
.$PSEduBack2." "
.$PSEduBack3." "
.$PSEduBack4." "
.$PSEduBack5." "
.$PSZodiac0." "
.$PSZodiac1." "
.$PSZodiac2." "
.$PSZodiac3." "
.$PSZodiac4." "
.$PSZodiac5." "
.$PSZodiac6." "
.$PSZodiac7." "
.$PSZodiac8." "
.$PSZodiac9." "
.$PSZodiac10." "
.$PSZodiac11." "
.$PSZodiac12." "
.$PSMarriageStatus0." "
.$PSMarriageStatus1." "
.$PSMarriageStatus2." "
.$PSMarriageStatus3." "
.$PSMarriageStatus4." "
.$PSMarriageStatus5." "
.$PSMarriageStatus6." "
.$PSKids0." "
.$PSKids1." "
.$PSKids2." "
.$PSKids3." "
.$PSTabacco0." "
.$PSTabacco1." "
.$PSTabacco2." "
.$PSTabacco3." "
.$PSTabacco4." "
.$PSAlchole0." "
.$PSAlchole1." "
.$PSAlchole2." "
.$PSAlchole3." "
.$PSCar0." "
.$PSCar1." "
.$PSCar2." "
.$PSInterest0." "
.$PSInterest1." "
.$PSInterest2." "
.$PSInterest3." "
.$PSInterest4." "
.$PSInterest5." "
.$PSInterest6." "
.$PSInterest7." "
.$PSInterest8." "
.$PSInterest9." "
.$PSInterest10." "
.$PSInterest11." "
.$PSInterest12." "
.$PSInterest13." "
.$PSInterest14." "
.$PSInterest15." "
.$PSInterest16." "
.$PSInterest17." "
.$PSInterest18." "
.$PSInterest19." "
.$PSInterest20." "
.$PSInterest21." "
.$PSInterest22." "
.$PSInterest23." "
.$PSInterest24." "
.$PSInterest25." "
.$PSInterest26." "
.$PSInterest27." "
.$PSInterest28." "
.$PSPersonality0." "
.$PSPersonality1." "
.$PSPersonality2." "
.$PSPersonality3." "
.$PSPersonality4." "
.$PSPersonality5." "
.$PSPersonality6." "
.$PSPersonality7." "
.$PSPersonality8." "
.$PSPersonality9." "
.$PSPersonality10." "
.$PSPersonality11." "
.$PSPersonality12." "
.$PSPersonality13." "
.$PSPersonality14." "
.$PSPersonality15." "
.$PSPersonality16." "
.$PSPersonality17." "
.$PSPersonality18." "
.$PSPersonality19." "
.$PSPersonality20." "
.$PSPersonality21." "
.$PSPersonality22." "
.$PSPersonality23." "
.$PSPersonality24." "
.$PSPersonality25." "
.$PSPersonality26." "
.$PSPersonality27." "
.$PSPersonality28." "
.$PSPersonality29." "
.$PSPersonality30." "
.$PSPersonality31." "
.$PSPersonality32." "
.$PSPersonality33." "
.$PSPersonality34." "
.$PSPersonality35." "
.$PSPersonality36." "
.$PSPersonality37." "
.$PSPersonality38." "
.$PSPersonality39." "
.$PSPersonality40." "
.$PSPersonality41." "
.$PSPersonality42." "
.$PSPersonality43." "
.$PSPersonality44." "
.$PSPersonality45." "
.$PSPersonality46." "
.$PSAnnuIncome0." "
.$PSAnnuIncome1." "
.$PSAnnuIncome2." "
.$PSAnnuIncome3." "
.$PSAnnuIncome4." "
.$PSAnnuIncome5." "
.$PSAnnuIncome6." "
.$PSAnnuIncome7." "
.$PSAnnuIncome8." "
.$PSAnnuIncome9." "
.$PSAnnuIncome10." "
.$PSCute0." "
.$PSCute1." "
.$PSCute2." "
.$PSCute3." "
.$PSCute4." "
.$PSCute5." "
.$PSSexy0." "
.$PSSexy1." "
.$PSSexy2." "
.$PSSexy3." "
.$PSSexy4." "
.$PSSexy5." "
.$PSKindness0." "
.$PSKindness1." "
.$PSKindness2." "
.$PSKindness3." "
.$PSKindness4." "
.$PSKindness5." "
.$PSSmartness0." "
.$PSSmartness1." "
.$PSSmartness2." "
.$PSSmartness3." "
.$PSSmartness4." "
.$PSSmartness5." "
.$PSNeatness0." "
.$PSNeatness1." "
.$PSNeatness2." "
.$PSNeatness3." "
.$PSNeatness4." "
.$PSNeatness5." "
.$PSFashionable0." "
.$PSFashionable1." "
.$PSFashionable2." "
.$PSFashionable3." "
.$PSFashionable4." "
.$PSFashionable5." "
.$PSBrightness0." "
.$PSBrightness1." "
.$PSBrightness2." "
.$PSBrightness3." "
.$PSBrightness4." "
.$PSBrightness5." "
.$PSElegance0." "
.$PSElegance1." "
.$PSElegance2." "
.$PSElegance3." "
.$PSElegance4." "
.$PSElegance5;
exec($command_post, $output); //python実行と、返り数受け取り

echo json_encode(
  [
    "result" => $output,
  ]
);
