import * as React from "react";
import {
  Link,
  // Outlet
  useNavigate
} from "react-router-dom";
import { useState } from 'react';
import { useAuth } from "./useAuth";
import "./Message.css";


export function ChangeEmail() {
  const [OldEmail, setOldEmail] = useState("");
  const [NewEmail, setNewEmail] = useState("");
  // let SubmitStat = false;

  let auth = useAuth();

  let navigate = useNavigate();

  // 入力値に問題があれば遷移しない。問題なければ遷移する
  const submit = e => {
    e.preventDefault();
    // SubmitStat = true;
  // }

  // const setTempRegister = () => {
    // 古いメールアドレス確認、新メールアドレス登録
    const requestOptions1 ={
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({"UUID":auth.user,"OldEmail":OldEmail, "NewEmail":NewEmail})
    }
    fetch("../check_change_email.php",requestOptions1)
    .then((response)=> response.json())
    .then(result =>{
      if (result.result[0]==="CES") {
        // メールアドレス登録成功。メッセージ表示
      } else {
        // メールアドレス間違い。メッセージ表示。リダイレクト？
        navigate("../EmailNotExist")
      }
    })
          // パスワード変更したら、メール発信する？
    // .then(() => {

    //   if (SubmitStat && EmailExist) {
    //     const requestOptions2 ={
    //       method: 'POST',
    //       headers:{'Content-Type': 'application/json'},
    //       body: JSON.stringify({"email":Email,"UUID":UUID, "pwd":NewEmail})
    //     }
    //     console.log(requestOptions2)
    //     fetch("../send_mail_newpwd.php",requestOptions2)
    //     .then((response)=> response.json())
    //     .then(result =>{
    //       if (result.EmailSend===true) {
    //         navigate("../EmailSent")
    //       } else {
    //         navigate("../EmailNotExist")
    //       }
    //     })
    //   } else {
    //     navigate("../EmailNotExist")
    //   }
    // })
  }



  return (
    <div>
      <h1>メールアドレス変更</h1>

      <div>
        <form onSubmit={e => submit(e)}>
          <input
            type="email"
            // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
            // title="有効なメールアドレスを入力してください"
            onChange={evt => {
              // 本当は、この段階で入力制限を設けたい。ポップアップなどで入力できないことを示す？
              setOldEmail(evt.target.value.replace(/"/g, '”').replace(/#/g, '＃').replace(/\$/g, '＄').replace(/&/g, '＆').replace(/'/g, '’').replace(/\(/g,'（').replace(/\)/g,'）').replace(/\\/g, '＼').replace(/</g, '＜').replace(/>/g, '＞').replace(/\*/g, '＊').replace(/`/g, '｀').replace(/\|/g, '｜'))
            }}
            placeholder='現在のメールアドレス'
            required
          /><br />
          <input
            type="email"
            // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
            // title="有効なメールアドレスを入力してください"
            onChange={evt => {
              // 本当は、この段階で入力制限を設けたい。ポップアップなどで入力できないことを示す？
              setNewEmail(evt.target.value.replace(/"/g, '”').replace(/#/g, '＃').replace(/\$/g, '＄').replace(/&/g, '＆').replace(/'/g, '’').replace(/\(/g,'（').replace(/\)/g,'）').replace(/\\/g, '＼').replace(/</g, '＜').replace(/>/g, '＞').replace(/\*/g, '＊').replace(/`/g, '｀').replace(/\|/g, '｜'))
            }}
            placeholder='新メールアドレス'
            required
          /><br />
          
          <button type="submit">変更する</button>
        </form>
        <br />
        <Link to="../">戻る</Link>
      </div>
    </div>
  )
}