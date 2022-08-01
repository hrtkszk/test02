<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Content-Type');
$rest_json = file_get_contents("php://input"); // JSONでPOSTされたデータを取り出す
$_POST = json_decode($rest_json, true); // JSON文字列をデコード
if ($_POST['Prefecture']=="") {
  $Prefecture="未設定";
} else {
  $Prefecture=$_POST['Prefecture'];
}
if ($_POST['City']=="") {
  $City="未設定";
} else {
  $City=$_POST['City'];
}
if ($_POST['Height']=="") {
  $Height="未設定";
} else {
  $Height=$_POST['Height'];
}
if ($_POST['Style']=="") {
  $Style="未設定";
} else {
  $Style=$_POST['Style'];
}
if ($_POST['Looks']=="") {
  $Looks="未設定";
} else {
  $Looks=$_POST['Looks'];
}
if ($_POST['Cup']=="") {
  $Cup="未設定";
} else {
  $Cup=$_POST['Cup'];
}
if ($_POST['BustSize']=="") {
  $BustSize="未設定";
} else {
  $BustSize=$_POST['BustSize'];
}
if ($_POST['WestSize']=="") {
  $WestSize="未設定";
} else {
  $WestSize=$_POST['WestSize'];
}
if ($_POST['HipSize']=="") {
  $HipSize="未設定";
} else {
  $HipSize=$_POST['HipSize'];
}
if ($_POST['BloodType']=="") {
  $BloodType="未設定";
} else {
  $BloodType=$_POST['BloodType'];
}
if ($_POST['Job']=="") {
  $Job="未設定";
} else {
  $Job=$_POST['Job'];
}
if ($_POST['EduBack']=="") {
  $EduBack="未設定";
} else {
  $EduBack=$_POST['EduBack'];
}
if ($_POST['BirthPrefecture']=="") {
  $BirthPrefecture="未設定";
} else {
  $BirthPrefecture=$_POST['BirthPrefecture'];
}
if ($_POST['Zodiac']=="") {
  $Zodiac="未設定";
} else {
  $Zodiac=$_POST['Zodiac'];
}
if ($_POST['MarriageStatus']=="") {
  $MarriageStatus="未設定";
} else {
  $MarriageStatus=$_POST['MarriageStatus'];
}
if ($_POST['Kids']=="") {
  $Kids="未設定";
} else {
  $Kids=$_POST['Kids'];
}
if ($_POST['Tabacco']=="") {
  $Tabacco="未設定";
} else {
  $Tabacco=$_POST['Tabacco'];
}
if ($_POST['Alchole']=="") {
  $Alchole="未設定";
} else {
  $Alchole=$_POST['Alchole'];
}
if ($_POST['Car']=="") {
  $Car="未設定";
} else {
  $Car=$_POST['Car'];
}
if ($_POST['Interest']=="") {
  $Interest="未設定";
} else {
  $Interest=$_POST['Interest'];
}
if ($_POST['ProfilePicture']=="") {
  $ProfilePicture="未設定";
} else {
  $ProfilePicture=$_POST['ProfilePicture'];
}
if ($_POST['ProfileMessage']=="") {
  $ProfileMessage="未設定";
} else {
  $ProfileMessage=$_POST['ProfileMessage'];
}
if ($_POST['PreferedAge']=="") {
  $PreferedAge="未設定";
} else {
  $PreferedAge=$_POST['PreferedAge'];
}
if ($_POST['PreferedPersonality']=="") {
  $PreferedPersonality="未設定";
} else {
  $PreferedPersonality=$_POST['PreferedPersonality'];
}
if ($_POST['Personality']=="") {
  $Personality="未設定";
} else {
  $Personality=$_POST['Personality'];
}
if ($_POST['SelfCute']=="") {
  $SelfCute="未設定";
} else {
  $SelfCute=$_POST['SelfCute'];
}
if ($_POST['SelfSexy']=="") {
  $SelfSexy="未設定";
} else {
  $SelfSexy=$_POST['SelfSexy'];
}
if ($_POST['SelfKindness']=="") {
  $SelfKindness="未設定";
} else {
  $SelfKindness=$_POST['SelfKindness'];
}
if ($_POST['SelfSmartness']=="") {
  $SelfSmartness="未設定";
} else {
  $SelfSmartness=$_POST['SelfSmartness'];
}
if ($_POST['SelfNeatness']=="") {
  $SelfNeatness="未設定";
} else {
  $SelfNeatness=$_POST['SelfNeatness'];
}
if ($_POST['SelfFashionable']=="") {
  $SelfFashionable="未設定";
} else {
  $SelfFashionable=$_POST['SelfFashionable'];
}
if ($_POST['SelfBrightness']=="") {
  $SelfBrightness="未設定";
} else {
  $SelfBrightness=$_POST['SelfBrightness'];
}
if ($_POST['SelfElegance']=="") {
  $SelfElegance="未設定";
} else {
  $SelfElegance=$_POST['SelfElegance'];
}
// $command_post="python3 update_profile.py " //pythonに引数を渡す
// .$_POST['UUID']." "
// .$Prefecture." "
// .$City." "
// .$Height." "
// .$Style." "
// .$Looks." "
// .$Cup." "
// .$BustSize." "
// .$WestSize." "
// .$HipSize." "
// .$BloodType." "
// .$Job." "
// .$EduBack." "
// .$BirthPrefecture." "
// .$Zodiac." "
// .$MarriageStatus." "
// .$Kids." "
// .$Tabacco." "
// .$Alchole." "
// .$Car." "
// .$Interest." "
// .$ProfilePicture." "
// .$ProfileMessage." "
// .$PreferedAge" "
// .$PreferedPersonality." "
// .$Personality." "
// .$SelfCute." "
// .$SelfSexy." "
// .$SelfKindness." "
// .$SelfSmartness." "
// .$SelfNeatness." "
// .$SelfFashionable." "
// .$SelfBrightness." "
// .$SelfElegance;
// exec($command_post, $output); //python実行と、返り数受け取り

echo json_encode(
  [
    // "result" => $output,
    "result" => $Prefecture,
  ]
);

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