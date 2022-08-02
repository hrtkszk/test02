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


export function ProfileSetting() {
  //  各ステータスのdefaultにすでに設定された値を入れたい。
  // console.log(Profile.Area);
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
  const [BirthPlace, setBirthPlace] = useState("");
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
  // const [ProfilePicture, setProfilePicture] = useState("");
  const [ProfileMessage, setProfileMessage] = useState("");
  // 相手に求めること
  const [PreferedAge1, setPreferedAge1] = useState("");
  const [PreferedAge2, setPreferedAge2] = useState("");
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

  const [ProfileArea, setProfileArea] = useState("0");
  const [Profile, setProfile] = useState([]);
  const [initialized, setinitialized] = useState(false);

  const initialRequestOptions ={
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({"UUID":auth.user})
  }

  console.log(ProfileArea)
  
  // ページが読み込まれる時に実行し、Profileとして登録する。
  if (initialized===false) {
    fetch("../../get_profile.php",initialRequestOptions)
    .then((response) => response.json())
    .then(result => {
      console.log(result)
      console.log(result.result)
      setProfile(result.result[0])
      setProfileArea(result.result[0].Prefecture)
    })
    setinitialized(true)
  }
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
        "BirthPlace":BirthPlace,
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

  function AreaDetail({Prefecture}) {
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
                defaultValue={ProfileArea}//defaultの読み込みと設定が必要
                onChange={evt => setPrefecture(evt.target.value)}>
                  {/* {Object.keys(ProfileDB.Area).map(key => <option value={key}>{ProfileDB.Area[key]}</option>)} */}
              </select>
              <AreaDetail Prefecture={Prefecture}/>
            </span>
            </li>
            <li>
              <span className="dan">身長</span>
              <span className="dan2">
                <select
                  defaultValue={"1"} //defaultの読み込みと設定が必要
                  onChange={evt => setHeight(evt.target.value)}>
                    {Object.keys(ProfileDB.Height).map(key => <option value={key}>{ProfileDB.Height[key]}</option>)}
                </select>
              </span>
            </li>
            <li>
              <span className="dan">スタイル</span>
              <span className="dan2">
                <select
                  defaultValue={Profile.Style} //defaultの読み込みと設定が必要
                  onChange={evt => setStyle(evt.target.value)}>
                    {Object.keys(ProfileDB.Style).map(key => <option value={key}>{ProfileDB.Style[key]}</option>)}
                </select>
              </span>
            </li>
            <li>
              <span className="dan">ルックス</span>
              <span className="dan2">
                <select
                  defaultValue={Profile.Looks} //defaultの読み込みと設定が必要
                  onChange={evt => setLooks(evt.target.value)}>
                    {Object.keys(ProfileDB.Looks).map(key => <option value={key}>{ProfileDB.Looks[key]}</option>)}
                </select>
              </span>
            </li>
            <li>
              <span className="dan">カップ</span>
              <span className="dan2">
                <select
                  defaultValue={Profile.Cup} //defaultの読み込みと設定が必要
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
                  defaultValue={ProfileDB.BloodType[Profile.BloodType]} //defaultの読み込みと設定が必要
                  onChange={evt => setBloodType(evt.target.value)}>
                    {Object.keys(ProfileDB.BloodType).map(key => <option value={key}>{ProfileDB.BloodType[key]}</option>)}
                </select>
              </span>
            </li>
            <li>
              <span className="dan">職業</span>
              <span className="dan2">
                <select
                  defaultValue={ProfileDB.Job[Profile.Job]} //defaultの読み込みと設定が必要
                  onChange={evt => setJob(evt.target.value)}>
                    {Object.keys(ProfileDB.Job).map(key => <option value={key}>{ProfileDB.Job[key]}</option>)}
                </select>
              </span>
            </li>
            <li>
              <span className="dan">学歴</span>
              <span className="dan2">
                <select
                  defaultValue={ProfileDB.EduBack[Profile.EduBack]} //defaultの読み込みと設定が必要
                  onChange={evt => setEduBack(evt.target.value)}>
                    {Object.keys(ProfileDB.EduBack).map(key => <option value={key}>{ProfileDB.EduBack[key]}</option>)}
                </select>
              </span>
            </li>
            <li>
              <span className="dan">出身地</span>
              <span className="dan2">
                <select
                  defaultValue="0" //defaultの読み込みと設定が必要
                  onChange={evt => setBirthPlace(evt.target.value)}>
                    {/* {Object.keys(ProfileDB.Area).map(key => <option value={key}>{ProfileDB.Area[key]}</option>)} */}
                </select>
              </span>
            </li>
            <li>
              <span className="dan">星座</span>
              <span className="dan2">
                <select
                  defaultValue={ProfileDB.Zodiac[Profile.Zodiac]} //defaultの読み込みと設定が必要
                  onChange={evt => setZodiac(evt.target.value)}>
                    {Object.keys(ProfileDB.Zodiac).map(key => <option value={key}>{ProfileDB.Zodiac[key]}</option>)}
                </select>
              </span>
            </li>
            <li>
              <span className="dan">交際状況</span>
              <span className="dan2">
                <select
                  defaultValue={ProfileDB.MarriageStatus[Profile.MarriageStatus]} //defaultの読み込みと設定が必要
                  onChange={evt => setMarriageStatus(evt.target.value)}>
                    {Object.keys(ProfileDB.MarriageStatus).map(key => <option value={key}>{ProfileDB.MarriageStatus[key]}</option>)}
                </select>
              </span>
            </li>
            <li>
              <span className="dan">子供</span>
              <span className="dan2">
                <select
                  defaultValue={ProfileDB.Kids[Profile.Kids]} //defaultの読み込みと設定が必要
                  onChange={evt => setKids(evt.target.value)}>
                    {Object.keys(ProfileDB.Kids).map(key => <option value={key}>{ProfileDB.Kids[key]}</option>)}
                </select>
              </span>
            </li>
            <li>
              <span className="dan">タバコ</span>
              <span className="dan2">
                <select
                  defaultValue={ProfileDB.Tabacco[Profile.Tabacco]} //defaultの読み込みと設定が必要
                  onChange={evt => setTabacco(evt.target.value)}>
                    {Object.keys(ProfileDB.Tabacco).map(key => <option value={key}>{ProfileDB.Tabacco[key]}</option>)}
                </select>
              </span>
            </li>
            <li>
              <span className="dan">お酒</span>
              <span className="dan2">
                <select
                  defaultValue={ProfileDB.Alchole[Profile.Alchole]} //defaultの読み込みと設定が必要
                  onChange={evt => setAlchole(evt.target.value)}>
                    {Object.keys(ProfileDB.Alchole).map(key => <option value={key}>{ProfileDB.Alchole[key]}</option>)}
                </select>
              </span>
            </li>
            <li>
              <span className="dan">車</span>
              <span className="dan2">
                <select
                  defaultValue={ProfileDB.Car[Profile.Car]} //defaultの読み込みと設定が必要
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
                  defaultValue={ProfileDB.Interest[Profile.Interest]} //defaultの読み込みと設定が必要
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
                  defaultValue={ProfileDB.PreferedAge[Profile.PreferedAge1]} //defaultの読み込みと設定が必要
                  onChange={evt => setPreferedAge1(evt.target.value)}>
                    {Object.keys(ProfileDB.PreferedAge).map(key => <option value={key}>{ProfileDB.PreferedAge[key]}</option>)}
                </select>〜<select
                  defaultValue={ProfileDB.PreferedAge[Profile.PreferedAge2]} //defaultの読み込みと設定が必要
                  onChange={evt => setPreferedAge2(evt.target.value)}>
                    {Object.keys(ProfileDB.PreferedAge).map(key => <option value={key}>{ProfileDB.PreferedAge[key]}</option>)}
                </select>
              </span>
            </li>
            <li>
              {/* 別のリストにして、複数選択・検索できるようにする。Personalityと共通 */}
              <span className="dan">希望する性格</span>
              <span className="dan2">
                <select
                  defaultValue={ProfileDB.Personality[Profile.PreferedPersonality]} //defaultの読み込みと設定が必要
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
                  defaultValue={ProfileDB.Personality[Profile.Personality]} //defaultの読み込みと設定が必要
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
                  defaultValue={ProfileDB.Self[Profile.SelfCute]} //defaultの読み込みと設定が必要
                  onChange={evt => setSelfCute(evt.target.value)}>
                    {Object.keys(ProfileDB.Self).map(key => <option value={key}>{ProfileDB.Self[key]}</option>)}
                </select>
              </span>
            </li>
            <li>
              <span className="dan">セクシーさ</span>
              <span className="dan2">
                <select
                  defaultValue={ProfileDB.Self[Profile.SelfSexy]} //defaultの読み込みと設定が必要
                  onChange={evt => setSelfSexy(evt.target.value)}>
                    {Object.keys(ProfileDB.Self).map(key => <option value={key}>{ProfileDB.Self[key]}</option>)}
                </select>
              </span>
            </li>
            <li>
              <span className="dan">優しさ</span>
              <span className="dan2">
                <select
                  defaultValue={ProfileDB.Self[Profile.SelfKindness]} //defaultの読み込みと設定が必要
                  onChange={evt => setSelfKindness(evt.target.value)}>
                    {Object.keys(ProfileDB.Self).map(key => <option value={key}>{ProfileDB.Self[key]}</option>)}
                </select>
              </span>
            </li>
            <li>
              <span className="dan">賢さ</span>
              <span className="dan2">
                <select
                  defaultValue={ProfileDB.Self[Profile.SelfSmartness]} //defaultの読み込みと設定が必要
                  onChange={evt => setSelfSmartness(evt.target.value)}>
                    {Object.keys(ProfileDB.Self).map(key => <option value={key}>{ProfileDB.Self[key]}</option>)}
                </select>
              </span>
            </li>
            <li>
              <span className="dan">清楚さ</span>
              <span className="dan2">
                <select
                  defaultValue={ProfileDB.Self[Profile.SelfNeatness]} //defaultの読み込みと設定が必要
                  onChange={evt => setSelfNeatness(evt.target.value)}>
                    {Object.keys(ProfileDB.Self).map(key => <option value={key}>{ProfileDB.Self[key]}</option>)}
                </select>
              </span>
            </li>
            <li>
              <span className="dan">ファッション</span>
              <span className="dan2">
                <select
                  defaultValue={ProfileDB.Self[Profile.SelfFashionable]} //defaultの読み込みと設定が必要
                  onChange={evt => setSelfFashionable(evt.target.value)}>
                    {Object.keys(ProfileDB.Self).map(key => <option value={key}>{ProfileDB.Self[key]}</option>)}
                </select>
              </span>
            </li>
            <li>
              <span className="dan">明るさ</span>
              <span className="dan2">
                <select
                  defaultValue={ProfileDB.Self[Profile.SelfBrightness]} //defaultの読み込みと設定が必要
                  onChange={evt => setSelfBrightness(evt.target.value)}>
                    {Object.keys(ProfileDB.Self).map(key => <option value={key}>{ProfileDB.Self[key]}</option>)}
                </select>
              </span>
            </li>
            <li>
              <span className="dan">エレガンス</span>
              <span className="dan2">
                <select
                  defaultValue={ProfileDB.Self[Profile.SelfElegance]} //defaultの読み込みと設定が必要
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
