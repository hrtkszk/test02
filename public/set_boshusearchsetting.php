<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Content-Type');
$rest_json = file_get_contents("php://input"); // JSONでPOSTされたデータを取り出す

$command_post='python3 set_boshusearchsetting.py "'.$rest_json.'"'; //pythonに引数を渡す

exec($command_post, $output); //python実行と、返り数受け取り

echo json_encode($output);

