import React from 'react';
import {
  Link,
  useParams,
} from 'react-router-dom';
import { useState } from 'react';

export function Registration(){
  const [RegResult, setRegResult] = useState("");
  const [initialized, setinitialized] = useState(false);
  let { userId } = useParams();

  if (initialized===false) {
    const Register = () => {
      // 登録
      const requestOptions1 ={
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({"UUID":userId})
      }
      fetch("../register.php",requestOptions1)
      .then((response)=> response.json())
      .then(result =>{
        setRegResult(result)
        console.log(result)
      })
    }
    setinitialized(true)
  }

  return(
    <div>
      <h1>登録が完了しました。</h1>
      <p>パスパラメーター：{userId}</p>
      <div>登録結果：{RegResult}</div>
      <Register />
      <Link to="../../">戻る</Link>  

      </div>
  )
}