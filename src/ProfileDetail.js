import * as React from "react";
// import {
//   Link,
//   // Outlet
//   useNavigate
// } from "react-router-dom";
import { useState } from 'react';
import { useAuth } from "./useAuth";

export function ProfileDetail() {
  let auth = useAuth();
  const [Profile, setProfile] = useState([]);
  const [initialized, setinitialized] = useState(false);

  const initialRequestOptions ={
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({"UUID":auth.user})
  }

  // ページが読み込まれる時に実行し、Messagesとして登録する。
  if (initialized===false) {
    console.log(initialRequestOptions)
    fetch("../../get_profile.php",initialRequestOptions)
    .then((response)=> response.json())
    .then(result =>{
      console.log(result)
      setProfile(result.result)
    })
    setinitialized(true)
  }

  // profileTableにUUIDがなければ、プロフィール設定を促すページを表示
  if (Profile===[]) {
    return (
      <>
          <h3>プロフィール</h3>
          <p>
              This is Profile Detail! {auth.user}
          </p>
          <Link to="../">戻る</Link>
      </>
    );
  
    //  profileTableにUUIDがあれば、プロフィールを表示＋設定ページボタンの表示
  } else {
    return (
      <div>
        <h1>プロフィール</h1>
        {/* <ul>
          {Profile.map((EaProfile, i) => {
            return <li key={EaProfile.UUID}> 
            <div class="balloon_l">
              <div class="faceicon">
                {EaProfile.prefecture}
              </div>
              <div class="says">{EaProfile.message}</div>
            </div>
            <span class="datetime_l">{EaProfile.messagedDateTime}</span>
            </li>
          })}
        </ul> */}
        <div>
          <Link to="../">戻る</Link>
        </div>
      </div>
    );
  }
}
