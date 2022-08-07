import * as React from "react";
import {
  Link,
//   // Outlet
  // useNavigate
} from "react-router-dom";
import { useState } from 'react';
// import { useAuth } from "./useAuth";
import "./ProfileDetail.css";
import ProfileDB from "./Profile.json";
import AreaDB from "./Area.json";
import FormSelectRange from "./FormSelectRange";
import FormMultiSelect from "./FormMultiSelect";
import FormMultiSelect2 from "./FormMultiSelect2";
// import FormSelect from "./FormSelect";

export function ProfileSearchSetting() {
  //  各ステータスのdefaultにすでに設定された値を入れたい。
  // 基本状況
    // ProfileSearchDBの1つのUUID内で、配列かjsonで作成する
  const [PSGender, setPSGender] = useState({});
  const [PSAge1, setPSAge1] = useState("0");
  const [PSAge2, setPSAge2] = useState("0");
  // 地域状況
    // ProfileSearchDBの1つのUUID内で、配列かjsonで作成する
    // 配列かjsonの1行にArea, Prefecture, Cityを記載する。
  // const [PSArea, setPSArea] = useState([]);
  // 身体的情報
  const [PSHeight1, setPSHeight1] = useState("0");
  const [PSHeight2, setPSHeight2] = useState("0");
    // ProfileSearchDBの1つのUUID内で、配列かjsonで作成する
  const [PSStyle, setPSStyle] = useState({});
    // ProfileSearchDBの1つのUUID内で、配列かjsonで作成する
  const [PSLooks, setPSLooks] = useState({});
  const [PSCup1, setPSCup1] = useState("0");
  const [PSCup2, setPSCup2] = useState("0");
  const [PSBust1, setPSBust1] = useState("0");
  const [PSBust2, setPSBust2] = useState("0");
  const [PSWest1, setPSWest1] = useState("0");
  const [PSWest2, setPSWest2] = useState("0");
  const [PSHip1, setPSHip1] = useState("0");
  const [PSHip2, setPSHip2] = useState("0");
    // ProfileSearchDBの1つのUUID内で、配列かjsonで作成する
  const [PSBloodType, setPSBloodType] = useState({});
  // 経験・背景情報
    // ProfileSearchDBの1つのUUID内で、配列かjsonで作成する
  const [PSJob, setPSJob] = useState({});
    // ProfileSearchDBの1つのUUID内で、配列かjsonで作成する
  const [PSEduBack, setPSEduBack] = useState({});
    // ProfileSearchDBの1つのUUID内で、配列かjsonで作成する
    // 配列かjsonの1行にArea, Prefectureを記載する。
  const [PSBirthArea, setPSBirthArea] = useState({});
    // ProfileSearchDBの1つのUUID内で、配列かjsonで作成する
  const [PSZodiac, setPSZodiac] = useState({});
  // 交際情報
    // ProfileSearchDBの1つのUUID内で、配列かjsonで作成する
  const [PSMarriageStatus, setPSMarriageStatus] = useState({});
    // ProfileSearchDBの1つのUUID内で、配列かjsonで作成する
  const [PSKids, setPSKids] = useState({});
  // 趣味・嗜好
    // ProfileSearchDBの1つのUUID内で、配列かjsonで作成する
  const [PSTabacco, setPSTabacco] = useState({});
    // ProfileSearchDBの1つのUUID内で、配列かjsonで作成する
  const [PSAlchole, setPSAlchole] = useState({});
    // ProfileSearchDBの1つのUUID内で、配列かjsonで作成する
  const [PSCar, setPSCar] = useState({});
    // 複数設定　対　複数選択となる。
    // ProfileSearch用として別のTable、設定方法が必要。UUIDも当然記載。
  const [PSInterest, setPSInterest] = useState({});
  // その他
    // プロフィール画像のあり・なしだけの判定
  const [PSProfilePicture, setPSProfilePicture] = useState("0");
    // メッセージのあり・なしだけの判定
  const [PSProfileMessage, setPSProfileMessage] = useState("0");
    // 複数設定　対　複数選択となる。
    // ProfileSearch用として別のTable、設定方法が必要。UUIDも当然記載。
  const [PSPersonality, setPSPersonality] = useState({});
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

  // let auth = useAuth();

  // let navigate = useNavigate();

  // const [initialized, setinitialized] = useState(false);

  // const initialRequestOptions ={
  //   method: 'POST',
  //   headers:{'Content-Type': 'application/json'},
  //   body: JSON.stringify({"UUID":auth.user})
  // }
  
  // // ページが読み込まれる時に実行し、ProfileSearchSettingとして登録する。
  // if (initialized===false) {
  //   fetch("../../get_profilesearchsetting.php",initialRequestOptions)
  //   .then((response) => response.json())
  //   .then(result => {
  //     if (result.result !== "PND") {
  //       // console.log(result.result[0])
  //       setPSGender(result.result[0].PSGender)
  //       setPSAge1(result.result[0].PSAge1)
  //       setPSAge2(result.result[0].PSAge2)
  //       setPSArea(result.result[0].PSArea)
  //       setPSHeight1(result.result[0].PSHeight1)
  //       setPSHeight2(result.result[0].PSHeight2)
  //       setPSStyle(result.result[0].PSStyle)
  //       setPSLooks(result.result[0].PSLooks)
  //       setPSCup1(result.result[0].PSCup1)
  //       setPSCup2(result.result[0].PSCup2)
  //       setPSBust1(result.result[0].PSBust1)
  //       setPSBust2(result.result[0].PSBust2)
  //       setPSWest1(result.result[0].PSWest1)
  //       setPSWest2(result.result[0].PSWest2)
  //       setPSHip1(result.result[0].PSHip1)
  //       setPSHip2(result.result[0].PSHip2)
  //       setPSBloodType(result.result[0].PSBloodType)
  //       setPSJob(result.result[0].PSJob)
  //       setPSEduBack(result.result[0].PSEduBack)
  //       setPSBirthArea(result.result[0].PSBirthArea)
  //       setPSZodiac(result.result[0].PSZodiac)
  //       setPSMarriageStatus(result.result[0].PSMarriageStatus)
  //       setPSKids(result.result[0].PSKids)
  //       setPSTabacco(result.result[0].PSTabacco)
  //       setPSAlchole(result.result[0].Zodiac)
  //       setPSCar(result.result[0].PSCar)
  //       setPSProfilePicture(result.result[0].PSProfilePicture)
  //       setPSProfileMessage(result.result[0].PSProfileMessage)
  //       setPSCute1(result.result[0].PSCute1)
  //       setPSCute2(result.result[0].PSCute2)
  //       setPSSexy1(result.result[0].PSSexy1)
  //       setPSSexy2(result.result[0].PSSexy2)
  //       setPSKindness1(result.result[0].PSKindness1)
  //       setPSKindness2(result.result[0].PSKindness2)
  //       setPSSmartness1(result.result[0].PSSmartness1)
  //       setPSSmartness2(result.result[0].PSSmartness2)
  //       setPSNeatness1(result.result[0].PSNeatness1)
  //       setPSNeatness2(result.result[0].PSNeatness2)
  //       setPSFashionable1(result.result[0].PSFashionable1)
  //       setPSFashionable2(result.result[0].PSFashionable2)
  //       setPSBrightness1(result.result[0].PSBrightness1)
  //       setPSBrightness2(result.result[0].PSBrightness2)
  //       setPSElegance1(result.result[0].PSElegance1)
  //       setPSElegance2(result.result[0].PSElegance2)

  //       //下の2つはそれぞれ別Tableなのでresult[0]とするかは要検討
  //       setPSInterest(result.result[0].PSInterest)
  //       setPSPersonality(result.result[0].PSPersonality)
  //     }
  //   })
  //   setinitialized(true)
  // }

  // // 入力値に問題があれば遷移しない。問題なければ遷移する
  const submit = e => {
    e.preventDefault();

  //   const requestOptions1 ={
  //     method: 'POST',
  //     headers:{'Content-Type': 'application/json'},
  //     body: JSON.stringify({
  //       "UUID":auth.user,

  //       "PSGender":PSGender,
  //       "PSAge1":PSAge1,
  //       "PSAge2":PSAge2,

  //       "PSArea":PSArea,
  //       "PSHeight1":PSHeight1,
  //       "PSHeight2":PSHeight2,
  //       "PSStyle":PSStyle,
  //       "PSLooks":PSLooks,
  //       "PSCup1":PSCup1,
  //       "PSCup2":PSCup2,
  //       "PSBust1":PSBust1,
  //       "PSBust2":PSBust2,
  //       "PSWest1":PSWest1,
  //       "PSWest2":PSWest2,
  //       "PSHip1":PSHip1,
  //       "PSHip2":PSHip2,
  //       "PSBloodType":PSBloodType,
  //       "PSJob":PSJob,
  //       "PSEduBack":PSEduBack,
  //       "PSBirthArea":PSBirthArea,

  //       "PSZodiac":PSZodiac,
  //       "PSMarriageStatus":PSMarriageStatus,
  //       "PSKids":PSKids,
  //       "PSTabacco":PSTabacco,
  //       "PSAlchole":PSAlchole,

  //       "PSCar":PSCar,

  //       "PSProfilePicture":PSProfilePicture,
  //       "PSProfileMessage":PSProfileMessage,

  //       "PSCute1":PSCute1,
  //       "PSCute2":PSCute2,
  //       "PSSexy1":PSSexy1,
  //       "PSSexy2":PSSexy2,
  //       "PSKindness1":PSKindness1,
  //       "PSKindness2":PSKindness2,
  //       "PSSmartness1":PSSmartness1,
  //       "PSSmartness2":PSSmartness2,
  //       "PSNeatness1":PSNeatness1,
  //       "PSNeatness2":PSNeatness2,
  //       "PSFashionable1":PSFashionable1,
  //       "PSFashionable2":PSFashionable2,
  //       "PSBrightness1":PSBrightness1,
  //       "PSBrightness2":PSBrightness2,
  //       "PSElegance1":PSElegance1,
  //       "PSElegance2":PSElegance2,

  //       "PSInterest":PSInterest,
  //       "PSPersonality":PSPersonality
  //     })
  //   }
  //   fetch("../../set_profilesearchsetting.php",requestOptions1)
  //   .then((response)=> response.json())
  //   .then(result =>{
  //     console.log(result)
  //     if (result.result[0]==="SPSSS") {
  //       // プロフィール検索設定設定成功。リダイレクト
  //       auth.setMessage("プロフィール検索設定を変更しました")
  //       navigate("../ProfileDetail")
  //     } else {
  //       // プロフィール検索設定設定失敗。(UUIDが合致しない)再表示。
  //       auth.setMessage("プロフィール検索設定を変更できませんでした")
  //       navigate("../ProfileDetail")
  //     }
  //   })
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
            <FormMultiSelect2
              title="性別"
              keyValue={ProfileDB.Gender}
              defaultValue={PSGender}
              setValue={setPSGender}
            />
          </li>
          <li>
            <FormSelectRange
              title="年齢" 
              originalRange={ProfileDB.PreferedAge}
              Range1={PSAge1}
              setRange1={setPSAge1}
              Range2={PSAge2}
              setRange2={setPSAge2}
            />
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
            <FormSelectRange
              title="身長" 
              originalRange={ProfileDB.Height}
              Range1={PSHeight1}
              setRange1={setPSHeight1}
              Range2={PSHeight2}
              setRange2={setPSHeight2}
            />
          </li>
          <li>
            <FormMultiSelect
              title="スタイル"
              keyValue={ProfileDB.Style}
              defaultValue={PSStyle}
              setValue={setPSStyle}
            />
          </li>
          <li>
            <FormMultiSelect
              title="ルックス"
              keyValue={ProfileDB.Looks}
              defaultValue={PSLooks}
              setValue={setPSLooks}
            />
          </li>
          <li>
            <FormSelectRange
              title="カップ" 
              originalRange={ProfileDB.Cup}
              Range1={PSCup1}
              setRange1={setPSCup1}
              Range2={PSCup2}
              setRange2={setPSCup2}
            />
          </li>
          <li>
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
          </li>
          <li>
            <FormMultiSelect
              title="血液型"
              keyValue={ProfileDB.BloodType}
              defaultValue={PSBloodType}
              setValue={setPSBloodType}
            />
          </li>
          <li>
            <FormMultiSelect
              title="職業"
              keyValue={ProfileDB.Job}
              defaultValue={PSJob}
              setValue={setPSJob}
            />
          </li>
          <li>
            <FormMultiSelect
              title="学歴"
              keyValue={ProfileDB.EduBack}
              defaultValue={PSEduBack}
              setValue={setPSEduBack}
            />
          </li>
          <li>
            <span className="dan">出身地</span>
            <span className="dan2">
              <select
                defaultValue={PSBirthArea}
                onChange={evt => {
                    setPSBirthArea(evt.target.value)
                }}>
                  {Object.keys(AreaDB.Area).map(key => <option value={key}>{AreaDB.Area[key]["AreaName"]}</option>)}
              </select>
            </span>
          </li>
          <li>
            <FormMultiSelect
              title="星座"
              keyValue={ProfileDB.Zodiac}
              defaultValue={PSZodiac}
              setValue={setPSZodiac}
            />
          </li>
          <li>
            <FormMultiSelect
              title="交際状況"
              keyValue={ProfileDB.MarriageStatus}
              defaultValue={PSMarriageStatus}
              setValue={setPSMarriageStatus}
            />
          </li>
          <li>
            <FormMultiSelect
              title="子供"
              keyValue={ProfileDB.Kids}
              defaultValue={PSKids}
              setValue={setPSKids}
            />
          </li>
          <li>
            <FormMultiSelect
              title="タバコ"
              keyValue={ProfileDB.Tabacco}
              defaultValue={PSTabacco}
              setValue={setPSTabacco}
            />
          </li>
          <li>
            <FormMultiSelect
              title="お酒"
              keyValue={ProfileDB.Alchole}
              defaultValue={PSAlchole}
              setValue={setPSAlchole}
            />
          </li>
          <li>
            <FormMultiSelect
              title="車"
              keyValue={ProfileDB.Car}
              defaultValue={PSCar}
              setValue={setPSCar}
            />
          </li>

          <li>
            {/* 別のリストにして、複数選択・検索できるようにする */}
            <span className="dan">興味あること</span>
            <span className="dan2">
              <select
                defaultValue={PSInterest}
                onChange={evt => setPSInterest(evt.target.value)}>
                  {Object.keys(ProfileDB.Interest).map(key => <option value={key}>{ProfileDB.Interest[key]}</option>)}
              </select>
            </span>
          </li>
          <li>
            <FormMultiSelect
              title="プロフィール写真"
              keyValue={ProfileDB.Car} // プロフィール写真あり／なしだけの判断
              defaultValue={PSProfilePicture}
              setValue={setPSProfilePicture}
            />
          </li>
          <li>
            <FormMultiSelect
              title="メッセージ"
              keyValue={ProfileDB.Car} // メッセージあり／なしだけの判断
              defaultValue={PSProfileMessage}
              setValue={setPSProfileMessage}
            />
          </li>
          <li>
            {/* 別のリストにして、複数選択・検索できるようにする。 */}
            <span className="dan">希望する性格</span>
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
          <li>
            {/* 星で表現したい。 */}
            <FormSelectRange
              title="可愛さ" 
              originalRange={ProfileDB.Self}
              Range1={PSCute1}
              setRange1={setPSCute1}
              Range2={PSCute2}
              setRange2={setPSCute2}
            />
          </li>
          <li>
            {/* 星で表現したい。 */}
            <FormSelectRange
              title="セクシーさ" 
              originalRange={ProfileDB.Self}
              Range1={PSSexy1}
              setRange1={setPSSexy1}
              Range2={PSSexy2}
              setRange2={setPSSexy2}
            />
          </li>
          <li>
            {/* 星で表現したい。 */}
            <FormSelectRange
              title="優しさ" 
              originalRange={ProfileDB.Self}
              Range1={PSKindness1}
              setRange1={setPSKindness1}
              Range2={PSKindness2}
              setRange2={setPSKindness2}
            />
          </li>
          <li>
            {/* 星で表現したい。 */}
            <FormSelectRange
              title="賢さ" 
              originalRange={ProfileDB.Self}
              Range1={PSSmartness1}
              setRange1={setPSSmartness1}
              Range2={PSSmartness2}
              setRange2={setPSSmartness2}
            />
          </li>
          <li>
            {/* 星で表現したい。 */}
            <FormSelectRange
              title="清楚さ" 
              originalRange={ProfileDB.Self}
              Range1={PSNeatness1}
              setRange1={setPSNeatness1}
              Range2={PSNeatness2}
              setRange2={setPSNeatness2}
            />
          </li>
          <li>
            {/* 星で表現したい。 */}
            <FormSelectRange
              title="ファッション" 
              originalRange={ProfileDB.Self}
              Range1={PSFashionable1}
              setRange1={setPSFashionable1}
              Range2={PSFashionable2}
              setRange2={setPSFashionable2}
            />
          </li>
          <li>
            {/* 星で表現したい。 */}
            <FormSelectRange
              title="明るさ" 
              originalRange={ProfileDB.Self}
              Range1={PSBrightness1}
              setRange1={setPSBrightness1}
              Range2={PSBrightness2}
              setRange2={setPSBrightness2}
            />
          </li>
          <li>
            {/* 星で表現したい。 */}
            <FormSelectRange
              title="エレガンス" 
              originalRange={ProfileDB.Self}
              Range1={PSElegance1}
              setRange1={setPSElegance1}
              Range2={PSElegance2}
              setRange2={setPSElegance2}
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
