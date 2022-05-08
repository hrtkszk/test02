import * as React from "react";
import {
  Link,
  // Outlet
  // useNavigate
} from "react-router-dom";


export function EmailSent() {

  return (
    <div>
      <h1>確認メールを送信しました</h1>
      <div>
          送信したメールに記載されているURLをクリックして、認証してください。
        <br />
        <Link to="../">ログインページに戻る</Link>
      </div>
    </div>
  )
}
