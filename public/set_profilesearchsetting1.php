<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Content-Type');
$rest_json = file_get_contents("php://input"); // JSONでPOSTされたデータを取り出す
$_POST = json_decode($rest_json, true); // JSON文字列をデコード
if ($_POST['PSGender0']=="") {$PSGender0=0;} else {$PSGender0=$_POST['PSGender0'];}
if ($_POST['PSGender1']=="") {$PSGender1=0;} else {$PSGender1=$_POST['PSGender1'];}
if ($_POST['PSGender2']=="") {$PSGender2=0;} else {$PSGender2=$_POST['PSGender2'];}
if ($_POST['PSGender3']=="") {$PSGender3=0;} else {$PSGender3=$_POST['PSGender3'];}
if ($_POST['PSGender4']=="") {$PSGender4=0;} else {$PSGender4=$_POST['PSGender4'];}
if ($_POST['PSGender5']=="") {$PSGender5=0;} else {$PSGender5=$_POST['PSGender5'];}
if ($_POST['PSGender6']=="") {$PSGender6=0;} else {$PSGender6=$_POST['PSGender6'];}
if ($_POST['PSGender7']=="") {$PSGender7=0;} else {$PSGender7=$_POST['PSGender7'];}
if ($_POST['PSAge0']=="") {$PSAge0=0;} else {$PSAge0=$_POST['PSAge0'];}
if ($_POST['PSAge1']=="") {$PSAge1=0;} else {$PSAge1=$_POST['PSAge1'];}
if ($_POST['PSAge2']=="") {$PSAge2=0;} else {$PSAge2=$_POST['PSAge2'];}
if ($_POST['PSAge3']=="") {$PSAge3=0;} else {$PSAge3=$_POST['PSAge3'];}
if ($_POST['PSAge4']=="") {$PSAge4=0;} else {$PSAge4=$_POST['PSAge4'];}
if ($_POST['PSAge5']=="") {$PSAge5=0;} else {$PSAge5=$_POST['PSAge5'];}
if ($_POST['PSAge6']=="") {$PSAge6=0;} else {$PSAge6=$_POST['PSAge6'];}
if ($_POST['PSAge7']=="") {$PSAge7=0;} else {$PSAge7=$_POST['PSAge7'];}
if ($_POST['PSAge8']=="") {$PSAge8=0;} else {$PSAge8=$_POST['PSAge8'];}
if ($_POST['PSAge9']=="") {$PSAge9=0;} else {$PSAge9=$_POST['PSAge9'];}
if ($_POST['PSAge10']=="") {$PSAge10=0;} else {$PSAge10=$_POST['PSAge10'];}
if ($_POST['PSAge11']=="") {$PSAge11=0;} else {$PSAge11=$_POST['PSAge11'];}
if ($_POST['PSAge12']=="") {$PSAge12=0;} else {$PSAge12=$_POST['PSAge12'];}
if ($_POST['PSAge13']=="") {$PSAge13=0;} else {$PSAge13=$_POST['PSAge13'];}
if ($_POST['PSAge14']=="") {$PSAge14=0;} else {$PSAge14=$_POST['PSAge14'];}
if ($_POST['PSAge15']=="") {$PSAge15=0;} else {$PSAge15=$_POST['PSAge15'];}
if ($_POST['PSAge16']=="") {$PSAge16=0;} else {$PSAge16=$_POST['PSAge16'];}
if ($_POST['PSAge17']=="") {$PSAge17=0;} else {$PSAge17=$_POST['PSAge17'];}
if ($_POST['PSProfilePicture0']=="") {$PSProfilePicture0=0;} else {$PSProfilePicture0=$_POST['PSProfilePicture0'];}
if ($_POST['PSProfilePicture1']=="") {$PSProfilePicture1=0;} else {$PSProfilePicture1=$_POST['PSProfilePicture1'];}
if ($_POST['PSProfilePicture2']=="") {$PSProfilePicture2=0;} else {$PSProfilePicture2=$_POST['PSProfilePicture2'];}
if ($_POST['PSProfileMessage0']=="") {$PSProfileMessage0=0;} else {$PSProfileMessage0=$_POST['PSProfileMessage0'];}
if ($_POST['PSProfileMessage1']=="") {$PSProfileMessage1=0;} else {$PSProfileMessage1=$_POST['PSProfileMessage1'];}
if ($_POST['PSProfileMessage2']=="") {$PSProfileMessage2=0;} else {$PSProfileMessage2=$_POST['PSProfileMessage2'];}
if ($_POST['PSHeight0']=="") {$PSHeight0=0;} else {$PSHeight0=$_POST['PSHeight0'];}
if ($_POST['PSHeight1']=="") {$PSHeight1=0;} else {$PSHeight1=$_POST['PSHeight1'];}
if ($_POST['PSHeight2']=="") {$PSHeight2=0;} else {$PSHeight2=$_POST['PSHeight2'];}
if ($_POST['PSHeight3']=="") {$PSHeight3=0;} else {$PSHeight3=$_POST['PSHeight3'];}
if ($_POST['PSHeight4']=="") {$PSHeight4=0;} else {$PSHeight4=$_POST['PSHeight4'];}
if ($_POST['PSHeight5']=="") {$PSHeight5=0;} else {$PSHeight5=$_POST['PSHeight5'];}
if ($_POST['PSHeight6']=="") {$PSHeight6=0;} else {$PSHeight6=$_POST['PSHeight6'];}
if ($_POST['PSHeight7']=="") {$PSHeight7=0;} else {$PSHeight7=$_POST['PSHeight7'];}
if ($_POST['PSHeight8']=="") {$PSHeight8=0;} else {$PSHeight8=$_POST['PSHeight8'];}
if ($_POST['PSHeight9']=="") {$PSHeight9=0;} else {$PSHeight9=$_POST['PSHeight9'];}
if ($_POST['PSStyle0']=="") {$PSStyle0=0;} else {$PSStyle0=$_POST['PSStyle0'];}
if ($_POST['PSStyle1']=="") {$PSStyle1=0;} else {$PSStyle1=$_POST['PSStyle1'];}
if ($_POST['PSStyle2']=="") {$PSStyle2=0;} else {$PSStyle2=$_POST['PSStyle2'];}
if ($_POST['PSStyle3']=="") {$PSStyle3=0;} else {$PSStyle3=$_POST['PSStyle3'];}
if ($_POST['PSStyle4']=="") {$PSStyle4=0;} else {$PSStyle4=$_POST['PSStyle4'];}
if ($_POST['PSStyle5']=="") {$PSStyle5=0;} else {$PSStyle5=$_POST['PSStyle5'];}
if ($_POST['PSStyle6']=="") {$PSStyle6=0;} else {$PSStyle6=$_POST['PSStyle6'];}
if ($_POST['PSStyle7']=="") {$PSStyle7=0;} else {$PSStyle7=$_POST['PSStyle7'];}
if ($_POST['PSStyle8']=="") {$PSStyle8=0;} else {$PSStyle8=$_POST['PSStyle8'];}
if ($_POST['PSStyle9']=="") {$PSStyle9=0;} else {$PSStyle9=$_POST['PSStyle9'];}
if ($_POST['PSLooks0']=="") {$PSLooks0=0;} else {$PSLooks0=$_POST['PSLooks0'];}
if ($_POST['PSLooks1']=="") {$PSLooks1=0;} else {$PSLooks1=$_POST['PSLooks1'];}
if ($_POST['PSLooks2']=="") {$PSLooks2=0;} else {$PSLooks2=$_POST['PSLooks2'];}
if ($_POST['PSLooks3']=="") {$PSLooks3=0;} else {$PSLooks3=$_POST['PSLooks3'];}
if ($_POST['PSLooks4']=="") {$PSLooks4=0;} else {$PSLooks4=$_POST['PSLooks4'];}
if ($_POST['PSLooks5']=="") {$PSLooks5=0;} else {$PSLooks5=$_POST['PSLooks5'];}
if ($_POST['PSLooks6']=="") {$PSLooks6=0;} else {$PSLooks6=$_POST['PSLooks6'];}
if ($_POST['PSLooks7']=="") {$PSLooks7=0;} else {$PSLooks7=$_POST['PSLooks7'];}
if ($_POST['PSLooks8']=="") {$PSLooks8=0;} else {$PSLooks8=$_POST['PSLooks8'];}
if ($_POST['PSLooks9']=="") {$PSLooks9=0;} else {$PSLooks9=$_POST['PSLooks9'];}
if ($_POST['PSCup0']=="") {$PSCup0=0;} else {$PSCup0=$_POST['PSCup0'];}
if ($_POST['PSCup1']=="") {$PSCup1=0;} else {$PSCup1=$_POST['PSCup1'];}
if ($_POST['PSCup2']=="") {$PSCup2=0;} else {$PSCup2=$_POST['PSCup2'];}
if ($_POST['PSCup3']=="") {$PSCup3=0;} else {$PSCup3=$_POST['PSCup3'];}
if ($_POST['PSCup4']=="") {$PSCup4=0;} else {$PSCup4=$_POST['PSCup4'];}
if ($_POST['PSCup5']=="") {$PSCup5=0;} else {$PSCup5=$_POST['PSCup5'];}
if ($_POST['PSCup6']=="") {$PSCup6=0;} else {$PSCup6=$_POST['PSCup6'];}
if ($_POST['PSCup7']=="") {$PSCup7=0;} else {$PSCup7=$_POST['PSCup7'];}
if ($_POST['PSCup8']=="") {$PSCup8=0;} else {$PSCup8=$_POST['PSCup8'];}
if ($_POST['PSCup9']=="") {$PSCup9=0;} else {$PSCup9=$_POST['PSCup9'];}
if ($_POST['PSBloodType0']=="") {$PSBloodType0=0;} else {$PSBloodType0=$_POST['PSBloodType0'];}
if ($_POST['PSBloodType1']=="") {$PSBloodType1=0;} else {$PSBloodType1=$_POST['PSBloodType1'];}
if ($_POST['PSBloodType2']=="") {$PSBloodType2=0;} else {$PSBloodType2=$_POST['PSBloodType2'];}
if ($_POST['PSBloodType3']=="") {$PSBloodType3=0;} else {$PSBloodType3=$_POST['PSBloodType3'];}
if ($_POST['PSBloodType4']=="") {$PSBloodType4=0;} else {$PSBloodType4=$_POST['PSBloodType4'];}
if ($_POST['PSJob0']=="") {$PSJob0=0;} else {$PSJob0=$_POST['PSJob0'];}
if ($_POST['PSJob1']=="") {$PSJob1=0;} else {$PSJob1=$_POST['PSJob1'];}
if ($_POST['PSJob2']=="") {$PSJob2=0;} else {$PSJob2=$_POST['PSJob2'];}
if ($_POST['PSJob3']=="") {$PSJob3=0;} else {$PSJob3=$_POST['PSJob3'];}
if ($_POST['PSJob4']=="") {$PSJob4=0;} else {$PSJob4=$_POST['PSJob4'];}
if ($_POST['PSJob5']=="") {$PSJob5=0;} else {$PSJob5=$_POST['PSJob5'];}
if ($_POST['PSJob6']=="") {$PSJob6=0;} else {$PSJob6=$_POST['PSJob6'];}
if ($_POST['PSJob7']=="") {$PSJob7=0;} else {$PSJob7=$_POST['PSJob7'];}
if ($_POST['PSJob8']=="") {$PSJob8=0;} else {$PSJob8=$_POST['PSJob8'];}
if ($_POST['PSJob9']=="") {$PSJob9=0;} else {$PSJob9=$_POST['PSJob9'];}
if ($_POST['PSJob10']=="") {$PSJob10=0;} else {$PSJob10=$_POST['PSJob10'];}
if ($_POST['PSJob11']=="") {$PSJob11=0;} else {$PSJob11=$_POST['PSJob11'];}
if ($_POST['PSJob12']=="") {$PSJob12=0;} else {$PSJob12=$_POST['PSJob12'];}
if ($_POST['PSJob13']=="") {$PSJob13=0;} else {$PSJob13=$_POST['PSJob13'];}
if ($_POST['PSJob14']=="") {$PSJob14=0;} else {$PSJob14=$_POST['PSJob14'];}
if ($_POST['PSJob15']=="") {$PSJob15=0;} else {$PSJob15=$_POST['PSJob15'];}
if ($_POST['PSJob16']=="") {$PSJob16=0;} else {$PSJob16=$_POST['PSJob16'];}
if ($_POST['PSJob17']=="") {$PSJob17=0;} else {$PSJob17=$_POST['PSJob17'];}
if ($_POST['PSJob18']=="") {$PSJob18=0;} else {$PSJob18=$_POST['PSJob18'];}
if ($_POST['PSJob19']=="") {$PSJob19=0;} else {$PSJob19=$_POST['PSJob19'];}
if ($_POST['PSJob20']=="") {$PSJob20=0;} else {$PSJob20=$_POST['PSJob20'];}
if ($_POST['PSJob21']=="") {$PSJob21=0;} else {$PSJob21=$_POST['PSJob21'];}
if ($_POST['PSJob22']=="") {$PSJob22=0;} else {$PSJob22=$_POST['PSJob22'];}
if ($_POST['PSJob23']=="") {$PSJob23=0;} else {$PSJob23=$_POST['PSJob23'];}
if ($_POST['PSJob24']=="") {$PSJob24=0;} else {$PSJob24=$_POST['PSJob24'];}
if ($_POST['PSJob25']=="") {$PSJob25=0;} else {$PSJob25=$_POST['PSJob25'];}
if ($_POST['PSJob26']=="") {$PSJob26=0;} else {$PSJob26=$_POST['PSJob26'];}
if ($_POST['PSEduBack0']=="") {$PSEduBack0=0;} else {$PSEduBack0=$_POST['PSEduBack0'];}
if ($_POST['PSEduBack1']=="") {$PSEduBack1=0;} else {$PSEduBack1=$_POST['PSEduBack1'];}
if ($_POST['PSEduBack2']=="") {$PSEduBack2=0;} else {$PSEduBack2=$_POST['PSEduBack2'];}
if ($_POST['PSEduBack3']=="") {$PSEduBack3=0;} else {$PSEduBack3=$_POST['PSEduBack3'];}
if ($_POST['PSEduBack4']=="") {$PSEduBack4=0;} else {$PSEduBack4=$_POST['PSEduBack4'];}
if ($_POST['PSEduBack5']=="") {$PSEduBack5=0;} else {$PSEduBack5=$_POST['PSEduBack5'];}
if ($_POST['PSZodiac0']=="") {$PSZodiac0=0;} else {$PSZodiac0=$_POST['PSZodiac0'];}
if ($_POST['PSZodiac1']=="") {$PSZodiac1=0;} else {$PSZodiac1=$_POST['PSZodiac1'];}
if ($_POST['PSZodiac2']=="") {$PSZodiac2=0;} else {$PSZodiac2=$_POST['PSZodiac2'];}
if ($_POST['PSZodiac3']=="") {$PSZodiac3=0;} else {$PSZodiac3=$_POST['PSZodiac3'];}
if ($_POST['PSZodiac4']=="") {$PSZodiac4=0;} else {$PSZodiac4=$_POST['PSZodiac4'];}
if ($_POST['PSZodiac5']=="") {$PSZodiac5=0;} else {$PSZodiac5=$_POST['PSZodiac5'];}
if ($_POST['PSZodiac6']=="") {$PSZodiac6=0;} else {$PSZodiac6=$_POST['PSZodiac6'];}
if ($_POST['PSZodiac7']=="") {$PSZodiac7=0;} else {$PSZodiac7=$_POST['PSZodiac7'];}
if ($_POST['PSZodiac8']=="") {$PSZodiac8=0;} else {$PSZodiac8=$_POST['PSZodiac8'];}
if ($_POST['PSZodiac9']=="") {$PSZodiac9=0;} else {$PSZodiac9=$_POST['PSZodiac9'];}
if ($_POST['PSZodiac10']=="") {$PSZodiac10=0;} else {$PSZodiac10=$_POST['PSZodiac10'];}
if ($_POST['PSZodiac11']=="") {$PSZodiac11=0;} else {$PSZodiac11=$_POST['PSZodiac11'];}
if ($_POST['PSZodiac12']=="") {$PSZodiac12=0;} else {$PSZodiac12=$_POST['PSZodiac12'];}
if ($_POST['PSMarriageStatus0']=="") {$PSMarriageStatus0=0;} else {$PSMarriageStatus0=$_POST['PSMarriageStatus0'];}
if ($_POST['PSMarriageStatus1']=="") {$PSMarriageStatus1=0;} else {$PSMarriageStatus1=$_POST['PSMarriageStatus1'];}
if ($_POST['PSMarriageStatus2']=="") {$PSMarriageStatus2=0;} else {$PSMarriageStatus2=$_POST['PSMarriageStatus2'];}
if ($_POST['PSMarriageStatus3']=="") {$PSMarriageStatus3=0;} else {$PSMarriageStatus3=$_POST['PSMarriageStatus3'];}
if ($_POST['PSMarriageStatus4']=="") {$PSMarriageStatus4=0;} else {$PSMarriageStatus4=$_POST['PSMarriageStatus4'];}
if ($_POST['PSMarriageStatus5']=="") {$PSMarriageStatus5=0;} else {$PSMarriageStatus5=$_POST['PSMarriageStatus5'];}
if ($_POST['PSMarriageStatus6']=="") {$PSMarriageStatus6=0;} else {$PSMarriageStatus6=$_POST['PSMarriageStatus6'];}
if ($_POST['PSKids0']=="") {$PSKids0=0;} else {$PSKids0=$_POST['PSKids0'];}
if ($_POST['PSKids1']=="") {$PSKids1=0;} else {$PSKids1=$_POST['PSKids1'];}
if ($_POST['PSKids2']=="") {$PSKids2=0;} else {$PSKids2=$_POST['PSKids2'];}
if ($_POST['PSKids3']=="") {$PSKids3=0;} else {$PSKids3=$_POST['PSKids3'];}
if ($_POST['PSTabacco0']=="") {$PSTabacco0=0;} else {$PSTabacco0=$_POST['PSTabacco0'];}
if ($_POST['PSTabacco1']=="") {$PSTabacco1=0;} else {$PSTabacco1=$_POST['PSTabacco1'];}
if ($_POST['PSTabacco2']=="") {$PSTabacco2=0;} else {$PSTabacco2=$_POST['PSTabacco2'];}
if ($_POST['PSTabacco3']=="") {$PSTabacco3=0;} else {$PSTabacco3=$_POST['PSTabacco3'];}
if ($_POST['PSTabacco4']=="") {$PSTabacco4=0;} else {$PSTabacco4=$_POST['PSTabacco4'];}
if ($_POST['PSAlchole0']=="") {$PSAlchole0=0;} else {$PSAlchole0=$_POST['PSAlchole0'];}
if ($_POST['PSAlchole1']=="") {$PSAlchole1=0;} else {$PSAlchole1=$_POST['PSAlchole1'];}
if ($_POST['PSAlchole2']=="") {$PSAlchole2=0;} else {$PSAlchole2=$_POST['PSAlchole2'];}
if ($_POST['PSAlchole3']=="") {$PSAlchole3=0;} else {$PSAlchole3=$_POST['PSAlchole3'];}
if ($_POST['PSCar0']=="") {$PSCar0=0;} else {$PSCar0=$_POST['PSCar0'];}
if ($_POST['PSCar1']=="") {$PSCar1=0;} else {$PSCar1=$_POST['PSCar1'];}
if ($_POST['PSCar2']=="") {$PSCar2=0;} else {$PSCar2=$_POST['PSCar2'];}
if ($_POST['PSInterest0']=="") {$PSInterest0=0;} else {$PSInterest0=$_POST['PSInterest0'];}
if ($_POST['PSInterest1']=="") {$PSInterest1=0;} else {$PSInterest1=$_POST['PSInterest1'];}
if ($_POST['PSInterest2']=="") {$PSInterest2=0;} else {$PSInterest2=$_POST['PSInterest2'];}
if ($_POST['PSInterest3']=="") {$PSInterest3=0;} else {$PSInterest3=$_POST['PSInterest3'];}
if ($_POST['PSInterest4']=="") {$PSInterest4=0;} else {$PSInterest4=$_POST['PSInterest4'];}
if ($_POST['PSInterest5']=="") {$PSInterest5=0;} else {$PSInterest5=$_POST['PSInterest5'];}
if ($_POST['PSInterest6']=="") {$PSInterest6=0;} else {$PSInterest6=$_POST['PSInterest6'];}
if ($_POST['PSInterest7']=="") {$PSInterest7=0;} else {$PSInterest7=$_POST['PSInterest7'];}
if ($_POST['PSInterest8']=="") {$PSInterest8=0;} else {$PSInterest8=$_POST['PSInterest8'];}
if ($_POST['PSInterest9']=="") {$PSInterest9=0;} else {$PSInterest9=$_POST['PSInterest9'];}
if ($_POST['PSInterest10']=="") {$PSInterest10=0;} else {$PSInterest10=$_POST['PSInterest10'];}
if ($_POST['PSInterest11']=="") {$PSInterest11=0;} else {$PSInterest11=$_POST['PSInterest11'];}
if ($_POST['PSInterest12']=="") {$PSInterest12=0;} else {$PSInterest12=$_POST['PSInterest12'];}
if ($_POST['PSInterest13']=="") {$PSInterest13=0;} else {$PSInterest13=$_POST['PSInterest13'];}
if ($_POST['PSInterest14']=="") {$PSInterest14=0;} else {$PSInterest14=$_POST['PSInterest14'];}
if ($_POST['PSInterest15']=="") {$PSInterest15=0;} else {$PSInterest15=$_POST['PSInterest15'];}
if ($_POST['PSInterest16']=="") {$PSInterest16=0;} else {$PSInterest16=$_POST['PSInterest16'];}
if ($_POST['PSInterest17']=="") {$PSInterest17=0;} else {$PSInterest17=$_POST['PSInterest17'];}
if ($_POST['PSInterest18']=="") {$PSInterest18=0;} else {$PSInterest18=$_POST['PSInterest18'];}
if ($_POST['PSInterest19']=="") {$PSInterest19=0;} else {$PSInterest19=$_POST['PSInterest19'];}
if ($_POST['PSInterest20']=="") {$PSInterest20=0;} else {$PSInterest20=$_POST['PSInterest20'];}
if ($_POST['PSInterest21']=="") {$PSInterest21=0;} else {$PSInterest21=$_POST['PSInterest21'];}
if ($_POST['PSInterest22']=="") {$PSInterest22=0;} else {$PSInterest22=$_POST['PSInterest22'];}
if ($_POST['PSInterest23']=="") {$PSInterest23=0;} else {$PSInterest23=$_POST['PSInterest23'];}
if ($_POST['PSInterest24']=="") {$PSInterest24=0;} else {$PSInterest24=$_POST['PSInterest24'];}
if ($_POST['PSInterest25']=="") {$PSInterest25=0;} else {$PSInterest25=$_POST['PSInterest25'];}
if ($_POST['PSInterest26']=="") {$PSInterest26=0;} else {$PSInterest26=$_POST['PSInterest26'];}
if ($_POST['PSInterest27']=="") {$PSInterest27=0;} else {$PSInterest27=$_POST['PSInterest27'];}
if ($_POST['PSInterest28']=="") {$PSInterest28=0;} else {$PSInterest28=$_POST['PSInterest28'];}
if ($_POST['PSPersonality0']=="") {$PSPersonality0=0;} else {$PSPersonality0=$_POST['PSPersonality0'];}
if ($_POST['PSPersonality1']=="") {$PSPersonality1=0;} else {$PSPersonality1=$_POST['PSPersonality1'];}
if ($_POST['PSPersonality2']=="") {$PSPersonality2=0;} else {$PSPersonality2=$_POST['PSPersonality2'];}
if ($_POST['PSPersonality3']=="") {$PSPersonality3=0;} else {$PSPersonality3=$_POST['PSPersonality3'];}
if ($_POST['PSPersonality4']=="") {$PSPersonality4=0;} else {$PSPersonality4=$_POST['PSPersonality4'];}
if ($_POST['PSPersonality5']=="") {$PSPersonality5=0;} else {$PSPersonality5=$_POST['PSPersonality5'];}
if ($_POST['PSPersonality6']=="") {$PSPersonality6=0;} else {$PSPersonality6=$_POST['PSPersonality6'];}
if ($_POST['PSPersonality7']=="") {$PSPersonality7=0;} else {$PSPersonality7=$_POST['PSPersonality7'];}
if ($_POST['PSPersonality8']=="") {$PSPersonality8=0;} else {$PSPersonality8=$_POST['PSPersonality8'];}
if ($_POST['PSPersonality9']=="") {$PSPersonality9=0;} else {$PSPersonality9=$_POST['PSPersonality9'];}
if ($_POST['PSPersonality10']=="") {$PSPersonality10=0;} else {$PSPersonality10=$_POST['PSPersonality10'];}
if ($_POST['PSPersonality11']=="") {$PSPersonality11=0;} else {$PSPersonality11=$_POST['PSPersonality11'];}
if ($_POST['PSPersonality12']=="") {$PSPersonality12=0;} else {$PSPersonality12=$_POST['PSPersonality12'];}
if ($_POST['PSPersonality13']=="") {$PSPersonality13=0;} else {$PSPersonality13=$_POST['PSPersonality13'];}
if ($_POST['PSPersonality14']=="") {$PSPersonality14=0;} else {$PSPersonality14=$_POST['PSPersonality14'];}
if ($_POST['PSPersonality15']=="") {$PSPersonality15=0;} else {$PSPersonality15=$_POST['PSPersonality15'];}
if ($_POST['PSPersonality16']=="") {$PSPersonality16=0;} else {$PSPersonality16=$_POST['PSPersonality16'];}
if ($_POST['PSPersonality17']=="") {$PSPersonality17=0;} else {$PSPersonality17=$_POST['PSPersonality17'];}
if ($_POST['PSPersonality18']=="") {$PSPersonality18=0;} else {$PSPersonality18=$_POST['PSPersonality18'];}
if ($_POST['PSPersonality19']=="") {$PSPersonality19=0;} else {$PSPersonality19=$_POST['PSPersonality19'];}
if ($_POST['PSPersonality20']=="") {$PSPersonality20=0;} else {$PSPersonality20=$_POST['PSPersonality20'];}
if ($_POST['PSPersonality21']=="") {$PSPersonality21=0;} else {$PSPersonality21=$_POST['PSPersonality21'];}
if ($_POST['PSPersonality22']=="") {$PSPersonality22=0;} else {$PSPersonality22=$_POST['PSPersonality22'];}
if ($_POST['PSPersonality23']=="") {$PSPersonality23=0;} else {$PSPersonality23=$_POST['PSPersonality23'];}
if ($_POST['PSPersonality24']=="") {$PSPersonality24=0;} else {$PSPersonality24=$_POST['PSPersonality24'];}
if ($_POST['PSPersonality25']=="") {$PSPersonality25=0;} else {$PSPersonality25=$_POST['PSPersonality25'];}
if ($_POST['PSPersonality26']=="") {$PSPersonality26=0;} else {$PSPersonality26=$_POST['PSPersonality26'];}
if ($_POST['PSPersonality27']=="") {$PSPersonality27=0;} else {$PSPersonality27=$_POST['PSPersonality27'];}
if ($_POST['PSPersonality28']=="") {$PSPersonality28=0;} else {$PSPersonality28=$_POST['PSPersonality28'];}
if ($_POST['PSPersonality29']=="") {$PSPersonality29=0;} else {$PSPersonality29=$_POST['PSPersonality29'];}
if ($_POST['PSPersonality30']=="") {$PSPersonality30=0;} else {$PSPersonality30=$_POST['PSPersonality30'];}
if ($_POST['PSPersonality31']=="") {$PSPersonality31=0;} else {$PSPersonality31=$_POST['PSPersonality31'];}
if ($_POST['PSPersonality32']=="") {$PSPersonality32=0;} else {$PSPersonality32=$_POST['PSPersonality32'];}
if ($_POST['PSPersonality33']=="") {$PSPersonality33=0;} else {$PSPersonality33=$_POST['PSPersonality33'];}
if ($_POST['PSPersonality34']=="") {$PSPersonality34=0;} else {$PSPersonality34=$_POST['PSPersonality34'];}
if ($_POST['PSPersonality35']=="") {$PSPersonality35=0;} else {$PSPersonality35=$_POST['PSPersonality35'];}
if ($_POST['PSPersonality36']=="") {$PSPersonality36=0;} else {$PSPersonality36=$_POST['PSPersonality36'];}
if ($_POST['PSPersonality37']=="") {$PSPersonality37=0;} else {$PSPersonality37=$_POST['PSPersonality37'];}
if ($_POST['PSPersonality38']=="") {$PSPersonality38=0;} else {$PSPersonality38=$_POST['PSPersonality38'];}
if ($_POST['PSPersonality39']=="") {$PSPersonality39=0;} else {$PSPersonality39=$_POST['PSPersonality39'];}
if ($_POST['PSPersonality40']=="") {$PSPersonality40=0;} else {$PSPersonality40=$_POST['PSPersonality40'];}
if ($_POST['PSPersonality41']=="") {$PSPersonality41=0;} else {$PSPersonality41=$_POST['PSPersonality41'];}
if ($_POST['PSPersonality42']=="") {$PSPersonality42=0;} else {$PSPersonality42=$_POST['PSPersonality42'];}
if ($_POST['PSPersonality43']=="") {$PSPersonality43=0;} else {$PSPersonality43=$_POST['PSPersonality43'];}
if ($_POST['PSPersonality44']=="") {$PSPersonality44=0;} else {$PSPersonality44=$_POST['PSPersonality44'];}
if ($_POST['PSPersonality45']=="") {$PSPersonality45=0;} else {$PSPersonality45=$_POST['PSPersonality45'];}
if ($_POST['PSPersonality46']=="") {$PSPersonality46=0;} else {$PSPersonality46=$_POST['PSPersonality46'];}
if ($_POST['PSAnnuIncome0']=="") {$PSAnnuIncome0=0;} else {$PSAnnuIncome0=$_POST['PSAnnuIncome0'];}
if ($_POST['PSAnnuIncome1']=="") {$PSAnnuIncome1=0;} else {$PSAnnuIncome1=$_POST['PSAnnuIncome1'];}
if ($_POST['PSAnnuIncome2']=="") {$PSAnnuIncome2=0;} else {$PSAnnuIncome2=$_POST['PSAnnuIncome2'];}
if ($_POST['PSAnnuIncome3']=="") {$PSAnnuIncome3=0;} else {$PSAnnuIncome3=$_POST['PSAnnuIncome3'];}
if ($_POST['PSAnnuIncome4']=="") {$PSAnnuIncome4=0;} else {$PSAnnuIncome4=$_POST['PSAnnuIncome4'];}
if ($_POST['PSAnnuIncome5']=="") {$PSAnnuIncome5=0;} else {$PSAnnuIncome5=$_POST['PSAnnuIncome5'];}
if ($_POST['PSAnnuIncome6']=="") {$PSAnnuIncome6=0;} else {$PSAnnuIncome6=$_POST['PSAnnuIncome6'];}
if ($_POST['PSAnnuIncome7']=="") {$PSAnnuIncome7=0;} else {$PSAnnuIncome7=$_POST['PSAnnuIncome7'];}
if ($_POST['PSAnnuIncome8']=="") {$PSAnnuIncome8=0;} else {$PSAnnuIncome8=$_POST['PSAnnuIncome8'];}
if ($_POST['PSAnnuIncome9']=="") {$PSAnnuIncome9=0;} else {$PSAnnuIncome9=$_POST['PSAnnuIncome9'];}
if ($_POST['PSAnnuIncome10']=="") {$PSAnnuIncome10=0;} else {$PSAnnuIncome10=$_POST['PSAnnuIncome10'];}
if ($_POST['PSCute0']=="") {$PSCute0=0;} else {$PSCute0=$_POST['PSCute0'];}
if ($_POST['PSCute1']=="") {$PSCute1=0;} else {$PSCute1=$_POST['PSCute1'];}
if ($_POST['PSCute2']=="") {$PSCute2=0;} else {$PSCute2=$_POST['PSCute2'];}
if ($_POST['PSCute3']=="") {$PSCute3=0;} else {$PSCute3=$_POST['PSCute3'];}
if ($_POST['PSCute4']=="") {$PSCute4=0;} else {$PSCute4=$_POST['PSCute4'];}
if ($_POST['PSCute5']=="") {$PSCute5=0;} else {$PSCute5=$_POST['PSCute5'];}
if ($_POST['PSSexy0']=="") {$PSSexy0=0;} else {$PSSexy0=$_POST['PSSexy0'];}
if ($_POST['PSSexy1']=="") {$PSSexy1=0;} else {$PSSexy1=$_POST['PSSexy1'];}
if ($_POST['PSSexy2']=="") {$PSSexy2=0;} else {$PSSexy2=$_POST['PSSexy2'];}
if ($_POST['PSSexy3']=="") {$PSSexy3=0;} else {$PSSexy3=$_POST['PSSexy3'];}
if ($_POST['PSSexy4']=="") {$PSSexy4=0;} else {$PSSexy4=$_POST['PSSexy4'];}
if ($_POST['PSSexy5']=="") {$PSSexy5=0;} else {$PSSexy5=$_POST['PSSexy5'];}
if ($_POST['PSKindness0']=="") {$PSKindness0=0;} else {$PSKindness0=$_POST['PSKindness0'];}
if ($_POST['PSKindness1']=="") {$PSKindness1=0;} else {$PSKindness1=$_POST['PSKindness1'];}
if ($_POST['PSKindness2']=="") {$PSKindness2=0;} else {$PSKindness2=$_POST['PSKindness2'];}
if ($_POST['PSKindness3']=="") {$PSKindness3=0;} else {$PSKindness3=$_POST['PSKindness3'];}
if ($_POST['PSKindness4']=="") {$PSKindness4=0;} else {$PSKindness4=$_POST['PSKindness4'];}
if ($_POST['PSKindness5']=="") {$PSKindness5=0;} else {$PSKindness5=$_POST['PSKindness5'];}
if ($_POST['PSSmartness0']=="") {$PSSmartness0=0;} else {$PSSmartness0=$_POST['PSSmartness0'];}
if ($_POST['PSSmartness1']=="") {$PSSmartness1=0;} else {$PSSmartness1=$_POST['PSSmartness1'];}
if ($_POST['PSSmartness2']=="") {$PSSmartness2=0;} else {$PSSmartness2=$_POST['PSSmartness2'];}
if ($_POST['PSSmartness3']=="") {$PSSmartness3=0;} else {$PSSmartness3=$_POST['PSSmartness3'];}
if ($_POST['PSSmartness4']=="") {$PSSmartness4=0;} else {$PSSmartness4=$_POST['PSSmartness4'];}
if ($_POST['PSSmartness5']=="") {$PSSmartness5=0;} else {$PSSmartness5=$_POST['PSSmartness5'];}
if ($_POST['PSNeatness0']=="") {$PSNeatness0=0;} else {$PSNeatness0=$_POST['PSNeatness0'];}
if ($_POST['PSNeatness1']=="") {$PSNeatness1=0;} else {$PSNeatness1=$_POST['PSNeatness1'];}
if ($_POST['PSNeatness2']=="") {$PSNeatness2=0;} else {$PSNeatness2=$_POST['PSNeatness2'];}
if ($_POST['PSNeatness3']=="") {$PSNeatness3=0;} else {$PSNeatness3=$_POST['PSNeatness3'];}
if ($_POST['PSNeatness4']=="") {$PSNeatness4=0;} else {$PSNeatness4=$_POST['PSNeatness4'];}
if ($_POST['PSNeatness5']=="") {$PSNeatness5=0;} else {$PSNeatness5=$_POST['PSNeatness5'];}
if ($_POST['PSFashionable0']=="") {$PSFashionable0=0;} else {$PSFashionable0=$_POST['PSFashionable0'];}
if ($_POST['PSFashionable1']=="") {$PSFashionable1=0;} else {$PSFashionable1=$_POST['PSFashionable1'];}
if ($_POST['PSFashionable2']=="") {$PSFashionable2=0;} else {$PSFashionable2=$_POST['PSFashionable2'];}
if ($_POST['PSFashionable3']=="") {$PSFashionable3=0;} else {$PSFashionable3=$_POST['PSFashionable3'];}
if ($_POST['PSFashionable4']=="") {$PSFashionable4=0;} else {$PSFashionable4=$_POST['PSFashionable4'];}
if ($_POST['PSFashionable5']=="") {$PSFashionable5=0;} else {$PSFashionable5=$_POST['PSFashionable5'];}
if ($_POST['PSBrightness0']=="") {$PSBrightness0=0;} else {$PSBrightness0=$_POST['PSBrightness0'];}
if ($_POST['PSBrightness1']=="") {$PSBrightness1=0;} else {$PSBrightness1=$_POST['PSBrightness1'];}
if ($_POST['PSBrightness2']=="") {$PSBrightness2=0;} else {$PSBrightness2=$_POST['PSBrightness2'];}
if ($_POST['PSBrightness3']=="") {$PSBrightness3=0;} else {$PSBrightness3=$_POST['PSBrightness3'];}
if ($_POST['PSBrightness4']=="") {$PSBrightness4=0;} else {$PSBrightness4=$_POST['PSBrightness4'];}
if ($_POST['PSBrightness5']=="") {$PSBrightness5=0;} else {$PSBrightness5=$_POST['PSBrightness5'];}
if ($_POST['PSElegance0']=="") {$PSElegance0=0;} else {$PSElegance0=$_POST['PSElegance0'];}
if ($_POST['PSElegance1']=="") {$PSElegance1=0;} else {$PSElegance1=$_POST['PSElegance1'];}
if ($_POST['PSElegance2']=="") {$PSElegance2=0;} else {$PSElegance2=$_POST['PSElegance2'];}
if ($_POST['PSElegance3']=="") {$PSElegance3=0;} else {$PSElegance3=$_POST['PSElegance3'];}
if ($_POST['PSElegance4']=="") {$PSElegance4=0;} else {$PSElegance4=$_POST['PSElegance4'];}
if ($_POST['PSElegance5']=="") {$PSElegance5=0;} else {$PSElegance5=$_POST['PSElegance5'];}


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
// .$_POST['PSGender0']." "
// .$_POST['PSGender1']." "
// .$_POST['PSGender2']." "
// .$_POST['PSGender3']." "
// .$_POST['PSGender4']." "
// .$_POST['PSGender5']." "
// .$_POST['PSGender6']." "
// .$_POST['PSGender7']." "
// .$_POST['PSAge0']." "
// .$_POST['PSAge1']." "
// .$_POST['PSAge2']." "
// .$_POST['PSAge3']." "
// .$_POST['PSAge4']." "
// .$_POST['PSAge5']." "
// .$_POST['PSAge6']." "
// .$_POST['PSAge7']." "
// .$_POST['PSAge8']." "
// .$_POST['PSAge9']." "
// .$_POST['PSAge10']." "
// .$_POST['PSAge11']." "
// .$_POST['PSAge12']." "
// .$_POST['PSAge13']." "
// .$_POST['PSAge14']." "
// .$_POST['PSAge15']." "
// .$_POST['PSAge16']." "
// .$_POST['PSAge17']." "
// .$_POST['PSProfilePicture0']." "
// .$_POST['PSProfilePicture1']." "
// .$_POST['PSProfilePicture2']." "
// .$_POST['PSProfileMessage0']." "
// .$_POST['PSProfileMessage1']." "
// .$_POST['PSProfileMessage2']." "
// .$_POST['PSHeight0']." "
// .$_POST['PSHeight1']." "
// .$_POST['PSHeight2']." "
// .$_POST['PSHeight3']." "
// .$_POST['PSHeight4']." "
// .$_POST['PSHeight5']." "
// .$_POST['PSHeight6']." "
// .$_POST['PSHeight7']." "
// .$_POST['PSHeight8']." "
// .$_POST['PSHeight9']." "
// .$_POST['PSStyle0']." "
// .$_POST['PSStyle1']." "
// .$_POST['PSStyle2']." "
// .$_POST['PSStyle3']." "
// .$_POST['PSStyle4']." "
// .$_POST['PSStyle5']." "
// .$_POST['PSStyle6']." "
// .$_POST['PSStyle7']." "
// .$_POST['PSStyle8']." "
// .$_POST['PSStyle9']." "
// .$_POST['PSLooks0']." "
// .$_POST['PSLooks1']." "
// .$_POST['PSLooks2']." "
// .$_POST['PSLooks3']." "
// .$_POST['PSLooks4']." "
// .$_POST['PSLooks5']." "
// .$_POST['PSLooks6']." "
// .$_POST['PSLooks7']." "
// .$_POST['PSLooks8']." "
// .$_POST['PSLooks9']." "
// .$_POST['PSCup0']." "
// .$_POST['PSCup1']." "
// .$_POST['PSCup2']." "
// .$_POST['PSCup3']." "
// .$_POST['PSCup4']." "
// .$_POST['PSCup5']." "
// .$_POST['PSCup6']." "
// .$_POST['PSCup7']." "
// .$_POST['PSCup8']." "
// .$_POST['PSCup9']." "
// .$_POST['PSBloodType0']." "
// .$_POST['PSBloodType1']." "
// .$_POST['PSBloodType2']." "
// .$_POST['PSBloodType3']." "
// .$_POST['PSBloodType4']." "
// .$_POST['PSJob0']." "
// .$_POST['PSJob1']." "
// .$_POST['PSJob2']." "
// .$_POST['PSJob3']." "
// .$_POST['PSJob4']." "
// .$_POST['PSJob5']." "
// .$_POST['PSJob6']." "
// .$_POST['PSJob7']." "
// .$_POST['PSJob8']." "
// .$_POST['PSJob9']." "
// .$_POST['PSJob10']." "
// .$_POST['PSJob11']." "
// .$_POST['PSJob12']." "
// .$_POST['PSJob13']." "
// .$_POST['PSJob14']." "
// .$_POST['PSJob15']." "
// .$_POST['PSJob16']." "
// .$_POST['PSJob17']." "
// .$_POST['PSJob18']." "
// .$_POST['PSJob19']." "
// .$_POST['PSJob20']." "
// .$_POST['PSJob21']." "
// .$_POST['PSJob22']." "
// .$_POST['PSJob23']." "
// .$_POST['PSJob24']." "
// .$_POST['PSJob25']." "
// .$_POST['PSJob26']." "
// .$_POST['PSEduBack0']." "
// .$_POST['PSEduBack1']." "
// .$_POST['PSEduBack2']." "
// .$_POST['PSEduBack3']." "
// .$_POST['PSEduBack4']." "
// .$_POST['PSEduBack5']." "
// .$_POST['PSZodiac0']." "
// .$_POST['PSZodiac1']." "
// .$_POST['PSZodiac2']." "
// .$_POST['PSZodiac3']." "
// .$_POST['PSZodiac4']." "
// .$_POST['PSZodiac5']." "
// .$_POST['PSZodiac6']." "
// .$_POST['PSZodiac7']." "
// .$_POST['PSZodiac8']." "
// .$_POST['PSZodiac9']." "
// .$_POST['PSZodiac10']." "
// .$_POST['PSZodiac11']." "
// .$_POST['PSZodiac12']." "
// .$_POST['PSMarriageStatus0']." "
// .$_POST['PSMarriageStatus1']." "
// .$_POST['PSMarriageStatus2']." "
// .$_POST['PSMarriageStatus3']." "
// .$_POST['PSMarriageStatus4']." "
// .$_POST['PSMarriageStatus5']." "
// .$_POST['PSMarriageStatus6']." "
// .$_POST['PSKids0']." "
// .$_POST['PSKids1']." "
// .$_POST['PSKids2']." "
// .$_POST['PSKids3']." "
// .$_POST['PSTabacco0']." "
// .$_POST['PSTabacco1']." "
// .$_POST['PSTabacco2']." "
// .$_POST['PSTabacco3']." "
// .$_POST['PSTabacco4']." "
// .$_POST['PSAlchole0']." "
// .$_POST['PSAlchole1']." "
// .$_POST['PSAlchole2']." "
// .$_POST['PSAlchole3']." "
// .$_POST['PSCar0']." "
// .$_POST['PSCar1']." "
// .$_POST['PSCar2']." "
// .$_POST['PSInterest0']." "
// .$_POST['PSInterest1']." "
// .$_POST['PSInterest2']." "
// .$_POST['PSInterest3']." "
// .$_POST['PSInterest4']." "
// .$_POST['PSInterest5']." "
// .$_POST['PSInterest6']." "
// .$_POST['PSInterest7']." "
// .$_POST['PSInterest8']." "
// .$_POST['PSInterest9']." "
// .$_POST['PSInterest10']." "
// .$_POST['PSInterest11']." "
// .$_POST['PSInterest12']." "
// .$_POST['PSInterest13']." "
// .$_POST['PSInterest14']." "
// .$_POST['PSInterest15']." "
// .$_POST['PSInterest16']." "
// .$_POST['PSInterest17']." "
// .$_POST['PSInterest18']." "
// .$_POST['PSInterest19']." "
// .$_POST['PSInterest20']." "
// .$_POST['PSInterest21']." "
// .$_POST['PSInterest22']." "
// .$_POST['PSInterest23']." "
// .$_POST['PSInterest24']." "
// .$_POST['PSInterest25']." "
// .$_POST['PSInterest26']." "
// .$_POST['PSInterest27']." "
// .$_POST['PSInterest28']." "
// .$_POST['PSPersonality0']." "
// .$_POST['PSPersonality1']." "
// .$_POST['PSPersonality2']." "
// .$_POST['PSPersonality3']." "
// .$_POST['PSPersonality4']." "
// .$_POST['PSPersonality5']." "
// .$_POST['PSPersonality6']." "
// .$_POST['PSPersonality7']." "
// .$_POST['PSPersonality8']." "
// .$_POST['PSPersonality9']." "
// .$_POST['PSPersonality10']." "
// .$_POST['PSPersonality11']." "
// .$_POST['PSPersonality12']." "
// .$_POST['PSPersonality13']." "
// .$_POST['PSPersonality14']." "
// .$_POST['PSPersonality15']." "
// .$_POST['PSPersonality16']." "
// .$_POST['PSPersonality17']." "
// .$_POST['PSPersonality18']." "
// .$_POST['PSPersonality19']." "
// .$_POST['PSPersonality20']." "
// .$_POST['PSPersonality21']." "
// .$_POST['PSPersonality22']." "
// .$_POST['PSPersonality23']." "
// .$_POST['PSPersonality24']." "
// .$_POST['PSPersonality25']." "
// .$_POST['PSPersonality26']." "
// .$_POST['PSPersonality27']." "
// .$_POST['PSPersonality28']." "
// .$_POST['PSPersonality29']." "
// .$_POST['PSPersonality30']." "
// .$_POST['PSPersonality31']." "
// .$_POST['PSPersonality32']." "
// .$_POST['PSPersonality33']." "
// .$_POST['PSPersonality34']." "
// .$_POST['PSPersonality35']." "
// .$_POST['PSPersonality36']." "
// .$_POST['PSPersonality37']." "
// .$_POST['PSPersonality38']." "
// .$_POST['PSPersonality39']." "
// .$_POST['PSPersonality40']." "
// .$_POST['PSPersonality41']." "
// .$_POST['PSPersonality42']." "
// .$_POST['PSPersonality43']." "
// .$_POST['PSPersonality44']." "
// .$_POST['PSPersonality45']." "
// .$_POST['PSPersonality46']." "
// .$_POST['PSAnnuIncome0']." "
// .$_POST['PSAnnuIncome1']." "
// .$_POST['PSAnnuIncome2']." "
// .$_POST['PSAnnuIncome3']." "
// .$_POST['PSAnnuIncome4']." "
// .$_POST['PSAnnuIncome5']." "
// .$_POST['PSAnnuIncome6']." "
// .$_POST['PSAnnuIncome7']." "
// .$_POST['PSAnnuIncome8']." "
// .$_POST['PSAnnuIncome9']." "
// .$_POST['PSAnnuIncome10']." "
// .$_POST['PSCute0']." "
// .$_POST['PSCute1']." "
// .$_POST['PSCute2']." "
// .$_POST['PSCute3']." "
// .$_POST['PSCute4']." "
// .$_POST['PSCute5']." "
// .$_POST['PSSexy0']." "
// .$_POST['PSSexy1']." "
// .$_POST['PSSexy2']." "
// .$_POST['PSSexy3']." "
// .$_POST['PSSexy4']." "
// .$_POST['PSSexy5']." "
// .$_POST['PSKindness0']." "
// .$_POST['PSKindness1']." "
// .$_POST['PSKindness2']." "
// .$_POST['PSKindness3']." "
// .$_POST['PSKindness4']." "
// .$_POST['PSKindness5']." "
// .$_POST['PSSmartness0']." "
// .$_POST['PSSmartness1']." "
// .$_POST['PSSmartness2']." "
// .$_POST['PSSmartness3']." "
// .$_POST['PSSmartness4']." "
// .$_POST['PSSmartness5']." "
// .$_POST['PSNeatness0']." "
// .$_POST['PSNeatness1']." "
// .$_POST['PSNeatness2']." "
// .$_POST['PSNeatness3']." "
// .$_POST['PSNeatness4']." "
// .$_POST['PSNeatness5']." "
// .$_POST['PSFashionable0']." "
// .$_POST['PSFashionable1']." "
// .$_POST['PSFashionable2']." "
// .$_POST['PSFashionable3']." "
// .$_POST['PSFashionable4']." "
// .$_POST['PSFashionable5']." "
// .$_POST['PSBrightness0']." "
// .$_POST['PSBrightness1']." "
// .$_POST['PSBrightness2']." "
// .$_POST['PSBrightness3']." "
// .$_POST['PSBrightness4']." "
// .$_POST['PSBrightness5']." "
// .$_POST['PSElegance0']." "
// .$_POST['PSElegance1']." "
// .$_POST['PSElegance2']." "
// .$_POST['PSElegance3']." "
// .$_POST['PSElegance4']." "
// .$_POST['PSElegance5'];
exec($command_post, $output); //python実行と、返り数受け取り

echo json_encode(
  [
    "_POST" => $_POST,
    // "result" => $output,
    "result" => $output,
  ]
);
// echo json_encode(
//   [
//     "PSGender" => $_POST['PSGender'],
//     // "json_enc_PSGender" => json_encode($_POST['PSGender']),
//     // "json_enc_PSGender_array" => json_encode(array($_POST['PSGender'])),
//     // "json_enc_dec_PSGender" => json_encode(array(json_decode($_POST['PSGender'], true))),
//     "json_dec_PSGender" => json_decode($_POST['PSGender'], true),
//     // "json_enc_dec_PSGender" => json_encode(json_decode($_POST['PSGender'], true)),
//     // "result" => $output,
//     "result" => "test",
//     // "result" => $_POST['PSProfileMessage'],
//   ]
// );

// // pythonからの返り数のうち、SQLのヘッダーの受け取りと、文字列から配列変換(pythonの出力1行目)
// $output[0]=trim($output[0],"\"['");
// $output[0]=trim($output[0],"']\"");
// $output0=explode("', '",$output[0]);

// $output2=array();
// $it = 0;

// // pythonからの返り数のうち、SQLの受け取りと、文字列から配列変換(pythonの残りの行全て)
// foreach ($output as $value) {
//     $value=trim($value,"\"[");
//     $value=trim($value,"]\"");
//     $value=str_replace("'",'',$value);
//     $value1=explode(", ",$value);
//     $output1 = array_combine($output0,$value1);
//     $output2 = $output2 + array("$it" => $output1);
//     $it = $it + 1;
// }
// // 配列1行目の削除と、配列詰め
// unset($output2[0]);
// $output2 = array_values($output2);

// //配列のJSON変換と、echoでのサーバーサイド出力。
// if(empty($_POST['email']))
// {
//   echo json_encode(
//       [
//         "result" => "EmailAdded",
//       ]
//     );
// }
// else
// {
//   echo json_encode(
//       [
//         "result" => "EmailExist",
//       ]
//     );
// }