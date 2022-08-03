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


export function ProfileSetting() {
  //  各ステータスのdefaultにすでに設定された値を入れたい。
  // console.log(Profile.Area);
  // 地域状況
  const [Area, setArea] = useState("0");
  const [Prefecture, setPrefecture] = useState("0");
  const [City, setCity] = useState("0");
  // 身体的情報
  const [Height, setHeight] = useState("0");
  const [Style, setStyle] = useState("0");
  const [Looks, setLooks] = useState("0");
  const [Cup, setCup] = useState("0");
  const [BustSize, setBustSize] = useState("0");
  const [WestSize, setWestSize] = useState("0");
  const [HipSize, setHipSize] = useState("0");
  const [BloodType, setBloodType] = useState("0");
  // 経験・背景情報
  const [Job, setJob] = useState("0");
  const [EduBack, setEduBack] = useState("0");
  const [BirthArea, setBirthArea] = useState("0");
  const [BirthPrefecture, setBirthPrefecture] = useState("0");
  const [Zodiac, setZodiac] = useState("0");
  // 交際情報
  const [MarriageStatus, setMarriageStatus] = useState("0");
  const [Kids, setKids] = useState("0");
  // 趣味・嗜好
  const [Tabacco, setTabacco] = useState("0");
  const [Alchole, setAlchole] = useState("0");
  const [Car, setCar] = useState("0");
  const [Interest, setInterest] = useState("0");
  // その他
  // const [ProfilePicture, setProfilePicture] = useState("");
  const [ProfileMessage, setProfileMessage] = useState("");
  // 相手に求めること
  const [PreferedAge1, setPreferedAge1] = useState("0");
  const [PreferedAge2, setPreferedAge2] = useState("0");
  const [PreferedPersonality, setPreferedPersonality] = useState("0");
  // 内面的情報
  const [Personality, setPersonality] = useState("0");
  // 自己評価
  const [SelfCute, setSelfCute] = useState("0");
  const [SelfSexy, setSelfSexy] = useState("0");
  const [SelfKindness, setSelfKindness] = useState("0");
  const [SelfSmartness, setSelfSmartness] = useState("0");
  const [SelfNeatness, setSelfNeatness] = useState("0");
  const [SelfFashionable, setSelfFashionable] = useState("0");
  const [SelfBrightness, setSelfBrightness] = useState("0");
  const [SelfElegance, setSelfElegance] = useState("0");

  let auth = useAuth();

  let navigate = useNavigate();

  const [initialized, setinitialized] = useState(false);

  const initialRequestOptions ={
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({"UUID":auth.user})
  }
  
  // ページが読み込まれる時に実行し、Profileとして登録する。
  if (initialized===false) {
    fetch("../../get_profile.php",initialRequestOptions)
    .then((response) => response.json())
    .then(result => {
      if (result.result !== "PND") {
        // console.log(result.result[0])
        setArea(result.result[0].Area)
        setPrefecture(result.result[0].Prefecture)
        setCity(result.result[0].City)
        setHeight(result.result[0].Height)
        setStyle(result.result[0].Style)
        setLooks(result.result[0].Looks)
        setCup(result.result[0].Cup)
        setBustSize(result.result[0].BustSize)
        setWestSize(result.result[0].WestSize)
        setHipSize(result.result[0].HipSize)
        setBloodType(result.result[0].BloodType)
        setJob(result.result[0].Job)
        setEduBack(result.result[0].EduBack)
        setBirthArea(result.result[0].BirthArea)
        setBirthPrefecture(result.result[0].BirthPrefecture)
        setZodiac(result.result[0].Zodiac)
        setMarriageStatus(result.result[0].MarriageStatus)
        setKids(result.result[0].Kids)
        setTabacco(result.result[0].Tabacco)
        setAlchole(result.result[0].Alchole)
        setCar(result.result[0].Car)
        setInterest(result.result[0].Interest)
        // setProfilePicture(result.result[0].ProfilePicture)
        setProfileMessage(result.result[0].ProfileMessage)
        setPreferedAge1(result.result[0].PreferedAge1)
        setPreferedAge2(result.result[0].PreferedAge2)
        setPreferedPersonality(result.result[0].PreferedPersonality)
        setPersonality(result.result[0].Personality)
        setSelfCute(result.result[0].SelfCute)
        setSelfSexy(result.result[0].SelfSexy)
        setSelfKindness(result.result[0].SelfKindness)
        setSelfSmartness(result.result[0].SelfSmartness)
        setSelfNeatness(result.result[0].SelfNeatness)
        setSelfFashionable(result.result[0].SelfFashionable)
        setSelfBrightness(result.result[0].SelfBrightness)
        setSelfElegance(result.result[0].SelfElegance)
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

        "Area":Area,
        "Prefecture":Prefecture,
        "City":City,
        "Height":Height,
        "Style":Style,
        "Looks":Looks,
        "Cup":Cup,
        "BustSize":BustSize,
        "WestSize":WestSize,
        "HipSize":HipSize,
        "BloodType":BloodType,

        "Job":Job,
        "EduBack":EduBack,
        "BirthArea":BirthArea,
        "BirthPrefecture":BirthPrefecture,
        "Zodiac":Zodiac,

        "MarriageStatus":MarriageStatus,
        "Kids":Kids,

        "Tabacco":Tabacco,
        "Alchole":Alchole,
        "Car":Car,
        "Interest":Interest,

        // "ProfilePicture":ProfilePicture,
        "ProfileMessage":ProfileMessage,

        "PreferedAge1":PreferedAge1,
        "PreferedAge2":PreferedAge2,
        "PreferedPersonality":PreferedPersonality,

        "Personality":Personality,

        "SelfCute":SelfCute,
        "SelfSexy":SelfSexy,
        "SelfKindness":SelfKindness,
        "SelfSmartness":SelfSmartness,
        "SelfNeatness":SelfNeatness,
        "SelfFashionable":SelfFashionable,
        "SelfBrightness":SelfBrightness,
        "SelfElegance":SelfElegance
      })
    }
    fetch("../../update_profile.php",requestOptions1)
    .then((response)=> response.json())
    .then(result =>{
      console.log(result)
      if (result.result[0]==="UPS") {
        // プロフィール変更成功。リダイレクト
        auth.setMessage("プロフィールを変更しました")
        navigate("../ProfileDetail")
      } else {
        // プロフィール変更失敗。(UUIDが合致しない)再表示。
        auth.setMessage("プロフィールを変更できませんでした")
        navigate("../ProfileDetail")
      }
    })
  }

  function PrefectureSelect() {
    if (Area !== "0") {
      return (
        <>
          <select
            defaultValue={Prefecture}
            onChange={evt => {
              setPrefecture(evt.target.value)
              setCity("0")
            }}>
              {Object.keys(AreaDB.Area[Area]["Prefecture"]).map(key => <option value={key}>{AreaDB.Area[Area]["Prefecture"][key]["PrefectureName"]}</option>)}
          </select>
          <CitySelect/>
        </>
      )
    } else {
      return <></>
    }
  }

  function CitySelect() {
    if (Prefecture !== "0") {
      return (
        <select
          defaultValue={City}
          onChange={evt => setCity(evt.target.value)}>
            {Object.keys(AreaDB.Area[Area]["Prefecture"][Prefecture]["City"]).map(key => <option value={key}>{AreaDB.Area[Area]["Prefecture"][Prefecture]["City"][key]}</option>)}
        </select>
      )
    } else {
      return <></>
    }
  }

  function BirthPrefectureSelect() {
    if (BirthArea !== "0") {
      return (
        <>
          <select
            defaultValue={BirthPrefecture}
            onChange={evt => {
              setBirthPrefecture(evt.target.value)
            }}>
              {Object.keys(AreaDB.Area[BirthArea]["Prefecture"]).map(key => <option value={key}>{AreaDB.Area[BirthArea]["Prefecture"][key]["PrefectureName"]}</option>)}
          </select>
        </>
      )
    } else {
      return <></>
    }
  }

  let latestPreferedAgeRange2 = JSON.parse(JSON.stringify(ProfileDB.PreferedAge))
  const [updatedPreferedAgeRange2, setlatestPreferedAgeRange2] = useState(latestPreferedAgeRange2);

  function MainSelection() {
    return (
      <div>
      <h1>プロフィール設定</h1>
        <form onSubmit={e => submit(e)}>
          <ul>
            <li>
            <span className="dan">エリア</span>
            <span className="dan2">
              <select
                defaultValue={Area}
                onChange={evt => {
                    setArea(evt.target.value)
                    setPrefecture("0")
                    setCity("0")
                }}>
                  {Object.keys(AreaDB.Area).map(key => <option value={key}>{AreaDB.Area[key]["AreaName"]}</option>)}
              </select>
              <PrefectureSelect/>
            </span>
            </li>
            <li>
              <span className="dan">身長</span>
              <span className="dan2">
                <select
                  defaultValue={Height}
                  onChange={evt => setHeight(evt.target.value)}>
                    {Object.keys(ProfileDB.Height).map(key => <option value={key}>{ProfileDB.Height[key]}</option>)}
                </select>
              </span>
            </li>
            <li>
              <span className="dan">スタイル</span>
              <span className="dan2">
                <select
                  defaultValue={Style}
                  onChange={evt => setStyle(evt.target.value)}>
                    {Object.keys(ProfileDB.Style).map(key => <option value={key}>{ProfileDB.Style[key]}</option>)}
                </select>
              </span>
            </li>
            <li>
              <span className="dan">ルックス</span>
              <span className="dan2">
                <select
                  defaultValue={Looks}
                  onChange={evt => setLooks(evt.target.value)}>
                    {Object.keys(ProfileDB.Looks).map(key => <option value={key}>{ProfileDB.Looks[key]}</option>)}
                </select>
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
                  // プルダウンでの選択式にしたい
                  type="number"
                  // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                  // title="有効なメールアドレスを入力してください"
                  onChange={evt => {
                    // 本当は、この段階で入力制限を設けたい。ポップアップなどで入力できないことを示す？
                    setBustSize(evt.target.value.replace(/"/g, '”').replace(/#/g, '＃').replace(/\$/g, '＄').replace(/&/g, '＆').replace(/'/g, '’').replace(/\(/g,'（').replace(/\)/g,'）').replace(/\\/g, '＼').replace(/</g, '＜').replace(/>/g, '＞').replace(/\*/g, '＊').replace(/`/g, '｀').replace(/\|/g, '｜'))
                  }}
                  placeholder='バスト'
                />                
              </span>
            </li>
            <li>
              <span className="dan">ウエスト</span>
              <span className="dan2">
                <input
                  // プルダウンでの選択式にしたい
                  type="number"
                  // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                  // title="有効なメールアドレスを入力してください"
                  onChange={evt => {
                    // 本当は、この段階で入力制限を設けたい。ポップアップなどで入力できないことを示す？
                    setWestSize(evt.target.value.replace(/"/g, '”').replace(/#/g, '＃').replace(/\$/g, '＄').replace(/&/g, '＆').replace(/'/g, '’').replace(/\(/g,'（').replace(/\)/g,'）').replace(/\\/g, '＼').replace(/</g, '＜').replace(/>/g, '＞').replace(/\*/g, '＊').replace(/`/g, '｀').replace(/\|/g, '｜'))
                  }}
                  placeholder='ウエスト'
                />                
              </span>
            </li>
            <li>
              <span className="dan">ヒップ</span>
              <span className="dan2">
                <input
                  // プルダウンでの選択式にしたい
                  type="number"
                  // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                  // title="有効なメールアドレスを入力してください"
                  onChange={evt => {
                    // 本当は、この段階で入力制限を設けたい。ポップアップなどで入力できないことを示す？
                    setHipSize(evt.target.value.replace(/"/g, '”').replace(/#/g, '＃').replace(/\$/g, '＄').replace(/&/g, '＆').replace(/'/g, '’').replace(/\(/g,'（').replace(/\)/g,'）').replace(/\\/g, '＼').replace(/</g, '＜').replace(/>/g, '＞').replace(/\*/g, '＊').replace(/`/g, '｀').replace(/\|/g, '｜'))
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
              {/* 上・下を設けて、範囲設定できるようにする。上が下よりも小さくならないようにロジックが必要 */}
              <span className="dan">希望する年齢</span>
              <span className="dan2">
                <select
                  defaultValue={PreferedAge1}
                  onChange={evt => {
                    setPreferedAge1(evt.target.value)
                    latestPreferedAgeRange2 = JSON.parse(JSON.stringify(ProfileDB.PreferedAge)) // 一度リセットする
                    for (let i = 1 ; i < Number(evt.target.value); i++) {
                      let j = ""
                      j= String(i)
                      delete latestPreferedAgeRange2[j]
                    }
                    setlatestPreferedAgeRange2(latestPreferedAgeRange2)
                  }}>
                    {Object.keys(ProfileDB.PreferedAge).map(key => <option value={key}>{ProfileDB.PreferedAge[key]}</option>)}
                </select>
                〜
                <select
                  defaultValue={PreferedAge2}
                  onChange={evt => {
                    setPreferedAge2(evt.target.value)
                  }}>
                    {Object.keys(updatedPreferedAgeRange2).map(key => <option value={key}>{updatedPreferedAgeRange2[key]}</option>)}
                </select>
              </span>
            </li>
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
  }

  return (
    <>
      <MainSelection/>
    </>
  )

}
