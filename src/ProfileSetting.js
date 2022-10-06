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
import FormTextInput1 from "./FormTextInput1";
// import FormSelectRange from "./FormSelectRange";
import FormSelect1 from "./FormSelect1";
// import SelectProfileValue from "./SelectProfileValue";

export function ProfileSetting() {
  //  各ステータスのdefaultにすでに設定された値を入れたい。
  const [PS, setPS] = useState({});
  const [initialized, setinitialized] = useState(false);

  // const [BasicProfile, setBasicProfile] = useState([]);
  // // const [Profile, setProfile] = useState([]);
  // // 基本状況
  // const [Nickname, setNickname] = useState("0");
  // const [Gender, setGender] = useState("0");
  // const [Age, setAge] = useState("0");
  // // // 地域状況
  // const [SettingArea, setSettingArea] = useState("10000000");
  // const [SettingBirthArea, setSettingBirthArea] = useState("10000000");
  // // // 身体的情報
  // const [Height, setHeight] = useState("0");
  // const [Style, setStyle] = useState("0");
  // const [Looks, setLooks] = useState("0");
  // const [Cup, setCup] = useState("0");
  // const [BustSize, setBustSize] = useState("0");
  // const [WestSize, setWestSize] = useState("0");
  // const [HipSize, setHipSize] = useState("0");
  // const [BloodType, setBloodType] = useState("0");
  // // // 経験・背景情報
  // const [Job, setJob] = useState("0");
  // const [EduBack, setEduBack] = useState("0");
  // const [Zodiac, setZodiac] = useState("0");
  // // // 交際情報
  // const [MarriageStatus, setMarriageStatus] = useState("0");
  // const [Kids, setKids] = useState("0");
  // // // 趣味・嗜好
  // const [Tabacco, setTabacco] = useState("0");
  // const [Alchole, setAlchole] = useState("0");
  // const [Car, setCar] = useState("0");
  // const [Interest, setInterest] = useState("0");
  // // // その他
  // // // const [ProfilePicture, setProfilePicture] = useState("");
  // const [ProfileMessage, setProfileMessage] = useState("");
  // // // 相手に求めること
  // // const [PreferedAge1, setPreferedAge1] = useState("0");
  // // const [PreferedAge2, setPreferedAge2] = useState("0");
  // // const [PreferedPersonality, setPreferedPersonality] = useState("0");
  // // // 内面的情報
  // const [Personality, setPersonality] = useState("0");
  // const [AnnuIncome, setAnnuIncome] = useState("0");
  // // // 自己評価
  // const [Cute, setCute] = useState("0");
  // const [Sexy, setSexy] = useState("0");
  // const [Kindness, setKindness] = useState("0");
  // const [Smartness, setSmartness] = useState("0");
  // const [Neatness, setNeatness] = useState("0");
  // const [Fashionable, setFashionable] = useState("0");
  // const [Brightness, setBrightness] = useState("0");
  // const [Elegance, setElegance] = useState("0");

  let auth = useAuth();
  let navigate = useNavigate();

  const initialRequestOptions ={
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({"UUID":auth.user})
  }
  
  // const AppendRequestBody = (s, keyName, keyState) => {
  //   if (keyState !== "0") {
  //     s["\"" + keyName + "0\""] = "\"" + 0 + "\""
  //     s["\"" + keyName + keyState + "\""] = "\"" + 1 + "\""
  //   }
  //   return s
  // }
  
  // ページが読み込まれる時に実行し、Profileとして登録する。
  if (initialized===false) {
    // let JsonData = {}
    fetch("../../get_profile1.php",initialRequestOptions)
    .then((response) => response.json())
    .then(result => {
      // console.log(result)
      setPS(JSON.parse(result[0]))
      // JsonData =JSON.parse(result[0])
      // setBasicProfile(JsonData)
      // setNickname(JsonData.NickName)
      // setGender(SelectProfileValue("Gender", ProfileDB.Gender, JsonData))
      // setAge(JsonData.Age)
      // setSettingArea(String(JsonData.Area))
      // setSettingBirthArea(String(JsonData.BirthArea))
      // setHeight(SelectProfileValue("Height", ProfileDB.Height, JsonData))
      // setStyle(SelectProfileValue("Style", ProfileDB.Style, JsonData))
      // setLooks(SelectProfileValue("Looks", ProfileDB.Looks, JsonData))
      // setCup(SelectProfileValue("Cup", ProfileDB.Cup, JsonData))
      // setBustSize(JsonData.BustSize)
      // setWestSize(JsonData.WestSize)
      // setHipSize(JsonData.HipSize)
      // setBloodType(SelectProfileValue("BloodType", ProfileDB.BloodType, JsonData))
      // setJob(SelectProfileValue("Job", ProfileDB.Job, JsonData))
      // setEduBack(SelectProfileValue("EduBack", ProfileDB.EduBack, JsonData))
      // setZodiac(SelectProfileValue("Zodiac", ProfileDB.Zodiac, JsonData))
      // setMarriageStatus(SelectProfileValue("MarriageStatus", ProfileDB.MarriageStatus, JsonData))
      // setKids(SelectProfileValue("Kids", ProfileDB.Kids, JsonData))
      // setTabacco(SelectProfileValue("Tabacco", ProfileDB.Tabacco, JsonData))
      // setAlchole(SelectProfileValue("Alchole", ProfileDB.Alchole, JsonData))
      // setCar(SelectProfileValue("Car", ProfileDB.Car, JsonData))
      // setInterest(SelectProfileValue("Interest", ProfileDB.Interest, JsonData))
      // setProfileMessage(JsonData.ProfileMessage)
      // //どうやって複数選択するか？表示が問題
      // setPersonality(SelectProfileValue("Personality", ProfileDB.Personality, JsonData))
      // setAnnuIncome(SelectProfileValue("AnnuIncome", ProfileDB.AnnuIncome, JsonData))
      // setCute(SelectProfileValue("Cute", ProfileDB.Self, JsonData))
      // setSexy(SelectProfileValue("Sexy", ProfileDB.Self, JsonData))
      // setKindness(SelectProfileValue("Kindness", ProfileDB.Self, JsonData))
      // setSmartness(SelectProfileValue("Smartness", ProfileDB.Self, JsonData))
      // setNeatness(SelectProfileValue("Neatness", ProfileDB.Self, JsonData))
      // setFashionable(SelectProfileValue("Fashionable", ProfileDB.Self, JsonData))
      // setBrightness(SelectProfileValue("Brightness", ProfileDB.Self, JsonData))
      // setElegance(SelectProfileValue("Elegance", ProfileDB.Self, JsonData))
    })

    setinitialized(true)
  }

  // 入力値に問題があれば遷移しない。問題なければ遷移する
  const submit = e => {
    e.preventDefault();

    let s = {}
    s["\"UUID\""] = "\"" + auth.user + "\""
    Object.keys(PS).map(key => s["\"" + key + "\""] = "\"" + PS[key] + "\"")

    // s["\"NickName\""] = "\"" + Nickname + "\""
    // s["\"Age\""] = "\"" + Age + "\""
    // s["\"RegistrationStatus1\""] = "\"" + 1 + "\""
    // AppendRequestBody(s, "Gender", Gender)
    // s["\"Area\""] = "\"" + SettingArea + "\""
    // s["\"BirthArea\""] = "\"" + SettingBirthArea + "\""
    // AppendRequestBody(s, "Height", Height)
    // AppendRequestBody(s, "Style", Style)
    // AppendRequestBody(s, "Looks", Looks)
    // AppendRequestBody(s, "Cup", Cup)
    // s["\"BustSize\""] = "\"" + BustSize + "\""
    // s["\"WestSize\""] = "\"" + WestSize + "\""
    // s["\"HipSize\""] = "\"" + HipSize + "\""
    // AppendRequestBody(s, "BloodType", BloodType)
    // AppendRequestBody(s, "Job", Job)
    // AppendRequestBody(s, "EduBack", EduBack)
    // AppendRequestBody(s, "Zodiac", Zodiac)
    // AppendRequestBody(s, "MarriageStatus", MarriageStatus)
    // AppendRequestBody(s, "Kids", Kids)
    // AppendRequestBody(s, "Tabacco", Tabacco)
    // AppendRequestBody(s, "Alchole", Alchole)
    // AppendRequestBody(s, "Car", Car)
    // // s["\"Interest" + Interest + "\""] = "\"" + 1 + "\""
    // s["\"ProfileMessage\""] = "\"" + ProfileMessage + "\""
    // // s["\"Personality" + Personality + "\""] = "\"" + 1 + "\""
    // AppendRequestBody(s, "Cute", Cute)
    // AppendRequestBody(s, "Sexy", Sexy)
    // AppendRequestBody(s, "Kindness", Kindness)
    // AppendRequestBody(s, "Smartness", Smartness)
    // AppendRequestBody(s, "Neatness", Neatness)
    // AppendRequestBody(s, "Fashionable", Fashionable)
    // AppendRequestBody(s, "Brightness", Brightness)
    // AppendRequestBody(s, "Elegance", Elegance)

    const requestOptions1 ={
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify(s)
    }

    fetch("../../update_profile.php",requestOptions1)
    .then((response)=> response.json())
    .then(result =>{
      console.log(result)
      if (result[0]==="UPS") {
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

  // function PrefectureSelect() {
  //   if (SettingArea !== "10000000") {
  //     return (
  //       <>
  //         <select
  //           defaultValue={SettingArea.slice(0,4)+"0000"}
  //           onChange={event => {
  //             setSettingArea(event.target.value)
  //           }}>
  //             {Object.keys(AreaDB.Area[SettingArea.slice(0,2)+"000000"]["Prefecture"]).map(key => 
  //               <option value={key}>
  //                 {AreaDB.Area[SettingArea.slice(0,2)+"000000"]["Prefecture"][key]["PrefectureName"]}
  //               </option>
  //             )}
  //         </select>
  //         <CitySelect/>
  //       </>
  //     )
  //   } else {
  //     return <></>
  //   }
  // }

  // function CitySelect() {
  //   if (SettingArea.slice(2,8) !== "000000") {
  //     return (
  //       <>
  //         <select
  //           defaultValue={SettingArea.slice(0,6)+"00"}
  //           onChange={event => {
  //             setSettingArea(event.target.value)
  //           }}>
  //             {Object.keys(AreaDB.Area[SettingArea.slice(0,2)+"000000"]["Prefecture"][SettingArea.slice(0,4)+"0000"]["City"]).map(key => 
  //               <option value={key}>
  //                 {AreaDB.Area[SettingArea.slice(0,2)+"000000"]["Prefecture"][SettingArea.slice(0,4)+"0000"]["City"][key]["CityName"] === undefined ? (
  //                   AreaDB.Area[SettingArea.slice(0,2)+"000000"]["Prefecture"][SettingArea.slice(0,4)+"0000"]["City"][key]
  //                 ) : (
  //                   AreaDB.Area[SettingArea.slice(0,2)+"000000"]["Prefecture"][SettingArea.slice(0,4)+"0000"]["City"][key]["CityName"]
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
  //   if (SettingArea.slice(4,8) !== "0000") {
  //     if (AreaDB.Area[SettingArea.slice(0,2)+"000000"]["Prefecture"][SettingArea.slice(0,4)+"0000"]["City"][SettingArea.slice(0,6)+"00"]["CityName"] === undefined) {
  //       return <></>
  //     } else {
  //       return (
  //         <select
  //           defaultValue={SettingArea}
  //           onChange={event => {
  //             setSettingArea(event.target.value)
  //           }}>
  //             {Object.keys(AreaDB.Area[SettingArea.slice(0,2)+"000000"]["Prefecture"][SettingArea.slice(0,4)+"0000"]["City"][SettingArea.slice(0,6)+"00"]["Ward"]).map(key => 
  //               <option value={key}>
  //                 {AreaDB.Area[SettingArea.slice(0,2)+"000000"]["Prefecture"][SettingArea.slice(0,4)+"0000"]["City"][SettingArea.slice(0,6)+"00"]["Ward"][key]}
  //               </option>
  //             )}
  //         </select>
  //       )
  //     }
  //   } else {
  //     return <></>
  //   }
  // }

  // function BirthPrefectureSelect() {
  //   if (SettingBirthArea !== "10000000") {
  //     return (
  //       <>
  //         <select
  //           defaultValue={SettingBirthArea.slice(0,4)+"0000"}
  //           onChange={event => {
  //             setSettingBirthArea(event.target.value)
  //           }}>
  //             {Object.keys(AreaDB.Area[SettingBirthArea.slice(0,2)+"000000"]["Prefecture"]).map(key => 
  //               <option value={key}>
  //                 {AreaDB.Area[SettingBirthArea.slice(0,2)+"000000"]["Prefecture"][key]["PrefectureName"]}
  //               </option>
  //             )}
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

  console.log(Object.keys(PS).length)
  if (Object.keys(PS).length === 0) {
    console.log(PS)
    return <></>
  } else {
    console.log(PS)
    return (
      <div>
      <h1>プロフィール設定</h1>
        <form onSubmit={e => submit(e)}>
          <ul>
            <li>
              <FormTextInput1 
                title="ニックネーム"
                type="text"
                keyText="NickName"
                defaultValue={PS}
                setValue={setPS}
                required="true"
              />
            </li>
            <li>
              <FormSelect1
                title="性別"
                keyText="Gender"
                keyValue={ProfileDB.Gender}
                defaultValue={PS}
                setValue={setPS}
              />
            </li>
            <li>
              <FormTextInput1
                title="年齢"
                type="number"
                keyText="Age"
                defaultValue={PS}
                setValue={setPS}
                required="true"
              />
            </li>
            {/* <li>
            <span className="dan">エリア</span>
            <span className="dan2">
              <select
                defaultValue={SettingArea.slice(0,2)+"000000"}
                onChange={event => {
                  setSettingArea(event.target.value)
                }}>
                  {Object.keys(AreaDB.Area).map(key => <option value={key}>{AreaDB.Area[key]["AreaName"]}</option>)}
              </select>
              <PrefectureSelect/>
            </span>
            </li> */}
            <li>
              <FormSelect1
                title="身長"
                keyText="Height"
                keyValue={ProfileDB.Height}
                defaultValue={PS}
                setValue={setPS}
              />
            </li>
            <li>
              <FormSelect1
                title="スタイル"
                keyText="Style"
                keyValue={ProfileDB.Style}
                defaultValue={PS}
                setValue={setPS}
              />
            </li>
            <li>
              <FormSelect1
                title="ルックス"
                keyText="Looks"
                keyValue={ProfileDB.Looks}
                defaultValue={PS}
                setValue={setPS}
              />
            </li>
            <li>
              <FormSelect1
                title="カップ"
                keyText="Cup"
                keyValue={ProfileDB.Cup}
                defaultValue={PS}
                setValue={setPS}
              />
            </li>
            <li>
              <FormTextInput1
                title="バスト"
                type="number"
                keyText="BustSize"
                defaultValue={PS}
                setValue={setPS}
                required="false"
              />
            </li>
            <li>
              <FormTextInput1
                title="ウエスト"
                type="number"
                keyText="WestSize"
                defaultValue={PS}
                setValue={setPS}
                required="false"
              />
            </li>
            <li>
              <FormTextInput1
                title="ヒップ"
                type="number"
                keyText="HipSize"
                defaultValue={PS}
                setValue={setPS}
                required="false"
              />
            </li>
            <li>
              <FormSelect1
                title="血液型"
                keyText="BloodType"
                keyValue={ProfileDB.BloodType}
                defaultValue={PS}
                setValue={setPS}
              />
            </li>
            <li>
              <FormSelect1
                title="職業"
                keyText="Job"
                keyValue={ProfileDB.Job}
                defaultValue={PS}
                setValue={setPS}
              />
            </li>
            <li>
              <FormSelect1
                title="学歴"
                keyText="EduBack"
                keyValue={ProfileDB.EduBack}
                defaultValue={PS}
                setValue={setPS}
              />
            </li>
            {/* <li>
              <span className="dan">出身地</span>
              <span className="dan2">
                <select
                  defaultValue={SettingBirthArea.slice(0,2)+"000000"}
                  onChange={event => {
                      setSettingBirthArea(event.target.value)
                  }}>
                    {Object.keys(AreaDB.Area).map(key => <option value={key}>{AreaDB.Area[key]["AreaName"]}</option>)}
                </select>
                <BirthPrefectureSelect/>
              </span>
            </li> */}
            <li>
              <FormSelect1
                title="星座"
                keyText="Zodiac"
                keyValue={ProfileDB.Zodiac}
                defaultValue={PS}
                setValue={setPS}
              />
            </li>
            <li>
              <FormSelect1
                title="交際状況"
                keyText="MarriageStatus"
                keyValue={ProfileDB.MarriageStatus}
                defaultValue={PS}
                setValue={setPS}
              />
            </li>
            <li>
              <FormSelect1
                title="子供"
                keyText="Kids"
                keyValue={ProfileDB.Kids}
                defaultValue={PS}
                setValue={setPS}
              />
            </li>
            <li>
              <FormSelect1
                title="タバコ"
                keyText="Tabacco"
                keyValue={ProfileDB.Tabacco}
                defaultValue={PS}
                setValue={setPS}
              />
            </li>
            <li>
              <FormSelect1
                title="お酒"
                keyText="Alchole"
                keyValue={ProfileDB.Alchole}
                defaultValue={PS}
                setValue={setPS}
              />
            </li>
            <li>
              <FormSelect1
                title="車"
                keyText="Car"
                keyValue={ProfileDB.Car}
                defaultValue={PS}
                setValue={setPS}
              />
            </li>
            <li>
              {/* 別のリストにして、複数選択・検索できるようにする */}
              <FormSelect1
                title="興味あること"
                keyText="Interest"
                keyValue={ProfileDB.Interest}
                defaultValue={PS}
                setValue={setPS}
              />
            </li>
            <li>
              <FormTextInput1
                title="メッセージ"
                type="text"
                keyText="ProfileMessage"
                defaultValue={PS}
                setValue={setPS}
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
              <FormSelect1
                title="性格"
                keyText="Personality"
                keyValue={ProfileDB.Personality}
                defaultValue={PS}
                setValue={setPS}
              />
            </li>
            <li>
              <FormSelect1
                title="年収"
                keyText="AnnuIncome"
                keyValue={ProfileDB.AnnuIncome}
                defaultValue={PS}
                setValue={setPS}
              />
            </li>
            <li>
              自己評価<br />
            </li>
            <li>
              {/* 星で表現したい。 */}
              <FormSelect1
                title="可愛さ"
                keyText="Cute"
                keyValue={ProfileDB.Self}
                defaultValue={PS}
                setValue={setPS}
              />
            </li>
            <li>
              {/* 星で表現したい。 */}
              <FormSelect1
                title="セクシーさ"
                keyText="Sexy"
                keyValue={ProfileDB.Self}
                defaultValue={PS}
                setValue={setPS}
              />
            </li>
            <li>
              {/* 星で表現したい。 */}
              <FormSelect1
                title="優しさ"
                keyText="Kindness"
                keyValue={ProfileDB.Self}
                defaultValue={PS}
                setValue={setPS}
              />
            </li>
            <li>
              {/* 星で表現したい。 */}
              <FormSelect1
                title="賢さ"
                keyText="Smartness"
                keyValue={ProfileDB.Self}
                defaultValue={PS}
                setValue={setPS}
              />
            </li>
            <li>
              {/* 星で表現したい。 */}
              <FormSelect1
                title="清楚さ"
                keyText="Neatness"
                keyValue={ProfileDB.Self}
                defaultValue={PS}
                setValue={setPS}
              />
            </li>
            <li>
              {/* 星で表現したい。 */}
              <FormSelect1
                title="ファッション"
                keyText="Fashionable"
                keyValue={ProfileDB.Self}
                defaultValue={PS}
                setValue={setPS}
              />
            </li>
            <li>
              {/* 星で表現したい。 */}
              <FormSelect1
                title="明るさ"
                keyText="Brightness"
                keyValue={ProfileDB.Self}
                defaultValue={PS}
                setValue={setPS}
              />
            </li>
            <li>
              {/* 星で表現したい。 */}
              <FormSelect1
                title="エレガンス"
                keyText="Elegance"
                keyValue={ProfileDB.Self}
                defaultValue={PS}
                setValue={setPS}
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
