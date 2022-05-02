<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Content-Type');
$rest_json = file_get_contents("php://input"); // JSONでPOSTされたデータを取り出す
$_POST = json_decode($rest_json, true); // JSON文字列をデコード
$command="python3 exe_from_php.py ".$_POST['id']; //pythonに引数を渡す
exec($command,$output); //python実行と、返り数受け取り

// pythonからの返り数のうち、SQLのヘッダーの受け取りと、文字列から配列変換(pythonの出力1行目)
$output[0]=trim($output[0],"\"['");
$output[0]=trim($output[0],"']\"");
$output0=explode("', '",$output[0]);

$output2=array();
$it = 0;

// pythonからの返り数のうち、SQLの受け取りと、文字列から配列変換(pythonの残りの行全て)
foreach ($output as $value) {
    $value=trim($value,"\"[");
    $value=trim($value,"]\"");
    $value=str_replace("'",'',$value);
    $value1=explode(", ",$value);
    $output1 = array_combine($output0,$value1);
    $output2 = $output2 + array("$it" => $output1);
    $it = $it + 1;
}
// 配列1行目の削除と、配列詰め
unset($output2[0]);
$output2 = array_values($output2);

//配列のJSON変換と、echoでのサーバーサイド出力。
if(empty($_POST['id'])) {
    echo json_encode(
        [
           "error" => true,
           "message" => "Error: 入力してください。",
           "pythonout2" => $output2,
        ]
    ); 
} else {
    echo json_encode(
        [
           "error" => false,
           "message" => 'Success: 入力されたテキスト→'.$_POST['id'],
           "pythonout2" => $output2,
        ]
    ); 
}