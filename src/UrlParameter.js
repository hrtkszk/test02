import React from 'react';
import {
  useParams,
  // useNavigate,
  // useLocation,
} from 'react-router-dom';

export function UrlParameter(){
  let { userId } = useParams();
  // const location = useLocation(); // URL path や パラメータなど。JSのlocationと同じ
  // const params = useParams();     // URLのパスパラメータを取得。例えば、 /uses/2 なら、2の部分を取得
  // const navigate = useNavigate();   // historyオブジェクトを取得。

  return(
      <>
    {/* <p>ロケーション：{location}</p> */}
    <p>パスパラメーター：{userId}</p>
    {/* <p>履歴：{navigate}</p> */}
    </>
  )

}