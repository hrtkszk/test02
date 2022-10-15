import * as React from "react";
import {
  Link,
  // Outlet
  // useNavigate
} from "react-router-dom";
import { useState } from 'react';
import { useAuth } from "./useAuth";
import "./Profile.css";
import ProfileDB from "./Profile.json";


export function ProfileList() {
  let auth = useAuth();
  // const intervalRef = useRef(null);

  const [ProfileList, setProfileList] = useState([]);
  const [initialized, setinitialized] = useState(false);

  const initialRequestOptions ={
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({"UUID":auth.user})
  }

  // ページが読み込まれる時に実行し、Profile_Listとして登録する。
  if (initialized===false) {
    // console.log(initialRequestOptions)
    fetch("../profile_list.php",initialRequestOptions)
    .then((response)=> response.json())
    .then(result =>{
      // console.log(result)
      // setProfileList(JSON.parse(result))
      setProfileList(result)
      // console.log(result)
    })
    setinitialized(true)
  }
  
  if (ProfileList === undefined || Object.keys(ProfileList).length === 0) {
    return <></>
  } else {
    return (
      <div>
        <h1>Profile List for {auth.user}</h1>
        <div>
        <ul>
            {ProfileList.map((Profile) => {
              let ProfileJson = {}
              ProfileJson = JSON.parse(Profile)
              return <li key={ProfileJson.UUID} onClick={() => auth.setAite(ProfileJson.UUID)}>
                <Link to="../Detail">
                  名前：{ProfileJson.NickName}<br />
                  性別：{ProfileDB.Gender[ProfileJson.Gender]}<br />
                  年齢：{ProfileDB.AgeRange[ProfileJson.AgeRange]}<br /><hr />
                </Link>
              </li>
            })}
        </ul>
        </div>

      </div>
    )
  }
}
