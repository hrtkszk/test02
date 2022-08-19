<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Content-Type');
$rest_json = file_get_contents("php://input"); // JSONでPOSTされたデータを取り出す
$_POST = json_decode($rest_json, true); // JSON文字列をデコード
// if ($_POST['PSGender']=={}) {
//   $PSGender={"0":true};
// } else {
//   $PSGender=$_POST['PSGender'];
// }
// if ($_POST['gender']=="") {
//   $gender="未設定";
// } else {
//   $gender=$_POST['gender'];
// }
// if ($_POST['age']=="") {
//   $age="未設定";
// } else {
//   $age=$_POST['age'];
// }
// if ($_POST['Area']=="") {
//   $Area="未設定";
// } else {
//   $Area=$_POST['Area'];
// }
// if ($_POST['Prefecture']=="") {
//   $Prefecture="未設定";
// } else {
//   $Prefecture=$_POST['Prefecture'];
// }
// if ($_POST['City']=="") {
//   $City="未設定";
// } else {
//   $City=$_POST['City'];
// }
// if ($_POST['Height']=="") {
//   $Height="未設定";
// } else {
//   $Height=$_POST['Height'];
// }
// if ($_POST['Style']=="") {
//   $Style="未設定";
// } else {
//   $Style=$_POST['Style'];
// }
// if ($_POST['Looks']=="") {
//   $Looks="未設定";
// } else {
//   $Looks=$_POST['Looks'];
// }
// if ($_POST['Cup']=="") {
//   $Cup="未設定";
// } else {
//   $Cup=$_POST['Cup'];
// }
// if ($_POST['BustSize']=="") {
//   $BustSize="未設定";
// } else {
//   $BustSize=$_POST['BustSize'];
// }
// if ($_POST['WestSize']=="") {
//   $WestSize="未設定";
// } else {
//   $WestSize=$_POST['WestSize'];
// }
// if ($_POST['HipSize']=="") {
//   $HipSize="未設定";
// } else {
//   $HipSize=$_POST['HipSize'];
// }
// if ($_POST['BloodType']=="") {
//   $BloodType="未設定";
// } else {
//   $BloodType=$_POST['BloodType'];
// }
// if ($_POST['Job']=="") {
//   $Job="未設定";
// } else {
//   $Job=$_POST['Job'];
// }
// if ($_POST['EduBack']=="") {
//   $EduBack="未設定";
// } else {
//   $EduBack=$_POST['EduBack'];
// }
// if ($_POST['BirthArea']=="") {
//   $BirthArea="未設定";
// } else {
//   $BirthArea=$_POST['BirthArea'];
// }
// if ($_POST['BirthPrefecture']=="") {
//   $BirthPrefecture="未設定";
// } else {
//   $BirthPrefecture=$_POST['BirthPrefecture'];
// }
// if ($_POST['Zodiac']=="") {
//   $Zodiac="未設定";
// } else {
//   $Zodiac=$_POST['Zodiac'];
// }
// if ($_POST['MarriageStatus']=="") {
//   $MarriageStatus="未設定";
// } else {
//   $MarriageStatus=$_POST['MarriageStatus'];
// }
// if ($_POST['Kids']=="") {
//   $Kids="未設定";
// } else {
//   $Kids=$_POST['Kids'];
// }
// if ($_POST['Tabacco']=="") {
//   $Tabacco="未設定";
// } else {
//   $Tabacco=$_POST['Tabacco'];
// }
// if ($_POST['Alchole']=="") {
//   $Alchole="未設定";
// } else {
//   $Alchole=$_POST['Alchole'];
// }
// if ($_POST['Car']=="") {
//   $Car="未設定";
// } else {
//   $Car=$_POST['Car'];
// }
// if ($_POST['Interest']=="") {
//   $Interest="未設定";
// } else {
//   $Interest=$_POST['Interest'];
// }
// if ($_POST['ProfilePicture']=="") {
//   $ProfilePicture="未設定";
// } else {
//   $ProfilePicture=$_POST['ProfilePicture'];
// }
// if ($_POST['ProfileMessage']=="") {
//   $ProfileMessage="未設定";
// } else {
//   $ProfileMessage=$_POST['ProfileMessage'];
// }
// if ($_POST['PreferedAge1']=="") {
//   $PreferedAge1="未設定";
// } else {
//   $PreferedAge1=$_POST['PreferedAge1'];
// }
// if ($_POST['PreferedAge2']=="") {
//   $PreferedAge2="未設定";
// } else {
//   $PreferedAge2=$_POST['PreferedAge2'];
// }
// if ($_POST['PreferedPersonality']=="") {
//   $PreferedPersonality="未設定";
// } else {
//   $PreferedPersonality=$_POST['PreferedPersonality'];
// }
// if ($_POST['Personality']=="") {
//   $Personality="未設定";
// } else {
//   $Personality=$_POST['Personality'];
// }
// if ($_POST['SelfCute']=="") {
//   $SelfCute="未設定";
// } else {
//   $SelfCute=$_POST['SelfCute'];
// }
// if ($_POST['SelfSexy']=="") {
//   $SelfSexy="未設定";
// } else {
//   $SelfSexy=$_POST['SelfSexy'];
// }
// if ($_POST['SelfKindness']=="") {
//   $SelfKindness="未設定";
// } else {
//   $SelfKindness=$_POST['SelfKindness'];
// }
// if ($_POST['SelfSmartness']=="") {
//   $SelfSmartness="未設定";
// } else {
//   $SelfSmartness=$_POST['SelfSmartness'];
// }
// if ($_POST['SelfNeatness']=="") {
//   $SelfNeatness="未設定";
// } else {
//   $SelfNeatness=$_POST['SelfNeatness'];
// }
// if ($_POST['SelfFashionable']=="") {
//   $SelfFashionable="未設定";
// } else {
//   $SelfFashionable=$_POST['SelfFashionable'];
// }
// if ($_POST['SelfBrightness']=="") {
//   $SelfBrightness="未設定";
// } else {
//   $SelfBrightness=$_POST['SelfBrightness'];
// }
// if ($_POST['SelfElegance']=="") {
//   $SelfElegance="未設定";
// } else {
//   $SelfElegance=$_POST['SelfElegance'];
// }

// $command_post="python3 set_profilesearchsetting.py " //pythonに引数を渡す
// .$_POST['UUID']." "
// .json_encode(["PSGender" => array($_POST['PSGender'])])." "
// .$_POST['PSAge1']." "
// .$_POST['PSAge2']." "
// .$_POST['PSArea']." "
// .$_POST['PSHeight1']." "
// .$_POST['PSHeight2']." "
// .$_POST['PSStyle']." "
// .$_POST['PSLooks']." "
// .$_POST['PSCup1']." "
// .$_POST['PSCup2']." "
// .$_POST['PSBust1']." "
// .$_POST['PSBust2']." "
// .$_POST['PSWest1']." "
// .$_POST['PSWest2']." "
// .$_POST['PSHip1']." "
// .$_POST['PSHip2']." "
// .$_POST['PSBloodType']." "
// .$_POST['PSJob']." "
// .$_POST['PSEduBack']." "
// .$_POST['PSBirthArea']." "
// .$_POST['PSZodiac']." "
// .$_POST['PSMarriageStatus']." "
// .$_POST['PSKids']." "
// .$_POST['PSTabacco']." "
// .$_POST['PSAlchole']." "
// .$_POST['PSCar']." "
// .$_POST['PSProfilePicture']." "
// .$_POST['PSProfileMessage']." "
// .$_POST['PSCute1']." "
// .$_POST['PSCute2']." "
// .$_POST['PSSexy1']." "
// .$_POST['PSSexy2']." "
// .$_POST['PSKindness1']." "
// .$_POST['PSKindness2']." "
// .$_POST['PSSmartness1']." "
// .$_POST['PSSmartness2']." "
// .$_POST['PSNeatness1']." "
// .$_POST['PSNeatness2']." "
// .$_POST['PSFashionable1']." "
// .$_POST['PSFashionable2']." "
// .$_POST['PSBrightness1']." "
// .$_POST['PSBrightness2']." "
// .$_POST['PSElegance1']." "
// .$_POST['PSElegance2']." "
// .$_POST['PSInterest']." "
// .$_POST['PSPersonality'];
// exec($command_post, $output); //python実行と、返り数受け取り


$command_post="python3 set_profilesearcharea.py " //pythonに引数を渡す
.$_POST;
exec($command_post, $output1); //python実行と、返り数受け取り
$command_post="python3 set_profilesearcharea.py " //pythonに引数を渡す
.json_encode($_POST);
exec($command_post, $output2); //python実行と、返り数受け取り
$command_post="python3 set_profilesearcharea.py " //pythonに引数を渡す
.json_encode(array($_POST));
exec($command_post, $output3); //python実行と、返り数受け取り
// $command_post="python3 set_profilesearcharea.py " //pythonに引数を渡す
// .json_encode(json_decode($_POST, true));
// exec($command_post, $output4); //python実行と、返り数受け取り

echo json_encode(
  [
    "_POST" => $_POST,
    "json_enc__POST" => json_encode($_POST),
    "json_enc__POST_array" => json_encode(array($_POST)),
    // "json_enc_dec_PSGender" => json_encode(json_decode($_POST, true)),
    "result1" => $output1,
    "result2" => $output2,
    "result3" => $output3,
    "result4" => $output4,
    // "result" => "SPSSS",
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