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

export function AiteProfile() {
  let auth = useAuth();
  const [BasicProfile, setBasicProfile] = useState([]);
  // const [Profile, setProfile] = useState([]);
  const [initialized, setinitialized] = useState(false);

  const initialRequestOptions ={
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({"UUID":auth.aite})
  }

  // ページが読み込まれる時に実行し、Profileとして登録する。
  if (initialized===false) {
    fetch("../../get_basicprofile.php",initialRequestOptions)
    .then((response) => response.json())
    .then(result => {
      setBasicProfile(JSON.parse(result[0]))
    })

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
  //         return (
  //           <>
  //             {AreaDB.Area[Profile.Area]["AreaName"]}　
  //             {AreaDB.Area[Profile.Area]["Prefecture"][Profile.Prefecture]["PrefectureName"]}
  //             {AreaDB.Area[Profile.Area]["Prefecture"][Profile.Prefecture]["City"][Profile.City]}
  //           </>
  //         )
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

  // BasicProfileが空の場合、空ページを表示（読み込みが完了していないため）
  // if (BasicProfile.length === 0) {
  //   return <></>
  
  // // Profileが""の場合、basicProfileのみを表示
  // } else if (BasicProfile.length === 0 || Profile === "") {
  //   return (
  //     <div>
  //       <h1>プロフィール</h1>
  //       <ul>
  //         <li>
  //           <span className="dan">ニックネーム</span>
  //           <span className="dan2">{BasicProfile.nickname}</span>
  //         </li>
  //         <li>
  //           <span className="dan">性別</span>
  //           <span className="dan2">{ProfileDB.Gender[BasicProfile.gender]}</span>
  //         </li>
  //         <li>
  //           <span className="dan">年齢</span>
  //           <span className="dan2">{BasicProfile.age}</span>
  //         </li>
  //       </ul>
  //       この方のプロフィールの詳細は未設定です。
  //       <div>
  //         <Link to="../Message">メッセージを送る</Link><br />

  //         <Link to="../">戻る</Link>
  //       </div>
  //     </div>
  //   )
  // //  Profileが空でない場合、もしくは[]でない場合、プロフィールを表示＋設定ページボタンの表示
  // } else {
  return (
    <div>
      <h1>プロフィール</h1>
      <ul>
        <li>
          <span className="dan">ニックネーム</span>
          <span className="dan2">{BasicProfile.nickname}</span>
        </li>
        <li>
          <SelectProfileItem
            title="性別"
            keyName="Gender"
            keyValue={ProfileDB.Gender}
            DBValue={BasicProfile}
          />
        </li>
        <li>
          <span className="dan">年齢</span>
          <span className="dan2">{BasicProfile.age}</span>
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
        </li> */}
        <li>
          <SelectProfileItem
            title="身長"
            keyName="Height"
            keyValue={ProfileDB.Height}
            DBValue={BasicProfile}
          />
        </li>
        <li>
          <SelectProfileItem
            title="スタイル"
            keyName="Style"
            keyValue={ProfileDB.Style}
            DBValue={BasicProfile}
          />
        </li>
        <li>
          <SelectProfileItem
            title="ルックス"
            keyName="Looks"
            keyValue={ProfileDB.Looks}
            DBValue={BasicProfile}
          />
        </li>
        <li>
          <SelectProfileItem
            title="カップ"
            keyName="Cup"
            keyValue={ProfileDB.Cup}
            DBValue={BasicProfile}
          />
        </li>
        <li>
          <span className="dan">バスト</span>
          <span className="dan2">{BasicProfile.BustSize}</span>
        </li>
        <li>
          <span className="dan">ウエスト</span>
          <span className="dan2">{BasicProfile.WestSize}</span>
        </li>
        <li>
          <span className="dan">ヒップ</span>
          <span className="dan2">{BasicProfile.HipSize}</span>
        </li>
        <li>
          <SelectProfileItem
            title="血液型"
            keyName="BloodType"
            keyValue={ProfileDB.BloodType}
            DBValue={BasicProfile}
          />
        </li>
        <li>
          <SelectProfileItem
            title="職業"
            keyName="Job"
            keyValue={ProfileDB.Job}
            DBValue={BasicProfile}
          />
        </li>
        <li>
          <SelectProfileItem
            title="学歴"
            keyName="EduBack"
            keyValue={ProfileDB.EduBack}
            DBValue={BasicProfile}
          />
        </li>
        {/* <li>
          <span className="dan">出身地</span>
          <span className="dan2">
            <ShowBirthArea/>
          </span>
        </li> */}
        <li>
          <SelectProfileItem
            title="星座"
            keyName="Zodiac"
            keyValue={ProfileDB.Zodiac}
            DBValue={BasicProfile}
          />
        </li>
        <li>
          <SelectProfileItem
            title="交際状況"
            keyName="MarriageStatus"
            keyValue={ProfileDB.MarriageStatus}
            DBValue={BasicProfile}
          />
        </li>
        <li>
          <SelectProfileItem
            title="子供"
            keyName="Kids"
            keyValue={ProfileDB.Kids}
            DBValue={BasicProfile}
          />
        </li>
        <li>
          <SelectProfileItem
            title="タバコ"
            keyName="Tabacco"
            keyValue={ProfileDB.Tabacco}
            DBValue={BasicProfile}
          />
        </li>
        <li>
          <SelectProfileItem
            title="お酒"
            keyName="Alchole"
            keyValue={ProfileDB.Alchole}
            DBValue={BasicProfile}
          />
        </li>
        <li>
          <SelectProfileItem
            title="車"
            keyName="Car"
            keyValue={ProfileDB.Car}
            DBValue={BasicProfile}
          />
        </li>
        {/* <li>
          <span className="dan">興味あること</span>
          <span className="dan2">{ProfileDB.Interest[Profile.Interest]}</span>
        </li>
        <li>
          <span className="dan">プロフィール写真</span>
          <span className="dan2">{Profile.ProfilePicture}</span>
        </li> */}
        <li>
          <span className="dan">メッセージ</span>
          <span className="dan2">{BasicProfile.ProfileMessage}</span>
        </li>
        {/* <li>
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
        </li> */}
        <li>
          自己評価<br />
        </li>
        <li>
          <SelectProfileItem
            title="可愛さ"
            keyName="Cute"
            keyValue={ProfileDB.Self}
            DBValue={BasicProfile}
          />
        </li>
        <li>
          <SelectProfileItem
            title="セクシーさ"
            keyName="Sexy"
            keyValue={ProfileDB.Self}
            DBValue={BasicProfile}
          />
        </li>
        <li>
          <SelectProfileItem
            title="優しさ"
            keyName="Kindness"
            keyValue={ProfileDB.Self}
            DBValue={BasicProfile}
          />
        </li>
        <li>
          <SelectProfileItem
            title="賢さ"
            keyName="Smartness"
            keyValue={ProfileDB.Self}
            DBValue={BasicProfile}
          />
        </li>
        <li>
          <SelectProfileItem
            title="清楚さ"
            keyName="Neatness"
            keyValue={ProfileDB.Self}
            DBValue={BasicProfile}
          />
        </li>
        <li>
          <SelectProfileItem
            title="ファッション"
            keyName="Fashionable"
            keyValue={ProfileDB.Self}
            DBValue={BasicProfile}
          />
        </li>
        <li>
          <SelectProfileItem
            title="明るさ"
            keyName="Brightness"
            keyValue={ProfileDB.Self}
            DBValue={BasicProfile}
          />
        </li>
        <li>
          <SelectProfileItem
            title="エレガンス"
            keyName="Elegance"
            keyValue={ProfileDB.Self}
            DBValue={BasicProfile}
          />
        </li>
      </ul>
      <div>
        <Link to="../Message">メッセージを送る</Link><br />

        <Link to="../">戻る</Link>
      </div>
    </div>
  );
}
// }
