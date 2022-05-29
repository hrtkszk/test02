import React from 'react';
import {
  Link,
  useParams,
} from 'react-router-dom';
import { useState } from 'react';

export function Registration(){
  const [NickName, setNickName] = useState("");
  const [Gender, setGender] = useState("");
  const [Age, setAge] = useState("");
  const [initialized, setinitialized] = useState(false);
  let { userId } = useParams();


  const Register = () => {
    // 登録
    if (initialized===false) {
      const requestOptions1 ={
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({"UUID":userId})
      }
      fetch("../register.php",requestOptions1)
      .then((response)=> response.json())
      .then(result =>{
        setRegResult(result.result[0])
        console.log(result)
      })
      setinitialized(true)
    }
  }


  return(
    <div>
      <h1>登録が完了しました。</h1>
      <p>パスパラメーター：{userId}</p>
      <div>登録結果：{RegResult}</div>
      <div><Register /></div>
      <Link to="../../">戻る</Link>  
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
            <div onChange={setGender(this.onChangeValue)}>
              <input type="radio" value="Male" name="gender" /> 男性
              <input type="radio" value="Female" name="gender" /> 女性
              <input type="radio" value="Other" name="gender" /> LGBTQ
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
            <button onClick={setTempRegister}>登録する</button>
          </form>
          <br />
          <Link to="../">戻る</Link>
        </div>
      </div>
  )
}