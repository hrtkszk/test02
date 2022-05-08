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
  const [EmailPhone, setEmailPhone] = useState("");
  const [Pwd, setPwd] = useState("");

  let navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  // 入力値に問題があれば遷移しない。問題なければ遷移する
  const submit = e => {
    e.preventDefault();
    setSubmitted(true);
  }



  const setEmailPwd = () => {

    if (EmailPhone.match(/@/)) {
      console.log(EmailPhone, "includes @ mark. ", Pwd)
      if (submitted) {
        navigate("/")
      }
      // const requestOptions ={
      //   method: 'POST',
      //   headers:{'Content-Type': 'application/json'},
      //   body: JSON.stringify({"EmailPhone":EmailPhone, "Pwd":Pwd})
      // }
      // console.log(requestOptions)
      // fetch("../send_post.php",requestOptions)
      // .then((response)=> response.json())
      // .then(result =>{
      //   console.log(result)
      //   setMessages(result.pythonout2)
      //   // console.log(Messages)
      //   navigate("/")

      // })
    } else {
      console.log(EmailPhone, "is not valid. ", Pwd)
      if (submitted) {
        navigate("/")
      }
    }

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
              setEmailPhone(evt.target.value.replace(/"/g, '”').replace(/#/g, '＃').replace(/\$/g, '＄').replace(/&/g, '＆').replace(/'/g, '’').replace(/\(/g,'（').replace(/\)/g,'）').replace(/\\/g, '＼').replace(/</g, '＜').replace(/>/g, '＞').replace(/\*/g, '＊').replace(/`/g, '｀').replace(/\|/g, '｜'))
            }}
            placeholder='メールアドレス'
            required
          /><br />
          
          <input
            type="password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
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
          <button onClick={setEmailPwd}>登録する</button>
        </form>
        <br />
        <Link to="../">戻る</Link>
      </div>
    </div>
  )
}
