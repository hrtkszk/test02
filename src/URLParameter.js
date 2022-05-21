import React from 'react';
import {
  useParams,
  useHistory,
  useLocation,
} from 'react-router-dom';

export default function UrlParameter(){
  const location = useLocation(); // URL path や パラメータなど。JSのlocationと同じ
  const params = useParams();     // URLのパスパラメータを取得。例えば、 /uses/2 なら、2の部分を取得
  const history = useHistory();   // historyオブジェクトを取得。

  return(
      <>
    <p>ロケーション：{location}</p>
    <p>パスパラメーター：{params}</p>
    <p>履歴：{history}</p>
    </>
  )

}