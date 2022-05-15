<?php
// header("Access-Control-Allow-Origin: *");
// header('Access-Control-Allow-Headers: Content-Type');
// $rest_json = file_get_contents("php://input"); // JSONでPOSTされたデータを取り出す
// $_POST = json_decode($rest_json, true); // JSON文字列をデコード
// $to = $_POST['email'];
// // $to = "hrtkszk@gmail.com";
// $title = "try for registration";
// $message = "<html><body>testing the resigstration</body></html>";
// $headers = "From: ewfafewre@lolipop.jp";
// $headers .= "\r\n";
// $headers .= "Content-type: text/html; charset=UTF-8";
// // $headers = ;
// // $headers = "From : from@pg-happy.jp"; //送信元メールアドレス
// // $headers .= "Return-Path: from@pg-happy.jp"; //送信元メールアドレス
// // $headers .= "Content-Type: text/plain;charset=ISO-2022-JP"; //おまじない（無くてもいいっぽい）

// mb_language("Japanese");
// mb_internal_encoding("UTF-8");

// if(mb_send_mail($to, $title, $message, $headers))
// {
//   echo json_encode(
//       [
//         "EmailSend" => true,
//       ]
//     );
// }
// else
// {
//   echo json_encode(
//       [
//         "EmailSend" => false,
//       ]
//     );
// }

//Qdmailをロード
require_once('qdmail.php');
//Qdsmtpをロード
//（ドキュメントには、記述不要とかいてあるが、書かないとうまくいかないことがあった）
require_once('qdsmtp.php');


$to = "hrtkszk@gmail.com";
$subject = "try for registration";
$body = "てすと";
$fromaddress = "hewfoufafsd@lolipop.jp";
$fromname = "hewfoufafsd";

//メール送信関数
// $to：送信先メールアドレス
// $subject：件名（日本語OK）
// $body：本文（日本語OK）
// $fromname：送信元名（日本語OK）
// $fromaddress：送信元メールアドレス
// function mailsender($to,$subject,$body,$fromname,$fromaddress){
    //SMTP送信
$mail = new Qdmail();
$mail -> smtp(true);
$param = array(
    'host'=>'smtp.lolipop.jp',
    'port'=> 465 ,
    'from'=>'hewfoufafsd@lolipop.jp',
    'protocol'=>'SMTP_AUTH',
    'user'=>'',
    'pass' => '',
);
$mail ->smtpServer($param);
$mail ->to($to);
$mail ->subject($subject);
$mail ->from($fromaddress,$fromname);
$mail ->text($body);
$mail ->send();

