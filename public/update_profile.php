<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Content-Type');
$rest_json = file_get_contents("php://input"); // JSONでPOSTされたデータを取り出す
$_POST = json_decode($rest_json, true); // JSON文字列をデコード
$command_post="python3 check_change_email.py " //pythonに引数を渡す
.$_POST['UUID']." "
.$_POST['Prefecture']." "
.$_POST['City']." "
.$_POST['Height']." "
.$_POST['Style']." "
.$_POST['Looks']." "
.$_POST['Cup']." "
.$_POST['BustSize']." "
.$_POST['WestSize']." "
.$_POST['HipSize']." "
.$_POST['BloodType']." "
.$_POST['Job']." "
.$_POST['EduBack']." "
.$_POST['BirthPrefecture']." "
.$_POST['Zodiac']." "
.$_POST['MarriageStatus']." "
.$_POST['Kids']." "
.$_POST['Tabacco']." "
.$_POST['Alchole']." "
.$_POST['Car']." "
.$_POST['Interest']." "
.$_POST['ProfilePicture']." "
.$_POST['ProfileMessage']." "
.$_POST['PreferedAge']." "
.$_POST['PreferedPersonality']." "
.$_POST['Personality']." "
.$_POST['SelfCute']." "
.$_POST['SelfSexy']." "
.$_POST['SelfKindness']." "
.$_POST['SelfSmartness']." "
.$_POST['SelfNeatness']." "
.$_POST['SelfFashionable']." "
.$_POST['SelfBrightness']." "
.$_POST['SelfElegance'];
exec($command_post, $output); //python実行と、返り数受け取り

echo json_encode(
  [
    "result" => $output,
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