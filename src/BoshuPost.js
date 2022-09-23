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
import FormSelect from "./FormSelect";
import FormTextInput from "./FormTextInput";


export function BoshuPost() {
  const [BoshuArea, setBoshuArea] = useState(10000000);
  const [BoshuCategory, setBoshuCategory] = useState("0");
  const [BoshuTitle, setBoshuTitle] = useState("");
  const [BoshuMessage, setBoshuMessage] = useState("");
  const [BoshuLimit, setBoshuLimit] = useState("0");

  let auth = useAuth();

  let navigate = useNavigate();

  // 入力値に問題があれば遷移しない。問題なければ遷移する
  const submit = e => {
    e.preventDefault();

    let s = {}
    s["\"UUID\""] = "\"" + auth.user + "\""
    s["\"BoshuArea\""] = "\"" + BoshuArea + "\""
    s["\"BoshuCategory\""] = "\"" + BoshuCategory + "\""
    s["\"BoshuTitle\""] = "\"" + BoshuTitle + "\""
    s["\"BoshuMessage\""] = "\"" + BoshuMessage + "\""
    s["\"BoshuLimit\""] = "\"" + BoshuLimit + "\""
    
    const requestOptions ={
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify(s)
    }

    fetch("../post_boshu.php",requestOptions)
    .then((response)=> response.json())
    .then(result =>{
      console.log(result)
      if (result[1]==="PBS") {
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
    if (BoshuArea !== "10000000") {
      return (
        <>
          <select
            defaultValue={BoshuArea.slice(0,4)+"0000"}
            onChange={event => {
              setBoshuArea(event.target.value)
            }}>
              {Object.keys(AreaDB.Area[BoshuArea.slice(0,2)+"000000"]["Prefecture"]).map(key => 
                <option value={key}>
                  {AreaDB.Area[BoshuArea.slice(0,2)+"000000"]["Prefecture"][key]["PrefectureName"]}
                </option>
              )}
          </select>
          <CitySelect/>
        </>
      )
    } else {
      return <></>
    }
  }

  function CitySelect() {
    if (BoshuArea.slice(2,8) !== "000000") {
      return (
        <>
          <select
            defaultValue={BoshuArea.slice(0,6)+"00"}
            onChange={event => {
              setBoshuArea(event.target.value)
            }}>
              {Object.keys(AreaDB.Area[BoshuArea.slice(0,2)+"000000"]["Prefecture"][BoshuArea.slice(0,4)+"0000"]["City"]).map(key => 
                <option value={key}>
                  {AreaDB.Area[BoshuArea.slice(0,2)+"000000"]["Prefecture"][BoshuArea.slice(0,4)+"0000"]["City"][key]["CityName"] === undefined ? (
                    AreaDB.Area[BoshuArea.slice(0,2)+"000000"]["Prefecture"][BoshuArea.slice(0,4)+"0000"]["City"][key]
                  ) : (
                    AreaDB.Area[BoshuArea.slice(0,2)+"000000"]["Prefecture"][BoshuArea.slice(0,4)+"0000"]["City"][key]["CityName"]
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
    if (BoshuArea.slice(4,8) !== "0000") {
      if (AreaDB.Area[BoshuArea.slice(0,2)+"000000"]["Prefecture"][BoshuArea.slice(0,4)+"0000"]["City"][BoshuArea.slice(0,6)+"00"]["CityName"] === undefined) {
        return <></>
      } else {
        return (
          <select
            defaultValue={BoshuArea}
            onChange={event => {
              setBoshuArea(event.target.value)
            }}>
              {Object.keys(AreaDB.Area[BoshuArea.slice(0,2)+"000000"]["Prefecture"][BoshuArea.slice(0,4)+"0000"]["City"][BoshuArea.slice(0,6)+"00"]["Ward"]).map(key => 
                <option value={key}>
                  {AreaDB.Area[BoshuArea.slice(0,2)+"000000"]["Prefecture"][BoshuArea.slice(0,4)+"0000"]["City"][BoshuArea.slice(0,6)+"00"]["Ward"][key]}
                </option>
              )}
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
            <FormSelect
              title="募集カテゴリ"
              keyValue={ProfileDB.BoshuCategory}
              defaultValue={BoshuCategory}
              setValue={setBoshuCategory}
            />
            {/* <span className="dan">募集カテゴリ</span>
            <span className="dan2">
              <select
                onChange={evt => setBoshuCategory(evt.target.value)}>
                  {Object.keys(ProfileDB.BoshuCategory).map(key => <option value={key}>{ProfileDB.BoshuCategory[key]}</option>)}
              </select>
            </span> */}
          </li>
          <li>
          <span className="dan">募集エリア</span>
          <span className="dan2">
            <select
              defaultValue={BoshuArea.slice(0,2)+"000000"}
              onChange={evt => {
                setBoshuArea(evt.target.value)
              }}>
                {Object.keys(AreaDB.Area).map(key => <option value={key}>{AreaDB.Area[key]["AreaName"]}</option>)}
            </select>
            <PrefectureSelect/>
          </span>
          </li>
          <li>
            <FormTextInput 
              title="募集タイトル"
              type="text"
              defaultValue={BoshuTitle}
              setValue={setBoshuTitle}
              required="true"
            />
            {/* <span className="dan">募集タイトル</span>
            <span className="dan2">
              <input
                type="text"
                onChange={evt => {
                  // 本当は、サーバー側でも入力制限を設けたい。
                  setBoshuTitle(evt.target.value)
                }}
                placeholder='募集タイトル'
              />    
            </span> */}
          </li>
          <li>
            <FormTextInput 
              title="募集内容"
              type="text"
              defaultValue={BoshuMessage}
              setValue={setBoshuMessage}
              required="true"
            />
            {/* <span className="dan">募集内容</span>
            <span className="dan2">
              <input
                type="text"
                onChange={evt => {
                  // 本当は、サーバー側でも入力制限を設けたい。
                  setBoshuMessage(evt.target.value)
                }}
                placeholder='募集内容'
              />    
            </span> */}
          </li>
          <li>
            <FormTextInput 
              title="募集上限"
              type="number"
              defaultValue={BoshuLimit}
              setValue={setBoshuLimit}
              required="true"
            />
            {/* <span className="dan">募集上限</span>
            <span className="dan2">
              <input
                type="number"
                onChange={evt => {
                // 本当は、サーバー側でも入力制限を設けたい。
                setBoshuLimit(evt.target.value)
                }}
                placeholder='募集上限'
              />          
            </span> */}
          </li>
        </ul>
        <button type="submit">投稿</button>
      </form>
      <br />
      <Link to="../">戻る</Link>
    </div>
  );
}
