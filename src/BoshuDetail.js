import * as React from "react";
import {
  Link,
  // Outlet
  // useNavigate
} from "react-router-dom";
import { useState } from 'react';
import { useAuth } from "./useAuth";
import ProfileDB from "./Profile.json";
import AreaDB from "./Area.json";

export function BoshuDetail() {
  let auth = useAuth();

  // const inputRef = useRef();
  const [BoshuDetail, setBoshuDetail] = useState([]);
  const [BasicProfile, setBasicProfile] = useState([]);
  const [initialized, setinitialized] = useState(false);


  // ページが読み込まれる時に実行し、Messagesとして登録する。
  if (initialized===false) {
    let s = {}
    s["\"UUID\""] = "\"" + auth.AiteID + "\""
    s["\"BoshuID\""] = "\"" + auth.BoshuID + "\""

    const initialRequestOptions ={
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify(s)
    }
    console.log(initialRequestOptions)
    fetch("../get_boshudetail.php",initialRequestOptions)
    .then((response)=> response.json())
    .then(result =>{
      // console.log(result)
      setBoshuDetail(result)
      console.log(result)
    })

    const initialRequestOptions1 ={
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({"UUID":auth.aite})
    }
    fetch("../get_basicprofile.php",initialRequestOptions1)
    .then((response) => response.json())
    .then(result => {
      setBasicProfile(result)
    })

    setinitialized(true)
  }
  

  function ShowArea() {
    // Area未設定の場合→「未設定」と表示
    if (BoshuDetail.BoshuArea === "0") {
      return (
        <>
          {AreaDB.Area[BoshuDetail.BoshuArea]["AreaName"]}
        </>
      )
    
    // Areaが設定されている場合
    } else {
      // Prefectureが未設定の場合→「Area」のみを表示
      if (BoshuDetail.BoshuPrefecture === "0") {
        return (
          <>
            {AreaDB.Area[BoshuDetail.BoshuArea]["AreaName"]}
          </>
        )
      
      // Prefectureが設定されている場合
      } else {
        // Cityが未設定の場合→「Area」「Prefecture」を表示
        if (BoshuDetail.BoshuCity === "0") {
          return (
            <>
              {AreaDB.Area[BoshuDetail.BoshuArea]["AreaName"]}　
              {AreaDB.Area[BoshuDetail.BoshuArea]["Prefecture"][BoshuDetail.BoshuPrefecture]["PrefectureName"]}
            </>
          )
        // Cityが設定されている場合→「Area」「Prefecture」「City」を表示
        } else {

          // Wardが存在しないCityが設定されている場合
          if (AreaDB.Area[BoshuDetail.BoshuArea]["Prefecture"][BoshuDetail.BoshuPrefecture]["City"][BoshuDetail.BoshuCity]["CityName"] === undefined) {
            return (
              <>
                {AreaDB.Area[BoshuDetail.BoshuArea]["AreaName"]}　
                {AreaDB.Area[BoshuDetail.BoshuArea]["Prefecture"][BoshuDetail.BoshuPrefecture]["PrefectureName"]}
                {AreaDB.Area[BoshuDetail.BoshuArea]["Prefecture"][BoshuDetail.BoshuPrefecture]["City"][BoshuDetail.BoshuCity]}
              </>
            )
          // Wardが存在するCityが設定されている場合
          } else { 
            // Wardが未設定の場合→「Area」「Prefecture」「City」を表示
            if (BoshuDetail.BoshuWard === "0") {
              return (
                <>
                  {AreaDB.Area[BoshuDetail.BoshuArea]["AreaName"]}　
                  {AreaDB.Area[BoshuDetail.BoshuArea]["Prefecture"][BoshuDetail.BoshuPrefecture]["PrefectureName"]}
                  {AreaDB.Area[BoshuDetail.BoshuArea]["Prefecture"][BoshuDetail.BoshuPrefecture]["City"][BoshuDetail.BoshuCity]["CityName"]}
                </>
              )
            // Wardが設定されている場合→「Area」「Prefecture」「Ward」を表示
            } else {
              return (
                <>
                  {AreaDB.Area[BoshuDetail.BoshuArea]["AreaName"]}　
                  {AreaDB.Area[BoshuDetail.BoshuArea]["Prefecture"][BoshuDetail.BoshuPrefecture]["PrefectureName"]}
                  {AreaDB.Area[BoshuDetail.BoshuArea]["Prefecture"][BoshuDetail.BoshuPrefecture]["City"][BoshuDetail.BoshuCity]["Ward"][BoshuDetail.BoshuWard]}
                </>
              )
            }
          }
        }
      }
    }
  }

  // 空の場合、空ページを表示（読み込みが完了していないため）
  if (BasicProfile.length === 0 || BoshuDetail.length === 0 || BoshuDetail === []) {
    return <></>
  } else {
    return (
      <div>
        <h1>{BasicProfile.nickname}　{BasicProfile.age}</h1>
        <div>
        </div>
        <div>
        <ul>
          <li>
            <span className="dan">ニックネーム</span>
            <span className="dan2">{BasicProfile.nickname}</span>
          </li>
          <li>
            <span className="dan">性別</span>
            <span className="dan2">{ProfileDB.Gender[BasicProfile.gender]}</span>
          </li>
          <li>
            <span className="dan">年齢</span>
            <span className="dan2">{BasicProfile.age}</span>
          </li>
          <li>
            <span className="dan">募集カテゴリ</span>
            <span className="dan2">{BoshuDetail.BoshuCategory}</span>
          </li>
          <li>
            <span className="dan">募集エリア</span>
            <span className="dan2">
              <ShowArea/>
            </span>
          </li>
          <li>
            <span className="dan">募集日時</span>
            <span className="dan2">{BoshuDetail.PostDateTime}</span>
          </li>
          <li>
            <span className="dan">募集タイトル</span>
            <span className="dan2">{BoshuDetail.BoshuTitle}</span>
          </li>
          <li>
            <span className="dan">募集内容</span>
            <span className="dan2">{BoshuDetail.BoshuMessage}</span>
          </li>
          <li>
            <span className="dan">カウント/募集上限</span>
            <span className="dan2">{BoshuDetail.EntryCount}/{BoshuDetail.BoshuLimit}</span>
          </li>
        </ul>
        </div>
        <div>
          {/* メッセージを送る際に、募集タイトルが記載されると良い */}
          <div  onClick={() => auth.setAite(BoshuDetail.UUID)}>
            <Link to="../Message">メッセージを送る</Link>
          </div><br />

          <Link to="../">戻る</Link>
        </div>
      </div>
    )
  }
}
