<?php
// $rest_json = file_get_contents("php://input"); // JSONでPOSTされたデータを取り出す
// $_POST = json_decode($rest_json, true); // JSON文字列をデコード
$to = "hrtkszk@gmail.com";
$subject = "TEST";
$message = "<html><body><h1>This is HTML MAIL</h1></body></html>";
$headers = "From: from@example.com";
$headers .= "\r\n";
$headers .= "Content-type: text/html; charset=UTF-8";
mb_language("Japanese");
mb_internal_encoding("UTF-8");

if(mb_send_mail($to, $title, $message, $headers))
{
  echo "メール送信成功です";
}
else
{
  echo "メール送信失敗です";
}