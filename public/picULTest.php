<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: *');
// header('Access-Control-Allow-Headers: Content-Type');
// $rest_json = file_get_contents("php://input"); // JSONでPOSTされたデータを取り出す
// $_POST = json_decode($rest_json, true); // JSON文字列をデコード
// $data = file("php://input");
// $data_serialize = serialize($data);

// file("php://stdin");
// touch('file.jpg');

//（2）$_FILEに情報があれば（formタグからpost送信されていれば）以下の処理を実行する
if(!empty($_FILES)){

    //（3）$_FILESからファイル名を取得する
    $filename = $_FILES['upload_image']['name'];
    echo $filename;
    // //（4）$_FILESから保存先を取得して、images_after（ローカルフォルダ）に移す
    // //move_uploaded_file（第1引数：ファイル名,第2引数：格納後のディレクトリ/ファイル名）
    // $uploaded_path = 'images_after/'.$filename;
    // //echo $uploaded_path.'<br>';
     
    // $result = move_uploaded_file($_FILES['upload_image']['tmp_name'],$uploaded_path);
}    

// $fp = fopen('php://input', 'r');
// if ( ! $fp) exit("Error\n");
// // fwrite($stdin);

// // copy($stdin,'file.jpg');
// $stdin = '';
// while(!feof($fp)){
//     $stdin .= fgets($fp, 1024);
// }
// fclose($fp);

// // $stdin = str_replace("\r\n", "\n", $stdin);
// // list($head, $body) = explode("\n\n", $stdin, 2);

// touch('file.jpg');
// $file_path = fopen('file.jpg', 'a');
// fwrite($file_path, $stdin);
// fclose($file_path);

// chmod('file.jpg', 0604);

// touch('file.jpg');
// // $file_path = "../aaa.text";
// $file_path = fopen('file.jpg', 'w');
// // fwrite($file_path);
// // fclose($file_path);
// // chmod('file.jpg', 0604);
// // $data_serialize = serialize($data);
// file_put_contents('file.jpg', $file);
// chmod('file.jpg', 0604);

// $file_handle =fopen($file, "r");
// $file_handle =touch('aaa.jpg');
// fwrite($file_handle, $file);
// fclose($file_handle);
// $file = json_decode($file_json[0], true);
// $_FILES[$_POST['name']];
// $command_post="python3 boshu_list.py ".$_POST['UUID']; //pythonに引数を渡す
// exec($command_post, $output); //python実行と、返り数受け取り
// echo json_encode($rest_json);
// $contents = file_get_contents($_POST);
// echo json_encode($file);
// json_encode(
//     [
//         // "contents" => $_POST,
//         "file" =>  $file,
//     ]
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
// if(empty($_POST['UUID'])) {
//     echo json_encode(
//         [
//            "result" => $output2,
//         ]
//     ); 
// } else {
//     echo json_encode(
//         [
//             "result" => $output2,
//         ]
//     ); 
// }