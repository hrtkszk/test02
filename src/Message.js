import * as React from "react";
// import {
//   Link,
//   // Outlet
//   useNavigate
// } from "react-router-dom";
import { useState, useRef, useEffect } from 'react';
import { useAuth } from "./useAuth";
import "./Message.css";
import ProfileDB from "./Profile.json";

export function Message() {
  let auth = useAuth();
  const intervalRef = useRef(null);

  const inputRef = useRef();
  const [Messages, setMessages] = useState([]);
  const [SendMessage, setSendMessage] = useState("");
  const [Profile, setProfile] = useState([]);
  const [initialized, setinitialized] = useState(false);

  const initialRequestOptions ={
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({"id":auth.user, "aite":auth.aite})
  }

  // ページが読み込まれる時に実行し、Messagesとして登録する。
  if (initialized===false) {
    // console.log(initialRequestOptions)
    fetch("../get_message.php",initialRequestOptions)
    .then((response)=> response.json())
    .then(result =>{
      // console.log(result)
      setMessages(result)
      // console.log(result)
    })

    const initialRequestOptions1 ={
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({"UUID":auth.aite})
    }
    // console.log(initialRequestOptions1)
    fetch("../get_profile1.php",initialRequestOptions1)
    .then((response) => response.json())
    .then(result => {
      // console.log(result[0])
      setProfile(JSON.parse(result[0]))
    })

    setinitialized(true)
  }
  
  if (intervalRef.current === null) {
    intervalRef.current = setInterval(() =>{
      fetch("../get_message.php",initialRequestOptions)
      .then((response)=> response.json())
      .then(result =>{
        setMessages(result)
        console.log(result)
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

  const sendMsg = () => {
    const requestOptions ={
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({"id":auth.user, "aite":auth.aite, "message":SendMessage})
    }
    console.log(requestOptions)
    fetch("../send_message.php",requestOptions)
    .then((response)=> response.json())
    .then(result =>{
      console.log(result)
      setMessages(result)
      // console.log(Messages)
      inputRef.current.value = ""
      setSendMessage("")
    })
  }

  // Profileが空の場合、空ページを表示（読み込みが完了していないため）
  if (Object.keys(Profile).length === 0) {
    return <></>
  } else if (Messages === []) {
    return (
      <div>
        <h1>{Profile.NickName}　{ProfileDB.AgeRange[Profile.AgeRange]}</h1>
        <footer>
          <input
            id="sendMessage"
            ref={inputRef}
            onChange={evt => setSendMessage(evt.target.value)}
            placeholder='メッセージ'
          />
          <button onClick={sendMsg}>Send</button>
        </footer>
      </div>
    )
  } else {
    return (
      <div>
        <h1>{Profile.NickName}　{ProfileDB.AgeRange[Profile.AgeRange]}</h1>
        <div>
        <ul>
          {Messages.map((Message, i) => {
            let MessageJson = {}
            MessageJson = JSON.parse(Message)
            if (MessageJson.sender!==auth.user) {
              return <li key={MessageJson.message}> 
              <div class="balloon_l">
                <div class="faceicon">
                  {MessageJson.aiteID}
                </div>
                <div class="says">{MessageJson.message}</div>
              </div>
              <span class="datetime_l">{MessageJson.messagedDateTime}</span>
              </li>
            } else {
              return <li key={MessageJson.message}> 
              <div class="balloon_r">
                <div class="faceicon">
                  {MessageJson.UUID}
                </div>
                <div class="says">{MessageJson.message}</div>
              </div>
              <span class="datetime_r">{MessageJson.messagedDateTime}</span>
              </li>
            }
          })}
        </ul>
        </div>
        <div>
            <footer>
              <input
              // textarea
                id="sendMessage"
                ref={inputRef}
                onChange={evt => {
                  setSendMessage(evt.target.value.replace(/"/g, '”').replace(/#/g, '＃').replace(/\$/g, '＄').replace(/&/g, '＆').replace(/'/g, '’').replace(/\(/g,'（').replace(/\)/g,'）').replace(/\\/g, '＼').replace(/</g, '＜').replace(/>/g, '＞').replace(/\*/g, '＊').replace(/`/g, '｀').replace(/\|/g, '｜'))
                }}
                placeholder='メッセージ'
              />
              <button onClick={sendMsg}>Send</button>
            </footer>
        </div>
      </div>
    )
  }
}
