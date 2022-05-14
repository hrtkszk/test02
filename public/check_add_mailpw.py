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


# field name込みの場合はこっちを使う
# cursor = connection.cursor(MySQLdb.cursors.DictCursor)
cursor = connection.cursor()

emailtable="EmailSettings"
pwdtable="PwdSettings"

# メールアドレスが存在するかチェック。存在しなければ、アドレス・PW・UUID追加に進む。存在したら、同じUUIDでパスワードを追加する。

cursor.execute(f"SELECT * FROM {emailtable} WHERE email='{sys.argv[1]}'")
print(cursor)
# field_names = [i[0] for i in cursor.description]
# print(field_names)
# for row in cursor:
#     row1 = list()
#     for item in row:
#         row1.append(item)
#     # printでのpythonからphpへの受け渡し
#     print (row1)

# UUID、メールアドレス登録→パスワード登録
# UUID、メールアドレス登録
cursor.execute(f"INSERT `{SQLconfig.db}`.`{emailtable}` (`UUID`, `email`, `datetime`) VALUES (UUID(), {sys.argv[1]}, CURRENT_TIME)")
cursor.execute(f"SELECT * FROM {emailtable} WHERE email='{sys.argv[1]}'")
field_names = [i[0] for i in cursor.description]
print(field_names)
for row in cursor:
    row1 = list()
    for item in row:
        row1.append(item)
    # printでのpythonからphpへの受け渡し
    print (row1)
#

# 保存を実行
connection.commit()

# 接続を閉じる
connection.close()
