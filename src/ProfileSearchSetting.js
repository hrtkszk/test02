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
import SelectRangeForm from "./SelectRangeForm";


export function ProfileSearchSetting() {
  //  各ステータスのdefaultにすでに設定された値を入れたい。
  // 基本状況
    // ProfileSearchDBの1つのUUID内で、配列かjsonで作成する
  const [PSGender, setPSGender] = useState([]);
  const [PSAge1, setPSAge1] = useState("0");
  const [PSAge2, setPSAge2] = useState("0");
  // 地域状況
    // ProfileSearchDBの1つのUUID内で、配列かjsonで作成する
    // 配列かjsonの1行にArea, Prefecture, Cityを記載する。
  const [PSArea, setPSArea] = useState([]);
  // 身体的情報
  const [PSHeight1, setPSHeight1] = useState("0");
  const [PSHeight2, setPSHeight2] = useState("0");
    // ProfileSearchDBの1つのUUID内で、配列かjsonで作成する
  const [PSStyle, setPSStyle] = useState([]);
    // ProfileSearchDBの1つのUUID内で、配列かjsonで作成する
  const [PSLooks, setPSLooks] = useState([]);
  const [PSCup1, setPSCup1] = useState("0");
  const [PSCup2, setPSCup2] = useState("0");
    // ProfileSearchDBの1つのUUID内で、配列かjsonで作成する
  const [PSBloodType, setPSBloodType] = useState([]);
  // 経験・背景情報
    // ProfileSearchDBの1つのUUID内で、配列かjsonで作成する
  const [PSJob, setPSJob] = useState([]);
    // ProfileSearchDBの1つのUUID内で、配列かjsonで作成する
  const [PSEduBack, setPSEduBack] = useState([]);
    // ProfileSearchDBの1つのUUID内で、配列かjsonで作成する
    // 配列かjsonの1行にArea, Prefectureを記載する。
  const [PSBirthArea, setPSBirthArea] = useState([]);
    // ProfileSearchDBの1つのUUID内で、配列かjsonで作成する
  const [PSZodiac, setPSZodiac] = useState([]);
  // 交際情報
    // ProfileSearchDBの1つのUUID内で、配列かjsonで作成する
  const [PSMarriageStatus, setPSMarriageStatus] = useState([]);
    // ProfileSearchDBの1つのUUID内で、配列かjsonで作成する
  const [PSKids, setPSKids] = useState([]);
  // 趣味・嗜好
    // ProfileSearchDBの1つのUUID内で、配列かjsonで作成する
  const [PSTabacco, setPSTabacco] = useState([]);
    // ProfileSearchDBの1つのUUID内で、配列かjsonで作成する
  const [PSAlchole, setPSAlchole] = useState([]);
    // ProfileSearchDBの1つのUUID内で、配列かjsonで作成する
  const [PSCar, setPSCar] = useState([]);
    // 複数設定　対　複数選択となる。
    // ProfileSearch用として別のTable、設定方法が必要。UUIDも当然記載。
  const [PSInterest, setPSInterest] = useState([]);
  // その他
  // const [ProfilePicture, setProfilePicture] = useState("");
    // メッセージのあり・なしだけの判定
  const [PSProfileMessage, setPSProfileMessage] = useState("0");
    // 複数設定　対　複数選択となる。
    // ProfileSearch用として別のTable、設定方法が必要。UUIDも当然記載。
  const [PSPersonality, setPSPersonality] = useState([]);
  // 自己評価
  const [PSCute1, setPSCute1] = useState("0");
  const [PSCute2, setPSCute2] = useState("0");
  const [PSSexy1, setPSSexy1] = useState("0");
  const [PSSexy2, setPSSexy2] = useState("0");
  const [PSKindness1, setPSKindness1] = useState("0");
  const [PSKindness2, setPSKindness2] = useState("0");
  const [PSSmartness1, setPSSmartness1] = useState("0");
  const [PSSmartness2, setPSSmartness2] = useState("0");
  const [PSNeatness1, setPSNeatness1] = useState("0");
  const [PSNeatness2, setPSNeatness2] = useState("0");
  const [PSFashionable1, setPSFashionable1] = useState("0");
  const [PSFashionable2, setPSFashionable2] = useState("0");
  const [PSBrightness1, setPSBrightness1] = useState("0");
  const [PSBrightness2, setPSBrightness2] = useState("0");
  const [PSElegance1, setPSElegance1] = useState("0");
  const [PSElegance2, setPSElegance2] = useState("0");

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
    fetch("../../get_profilesearchsetting.php",initialRequestOptions)
    .then((response) => response.json())
    .then(result => {
      if (result.result !== "PND") {
        // console.log(result.result[0])
        setPSGender(result.result[0].PSGender)
        setPSAge1(result.result[0].PSAge1)
        setPSAge2(result.result[0].PSAge2)
        setPSArea(result.result[0].PSArea)
        setPSHeight1(result.result[0].PSHeight1)
        setPSHeight2(result.result[0].PSHeight2)
        setPSStyle(result.result[0].PSStyle)
        setPSLooks(result.result[0].PSLooks)
        setPSCup1(result.result[0].PSCup1)
        setPSCup2(result.result[0].PSCup2)
        setPSBloodType(result.result[0].PSBloodType)
        setPSJob(result.result[0].PSJob)
        setPSEduBack(result.result[0].PSEduBack)
        setPSBirthArea(result.result[0].PSBirthArea)
        setPSZodiac(result.result[0].PSZodiac)
        setPSMarriageStatus(result.result[0].PSMarriageStatus)
        setPSKids(result.result[0].PSKids)
        setPSTabacco(result.result[0].PSTabacco)
        setPSAlchole(result.result[0].Zodiac)
        setPSCar(result.result[0].PSCar)
        setPSProfileMessage(result.result[0].PSProfileMessage)
        setPSCute1(result.result[0].PSCute1)
        setPSCute2(result.result[0].PSCute2)
        setPSSexy1(result.result[0].PSSexy1)
        setPSSexy2(result.result[0].PSSexy2)
        setPSKindness1(result.result[0].PSKindness1)
        setPSKindness2(result.result[0].PSKindness2)
        setPSSmartness1(result.result[0].PSSmartness1)
        setPSSmartness2(result.result[0].PSSmartness2)
        setPSNeatness1(result.result[0].PSNeatness1)
        setPSNeatness2(result.result[0].PSNeatness2)
        setPSFashionable1(result.result[0].PSFashionable1)
        setPSFashionable2(result.result[0].PSFashionable2)
        setPSBrightness1(result.result[0].PSBrightness1)
        setPSBrightness2(result.result[0].PSBrightness2)
        setPSElegance1(result.result[0].PSElegance1)
        setPSElegance2(result.result[0].PSElegance2)

        //下の2つはそれぞれ別Tableなのでresult[0]とするかは要検討
        setPSInterest(result.result[0].PSInterest)
        setPSPersonality(result.result[0].PSPersonality)
      }
    })
    setinitialized(true)
  }

  // 入力値に問題があれば遷移しない。問題なければ遷移する
  const submit = e => {
    e.preventDefault();

    const requestOptions1 ={
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({
        "UUID":auth.user,

        "PSGender":PSGender,
        "PSAge1":PSAge1,
        "PSAge2":PSAge2,

        "PSArea":PSArea,
        "PSHeight1":PSHeight1,
        "PSHeight2":PSHeight2,
        "PSStyle":PSStyle,
        "PSLooks":PSLooks,
        "PSCup1":PSCup1,
        "PSCup2":PSCup2,
        "PSBloodType":PSBloodType,
        "PSJob":PSJob,
        "PSEduBack":PSEduBack,
        "PSBirthArea":PSBirthArea,

        "PSZodiac":PSZodiac,
        "PSMarriageStatus":PSMarriageStatus,
        "PSKids":PSKids,
        "PSTabacco":PSTabacco,
        "PSAlchole":PSAlchole,

        "PSCar":PSCar,

        "PSProfileMessage":PSProfileMessage,

        "PSCute1":PSCute1,
        "PSCute2":PSCute2,
        "PSSexy1":PSSexy1,
        "PSSexy2":PSSexy2,
        "PSKindness1":PSKindness1,
        "PSKindness2":PSKindness2,
        "PSSmartness1":PSSmartness1,
        "PSSmartness2":PSSmartness2,
        "PSNeatness1":PSNeatness1,
        "PSNeatness2":PSNeatness2,
        "PSFashionable1":PSFashionable1,
        "PSFashionable2":PSFashionable2,
        "PSBrightness1":PSBrightness1,
        "PSBrightness2":PSBrightness2,
        "PSElegance1":PSElegance1,
        "PSElegance2":PSElegance2,

        "PSInterest":PSInterest,
        "PSPersonality":PSPersonality
      })
    }
    fetch("../../set_profilesearchsetting.php",requestOptions1)
    .then((response)=> response.json())
    .then(result =>{
      console.log(result)
      if (result.result[0]==="SPSSS") {
        // プロフィール検索設定設定成功。リダイレクト
        auth.setMessage("プロフィール検索設定を変更しました")
        navigate("../ProfileDetail")
      } else {
        // プロフィール検索設定設定失敗。(UUIDが合致しない)再表示。
        auth.setMessage("プロフィール検索設定を変更できませんでした")
        navigate("../ProfileDetail")
      }
    })
  }

  // function PrefectureSelect() {
  //   if (Area !== "0") {
  //     return (
  //       <>
  //         <select
  //           defaultValue={Prefecture}
  //           onChange={evt => {
  //             setPrefecture(evt.target.value)
  //             setCity("0")
  //           }}>
  //             {Object.keys(AreaDB.Area[Area]["Prefecture"]).map(key => <option value={key}>{AreaDB.Area[Area]["Prefecture"][key]["PrefectureName"]}</option>)}
  //         </select>
  //         <CitySelect/>
  //       </>
  //     )
  //   } else {
  //     return <></>
  //   }
  // }

  // function CitySelect() {
  //   if (Prefecture !== "0") {
  //     return (
  //       <select
  //         defaultValue={City}
  //         onChange={evt => setCity(evt.target.value)}>
  //           {Object.keys(AreaDB.Area[Area]["Prefecture"][Prefecture]["City"]).map(key => <option value={key}>{AreaDB.Area[Area]["Prefecture"][Prefecture]["City"][key]}</option>)}
  //       </select>
  //     )
  //   } else {
  //     return <></>
  //   }
  // }

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

  // let latestAgeRange1 = JSON.parse(JSON.stringify(ProfileDB.PreferedAge))
  // const [updatedAgeRange1, setlatestAgeRange1] = useState(latestAgeRange1);
  // let latestAgeRange2 = JSON.parse(JSON.stringify(ProfileDB.PreferedAge))
  // const [updatedAgeRange2, setlatestAgeRange2] = useState(latestAgeRange2);

  let latestHeightRange1 = JSON.parse(JSON.stringify(ProfileDB.Height))
  const [updatedHeightRange1, setlatestHeightRange1] = useState(latestHeightRange1);
  let latestHeightRange2 = JSON.parse(JSON.stringify(ProfileDB.Height))
  const [updatedHeightRange2, setlatestHeightRange2] = useState(latestHeightRange2);

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
              <span className="dan">性別</span>
              <span className="dan2">
                {/* <select
                  defaultValue={Gender}
                  onChange={evt => setGender(evt.target.value)}>
                    {Object.keys(ProfileDB.Gender).map(key => <option value={key}>{ProfileDB.Gender[key]}</option>)}
                </select> */}
              </span>
            </li>
          <li>
            <SelectRangeForm
              title="年齢" 
              originalRange={ProfileDB.PreferedAge}
              Range1={PSAge1}
              setRange1={setPSAge1}
              Range2={PSAge2}
              setRange2={setPSAge2}
            />
            {/* 上・下を設けて、範囲設定できるようにする。上が下よりも小さくならないようにしている */}
            {/* <span className="dan">年齢</span>
            <span className="dan2">
              <select
                defaultValue={PSAge1}
                onChange={evt => {
                  setPSAge1(evt.target.value)
                  latestAgeRange2 = JSON.parse(JSON.stringify(ProfileDB.PreferedAge)) // 一度リセットする
                  for (let i = 1 ; i < Number(evt.target.value); i++) {
                    delete latestAgeRange2[String(i)]
                  }
                  setlatestAgeRange2(latestAgeRange2)
                }}>
                  {Object.keys(updatedAgeRange1).map(key => <option value={key}>{updatedAgeRange1[key]}</option>)}
              </select>
              〜
              <select
                defaultValue={PSAge2}
                onChange={evt => {
                  setPSAge2(evt.target.value)
                  if (Number(evt.target.value) !== 0) {
                    latestAgeRange1 = JSON.parse(JSON.stringify(ProfileDB.PreferedAge)) // 一度リセットする
                    for (let i = Number(evt.target.value) + 1 ; i <= 17 ; i++) {
                      delete latestAgeRange1[String(i)]
                    }
                    setlatestAgeRange1(latestAgeRange1)
                  }
                }}>
                  {Object.keys(updatedAgeRange2).map(key => <option value={key}>{updatedAgeRange2[key]}</option>)}
              </select>
            </span> */}
          </li>
          <li>
          <span className="dan">エリア</span>
          <span className="dan2">
            {/* <select
              defaultValue={Area}
              onChange={evt => {
                  setArea(evt.target.value)
                  setPrefecture("0")
                  setCity("0")
              }}>
                {Object.keys(AreaDB.Area).map(key => <option value={key}>{AreaDB.Area[key]["AreaName"]}</option>)}
            </select>
            <PrefectureSelect/> */}
          </span>
          </li>
          <li>
            <span className="dan">身長</span>
            <span className="dan2">
            <select
                defaultValue={PSHeight1}
                onChange={evt => {
                  setPSHeight1(evt.target.value)
                  latestHeightRange2 = JSON.parse(JSON.stringify(ProfileDB.Height)) // 一度リセットする
                  for (let i = 1 ; i < Number(evt.target.value); i++) {
                    delete latestHeightRange2[String(i)]
                  }
                  setlatestHeightRange2(latestHeightRange2)
                }}>
                  {Object.keys(updatedHeightRange1).map(key => <option value={key}>{updatedHeightRange1[key]}</option>)}
              </select>
              〜
              <select
                defaultValue={PSHeight2}
                onChange={evt => {
                  setPSHeight2(evt.target.value)
                  if (Number(evt.target.value) !== 0) {
                    latestHeightRange1 = JSON.parse(JSON.stringify(ProfileDB.Height)) // 一度リセットする
                    for (let i = Number(evt.target.value) + 1 ; i <= 17 ; i++) {
                      delete latestHeightRange1[String(i)]
                    }
                    setlatestHeightRange1(latestHeightRange1)
                  }
                }}>
                  {Object.keys(updatedHeightRange2).map(key => <option value={key}>{updatedHeightRange2[key]}</option>)}
              </select>
            </span>
          </li>
          <li>
            <span className="dan">スタイル</span>
            <span className="dan2">
              {/* <select
                defaultValue={Style}
                onChange={evt => setStyle(evt.target.value)}>
                  {Object.keys(ProfileDB.Style).map(key => <option value={key}>{ProfileDB.Style[key]}</option>)}
              </select> */}
            </span>
          </li>
          <li>
            <span className="dan">ルックス</span>
            <span className="dan2">
              {/* <select
                defaultValue={Looks}
                onChange={evt => setLooks(evt.target.value)}>
                  {Object.keys(ProfileDB.Looks).map(key => <option value={key}>{ProfileDB.Looks[key]}</option>)}
              </select> */}
            </span>
          </li>
          <li>
            <span className="dan">カップ</span>
            <span className="dan2">
              <select
                defaultValue={Cup}
                onChange={evt => setCup(evt.target.value)}>
                  {Object.keys(ProfileDB.Cup).map(key => <option value={key}>{ProfileDB.Cup[key]}</option>)}
              </select>
            </span>
          </li>
          <li>
            <span className="dan">バスト</span>
            <span className="dan2">
              <input
                type="number"
                value={BustSize}
                onChange={evt => {
                // 本当は、サーバー側でも入力制限を設けたい。
                setBustSize(evt.target.value)
                }}
                placeholder='バスト'
              />                
            </span>
          </li>
          <li>
            <span className="dan">ウエスト</span>
            <span className="dan2">
              <input
                type="number"
                value={WestSize}
                onChange={evt => {
                  // 本当は、サーバー側でも入力制限を設けたい。
                  setWestSize(evt.target.value)
                }}
                placeholder='ウエスト'
              />                
            </span>
          </li>
          <li>
            <span className="dan">ヒップ</span>
            <span className="dan2">
              <input
                type="number"
                value={HipSize}
                onChange={evt => {
                  // 本当は、サーバー側でも入力制限を設けたい。
                  setHipSize(evt.target.value)
                }}
                placeholder='ヒップ'
              />                
            </span>
          </li>
          <li>
            <span className="dan">血液型</span>
            <span className="dan2">
              <select
                defaultValue={BloodType}
                onChange={evt => setBloodType(evt.target.value)}>
                  {Object.keys(ProfileDB.BloodType).map(key => <option value={key}>{ProfileDB.BloodType[key]}</option>)}
              </select>
            </span>
          </li>
          <li>
            <span className="dan">職業</span>
            <span className="dan2">
              <select
                defaultValue={Job}
                onChange={evt => setJob(evt.target.value)}>
                  {Object.keys(ProfileDB.Job).map(key => <option value={key}>{ProfileDB.Job[key]}</option>)}
              </select>
            </span>
          </li>
          <li>
            <span className="dan">学歴</span>
            <span className="dan2">
              <select
                defaultValue={EduBack}
                onChange={evt => setEduBack(evt.target.value)}>
                  {Object.keys(ProfileDB.EduBack).map(key => <option value={key}>{ProfileDB.EduBack[key]}</option>)}
              </select>
            </span>
          </li>
          <li>
            <span className="dan">出身地</span>
            <span className="dan2">
              <select
                defaultValue={BirthArea}
                onChange={evt => {
                    setBirthArea(evt.target.value)
                    setBirthPrefecture("0")
                }}>
                  {Object.keys(AreaDB.Area).map(key => <option value={key}>{AreaDB.Area[key]["AreaName"]}</option>)}
              </select>
              <BirthPrefectureSelect/>
            </span>
          </li>
          <li>
            <span className="dan">星座</span>
            <span className="dan2">
              <select
                defaultValue={Zodiac}
                onChange={evt => setZodiac(evt.target.value)}>
                  {Object.keys(ProfileDB.Zodiac).map(key => <option value={key}>{ProfileDB.Zodiac[key]}</option>)}
              </select>
            </span>
          </li>
          <li>
            <span className="dan">交際状況</span>
            <span className="dan2">
              <select
                defaultValue={MarriageStatus}
                onChange={evt => setMarriageStatus(evt.target.value)}>
                  {Object.keys(ProfileDB.MarriageStatus).map(key => <option value={key}>{ProfileDB.MarriageStatus[key]}</option>)}
              </select>
            </span>
          </li>
          <li>
            <span className="dan">子供</span>
            <span className="dan2">
              <select
                defaultValue={Kids}
                onChange={evt => setKids(evt.target.value)}>
                  {Object.keys(ProfileDB.Kids).map(key => <option value={key}>{ProfileDB.Kids[key]}</option>)}
              </select>
            </span>
          </li>
          <li>
            <span className="dan">タバコ</span>
            <span className="dan2">
              <select
                defaultValue={Tabacco}
                onChange={evt => setTabacco(evt.target.value)}>
                  {Object.keys(ProfileDB.Tabacco).map(key => <option value={key}>{ProfileDB.Tabacco[key]}</option>)}
              </select>
            </span>
          </li>
          <li>
            <span className="dan">お酒</span>
            <span className="dan2">
              <select
                defaultValue={Alchole}
                onChange={evt => setAlchole(evt.target.value)}>
                  {Object.keys(ProfileDB.Alchole).map(key => <option value={key}>{ProfileDB.Alchole[key]}</option>)}
              </select>
            </span>
          </li>
          <li>
            <span className="dan">車</span>
            <span className="dan2">
              <select
                defaultValue={Car}
                onChange={evt => setCar(evt.target.value)}>
                  {Object.keys(ProfileDB.Car).map(key => <option value={key}>{ProfileDB.Car[key]}</option>)}
              </select>
            </span>
          </li>

          <li>
            {/* 別のリストにして、複数選択・検索できるようにする */}
            <span className="dan">興味あること</span>
            <span className="dan2">
              <select
                defaultValue={Interest}
                onChange={evt => setInterest(evt.target.value)}>
                  {Object.keys(ProfileDB.Interest).map(key => <option value={key}>{ProfileDB.Interest[key]}</option>)}
              </select>
            </span>
          </li>
          <li>
            <span className="dan">メッセージ</span>
            <span className="dan2">
              {/* 複数行での記載ができるように。別にするか？？ */}
              <input
                // プルダウンでの選択式にしたい
                type="text"
                // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                // title="有効なメールアドレスを入力してください"
                onChange={evt => {
                  // 本当は、この段階で入力制限を設けたい。ポップアップなどで入力できないことを示す？
                  setProfileMessage(evt.target.value.replace(/"/g, '”').replace(/#/g, '＃').replace(/\$/g, '＄').replace(/&/g, '＆').replace(/'/g, '’').replace(/\(/g,'（').replace(/\)/g,'）').replace(/\\/g, '＼').replace(/</g, '＜').replace(/>/g, '＞').replace(/\*/g, '＊').replace(/`/g, '｀').replace(/\|/g, '｜'))
                }}
                placeholder='メッセージ'
              />
            </span>
          </li>

          {/* ファイルを選択して、貼り付けれるようにしたい。
          まずは、画像の読み込みロジック、保存先などが必要
          placeholder='プロフィール写真'
          setProfilePicture(evt.target.value) */}
          

          <li>
            {/* 別のリストにして、複数選択・検索できるようにする。Personalityと共通 */}
            <span className="dan">希望する性格</span>
            <span className="dan2">
              <select
                defaultValue={PreferedPersonality}
                onChange={evt => setPreferedPersonality(evt.target.value)}>
                  {Object.keys(ProfileDB.Personality).map(key => <option value={key}>{ProfileDB.Personality[key]}</option>)}
              </select>
            </span>
          </li>
          <li>
            {/* 別のリストにして、複数選択・検索できるようにする。 */}
            <span className="dan">性格</span>
            <span className="dan2">
              <select
                defaultValue={Personality}
                onChange={evt => setPersonality(evt.target.value)}>
                  {Object.keys(ProfileDB.Personality).map(key => <option value={key}>{ProfileDB.Personality[key]}</option>)}
              </select>
            </span>
          </li>
          <li>
            自己評価<br />
          </li>
          <li>
            {/* 星で表現したい。 */}
            <span className="dan">可愛さ</span>
            <span className="dan2">
              <select
                defaultValue={SelfCute}
                onChange={evt => setSelfCute(evt.target.value)}>
                  {Object.keys(ProfileDB.Self).map(key => <option value={key}>{ProfileDB.Self[key]}</option>)}
              </select>
            </span>
          </li>
          <li>
            <span className="dan">セクシーさ</span>
            <span className="dan2">
              <select
                defaultValue={SelfSexy}
                onChange={evt => setSelfSexy(evt.target.value)}>
                  {Object.keys(ProfileDB.Self).map(key => <option value={key}>{ProfileDB.Self[key]}</option>)}
              </select>
            </span>
          </li>
          <li>
            <span className="dan">優しさ</span>
            <span className="dan2">
              <select
                defaultValue={SelfKindness}
                onChange={evt => setSelfKindness(evt.target.value)}>
                  {Object.keys(ProfileDB.Self).map(key => <option value={key}>{ProfileDB.Self[key]}</option>)}
              </select>
            </span>
          </li>
          <li>
            <span className="dan">賢さ</span>
            <span className="dan2">
              <select
                defaultValue={SelfSmartness}
                onChange={evt => setSelfSmartness(evt.target.value)}>
                  {Object.keys(ProfileDB.Self).map(key => <option value={key}>{ProfileDB.Self[key]}</option>)}
              </select>
            </span>
          </li>
          <li>
            <span className="dan">清楚さ</span>
            <span className="dan2">
              <select
                defaultValue={SelfNeatness}
                onChange={evt => setSelfNeatness(evt.target.value)}>
                  {Object.keys(ProfileDB.Self).map(key => <option value={key}>{ProfileDB.Self[key]}</option>)}
              </select>
            </span>
          </li>
          <li>
            <span className="dan">ファッション</span>
            <span className="dan2">
              <select
                defaultValue={SelfFashionable}
                onChange={evt => setSelfFashionable(evt.target.value)}>
                  {Object.keys(ProfileDB.Self).map(key => <option value={key}>{ProfileDB.Self[key]}</option>)}
              </select>
            </span>
          </li>
          <li>
            <span className="dan">明るさ</span>
            <span className="dan2">
              <select
                defaultValue={SelfBrightness}
                onChange={evt => setSelfBrightness(evt.target.value)}>
                  {Object.keys(ProfileDB.Self).map(key => <option value={key}>{ProfileDB.Self[key]}</option>)}
              </select>
            </span>
          </li>
          <li>
            <span className="dan">エレガンス</span>
            <span className="dan2">
              <select
                defaultValue={SelfElegance}
                onChange={evt => setSelfElegance(evt.target.value)}>
                  {Object.keys(ProfileDB.Self).map(key => <option value={key}>{ProfileDB.Self[key]}</option>)}
              </select>
            </span>
          </li>
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
