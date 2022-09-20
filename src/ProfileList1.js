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
// import SelectProfileItem from "./SelectProfileItem";
import AreaDB from "./Area.json";


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
  

  const ShowArea = (props) => {
    if (props.DBValue.Area !== undefined) {
      // Area未設定の場合→「未設定」と表示
      if (props.DBValue.Area === 10000000) {
        return (
          <>
            {AreaDB.Area[String(props.DBValue.Area).slice(0,2)+"000000"]["AreaName"]}
          </>
        )
      
      // Areaが設定されている場合
      } else {
        // Prefectureが未設定の場合→「Area」のみを表示
        if (String(props.DBValue.Area).slice(2,8) === "000000") {
          return (
            <>
              {AreaDB.Area[String(props.DBValue.Area).slice(0,2)+"000000"]["AreaName"]}
            </>
          )
        
        // Prefectureが設定されている場合
        } else {
          // Cityが未設定の場合→「Area」「Prefecture」を表示
          if (String(props.DBValue.Area).slice(4,8) === "0000") {
            return (
              <>
                {AreaDB.Area[String(props.DBValue.Area).slice(0,2)+"000000"]["AreaName"]}　
                {AreaDB.Area[String(props.DBValue.Area).slice(0,2)+"000000"]["Prefecture"][String(props.DBValue.Area).slice(0,4)+"0000"]["PrefectureName"]}
              </>
            )
          // Cityが設定されている場合→「Area」「Prefecture」「City」を表示
          } else {
            // Wardが存在しないCityが設定されている場合
            if (AreaDB.Area[String(props.DBValue.Area).slice(0,2)+"000000"]["Prefecture"][String(props.DBValue.Area).slice(0,4)+"0000"]["City"][String(props.DBValue.Area).slice(0,6)+"00"]["CityName"] === undefined) {
              return (
                <>
                  {AreaDB.Area[String(props.DBValue.Area).slice(0,2)+"000000"]["AreaName"]}　
                  {AreaDB.Area[String(props.DBValue.Area).slice(0,2)+"000000"]["Prefecture"][String(props.DBValue.Area).slice(0,4)+"0000"]["PrefectureName"]}
                  {AreaDB.Area[String(props.DBValue.Area).slice(0,2)+"000000"]["Prefecture"][String(props.DBValue.Area).slice(0,4)+"0000"]["City"][String(props.DBValue.Area).slice(0,6)+"00"]}
                </>
              )
            // Wardが存在するCityが設定されている場合
            } else { 
              // Wardが未設定の場合→「Area」「Prefecture」「City」を表示
              if (String(props.DBValue.Area).slice(6,8) === "00") {
                return (
                  <>
                    {AreaDB.Area[String(props.DBValue.Area).slice(0,2)+"000000"]["AreaName"]}　
                    {AreaDB.Area[String(props.DBValue.Area).slice(0,2)+"000000"]["Prefecture"][String(props.DBValue.Area).slice(0,4)+"0000"]["PrefectureName"]}
                    {AreaDB.Area[String(props.DBValue.Area).slice(0,2)+"000000"]["Prefecture"][String(props.DBValue.Area).slice(0,4)+"0000"]["City"][String(props.DBValue.Area).slice(0,6)+"00"]["CityName"]}
                  </>
                )
              // Wardが設定されている場合→「Area」「Prefecture」「Ward」を表示
              } else {
                return (
                  <>
                    {AreaDB.Area[String(props.DBValue.Area).slice(0,2)+"000000"]["AreaName"]}　
                    {AreaDB.Area[String(props.DBValue.Area).slice(0,2)+"000000"]["Prefecture"][String(props.DBValue.Area).slice(0,4)+"0000"]["PrefectureName"]}
                    {AreaDB.Area[String(props.DBValue.Area).slice(0,2)+"000000"]["Prefecture"][String(props.DBValue.Area).slice(0,4)+"0000"]["City"][String(props.DBValue.Area).slice(0,6)+"00"]["Ward"][props.DBValue.Area]}
                  </>
                )
              }
            }
          }
        }
      }
    }
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
                  名前：{ProfileJson.NickName}<br />
                  性別：{Object.keys(ProfileDB.Gender).map(key => 
                          <>
                            {str = "Gender".concat(key)}
                            {ProfileJson[str] === 1 ? (
                              ProfileDB.Gender[key]
                            ) : null}
                          </>
                        )}<br />
                  場所：<ShowArea DBValue={ProfileJson}/><br />
                  年齢：{ProfileJson.Age}
                </Link>
                <hr />
              </li>
            })}
        </ul>
        </div>

      </div>
    )
  }
}
