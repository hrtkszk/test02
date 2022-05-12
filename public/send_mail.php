<?php
// header("Access-Control-Allow-Origin: *");
// header('Access-Control-Allow-Headers: Content-Type');
// $rest_json = file_get_contents("php://input"); // JSONでPOSTされたデータを取り出す
// $_POST = json_decode($rest_json, true); // JSON文字列をデコード
// $to = $_POST['emailphone'];
$to = "hrtkszk@gmail.com";
$subject = "TEST";
$message = "<html><body><h1>This is HTML MAIL</h1></body></html>";
$headers = "From: hrtkszk@gmail.com";
$headers .= "\r\n";
$headers .= "Content-type: text/html; charset=UTF-8";
// $headers = ;
// $headers = "From : from@pg-happy.jp"; //送信元メールアドレス
// $headers .= "Return-Path: from@pg-happy.jp"; //送信元メールアドレス
// $headers .= "Content-Type: text/plain;charset=ISO-2022-JP"; //おまじない（無くてもいいっぽい）

mb_language("Japanese");
mb_internal_encoding("UTF-8");

if(mb_send_mail($to, $title, $message, $headers))
{
  echo json_encode(
    [
       "EmailSend" => true,
    ]
}
else
{
  echo json_encode(
    [
       "EmailSend" => false,
    ]
}