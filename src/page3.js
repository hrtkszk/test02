import * as React from "react";
// import {
//   Link,
//   // Outlet
//   useNavigate
// } from "react-router-dom";
import { useState, useRef, useCallback } from 'react';
import { useAuth } from "./useAuth";


export function Page3() {
  let auth = useAuth();
  const intervalRef = useRef(null);

  const inputRef = useRef();
  const [Messages, setMessages] = useState([]);
  const [FetchMessages, setFetchMessages] = useState([]);
  const [SendMessage, setSendMessage] = useState("");
  const [initialized, setinitialized] = useState(false);

  const initialRequestOptions ={
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({"id":auth.user})
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
      console.log(Messages)
    })
    setinitialized(true)
  }
  
  console.log("outside of constant update")
  console.log("Messages: ", Messages)

  if (intervalRef.current !== null) {
    return;
  } else {
    intervalRef.current = setInterval(() =>{
      console.log("Messages in interval 1: ", Messages)
      fetch("../receive_get.php",initialRequestOptions)
        .then((response)=> response.json())
        .then(result =>{
          console.log("result.pythonout2: ", result.pythonout2)
          setFetchMessages(result.pythonout2)
        })

      console.log("message after fetch: ", FetchMessages)
      console.log("Messages in interval 2: ", Messages)

      if (String(FetchMessages)!==String(Messages)) {
        console.log("message updated == message is not equal to Messages")
        setMessages(FetchMessages)
      }
    }, 10000);
  }

  const sendMsg = () => {
    const requestOptions ={
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({"id":auth.user, "message":SendMessage})
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
              return <li key={Message.message}>{Message.DateTime}"     "{Message.message}</li>;
            })}
        </ul>
        </div>
        <div>
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
      </div>
    )
  }
}
