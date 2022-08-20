#!/usr/local/bin/python3.7
# coding:utf-8
# MySQLdbのインポート
import MySQLdb
import sys
import datetime
import SQLconfig

# データベースへの接続とカーソルの生成
connection = MySQLdb.connect(
    host=SQLconfig.host,
    user=SQLconfig.user,
    passwd=SQLconfig.passwd,
    db=SQLconfig.db)

PSArea="PSArea"

# field name込みの場合はこっちを使う
# cursor = connection.cursor(MySQLdb.cursors.DictCursor)

# cursor = connection.cursor()

# try:
    
#     cursor.execute(f" \
#         INSERT INTO `{PSArea}` \
#         SET \
#             UUID='{sys.argv[1]}', \
#             PSGender='{data}' \
#     ")
#     print("SPSSS") # Set Profile Search Setting Success
#     print(data)
# except (MySQLdb.Error, MySQLdb.Warning, IndexError, TypeError) as e:
#     print(e)
#     print("SPSSNS") # Set Profile Search Setting Not Success
#     print(data)



# # 保存を実行
# connection.commit()

# # 接続を閉じる
# connection.close()

UUID_Area = ""
for Area in sys.argv[2:]:
    UUID_Area += f"({sys.argv[1]}, {Area}), "


print(sys.argv[1])
print(sys.argv[2])
print(sys.argv[3])
print(sys.argv[4])
print(sys.argv[5])
print(UUID_Area)
