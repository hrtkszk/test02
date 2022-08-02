import * as React from "react";
import {
  Link
//   // Outlet
//   useNavigate
} from "react-router-dom";
import { useState } from 'react';
import { useAuth } from "./useAuth";
import "./ProfileDetail.css";

export function ProfileDetail() {
  let auth = useAuth();
  const [Profile, setProfile] = useState([]);
  const [initialized, setinitialized] = useState(false);

  const initialRequestOptions ={
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({"UUID":auth.user})
  }

  // ページが読み込まれる時に実行し、Profileとして登録する。
  if (initialized===false) {
    fetch("../get_profile.php",initialRequestOptions)
    .then((response)=> {
      console.log(response)
      response.json()
    })
    .then(result =>{
      console.log(result)
      setProfile(result.result[0])
    })
    setinitialized(true)
  }

  // profileTableにUUIDがなければ、プロフィール設定を促すページを表示
  if (Profile===[]) {
    return (
      <>
          <h3>プロフィール</h3>
          <p>
              プロフィールを設定してください。
          </p>
          <Link to="../ProfileSetting">プロフィール設定</Link><br />
          <Link to="../../">戻る</Link>
      </>
    );
  
    //  profileTableにUUIDがあれば、プロフィールを表示＋設定ページボタンの表示
  } else {
    return (
      <div>
        <h1>プロフィール</h1>
        <ul>
          <li>
            <span className="dan">エリア</span>
            <span className="dan2">{Profile.Prefecture}　{Profile.City}</span>
          </li>
          <li>
            <span className="dan">身長</span>
            <span className="dan2">{Profile.Height}</span>
          </li>
          <li>
            <span className="dan">スタイル</span>
            <span className="dan2">{Profile.Style}</span>
          </li>
          <li>
            <span className="dan">ルックス</span>
            <span className="dan2">{Profile.Looks}</span>
          </li>
          <li>
            <span className="dan">カップ</span>
            <span className="dan2">{Profile.Cup}</span>
          </li>
          <li>
            <span className="dan">胸サイズ</span>
            <span className="dan2">{Profile.BustSize}</span>
          </li>
          <li>
            <span className="dan">腰サイズ</span>
            <span className="dan2">{Profile.WestSize}</span>
          </li>
          <li>
            <span className="dan">ヒップサイズ</span>
            <span className="dan2">{Profile.HipSize}</span>
          </li>
          <li>
            <span className="dan">血液型</span>
            <span className="dan2">{Profile.BloodType}</span>
          </li>
          <li>
            <span className="dan">職業</span>
            <span className="dan2">{Profile.Job}</span>
          </li>
          <li>
            <span className="dan">学歴</span>
            <span className="dan2">{Profile.EduBack}</span>
          </li>
          <li>
            <span className="dan">出身地</span>
            <span className="dan2">{Profile.BirthPlace}</span>
          </li>
          <li>
            <span className="dan">星座</span>
            <span className="dan2">{Profile.Zodiac}</span>
          </li>
          <li>
            <span className="dan">交際状況</span>
            <span className="dan2">{Profile.MarriageStatus}</span>
          </li>
          <li>
            <span className="dan">子供</span>
            <span className="dan2">{Profile.Kids}</span>
          </li>
          <li>
            <span className="dan">タバコ</span>
            <span className="dan2">{Profile.Tabacco}</span>
          </li>
          <li>
            <span className="dan">お酒</span>
            <span className="dan2">{Profile.Alchole}</span>
          </li>
          <li>
            <span className="dan">車</span>
            <span className="dan2">{Profile.Car}</span>
          </li>
          <li>
            <span className="dan">興味あること</span>
            <span className="dan2">{Profile.Interest}</span>
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
            <span className="dan">希望する年齢1</span>
            <span className="dan2">{Profile.PreferedAge1}</span>
          </li>
          <li>
            <span className="dan">希望する年齢2</span>
            <span className="dan2">{Profile.PreferedAge2}</span>
          </li>
          <li>
            <span className="dan">希望する性格</span>
            <span className="dan2">{Profile.PreferedPersonality}</span>
          </li>
          <li>
            <span className="dan">性格</span>
            <span className="dan2">{Profile.Personality}</span>
          </li>
          <li>
            <span className="dan">自己評価(可愛さ)</span>
            <span className="dan2">{Profile.SelfCute}</span>
          </li>
          <li>
            <span className="dan">自己評価(セクシー)</span>
            <span className="dan2">{Profile.SelfSexy}</span>
          </li>
          <li>
            <span className="dan">自己評価(優しさ)</span>
            <span className="dan2">{Profile.SelfKindness}</span>
          </li>
          <li>
            <span className="dan">自己評価(賢さ)</span>
            <span className="dan2">{Profile.SelfSmartness}</span>
          </li>
          <li>
            <span className="dan">自己評価(清楚さ)</span>
            <span className="dan2">{Profile.SelfNeatness}</span>
          </li>
          <li>
            <span className="dan">自己評価(ファッション)</span>
            <span className="dan2">{Profile.SelfFashionable}</span>
          </li>
          <li>
            <span className="dan">自己評価(明るさ)</span>
            <span className="dan2">{Profile.SelfBrightness}</span>
          </li>
          <li>
            <span className="dan">自己評価(エレガンス)</span>
            <span className="dan2">{Profile.SelfElegance}</span>
          </li>
        </ul>
        <div>
          <Link to="../../">戻る</Link>
        </div>
      </div>
    );
  }
}
