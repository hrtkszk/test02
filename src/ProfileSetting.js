import * as React from "react";
import {
  Link,
//   // Outlet
  useNavigate
} from "react-router-dom";
import { useState } from 'react';
import { useAuth } from "./useAuth";
import "./ProfileDetail.css";
import Profile from "./Profile.json";


export function ProfileSetting() {
  //  各ステータスのdefaultにすでに設定された値を入れたい。

  // 地域状況
  const [Prefecture, setPrefecture] = useState("");
  const [City, setCity] = useState("");
  // 身体的情報
  const [Height, setHeight] = useState("");
  const [Style, setStyle] = useState("");
  const [Looks, setLooks] = useState("");
  const [Cup, setCup] = useState("");
  const [BustSize, setBustSize] = useState("");
  const [WestSize, setWestSize] = useState("");
  const [HipSize, setHipSize] = useState("");
  const [BloodType, setBloodType] = useState("");
  // 経験・背景情報
  const [Job, setJob] = useState("");
  const [EduBack, setEduBack] = useState("");
  const [BirthPrefecture, setBirthPrefecture] = useState("");
  const [Zodiac, setZodiac] = useState("");
  // 交際情報
  const [MarriageStatus, setMarriageStatus] = useState("");
  const [Kids, setKids] = useState("");
  // 趣味・嗜好
  const [Tabacco, setTabacco] = useState("");
  const [Alchole, setAlchole] = useState("");
  const [Car, setCar] = useState("");
  const [Interest, setInterest] = useState("");
  // その他
  const [ProfilePicture, setProfilePicture] = useState("");
  const [ProfileMessage, setProfileMessage] = useState("");
  // 相手に求めること
  const [PreferedAge, setPreferedAge] = useState("");
  const [PreferedPersonality, setPreferedPersonality] = useState("");
  // 内面的情報
  const [Personality, setPersonality] = useState("");
  // 自己評価
  const [SelfCute, setSelfCute] = useState("");
  const [SelfSexy, setSelfSexy] = useState("");
  const [SelfKindness, setSelfKindness] = useState("");
  const [SelfSmartness, setSelfSmartness] = useState("");
  const [SelfNeatness, setSelfNeatness] = useState("");
  const [SelfFashionable, setSelfFashionable] = useState("");
  const [SelfBrightness, setSelfBrightness] = useState("");
  const [SelfElegance, setSelfElegance] = useState("");


  let auth = useAuth();

  let navigate = useNavigate();

  // 入力値に問題があれば遷移しない。問題なければ遷移する
  const submit = e => {
    e.preventDefault();
    // SubmitStat = true;
  // }

  // const setTempRegister = () => {
    const requestOptions1 ={
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({
        "UUID":auth.user,

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
        "BirthPrefecture":BirthPrefecture,
        "Zodiac":Zodiac,

        "MarriageStatus":MarriageStatus,
        "Kids":Kids,

        "Tabacco":Tabacco,
        "Alchole":Alchole,
        "Car":Car,
        "Interest":Interest,

        "ProfilePicture":ProfilePicture,
        "ProfileMessage":ProfileMessage,

        "PreferedAge":PreferedAge,
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

  function Test({Prefecture}) {
    switch (Prefecture) {
      case "":
        return (
          <>
          <select onChange={evt => setCity(evt.target.value)}>
            <option value="hk0">未設定</option>
            <option value="hk1">道央</option>
            <option value="hk2">道北</option>
            <option value="hk3">道東</option>
            <option value="hk4">道南</option>
          </select><br />
        </>
        )
      case "hk":
        return (
          <>
          <select onChange={evt => setCity(evt.target.value)}>
            <option value="hk0">未設定</option>
            <option value="hk1">道央</option>
            <option value="hk2">道北</option>
            <option value="hk3">道東</option>
            <option value="hk4">道南</option>
          </select><br />
        </>
        )
      case "th":
        return (
          <>
          <select onChange={evt => setCity(evt.target.value)}>
            <option value="0">未設定</option>
            <option value="1">道央</option>
            <option value="2">道北</option>
            <option value="3">道東</option>
            <option value="4">道南</option>
          </select><br />
          </>
        )
      case "ke":
        return (
          <>
          <select onChange={evt => setCity(evt.target.value)}>
            <option value="0">未設定</option>
            <option value="1">道央</option>
            <option value="2">道北</option>
            <option value="3">道東</option>
            <option value="4">道南</option>
          </select><br />
          </>
        )
      case "kt":
        return (
          <>
          <select onChange={evt => setCity(evt.target.value)}>
            <option value="0">未設定</option>
            <option value="1">道央</option>
            <option value="2">道北</option>
            <option value="3">道東</option>
            <option value="4">道南</option>
          </select><br />
          </>
        )
      case "hr":
        return (
          <>
          <select onChange={evt => setCity(evt.target.value)}>
            <option value="0">未設定</option>
            <option value="1">道央</option>
            <option value="2">道北</option>
            <option value="3">道東</option>
            <option value="4">道南</option>
          </select><br />
          </>
        )
      case "tk":
        return (
          <>
          <select onChange={evt => setCity(evt.target.value)}>
            <option value="0">未設定</option>
            <option value="1">道央</option>
            <option value="2">道北</option>
            <option value="3">道東</option>
            <option value="4">道南</option>
          </select><br />
          </>
        )
      case "ks":
        return (
          <>
            <select onChange={evt => setCity(evt.target.value)}>
              <option value="0">未設定</option>
              <option value="1">道央</option>
              <option value="2">道北</option>
              <option value="3">道東</option>
              <option value="4">道南</option>
            </select><br />
          </>
        )
      default:
        return <></>
    }
  }

  return (
    <div>
      <h1>プロフィール設定</h1>
        <form onSubmit={e => submit(e)}>
          <ul>
            <li>
            <span className="dan">エリア</span>
            <span className="dan2">
                <select
                defaultValue="hk" //defaultの読み込みと設定が必要
                onChange={evt => setPrefecture(evt.target.value)}>
                  {Profile.Area.map(Area => <option value={Area.value}>{Area.name}</option>)}
                </select>
                <Test Prefecture={Prefecture}/>
            </span>
            </li>
            <li>
              <span className="dan">身長</span>
              <span className="dan2">
                <select
                  defaultValue="0" //defaultの読み込みと設定が必要
                  onChange={evt => setHeight(evt.target.value)}>
                    {Profile.Height.map(Height => <option value={Height.value}>{Height.name}</option>)}
                </select>
              </span>
            </li>
            <li>
              <span className="dan">スタイル</span>
              <span className="dan2">
                <select
                  defaultValue="0" //defaultの読み込みと設定が必要
                  onChange={evt => setStyle(evt.target.value)}>
                    {Profile.Style.map(Style => <option value={Style.value}>{Style.name}</option>)}
                </select>
              </span>
            </li>
            <li>
              <span className="dan">ルックス</span>
              <span className="dan2">
                <select
                  defaultValue="0" //defaultの読み込みと設定が必要
                  onChange={evt => setLooks(evt.target.value)}>
                    {Profile.Looks.map(Looks => <option value={Looks.value}>{Looks.name}</option>)}
                </select>
              </span>
            </li>
            <li>
              <span className="dan">カップ</span>
              <span className="dan2">
                <select
                  defaultValue="0" //defaultの読み込みと設定が必要
                  onChange={evt => setCup(evt.target.value)}>
                    {Profile.Cup.map(Cup => <option value={Cup.value}>{Cup.name}</option>)}
                </select>
              </span>
            </li>
            <li>
              <span className="dan">胸周りサイズ</span>
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
                  placeholder='胸周りサイズ'
                />                
              </span>
            </li>
            <li>
              <span className="dan">ウエストサイズ</span>
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
                  placeholder='ウエストサイズ'
                />                
              </span>
            </li>
            <li>
              <span className="dan">ヒップサイズ</span>
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
                  placeholder='ヒップサイズ'
                />                
              </span>
            </li>
            <li>
              <span className="dan">血液型</span>
              <span className="dan2">
                <select
                  defaultValue="0" //defaultの読み込みと設定が必要
                  onChange={evt => setBloodType(evt.target.value)}>
                    {Profile.BloodType.map(BloodType => <option value={BloodType.value}>{BloodType.name}</option>)}
                </select>
              </span>
            </li>
            <li>
              <span className="dan">職業</span>
              <span className="dan2">
                <select
                  defaultValue="0" //defaultの読み込みと設定が必要
                  onChange={evt => setJob(evt.target.value)}>
                    {Profile.Job.map(Job => <option value={Job.value}>{Job.name}</option>)}
                </select>
              </span>
            </li>
            <li>
              <span className="dan">学歴</span>
              <span className="dan2">
                <select
                  defaultValue="0" //defaultの読み込みと設定が必要
                  onChange={evt => setEduBack(evt.target.value)}>
                    {Profile.EduBack.map(EduBack => <option value={EduBack.value}>{EduBack.name}</option>)}
                </select>
              </span>
            </li>
            <li>
              <span className="dan">出身地</span>
              <span className="dan2">
                <select
                  defaultValue="0" //defaultの読み込みと設定が必要
                  onChange={evt => setBirthPrefecture(evt.target.value)}>
                    {Profile.Area.map(Area => <option value={Area.value}>{Area.name}</option>)}
                </select>
              </span>
            </li>
            <li>
              <span className="dan">星座</span>
              <span className="dan2">
                <select
                  defaultValue="0" //defaultの読み込みと設定が必要
                  onChange={evt => setZodiac(evt.target.value)}>
                    {Profile.Zodiac.map(Zodiac => <option value={Zodiac.value}>{Zodiac.name}</option>)}
                </select>
              </span>
            </li>

          
          <input
            // プルダウンでの選択式にしたい
            type="text"
            // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
            // title="有効なメールアドレスを入力してください"
            onChange={evt => {
              // 本当は、この段階で入力制限を設けたい。ポップアップなどで入力できないことを示す？
              setMarriageStatus(evt.target.value.replace(/"/g, '”').replace(/#/g, '＃').replace(/\$/g, '＄').replace(/&/g, '＆').replace(/'/g, '’').replace(/\(/g,'（').replace(/\)/g,'）').replace(/\\/g, '＼').replace(/</g, '＜').replace(/>/g, '＞').replace(/\*/g, '＊').replace(/`/g, '｀').replace(/\|/g, '｜'))
            }}
            placeholder='交際状況'
          /><br />

          <input
            // プルダウンでの選択式にしたい
            type="text"
            // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
            // title="有効なメールアドレスを入力してください"
            onChange={evt => {
              // 本当は、この段階で入力制限を設けたい。ポップアップなどで入力できないことを示す？
              setKids(evt.target.value.replace(/"/g, '”').replace(/#/g, '＃').replace(/\$/g, '＄').replace(/&/g, '＆').replace(/'/g, '’').replace(/\(/g,'（').replace(/\)/g,'）').replace(/\\/g, '＼').replace(/</g, '＜').replace(/>/g, '＞').replace(/\*/g, '＊').replace(/`/g, '｀').replace(/\|/g, '｜'))
            }}
            placeholder='子供'
          /><br />

          <input
            // プルダウンでの選択式にしたい
            type="text"
            // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
            // title="有効なメールアドレスを入力してください"
            onChange={evt => {
              // 本当は、この段階で入力制限を設けたい。ポップアップなどで入力できないことを示す？
              setTabacco(evt.target.value.replace(/"/g, '”').replace(/#/g, '＃').replace(/\$/g, '＄').replace(/&/g, '＆').replace(/'/g, '’').replace(/\(/g,'（').replace(/\)/g,'）').replace(/\\/g, '＼').replace(/</g, '＜').replace(/>/g, '＞').replace(/\*/g, '＊').replace(/`/g, '｀').replace(/\|/g, '｜'))
            }}
            placeholder='タバコ'
          /><br />
          
          <input
            // プルダウンでの選択式にしたい
            type="text"
            // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
            // title="有効なメールアドレスを入力してください"
            onChange={evt => {
              // 本当は、この段階で入力制限を設けたい。ポップアップなどで入力できないことを示す？
              setAlchole(evt.target.value.replace(/"/g, '”').replace(/#/g, '＃').replace(/\$/g, '＄').replace(/&/g, '＆').replace(/'/g, '’').replace(/\(/g,'（').replace(/\)/g,'）').replace(/\\/g, '＼').replace(/</g, '＜').replace(/>/g, '＞').replace(/\*/g, '＊').replace(/`/g, '｀').replace(/\|/g, '｜'))
            }}
            placeholder='お酒'
          /><br />

          <input
            // プルダウンでの選択式にしたい
            type="text"
            // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
            // title="有効なメールアドレスを入力してください"
            onChange={evt => {
              // 本当は、この段階で入力制限を設けたい。ポップアップなどで入力できないことを示す？
              setCar(evt.target.value.replace(/"/g, '”').replace(/#/g, '＃').replace(/\$/g, '＄').replace(/&/g, '＆').replace(/'/g, '’').replace(/\(/g,'（').replace(/\)/g,'）').replace(/\\/g, '＼').replace(/</g, '＜').replace(/>/g, '＞').replace(/\*/g, '＊').replace(/`/g, '｀').replace(/\|/g, '｜'))
            }}
            placeholder='車'
          /><br />

          <input
            // プルダウンでの選択式にしたい
            type="text"
            // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
            // title="有効なメールアドレスを入力してください"
            onChange={evt => {
              // 本当は、この段階で入力制限を設けたい。ポップアップなどで入力できないことを示す？
              setInterest(evt.target.value.replace(/"/g, '”').replace(/#/g, '＃').replace(/\$/g, '＄').replace(/&/g, '＆').replace(/'/g, '’').replace(/\(/g,'（').replace(/\)/g,'）').replace(/\\/g, '＼').replace(/</g, '＜').replace(/>/g, '＞').replace(/\*/g, '＊').replace(/`/g, '｀').replace(/\|/g, '｜'))
            }}
            placeholder='興味あること'
          /><br />

          <input
            // プルダウンでの選択式にしたい
            type="text"
            // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
            // title="有効なメールアドレスを入力してください"
            onChange={evt => {
              // 本当は、この段階で入力制限を設けたい。ポップアップなどで入力できないことを示す？
              setProfilePicture(evt.target.value.replace(/"/g, '”').replace(/#/g, '＃').replace(/\$/g, '＄').replace(/&/g, '＆').replace(/'/g, '’').replace(/\(/g,'（').replace(/\)/g,'）').replace(/\\/g, '＼').replace(/</g, '＜').replace(/>/g, '＞').replace(/\*/g, '＊').replace(/`/g, '｀').replace(/\|/g, '｜'))
            }}
            placeholder='プロフィール写真'
          /><br />
  
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
          /><br />

          <input
            // プルダウンでの選択式にしたい
            type="text"
            // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
            // title="有効なメールアドレスを入力してください"
            onChange={evt => {
              // 本当は、この段階で入力制限を設けたい。ポップアップなどで入力できないことを示す？
              setPreferedAge(evt.target.value.replace(/"/g, '”').replace(/#/g, '＃').replace(/\$/g, '＄').replace(/&/g, '＆').replace(/'/g, '’').replace(/\(/g,'（').replace(/\)/g,'）').replace(/\\/g, '＼').replace(/</g, '＜').replace(/>/g, '＞').replace(/\*/g, '＊').replace(/`/g, '｀').replace(/\|/g, '｜'))
            }}
            placeholder='希望する年齢'
          /><br />

          <input
            // プルダウンでの選択式にしたい
            type="text"
            // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
            // title="有効なメールアドレスを入力してください"
            onChange={evt => {
              // 本当は、この段階で入力制限を設けたい。ポップアップなどで入力できないことを示す？
              setPreferedPersonality(evt.target.value.replace(/"/g, '”').replace(/#/g, '＃').replace(/\$/g, '＄').replace(/&/g, '＆').replace(/'/g, '’').replace(/\(/g,'（').replace(/\)/g,'）').replace(/\\/g, '＼').replace(/</g, '＜').replace(/>/g, '＞').replace(/\*/g, '＊').replace(/`/g, '｀').replace(/\|/g, '｜'))
            }}
            placeholder='希望する性格'
          /><br />

          <input
            // プルダウンでの選択式にしたい
            type="text"
            // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
            // title="有効なメールアドレスを入力してください"
            onChange={evt => {
              // 本当は、この段階で入力制限を設けたい。ポップアップなどで入力できないことを示す？
              setPersonality(evt.target.value.replace(/"/g, '”').replace(/#/g, '＃').replace(/\$/g, '＄').replace(/&/g, '＆').replace(/'/g, '’').replace(/\(/g,'（').replace(/\)/g,'）').replace(/\\/g, '＼').replace(/</g, '＜').replace(/>/g, '＞').replace(/\*/g, '＊').replace(/`/g, '｀').replace(/\|/g, '｜'))
            }}
            placeholder='性格'
          /><br />

          <input
            // プルダウンでの選択式にしたい
            type="text"
            // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
            // title="有効なメールアドレスを入力してください"
            onChange={evt => {
              // 本当は、この段階で入力制限を設けたい。ポップアップなどで入力できないことを示す？
              setSelfCute(evt.target.value.replace(/"/g, '”').replace(/#/g, '＃').replace(/\$/g, '＄').replace(/&/g, '＆').replace(/'/g, '’').replace(/\(/g,'（').replace(/\)/g,'）').replace(/\\/g, '＼').replace(/</g, '＜').replace(/>/g, '＞').replace(/\*/g, '＊').replace(/`/g, '｀').replace(/\|/g, '｜'))
            }}
            placeholder='自己評価(可愛さ)'
          /><br />
          <input
            // プルダウンでの選択式にしたい
            type="text"
            // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
            // title="有効なメールアドレスを入力してください"
            onChange={evt => {
              // 本当は、この段階で入力制限を設けたい。ポップアップなどで入力できないことを示す？
              setSelfSexy(evt.target.value.replace(/"/g, '”').replace(/#/g, '＃').replace(/\$/g, '＄').replace(/&/g, '＆').replace(/'/g, '’').replace(/\(/g,'（').replace(/\)/g,'）').replace(/\\/g, '＼').replace(/</g, '＜').replace(/>/g, '＞').replace(/\*/g, '＊').replace(/`/g, '｀').replace(/\|/g, '｜'))
            }}
            placeholder='自己評価(セクシー)'
          /><br />
          <input
            // プルダウンでの選択式にしたい
            type="text"
            // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
            // title="有効なメールアドレスを入力してください"
            onChange={evt => {
              // 本当は、この段階で入力制限を設けたい。ポップアップなどで入力できないことを示す？
              setSelfKindness(evt.target.value.replace(/"/g, '”').replace(/#/g, '＃').replace(/\$/g, '＄').replace(/&/g, '＆').replace(/'/g, '’').replace(/\(/g,'（').replace(/\)/g,'）').replace(/\\/g, '＼').replace(/</g, '＜').replace(/>/g, '＞').replace(/\*/g, '＊').replace(/`/g, '｀').replace(/\|/g, '｜'))
            }}
            placeholder='自己評価(優しさ)'
          /><br />
          <input
            // プルダウンでの選択式にしたい
            type="text"
            // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
            // title="有効なメールアドレスを入力してください"
            onChange={evt => {
              // 本当は、この段階で入力制限を設けたい。ポップアップなどで入力できないことを示す？
              setSelfSmartness(evt.target.value.replace(/"/g, '”').replace(/#/g, '＃').replace(/\$/g, '＄').replace(/&/g, '＆').replace(/'/g, '’').replace(/\(/g,'（').replace(/\)/g,'）').replace(/\\/g, '＼').replace(/</g, '＜').replace(/>/g, '＞').replace(/\*/g, '＊').replace(/`/g, '｀').replace(/\|/g, '｜'))
            }}
            placeholder='自己評価(賢さ)'
          /><br />
          <input
            // プルダウンでの選択式にしたい
            type="text"
            // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
            // title="有効なメールアドレスを入力してください"
            onChange={evt => {
              // 本当は、この段階で入力制限を設けたい。ポップアップなどで入力できないことを示す？
              setSelfNeatness(evt.target.value.replace(/"/g, '”').replace(/#/g, '＃').replace(/\$/g, '＄').replace(/&/g, '＆').replace(/'/g, '’').replace(/\(/g,'（').replace(/\)/g,'）').replace(/\\/g, '＼').replace(/</g, '＜').replace(/>/g, '＞').replace(/\*/g, '＊').replace(/`/g, '｀').replace(/\|/g, '｜'))
            }}
            placeholder='自己評価(清楚さ)'
          /><br />
          <input
            // プルダウンでの選択式にしたい
            type="text"
            // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
            // title="有効なメールアドレスを入力してください"
            onChange={evt => {
              // 本当は、この段階で入力制限を設けたい。ポップアップなどで入力できないことを示す？
              setSelfFashionable(evt.target.value.replace(/"/g, '”').replace(/#/g, '＃').replace(/\$/g, '＄').replace(/&/g, '＆').replace(/'/g, '’').replace(/\(/g,'（').replace(/\)/g,'）').replace(/\\/g, '＼').replace(/</g, '＜').replace(/>/g, '＞').replace(/\*/g, '＊').replace(/`/g, '｀').replace(/\|/g, '｜'))
            }}
            placeholder='自己評価(ファッション)'
          /><br />
          <input
            // プルダウンでの選択式にしたい
            type="text"
            // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
            // title="有効なメールアドレスを入力してください"
            onChange={evt => {
              // 本当は、この段階で入力制限を設けたい。ポップアップなどで入力できないことを示す？
              setSelfBrightness(evt.target.value.replace(/"/g, '”').replace(/#/g, '＃').replace(/\$/g, '＄').replace(/&/g, '＆').replace(/'/g, '’').replace(/\(/g,'（').replace(/\)/g,'）').replace(/\\/g, '＼').replace(/</g, '＜').replace(/>/g, '＞').replace(/\*/g, '＊').replace(/`/g, '｀').replace(/\|/g, '｜'))
            }}
            placeholder='自己評価(明るさ)'
          /><br />
          <input
            // プルダウンでの選択式にしたい
            type="text"
            // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
            // title="有効なメールアドレスを入力してください"
            onChange={evt => {
              // 本当は、この段階で入力制限を設けたい。ポップアップなどで入力できないことを示す？
              setSelfElegance(evt.target.value.replace(/"/g, '”').replace(/#/g, '＃').replace(/\$/g, '＄').replace(/&/g, '＆').replace(/'/g, '’').replace(/\(/g,'（').replace(/\)/g,'）').replace(/\\/g, '＼').replace(/</g, '＜').replace(/>/g, '＞').replace(/\*/g, '＊').replace(/`/g, '｀').replace(/\|/g, '｜'))
            }}
            placeholder='自己評価(エレガンス)'
          /><br />
          </ul>
          <button type="submit">保存する</button>
        </form>
        <br />
        <Link to="../">戻る</Link>
      </div>
  );
}
