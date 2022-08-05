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
import FormTextInput from "./FormTextInput";
import FormSelectRange from "./FormSelectRange";
import FormSelect from "./FormSelect";

export function ProfileSetting() {
  //  各ステータスのdefaultにすでに設定された値を入れたい。
  const [BasicProfile, setBasicProfile] = useState([]);
  const [Profile, setProfile] = useState([]);
  // 基本状況
  // const [Nickname, setNickname] = useState("0");
  // const [Gender, setGender] = useState("0");
  // const [Age, setAge] = useState("0");
  // // 地域状況
  // const [Area, setArea] = useState("0");
  // const [Prefecture, setPrefecture] = useState("0");
  // const [City, setCity] = useState("0");
  // // 身体的情報
  // const [Height, setHeight] = useState("0");
  // const [Style, setStyle] = useState("0");
  // const [Looks, setLooks] = useState("0");
  // const [Cup, setCup] = useState("0");
  // const [BustSize, setBustSize] = useState("0");
  // const [WestSize, setWestSize] = useState("0");
  // const [HipSize, setHipSize] = useState("0");
  // const [BloodType, setBloodType] = useState("0");
  // // 経験・背景情報
  // const [Job, setJob] = useState("0");
  // const [EduBack, setEduBack] = useState("0");
  // const [BirthArea, setBirthArea] = useState("0");
  // const [BirthPrefecture, setBirthPrefecture] = useState("0");
  // const [Zodiac, setZodiac] = useState("0");
  // // 交際情報
  // const [MarriageStatus, setMarriageStatus] = useState("0");
  // const [Kids, setKids] = useState("0");
  // // 趣味・嗜好
  // const [Tabacco, setTabacco] = useState("0");
  // const [Alchole, setAlchole] = useState("0");
  // const [Car, setCar] = useState("0");
  // const [Interest, setInterest] = useState("0");
  // // その他
  // // const [ProfilePicture, setProfilePicture] = useState("");
  // const [ProfileMessage, setProfileMessage] = useState("");
  // // 相手に求めること
  // const [PreferedAge1, setPreferedAge1] = useState("0");
  // const [PreferedAge2, setPreferedAge2] = useState("0");
  // const [PreferedPersonality, setPreferedPersonality] = useState("0");
  // // 内面的情報
  // const [Personality, setPersonality] = useState("0");
  // // 自己評価
  // const [SelfCute, setSelfCute] = useState("0");
  // const [SelfSexy, setSelfSexy] = useState("0");
  // const [SelfKindness, setSelfKindness] = useState("0");
  // const [SelfSmartness, setSelfSmartness] = useState("0");
  // const [SelfNeatness, setSelfNeatness] = useState("0");
  // const [SelfFashionable, setSelfFashionable] = useState("0");
  // const [SelfBrightness, setSelfBrightness] = useState("0");
  // const [SelfElegance, setSelfElegance] = useState("0");

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
    fetch("../../get_basicprofile.php",initialRequestOptions)
    .then((response) => response.json())
    .then(result => {
      setBasicProfile(result.result[0])
      // setNickname(result.result[0].nickname)
      // setGender(result.result[0].gender)
      // setAge(result.result[0].age)
    })

    fetch("../../get_profile.php",initialRequestOptions)
    .then((response) => response.json())
    .then(result => {
      if (result.result !== "PND") {
        setProfile(result.result[0])
        // console.log(result.result[0])
        // setArea(result.result[0].Area)
        // setPrefecture(result.result[0].Prefecture)
        // setCity(result.result[0].City)
        // setHeight(result.result[0].Height)
        // setStyle(result.result[0].Style)
        // setLooks(result.result[0].Looks)
        // setCup(result.result[0].Cup)
        // setBustSize(result.result[0].BustSize)
        // setWestSize(result.result[0].WestSize)
        // setHipSize(result.result[0].HipSize)
        // setBloodType(result.result[0].BloodType)
        // setJob(result.result[0].Job)
        // setEduBack(result.result[0].EduBack)
        // setBirthArea(result.result[0].BirthArea)
        // setBirthPrefecture(result.result[0].BirthPrefecture)
        // setZodiac(result.result[0].Zodiac)
        // setMarriageStatus(result.result[0].MarriageStatus)
        // setKids(result.result[0].Kids)
        // setTabacco(result.result[0].Tabacco)
        // setAlchole(result.result[0].Alchole)
        // setCar(result.result[0].Car)
        // setInterest(result.result[0].Interest)
        // // setProfilePicture(result.result[0].ProfilePicture)
        // setProfileMessage(result.result[0].ProfileMessage)
        // setPreferedAge1(result.result[0].PreferedAge1)
        // setPreferedAge2(result.result[0].PreferedAge2)
        // setPreferedPersonality(result.result[0].PreferedPersonality)
        // setPersonality(result.result[0].Personality)
        // setSelfCute(result.result[0].SelfCute)
        // setSelfSexy(result.result[0].SelfSexy)
        // setSelfKindness(result.result[0].SelfKindness)
        // setSelfSmartness(result.result[0].SelfSmartness)
        // setSelfNeatness(result.result[0].SelfNeatness)
        // setSelfFashionable(result.result[0].SelfFashionable)
        // setSelfBrightness(result.result[0].SelfBrightness)
        // setSelfElegance(result.result[0].SelfElegance)
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

        "nickname":BasicProfile.nickname,
        "gender":BasicProfile.gender,
        "age":BasicProfile.age,

        "Area":Profile.Area,
        "Prefecture":Profile.Prefecture,
        "City":Profile.City,
        "Height":Profile.Height,
        "Style":Profile.Style,
        "Looks":Profile.Looks,
        "Cup":Profile.Cup,
        "BustSize":Profile.BustSize,
        "WestSize":Profile.WestSize,
        "HipSize":Profile.HipSize,
        "BloodType":Profile.BloodType,

        "Job":Profile.Job,
        "EduBack":Profile.EduBack,
        "BirthArea":Profile.BirthArea,
        "BirthPrefecture":Profile.BirthPrefecture,
        "Zodiac":Profile.Zodiac,

        "MarriageStatus":Profile.MarriageStatus,
        "Kids":Profile.Kids,

        "Tabacco":Profile.Tabacco,
        "Alchole":Profile.Alchole,
        "Car":Profile.Car,
        "Interest":Profile.Interest,

        // "ProfilePicture":ProfilePicture,
        "ProfileMessage":Profile.ProfileMessage,

        "PreferedAge1":Profile.PreferedAge1,
        "PreferedAge2":Profile.PreferedAge2,
        "PreferedPersonality":Profile.PreferedPersonality,

        "Personality":Profile.Personality,

        "SelfCute":Profile.SelfCute,
        "SelfSexy":Profile.SelfSexy,
        "SelfKindness":Profile.SelfKindness,
        "SelfSmartness":Profile.SelfSmartness,
        "SelfNeatness":Profile.SelfNeatness,
        "SelfFashionable":Profile.SelfFashionable,
        "SelfBrightness":Profile.SelfBrightness,
        "SelfElegance":Profile.SelfElegance
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
    if (Profile.Area !== "0") {
      return (
        <>
          <select
            defaultValue={Profile.Prefecture}
            onChange={event => {
              setProfile({...Profile, Prefecture : event.target.value})
              setProfile({...Profile, City : "0"})
            }}>
              {Object.keys(AreaDB.Area[Profile.Area]["Prefecture"]).map(key => <option value={key}>{AreaDB.Area[Profile.Area]["Prefecture"][key]["PrefectureName"]}</option>)}
          </select>
          <CitySelect/>
        </>
      )
    } else {
      return <></>
    }
  }

  function CitySelect() {
    if (Profile.Prefecture !== "0") {
      return (
        <select
          defaultValue={Profile.City}
          onChange={event => {
            setProfile({...Profile, City : event.target.value})
          }}>
            {Object.keys(AreaDB.Area[Profile.Area]["Prefecture"][Profile.Prefecture]["City"]).map(key => <option value={key}>{AreaDB.Area[Profile.Area]["Prefecture"][Profile.Prefecture]["City"][key]}</option>)}
        </select>
      )
    } else {
      return <></>
    }
  }

  function BirthPrefectureSelect() {
    if (Profile.BirthArea !== "0") {
      return (
        <>
          <select
            defaultValue={Profile.BirthPrefecture}
            onChange={event => {
              setProfile({...Profile, BirthPrefecture : event.target.value})
            }}>
              {Object.keys(AreaDB.Area[Profile.BirthArea]["Prefecture"]).map(key => <option value={key}>{AreaDB.Area[Profile.BirthArea]["Prefecture"][key]["PrefectureName"]}</option>)}
          </select>
        </>
      )
    } else {
      return <></>
    }
  }

  // const handleInput = (event) => {
  //   event.preventDefault();
  //   setNickname(event.target.value);
  // };
  // console.log(BasicProfile)

  // function MainSelection() {
  if (BasicProfile.length === 0) {
    return <></>
  } else {
    return (
      <div>
      <h1>プロフィール設定</h1>
        <form onSubmit={e => submit(e)}>
          <ul>
            <li>
              <FormTextInput 
                title="ニックネーム"
                type="text"
                defaultValue={BasicProfile.nickname}
                setValue={event => setBasicProfile({...BasicProfile, nickname : event.target.value})}
                required="true"
              />
            </li>
            <li>
              <FormSelect
                title="性別"
                keyValue={ProfileDB.Gender}
                defaultValue={BasicProfile.gender}
                setValue={event => setBasicProfile({...BasicProfile, gender : event.target.value})}
              />
            </li>
            <li>
              <FormTextInput 
                title="年齢"
                type="number"
                defaultValue={BasicProfile.age}
                setValue={event => setBasicProfile({...BasicProfile, age : event.target.value})}
                required="true"
              />
            </li>
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
              <FormSelect
                title="身長"
                keyValue={ProfileDB.Height}
                defaultValue={Profile.Height}
                setValue={event => setProfile({...Profile, Height : event.target.value})}
              />
            </li>
            <li>
              <FormSelect
                title="スタイル"
                keyValue={ProfileDB.Style}
                defaultValue={Profile.Style}
                setValue={event => setProfile({...Profile, Style : event.target.value})}
              />
            </li>
            <li>
              <FormSelect
                title="ルックス"
                keyValue={ProfileDB.Looks}
                defaultValue={Profile.Looks}
                setValue={event => setProfile({...Profile, Looks : event.target.value})}
              />
            </li>
            <li>
              <FormSelect
                title="カップ"
                keyValue={ProfileDB.Cup}
                defaultValue={Profile.Cup}
                setValue={event => setProfile({...Profile, Cup : event.target.value})}
              />
            </li>
            <li>
              <FormTextInput 
                title="バスト"
                type="number"
                defaultValue={Profile.BustSize}
                setValue={event => setProfile({...Profile, BustSize : event.target.value})}
                placeholder="バスト"
                required="false"
              />
            </li>
            <li>
              <FormTextInput 
                title="ウエスト"
                type="number"
                defaultValue={Profile.WestSize}
                setValue={event => setProfile({...Profile, WestSize : event.target.value})}
                placeholder="ウエスト"
                required="false"
              />
            </li>
            <li>
              <FormTextInput 
                title="ヒップ"
                type="number"
                defaultValue={Profile.HipSize}
                setValue={event => setProfile({...Profile, HipSize : event.target.value})}
                placeholder="ヒップ"
                required="false"
              />
            </li>
            <li>
              <FormSelect
                title="血液型"
                keyValue={ProfileDB.BloodType}
                defaultValue={Profile.BloodType}
                setValue={event => setProfile({...Profile, BloodType : event.target.value})}
              />
            </li>
            <li>
              <FormSelect
                title="職業"
                keyValue={ProfileDB.Job}
                defaultValue={Profile.Job}
                setValue={event => setProfile({...Profile, Job : event.target.value})}
              />
            </li>
            <li>
              <FormSelect
                title="学歴"
                keyValue={ProfileDB.EduBack}
                defaultValue={Profile.EduBack}
                setValue={event => setProfile({...Profile, EduBack : event.target.value})}
              />
            </li>
            <li>
              <span className="dan">出身地</span>
              <span className="dan2">
                <select
                  defaultValue={Profile.BirthArea}
                  onChange={event => {
                      setProfile({...Profile, BirthArea : event.target.value})
                      setProfile({...Profile, BirthPrefecture : "0"})
                  }}>
                    {Object.keys(AreaDB.Area).map(key => <option value={key}>{AreaDB.Area[key]["AreaName"]}</option>)}
                </select>
                <BirthPrefectureSelect/>
              </span>
            </li>
            <li>
              <FormSelect
                title="星座"
                keyValue={ProfileDB.Zodiac}
                defaultValue={Profile.Zodiac}
                setValue={event => setProfile({...Profile, Zodiac : event.target.value})}
              />
            </li>
            <li>
              <FormSelect
                title="交際状況"
                keyValue={ProfileDB.MarriageStatus}
                defaultValue={Profile.MarriageStatus}
                setValue={event => setProfile({...Profile, MarriageStatus : event.target.value})}
              />
            </li>
            <li>
              <FormSelect
                title="子供"
                keyValue={ProfileDB.Kids}
                defaultValue={Profile.Kids}
                setValue={event => setProfile({...Profile, Kids : event.target.value})}
              />
            </li>
            <li>
              <FormSelect
                title="タバコ"
                keyValue={ProfileDB.Tabacco}
                defaultValue={Profile.Tabacco}
                setValue={event => setProfile({...Profile, Tabacco : event.target.value})}
              />
            </li>
            <li>
              <FormSelect
                title="お酒"
                keyValue={ProfileDB.Alchole}
                defaultValue={Profile.Alchole}
                setValue={event => setProfile({...Profile, Alchole : event.target.value})}
              />
            </li>
            <li>
              <FormSelect
                title="車"
                keyValue={ProfileDB.Car}
                defaultValue={Profile.Car}
                setValue={event => setProfile({...Profile, Car : event.target.value})}
              />
            </li>
            <li>
              {/* 別のリストにして、複数選択・検索できるようにする */}
              <FormSelect
                title="興味あること"
                keyValue={ProfileDB.Interest}
                defaultValue={Profile.Interest}
                setValue={event => setProfile({...Profile, Interest : event.target.value})}
              />
            </li>
            <li>
              <FormTextInput 
                title="メッセージ"
                type="text"
                defaultValue={Profile.ProfileMessage}
                setValue={event => setProfile({...Profile, ProfileMessage : event.target.value})}
                placeholder="メッセージ"
                required="false"
              />
            </li>

            {/* ファイルを選択して、貼り付けれるようにしたい。
            まずは、画像の読み込みロジック、保存先などが必要
            placeholder='プロフィール写真'
            setProfilePicture(evt.target.value) */}
            
            <li>
              <FormSelectRange
                title="希望する年齢" 
                originalRange={ProfileDB.PreferedAge}
                Range1={Profile.PreferedAge1}
                setRange1={event => setProfile({...Profile, PreferedAge1 : event.target.value})}
                Range2={Profile.PreferedAge2}
                setRange2={event => setProfile({...Profile, PreferedAge2 : event.target.value})}
              />
            </li>
            <li>
              {/* 別のリストにして、複数選択・検索できるようにする。Personalityと共通 */}
              <FormSelect 
                title="希望する性格"
                keyValue={ProfileDB.Personality}
                defaultValue={Profile.PreferedPersonality}
                setValue={event => setProfile({...Profile, PreferedPersonality : event.target.value})}
              />
            </li>
            <li>
              {/* 別のリストにして、複数選択・検索できるようにする。 */}
              <FormSelect 
                title="車"
                keyValue={ProfileDB.Personality}
                defaultValue={Profile.Personality}
                setValue={event => setProfile({...Profile, Personality : event.target.value})}
              />
            </li>
            <li>
              自己評価<br />
            </li>
            <li>
              {/* 星で表現したい。 */}
              <FormSelect 
                title="可愛さ"
                keyValue={ProfileDB.Self}
                defaultValue={Profile.SelfCute}
                setValue={event => setProfile({...Profile, SelfCute : event.target.value})}
              />
            </li>
            <li>
              {/* 星で表現したい。 */}
              <FormSelect 
                title="セクシーさ"
                keyValue={ProfileDB.Self}
                defaultValue={Profile.SelfSexy}
                setValue={event => setProfile({...Profile, SelfSexy : event.target.value})}
              />
            </li>
            <li>
              {/* 星で表現したい。 */}
              <FormSelect 
                title="優しさ"
                keyValue={ProfileDB.Self}
                defaultValue={Profile.SelfKindness}
                setValue={event => setProfile({...Profile, SelfKindness : event.target.value})}
              />
            </li>
            <li>
              {/* 星で表現したい。 */}
              <FormSelect 
                title="賢さ"
                keyValue={ProfileDB.Self}
                defaultValue={Profile.SelfSmartness}
                setValue={event => setProfile({...Profile, SelfSmartness : event.target.value})}
              />
            </li>
            <li>
              {/* 星で表現したい。 */}
              <FormSelect 
                title="清楚さ"
                keyValue={ProfileDB.Self}
                defaultValue={Profile.SelfNeatness}
                setValue={event => setProfile({...Profile, SelfNeatness : event.target.value})}
              />
            </li>
            <li>
              {/* 星で表現したい。 */}
              <FormSelect 
                title="ファッション"
                keyValue={ProfileDB.Self}
                defaultValue={Profile.SelfFashionable}
                setValue={event => setProfile({...Profile, SelfFashionable : event.target.value})}
              />
            </li>
            <li>
              {/* 星で表現したい。 */}
              <FormSelect 
                title="明るさ"
                keyValue={ProfileDB.Self}
                defaultValue={Profile.SelfBrightness}
                setValue={event => setProfile({...Profile, SelfBrightness : event.target.value})}
              />
            </li>
            <li>
              {/* 星で表現したい。 */}
              <FormSelect 
                title="エレガンス"
                keyValue={ProfileDB.Self}
                defaultValue={Profile.SelfElegance}
                setValue={event => setProfile({...Profile, SelfElegance : event.target.value})}
              />
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
}
