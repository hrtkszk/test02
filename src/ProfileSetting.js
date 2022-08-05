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
  // 基本状況
  // const [Nickname, setNickname] = useState("0");
  // const [Gender, setGender] = useState("0");
  // const [Age, setAge] = useState("0");
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

        "nickname":BasicProfile.nickname,
        "gender":BasicProfile.gender,
        "age":BasicProfile.age,

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
                setValue={setBasicProfile.nickname}
                required="true"
              />
            </li>
            <li>
              <FormSelect 
                title="性別"
                json={ProfileDB.Gender}
                defaultValue={BasicProfile.gender}
                setValue={setBasicProfile.gender}
              />
            </li>
            <li>
              <FormTextInput 
                title="年齢"
                type="number"
                defaultValue={BasicProfile.age}
                setValue={setBasicProfile.age}
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
                json={ProfileDB.Height}
                defaultValue={Height}
                setValue={setHeight}
              />
            </li>
            <li>
              <FormSelect 
                title="スタイル"
                json={ProfileDB.Style}
                defaultValue={Style}
                setValue={setStyle}
              />
            </li>
            <li>
              <FormSelect 
                title="ルックス"
                json={ProfileDB.Looks}
                defaultValue={Looks}
                setValue={setLooks}
              />
            </li>
            <li>
              <FormSelect 
                title="カップ"
                json={ProfileDB.Cup}
                defaultValue={Cup}
                setValue={setCup}
              />
            </li>
            <li>
              <FormTextInput 
                title="バスト"
                type="number"
                defaultValue={BustSize}
                setValue={setBustSize}
                placeholder="バスト"
                required="false"
              />
            </li>
            <li>
              <FormTextInput 
                title="ウエスト"
                type="number"
                defaultValue={WestSize}
                setValue={setWestSize}
                placeholder="ウエスト"
                required="false"
              />
            </li>
            <li>
              <FormTextInput 
                title="ヒップ"
                type="number"
                defaultValue={HipSize}
                setValue={setHipSize}
                placeholder="ヒップ"
                required="false"
              />
            </li>
            <li>
              <FormSelect 
                title="血液型"
                json={ProfileDB.BloodType}
                defaultValue={BloodType}
                setValue={setBloodType}
              />
            </li>
            <li>
              <FormSelect 
                title="職業"
                json={ProfileDB.Job}
                defaultValue={Job}
                setValue={setJob}
              />
            </li>
            <li>
              <FormSelect 
                title="学歴"
                json={ProfileDB.EduBack}
                defaultValue={EduBack}
                setValue={setEduBack}
              />
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
              <FormSelect 
                title="星座"
                json={ProfileDB.Zodiac}
                defaultValue={Zodiac}
                setValue={setZodiac}
              />
            </li>
            <li>
              <FormSelect 
                title="交際状況"
                json={ProfileDB.MarriageStatus}
                defaultValue={MarriageStatus}
                setValue={setMarriageStatus}
              />
            </li>
            <li>
              <FormSelect 
                title="子供"
                json={ProfileDB.Kids}
                defaultValue={Kids}
                setValue={setKids}
              />
            </li>
            <li>
              <FormSelect 
                title="タバコ"
                json={ProfileDB.Tabacco}
                defaultValue={Tabacco}
                setValue={setTabacco}
              />
            </li>
            <li>
              <FormSelect 
                title="お酒"
                json={ProfileDB.Alchole}
                defaultValue={Alchole}
                setValue={setAlchole}
              />
            </li>
            <li>
              <FormSelect 
                title="車"
                json={ProfileDB.Car}
                defaultValue={Car}
                setValue={setCar}
              />
            </li>
            <li>
              {/* 別のリストにして、複数選択・検索できるようにする */}
              <FormSelect 
                title="興味あること"
                json={ProfileDB.Interest}
                defaultValue={Interest}
                setValue={setInterest}
              />
            </li>
            <li>
              <FormTextInput 
                title="メッセージ"
                type="text"
                defaultValue={ProfileMessage}
                setValue={setProfileMessage}
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
                Range1={PreferedAge1}
                setRange1={setPreferedAge1}
                Range2={PreferedAge2}
                setRange2={setPreferedAge2}
              />
            </li>
            <li>
              {/* 別のリストにして、複数選択・検索できるようにする。Personalityと共通 */}
              <FormSelect 
                title="希望する性格"
                json={ProfileDB.Personality}
                defaultValue={PreferedPersonality}
                setValue={setPreferedPersonality}
              />
            </li>
            <li>
              {/* 別のリストにして、複数選択・検索できるようにする。 */}
              <FormSelect 
                title="性格"
                json={ProfileDB.Personality}
                defaultValue={Personality}
                setValue={setPersonality}
              />
            </li>
            <li>
              自己評価<br />
            </li>
            <li>
              {/* 星で表現したい。 */}
              <FormSelect 
                title="可愛さ"
                json={ProfileDB.Self}
                defaultValue={SelfCute}
                setValue={setSelfCute}
              />
            </li>
            <li>
              {/* 星で表現したい。 */}
              <FormSelect 
                title="セクシーさ"
                json={ProfileDB.Self}
                defaultValue={SelfSexy}
                setValue={setSelfSexy}
              />
            </li>
            <li>
              {/* 星で表現したい。 */}
              <FormSelect 
                title="優しさ"
                json={ProfileDB.Self}
                defaultValue={SelfKindness}
                setValue={setSelfKindness}
              />
            </li>
            <li>
              {/* 星で表現したい。 */}
              <FormSelect 
                title="賢さ"
                json={ProfileDB.Self}
                defaultValue={SelfSmartness}
                setValue={setSelfSmartness}
              />
            </li>
            <li>
              {/* 星で表現したい。 */}
              <FormSelect 
                title="清楚さ"
                json={ProfileDB.Self}
                defaultValue={SelfNeatness}
                setValue={setSelfNeatness}
              />
            </li>
            <li>
              {/* 星で表現したい。 */}
              <FormSelect 
                title="ファッション"
                json={ProfileDB.Self}
                defaultValue={SelfFashionable}
                setValue={setSelfFashionable}
              />
            </li>
            <li>
              {/* 星で表現したい。 */}
              <FormSelect 
                title="明るさ"
                json={ProfileDB.Self}
                defaultValue={SelfBrightness}
                setValue={setSelfBrightness}
              />
            </li>
            <li>
              {/* 星で表現したい。 */}
              <FormSelect 
                title="エレガンス"
                json={ProfileDB.Self}
                defaultValue={SelfElegance}
                setValue={setSelfElegance}
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
