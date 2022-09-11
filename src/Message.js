import * as React from "react";
// import {
//   Link,
//   // Outlet
//   useNavigate
// } from "react-router-dom";
import { useState, useRef, useEffect } from 'react';
import { useAuth } from "./useAuth";
import "./Message.css";


export function Message() {
  let auth = useAuth();
  const intervalRef = useRef(null);

  const inputRef = useRef();
  const [Messages, setMessages] = useState([]);
  const [SendMessage, setSendMessage] = useState("");
  const [BasicProfile, setBasicProfile] = useState({});
  const [initialized, setinitialized] = useState(false);

  const initialRequestOptions ={
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({"id":auth.user, "aite":auth.aite})
  }

  // ページが読み込まれる時に実行し、Messagesとして登録する。
  if (initialized===false) {
    console.log(initialRequestOptions)
    fetch("../get_message.php",initialRequestOptions)
    .then((response)=> response.json())
    .then(result =>{
      // console.log(result)
      setMessages(result.pythonout2)
      console.log(result.pythonout2)
    })

    const initialRequestOptions1 ={
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({"UUID":auth.aite})
    }
    console.log(initialRequestOptions1)
    fetch("../get_basicprofile.php",initialRequestOptions1)
    .then((response) => response.json())
    .then(result => {
      console.log(result[0])
      setBasicProfile(JSON.parse(result[0]))
    })

    setinitialized(true)
  }
  
  if (intervalRef.current === null) {
    intervalRef.current = setInterval(() =>{
      fetch("../get_message.php",initialRequestOptions)
        .then((response)=> response.json())
        .then(result =>{
          console.log("result.pythonout2: ", result.pythonout2)
          setMessages(result.pythonout2)
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
      setMessages(result.pythonout2)
      // console.log(Messages)
      inputRef.current.value = ""
      setSendMessage("")
    })
  }

  // BasicProfileが空の場合、空ページを表示（読み込みが完了していないため）
  if (BasicProfile.length === 0) {
    return <></>
  
  } else if (Messages === []) {
    return (
      <div>
        <h1>{BasicProfile.NickName}　{BasicProfile.Age}</h1>
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
        <h1>{BasicProfile.NickName}　{BasicProfile.Age}</h1>
        <div>
        <ul>
          {Messages.map((Message, i) => {
            if (Message.sender!==auth.user) {
              return <li key={Message.message}> 
              <div class="balloon_l">
                <div class="faceicon">
                  {Message.aiteID}
                </div>
                <div class="says">{Message.message}</div>
              </div>
              <span class="datetime_l">{Message.messagedDateTime}</span>
              </li>
            } else {
              return <li key={Message.message}> 
              <div class="balloon_r">
                <div class="faceicon">
                  {Message.UUID}
                </div>
                <div class="says">{Message.message}</div>
              </div>
              <span class="datetime_r">{Message.messagedDateTime}</span>
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
