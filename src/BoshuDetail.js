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
    s["\"AiteID\""] = "\"" + auth.aite + "\""
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
      setBoshuDetail(result[0])
      console.log(result[0])
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
    if (BoshuDetail.BoshuArea === 10000000) {
      return (
        <>
          {AreaDB.Area[String(BoshuDetail.BoshuArea).slice(0,2)+"000000"]["AreaName"]}
        </>
      )
    
    // Areaが設定されている場合
    } else {
      // Prefectureが未設定の場合→「Area」のみを表示
      if (String(BoshuDetail.BoshuArea).slice(2,8) === "000000") {
        return (
          <>
            {AreaDB.Area[String(BoshuDetail.BoshuArea).slice(0,2)+"000000"]["AreaName"]}
          </>
        )
      
      // Prefectureが設定されている場合
      } else {
        // Cityが未設定の場合→「Area」「Prefecture」を表示
        if (String(BoshuDetail.BoshuArea).slice(4,8) === "0000") {
          return (
            <>
                {AreaDB.Area[String(BoshuDetail.BoshuArea).slice(0,2)+"000000"]["AreaName"]}　
                {AreaDB.Area[String(BoshuDetail.BoshuArea).slice(0,2)+"000000"]["Prefecture"][String(BoshuDetail.BoshuArea).slice(0,4)+"0000"]["PrefectureName"]}
            </>
          )
        // Cityが設定されている場合→「Area」「Prefecture」「City」を表示
        } else {

          // Wardが存在しないCityが設定されている場合
          console.log(BoshuDetail.BoshuArea)
          if (AreaDB.Area[String(BoshuDetail.BoshuArea).slice(0,2)+"000000"]["Prefecture"][String(BoshuDetail.BoshuArea).slice(0,4)+"0000"]["City"][String(BoshuDetail.BoshuArea).slice(0,6)+"00"]["CityName"] === undefined)  {
            return (
              <>
                  {AreaDB.Area[String(BoshuDetail.BoshuArea).slice(0,2)+"000000"]["AreaName"]}　
                  {AreaDB.Area[String(BoshuDetail.BoshuArea).slice(0,2)+"000000"]["Prefecture"][String(BoshuDetail.BoshuArea).slice(0,4)+"0000"]["PrefectureName"]}
                  {AreaDB.Area[String(BoshuDetail.BoshuArea).slice(0,2)+"000000"]["Prefecture"][String(BoshuDetail.BoshuArea).slice(0,4)+"0000"]["City"][String(BoshuDetail.BoshuArea).slice(0,6)+"00"]}
              </>
            )
          // Wardが存在するCityが設定されている場合
          } else { 
            // Wardが未設定の場合→「Area」「Prefecture」「City」を表示
            if (String(BoshuDetail.BoshuArea).slice(6,8) === "00") {
              return (
                <>
                    {AreaDB.Area[String(BoshuDetail.BoshuArea).slice(0,2)+"000000"]["AreaName"]}　
                    {AreaDB.Area[String(BoshuDetail.BoshuArea).slice(0,2)+"000000"]["Prefecture"][String(BoshuDetail.BoshuArea).slice(0,4)+"0000"]["PrefectureName"]}
                    {AreaDB.Area[String(BoshuDetail.BoshuArea).slice(0,2)+"000000"]["Prefecture"][String(BoshuDetail.BoshuArea).slice(0,4)+"0000"]["City"][String(BoshuDetail.BoshuArea).slice(0,6)+"00"]["CityName"]}
                </>
              )
            // Wardが設定されている場合→「Area」「Prefecture」「Ward」を表示
            } else {
              return (
                <>
                    {AreaDB.Area[String(BoshuDetail.BoshuArea).slice(0,2)+"000000"]["AreaName"]}　
                    {AreaDB.Area[String(BoshuDetail.BoshuArea).slice(0,2)+"000000"]["Prefecture"][String(BoshuDetail.BoshuArea).slice(0,4)+"0000"]["PrefectureName"]}
                    {AreaDB.Area[String(BoshuDetail.BoshuArea).slice(0,2)+"000000"]["Prefecture"][String(BoshuDetail.BoshuArea).slice(0,4)+"0000"]["City"][String(BoshuDetail.BoshuArea).slice(0,6)+"00"]["Ward"][BasicProfile.Area]}
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
        <h1>{BasicProfile.NickName}　{BasicProfile.Age}</h1>
        <div>
        </div>
        <div>
        <ul>
          <li>
            <span className="dan">ニックネーム</span>
            <span className="dan2">{BasicProfile.NickName}</span>
          </li>
          <li>
            <span className="dan">性別</span>
            <span className="dan2">{ProfileDB.Gender[BasicProfile.Gender]}</span>
          </li>
          <li>
            <span className="dan">年齢</span>
            <span className="dan2">{BasicProfile.Age}</span>
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
