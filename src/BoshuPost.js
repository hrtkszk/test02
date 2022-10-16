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
import FormSelect1 from "./FormSelect1";
import FormTextInput1 from "./FormTextInput1";


export function BoshuPost() {
  const [BS, setBS] = useState({});
  // const [BoshuArea, setBoshuArea] = useState("10000000");
  // const [BoshuCategory, setBoshuCategory] = useState("0");
  // const [BoshuTitle, setBoshuTitle] = useState("");
  // const [BoshuMessage, setBoshuMessage] = useState("");
  // const [BoshuLimit, setBoshuLimit] = useState("0");

  let auth = useAuth();
  let navigate = useNavigate();

  // 入力値に問題があれば遷移しない。問題なければ遷移する
  const submit = e => {
    e.preventDefault();

    let s = {}
    s["\"UUID\""] = "\"" + auth.user + "\""
    Object.keys(BS).map(key => s["\"" + key + "\""] = "\"" + BS[key] + "\"")


    // s["\"BoshuArea\""] = "\"" + BoshuArea + "\""
    // s["\"BoshuCategory\""] = "\"" + BoshuCategory + "\""
    // s["\"BoshuTitle\""] = "\"" + BoshuTitle + "\""
    // s["\"BoshuMessage\""] = "\"" + BoshuMessage + "\""
    // s["\"BoshuLimit\""] = "\"" + BoshuLimit + "\""
    
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
    let BS_Area = String(BS["BoshuArea"])
    if (BS_Area !== "10000000") {
      return (
        <>
          <select
            defaultValue={BS_Area.slice(0,4)+"0000"}
            onChange={event => {
              setBS({...BS, "BoshuArea" : event.target.value})
            }}>
              {Object.keys(AreaDB.Area[BS_Area.slice(0,2)+"000000"]["Prefecture"]).map(key => 
                <option value={key}>
                  {AreaDB.Area[BS_Area.slice(0,2)+"000000"]["Prefecture"][key]["PrefectureName"]}
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
    let BS_Area = String(BS["BoshuArea"])
    if (BS_Area.slice(2,8) !== "000000") {
      return (
        <>
          <select
            defaultValue={BS_Area.slice(0,6)+"00"}
            onChange={event => {
              setBS({...BS, "BoshuArea" : event.target.value})
            }}>
              {Object.keys(AreaDB.Area[BS_Area.slice(0,2)+"000000"]["Prefecture"][BS_Area.slice(0,4)+"0000"]["City"]).map(key => 
                <option value={key}>
                  {AreaDB.Area[BS_Area.slice(0,2)+"000000"]["Prefecture"][BS_Area.slice(0,4)+"0000"]["City"][key]["CityName"] === undefined ? (
                    AreaDB.Area[BS_Area.slice(0,2)+"000000"]["Prefecture"][BS_Area.slice(0,4)+"0000"]["City"][key]
                  ) : (
                    AreaDB.Area[BS_Area.slice(0,2)+"000000"]["Prefecture"][BS_Area.slice(0,4)+"0000"]["City"][key]["CityName"]
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
    let BS_Area = String(BS["BoshuArea"])
    if (BS_Area.slice(4,8) !== "0000") {
      if (AreaDB.Area[BS_Area.slice(0,2)+"000000"]["Prefecture"][BS_Area.slice(0,4)+"0000"]["City"][BS_Area.slice(0,6)+"00"]["CityName"] === undefined) {
        return <></>
      } else {
        return (
          <select
            defaultValue={BS_Area}
            onChange={event => {
              setBS({...BS, "BoshuArea" : event.target.value})
            }}>
              {Object.keys(AreaDB.Area[BS_Area.slice(0,2)+"000000"]["Prefecture"][BS_Area.slice(0,4)+"0000"]["City"][BS_Area.slice(0,6)+"00"]["Ward"]).map(key => 
                <option value={key}>
                  {AreaDB.Area[BS_Area.slice(0,2)+"000000"]["Prefecture"][BS_Area.slice(0,4)+"0000"]["City"][BS_Area.slice(0,6)+"00"]["Ward"][key]}
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
            <FormSelect1
              title="募集カテゴリ"
              keyText="BoshuCategory"
              keyValue={ProfileDB.BoshuCategory}
              defaultValue={BS}
              setValue={setBS}
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
              defaultValue={String(BS["BoshuArea"]).slice(0,2)+"000000"}
              onChange={event => {
                setBS({...BS, "BoshuArea" : event.target.value})
              }}>
                {Object.keys(AreaDB.Area).map(key => <option value={key}>{AreaDB.Area[key]["AreaName"]}</option>)}
            </select>
            <PrefectureSelect/>
          </span>
          </li>
          <li>
            <FormTextInput1
              title="募集タイトル"
              type="text"
              keyText="BoshuTitile"
              defaultValue={BS}
              setValue={setBS}
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
            <FormTextInput1
              title="募集内容"
              type="text"
              keyText="BoshuTitile"
              defaultValue={BS}
              setValue={setBS}
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
            <FormTextInput1
              title="募集上限"
              type="number"
              keyText="BoshuLimit"
              defaultValue={BS}
              setValue={setBS}
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
