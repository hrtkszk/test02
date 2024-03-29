import * as React from "react";
import {
  Link,
  // Outlet
  useNavigate
} from "react-router-dom";
import { useState } from 'react';
import "./Message.css";
import PasswordStrengthBar from 'react-password-strength-bar';


export function NewUser() {
  const [Email, setEmail] = useState("");
  const [Pwd, setPwd] = useState("");
  let SubmitStat = false;
  let NewEmail = false;
  let UUID = "";

  let navigate = useNavigate();

  // 入力値に問題があれば遷移しない。問題なければ遷移する
  const submit = e => {
    e.preventDefault();
    SubmitStat = true;
  // }

  // const setTempRegister = () => {
    // メールアドレス登録確認、仮登録
    const requestOptions1 ={
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({"email":Email, "pwd":Pwd})
    }
    fetch("../check_add_mailpw.php",requestOptions1)
    .then((response)=> response.json())
    .then(result =>{
      if (result[0]==="TRC") {
        NewEmail = true;
        UUID = result[1]
      } else {
        navigate("../EmailExist")
      }
    })
    .then(() => {
      // メール発信
      if (SubmitStat && NewEmail) {
        const requestOptions2 ={
          method: 'POST',
          headers:{'Content-Type': 'application/json'},
          body: JSON.stringify({"email":Email, "UUID":UUID})
        }
        console.log(requestOptions2)
        fetch("../send_mail.php",requestOptions2)
        .then((response)=> response.json())
        .then(result =>{
          if (result===true) {
            navigate("../EmailSent")
          } else {
            navigate("../EmailExist")
          }
        })
      } else {
        navigate("../EmailExist")
      }
    })
  }



  return (
    <div>
      <h1>新規登録</h1>

      <div>
        <form onSubmit={e => submit(e)}>
          <input
            type="email"
            // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
            // title="有効なメールアドレスを入力してください"
            onChange={evt => {
              // 本当は、この段階で入力制限を設けたい。ポップアップなどで入力できないことを示す？
              setEmail(evt.target.value.replace(/"/g, '”').replace(/#/g, '＃').replace(/\$/g, '＄').replace(/&/g, '＆').replace(/'/g, '’').replace(/\(/g,'（').replace(/\)/g,'）').replace(/\\/g, '＼').replace(/</g, '＜').replace(/>/g, '＞').replace(/\*/g, '＊').replace(/`/g, '｀').replace(/\|/g, '｜'))
            }}
            placeholder='メールアドレス'
            required
          /><br />
          
          <input
            type="password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            // 特殊文字を弾く必要がある。
            title="8文字以上で、数字・小文字アルファベット・大文字アルファベットを含めてください"
            onChange={evt => {
              setPwd(evt.target.value.replace(/"/g, '”').replace(/#/g, '＃').replace(/\$/g, '＄').replace(/&/g, '＆').replace(/'/g, '’').replace(/\(/g,'（').replace(/\)/g,'）').replace(/\\/g, '＼').replace(/</g, '＜').replace(/>/g, '＞').replace(/\*/g, '＊').replace(/`/g, '｀').replace(/\|/g, '｜'))
            }}
            placeholder='パスワード'
            required
          /><br />
          <PasswordStrengthBar
            minLength={8}
            style={{ width: 200 }}
            password={Pwd}
          /><br />
          {/* <button onClick={setTempRegister}>登録する</button> */}
          <button type="submit">登録する</button>
        </form>
        <br />
        <Link to="../">戻る</Link>
      </div>
    </div>
  )
}
