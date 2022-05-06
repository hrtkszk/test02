import * as React from "react";
import {
  Link,
  // Outlet
  // useNavigate
} from "react-router-dom";
import { useState, useRef } from 'react';
import { useAuth } from "./useAuth";
import "./Message.css";


export function MessageList() {
  let auth = useAuth();
  const inputRef = useRef();
  // const intervalRef = useRef(null);

  const [MessageList, setMessageList] = useState([]);
  const [initialized, setinitialized] = useState(false);

  const initialRequestOptions ={
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({"id":auth.user})
  }

  // ページが読み込まれる時に実行し、MessageListとして登録する。
  if (initialized===false) {
    console.log(initialRequestOptions)
    fetch("../message_list.php",initialRequestOptions)
    .then((response)=> response.json())
    .then(result =>{
      // console.log(result)
      setMessageList(result.pythonout2)
      console.log(result.pythonout2)
    })
    setinitialized(true)
  }
  
  // if (intervalRef.current === null) {
  //   intervalRef.current = setInterval(() =>{
  //     fetch("../message_list.php",initialRequestOptions)
  //       .then((response)=> response.json())
  //       .then(result =>{
  //         console.log("result.pythonout2: ", result.pythonout2)
  //         setMessageList(result.pythonout2)
  //       })
  //   }, 10000);
  // }

  // useEffect(() => {
  //   // componentDidMount のタイミングで実行したい処理を記述
  //   return () => {
  //     // componentWillUnmount のタイミングで実行したい処理を記述
  //     clearInterval(intervalRef.current)
  //   }
  // }, []);

  if (MessageList === []) {
    return (
      <div>
        <h1>Message List for {auth.user}</h1>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Message List for {auth.user}</h1>
        <div>
        <ul>
            {MessageList.map((Message, i) => {
              return <li key={Message.aiteID} onClick={auth.setAite(this.key)}>
                <Link to="../Message">
                  {Message.aiteID}
                  {Message.message}
                  <span class="datetime_l">{Message.messagedDateTime}</span>
                </Link>
              </li>
            })}
        </ul>
        </div>

      </div>
    )
  }
}
