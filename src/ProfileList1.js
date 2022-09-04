import * as React from "react";
// import {
//   Link,
//   // Outlet
//   // useNavigate
// } from "react-router-dom";
import { useState } from 'react';
import { useAuth } from "./useAuth";
import "./Profile.css";
// import ProfileDB from "./Profile.json";


export function ProfileList1() {
  let auth = useAuth();
  // const intervalRef = useRef(null);

  const [ProfileList, setProfileList] = useState([]);
  const [initialized, setinitialized] = useState(false);

  const initialRequestOptions ={
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({"id":auth.user})
  }

  // ページが読み込まれる時に実行し、Profile_Listとして登録する。
  if (initialized===false) {
    let test = {}
    console.log(initialRequestOptions)
    fetch("../profile_list1.php",initialRequestOptions)
    .then((response)=> response.json())
    .then(result =>{
      // console.log(result)
      setProfileList(result.result)
      console.log(result.result)
      console.log(result.result[1])
      test=JSON.parse(result.result[1])
      console.log(test.UUID)
    })
    setinitialized(true)
  }
  
  if (ProfileList === []) {
    return (
      <div>
        <h1>Profile List</h1>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Profile List for {auth.user}</h1>
        <div>
        {/* <ul>
            {Profile_List.map((Profile, i) => {
              return <li key={Profile.UUID} onClick={() => auth.setAite(Profile.UUID)}>
                <Link to="../Detail">
                  {Profile.nickname}
                  {ProfileDB.Gender[Profile.gender]}
                  {Profile.age}
                </Link>
              </li>
            })}
        </ul> */}
        </div>

      </div>
    )
  }
}
