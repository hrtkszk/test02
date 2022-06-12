import * as React from "react";
import {
  Link,
  // Outlet
  // useNavigate
} from "react-router-dom";
import { useState } from 'react';
import { useAuth } from "./useAuth";
import "./Profile.css";


export function ProfileList() {
  let auth = useAuth();
  // const intervalRef = useRef(null);

  const [Profile_List, setProfileList] = useState([]);
  const [initialized, setinitialized] = useState(false);

  const initialRequestOptions ={
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({"id":auth.user})
  }

  // ページが読み込まれる時に実行し、Profile_Listとして登録する。
  if (initialized===false) {
    console.log(initialRequestOptions)
    fetch("../profile_list.php",initialRequestOptions)
    .then((response)=> response.json())
    .then(result =>{
      // console.log(result)
      setProfileList(result.pythonout2)
      console.log(result.pythonout2)
    })
    setinitialized(true)
  }
  
  if (Profile_List === []) {
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
            {Profile_List.map((Profile, i) => {
              return <li key={Profile.UUID} onClick={() => auth.setAite(Profile.UUID)}>
                <Link to="../Message">
                  {Profile.nickname}
                  {Profile.gender}
                  {Profile.age}
                  <span class="datetime_l">{Profile.age}</span>
                </Link>
              </li>
            })}
        </ul>
        </div>

      </div>
    )
  }
}
