import * as React from "react";
import {
  Link,
  // Outlet
  // useNavigate
} from "react-router-dom";
import { 
  useState, 
  // useRef
 } from 'react';
import { useAuth } from "./useAuth";
import "./Profile.css";
import ProfileDB from "./Profile.json";
import AreaDB from "./Area.json";


export function BoshuList() {
  let auth = useAuth();
  // const intervalRef = useRef(null);

  const [BoshuList, setBoshuList] = useState([]);
  const [initialized, setinitialized] = useState(false);

  const initialRequestOptions ={
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({"UUID":auth.user})
  }

  // ページが読み込まれる時に実行し、BoshuListとして登録する。
  if (initialized===false) {
    console.log(initialRequestOptions)
    fetch("../boshu_list.php",initialRequestOptions)
    .then((response)=> response.json())
    .then(result =>{
      // console.log(result)
      setBoshuList(result)
      console.log(result)
    })
    setinitialized(true)
  }

  const ShowArea = (props) => {
    if (props.DBValue !== undefined) {
      // Area未設定の場合→「未設定」と表示
      if (props.DBValue === 10000000) {
        return (
          <>
            {AreaDB.Area[String(props.DBValue).slice(0,2)+"000000"]["AreaName"]}
          </>
        )
      
      // Areaが設定されている場合
      } else {
        // Prefectureが未設定の場合→「Area」のみを表示
        if (String(props.DBValue).slice(2,8) === "000000") {
          return (
            <>
              {AreaDB.Area[String(props.DBValue).slice(0,2)+"000000"]["AreaName"]}
            </>
          )
        
        // Prefectureが設定されている場合
        } else {
          // Cityが未設定の場合→「Area」「Prefecture」を表示
          if (String(props.DBValue).slice(4,8) === "0000") {
            return (
              <>
                {AreaDB.Area[String(props.DBValue).slice(0,2)+"000000"]["AreaName"]}　
                {AreaDB.Area[String(props.DBValue).slice(0,2)+"000000"]["Prefecture"][String(props.DBValue).slice(0,4)+"0000"]["PrefectureName"]}
              </>
            )
          // Cityが設定されている場合→「Area」「Prefecture」「City」を表示
          } else {
            // Wardが存在しないCityが設定されている場合
            if (AreaDB.Area[String(props.DBValue).slice(0,2)+"000000"]["Prefecture"][String(props.DBValue).slice(0,4)+"0000"]["City"][String(props.DBValue).slice(0,6)+"00"]["CityName"] === undefined) {
              return (
                <>
                  {AreaDB.Area[String(props.DBValue).slice(0,2)+"000000"]["AreaName"]}　
                  {AreaDB.Area[String(props.DBValue).slice(0,2)+"000000"]["Prefecture"][String(props.DBValue).slice(0,4)+"0000"]["PrefectureName"]}
                  {AreaDB.Area[String(props.DBValue).slice(0,2)+"000000"]["Prefecture"][String(props.DBValue).slice(0,4)+"0000"]["City"][String(props.DBValue).slice(0,6)+"00"]}
                </>
              )
            // Wardが存在するCityが設定されている場合
            } else { 
              // Wardが未設定の場合→「Area」「Prefecture」「City」を表示
              if (String(props.DBValue).slice(6,8) === "00") {
                return (
                  <>
                    {AreaDB.Area[String(props.DBValue).slice(0,2)+"000000"]["AreaName"]}　
                    {AreaDB.Area[String(props.DBValue).slice(0,2)+"000000"]["Prefecture"][String(props.DBValue).slice(0,4)+"0000"]["PrefectureName"]}
                    {AreaDB.Area[String(props.DBValue).slice(0,2)+"000000"]["Prefecture"][String(props.DBValue).slice(0,4)+"0000"]["City"][String(props.DBValue).slice(0,6)+"00"]["CityName"]}
                  </>
                )
              // Wardが設定されている場合→「Area」「Prefecture」「Ward」を表示
              } else {
                return (
                  <>
                    {AreaDB.Area[String(props.DBValue).slice(0,2)+"000000"]["AreaName"]}　
                    {AreaDB.Area[String(props.DBValue).slice(0,2)+"000000"]["Prefecture"][String(props.DBValue).slice(0,4)+"0000"]["PrefectureName"]}
                    {AreaDB.Area[String(props.DBValue).slice(0,2)+"000000"]["Prefecture"][String(props.DBValue).slice(0,4)+"0000"]["City"][String(props.DBValue).slice(0,6)+"00"]["Ward"][props.DBValue]}
                  </>
                )
              }
            }
          }
        }
      }
    }
  }


  if (BoshuList === []) {
    return <></>
  } else {
    return (
      <div>
        <h1>Boshu List</h1>
        <div>
        <ul>
            {BoshuList.map((Boshu, i) => {
              let BoshuJson = {}
              BoshuJson = JSON.parse(Boshu)
              return <li key={i} onClick={() => {
                  auth.setBoshuID(BoshuJson.BoshuID)
                  auth.setAite(BoshuJson.UUID)
              }}>
                募集カテゴリ：{ProfileDB.BoshuCategory[BoshuJson.BoshuCategory]}<br />
                場所：<ShowArea DBValue={BoshuJson.BoshuArea}/><br />
                名前：{BoshuJson.NickName}<br />
                性別：{ProfileDB.Gender[BoshuJson.Gender]}<br />
                年齢：{ProfileDB.AgeRange[BoshuJson.AgeRange]}<br />
                募集タイトル：<Link to="../BoshuDetail">
                  {BoshuJson.BoshuTitle}
                </Link><br />
                募集投稿日時：{BoshuJson.PostDateTime}<br/><hr />
              </li>
            })}
        </ul>
        </div>

      </div>
    )
  }
}
