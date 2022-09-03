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

ProfileSearchSetting1="ProfileSearchSetting1"
ProfileTable1="ProfileTable1"

# field name込みの場合はこっちを使う
# cursor = connection.cursor(MySQLdb.cursors.DictCursor)
cursor = connection.cursor()

# 自分の検索設定の入手
try:
    cursor.execute(f"SELECT * FROM {ProfileSearchSetting1} WHERE UUID='{sys.argv[1]}'")
    field_names = [i[0] for i in cursor.description]
    profileSearchSetting = [int.from_bytes(i, "big") if isinstance(i, bytes) else i for i in cursor.fetchone()]
    DictPSS = dict(zip(field_names, profileSearchSetting))
    for k, v in DictPSS.items():
        if v == 0:
            del DictPSS[k]
    print(DictPSS)
except (MySQLdb.Error, MySQLdb.Warning, IndexError, TypeError) as e:
    print(e)

# 検索設定に基づいたProfileTable1の検索
try:
    cursor.execute(f" \
        SELECT * \
        FROM {ProfileTable1} \
        WHERE \
            UUID != '{sys.argv[1]}' \
    ")
except (MySQLdb.Error, MySQLdb.Warning, IndexError, TypeError) as e:
    print(e)

# 本当は、検索設定に基づいて検索したい。（SQL上で対応。そのときに自分のUUIDのsys.argv[1]を使う）
# 複数のテーブルに跨るので、テーブルの合体などが必要。
# cursor.execute(f"SELECT UUID, nickname, gender, age FROM {table_name} WHERE UUID != '{sys.argv[1]}'")

# num_fields = len(cursor.description)
# field_names = [i[0] for i in cursor.description]
# print(field_names)

# for row in cursor:
#     row1 = list()
#     for item in row:
#         if str(type(item)) == "<class 'datetime.datetime'>":
#             # 時間を文字列に変換（php側の処理対策）
#             row1.append(str(item.strftime("%Y/%m/%d %H:%M:%S")))
#         elif str(type(item)) == "<class 'str'>":
#             # phpでの文字列から配列への変換時の誤動作防止用前処理
#             item = item.replace("'","’")
#             row1.append(item.replace(', ', '，'))
#         else:
#             row1.append(item)
#     # printでのpythonからphpへの受け渡し
#     print (row1)

# 保存を実行
connection.commit()

# 接続を閉じる
connection.close()
