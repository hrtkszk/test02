import * as React from "react";
import {
  Link
//   // Outlet
//   useNavigate
} from "react-router-dom";
import { useState } from 'react';
import { useAuth } from "./useAuth";
import "./ProfileDetail.css";
import ProfileDB from "./Profile.json";
import SelectProfileItem from "./SelectProfileItem";
// import AreaDB from "./Area.json";

export function ProfileDetail() {
  let auth = useAuth();
  const [BasicProfile, setBasicProfile] = useState({});
  // const [Profile, setProfile] = useState([]);
  const [initialized, setinitialized] = useState(false);
  // let GenderNum = 0;

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
      setBasicProfile(result[0])
    })
    // if (BasicProfile.Gender0 === 1) {GenderNum=0} else {None}
    // if (BasicProfile.Gender1 === 1) {GenderNum=1} else {None}
    // if (BasicProfile.Gender2 === 1) {GenderNum=2} else {None}
    // if (BasicProfile.Gender3 === 1) {GenderNum=3} else {None}
    // if (BasicProfile.Gender4 === 1) {GenderNum=4} else {None}
    // if (BasicProfile.Gender5 === 1) {GenderNum=5} else {None}
    // if (BasicProfile.Gender6 === 1) {GenderNum=6} else {None}
    // if (BasicProfile.Gender7 === 1) {GenderNum=7} else {None}

    // fetch("../../get_profile.php",initialRequestOptions)
    // .then((response) => response.json())
    // .then(result => {
    //   console.log(result.result)
    //   if (result.result !== "PND") {
    //     setProfile(result.result[0])
    //   } else {
    //     setProfile("")
    //   }
    // })

    setinitialized(true)
  }
  
  // function ShowArea() {
  //   // Area未設定の場合→「未設定」と表示
  //   if (Profile.Area === "0") {
  //     return (
  //       <>
  //         {AreaDB.Area[Profile.Area]["AreaName"]}
  //       </>
  //     )
    
  //   // Areaが設定されている場合
  //   } else {
  //     // Prefectureが未設定の場合→「Area」のみを表示
  //     if (Profile.Prefecture === "0") {
  //       return (
  //         <>
  //           {AreaDB.Area[Profile.Area]["AreaName"]}
  //         </>
  //       )
      
  //     // Prefectureが設定されている場合
  //     } else {
  //       // Cityが未設定の場合→「Area」「Prefecture」を表示
  //       if (Profile.City === "0") {
  //         return (
  //           <>
  //             {AreaDB.Area[Profile.Area]["AreaName"]}　
  //             {AreaDB.Area[Profile.Area]["Prefecture"][Profile.Prefecture]["PrefectureName"]}
  //           </>
  //         )
  //       // Cityが設定されている場合→「Area」「Prefecture」「City」を表示
  //       } else {
  //         // Wardが存在しないCityが設定されている場合
  //         if (AreaDB.Area[Profile.Area]["Prefecture"][Profile.Prefecture]["City"][Profile.City]["CityName"] === undefined) {
  //           return (
  //             <>
  //               {AreaDB.Area[Profile.Area]["AreaName"]}　
  //               {AreaDB.Area[Profile.Area]["Prefecture"][Profile.Prefecture]["PrefectureName"]}
  //               {AreaDB.Area[Profile.Area]["Prefecture"][Profile.Prefecture]["City"][Profile.City]}
  //             </>
  //           )
  //         // Wardが存在するCityが設定されている場合
  //         } else { 
  //           // Wardが未設定の場合→「Area」「Prefecture」「City」を表示
  //           if (Profile.Ward === "0") {
  //             return (
  //               <>
  //                 {AreaDB.Area[Profile.Area]["AreaName"]}　
  //                 {AreaDB.Area[Profile.Area]["Prefecture"][Profile.Prefecture]["PrefectureName"]}
  //                 {AreaDB.Area[Profile.Area]["Prefecture"][Profile.Prefecture]["City"][Profile.City]["CityName"]}
  //               </>
  //             )
  //           // Wardが設定されている場合→「Area」「Prefecture」「Ward」を表示
  //           } else {
  //             return (
  //               <>
  //                 {AreaDB.Area[Profile.Area]["AreaName"]}　
  //                 {AreaDB.Area[Profile.Area]["Prefecture"][Profile.Prefecture]["PrefectureName"]}
  //                 {AreaDB.Area[Profile.Area]["Prefecture"][Profile.Prefecture]["City"][Profile.City]["Ward"][Profile.Ward]}
  //               </>
  //             )
  //           }
  //         }
  //       }
  //     }
  //   }
  // }

  // function ShowBirthArea() {
  //   // BirthArea未設定の場合→「未設定」と表示
  //   if (Profile.BirthArea === "0") {
  //     return (
  //       <>
  //         {AreaDB.Area[Profile.BirthArea]["AreaName"]}
  //       </>
  //     )
    
  //   // BirthAreaが設定されている場合
  //   } else {
  //     // BirthPrefectureが未設定の場合→「BirthArea」のみを表示
  //     if (Profile.BirthPrefecture === "0") {
  //       return (
  //         <>
  //           {AreaDB.Area[Profile.BirthArea]["AreaName"]}
  //         </>
  //       )
      
  //     // BirthPrefectureが設定されている場合→「BirthArea」「BirthPrefecture」を表示
  //     } else {
  //       return (
  //         <>
  //           {AreaDB.Area[Profile.BirthArea]["AreaName"]}　
  //           {AreaDB.Area[Profile.BirthArea]["Prefecture"][Profile.BirthPrefecture]["PrefectureName"]}
  //         </>
  //       )
  //     }
  //   }
  // }

    // Profileが空か、[]の場合、プロフィール設定を促すページを表示
  // if (Profile.length === 0 || Profile === "") {
  //   return (
  //     <>
  //         <h3>プロフィール</h3>
  //         <ul>
  //           <li>
  //             <span className="dan">ニックネーム</span>
  //             <span className="dan2">{BasicProfile.NickName}</span>
  //           </li>
  //           <li>
  //             <span className="dan">性別</span>
  //             <span className="dan2">{ProfileDB.Gender[GenderNum]}</span>
  //           </li>
  //           <li>
  //             <span className="dan">年齢</span>
  //             <span className="dan2">{BasicProfile.Age}</span>
  //           </li>
  //           <li>
  //             <span className="dan">年齢確認</span>
  //             <span className="dan2">{ProfileDB.AgeConf[BasicProfile.AgeConf1]}</span>
  //           </li>
  //         </ul>
  //         <p>
  //             詳細プロフィールを設定してください。
  //         </p>
  //         <Link to="../ProfileSetting">プロフィール設定</Link><br />
  //         <Link to="../../">戻る</Link>
  //     </>
  //   );

  // //  Profileが空でない場合、もしくは[]でない場合、プロフィールを表示＋設定ページボタンの表示
  // } else {
  return (
    <div>
      <h1>プロフィール</h1>
      <ul>
        <li>
          <span className="dan">ニックネーム</span>
          <span className="dan2">{BasicProfile.NickName}</span>
        </li>
        <li>
          {/* <span className="dan">性別</span>
          <span className="dan2">          </span>
            {ProfileDB.Gender[GenderNum]} */}
          <SelectProfileItem
            title="性別"
            keyName="Gender"
            keyValue={ProfileDB.Gender}
            DBValue={BasicProfile}
          />
        </li>
        <li>
          <span className="dan">年齢</span>
          <span className="dan2">{BasicProfile.Age}</span>
        </li>
        <li>
          <span className="dan">年齢確認</span>
          <span className="dan2">{ProfileDB.AgeConf[BasicProfile.AgeConf1]}</span>
        </li>
        {/* <li>
          <span className="dan">エリア</span>
          <span className="dan2">
            <ShowArea/>
          </span>
        </li>
        <li>
          <span className="dan">身長</span>
          <span className="dan2">{ProfileDB.Height[Profile.Height]}</span>
        </li>
        <li>
          <span className="dan">スタイル</span>
          <span className="dan2">{ProfileDB.Style[Profile.Style]}</span>
        </li>
        <li>
          <span className="dan">ルックス</span>
          <span className="dan2">{ProfileDB.Looks[Profile.Looks]}</span>
        </li>
        <li>
          <span className="dan">カップ</span>
          <span className="dan2">{ProfileDB.Cup[Profile.Cup]}</span>
        </li>
        <li>
          <span className="dan">バスト</span>
          <span className="dan2">{Profile.BustSize}</span>
        </li>
        <li>
          <span className="dan">ウエスト</span>
          <span className="dan2">{Profile.WestSize}</span>
        </li>
        <li>
          <span className="dan">ヒップ</span>
          <span className="dan2">{Profile.HipSize}</span>
        </li>
        <li>
          <span className="dan">血液型</span>
          <span className="dan2">{ProfileDB.BloodType[Profile.BloodType]}</span>
        </li>
        <li>
          <span className="dan">職業</span>
          <span className="dan2">{ProfileDB.Job[Profile.Job]}</span>
        </li>
        <li>
          <span className="dan">学歴</span>
          <span className="dan2">{ProfileDB.EduBack[Profile.EduBack]}</span>
        </li>
        <li>
          <span className="dan">出身地</span>
          <span className="dan2">
            <ShowBirthArea/>
          </span>
        </li>
        <li>
          <span className="dan">星座</span>
          <span className="dan2">{ProfileDB.Zodiac[Profile.Zodiac]}</span>
        </li>
        <li>
          <span className="dan">交際状況</span>
          <span className="dan2">{ProfileDB.MarriageStatus[Profile.MarriageStatus]}</span>
        </li>
        <li>
          <span className="dan">子供</span>
          <span className="dan2">{ProfileDB.Kids[Profile.Kids]}</span>
        </li>
        <li>
          <span className="dan">タバコ</span>
          <span className="dan2">{ProfileDB.Tabacco[Profile.Tabacco]}</span>
        </li>
        <li>
          <span className="dan">お酒</span>
          <span className="dan2">{ProfileDB.Alchole[Profile.Alchole]}</span>
        </li>
        <li>
          <span className="dan">車</span>
          <span className="dan2">{ProfileDB.Car[Profile.Car]}</span>
        </li>
        <li>
          <span className="dan">興味あること</span>
          <span className="dan2">{ProfileDB.Interest[Profile.Interest]}</span>
        </li>
        <li>
          <span className="dan">プロフィール写真</span>
          <span className="dan2">{Profile.ProfilePicture}</span>
        </li>
        <li>
          <span className="dan">メッセージ</span>
          <span className="dan2">{Profile.ProfileMessage}</span>
        </li>
        <li>
          <span className="dan">希望する年齢</span>
          <span className="dan2">{ProfileDB.PreferedAge[Profile.PreferedAge1]}〜{ProfileDB.PreferedAge[Profile.PreferedAge2]}</span>
        </li>
        <li>
          <span className="dan">希望する性格</span>
          <span className="dan2">{ProfileDB.Personality[Profile.PreferedPersonality]}</span>
        </li>
        <li>
          <span className="dan">性格</span>
          <span className="dan2">{ProfileDB.Personality[Profile.Personality]}</span>
        </li>
        <li>
          自己評価<br />
        </li>
        <li>
          <span className="dan">可愛さ</span>
          <span className="dan2">{ProfileDB.Self[Profile.SelfCute]}</span>
        </li>
        <li>
          <span className="dan">セクシーさ</span>
          <span className="dan2">{ProfileDB.Self[Profile.SelfSexy]}</span>
        </li>
        <li>
          <span className="dan">優しさ</span>
          <span className="dan2">{ProfileDB.Self[Profile.SelfKindness]}</span>
        </li>
        <li>
          <span className="dan">賢さ</span>
          <span className="dan2">{ProfileDB.Self[Profile.SelfSmartness]}</span>
        </li>
        <li>
          <span className="dan">清楚さ</span>
          <span className="dan2">{ProfileDB.Self[Profile.SelfNeatness]}</span>
        </li>
        <li>
          <span className="dan">ファッション</span>
          <span className="dan2">{ProfileDB.Self[Profile.SelfFashionable]}</span>
        </li>
        <li>
          <span className="dan">明るさ</span>
          <span className="dan2">{ProfileDB.Self[Profile.SelfBrightness]}</span>
        </li>
        <li>
          <span className="dan">エレガンス</span>
          <span className="dan2">{ProfileDB.Self[Profile.SelfElegance]}</span>
        </li> */}
      </ul>
      <div>
        <Link to="../../">戻る</Link>
      </div>
    </div>
  );
}
