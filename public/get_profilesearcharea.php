<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Content-Type');
$rest_json = file_get_contents("php://input"); // JSONでPOSTされたデータを取り出す
$_POST = json_decode($rest_json, true); // JSON文字列をデコード

$command="python3 get_profilesearcharea.py ".$_POST['UUID']; //pythonに引数を渡す
exec($command,$output); //python実行と、返り数受け取り

$output2=array();

// pythonからの返り数のうち、SQLの受け取りと、文字列から配列変換(pythonの残りの行全て)
if($output[1]!="None") {
    foreach ($output as $value) {
        $value=trim($value,"\"[");
        $value=trim($value,"]\"");
        $value=str_replace("'",'',$value);
        $output2 = $output2 + array("$value" => true);
    }

    //配列のJSON変換と、echoでのサーバーサイド出力。
    if(empty($_POST['UUID'])) {
        echo json_encode(
            [
                "result" => $output2,
            ]
        );
    } else {
        echo json_encode(
            [
                "result" => $output2,
            ]
        );
    }
} else {
    echo json_encode(
        [
            "result" => "PSAND", 
            // Profile Search Area Not Defined
        ]
    );
}
