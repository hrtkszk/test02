import * as React from "react";
import {
  Link,
  // Outlet
  useNavigate
} from "react-router-dom";
import { useState } from 'react';
import "./Message.css";


export function ForgetPwd() {
  const [Email, setEmail] = useState("");
  let SubmitStat = false;
  let EmailExist = false;
  let UUID = "";
  let NewPwd = "";

  let navigate = useNavigate();

  // 入力値に問題があれば遷移しない。問題なければ遷移する
  const submit = e => {
    e.preventDefault();
    SubmitStat = true;
  // }

  // const setTempRegister = () => {
    // メールアドレス確認、仮パスワード発行
    const requestOptions1 ={
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({"email":Email})
    }
    fetch("../check_mail_exist.php",requestOptions1)
    .then((response)=> response.json())
    .then(result =>{
      if (result.result[0]==="EE") {
        EmailExist = true;
        UUID = result.result[1]
        NewPwd = result.result[2]
      } else {
        navigate("../EmailNotExist")
      }
    })
    .then(() => {
      // メール発信
      if (SubmitStat && EmailExist) {
        const requestOptions2 ={
          method: 'POST',
          headers:{'Content-Type': 'application/json'},
          body: JSON.stringify({"email":Email,"UUID":UUID, "pwd":NewPwd})
        }
        console.log(requestOptions2)
        fetch("../send_mail_newpwd.php",requestOptions2)
        .then((response)=> response.json())
        .then(result =>{
          if (result.EmailSend===true) {
            navigate("../EmailSent")
          } else {
            navigate("../EmailNotExist")
          }
        })
      } else {
        navigate("../EmailNotExist")
      }
    })
  }



  return (
    <div>
      <h1>パスワード再発行</h1>

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
          
          <button type="submit">再発行する</button>
        </form>
        <br />
        <Link to="../">戻る</Link>
      </div>
    </div>
  )
}