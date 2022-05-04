import * as React from "react";
// import {
//   Link,
//   // Outlet
//   useNavigate
// } from "react-router-dom";
import { useState, useRef, useEffect } from 'react';
import { useAuth } from "./useAuth";


export function BoshuList() {
  let auth = useAuth();
  const intervalRef = useRef(null);

  const [BoshuList, setBoshuList] = useState([]);
  const [initialized, setinitialized] = useState(false);

  const initialRequestOptions ={
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({"id":auth.user})
  }

  // ページが読み込まれる時に実行し、BoshuListとして登録する。
  if (initialized===false) {
    console.log(initialRequestOptions)
    fetch("../receive_get.php",initialRequestOptions)
    .then((response)=> response.json())
    .then(result =>{
      // console.log(result)
      setBoshuList(result.pythonout2)
      console.log(result.pythonout2)
    })
    setinitialized(true)
  }
  
  if (intervalRef.current === null) {
    intervalRef.current = setInterval(() =>{
      fetch("../receive_get.php",initialRequestOptions)
        .then((response)=> response.json())
        .then(result =>{
          console.log("result.pythonout2: ", result.pythonout2)
          setBoshuList(result.pythonout2)
        })
    }, 10000);
  }

  useEffect(() => {
    // componentDidMount のタイミングで実行したい処理を記述
    return () => {
      // componentWillUnmount のタイミングで実行したい処理を記述
      clearInterval(intervalRef.current)
    }
  }, []);

  if (BoshuList === []) {
    return (
      <div>
        <h1>Boshu List for {auth.user}</h1>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Boshu List for {auth.user}</h1>
        <div>
        <ul>
            {BoshuList.map((Boshu, i) => {
              return <li key={Boshu.message}>{Boshu.DateTime}"     "{Boshu.message}</li>;
            })}
        </ul>
        </div>

      </div>
    )
  }
}
