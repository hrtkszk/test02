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
// import FormSelectRange from "./FormSelectRange";
import FormMultiSelect3 from "./FormMultiSelect3";
// import FormSelect from "./FormSelect";

export function ProfileSearchSetting1() {
  const [PSS, setPSS] = useState({});
  const [PSArea, setPSArea] = useState({});
  const [PSBirthArea, setPSBirthArea] = useState({});

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
    fetch("../../get_profilesearchsetting2.php",initialRequestOptions)
    .then((response) => response.json())
    .then(result => {
      console.log(result)
      setPSS(JSON.parse(result[0]))
      setPSArea(JSON.parse(result[1]))
      setPSBirthArea(JSON.parse(result[2]))

    })
    setinitialized(true)
  }

  // // 入力値に問題があれば遷移しない。問題なければ遷移する
  const submit = e => {
    e.preventDefault();

    let s = {}
    s["\"UUID\""] = "\"" + auth.user + "\""
    Object.keys(PSS).map(key => key.indexOf("secondRead") > -1 ? null : s["\"" + key + "\""] = "\"" + PSS[key] + "\"")

    let PSAreaArray = []
    let PSBirthAreaArray = []
    Object.keys(PSArea).map(key => key !== "secondRead" ? PSAreaArray=([...PSAreaArray, key]) : null)
    Object.keys(PSBirthArea).map(key => key !== "secondRead" ? PSBirthAreaArray=([...PSBirthAreaArray, key]) : null)

    const requestOptions2 ={
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({
        "UUID":auth.user,
        PSAreaArray
      })
    }
    console.log(requestOptions2)
    fetch("../../set_profilesearcharea.php",requestOptions2)
    .then((response)=> response.json())
    .then(result =>{
      console.log(result)
    })
    const requestOptions3 ={
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({
        "UUID":auth.user,
        PSBirthAreaArray
      })
    }
    console.log(requestOptions3)
    fetch("../../set_profilesearchbirtharea.php",requestOptions3)
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
    fetch("../../set_profilesearchsetting2.php",requestOptions1)
    .then((response)=> response.json())
    .then(result =>{
      console.log(result)
      if (result[0]==="SPSSS") {
        // プロフィール検索設定設定成功。リダイレクト
        auth.setMessage("プロフィール検索設定を変更しました")
        navigate("../") // 検索結果に飛びたい
      } else {
        // プロフィール検索設定設定失敗。(UUIDが合致しない)再表示。
        auth.setMessage("プロフィール検索設定を変更できませんでした")
        navigate("../") // 検索結果に飛びたい
      }
    })
  }


  // function BirthPrefectureSelect() {
  //   if (BirthArea !== "0") {
  //     return (
  //       <>
  //         <select
  //           defaultValue={BirthPrefecture}
  //           onChange={evt => {
  //             setBirthPrefecture(evt.target.value)
  //           }}>
  //             {Object.keys(AreaDB.Area[BirthArea]["Prefecture"]).map(key => <option value={key}>{AreaDB.Area[BirthArea]["Prefecture"][key]["PrefectureName"]}</option>)}
  //         </select>
  //       </>
  //     )
  //   } else {
  //     return <></>
  //   }
  // }

  // const handleInput = (event) => {
  //   event.preventDefault();
  //   setNickname(event.target.value);
  // };
  // console.log(BasicProfile)

  // function MainSelection() {
  return (
    <div>
    <h1>プロフィール検索設定</h1>
      <form onSubmit={e => submit(e)}>
        <ul>
          <li>
            <FormMultiSelect3
              title="性別"
              keyText="PSGender"
              keyValue={ProfileDB.Gender}
              defaultValue={PSS}
              setValue={setPSS}
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
            <span className="dan">エリア</span>
            <span className="dan2">
            {console.log("read:PSArea: ",PSArea)}
            {Object.keys(AreaDB.Area).map(key1 => 
              <>
                {key1 !== "10000000" ? (
                  <>
                    <details><summary>
                    <label for={key1}>
                      <input
                        value={key1}
                        // defaultValue={PSArea}
                        type="checkbox"
                        id={key1}
                        onChange={evt => {
                          if (PSArea[evt.target.value] === true ) {
                            const copyPSArea = {...PSArea}
                            delete copyPSArea[evt.target.value]
                            setPSArea(copyPSArea)
                            console.log("Delete:key1: ", evt.target.value, ": ", key1)
                          } else {
                            // setPSArea({...PSArea, [evt.target.value]:true})
                            const copyPSArea = {...PSArea}
                            Object.keys(PSArea).map(key => {
                              if (parseInt(evt.target.value) < parseInt(key) &&  parseInt(key) < parseInt(evt.target.value) + 1000000) {
                                delete copyPSArea[key]
                                // setPSArea(copyPSArea)
                              }
                              return <></>
                            })
                            setPSArea({...copyPSArea, [evt.target.value]:true})
                            console.log("Add:key1: ", evt.target.value, ": ", key1)
                          }
                        }}
                        // indeterminate={
                        //   true
                        //   // PSArea["secondRead"] === true ?
                        //   // (
                        //   //   // Object.keys(PSArea).map(key => {
                        //   //     PSArea[key1] === "undefined" ? (
                        //   //       false
                        //   //     ) : (
                        //   //       PSArea[key1]
                        //   //     )
                        //   //     // if (parseInt(key1) < parseInt(key) &&  parseInt(key) < parseInt(key1) + 1000000) {
                        //   //     //   return true
                        //   //     // }
                        //   //     // return <></>
                        //   //     // })
                        //   // ) : (
                        //   //     false,
                        //   //     setPSArea({...PSArea, "secondRead" : true})
                        //   // )
                        // }
                        checked={
                          PSArea["secondRead"] === true ?
                          (
                            PSArea[key1] === "undefined" ? (
                                false
                              ) : (
                                PSArea[key1]
                              )
                          ) : (
                              false,
                              setPSArea({...PSArea, "secondRead" : true})
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
                                  // defaultValue={PSArea}
                                  type="checkbox"
                                  id={key2}
                                  onChange={evt => {
                                    if (PSArea[evt.target.value] === true ) {
                                      const copyPSArea = {...PSArea}
                                      delete copyPSArea[evt.target.value]
                                      setPSArea(copyPSArea)
                                      console.log("Delete:key2: ", evt.target.value, ": ", key2)
                                      
                                    } else {
                                      // setPSArea({...PSArea, [evt.target.value]:true})
                                      const copyPSArea = {...PSArea}
                                      const UpperArea = Math.floor(parseInt(evt.target.value)/1000000)*1000000
                                      delete copyPSArea[UpperArea]
                                      // setPSArea(copyPSArea)
                                      Object.keys(PSArea).map(key => {
                                        if (parseInt(evt.target.value) < parseInt(key) &&  parseInt(key) < parseInt(evt.target.value) + 10000) {
                                          delete copyPSArea[key]
                                          // setPSArea(copyPSArea)
                                        }
                                        return <></>
                                      })
                                      setPSArea({...copyPSArea, [evt.target.value]:true})
                                      console.log("Add:key2: ", evt.target.value, ": ", key2)
                                    }
                                  }}
                                  checked={
                                    PSArea["secondRead"] === true ?
                                    (
                                      PSArea[key2] === "undefined" ? (
                                            false
                                        ) : (
                                          PSArea[key2]
                                        )
                                    ) : (
                                        false,
                                        setPSArea({...PSArea, "secondRead" : true})
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
                                            // defaultValue={PSArea}
                                            type="checkbox"
                                            id={key3}
                                            onChange={evt => {
                                              if (PSArea[evt.target.value] === true ) {
                                                const copyPSArea = {...PSArea}
                                                delete copyPSArea[evt.target.value]
                                                setPSArea(copyPSArea)
                                                console.log("Delete:key3: ", evt.target.value, ": ", key3)
                                              } else {
                                                // setPSArea({...PSArea, [evt.target.value]:true})
                                                const copyPSArea = {...PSArea}
                                                const UpperArea = Math.floor(parseInt(evt.target.value)/1000000)*1000000
                                                delete copyPSArea[UpperArea]
                                                const UpperPrefecture = Math.floor(parseInt(evt.target.value)/10000)*10000
                                                delete copyPSArea[UpperPrefecture]
                                                // setPSArea(copyPSArea)
                                                Object.keys(PSArea).map(key => {
                                                  if (parseInt(evt.target.value) < parseInt(key) &&  parseInt(key) < parseInt(evt.target.value) + 100) {
                                                    delete copyPSArea[key]
                                                    // setPSArea(copyPSArea)
                                                  }
                                                  return <></>
                                                })
                                                setPSArea({...copyPSArea, [evt.target.value]:true})
                                                console.log("Add:key3: ", evt.target.value, ": ", key3)
                                              }
                                            }}
                                            checked={
                                              PSArea["secondRead"] === true ?
                                              (
                                                PSArea[key3] === "undefined" ? (
                                                      false
                                                  ) : (
                                                    PSArea[key3]
                                                  )
                                              ) : (
                                                  false,
                                                  setPSArea({...PSArea, "secondRead" : true})
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
                                              // defaultValue={PSArea}
                                              type="checkbox"
                                              id={key3}
                                              onChange={evt => {
                                                if (PSArea[evt.target.value] === true ) {
                                                  const copyPSArea = {...PSArea}
                                                  delete copyPSArea[evt.target.value]
                                                  setPSArea(copyPSArea)
                                                  console.log("Delete:key3: ", evt.target.value, ": ", key3)
                                                } else {
                                                  // setPSArea({...PSArea, [evt.target.value]:true})
                                                  // console.log("Add:key3: ", evt.target.value, ": ", key3)
                                                  const copyPSArea = {...PSArea}
                                                  const UpperArea = Math.floor(parseInt(evt.target.value)/1000000)*1000000
                                                  delete copyPSArea[UpperArea]
                                                  // console.log("Delete:key3:UpperArea: ", UpperArea)
                                                  // console.log("Delete:key3:copyPSArea[UpperArea]: ", copyPSArea)
                                                  const UpperPrefecture = Math.floor(parseInt(evt.target.value)/10000)*10000
                                                  delete copyPSArea[UpperPrefecture]
                                                  // console.log("Delete:key3:UpperPrefecture: ", UpperPrefecture)
                                                  // console.log("Delete:key3:copyPSArea[UpperPrefecture]: ", copyPSArea)
                                                  // setPSArea(copyPSArea)
                                                  Object.keys(PSArea).map(key => {
                                                    if (parseInt(evt.target.value) < parseInt(key) &&  parseInt(key) < parseInt(evt.target.value) + 100) {
                                                      delete copyPSArea[key]
                                                      // setPSArea(copyPSArea)
                                                    }
                                                    return <></>
                                                  })
                                                  setPSArea({...copyPSArea, [evt.target.value]:true})
                                                  
                                                }
                                              }}
                                              checked={
                                                PSArea["secondRead"] === true ?
                                                (
                                                  PSArea[key3] === "undefined" ? (
                                                        false
                                                    ) : (
                                                      PSArea[key3]
                                                    )
                                                ) : (
                                                    false,
                                                    setPSArea({...PSArea, "secondRead" : true})
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
                                                      // defaultValue={PSArea}
                                                      type="checkbox"
                                                      id={key4}
                                                      onChange={evt => {
                                                        if (PSArea[evt.target.value] === true ) {
                                                          const copyPSArea = {...PSArea}
                                                          delete copyPSArea[evt.target.value]
                                                          setPSArea(copyPSArea)
                                                        } else {
                                                          // setPSArea({...PSArea, [evt.target.value]:true})
                                                          const copyPSArea = {...PSArea}
                                                          const UpperArea = Math.floor(parseInt(evt.target.value)/1000000)*1000000
                                                          delete copyPSArea[UpperArea]
                                                          const UpperPrefecture = Math.floor(parseInt(evt.target.value)/10000)*10000
                                                          delete copyPSArea[UpperPrefecture]
                                                          const UpperCity = Math.floor(parseInt(evt.target.value)/100)*100
                                                          delete copyPSArea[UpperCity]
                                                          setPSArea({...copyPSArea, [evt.target.value]:true})
                                                        }
                                                      }}
                                                      checked={
                                                        PSArea["secondRead"] === true ?
                                                        (
                                                          PSArea[key4] === "undefined" ? (
                                                                false
                                                            ) : (
                                                              PSArea[key4]
                                                            )
                                                        ) : (
                                                            false,
                                                            setPSArea({...PSArea, "secondRead" : true})
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
          {/* <li>
            <FormSelectRange
              title="身長" 
              originalRange={ProfileDB.Height}
              Range={PSHeight}
              setRange={setPSHeight}
            />
          </li> */}
          <li>
            <FormMultiSelect3
              title="スタイル"
              keyText="PSStyle"
              keyValue={ProfileDB.Style}
              defaultValue={PSS}
              setValue={setPSS}
            />
          </li>
          <li>
            <FormMultiSelect3
              title="ルックス"
              keyText="PSLooks"
              keyValue={ProfileDB.Looks}
              defaultValue={PSS}
              setValue={setPSS}
            />
          </li>
          {/* <li>
            <FormSelectRange
              title="カップ" 
              originalRange={ProfileDB.Cup}
              Range={PSCup}
              setRange={setPSCup}
            />
          </li> */}
          {/* <li>
            <FormSelectRange
              title="バスト" 
              originalRange={[]}
              Range1={PSBust1}
              setRange1={setPSBust1}
              Range2={PSBust2}
              setRange2={setPSBust2}
            />
          </li>
          <li>
            <FormSelectRange
              title="ウエスト" 
              originalRange={[]}
              Range1={PSWest1}
              setRange1={setPSWest1}
              Range2={PSWest2}
              setRange2={setPSWest2}
            />
          </li>
          <li>
            <FormSelectRange
              title="ヒップ" 
              originalRange={[]}
              Range1={PSHip1}
              setRange1={setPSHip1}
              Range2={PSHip2}
              setRange2={setPSHip2}
            />
          </li> */}
          <li>
            <FormMultiSelect3
              title="血液型"
              keyText="PSBloodType"
              keyValue={ProfileDB.BloodType}
              defaultValue={PSS}
              setValue={setPSS}
            />
          </li>
          <li>
            <FormMultiSelect3
              title="職業"
              keyText="PSJob"
              keyValue={ProfileDB.Job}
              defaultValue={PSS}
              setValue={setPSS}
            />
          </li>
          <li>
            <FormMultiSelect3
              title="学歴"
              keyText="PSEduBack"
              keyValue={ProfileDB.EduBack}
              defaultValue={PSS}
              setValue={setPSS}
            />
          </li>
          <li>
            <span className="dan">出身地</span>
            <span className="dan2">
            {console.log("read:PSBirthArea: ",PSBirthArea)}
            {Object.keys(AreaDB.Area).map(key1 => 
              <>
                {key1 !== "10000000" ? (
                  <>
                    <details><summary>
                    <label for={key1}>
                      <input
                        value={key1}
                        // defaultValue={PSBirthArea}
                        type="checkbox"
                        id={key1}
                        onChange={evt => {
                          if (PSBirthArea[evt.target.value] === true ) {
                            const copyPSBirthArea = {...PSBirthArea}
                            delete copyPSBirthArea[evt.target.value]
                            setPSBirthArea(copyPSBirthArea)
                            console.log("Delete:key1: ", evt.target.value, ": ", key1)
                          } else {
                            // setPSArea({...PSArea, [evt.target.value]:true})
                            const copyPSBirthArea = {...PSBirthArea}
                            Object.keys(PSBirthArea).map(key => {
                              if (parseInt(evt.target.value) < parseInt(key) &&  parseInt(key) < parseInt(evt.target.value) + 1000000) {
                                delete copyPSBirthArea[key]
                                // setPSArea(copyPSArea)
                              }
                              return <></>
                            })
                            setPSBirthArea({...copyPSBirthArea, [evt.target.value]:true})
                            console.log("Add:key1: ", evt.target.value, ": ", key1)
                          }
                        }}
                        // indeterminate={
                        //   true
                        //   // PSArea["secondRead"] === true ?
                        //   // (
                        //   //   // Object.keys(PSArea).map(key => {
                        //   //     PSArea[key1] === "undefined" ? (
                        //   //       false
                        //   //     ) : (
                        //   //       PSArea[key1]
                        //   //     )
                        //   //     // if (parseInt(key1) < parseInt(key) &&  parseInt(key) < parseInt(key1) + 1000000) {
                        //   //     //   return true
                        //   //     // }
                        //   //     // return <></>
                        //   //     // })
                        //   // ) : (
                        //   //     false,
                        //   //     setPSArea({...PSArea, "secondRead" : true})
                        //   // )
                        // }
                        checked={
                          PSBirthArea["secondRead"] === true ?
                          (
                            PSBirthArea[key1] === "undefined" ? (
                                false
                              ) : (
                                PSBirthArea[key1]
                              )
                          ) : (
                              false,
                              setPSBirthArea({...PSBirthArea, "secondRead" : true})
                          )
                        }
                      />
                      {AreaDB.Area[key1]["AreaName"]}
                    </label></summary>
                      {Object.keys(AreaDB.Area[key1]["Prefecture"]).map(key2 => 
                        <>
                          {key2.slice(2,8) !== "000000" ? (
                            <>
                              <div  className="area3">
                              <label for={key2}>
                                <input
                                  value={key2}
                                  // defaultValue={PSArea}
                                  type="checkbox"
                                  id={key2}
                                  onChange={evt => {
                                    if (PSBirthArea[evt.target.value] === true ) {
                                      const copyPSBirthArea = {...PSBirthArea}
                                      delete copyPSBirthArea[evt.target.value]
                                      setPSBirthArea(copyPSBirthArea)
                                      console.log("Delete:key2: ", evt.target.value, ": ", key2)
                                      
                                    } else {
                                      // setPSArea({...PSArea, [evt.target.value]:true})
                                      const copyPSBirthArea = {...PSBirthArea}
                                      const UpperArea = Math.floor(parseInt(evt.target.value)/1000000)*1000000
                                      delete copyPSBirthArea[UpperArea]
                                      // setPSArea(copyPSArea)
                                      Object.keys(PSBirthArea).map(key => {
                                        if (parseInt(evt.target.value) < parseInt(key) &&  parseInt(key) < parseInt(evt.target.value) + 10000) {
                                          delete copyPSBirthArea[key]
                                          // setPSArea(copyPSArea)
                                        }
                                        return <></>
                                      })
                                      setPSBirthArea({...copyPSBirthArea, [evt.target.value]:true})
                                      console.log("Add:key2: ", evt.target.value, ": ", key2)
                                    }
                                  }}
                                  checked={
                                    PSBirthArea["secondRead"] === true ?
                                    (
                                      PSBirthArea[key2] === "undefined" ? (
                                            false
                                        ) : (
                                          PSBirthArea[key2]
                                        )
                                    ) : (
                                        false,
                                        setPSBirthArea({...PSBirthArea, "secondRead" : true})
                                    )
                                  }
                                />
                                {AreaDB.Area[key1]["Prefecture"][key2]["PrefectureName"]}
                              </label>
                              </div>
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
          <li>
            <FormMultiSelect3
              title="星座"
              keyText="PSZodiac"
              keyValue={ProfileDB.Zodiac}
              defaultValue={PSS}
              setValue={setPSS}
            />
          </li>
          <li>
            <FormMultiSelect3
              title="交際状況"
              keyText="PSMarriageStatus"
              keyValue={ProfileDB.MarriageStatus}
              defaultValue={PSS}
              setValue={setPSS}
            />
          </li>
          <li>
            <FormMultiSelect3
              title="子供"
              keyText="PSKids"
              keyValue={ProfileDB.Kids}
              defaultValue={PSS}
              setValue={setPSS}
            />
          </li>
          <li>
            <FormMultiSelect3
              title="タバコ"
              keyText="PSTabacco"
              keyValue={ProfileDB.Tabacco}
              defaultValue={PSS}
              setValue={setPSS}
            />
          </li>
          <li>
            <FormMultiSelect3
              title="お酒"
              keyText="PSAlchole"
              keyValue={ProfileDB.Alchole}
              defaultValue={PSS}
              setValue={setPSS}
            />
          </li>
          <li>
            <FormMultiSelect3
              title="車"
              keyText="PSCar"
              keyValue={ProfileDB.Car}
              defaultValue={PSS}
              setValue={setPSS}
            />
          </li>

          {/* <li> */}
            {/* 別のリストにして、複数選択・検索できるようにする */}
            {/* <span className="dan">興味あること</span>
            <span className="dan2">
              <select
                defaultValue={PSInterest}
                onChange={evt => setPSInterest(evt.target.value)}>
                  {Object.keys(ProfileDB.Interest).map(key => <option value={key}>{ProfileDB.Interest[key]}</option>)}
              </select>
            </span>
          </li> */}
          <li>
            <FormMultiSelect3
              title="プロフィール写真"
              keyText="PSProfilePicture"
              keyValue={ProfileDB.Car} // プロフィール写真あり／なしだけの判断
              defaultValue={PSS}
              setValue={setPSS}
            />
          </li>
          <li>
            <FormMultiSelect3
              title="メッセージ"
              keyText="PSProfileMessage"
              keyValue={ProfileDB.Car} // メッセージあり／なしだけの判断
              defaultValue={PSS}
              setValue={setPSS}
            />
          </li>
          {/* <li> */}
            {/* 別のリストにして、複数選択・検索できるようにする。 */}
            {/* <span className="dan">希望する性格</span>
            <span className="dan2">
              <select
                defaultValue={PSPersonality}
                onChange={evt => setPSPersonality(evt.target.value)}>
                  {Object.keys(ProfileDB.Personality).map(key => <option value={key}>{ProfileDB.Personality[key]}</option>)}
              </select>
            </span>
          </li>
          <li>
            自己評価<br />
          </li>
          <li> */}
            {/* 星で表現したい。 */}
            {/* <FormSelectRange
              title="可愛さ" 
              originalRange={ProfileDB.Self}
              Range={PSCute}
              setRange={setPSCute}
            />
          </li>
          <li> */}
            {/* 星で表現したい。 */}
            {/* <FormSelectRange
              title="セクシーさ" 
              originalRange={ProfileDB.Self}
              Range={PSSexy}
              setRange={setPSSexy}
            />
          </li>
          <li> */}
            {/* 星で表現したい。 */}
            {/* <FormSelectRange
              title="優しさ" 
              originalRange={ProfileDB.Self}
              Range={PSKindness}
              setRange={setPSKindness}
            />
          </li>
          <li> */}
            {/* 星で表現したい。 */}
            {/* <FormSelectRange
              title="賢さ" 
              originalRange={ProfileDB.Self}
              Range={PSSmartness}
              setRange={setPSSmartness}
            />
          </li>
          <li> */}
            {/* 星で表現したい。 */}
            {/* <FormSelectRange
              title="清楚さ" 
              originalRange={ProfileDB.Self}
              Range={PSNeatness}
              setRange={setPSNeatness}
            />
          </li>
          <li> */}
            {/* 星で表現したい。 */}
            {/* <FormSelectRange
              title="ファッション" 
              originalRange={ProfileDB.Self}
              Range={PSFashionable}
              setRange={setPSFashionable}
            />
          </li>
          <li> */}
            {/* 星で表現したい。 */}
            {/* <FormSelectRange
              title="明るさ" 
              originalRange={ProfileDB.Self}
              Range={PSBrightness}
              setRange={setPSBrightness}
            />
          </li>
          <li> */}
            {/* 星で表現したい。 */}
            {/* <FormSelectRange
              title="エレガンス" 
              originalRange={ProfileDB.Self}
              Range={PSElegance}
              setRange={setPSElegance}
            />
          </li> */}
        </ul>
        <button type="submit">保存する</button>
      </form>
      <br />
      <Link to="../">戻る</Link>
    </div>
  );
// }

// return (
//   <>
//     <MainSelection/>
//   </>
// )
}
