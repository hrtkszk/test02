<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: *');
// header('Access-Control-Allow-Headers: Content-Type');
// $rest_json = file_get_contents("php://input"); // JSONでPOSTされたデータを取り出す
// $_POST = json_decode($rest_json, true); // JSON文字列をデコード

$image = uniqid(mt_rand(), true);//ファイル名をユニーク化
$image .= '.' . substr(strrchr($_FILES['image']['name'], '.'), 1);//アップロードされたファイルの拡張子を取得


if (!empty($_FILES['image']['name'])) {//ファイルが選択されていれば$imageにファイル名を代入
    try {
        move_uploaded_file($_FILES['image']['tmp_name'], './images/' . $image);//imagesディレクトリにファイル保存
    } catch (Exception $e) {
        echo $e;
    }

}

$file = "./images/$image";
if (exif_imagetype($file)) {//画像ファイルかのチェック
    echo '画像をアップロードしました';
} else {
    echo '画像ファイルではありません';
}