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
      setBoshuList(result.result)
      console.log(result.result)
    })
    setinitialized(true)
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
              return <li key={i} onClick={() => {
                  auth.setBoshuID(Boshu.BoshuID)
                  auth.setAite(Boshu.UUID)
              }}>
                {ProfileDB.BoshuCategory[Boshu.BoshuCategory]}<br />
                {
                // Area未設定の場合→「未設定」と表示
                  Boshu.BoshuArea === "0" ? (
                      <>
                        {AreaDB.Area[Boshu.BoshuArea]["AreaName"]}
                      </>    
                  // Areaが設定されている場合
                  ):(
                    // Prefectureが未設定の場合→「Area」のみを表示
                    Boshu.BoshuPrefecture === "0" ? (
                        <>
                          {AreaDB.Area[Boshu.BoshuArea]["AreaName"]}
                        </>
                    
                    // Prefectureが設定されている場合
                    ) : (
                      // Cityが未設定の場合→「Area」「Prefecture」を表示
                      Boshu.BoshuCity === "0" ? (
                          <>
                            {AreaDB.Area[Boshu.BoshuArea]["AreaName"]}　
                            {AreaDB.Area[Boshu.BoshuArea]["Prefecture"][Boshu.BoshuPrefecture]["PrefectureName"]}
                          </>
                      // Cityが設定されている場合→「Area」「Prefecture」「City」を表示
                      ) : (
                        // Wardが存在しないCityが設定されている場合
                        AreaDB.Area[Boshu.BoshuArea]["Prefecture"][Boshu.BoshuPrefecture]["City"][Boshu.BoshuCity]["CityName"] === undefined ? (
                            <>
                              {AreaDB.Area[Boshu.BoshuArea]["AreaName"]}　
                              {AreaDB.Area[Boshu.BoshuArea]["Prefecture"][Boshu.BoshuPrefecture]["PrefectureName"]}
                              {AreaDB.Area[Boshu.BoshuArea]["Prefecture"][Boshu.BoshuPrefecture]["City"][Boshu.BoshuCity]}
                            </>
                        // Wardが存在するCityが設定されている場合
                        ) : (
                          // Wardが未設定の場合→「Area」「Prefecture」「City」を表示
                          Boshu.BoshuWard === "0" ? (
                              <>
                                {AreaDB.Area[Boshu.BoshuArea]["AreaName"]}　
                                {AreaDB.Area[Boshu.BoshuArea]["Prefecture"][Boshu.BoshuPrefecture]["PrefectureName"]}
                                {AreaDB.Area[Boshu.BoshuArea]["Prefecture"][Boshu.BoshuPrefecture]["City"][Boshu.BoshuCity]["CityName"]}
                              </>
                          // Wardが設定されている場合→「Area」「Prefecture」「Ward」を表示
                          ) : (
                              <>
                                {AreaDB.Area[Boshu.BoshuArea]["AreaName"]}　
                                {AreaDB.Area[Boshu.BoshuArea]["Prefecture"][Boshu.BoshuPrefecture]["PrefectureName"]}
                                {AreaDB.Area[Boshu.BoshuArea]["Prefecture"][Boshu.BoshuPrefecture]["City"][Boshu.BoshuCity]["Ward"][Boshu.BoshuWard]}
                              </>
                          )
                        )
                      )
                    )
                  )
                }
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
