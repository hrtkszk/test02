import * as React from "react";
import {
  Link,
  // Outlet
  useNavigate
} from "react-router-dom";
import { useState } from 'react';
import "./Message.css";


export function NewUser() {
  let navigate = useNavigate();

  const [EmailPhone, setEmailPhone] = useState("");
  const [Pwd, setPwd] = useState("");

  const setEmailPhonePwd = () => {
    if (EmailPhone.match(/@/)) {
      console.log(EmailPhone, "includes @ mark. ", Pwd)
      navigate("/")
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
    } else if (!isNaN(EmailPhone)) {
      // 電話番号は10桁であること
      // ハイフンなどは省きたい
      console.log(EmailPhone, "is a number. ", Pwd)
      navigate("/")
    } else {
      console.log(EmailPhone, "is not valid. ", Pwd)
      navigate("/")   
    }
  }


  return (
    <div>
      <h1>新規登録</h1>

      <div>
          <footer>
            <input
              id="EmailPhone"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
              onChange={evt => {
                // 本当は、この段階で入力制限を設けたい。ポップアップなどで入力できないことを示す？
                setEmailPhone(evt.target.value.replace(/"/g, '”').replace(/#/g, '＃').replace(/\$/g, '＄').replace(/&/g, '＆').replace(/'/g, '’').replace(/\(/g,'（').replace(/\)/g,'）').replace(/\\/g, '＼').replace(/</g, '＜').replace(/>/g, '＞').replace(/\*/g, '＊').replace(/`/g, '｀').replace(/\|/g, '｜'))
              }}
              placeholder='メールアドレス／電話番号'
            /><br />
            <input
              id="Password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              onChange={evt => {
                // パスワード入力がないとエラーとしたい
                setPwd(evt.target.value.replace(/"/g, '”').replace(/#/g, '＃').replace(/\$/g, '＄').replace(/&/g, '＆').replace(/'/g, '’').replace(/\(/g,'（').replace(/\)/g,'）').replace(/\\/g, '＼').replace(/</g, '＜').replace(/>/g, '＞').replace(/\*/g, '＊').replace(/`/g, '｀').replace(/\|/g, '｜'))
              }}
              placeholder='パスワード'
            /><br />
            <div>8文字以上で1文字以上の数字、小文字アルファベット、大文字アルファベットがそれぞれ含まれていること</div><br /><br />
            <button onClick={setEmailPhonePwd}>登録する</button>
          </footer>
          <Link to="../">戻る</Link>
      </div>
    </div>
  )
}
