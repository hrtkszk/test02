import * as React from "react";
// import {
//   Link,
//   // Outlet
//   useNavigate
// } from "react-router-dom";
import { useState, useRef, useEffect } from 'react';
import { useAuth } from "./useAuth";


export function Message() {
  let auth = useAuth();
  const intervalRef = useRef(null);

  const inputRef = useRef();
  const [Messages, setMessages] = useState([]);
  const [SendMessage, setSendMessage] = useState("");
  const [initialized, setinitialized] = useState(false);

  const initialRequestOptions ={
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({"id":auth.user, "aite":"12345"})
  }

  // ページが読み込まれる時に実行し、Messagesとして登録する。
  if (initialized===false) {
    console.log(initialRequestOptions)
    fetch("../receive_get.php",initialRequestOptions)
    .then((response)=> response.json())
    .then(result =>{
      // console.log(result)
      setMessages(result.pythonout2)
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
      body: JSON.stringify({"id":auth.user, "aite":"12345", "message":SendMessage})
    }
    console.log(requestOptions)
    fetch("../send_post.php",requestOptions)
    .then((response)=> response.json())
    .then(result =>{
      console.log(result)
      setMessages(result.pythonout2)
      // console.log(Messages)
      inputRef.current.value = ""
      setSendMessage("")
    })
  }

  if (Messages === []) {
    return (
      <div>
        <h1>Welcome {auth.user}</h1>
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
        <h1>Welcome {auth.user}</h1>
        <div>
        <ul>
            {Messages.map((Message, i) => {
              return <li key={Message.message}>{Message.messagedDateTime}"     "{Message.message}</li>;
            })}
            {console.log("page reloaded")}
        </ul>
        </div>
        <div>
            <footer>
              <input
                id="sendMessage"
                ref={inputRef}
                onChange={evt => {
                  setSendMessage(evt.target.value.replace(/"/g, '”').replace(/#/g, '＃').replace(/\$/g, '＄').replace(/&/g, '＆').replace(/'/g, '’').replace(/\(/g,'（').replace(/\)/g,'）').replace(/\\/g, '＼').replace(/</g, '＜').replace(/>/g, '＞').replace(/\*/g, '＊').replace(/`/g, '｀').replace(/|/g, '｜'))
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
