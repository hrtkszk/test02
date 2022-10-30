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
$input = file_get_contents('php://input');
preg_match('/------WebKitFormBoundary(.*)$/', $input, $matches);
echo $matches[1];
$boundary = $matches[1];
$a_blocks = preg_split("/-+$boundary/", $input);
echo $a_blocks;
// echo var_dump($_SERVER);
// echo $_SERVER['HTTP_CONTENT_TYPE'];

// function parse_raw_http_request(array &$a_data)
// {
//   // read incoming data
//   $input = file_get_contents('php://input');
  
//   // grab multipart boundary from content type header
//   preg_match('/------WebKitFormBoundary(.*)$/', $_SERVER['CONTENT_TYPE'], $matches);
//   $boundary = $matches[1];
  
//   // split content by boundary and get rid of last -- element
//   $a_blocks = preg_split("/-+$boundary/", $input);
//   array_pop($a_blocks);
      
//   // loop data blocks
//   foreach ($a_blocks as $id => $block)
//   {
//     if (empty($block))
//       continue;
    
//     // you'll have to var_dump $block to understand this and maybe replace \n or \r with a visibile char
    
//     // parse uploaded files
//     if (strpos($block, 'application/octet-stream') !== FALSE)
//     {
//       // match "name", then everything after "stream" (optional) except for prepending newlines 
//       preg_match('/name=\"([^\"]*)\".*stream[\n|\r]+([^\n\r].*)?$/s', $block, $matches);
//     }
//     // parse all other fields
//     else
//     {
//       // match "name" and optional value in between newline sequences
//       preg_match('/name=\"([^\"]*)\"[\n|\r]+([^\n\r].*)?\r$/s', $block, $matches);
//     }
//     $a_data[$matches[1]] = $matches[2];
//   }        
// }

//（2）$_FILEに情報があれば（formタグからpost送信されていれば）以下の処理を実行する
// echo "test1";
// echo var_dump($_FILES);
// echo "test2";
// if(!empty($_FILES)){

//     //（3）$_FILESからファイル名を取得する
//     $filename = $_FILES['imgfile']['name'];
//     echo $filename;
//     // //（4）$_FILESから保存先を取得して、images_after（ローカルフォルダ）に移す
//     // //move_uploaded_file（第1引数：ファイル名,第2引数：格納後のディレクトリ/ファイル名）
//     // $uploaded_path = 'images_after/'.$filename;
//     // //echo $uploaded_path.'<br>';
     
//     // $result = move_uploaded_file($_FILES['upload_image']['tmp_name'],$uploaded_path);
// } else {
//     echo "test2";
// }

// $fp = fopen('php://input', 'r');
// // if ( ! $fp) exit("Error\n");
// // // fwrite($stdin);

// // // copy($stdin,'file.jpg');
// $stdin = '';
// while(!feof($fp)){
//     $stdin .= fgets($fp, 1024);
// }
// fclose($fp);

// echo "test3";
// echo var_dump($stdin);
// echo "test4";
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