import * as React from "react";
import {
  Link,
  // Outlet
  // useNavigate
} from "react-router-dom";
import { useState } from 'react';
import { useAuth } from "./useAuth";
import "./Message.css";
import ProfileDB from "./Profile.json";


export function MessageList() {
  let auth = useAuth();
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
    // console.log(initialRequestOptions)
    fetch("../message_list.php",initialRequestOptions)
    .then((response)=> response.json())
    .then(result =>{
      // console.log(result)
      setMessageList(result)
      // console.log(result.pythonout2)
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
            {MessageList.map((Message) => {
              let MessageJson = {}
              MessageJson = JSON.parse(Message)
              return <li key={MessageJson.aiteID} onClick={() => auth.setAite(MessageJson.aiteID)}>
                <Link to="../Message">
                  名前：{MessageJson.NickName}<br />
                  性別：{ProfileDB.Gender[MessageJson.Gender]}<br />
                  年齢：{ProfileDB.AgeRange[MessageJson.AgeRange]}<br />
                  最新メッセージ：{MessageJson.message}<br />
                  最新日時：{MessageJson.messagedDateTime}<br />
                </Link>
                <hr />
              </li>
            })}
        </ul>
        </div>

      </div>
    )
  }
}
