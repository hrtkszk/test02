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
import AreaDB from "./Area.json";

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

  function ShowArea(ProfileArea) {
    let Area = 10000000
    console.log(ProfileArea.ProfileArea)
    // console.log(ProfileArea.Area)
    // Area = ProfileArea.Area
    console.log(Area)
    if (Area !== undefined) {
      // Area未設定の場合→「未設定」と表示
      if (Area === 10000000) {
        return (
          <>
            {AreaDB.Area[String(Area).slice(0,2)+"000000"]["AreaName"]}
          </>
        )
      
      // Areaが設定されている場合
      } else {
        // Prefectureが未設定の場合→「Area」のみを表示
        if (String(Area).slice(2,8) === "000000") {
          return (
            <>
              {AreaDB.Area[String(Area).slice(0,2)+"000000"]["AreaName"]}
            </>
          )
        
        // Prefectureが設定されている場合
        } else {
          // Cityが未設定の場合→「Area」「Prefecture」を表示
          if (String(Area).slice(4,8) === "0000") {
            return (
              <>
                {AreaDB.Area[String(Area).slice(0,2)+"000000"]["AreaName"]}　
                {AreaDB.Area[String(Area).slice(0,2)+"000000"]["Prefecture"][String(Area).slice(0,4)+"0000"]["PrefectureName"]}
              </>
            )
          // Cityが設定されている場合→「Area」「Prefecture」「City」を表示
          } else {
            // Wardが存在しないCityが設定されている場合
            if (AreaDB.Area[String(Area).slice(0,2)+"000000"]["Prefecture"][String(Area).slice(0,4)+"0000"]["City"][String(Area).slice(0,6)+"00"]["CityName"] === undefined) {
              return (
                <>
                  {AreaDB.Area[String(Area).slice(0,2)+"000000"]["AreaName"]}　
                  {AreaDB.Area[String(Area).slice(0,2)+"000000"]["Prefecture"][String(Area).slice(0,4)+"0000"]["PrefectureName"]}
                  {AreaDB.Area[String(Area).slice(0,2)+"000000"]["Prefecture"][String(Area).slice(0,4)+"0000"]["City"][String(Area).slice(0,6)+"00"]}
                </>
              )
            // Wardが存在するCityが設定されている場合
            } else { 
              // Wardが未設定の場合→「Area」「Prefecture」「City」を表示
              if (String(Area).slice(6,8) === "00") {
                return (
                  <>
                    {AreaDB.Area[String(Area).slice(0,2)+"000000"]["AreaName"]}　
                    {AreaDB.Area[String(Area).slice(0,2)+"000000"]["Prefecture"][String(Area).slice(0,4)+"0000"]["PrefectureName"]}
                    {AreaDB.Area[String(Area).slice(0,2)+"000000"]["Prefecture"][String(Area).slice(0,4)+"0000"]["City"][String(Area).slice(0,6)+"00"]["CityName"]}
                  </>
                )
              // Wardが設定されている場合→「Area」「Prefecture」「Ward」を表示
              } else {
                return (
                  <>
                    {AreaDB.Area[String(Area).slice(0,2)+"000000"]["AreaName"]}　
                    {AreaDB.Area[String(Area).slice(0,2)+"000000"]["Prefecture"][String(Area).slice(0,4)+"0000"]["PrefectureName"]}
                    {AreaDB.Area[String(Area).slice(0,2)+"000000"]["Prefecture"][String(Area).slice(0,4)+"0000"]["City"][String(Area).slice(0,6)+"00"]["Ward"][Area]}
                  </>
                )
              }
            }
          }
        }
      }
    }
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
              console.log(ProfileJson.Area)
              return <li key={ProfileJson.UUID} onClick={() => auth.setAite(ProfileJson.UUID)}>
                <Link to="../Detail">
                  名前：{ProfileJson.NickName}<br />
                  性別：{ProfileDB.Gender[ProfileJson.Gender]}<br />
                  年齢：{ProfileDB.AgeRange[ProfileJson.AgeRange]}<br />
                  エリア：<ShowArea ProfileArea={ProfileJson.Area}/><br /><hr />
                </Link>
              </li>
            })}
        </ul>
        </div>

      </div>
    )
  }
}
