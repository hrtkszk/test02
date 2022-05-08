import * as React from "react";
import {
  Link,
  // Outlet
  // useNavigate
} from "react-router-dom";
import "./Message.css";

export function EmailExist() {

  return (
    <div>
      <h1>このメールはすでに登録されています</h1>
      <div>
        <br />
        <Link to="../">ログインページに戻る</Link>
      </div>
    </div>
  )
}