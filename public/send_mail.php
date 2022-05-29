<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Content-Type');
$rest_json = file_get_contents("php://input"); // JSONでPOSTされたデータを取り出す
$_POST = json_decode($rest_json, true); // JSON文字列をデコード
$to = $_POST['email'];
$UUID = $_POST['UUID'];
// $to = "hrtkszk@gmail.com";
$title = "try for registration";
$message = "<html><body><a herf=\"https://quiet-yame-6258.chu.jp/Registration/$UUID\">Test</a></body></html>";
// $message = "<html><body><a herf=\"https://quiet-yame-6258.chu.jp/Registration/\">Test</a></body></html>";
$headers = "From: ewfafewre@lolipop.jp";
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
    );
}
else
{
  echo json_encode(
      [
        "EmailSend" => false,
      ]
    );
}