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
  const [Area, setArea] = useState("0");
  const [Prefecture, setPrefecture] = useState("0");
  const [City, setCity] = useState("0");
  const [Ward, setWard] = useState("0");

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
      setBoshuList(result.result)
      console.log(result.result)
    })
    setinitialized(true)
  }


  function ShowArea() {
    // Area未設定の場合→「未設定」と表示
    if (Area === "0") {
      return (
        <>
          {AreaDB.Area[Area]["AreaName"]}
        </>
      )
    
    // Areaが設定されている場合
    } else {
      // Prefectureが未設定の場合→「Area」のみを表示
      if (Prefecture === "0") {
        return (
          <>
            {AreaDB.Area[Area]["AreaName"]}
          </>
        )
      
      // Prefectureが設定されている場合
      } else {
        // Cityが未設定の場合→「Area」「Prefecture」を表示
        if (City === "0") {
          return (
            <>
              {AreaDB.Area[Area]["AreaName"]}　
              {AreaDB.Area[Area]["Prefecture"][Prefecture]["PrefectureName"]}
            </>
          )
        // Cityが設定されている場合→「Area」「Prefecture」「City」を表示
        } else {

          // Wardが存在しないCityが設定されている場合
          if (AreaDB.Area[Area]["Prefecture"][Prefecture]["City"][City]["CityName"] === undefined) {
            return (
              <>
                {AreaDB.Area[Area]["AreaName"]}　
                {AreaDB.Area[Area]["Prefecture"][Prefecture]["PrefectureName"]}
                {AreaDB.Area[Area]["Prefecture"][Prefecture]["City"][City]}
              </>
            )
          // Wardが存在するCityが設定されている場合
          } else { 
            // Wardが未設定の場合→「Area」「Prefecture」「City」を表示
            if (Ward === "0") {
              return (
                <>
                  {AreaDB.Area[Area]["AreaName"]}　
                  {AreaDB.Area[Area]["Prefecture"][Prefecture]["PrefectureName"]}
                  {AreaDB.Area[Area]["Prefecture"][Prefecture]["City"][City]["CityName"]}
                </>
              )
            // Wardが設定されている場合→「Area」「Prefecture」「Ward」を表示
            } else {
              return (
                <>
                  {AreaDB.Area[Area]["AreaName"]}　
                  {AreaDB.Area[Area]["Prefecture"][Prefecture]["PrefectureName"]}
                  {AreaDB.Area[Area]["Prefecture"][Prefecture]["City"][City]["Ward"][Ward]}
                </>
              )
            }
          }
        }
      }
    }
  }

  if (BoshuList === []) {
    return (
      <div>
        <h1>Boshu List</h1>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Boshu List</h1>
        <div>
        <ul>
            {BoshuList.map((Boshu, i) => {
              setArea(Boshu.BoshuArea)
              setPrefecture(Boshu.BoshuPrefecture)
              setCity(Boshu.BoshuCity)
              setWard(Boshu.BoshuWard)
              return <li key={i} onClick={() => {
                  auth.setBoshuID(Boshu.BoshuID)
                  auth.setAite(Boshu.UUID)
              }}>
                {ProfileDB.BoshuCategory[Boshu.BoshuCategory]}<br />
                <ShowArea />
                {/* エリア表示はロジックを考える必要あり。 */}
                {/* {AreaDB.Area[Boshu.BoshuArea]["AreaName"]} */}
                {/* {AreaDB.Area[Boshu.BoshuPrefecture]}
                {AreaDB.Area[Boshu.BoshuCity]} */}
                {/* 詳細エリアの表示にはロジックが必要 */}
                <br />
                {Boshu.nickname}　{ProfileDB.Gender[Boshu.gender]}　{Boshu.age}
                <br />
                <Link to="../BoshuList">
                  {Boshu.BoshuTitle}
                </Link><br />
                {Boshu.PostDateTime}<br/>
              </li>
            })}
        </ul>
        </div>

      </div>
    )
  }
}
