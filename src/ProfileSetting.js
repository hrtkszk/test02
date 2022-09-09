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
// import AreaDB from "./Area.json";
import FormTextInput from "./FormTextInput";
// import FormSelectRange from "./FormSelectRange";
import FormSelect from "./FormSelect";

export function ProfileSetting() {
  //  各ステータスのdefaultにすでに設定された値を入れたい。
  const [BasicProfile, setBasicProfile] = useState([]);
  // const [Profile, setProfile] = useState([]);
  // 基本状況
  const [Nickname, setNickname] = useState("0");
  const [Gender, setGender] = useState("0");
  const [Age, setAge] = useState("0");
  // // 地域状況
  // const [SettingArea, setSettingArea] = useState("0");
  // const [Area, setArea] = useState("0");
  // const [Prefecture, setPrefecture] = useState("0");
  // const [City, setCity] = useState("0");
  // const [Ward, setWard] = useState("0");
  // // 身体的情報
  const [Height, setHeight] = useState("0");
  const [Style, setStyle] = useState("0");
  const [Looks, setLooks] = useState("0");
  const [Cup, setCup] = useState("0");
  const [BustSize, setBustSize] = useState("0");
  const [WestSize, setWestSize] = useState("0");
  const [HipSize, setHipSize] = useState("0");
  const [BloodType, setBloodType] = useState("0");
  // // 経験・背景情報
  const [Job, setJob] = useState("0");
  const [EduBack, setEduBack] = useState("0");
  // const [SettingBirthArea, setSettingBirthArea] = useState("0");
  // const [BirthArea, setBirthArea] = useState("0");
  // const [BirthPrefecture, setBirthPrefecture] = useState("0");
  const [Zodiac, setZodiac] = useState("0");
  // // 交際情報
  const [MarriageStatus, setMarriageStatus] = useState("0");
  const [Kids, setKids] = useState("0");
  // // 趣味・嗜好
  const [Tabacco, setTabacco] = useState("0");
  const [Alchole, setAlchole] = useState("0");
  const [Car, setCar] = useState("0");
  const [Interest, setInterest] = useState("0");
  // // その他
  // // const [ProfilePicture, setProfilePicture] = useState("");
  const [ProfileMessage, setProfileMessage] = useState("");
  // // 相手に求めること
  // const [PreferedAge1, setPreferedAge1] = useState("0");
  // const [PreferedAge2, setPreferedAge2] = useState("0");
  // const [PreferedPersonality, setPreferedPersonality] = useState("0");
  // // 内面的情報
  const [Personality, setPersonality] = useState("0");
  const [AnnuIncome, setAnnuIncome] = useState("0");
  // // 自己評価
  const [Cute, setCute] = useState("0");
  const [Sexy, setSexy] = useState("0");
  const [Kindness, setKindness] = useState("0");
  const [Smartness, setSmartness] = useState("0");
  const [Neatness, setNeatness] = useState("0");
  const [Fashionable, setFashionable] = useState("0");
  const [Brightness, setBrightness] = useState("0");
  const [Elegance, setElegance] = useState("0");

  let auth = useAuth();

  let navigate = useNavigate();

  const [initialized, setinitialized] = useState(false);

  const initialRequestOptions ={
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({"UUID":auth.user})
  }
  
  const SelectProfileValue = (keyName, keyValue, DBValue) => {
    let str = ""
    let selection = "0"
    Object.keys(keyValue).map(key => 
        <>
            {str = keyName.concat(key)}
            {console.log(DBValue[str])}
            {DBValue[str] === 1 ? (
                selection=key
            ) : null}
        </>
    )
    return selection
  }

  // ページが読み込まれる時に実行し、Profileとして登録する。
  if (initialized===false) {
    fetch("../../get_basicprofile.php",initialRequestOptions)
    .then((response) => response.json())
    .then(result => {
      setBasicProfile(result[0])
    })

    setNickname(BasicProfile.NickName)
    setGender(SelectProfileValue("Gender", ProfileDB.Gender, BasicProfile))
    setAge(BasicProfile.Age)
    setHeight(SelectProfileValue("Height", ProfileDB.Height, BasicProfile))
    setStyle(SelectProfileValue("Style", ProfileDB.Style, BasicProfile))
    setLooks(SelectProfileValue("Looks", ProfileDB.Looks, BasicProfile))
    setCup(SelectProfileValue("Cup", ProfileDB.Cup, BasicProfile))
    setBustSize(BasicProfile.BustSize)
    setWestSize(BasicProfile.WestSize)
    setHipSize(BasicProfile.HipSize)
    setBloodType(SelectProfileValue("BloodType", ProfileDB.BloodType, BasicProfile))
    setJob(SelectProfileValue("Job", ProfileDB.Job, BasicProfile))
    setEduBack(SelectProfileValue("EduBack", ProfileDB.EduBack, BasicProfile))
    setZodiac(SelectProfileValue("Zodiac", ProfileDB.Zodiac, BasicProfile))
    setMarriageStatus(SelectProfileValue("MarriageStatus", ProfileDB.MarriageStatus, BasicProfile))
    setKids(SelectProfileValue("Kids", ProfileDB.Kids, BasicProfile))
    setTabacco(SelectProfileValue("Tabacco", ProfileDB.Tabacco, BasicProfile))
    setAlchole(SelectProfileValue("Alchole", ProfileDB.Alchole, BasicProfile))
    setCar(SelectProfileValue("Car", ProfileDB.Car, BasicProfile))
    setInterest(SelectProfileValue("Interest", ProfileDB.Interest, BasicProfile))
    setProfileMessage(BasicProfile.ProfileMessage)
    //どうやって複数選択するか？表示が問題
    setPersonality(SelectProfileValue("Personality", ProfileDB.Personality, BasicProfile))
    setAnnuIncome(SelectProfileValue("AnnuIncome", ProfileDB.AnnuIncome, BasicProfile))
    setCute(SelectProfileValue("Cute", ProfileDB.Self, BasicProfile))
    setSexy(SelectProfileValue("Sexy", ProfileDB.Self, BasicProfile))
    setKindness(SelectProfileValue("Kindness", ProfileDB.Self, BasicProfile))
    setSmartness(SelectProfileValue("Smartness", ProfileDB.Self, BasicProfile))
    setNeatness(SelectProfileValue("Neatness", ProfileDB.Self, BasicProfile))
    setFashionable(SelectProfileValue("Fashionable", ProfileDB.Self, BasicProfile))
    setBrightness(SelectProfileValue("Brightness", ProfileDB.Self, BasicProfile))
    setElegance(SelectProfileValue("Elegance", ProfileDB.Self, BasicProfile))
    // fetch("../../get_basicprofile.php",initialRequestOptions)
    // .then((response) => response.json())
    // .then(result => {
    //   setBasicProfile(result.result[0])
    //   setNickname(result.result[0].nickname)
    //   setGender(result.result[0].gender)
    //   setAge(result.result[0].age)
    // })

    // fetch("../../get_profile.php",initialRequestOptions)
    // .then((response) => response.json())
    // .then(result => {
    //   if (result.result !== "PND") {
    //     // setProfile(result.result[0])
    //     // console.log(result.result[0])
    //     setSettingArea(result.result[0].SettingArea)
    //     setArea(result.result[0].Area)
    //     setPrefecture(result.result[0].Prefecture)
    //     setCity(result.result[0].City)
    //     setWard(result.result[0].Ward)
    //     setHeight(result.result[0].Height)
    //     setStyle(result.result[0].Style)
    //     setLooks(result.result[0].Looks)
    //     setCup(result.result[0].Cup)
    //     setBustSize(result.result[0].BustSize)
    //     setWestSize(result.result[0].WestSize)
    //     setHipSize(result.result[0].HipSize)
    //     setBloodType(result.result[0].BloodType)
    //     setJob(result.result[0].Job)
    //     setEduBack(result.result[0].EduBack)
    //     setSettingBirthArea(result.result[0].SettingBirthArea)
    //     setBirthArea(result.result[0].BirthArea)
    //     setBirthPrefecture(result.result[0].BirthPrefecture)
    //     setZodiac(result.result[0].Zodiac)
    //     setMarriageStatus(result.result[0].MarriageStatus)
    //     setKids(result.result[0].Kids)
    //     setTabacco(result.result[0].Tabacco)
    //     setAlchole(result.result[0].Alchole)
    //     setCar(result.result[0].Car)
    //     setInterest(result.result[0].Interest)
    //     // setProfilePicture(result.result[0].ProfilePicture)
    //     setProfileMessage(result.result[0].ProfileMessage)
    //     setPreferedAge1(result.result[0].PreferedAge1)
    //     setPreferedAge2(result.result[0].PreferedAge2)
    //     setPreferedPersonality(result.result[0].PreferedPersonality)
    //     setPersonality(result.result[0].Personality)
    //     setSelfCute(result.result[0].SelfCute)
    //     setSelfSexy(result.result[0].SelfSexy)
    //     setSelfKindness(result.result[0].SelfKindness)
    //     setSelfSmartness(result.result[0].SelfSmartness)
    //     setSelfNeatness(result.result[0].SelfNeatness)
    //     setSelfFashionable(result.result[0].SelfFashionable)
    //     setSelfBrightness(result.result[0].SelfBrightness)
    //     setSelfElegance(result.result[0].SelfElegance)
    //   }
    // })
    setinitialized(true)
  }

  // 入力値に問題があれば遷移しない。問題なければ遷移する
  const submit = e => {
    e.preventDefault();

    let s = {
      "UUID":auth.user
    }
    s["NickName"] = Nickname
    s["Gender" + Gender] = 1
    s["Age"] = Age
    s["Height" + Height] = 1
    s["Style" + Style] = 1
    s["Looks" + Looks] = 1
    s["Cup" + Cup] = 1
    s["BustSize"] = BustSize
    s["WestSize"] = WestSize
    s["HipSize"] = HipSize
    s["BloodType" + BloodType] = 1
    s["Job" + Job] = 1
    s["EduBack" + EduBack] = 1
    s["Zodiac" + Zodiac] = 1
    s["MarriageStatus" + MarriageStatus] = 1
    s["Kids" + Kids] = 1
    s["Tabacco" + Tabacco] = 1
    s["Alchole" + Alchole] = 1
    s["Car" + Car] = 1
    // s["Interest" + Interest] = 1
    s["ProfileMessage"] = ProfileMessage
    // s["Personality" + Personality] = 1
    s["Cute" + Cute] = 1
    s["Sexy" + Sexy] = 1
    s["Kindness" + Kindness] = 1
    s["Smartness" + Smartness] = 1
    s["Neatness" + Neatness] = 1
    s["Fashionable" + Fashionable] = 1
    s["Brightness" + Brightness] = 1
    s["Elegance" + Elegance] = 1

    const requestOptions1 ={
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify(s)
      // body: JSON.stringify({
      //   "UUID":auth.user,

      //   "NickName":Nickname,
      //   "Gender":Gender,
      //   "Age":Age,

      //   // "SettingArea":SettingArea,
      //   // "Area":Area,
      //   // "Prefecture":Prefecture,
      //   // "City":City,
      //   // "Ward":Ward,
      //   "Height":Height,
      //   "Style":Style,
      //   "Looks":Looks,
      //   "Cup":Cup,
      //   "BustSize":BustSize,
      //   "WestSize":WestSize,
      //   "HipSize":HipSize,
      //   "BloodType":BloodType,

      //   "Job":Job,
      //   "EduBack":EduBack,
      //   // "SettingBirthArea":SettingBirthArea,
      //   // "BirthArea":BirthArea,
      //   // "BirthPrefecture":BirthPrefecture,
      //   "Zodiac":Zodiac,

      //   "MarriageStatus":MarriageStatus,
      //   "Kids":Kids,

      //   "Tabacco":Tabacco,
      //   "Alchole":Alchole,
      //   "Car":Car,
      //   "Interest":Interest,

      //   // "ProfilePicture":ProfilePicture,
      //   "ProfileMessage":ProfileMessage,

      //   // "PreferedAge1":PreferedAge1,
      //   // "PreferedAge2":PreferedAge2,
      //   // "PreferedPersonality":PreferedPersonality,

      //   "Personality":Personality,

      //   "SelfCute":Cute,
      //   "SelfSexy":Sexy,
      //   "SelfKindness":Kindness,
      //   "SelfSmartness":Smartness,
      //   "SelfNeatness":Neatness,
      //   "SelfFashionable":Fashionable,
      //   "SelfBrightness":Brightness,
      //   "SelfElegance":Elegance
      // })
    }

    fetch("../../update_profile.php",requestOptions1)
    .then((response)=> response.json())
    .then(result =>{
      console.log(result)
      // if (result.result[0]==="UPS") {
        // プロフィール変更成功。リダイレクト
        auth.setMessage("プロフィールを変更しました")
        navigate("../ProfileDetail")
      // } else {
      //   // プロフィール変更失敗。(UUIDが合致しない)再表示。
      //   auth.setMessage("プロフィールを変更できませんでした")
      //   navigate("../ProfileDetail")
      // }
    })
  }

  // function PrefectureSelect() {
  //   if (Area !== "0") {
  //     return (
  //       <>
  //         <select
  //           defaultValue={Prefecture}
  //           onChange={event => {
  //             if (event.target.value === "0") {
  //               setSettingArea(Area)
  //               setPrefecture("0")
  //               setCity("0")
  //               setWard("0")
  //             } else {
  //               setSettingArea(event.target.value)
  //               setPrefecture(event.target.value)
  //               setCity("0")
  //               setWard("0")
  //             }
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
  //       <>
  //         <select
  //           defaultValue={City}
  //           onChange={event => {
  //             if (event.target.value === "0") {
  //               setSettingArea(Prefecture)
  //               setCity("0")
  //               setWard("0")
  //             } else {
  //               setSettingArea(event.target.value)
  //               setCity(event.target.value)
  //               setWard("0")
  //             }
  //           }}>
  //             {Object.keys(AreaDB.Area[Area]["Prefecture"][Prefecture]["City"]).map(key => 
  //               <option value={key}>
  //                 {AreaDB.Area[Area]["Prefecture"][Prefecture]["City"][key]["CityName"] === undefined ? (
  //                   AreaDB.Area[Area]["Prefecture"][Prefecture]["City"][key]
  //                 ) : (
  //                   AreaDB.Area[Area]["Prefecture"][Prefecture]["City"][key]["CityName"]
  //                 )}
  //               </option>
  //             )}
  //         </select>
  //         <WardSelect />
  //       </>
  //     )
  //   } else {
  //     return <></>
  //   }
  // }

  // function WardSelect() {
  //   if (City !== "0") {
  //     if (AreaDB.Area[Area]["Prefecture"][Prefecture]["City"][City]["CityName"] === undefined) {
  //       return <></>
  //     } else {
  //       return (
  //         <select
  //           defaultValue={Ward}
  //           onChange={evt => {
  //             if (evt.target.value === "0") {
  //               setSettingArea(City)
  //               setWard("0")
  //             } else {
  //               setSettingArea(evt.target.value)
  //               setWard(evt.target.value)
  //             }
  //           }}>
  //             {Object.keys(AreaDB.Area[Area]["Prefecture"][Prefecture]["City"][City]["Ward"]).map(key => <option value={key}>{AreaDB.Area[Area]["Prefecture"][Prefecture]["City"][City]["Ward"][key]}</option>)}
  //         </select>
  //       )
  //     }
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
  //           onChange={event => {
  //             if (event.target.value === "0") {
  //               setSettingBirthArea(BirthArea)
  //               setBirthPrefecture("0")
  //             } else {
  //               setSettingBirthArea(event.target.value)
  //               setBirthPrefecture(event.target.value)
  //             }
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


  // if (BasicProfile.length === 0) {
  //   return <></>
  // } else {
    return (
      <div>
      <h1>プロフィール設定</h1>
        <form onSubmit={e => submit(e)}>
          <ul>
            <li>
              <FormTextInput 
                title="ニックネーム"
                type="text"
                defaultValue={Nickname}
                setValue={setNickname}
                required="true"
              />
            </li>
            <li>
              <FormSelect
                title="性別"
                keyValue={ProfileDB.Gender}
                defaultValue={Gender}
                setValue={setGender}
              />
            </li>
            <li>
              <FormTextInput 
                title="年齢"
                type="number"
                defaultValue={Age}
                setValue={setAge}
                required="true"
              />
            </li>
            {/* <li>
            <span className="dan">エリア</span>
            <span className="dan2">
              <select
                defaultValue={Area}
                onChange={event => {
                  setSettingArea(event.target.value)
                  setArea(event.target.value)
                  setPrefecture("0")
                  setCity("0")
                  setWard("0")
                }}>
                  {Object.keys(AreaDB.Area).map(key => <option value={key}>{AreaDB.Area[key]["AreaName"]}</option>)}
              </select>
              <PrefectureSelect/>
            </span>
            </li> */}
            <li>
              <FormSelect
                title="身長"
                keyValue={ProfileDB.Height}
                defaultValue={Height}
                setValue={setHeight}
              />
            </li>
            <li>
              <FormSelect
                title="スタイル"
                keyValue={ProfileDB.Style}
                defaultValue={Style}
                setValue={setStyle}
              />
            </li>
            <li>
              <FormSelect
                title="ルックス"
                keyValue={ProfileDB.Looks}
                defaultValue={Looks}
                setValue={setLooks}
              />
            </li>
            <li>
              <FormSelect
                title="カップ"
                keyValue={ProfileDB.Cup}
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
                required="false"
              />
            </li>
            <li>
              <FormTextInput 
                title="ウエスト"
                type="number"
                defaultValue={WestSize}
                setValue={setWestSize}
                required="false"
              />
            </li>
            <li>
              <FormTextInput 
                title="ヒップ"
                type="number"
                defaultValue={HipSize}
                setValue={setHipSize}
                required="false"
              />
            </li>
            <li>
              <FormSelect
                title="血液型"
                keyValue={ProfileDB.BloodType}
                defaultValue={BloodType}
                setValue={setBloodType}
              />
            </li>
            <li>
              <FormSelect
                title="職業"
                keyValue={ProfileDB.Job}
                defaultValue={Job}
                setValue={setJob}
              />
            </li>
            <li>
              <FormSelect
                title="学歴"
                keyValue={ProfileDB.EduBack}
                defaultValue={EduBack}
                setValue={setEduBack}
              />
            </li>
            {/* <li>
              <span className="dan">出身地</span>
              <span className="dan2">
                <select
                  defaultValue={BirthArea}
                  onChange={event => {
                      setSettingBirthArea(event.target.value)
                      setBirthArea(event.target.value)
                      setBirthPrefecture("0")
                  }}>
                    {Object.keys(AreaDB.Area).map(key => <option value={key}>{AreaDB.Area[key]["AreaName"]}</option>)}
                </select>
                <BirthPrefectureSelect/>
              </span>
            </li> */}
            <li>
              <FormSelect
                title="星座"
                keyValue={ProfileDB.Zodiac}
                defaultValue={Zodiac}
                setValue={setZodiac}
              />
            </li>
            <li>
              <FormSelect
                title="交際状況"
                keyValue={ProfileDB.MarriageStatus}
                defaultValue={MarriageStatus}
                setValue={setMarriageStatus}
              />
            </li>
            <li>
              <FormSelect
                title="子供"
                keyValue={ProfileDB.Kids}
                defaultValue={Kids}
                setValue={setKids}
              />
            </li>
            <li>
              <FormSelect
                title="タバコ"
                keyValue={ProfileDB.Tabacco}
                defaultValue={Tabacco}
                setValue={setTabacco}
              />
            </li>
            <li>
              <FormSelect
                title="お酒"
                keyValue={ProfileDB.Alchole}
                defaultValue={Alchole}
                setValue={setAlchole}
              />
            </li>
            <li>
              <FormSelect
                title="車"
                keyValue={ProfileDB.Car}
                defaultValue={Car}
                setValue={setCar}
              />
            </li>
            <li>
              {/* 別のリストにして、複数選択・検索できるようにする */}
              <FormSelect
                title="興味あること"
                keyValue={ProfileDB.Interest}
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
            
            {/* <li>
              <FormSelectRange
                title="希望する年齢" 
                originalRange={ProfileDB.PreferedAge}
                Range1={PreferedAge1}
                setRange1={setPreferedAge1}
                Range2={PreferedAge2}
                setRange2={setPreferedAge2}
              />
            </li> */}
            {/* <li> */}
              {/* 別のリストにして、複数選択・検索できるようにする。Personalityと共通 */}
              {/* <FormSelect 
                title="希望する性格"
                keyValue={ProfileDB.Personality}
                defaultValue={PreferedPersonality}
                setValue={setPreferedPersonality}
              /> */}
            {/* </li> */}
            <li>
              {/* 別のリストにして、複数選択・検索できるようにする。 */}
              <FormSelect 
                title="性格"
                keyValue={ProfileDB.Personality}
                defaultValue={Personality}
                setValue={setPersonality}
              />
            </li>
            <li>
              <FormSelect 
                title="年収"
                keyValue={ProfileDB.AnnuIncome}
                defaultValue={AnnuIncome}
                setValue={setAnnuIncome}
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
                defaultValue={Cute}
                setValue={setCute}
              />
            </li>
            <li>
              {/* 星で表現したい。 */}
              <FormSelect 
                title="セクシーさ"
                keyValue={ProfileDB.Self}
                defaultValue={Sexy}
                setValue={setSexy}
              />
            </li>
            <li>
              {/* 星で表現したい。 */}
              <FormSelect 
                title="優しさ"
                keyValue={ProfileDB.Self}
                defaultValue={Kindness}
                setValue={setKindness}
              />
            </li>
            <li>
              {/* 星で表現したい。 */}
              <FormSelect 
                title="賢さ"
                keyValue={ProfileDB.Self}
                defaultValue={Smartness}
                setValue={setSmartness}
              />
            </li>
            <li>
              {/* 星で表現したい。 */}
              <FormSelect 
                title="清楚さ"
                keyValue={ProfileDB.Self}
                defaultValue={Neatness}
                setValue={setNeatness}
              />
            </li>
            <li>
              {/* 星で表現したい。 */}
              <FormSelect 
                title="ファッション"
                keyValue={ProfileDB.Self}
                defaultValue={Fashionable}
                setValue={setFashionable}
              />
            </li>
            <li>
              {/* 星で表現したい。 */}
              <FormSelect 
                title="明るさ"
                keyValue={ProfileDB.Self}
                defaultValue={Brightness}
                setValue={setBrightness}
              />
            </li>
            <li>
              {/* 星で表現したい。 */}
              <FormSelect 
                title="エレガンス"
                keyValue={ProfileDB.Self}
                defaultValue={Elegance}
                setValue={setElegance}
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
// }
