#!/usr/local/bin/python3.7
# coding:utf-8
# MySQLdbのインポート
import MySQLdb
import sys
import datetime

# データベースへの接続とカーソルの生成
connection = MySQLdb.connect(
    host='mysql203.phy.lolipop.lan',
    user='LAA1422834',
    passwd='1234testTEST',
    db='LAA1422834-test')

# field name込みの場合はこっちを使う
# cursor = connection.cursor(MySQLdb.cursors.DictCursor)
cursor = connection.cursor()

cursor.execute(f"SELECT * FROM test WHERE id='{sys.argv[1]}'")

# num_fields = len(cursor.description)
field_names = [i[0] for i in cursor.description]
print(field_names)

for row in cursor:
    row1 = list()
    for item in row:
        if str(type(item)) == "<class 'datetime.datetime'>":
            # 時間を文字列に変換（php側の処理対策）
            row1.append(str(item.strftime("%Y/%m/%d %H:%M:%S")))
        elif str(type(item)) == "<class 'str'>":
            # phpでの文字列から配列への変換時の誤動作防止用前処理
            item = item.replace("'","’")
            row1.append(item.replace(', ', '，'))
        else:
            row1.append(item)
    # printでのpythonからphpへの受け渡し
    print (row1)

# 保存を実行
connection.commit()

# 接続を閉じる
connection.close()
