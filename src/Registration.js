import React from 'react';
import {
  Link,
  useParams,
} from 'react-router-dom';

export function Registration(){
  let { userId } = useParams();

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
      console.log(result)
    })
  }

  return(
    <div>
      <h1>Welcome</h1>
      <p>パスパラメーター：{userId}</p>
      <Register />
      <Link to="../../">戻る</Link>
    </div>
  )
}