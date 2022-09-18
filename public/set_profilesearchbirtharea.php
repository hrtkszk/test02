<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Content-Type');
$rest_json = file_get_contents("php://input"); // JSONでPOSTされたデータを取り出す
$_POST = json_decode($rest_json, true); // JSON文字列をデコード

$PSArea = "";
foreach($_POST['PSBirthAreaArray'] as $value){
  $PSArea .=  $value." ";
};

$command_post="python3 set_profilesearchbirtharea.py " //pythonに引数を渡す
.$_POST['UUID']." "
.$PSArea;
exec($command_post, $output); //python実行と、返り数受け取り

echo json_encode(
  [
    // "_POST" => $_POST,
    "result" => $output,
    // "result" => "SPSSS",
  ]
);