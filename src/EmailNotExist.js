import * as React from "react";
import {
  Link,
  // Outlet
  // useNavigate
} from "react-router-dom";
import "./Message.css";

export function EmailNotExist() {

  return (
    <div>
      <h1>このメールは登録されていません</h1>
      <div>
        <br />
        <Link to="../">ログインページに戻る</Link>
      </div>
    </div>
  )
}