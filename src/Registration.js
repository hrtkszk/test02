import React from 'react';
import {
  Link,
  useParams,
  useNavigate
} from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from "./useAuth";

export function Registration(){
  const [NickName, setNickName] = useState("");
  const [Gender, setGender] = useState("");
  const [Age, setAge] = useState("");
  // const [RegResult, setRegResult] = useState("");
  const [initialized, setinitialized] = useState(false);
  let { userId } = useParams();
  let SubmitStat = false;
  let NewRegistry = false;
  let navigate = useNavigate();
  let auth = useAuth();
  let registerResult = "";

  const submit = e => {
    e.preventDefault();
    SubmitStat = true;
  }
  const Register = () => {
    // 登録

    if (initialized===false) {
      const requestOptions1 ={
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({"UUID":userId, "nickname":NickName, "gender":Gender,"age":Age})
      }
      console.log(requestOptions1)
      fetch("../check_registry.php",requestOptions1)
      .then((response)=> response.json())
      .then(result =>{
        console.log(result)
        if (result.result[0]==="NRY") {
          NewRegistry = true;
        } else {
          console.log("登録済み")
          navigate("../")
          //登録済み。ログアウト。
        }
      })
      .then(() => {
        if (SubmitStat && NewRegistry) {
          fetch("../register.php",requestOptions1)
          .then((response)=> response.json())
          .then(result =>{
            // setRegResult(result.result[0])
            console.log(result)
            registerResult = result.result[0]
            // if (result.result[0]==="RC") {
            //   setinitialized(true)
            //   auth.registration(userId, () => {
            //     navigate("../protected/", { replace: true })
            //   })
            // } else {
            //   console.log("エラー：", result.result[0])
            //   navigate("../")
            //   //登録エラー。ログアウト。
            // }
          })
          if (registerResult==="RC") {
            setinitialized(true)
            auth.registration(userId, () => {
              navigate("../protected/", { replace: true })
            })
          } else {
            console.log("エラー：", registerResult)
            navigate("../")
            //登録エラー。ログアウト。
          }
          // setinitialized(true)
          // let username = userId
          // auth.setMessage("")
          // auth.signin(username, () => {
          //   navigate("../protected/", { replace: true });
          // });
        }
      })
    }
  }

  return(
    <div>
      <p>パスパラメーター：{userId}</p>

      <div>
          <form onSubmit={e => submit(e)}>
            <input
              // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
              // title="有効なメールアドレスを入力してください"
              onChange={evt => {
                // 本当は、この段階で入力制限を設けたい。ポップアップなどで入力できないことを示す？
                //サーバー側でも入力制限を設けたい。
                setNickName(evt.target.value.replace(/"/g, '”').replace(/#/g, '＃').replace(/\$/g, '＄').replace(/&/g, '＆').replace(/'/g, '’').replace(/\(/g,'（').replace(/\)/g,'）').replace(/\\/g, '＼').replace(/</g, '＜').replace(/>/g, '＞').replace(/\*/g, '＊').replace(/`/g, '｀').replace(/\|/g, '｜'))
              }}
              placeholder='ニックネーム'
              required
            /><br />
            <div onChange={evt => {setGender(evt.target.value)}}>
              <input type="radio" value="1" name="gender" /> 男性
              <input type="radio" value="0" name="gender" /> 女性
              <input type="radio" value="2" name="gender" /> LGBTQ
            </div><br />
            <input
            type='number'
            // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            // 特殊文字を弾く必要がある。
            // title="8文字以上で、数字・小文字アルファベット・大文字アルファベットを含めてください"
            onChange={evt => {
              setAge(evt.target.value)
            }}
            placeholder='年齢'
            required
            /><br />
            <button onClick={Register}>登録する</button>
          </form>
          <br />
          <Link to="../../">戻る</Link>  
        </div>
      </div>
  )
}