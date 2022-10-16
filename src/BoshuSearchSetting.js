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
import FormSelectRange1 from "./FormSelectRange1";
import FormMultiSelect3 from "./FormMultiSelect3";
// import FormSelect from "./FormSelect";

export function BoshuSearchSetting() {
  // const [TempArea, setTempArea] = useState("0");
  // const [TempPrefecture, setTempPrefecture] = useState("0");
  //  各ステータスのdefaultにすでに設定された値を入れたい。
  // 基本状況
    // ProfileSearchDBの1つのUUID内で、配列かjsonで作成する
  const [BSS, setBSS] = useState({});
  // const [BSGender, setBSGender] = useState({});
  // const [BSCategory, setBSCategory] = useState({});
  // const [BSAge, setBSAge] = useState({});

  // 地域状況
  const [BSArea, setBSArea] = useState({});

  let auth = useAuth();

  let navigate = useNavigate();

  const [initialized, setinitialized] = useState(false);

  const initialRequestOptions ={
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({"UUID":auth.user})
  }
  
  // ページが読み込まれる時に実行し、ProfileSearchSettingとして登録する。
  if (initialized===false) {
    // fetch("../../get_boshusearcharea.php",initialRequestOptions)
    // .then((response) => response.json())
    // .then(result => {
    //   console.log(JSON.parse(result[0]))
    //   setBSArea(JSON.parse(result[0]))
    // })

    fetch("../../get_boshusearchsetting.php",initialRequestOptions)
    .then((response) => response.json())
    .then(result => {
      console.log(JSON.parse(result[0]))
      setBSS(JSON.parse(result[0]))
      setBSArea(JSON.parse(result[1]))
      // setBSGender((JSON.parse(result[0])).BSGender)
      // setBSCategory((JSON.parse(result[0])).BSCategory)
    })
    setinitialized(true)
  }

  // // 入力値に問題があれば遷移しない。問題なければ遷移する
  const submit = e => {
    e.preventDefault();

    let s = {}
    s["\"UUID\""] = "\"" + auth.user + "\""
    Object.keys(BSS).map(key => key.indexOf("secondRead") > -1 ? null : s["\"" + key + "\""] = "\"" + BSS[key] + "\"")


    // let BSGenderString = ""
    // Object.keys(BSGender).map(key => key !== "secondRead" ? BSGenderString += key + "_" : null)
    // s["\"BSGender\""] = "\"" + BSGenderString.slice(0, -1) + "\""
    // let BSCategoryString = ""
    // Object.keys(BSCategory).map(key => key !== "secondRead" ? BSCategoryString += key + "_" : null)
    // s["\"BSCategory\""] = "\"" + BSCategoryString.slice(0, -1) + "\""

    let BSAreaArray = []
    Object.keys(BSArea).map(key => key !== "secondRead" ? BSAreaArray=([...BSAreaArray, key]) : null)
    
    const requestOptions2 ={
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({
        "UUID":auth.user,
        BSAreaArray
      })
    }
    console.log(requestOptions2)
    fetch("../../set_boshusearcharea.php",requestOptions2)
    .then((response)=> response.json())
    .then(result =>{
      console.log(result)
    })

    const requestOptions1 ={
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify(s)
    }
    console.log(requestOptions1)
    fetch("../../set_boshusearchsetting.php",requestOptions1)
    .then((response)=> response.json())
    .then(result =>{
      console.log(result)
      // if (result.result[0]==="SPSSS") {
      //   // プロフィール検索設定設定成功。リダイレクト
        auth.setMessage("プロフィール検索設定を変更しました")
        navigate("../BoshuList") // 検索結果に飛びたい
      // } else {
      //   // プロフィール検索設定設定失敗。(UUIDが合致しない)再表示。
      //   auth.setMessage("プロフィール検索設定を変更できませんでした")
      //   navigate("../BoshuList") // 検索結果に飛びたい
      // }
    })
  }

  if (Object.keys(BSS).length === 0) {
    return <></>
  } else {
    return (
      <div>
      <h1>募集検索設定</h1>
        <form onSubmit={e => submit(e)}>
          <ul>
            <li>
              <FormMultiSelect3
                title="性別"
                keyText="BSGender"
                keyValue={ProfileDB.Gender}
                defaultValue={BSS}
                setValue={setBSS}
              />
            </li>
            <li>
              <FormSelectRange1
                title="年齢"
                keyText="BSAgeRange"
                originalRange={ProfileDB.AgeRange}
                defaultValue={BSS}
                setValue={setBSS}
              />
            </li>
            <li>
              <FormMultiSelect3
                title="募集カテゴリ"
                keyText="BSCategory"
                keyValue={ProfileDB.BoshuCategory}
                defaultValue={BSS}
                setValue={setBSS}
              />
            </li>
            {/* <li>
              <FormSelectRange
                title="年齢" 
                originalRange={ProfileDB.PreferedAge}
                Range={PSAge}
                setRange={setPSAge}
              />
            </li> */}
            <li>
              <span className="dan">募集エリア</span>
              <span className="dan2">
              {console.log("read:BSArea: ",BSArea)}
              {Object.keys(AreaDB.Area).map(key1 => 
                <>
                  {key1 !== "10000000" ? (
                    <>
                      <details><summary>
                      <label for={key1}>
                        <input
                          value={key1}
                          // defaultValue={BSArea}
                          type="checkbox"
                          id={key1}
                          onChange={evt => {
                            if (BSArea[evt.target.value] === true ) {
                              const copyBSArea = {...BSArea}
                              delete copyBSArea[evt.target.value]
                              setBSArea(copyBSArea)
                              console.log("Delete:key1: ", evt.target.value, ": ", key1)
                            } else {
                              // setBSArea({...BSArea, [evt.target.value]:true})
                              const copyBSArea = {...BSArea}
                              Object.keys(BSArea).map(key => {
                                if (parseInt(evt.target.value) < parseInt(key) &&  parseInt(key) < parseInt(evt.target.value) + 1000000) {
                                  delete copyBSArea[key]
                                  // setBSArea(copyBSArea)
                                }
                                return <></>
                              })
                              setBSArea({...copyBSArea, [evt.target.value]:true})
                              console.log("Add:key1: ", evt.target.value, ": ", key1)
                            }
                          }}
                          // indeterminate={
                          //   true
                          //   // BSArea["secondRead"] === true ?
                          //   // (
                          //   //   // Object.keys(BSArea).map(key => {
                          //   //     BSArea[key1] === "undefined" ? (
                          //   //       false
                          //   //     ) : (
                          //   //       BSArea[key1]
                          //   //     )
                          //   //     // if (parseInt(key1) < parseInt(key) &&  parseInt(key) < parseInt(key1) + 1000000) {
                          //   //     //   return true
                          //   //     // }
                          //   //     // return <></>
                          //   //     // })
                          //   // ) : (
                          //   //     false,
                          //   //     setBSArea({...BSArea, "secondRead" : true})
                          //   // )
                          // }
                          checked={
                            BSArea["secondRead"] === true ?
                            (
                              BSArea[key1] === "undefined" ? (
                                  false
                                ) : (
                                  BSArea[key1]
                                )
                            ) : (
                                false,
                                setBSArea({...BSArea, "secondRead" : true})
                            )
                          }
                        />
                        {AreaDB.Area[key1]["AreaName"]}
                      </label></summary>
                        {Object.keys(AreaDB.Area[key1]["Prefecture"]).map(key2 => 
                          <>
                            {key2.slice(2,8) !== "000000" ? (
                              <>
                                <details  className="area1"><summary>
                                <label for={key2}>
                                  <input
                                    value={key2}
                                    // defaultValue={BSArea}
                                    type="checkbox"
                                    id={key2}
                                    onChange={evt => {
                                      if (BSArea[evt.target.value] === true ) {
                                        const copyBSArea = {...BSArea}
                                        delete copyBSArea[evt.target.value]
                                        setBSArea(copyBSArea)
                                        console.log("Delete:key2: ", evt.target.value, ": ", key2)
                                        
                                      } else {
                                        // setBSArea({...BSArea, [evt.target.value]:true})
                                        const copyBSArea = {...BSArea}
                                        const UpperArea = Math.floor(parseInt(evt.target.value)/1000000)*1000000
                                        delete copyBSArea[UpperArea]
                                        // setBSArea(copyBSArea)
                                        Object.keys(BSArea).map(key => {
                                          if (parseInt(evt.target.value) < parseInt(key) &&  parseInt(key) < parseInt(evt.target.value) + 10000) {
                                            delete copyBSArea[key]
                                            // setBSArea(copyBSArea)
                                          }
                                          return <></>
                                        })
                                        setBSArea({...copyBSArea, [evt.target.value]:true})
                                        console.log("Add:key2: ", evt.target.value, ": ", key2)
                                      }
                                    }}
                                    checked={
                                      BSArea["secondRead"] === true ?
                                      (
                                        BSArea[key2] === "undefined" ? (
                                              false
                                          ) : (
                                            BSArea[key2]
                                          )
                                      ) : (
                                          false,
                                          setBSArea({...BSArea, "secondRead" : true})
                                      )
                                    }
                                  />
                                  {AreaDB.Area[key1]["Prefecture"][key2]["PrefectureName"]}
                                </label></summary>
                                {Object.keys(AreaDB.Area[key1]["Prefecture"][key2]["City"]).map(key3 => 
                                  <>
                                    {key3.slice(4,8) !== "0000" ? (
                                      AreaDB.Area[key1]["Prefecture"][key2]["City"][key3]["CityName"] === undefined ? (
                                        <>
                                          <label for={key3} className="area2">
                                            <input
                                              value={key3}
                                              // defaultValue={BSArea}
                                              type="checkbox"
                                              id={key3}
                                              onChange={evt => {
                                                if (BSArea[evt.target.value] === true ) {
                                                  const copyBSArea = {...BSArea}
                                                  delete copyBSArea[evt.target.value]
                                                  setBSArea(copyBSArea)
                                                  console.log("Delete:key3: ", evt.target.value, ": ", key3)
                                                } else {
                                                  // setBSArea({...BSArea, [evt.target.value]:true})
                                                  const copyBSArea = {...BSArea}
                                                  const UpperArea = Math.floor(parseInt(evt.target.value)/1000000)*1000000
                                                  delete copyBSArea[UpperArea]
                                                  const UpperPrefecture = Math.floor(parseInt(evt.target.value)/10000)*10000
                                                  delete copyBSArea[UpperPrefecture]
                                                  // setBSArea(copyBSArea)
                                                  Object.keys(BSArea).map(key => {
                                                    if (parseInt(evt.target.value) < parseInt(key) &&  parseInt(key) < parseInt(evt.target.value) + 100) {
                                                      delete copyBSArea[key]
                                                      // setBSArea(copyBSArea)
                                                    }
                                                    return <></>
                                                  })
                                                  setBSArea({...copyBSArea, [evt.target.value]:true})
                                                  console.log("Add:key3: ", evt.target.value, ": ", key3)
                                                }
                                              }}
                                              checked={
                                                BSArea["secondRead"] === true ?
                                                (
                                                  BSArea[key3] === "undefined" ? (
                                                        false
                                                    ) : (
                                                      BSArea[key3]
                                                    )
                                                ) : (
                                                    false,
                                                    setBSArea({...BSArea, "secondRead" : true})
                                                )
                                              }
                                            />
                                            {AreaDB.Area[key1]["Prefecture"][key2]["City"][key3]}
                                          </label><br />
                                        </>
                                      ):(
                                        <>
                                          <details className="area1"><summary>
                                            <label for={key3}>
                                              <input
                                                value={key3}
                                                // defaultValue={BSArea}
                                                type="checkbox"
                                                id={key3}
                                                onChange={evt => {
                                                  if (BSArea[evt.target.value] === true ) {
                                                    const copyBSArea = {...BSArea}
                                                    delete copyBSArea[evt.target.value]
                                                    setBSArea(copyBSArea)
                                                    console.log("Delete:key3: ", evt.target.value, ": ", key3)
                                                  } else {
                                                    // setBSArea({...BSArea, [evt.target.value]:true})
                                                    // console.log("Add:key3: ", evt.target.value, ": ", key3)
                                                    const copyBSArea = {...BSArea}
                                                    const UpperArea = Math.floor(parseInt(evt.target.value)/1000000)*1000000
                                                    delete copyBSArea[UpperArea]
                                                    // console.log("Delete:key3:UpperArea: ", UpperArea)
                                                    // console.log("Delete:key3:copyBSArea[UpperArea]: ", copyBSArea)
                                                    const UpperPrefecture = Math.floor(parseInt(evt.target.value)/10000)*10000
                                                    delete copyBSArea[UpperPrefecture]
                                                    // console.log("Delete:key3:UpperPrefecture: ", UpperPrefecture)
                                                    // console.log("Delete:key3:copyBSArea[UpperPrefecture]: ", copyBSArea)
                                                    // setBSArea(copyBSArea)
                                                    Object.keys(BSArea).map(key => {
                                                      if (parseInt(evt.target.value) < parseInt(key) &&  parseInt(key) < parseInt(evt.target.value) + 100) {
                                                        delete copyBSArea[key]
                                                        // setBSArea(copyBSArea)
                                                      }
                                                      return <></>
                                                    })
                                                    setBSArea({...copyBSArea, [evt.target.value]:true})
                                                    
                                                  }
                                                }}
                                                checked={
                                                  BSArea["secondRead"] === true ?
                                                  (
                                                    BSArea[key3] === "undefined" ? (
                                                          false
                                                      ) : (
                                                        BSArea[key3]
                                                      )
                                                  ) : (
                                                      false,
                                                      setBSArea({...BSArea, "secondRead" : true})
                                                  )
                                                }
                                              />
                                              {AreaDB.Area[key1]["Prefecture"][key2]["City"][key3]["CityName"]}
                                            </label></summary>
                                            {Object.keys(AreaDB.Area[key1]["Prefecture"][key2]["City"][key3]["Ward"]).map(key4 => 
                                              <>
                                                {key4.slice(6,8) !== "00" ? (
                                                  <>
                                                    <label for={key4} className="area2">
                                                      <input
                                                        value={key4}
                                                        // defaultValue={BSArea}
                                                        type="checkbox"
                                                        id={key4}
                                                        onChange={evt => {
                                                          if (BSArea[evt.target.value] === true ) {
                                                            const copyBSArea = {...BSArea}
                                                            delete copyBSArea[evt.target.value]
                                                            setBSArea(copyBSArea)
                                                          } else {
                                                            // setBSArea({...BSArea, [evt.target.value]:true})
                                                            const copyBSArea = {...BSArea}
                                                            const UpperArea = Math.floor(parseInt(evt.target.value)/1000000)*1000000
                                                            delete copyBSArea[UpperArea]
                                                            const UpperPrefecture = Math.floor(parseInt(evt.target.value)/10000)*10000
                                                            delete copyBSArea[UpperPrefecture]
                                                            const UpperCity = Math.floor(parseInt(evt.target.value)/100)*100
                                                            delete copyBSArea[UpperCity]
                                                            setBSArea({...copyBSArea, [evt.target.value]:true})
                                                          }
                                                        }}
                                                        checked={
                                                          BSArea["secondRead"] === true ?
                                                          (
                                                            BSArea[key4] === "undefined" ? (
                                                                  false
                                                              ) : (
                                                                BSArea[key4]
                                                              )
                                                          ) : (
                                                              false,
                                                              setBSArea({...BSArea, "secondRead" : true})
                                                          )
                                                        }
                                                      />
                                                      {AreaDB.Area[key1]["Prefecture"][key2]["City"][key3]["Ward"][key4]}
                                                    </label><br />
                                                  </>
                                                ) : (<></>)}
                                              </>
                                            )}
                                          </details>
                                        </>
                                      )
                                    ): (<></>)}
                                  </>
                                )}
                                </details>
                              </>
                            ): (<></>)}
                          </>
                        )}
                      </details>
                    </>
                  ): (<></>)}
                </>
              )}
              </span>
            </li>
          </ul>
          <button type="submit">保存する</button>
        </form>
        <br />
        <Link to="../">戻る</Link>
      </div>
    );
  }
}
