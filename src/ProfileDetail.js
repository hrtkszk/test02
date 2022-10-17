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
import AreaDB from "./Area.json";

export function ProfileDetail() {
  let auth = useAuth();
  const [Profile, setProfile] = useState({});
  // const [Profile, setProfile] = useState([]);
  const [initialized, setinitialized] = useState(false);
  // let GenderNum = 0;

  const initialRequestOptions ={
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({"UUID":auth.user})
  }
  // console.log(initialRequestOptions)
  // ページが読み込まれる時に実行し、Profileとして登録する。
  if (initialized===false) {
    fetch("../../get_profile1.php",initialRequestOptions)
    .then((response) => response.json())
    .then(result => {
      // console.log(result)
      setProfile(JSON.parse(result[0]))
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
  
  function ShowArea() {
    if (Profile.Area !== undefined) {
      // Area未設定の場合→「未設定」と表示
      if (Profile.Area === 10000000) {
        return (
          <>
            {AreaDB.Area[String(Profile.Area).slice(0,2)+"000000"]["AreaName"]}
          </>
        )
      
      // Areaが設定されている場合
      } else {
        // Prefectureが未設定の場合→「Area」のみを表示
        if (String(Profile.Area).slice(2,8) === "000000") {
          return (
            <>
              {AreaDB.Area[String(Profile.Area).slice(0,2)+"000000"]["AreaName"]}
            </>
          )
        
        // Prefectureが設定されている場合
        } else {
          // Cityが未設定の場合→「Area」「Prefecture」を表示
          if (String(Profile.Area).slice(4,8) === "0000") {
            return (
              <>
                {AreaDB.Area[String(Profile.Area).slice(0,2)+"000000"]["AreaName"]}　
                {AreaDB.Area[String(Profile.Area).slice(0,2)+"000000"]["Prefecture"][String(Profile.Area).slice(0,4)+"0000"]["PrefectureName"]}
              </>
            )
          // Cityが設定されている場合→「Area」「Prefecture」「City」を表示
          } else {
            // Wardが存在しないCityが設定されている場合
            if (AreaDB.Area[String(Profile.Area).slice(0,2)+"000000"]["Prefecture"][String(Profile.Area).slice(0,4)+"0000"]["City"][String(Profile.Area).slice(0,6)+"00"]["CityName"] === undefined) {
              return (
                <>
                  {AreaDB.Area[String(Profile.Area).slice(0,2)+"000000"]["AreaName"]}　
                  {AreaDB.Area[String(Profile.Area).slice(0,2)+"000000"]["Prefecture"][String(Profile.Area).slice(0,4)+"0000"]["PrefectureName"]}
                  {AreaDB.Area[String(Profile.Area).slice(0,2)+"000000"]["Prefecture"][String(Profile.Area).slice(0,4)+"0000"]["City"][String(Profile.Area).slice(0,6)+"00"]}
                </>
              )
            // Wardが存在するCityが設定されている場合
            } else { 
              // Wardが未設定の場合→「Area」「Prefecture」「City」を表示
              if (String(Profile.Area).slice(6,8) === "00") {
                return (
                  <>
                    {AreaDB.Area[String(Profile.Area).slice(0,2)+"000000"]["AreaName"]}　
                    {AreaDB.Area[String(Profile.Area).slice(0,2)+"000000"]["Prefecture"][String(Profile.Area).slice(0,4)+"0000"]["PrefectureName"]}
                    {AreaDB.Area[String(Profile.Area).slice(0,2)+"000000"]["Prefecture"][String(Profile.Area).slice(0,4)+"0000"]["City"][String(Profile.Area).slice(0,6)+"00"]["CityName"]}
                  </>
                )
              // Wardが設定されている場合→「Area」「Prefecture」「Ward」を表示
              } else {
                return (
                  <>
                    {AreaDB.Area[String(Profile.Area).slice(0,2)+"000000"]["AreaName"]}　
                    {AreaDB.Area[String(Profile.Area).slice(0,2)+"000000"]["Prefecture"][String(Profile.Area).slice(0,4)+"0000"]["PrefectureName"]}
                    {AreaDB.Area[String(Profile.Area).slice(0,2)+"000000"]["Prefecture"][String(Profile.Area).slice(0,4)+"0000"]["City"][String(Profile.Area).slice(0,6)+"00"]["Ward"][Profile.Area]}
                  </>
                )
              }
            }
          }
        }
      }
    }
  }

  function ShowBirthArea() {
    if (Profile.BirthArea !== undefined) {
      // BirthArea未設定の場合→「未設定」と表示
      if (Profile.BirthArea === 10000000) {
        return (
          <>
            {AreaDB.Area[String(Profile.BirthArea).slice(0,2)+"000000"]["AreaName"]}
          </>
        )
      
      // BirthAreaが設定されている場合
      } else {
        // BirthPrefectureが未設定の場合→「BirthArea」のみを表示
        if (String(Profile.BirthAaea).slice(2,8) === "000000") {
          return (
            <>
              {AreaDB.Area[String(Profile.BirthArea).slice(0,2)+"000000"]["AreaName"]}
            </>
          )
        
        // BirthPrefectureが設定されている場合→「BirthArea」「BirthPrefecture」を表示
        } else {
          return (
            <>
              {AreaDB.Area[String(Profile.BirthArea).slice(0,2)+"000000"]["AreaName"]}　
              {AreaDB.Area[String(Profile.BirthArea).slice(0,2)+"000000"]["Prefecture"][String(Profile.BirthArea).slice(0,4)+"0000"]["PrefectureName"]}
            </>
          )
        }
      }
    }
  }

    // Profileが空か、[]の場合、プロフィール設定を促すページを表示
  // if (Profile.length === 0 || Profile === "") {
  //   return (
  //     <>
  //         <h3>プロフィール</h3>
  //         <ul>
  //           <li>
  //             <span className="dan">ニックネーム</span>
  //             <span className="dan2">{Profile.NickName}</span>
  //           </li>
  //           <li>
  //             <span className="dan">性別</span>
  //             <span className="dan2">{ProfileDB.Gender[GenderNum]}</span>
  //           </li>
  //           <li>
  //             <span className="dan">年齢</span>
  //             <span className="dan2">{Profile.Age}</span>
  //           </li>
  //           <li>
  //             <span className="dan">年齢確認</span>
  //             <span className="dan2">{ProfileDB.AgeConf[Profile.AgeConf1]}</span>
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
  if (Object.keys(Profile).length === 0) {
    return <></>
  } else {
    return (
      <div>
        <h1>プロフィール</h1>
        <ul>
          <li>
            <span className="dan">ニックネーム</span>
            <span className="dan2">{Profile.NickName}</span>
          </li>
          <li>
            <SelectProfileItem
              title="性別"
              keyName="Gender"
              keyValue={ProfileDB.Gender}
              DBValue={Profile}
            />
          </li>
          <li>
            <span className="dan">年齢</span>
            <span className="dan2">{Profile.Age}</span>
          </li>
          <li>
            <span className="dan">表示年齢</span>
            <span className="dan2">{ProfileDB.AgeRange[Profile.AgeRange]}</span>
          </li>
          <li>
            <span className="dan">年齢確認</span>
            <span className="dan2">{ProfileDB.AgeConf[Profile.AgeConf]}</span>
          </li>
          <li>
            <span className="dan">エリア</span>
            <span className="dan2">
              <ShowArea/>
            </span>
          </li>
          <li>
            <SelectProfileItem
              title="身長"
              keyName="Height"
              keyValue={ProfileDB.Height}
              DBValue={Profile}
            />
          </li>
          <li>
            <SelectProfileItem
              title="スタイル"
              keyName="Style"
              keyValue={ProfileDB.Style}
              DBValue={Profile}
            />
          </li>
          <li>
            <SelectProfileItem
              title="ルックス"
              keyName="Looks"
              keyValue={ProfileDB.Looks}
              DBValue={Profile}
            />
          </li>
          <li>
            <SelectProfileItem
              title="カップ"
              keyName="Cup"
              keyValue={ProfileDB.Cup}
              DBValue={Profile}
            />
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
            <SelectProfileItem
              title="血液型"
              keyName="BloodType"
              keyValue={ProfileDB.BloodType}
              DBValue={Profile}
            />
          </li>
          <li>
            <SelectProfileItem
              title="職業"
              keyName="Job"
              keyValue={ProfileDB.Job}
              DBValue={Profile}
            />
          </li>
          <li>
            <SelectProfileItem
              title="学歴"
              keyName="EduBack"
              keyValue={ProfileDB.EduBack}
              DBValue={Profile}
            />
          </li>

          <li>
            <span className="dan">出身地</span>
            <span className="dan2">
              <ShowBirthArea/>
            </span>
          </li>
          <li>
            <SelectProfileItem
              title="星座"
              keyName="Zodiac"
              keyValue={ProfileDB.Zodiac}
              DBValue={Profile}
            />
          </li>
          <li>
            <SelectProfileItem
              title="交際状況"
              keyName="MarriageStatus"
              keyValue={ProfileDB.MarriageStatus}
              DBValue={Profile}
            />
          </li>
          <li>
            <SelectProfileItem
              title="子供"
              keyName="Kids"
              keyValue={ProfileDB.Kids}
              DBValue={Profile}
            />
          </li>
          <li>
            <SelectProfileItem
              title="タバコ"
              keyName="Tabacco"
              keyValue={ProfileDB.Tabacco}
              DBValue={Profile}
            />
          </li>
          <li>
            <SelectProfileItem
              title="お酒"
              keyName="Alchole"
              keyValue={ProfileDB.Alchole}
              DBValue={Profile}
            />
          </li>
          <li>
            <SelectProfileItem
              title="車"
              keyName="Car"
              keyValue={ProfileDB.Car}
              DBValue={Profile}
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
            <span className="dan2">{Profile.ProfileMessage}</span>
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
              DBValue={Profile}
            />
          </li>
          <li>
            <SelectProfileItem
              title="セクシーさ"
              keyName="Sexy"
              keyValue={ProfileDB.Self}
              DBValue={Profile}
            />
          </li>
          <li>
            <SelectProfileItem
              title="優しさ"
              keyName="Kindness"
              keyValue={ProfileDB.Self}
              DBValue={Profile}
            />
          </li>
          <li>
            <SelectProfileItem
              title="賢さ"
              keyName="Smartness"
              keyValue={ProfileDB.Self}
              DBValue={Profile}
            />
          </li>
          <li>
            <SelectProfileItem
              title="清楚さ"
              keyName="Neatness"
              keyValue={ProfileDB.Self}
              DBValue={Profile}
            />
          </li>
          <li>
            <SelectProfileItem
              title="ファッション"
              keyName="Fashionable"
              keyValue={ProfileDB.Self}
              DBValue={Profile}
            />
          </li>
          <li>
            <SelectProfileItem
              title="明るさ"
              keyName="Brightness"
              keyValue={ProfileDB.Self}
              DBValue={Profile}
            />
          </li>
          <li>
            <SelectProfileItem
              title="エレガンス"
              keyName="Elegance"
              keyValue={ProfileDB.Self}
              DBValue={Profile}
            />
          </li>
        </ul>
        <div>
          <Link to="../../">戻る</Link>
        </div>
      </div>
    )
  }
}