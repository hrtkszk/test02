#!/usr/local/bin/python3.7
# coding:utf-8
# MySQLdbのインポート
import MySQLdb
import sys, json
import datetime
import SQLconfig
import json

try:
    RecieveData=json.loads(sys.argv[1])
except (IndexError, TypeError, ValueError) as e:
    print(e)

SettingValue = ""
for k,v in RecieveData.items():
    SettingValue += k + "='" + v + "', "
print(SettingValue)

# データベースへの接続とカーソルの生成
connection = MySQLdb.connect(
    host=SQLconfig.host,
    user=SQLconfig.user,
    passwd=SQLconfig.passwd,
    db=SQLconfig.db)

BoshuSearchSetting="BoshuSearchSetting"

# field name込みの場合はこっちを使う
# cursor = connection.cursor(MySQLdb.cursors.DictCursor)

cursor = connection.cursor()

# profileTableのUUIDのチェック（外部からの変更防止？）
# cursor.execute(f"SELECT * FROM {BoshuSearchSetting} WHERE UUID='{sys.argv[1]}'")
# checkExist = cursor.fetchone()

# # UUIDが存在しない→初めての追加？（それとも外部からのアタックか）
# if checkExist==None:
try:
    cursor.execute(f" \
        DELETE FROM `{BoshuSearchSetting}` \
        WHERE UUID='{RecieveData['UUID']}' \
    ")
    cursor.execute(f" \
        INSERT INTO `{BoshuSearchSetting}` \
        SET {SettingValue[:-2]} \
    ")
    # 保存を実行
    connection.commit()
    # 接続を閉じる
    connection.close()

    print("SPSSS") # Set Boshu Search Setting Success
except (MySQLdb.Error, MySQLdb.Warning, IndexError, TypeError) as e:
    print(e)
    print("SPSSNS") # Set Boshu Search Setting Not Success



# data=json.load(sys.argv[2])
# print(sys.argv)
# print(sys.argv[3])
# print(sys.argv[4])
# print(sys.argv[5])
# print(json.loads(sys.argv[2]))
# try:
#     PSGender=json.loads(sys.argv[2])
#     PSArea=json.loads(sys.argv[5])

#     print(f" \
#         UUID='{sys.argv[1]}', \
#         PSGender='{PSGender}', \
#         PSAge1='{sys.argv[3]}', \
#         PSAge2='{sys.argv[4]}'\
#         PSArea='{PSArea}' \
#     ")
# except (json.Error, json.Warning, IndexError, TypeError) as e:
#     print(e)