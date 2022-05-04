import * as React from "react";
// import {
//   Link,
//   // Outlet
//   useNavigate
// } from "react-router-dom";
import { useState, useRef, useEffect } from 'react';
import { useAuth } from "./useAuth";


export function ProfileList() {
  let auth = useAuth();
  const intervalRef = useRef(null);

  const [ProfileList, setProfileList] = useState([]);
  const [initialized, setinitialized] = useState(false);

  const initialRequestOptions ={
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({"id":auth.user})
  }

  // ページが読み込まれる時に実行し、ProfileListとして登録する。
  if (initialized===false) {
    console.log(initialRequestOptions)
    fetch("../receive_get.php",initialRequestOptions)
    .then((response)=> response.json())
    .then(result =>{
      // console.log(result)
      setProfileList(result.pythonout2)
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
          setProfileList(result.pythonout2)
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

  if (ProfileList === []) {
    return (
      <div>
        <h1>Profile List for {auth.user}</h1>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Profile List for {auth.user}</h1>
        <div>
        <ul>
            {ProfileList.map((Profile, i) => {
              return <li key={Profile.message}>{Profile.DateTime}"     "{Profile.message}</li>;
            })}
        </ul>
        </div>

      </div>
    )
  }
}
