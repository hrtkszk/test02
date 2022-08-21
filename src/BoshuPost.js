import * as React from "react";
import {
  Link,
//   // Outlet
  useNavigate
} from "react-router-dom";
import { useState } from 'react';
import { useAuth } from "./useAuth";
import "./ProfileDetail.css";
import ProfileDB from "./Profile.json";
import AreaDB from "./Area.json";
// import TextInputForm from "./TextInputForm";


export function BoshuPost() {
  const [BoshuSettingArea, setBoshuSettingArea] = useState("0");
  const [BoshuArea, setBoshuArea] = useState("0");
  const [BoshuPrefecture, setBoshuPrefecture] = useState("0");
  const [BoshuCity, setBoshuCity] = useState("0");
  const [BoshuWard, setBoshuWard] = useState("0");
  const [BoshuCategory, setBoshuCategory] = useState("0");
  const [BoshuTitle, setBoshuTitle] = useState("");
  const [BoshuMessage, setBoshuMessage] = useState("");
  const [BoshuLimit, setBoshuLimit] = useState("0");

  let auth = useAuth();

  let navigate = useNavigate();


  // 入力値に問題があれば遷移しない。問題なければ遷移する
  const submit = e => {
    e.preventDefault();

    const requestOptions ={
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({
        "UUID":auth.user,
        "BoshuSettingArea":BoshuSettingArea,
        "BoshuArea":BoshuArea,
        "BoshuPrefecture":BoshuPrefecture,
        "BoshuCity":BoshuCity,
        "BoshuWard":BoshuWard,
        "BoshuCategory":BoshuCategory,
        "BoshuTitle":BoshuTitle,
        "BoshuMessage":BoshuMessage,
        "BoshuLimit":BoshuLimit
      })
    }

    fetch("../post_boshu.php",requestOptions)
    .then((response)=> response.json())
    .then(result =>{
      console.log(result)
      if (result.result[0]==="PBS") {
        // 募集投稿成功。リダイレクト
        auth.setMessage("新たな募集を投稿しました")
        navigate("../")
      } else {
        // 募集投稿失敗。リダイレクト
        auth.setMessage("募集を投稿できませんでした")
        navigate("../")
      }
    })
  }

  function PrefectureSelect() {
    if (BoshuArea !== "0") {
      return (
        <>
          <select
            defaultValue={BoshuPrefecture}
            onChange={evt => {
              if (evt.target.value === "0") {
                setBoshuSettingArea(BoshuArea)
                setBoshuPrefecture("0")
                setBoshuCity("0")
                setBoshuWard("0")
              } else {
                setBoshuSettingArea(evt.target.value)
                setBoshuPrefecture(evt.target.value)
                setBoshuCity("0")
                setBoshuWard("0")
              }
            }}>
              {Object.keys(AreaDB.Area[BoshuArea]["Prefecture"]).map(key => <option value={key}>{AreaDB.Area[BoshuArea]["Prefecture"][key]["PrefectureName"]}</option>)}
          </select>
          <CitySelect/>
        </>
      )
    } else {
      return <></>
    }
  }

  function CitySelect() {
    if (BoshuPrefecture !== "0") {
      return (
        <>
          <select
            defaultValue={BoshuCity}
            onChange={evt => {
              if (evt.target.value === "0") {
                setBoshuSettingArea(BoshuPrefecture)
                setBoshuCity("0")
                setBoshuWard("0")
              } else {
                setBoshuSettingArea(evt.target.value)
                setBoshuCity(evt.target.value)
                setBoshuWard("0")
              }
            }}>
              {Object.keys(AreaDB.Area[BoshuArea]["Prefecture"][BoshuPrefecture]["City"]).map(key => 
                <option value={key}>
                  {AreaDB.Area[BoshuArea]["Prefecture"][BoshuPrefecture]["City"][key]["CityName"] === undefined ? (
                    AreaDB.Area[BoshuArea]["Prefecture"][BoshuPrefecture]["City"][key]
                  ):(
                    AreaDB.Area[BoshuArea]["Prefecture"][BoshuPrefecture]["City"][key]["CityName"]
                  )}
                </option>
              )}
          </select>
          <WardSelect />
        </>
      )
    } else {
      return <></>
    }
  }

  function WardSelect() {
    if (BoshuCity !== "0") {
      if (AreaDB.Area[BoshuArea]["Prefecture"][BoshuPrefecture]["City"][BoshuCity]["CityName"] === undefined) {
        return <></>
      } else {
        return (
          <select
            defaultValue={BoshuWard}
            onChange={evt => {
              if (evt.target.value === "0") {
                setBoshuSettingArea(BoshuCity)
                setBoshuWard("0")
              } else {
                setBoshuSettingArea(evt.target.value)
                setBoshuWard(evt.target.value)
              }
            }}>
              {Object.keys(AreaDB.Area[BoshuArea]["Prefecture"][BoshuPrefecture]["City"][BoshuCity]["Ward"]).map(key => <option value={key}>{AreaDB.Area[BoshuArea]["Prefecture"][BoshuPrefecture]["City"][BoshuCity]["Ward"][key]}</option>)}
          </select>
        )
      }
    } else {
      return <></>
    }
  }

  return (
    <div>
    <h1>募集投稿設定</h1>
      <form onSubmit={e => submit(e)}>
        <ul>
          <li>
            <span className="dan">募集カテゴリ</span>
            <span className="dan2">
              <select
                onChange={evt => setBoshuCategory(evt.target.value)}>
                  {Object.keys(ProfileDB.BoshuCategory).map(key => <option value={key}>{ProfileDB.BoshuCategory[key]}</option>)}
              </select>
            </span>
          </li>
          <li>
          <span className="dan">募集エリア</span>
          <span className="dan2">
            <select
              defaultValue={BoshuArea}
              onChange={evt => {
                setBoshuSettingArea(evt.target.value)
                setBoshuArea(evt.target.value)
                setBoshuPrefecture("0")
                setBoshuCity("0")
                setBoshuWard("0")
              }}>
                {Object.keys(AreaDB.Area).map(key => <option value={key}>{AreaDB.Area[key]["AreaName"]}</option>)}
            </select>
            <PrefectureSelect/>
          </span>
          </li>
          <li>
            <span className="dan">募集タイトル</span>
            <span className="dan2">
              <input
                type="text"
                onChange={evt => {
                  // 本当は、サーバー側でも入力制限を設けたい。
                  setBoshuTitle(evt.target.value)
                }}
                placeholder='募集タイトル'
              />    
            </span>
          </li>
          <li>
            <span className="dan">募集内容</span>
            <span className="dan2">
              <input
                type="text"
                onChange={evt => {
                  // 本当は、サーバー側でも入力制限を設けたい。
                  setBoshuMessage(evt.target.value)
                }}
                placeholder='募集内容'
              />    
            </span>
          </li>
          <li>
            <span className="dan">募集上限</span>
            <span className="dan2">
              <input
                type="number"
                onChange={evt => {
                // 本当は、サーバー側でも入力制限を設けたい。
                setBoshuLimit(evt.target.value)
                }}
                placeholder='募集上限'
              />          
            </span>
          </li>
        </ul>
        <button type="submit">投稿</button>
      </form>
      <br />
      <Link to="../">戻る</Link>
    </div>
  );
}
