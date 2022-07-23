import * as React from "react";
import {
  Link,
  // Outlet
  useNavigate
} from "react-router-dom";
import { ChangePwdStatus } from "./ChangePwdStatus";
import { useState } from 'react';
import { useAuth } from "./useAuth";
import "./Message.css";


export function ChangePwd() {
  const [OldPwd, setOldPwd] = useState("");
  const [NewPwd, setNewPwd] = useState("");
  // let SubmitStat = false;

  let auth = useAuth();

  let navigate = useNavigate();

  // 入力値に問題があれば遷移しない。問題なければ遷移する
  function handleSubmit(event) {
    event.preventDefault();
    // SubmitStat = true;
  // }

  // const setTempRegister = () => {
    // 古いパスワード確認、新パスワード発行
    const requestOptions1 ={
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({"UUID":auth.user,"OldPwd":OldPwd, "NewPwd":NewPwd})
    }
    fetch("../../check_change_pwd.php",requestOptions1)
    .then((response)=> response.json())
    .then(result =>{
      console.log(result)
      if (result.result[0]==="CPS") {
        // パスワード変更成功。リダイレクト
        <ChangePwdStatus>
          true
        </ ChangePwdStatus>
        navigate("../ProfileDetail")
      } else {
        // パスワード間違い。リダイレクト
        <ChangePwdStatus>
          false
        </ ChangePwdStatus>
        navigate("../ProfileDetail")
      }
    })
          // パスワード変更したら、メール発信する？
    // .then(() => {

    //   if (SubmitStat && EmailExist) {
    //     const requestOptions2 ={
    //       method: 'POST',
    //       headers:{'Content-Type': 'application/json'},
    //       body: JSON.stringify({"email":Email,"UUID":UUID, "pwd":NewPwd})
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
      <h1>パスワード変更</h1>
      <ChangePwdStatus />
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            // 特殊文字を弾く必要がある。
            title="8文字以上で、数字・小文字アルファベット・大文字アルファベットを含めてください"
            onChange={evt => {
              // 本当は、この段階で入力制限を設けたい。ポップアップなどで入力できないことを示す？
              setOldPwd(evt.target.value)
            }}
            placeholder='現在のパスワード'
            required
          /><br />
          <input
            type="password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            // 特殊文字を弾く必要がある。
            title="8文字以上で、数字・小文字アルファベット・大文字アルファベットを含めてください"
            onChange={evt => {
              // 本当は、この段階で入力制限を設けたい。ポップアップなどで入力できないことを示す？
              setNewPwd(evt.target.value)
            }}
            placeholder='新パスワード'
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