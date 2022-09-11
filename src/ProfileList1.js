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
import SelectProfileItem from "./SelectProfileItem";


export function ProfileList1() {
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
    console.log(initialRequestOptions)
    fetch("../profile_list1.php",initialRequestOptions)
    .then((response)=> response.json())
    .then(result =>{
      console.log(result)
      setProfileList(result)
      // console.log(result)
    })
    setinitialized(true)
  }
  
  if (ProfileList === []) {
    return <></>
  } else {
    return (
      <div>
        <h1>Profile List</h1>
        <div>
        <ul>
            {ProfileList.map((Profile) => {
              let ProfileJson = {}
              ProfileJson = JSON.parse(Profile)
              return <li key={ProfileJson.UUID} onClick={() => auth.setAite(ProfileJson.UUID)}>
                <Link to="../Detail">
                  {ProfileJson.NickName}
                  <SelectProfileItem
                    title="性別"
                    keyName="Gender"
                    keyValue={ProfileDB.Gender}
                    DBValue={ProfileJson}
                  />
                  {ProfileJson.Age}
                </Link>
              </li>
            })}
        </ul>
        </div>

      </div>
    )
  }
}
