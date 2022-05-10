import * as React from "react";
import {
  Link,
  // Outlet
  // useNavigate
} from "react-router-dom";
import "./Message.css";

export function EmailSent() {
  const initialRequestOptions ={
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({"email":""})
  }
  console.log(initialRequestOptions)
  fetch("../send_email.php",initialRequestOptions)
  .then(response => {
    console.log(response)
  })

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
