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
import FormSelectRange from "./FormSelectRange";
import FormMultiSelect2 from "./FormMultiSelect2";
// import FormSelect from "./FormSelect";

export function ProfileSearchSetting1() {
  // const [TempArea, setTempArea] = useState("0");
  // const [TempPrefecture, setTempPrefecture] = useState("0");
  //  各ステータスのdefaultにすでに設定された値を入れたい。
  // 基本状況
    // ProfileSearchDBの1つのUUID内で、配列かjsonで作成する
  const [PSGender, setPSGender] = useState({});
  const [PSAge, setPSAge] = useState({});
  const [PSProfilePicture, setPSProfilePicture] = useState({});
  const [PSProfileMessage, setPSProfileMessage] = useState({});

  // 地域状況
    // ProfileSearchDBの1つのUUID内で、配列かjsonで作成する
  const [PSArea, setPSArea] = useState({});

  // 身体的情報
  const [PSHeight, setPSHeight] = useState({});
    // ProfileSearchDBの1つのUUID内で、配列かjsonで作成する
  const [PSStyle, setPSStyle] = useState({});
    // ProfileSearchDBの1つのUUID内で、配列かjsonで作成する
  const [PSLooks, setPSLooks] = useState({});
  const [PSCup, setPSCup] = useState({});
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
    // 複数設定　対　複数選択となる。
    // ProfileSearch用として別のTable、設定方法が必要。UUIDも当然記載。
  const [PSPersonality, setPSPersonality] = useState({});

  const [PSAnnuIncome, setPSAnnuIncome] = useState({});

  // 自己評価
  const [PSCute, setPSCute] = useState({});
  const [PSSexy, setPSSexy] = useState({});
  const [PSKindness, setPSKindness] = useState({});
  const [PSSmartness, setPSSmartness] = useState({});
  const [PSNeatness, setPSNeatness] = useState({});
  const [PSFashionable, setPSFashionable] = useState({});
  const [PSBrightness, setPSBrightness] = useState({});
  const [PSElegance, setPSElegance] = useState({});

  let auth = useAuth();

  let navigate = useNavigate();

  const [initialized, setinitialized] = useState(false);

  const initialRequestOptions ={
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({"UUID":auth.user})
  }
  
  // ページが読み込まれる時に実行し、ProfileSearchSettingとして登録する。
  if (initialized===false) {
    fetch("../../get_profilesearcharea.php",initialRequestOptions)
    .then((response) => response.json())
    .then(result => {
      console.log(result.result)
      if (result.result !== "PSAND") {
        setPSArea(result.result)
      }
    })
    fetch("../../get_profilesearchsetting1.php",initialRequestOptions)
    .then((response) => response.json())
    .then(result => {
      if (result.result !== "PSSND") {
        console.log("result:",result.result)
        setPSGender({
          0 : parseInt(result.result[0].PSGender0),
          1 : parseInt(result.result[0].PSGender1),
          2 : parseInt(result.result[0].PSGender2),
          3 : parseInt(result.result[0].PSGender3),
          4 : parseInt(result.result[0].PSGender4),
          5 : parseInt(result.result[0].PSGender5),
          6 : parseInt(result.result[0].PSGender6),
          7 : parseInt(result.result[0].PSGender7)
        })
        setPSAge({
          0 : parseInt(result.result[0].PSAge0),
          1 : parseInt(result.result[0].PSAge1),
          2 : parseInt(result.result[0].PSAge2),
          3 : parseInt(result.result[0].PSAge3),
          4 : parseInt(result.result[0].PSAge4),
          5 : parseInt(result.result[0].PSAge5),
          6 : parseInt(result.result[0].PSAge6),
          7 : parseInt(result.result[0].PSAge7),
          8 : parseInt(result.result[0].PSAge8),
          9 : parseInt(result.result[0].PSAge9),
          10 : parseInt(result.result[0].PSAge10),
          11 : parseInt(result.result[0].PSAge11),
          12 : parseInt(result.result[0].PSAge12),
          13 : parseInt(result.result[0].PSAge13),
          14 : parseInt(result.result[0].PSAge14),
          15 : parseInt(result.result[0].PSAge15),
          16 : parseInt(result.result[0].PSAge16),
          17 : parseInt(result.result[0].PSAge17)
        })
        setPSProfilePicture({
          0 : parseInt(result.result[0].PSProfilePicture0),
          1 : parseInt(result.result[0].PSProfilePicture1),
          2 : parseInt(result.result[0].PSProfilePicture2)
        })
        setPSProfileMessage({
          0 : parseInt(result.result[0].PSProfileMessage0),
          1 : parseInt(result.result[0].PSProfileMessage1),
          2 : parseInt(result.result[0].PSProfileMessage2)
        })
        setPSHeight({
          0 : parseInt(result.result[0].PSHeight0),
          1 : parseInt(result.result[0].PSHeight1),
          2 : parseInt(result.result[0].PSHeight2),
          3 : parseInt(result.result[0].PSHeight3),
          4 : parseInt(result.result[0].PSHeight4),
          5 : parseInt(result.result[0].PSHeight5),
          6 : parseInt(result.result[0].PSHeight6),
          7 : parseInt(result.result[0].PSHeight7),
          8 : parseInt(result.result[0].PSHeight8),
          9 : parseInt(result.result[0].PSHeight9)
        })
        setPSStyle({
          0 : parseInt(result.result[0].PSStyle0),
          1 : parseInt(result.result[0].PSStyle1),
          2 : parseInt(result.result[0].PSStyle2),
          3 : parseInt(result.result[0].PSStyle3),
          4 : parseInt(result.result[0].PSStyle4),
          5 : parseInt(result.result[0].PSStyle5),
          6 : parseInt(result.result[0].PSStyle6),
          7 : parseInt(result.result[0].PSStyle7),
          8 : parseInt(result.result[0].PSStyle8),
          9 : parseInt(result.result[0].PSStyle9)
        })
        setPSLooks({
          0 : parseInt(result.result[0].PSLooks0),
          1 : parseInt(result.result[0].PSLooks1),
          2 : parseInt(result.result[0].PSLooks2),
          3 : parseInt(result.result[0].PSLooks3),
          4 : parseInt(result.result[0].PSLooks4),
          5 : parseInt(result.result[0].PSLooks5),
          6 : parseInt(result.result[0].PSLooks6),
          7 : parseInt(result.result[0].PSLooks7),
          8 : parseInt(result.result[0].PSLooks8),
          9 : parseInt(result.result[0].PSLooks9)
        })
        setPSCup({
          0 : parseInt(result.result[0].PSCup0),
          1 : parseInt(result.result[0].PSCup1),
          2 : parseInt(result.result[0].PSCup2),
          3 : parseInt(result.result[0].PSCup3),
          4 : parseInt(result.result[0].PSCup4),
          5 : parseInt(result.result[0].PSCup5),
          6 : parseInt(result.result[0].PSCup6),
          7 : parseInt(result.result[0].PSCup7),
          8 : parseInt(result.result[0].PSCup8),
          9 : parseInt(result.result[0].PSCup9)
        })
        setPSBloodType({
          0 : parseInt(result.result[0].PSBloodType0),
          1 : parseInt(result.result[0].PSBloodType1),
          2 : parseInt(result.result[0].PSBloodType2),
          3 : parseInt(result.result[0].PSBloodType3),
          4 : parseInt(result.result[0].PSBloodType4)
        })

        setPSJob({
          0 : parseInt(result.result[0].PSJob0),
          1 : parseInt(result.result[0].PSJob1),
          2 : parseInt(result.result[0].PSJob2),
          3 : parseInt(result.result[0].PSJob3),
          4 : parseInt(result.result[0].PSJob4),
          5 : parseInt(result.result[0].PSJob5),
          6 : parseInt(result.result[0].PSJob6),
          7 : parseInt(result.result[0].PSJob7),
          8 : parseInt(result.result[0].PSJob8),
          9 : parseInt(result.result[0].PSJob9),
          10 : parseInt(result.result[0].PSJob10),
          11 : parseInt(result.result[0].PSJob11),
          12 : parseInt(result.result[0].PSJob12),
          13 : parseInt(result.result[0].PSJob13),
          14 : parseInt(result.result[0].PSJob14),
          15 : parseInt(result.result[0].PSJob15),
          16 : parseInt(result.result[0].PSJob16),
          17 : parseInt(result.result[0].PSJob17),
          18 : parseInt(result.result[0].PSJob18),
          19 : parseInt(result.result[0].PSJob19),
          20 : parseInt(result.result[0].PSJob20),
          21 : parseInt(result.result[0].PSJob21),
          22 : parseInt(result.result[0].PSJob22),
          23 : parseInt(result.result[0].PSJob23),
          24 : parseInt(result.result[0].PSJob24),
          25 : parseInt(result.result[0].PSJob25),
          26 : parseInt(result.result[0].PSJob26)
        })
        setPSEduBack({
          0 : parseInt(result.result[0].PSEduBack0),
          1 : parseInt(result.result[0].PSEduBack1),
          2 : parseInt(result.result[0].PSEduBack2),
          3 : parseInt(result.result[0].PSEduBack3),
          4 : parseInt(result.result[0].PSEduBack4),
          5 : parseInt(result.result[0].PSEduBack5)
        })
        setPSZodiac({
          0 : parseInt(result.result[0].PSZodiac0),
          1 : parseInt(result.result[0].PSZodiac1),
          2 : parseInt(result.result[0].PSZodiac2),
          3 : parseInt(result.result[0].PSZodiac3),
          4 : parseInt(result.result[0].PSZodiac4),
          5 : parseInt(result.result[0].PSZodiac5),
          6 : parseInt(result.result[0].PSZodiac6),
          7 : parseInt(result.result[0].PSZodiac7),
          8 : parseInt(result.result[0].PSZodiac8),
          9 : parseInt(result.result[0].PSZodiac9),
          10 : parseInt(result.result[0].PSZodiac10),
          11 : parseInt(result.result[0].PSZodiac11),
          12 : parseInt(result.result[0].PSZodiac12)
        })
        setPSMarriageStatus({
          0 : parseInt(result.result[0].PSMarriageStatus0),
          1 : parseInt(result.result[0].PSMarriageStatus1),
          2 : parseInt(result.result[0].PSMarriageStatus2),
          3 : parseInt(result.result[0].PSMarriageStatus3),
          4 : parseInt(result.result[0].PSMarriageStatus4),
          5 : parseInt(result.result[0].PSMarriageStatus5),
          6 : parseInt(result.result[0].PSMarriageStatus6)
        })
        setPSKids({
          0 : parseInt(result.result[0].PSKids0),
          1 : parseInt(result.result[0].PSKids1),
          2 : parseInt(result.result[0].PSKids2),
          3 : parseInt(result.result[0].PSKids3)
        })
        setPSTabacco({
          0 : parseInt(result.result[0].PSTabacco0),
          1 : parseInt(result.result[0].PSTabacco1),
          2 : parseInt(result.result[0].PSTabacco2),
          3 : parseInt(result.result[0].PSTabacco3),
          4 : parseInt(result.result[0].PSTabacco4)
        })
        setPSAlchole({
          0 : parseInt(result.result[0].PSAlchole0),
          1 : parseInt(result.result[0].PSAlchole1),
          2 : parseInt(result.result[0].PSAlchole2),
          3 : parseInt(result.result[0].PSAlchole3)
        })
        setPSCar({
          0 : parseInt(result.result[0].PSCar0),
          1 : parseInt(result.result[0].PSCar1),
          2 : parseInt(result.result[0].PSCar2)
        })
        setPSInterest({
          0 : parseInt(result.result[0].PSInterest0),
          1 : parseInt(result.result[0].PSInterest1),
          2 : parseInt(result.result[0].PSInterest2),
          3 : parseInt(result.result[0].PSInterest3),
          4 : parseInt(result.result[0].PSInterest4),
          5 : parseInt(result.result[0].PSInterest5),
          6 : parseInt(result.result[0].PSInterest6),
          7 : parseInt(result.result[0].PSInterest7),
          8 : parseInt(result.result[0].PSInterest8),
          9 : parseInt(result.result[0].PSInterest9),
          10 : parseInt(result.result[0].PSInterest10),
          11 : parseInt(result.result[0].PSInterest11),
          12 : parseInt(result.result[0].PSInterest12),
          13 : parseInt(result.result[0].PSInterest13),
          14 : parseInt(result.result[0].PSInterest14),
          15 : parseInt(result.result[0].PSInterest15),
          16 : parseInt(result.result[0].PSInterest16),
          17 : parseInt(result.result[0].PSInterest17),
          18 : parseInt(result.result[0].PSInterest18),
          19 : parseInt(result.result[0].PSInterest19),
          20 : parseInt(result.result[0].PSInterest20),
          21 : parseInt(result.result[0].PSInterest21),
          22 : parseInt(result.result[0].PSInterest22),
          23 : parseInt(result.result[0].PSInterest23),
          24 : parseInt(result.result[0].PSInterest24),
          25 : parseInt(result.result[0].PSInterest25),
          26 : parseInt(result.result[0].PSInterest26),
          27 : parseInt(result.result[0].PSInterest27),
          28 : parseInt(result.result[0].PSInterest28)
        })
        setPSPersonality({
          0 : parseInt(result.result[0].PSPersonality0),
          1 : parseInt(result.result[0].PSPersonality1),
          2 : parseInt(result.result[0].PSPersonality2),
          3 : parseInt(result.result[0].PSPersonality3),
          4 : parseInt(result.result[0].PSPersonality4),
          5 : parseInt(result.result[0].PSPersonality5),
          6 : parseInt(result.result[0].PSPersonality6),
          7 : parseInt(result.result[0].PSPersonality7),
          8 : parseInt(result.result[0].PSPersonality8),
          9 : parseInt(result.result[0].PSPersonality9),
          10 : parseInt(result.result[0].PSPersonality10),
          11 : parseInt(result.result[0].PSPersonality11),
          12 : parseInt(result.result[0].PSPersonality12),
          13 : parseInt(result.result[0].PSPersonality13),
          14 : parseInt(result.result[0].PSPersonality14),
          15 : parseInt(result.result[0].PSPersonality15),
          16 : parseInt(result.result[0].PSPersonality16),
          17 : parseInt(result.result[0].PSPersonality17),
          18 : parseInt(result.result[0].PSPersonality18),
          19 : parseInt(result.result[0].PSPersonality19),
          20 : parseInt(result.result[0].PSPersonality20),
          21 : parseInt(result.result[0].PSPersonality21),
          22 : parseInt(result.result[0].PSPersonality22),
          23 : parseInt(result.result[0].PSPersonality23),
          24 : parseInt(result.result[0].PSPersonality24),
          25 : parseInt(result.result[0].PSPersonality25),
          26 : parseInt(result.result[0].PSPersonality26),
          27 : parseInt(result.result[0].PSPersonality27),
          28 : parseInt(result.result[0].PSPersonality28),
          29 : parseInt(result.result[0].PSPersonality29),
          30 : parseInt(result.result[0].PSPersonality30),
          31 : parseInt(result.result[0].PSPersonality31),
          32 : parseInt(result.result[0].PSPersonality32),
          33 : parseInt(result.result[0].PSPersonality33),
          34 : parseInt(result.result[0].PSPersonality34),
          35 : parseInt(result.result[0].PSPersonality35),
          36 : parseInt(result.result[0].PSPersonality36),
          37 : parseInt(result.result[0].PSPersonality37),
          38 : parseInt(result.result[0].PSPersonality38),
          39 : parseInt(result.result[0].PSPersonality39),
          40 : parseInt(result.result[0].PSPersonality40),
          41 : parseInt(result.result[0].PSPersonality41),
          42 : parseInt(result.result[0].PSPersonality42),
          43 : parseInt(result.result[0].PSPersonality43),
          44 : parseInt(result.result[0].PSPersonality44),
          45 : parseInt(result.result[0].PSPersonality45),
          46 : parseInt(result.result[0].PSPersonality46)
        })
        setPSAnnuIncome({
          0 : parseInt(result.result[0].PSAnnuIncome0),
          1 : parseInt(result.result[0].PSAnnuIncome1),
          2 : parseInt(result.result[0].PSAnnuIncome2),
          3 : parseInt(result.result[0].PSAnnuIncome3),
          4 : parseInt(result.result[0].PSAnnuIncome4),
          5 : parseInt(result.result[0].PSAnnuIncome5),
          6 : parseInt(result.result[0].PSAnnuIncome6),
          7 : parseInt(result.result[0].PSAnnuIncome7),
          8 : parseInt(result.result[0].PSAnnuIncome8),
          9 : parseInt(result.result[0].PSAnnuIncome9),
          10 : parseInt(result.result[0].PSAnnuIncome10)
        })
        setPSCute({
          0 : parseInt(result.result[0].PSCute0),
          1 : parseInt(result.result[0].PSCute1),
          2 : parseInt(result.result[0].PSCute2),
          3 : parseInt(result.result[0].PSCute3),
          4 : parseInt(result.result[0].PSCute4),
          5 : parseInt(result.result[0].PSCute5)
        })
        setPSSexy({
          0 : parseInt(result.result[0].PSSexy0),
          1 : parseInt(result.result[0].PSSexy1),
          2 : parseInt(result.result[0].PSSexy2),
          3 : parseInt(result.result[0].PSSexy3),
          4 : parseInt(result.result[0].PSSexy4),
          5 : parseInt(result.result[0].PSSexy5)
        })
        setPSKindness({
          0 : parseInt(result.result[0].PSKindness0),
          1 : parseInt(result.result[0].PSKindness1),
          2 : parseInt(result.result[0].PSKindness2),
          3 : parseInt(result.result[0].PSKindness3),
          4 : parseInt(result.result[0].PSKindness4),
          5 : parseInt(result.result[0].PSKindness5)
        })
        setPSSmartness({
          0 : parseInt(result.result[0].PSSmartness0),
          1 : parseInt(result.result[0].PSSmartness1),
          2 : parseInt(result.result[0].PSSmartness2),
          3 : parseInt(result.result[0].PSSmartness3),
          4 : parseInt(result.result[0].PSSmartness4),
          5 : parseInt(result.result[0].PSSmartness5)
        })
        setPSNeatness({
          0 : parseInt(result.result[0].PSNeatness0),
          1 : parseInt(result.result[0].PSNeatness1),
          2 : parseInt(result.result[0].PSNeatness2),
          3 : parseInt(result.result[0].PSNeatness3),
          4 : parseInt(result.result[0].PSNeatness4),
          5 : parseInt(result.result[0].PSNeatness5)
        })
        setPSFashionable({
          0 : parseInt(result.result[0].PSFashionable0),
          1 : parseInt(result.result[0].PSFashionable1),
          2 : parseInt(result.result[0].PSFashionable2),
          3 : parseInt(result.result[0].PSFashionable3),
          4 : parseInt(result.result[0].PSFashionable4),
          5 : parseInt(result.result[0].PSFashionable5)
        })
        setPSBrightness({
          0 : parseInt(result.result[0].PSBrightness0),
          1 : parseInt(result.result[0].PSBrightness1),
          2 : parseInt(result.result[0].PSBrightness2),
          3 : parseInt(result.result[0].PSBrightness3),
          4 : parseInt(result.result[0].PSBrightness4),
          5 : parseInt(result.result[0].PSBrightness5)
        })
        setPSElegance({
          0 : parseInt(result.result[0].PSElegance0),
          1 : parseInt(result.result[0].PSElegance1),
          2 : parseInt(result.result[0].PSElegance2),
          3 : parseInt(result.result[0].PSElegance3),
          4 : parseInt(result.result[0].PSElegance4),
          5 : parseInt(result.result[0].PSElegance5)
        })
      }
    })
    setinitialized(true)
  }

  // // 入力値に問題があれば遷移しない。問題なければ遷移する
  const submit = e => {
    e.preventDefault();

    let s = {
      "UUID":auth.user
    }
    let PSAreaArray = []
    console.log(PSArea)
    Object.keys(PSArea).map(key => key !== "secondRead" ? PSAreaArray=([...PSAreaArray, key]) : null)
    
    Object.keys(PSGender).map(key => key !== "secondRead" ? s["PSGender" + key] = PSGender[key] : null)
    Object.keys(PSAge).map(key => key !== "secondRead" ? s["PSAge" + key] = PSAge[key] : null)
    Object.keys(PSProfilePicture).map(key => key !== "secondRead" ? s["PSProfilePicture" + key] = PSProfilePicture[key] : null)
    Object.keys(PSProfileMessage).map(key => key !== "secondRead" ? s["PSProfileMessage" + key] = PSProfileMessage[key] : null)
    Object.keys(PSHeight).map(key => key !== "secondRead" ? s["PSHeight" + key] = PSHeight[key] : null)
    Object.keys(PSStyle).map(key => key !== "secondRead" ? s["PSStyle" + key] = PSStyle[key] : null)
    Object.keys(PSLooks).map(key => key !== "secondRead" ? s["PSLooks" + key] = PSLooks[key] : null)
    Object.keys(PSCup).map(key => key !== "secondRead" ? s["PSCup" + key] = PSCup[key] : null)
    Object.keys(PSBloodType).map(key => key !== "secondRead" ? s["PSBloodType" + key] = PSBloodType[key] : null)
    Object.keys(PSJob).map(key => key !== "secondRead" ? s["PSJob" + key] = PSJob[key] : null)
    Object.keys(PSEduBack).map(key => key !== "secondRead" ? s["PSEduBack" + key] = PSEduBack[key] : null)

    Object.keys(PSZodiac).map(key => key !== "secondRead" ? s["PSZodiac" + key] = PSZodiac[key] : null)
    Object.keys(PSMarriageStatus).map(key => key !== "secondRead" ? s["PSMarriageStatus" + key] = PSMarriageStatus[key] : null)
    Object.keys(PSKids).map(key => key !== "secondRead" ? s["PSKids" + key] = PSKids[key] : null)
    Object.keys(PSTabacco).map(key => key !== "secondRead" ? s["PSTabacco" + key] = PSTabacco[key] : null)
    Object.keys(PSAlchole).map(key => key !== "secondRead" ? s["PSAlchole" + key] = PSAlchole[key] : null)
    Object.keys(PSCar).map(key => key !== "secondRead" ? s["PSCar" + key] = PSCar[key] : null)
    Object.keys(PSInterest).map(key => key !== "secondRead" ? s["PSInterest" + key] = PSInterest[key] : null)
    Object.keys(PSPersonality).map(key => key !== "secondRead" ? s["PSPersonality" + key] = PSPersonality[key] : null)
    Object.keys(PSAnnuIncome).map(key => key !== "secondRead" ? s["PSAnnuIncome" + key] = PSAnnuIncome[key] : null)

    Object.keys(PSCute).map(key => key !== "secondRead" ? s["PSCute" + key] = PSCute[key] : null)
    Object.keys(PSSexy).map(key => key !== "secondRead" ? s["PSSexy" + key] = PSSexy[key] : null)
    Object.keys(PSKindness).map(key => key !== "secondRead" ? s["PSKindness" + key] = PSKindness[key] : null)
    Object.keys(PSSmartness).map(key => key !== "secondRead" ? s["PSSmartness" + key] = PSSmartness[key] : null)
    Object.keys(PSNeatness).map(key => key !== "secondRead" ? s["PSNeatness" + key] = PSNeatness[key] : null)
    Object.keys(PSFashionable).map(key => key !== "secondRead" ? s["PSFashionable" + key] = PSFashionable[key] : null)
    Object.keys(PSBrightness).map(key => key !== "secondRead" ? s["PSBrightness" + key] = PSBrightness[key] : null)
    Object.keys(PSElegance).map(key => key !== "secondRead" ? s["PSAnnuIncome" + key] = PSElegance[key] : null)

    const requestOptions2 ={
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({
        "UUID":auth.user,
        PSAreaArray
      })
    }
    console.log(requestOptions2)
    fetch("../../set_profilesearcharea.php",requestOptions2)
    .then((response)=> response.json())
    .then(result =>{
      console.log(result)
    })

    const requestOptions1 ={
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify(s)
    }
    console.log(requestOptions1)
    fetch("../../set_profilesearchsetting1.php",requestOptions1)
    .then((response)=> response.json())
    .then(result =>{
      console.log(result)
      if (result.result[0]==="SPSSS") {
        // プロフィール検索設定設定成功。リダイレクト
        auth.setMessage("プロフィール検索設定を変更しました")
        navigate("../") // 検索結果に飛びたい
      } else {
        // プロフィール検索設定設定失敗。(UUIDが合致しない)再表示。
        auth.setMessage("プロフィール検索設定を変更できませんでした")
        navigate("../") // 検索結果に飛びたい
      }
    })
  }


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
              Range={PSAge}
              setRange={setPSAge}
            />
          </li>
          <li>
            <span className="dan">エリア</span>
            <span className="dan2">
            {console.log("read:PSArea: ",PSArea)}
            {Object.keys(AreaDB.Area).map(key1 => 
              <>
                {key1 !== "10000000" ? (
                  <>
                    <details><summary>
                    <label for={key1}>
                      <input
                        value={key1}
                        // defaultValue={PSArea}
                        type="checkbox"
                        id={key1}
                        onChange={evt => {
                          if (PSArea[evt.target.value] === true ) {
                            const copyPSArea = {...PSArea}
                            delete copyPSArea[evt.target.value]
                            setPSArea(copyPSArea)
                            console.log("Delete:key1: ", evt.target.value, ": ", key1)
                          } else {
                            // setPSArea({...PSArea, [evt.target.value]:true})
                            const copyPSArea = {...PSArea}
                            Object.keys(PSArea).map(key => {
                              if (parseInt(evt.target.value) < parseInt(key) &&  parseInt(key) < parseInt(evt.target.value) + 1000000) {
                                delete copyPSArea[key]
                                // setPSArea(copyPSArea)
                              }
                              return <></>
                            })
                            setPSArea({...copyPSArea, [evt.target.value]:true})
                            console.log("Add:key1: ", evt.target.value, ": ", key1)
                          }
                        }}
                        // indeterminate={
                        //   true
                        //   // PSArea["secondRead"] === true ?
                        //   // (
                        //   //   // Object.keys(PSArea).map(key => {
                        //   //     PSArea[key1] === "undefined" ? (
                        //   //       false
                        //   //     ) : (
                        //   //       PSArea[key1]
                        //   //     )
                        //   //     // if (parseInt(key1) < parseInt(key) &&  parseInt(key) < parseInt(key1) + 1000000) {
                        //   //     //   return true
                        //   //     // }
                        //   //     // return <></>
                        //   //     // })
                        //   // ) : (
                        //   //     false,
                        //   //     setPSArea({...PSArea, "secondRead" : true})
                        //   // )
                        // }
                        checked={
                          PSArea["secondRead"] === true ?
                          (
                            PSArea[key1] === "undefined" ? (
                                false
                              ) : (
                                PSArea[key1]
                              )
                          ) : (
                              false,
                              setPSArea({...PSArea, "secondRead" : true})
                          )
                        }
                      />
                      {AreaDB.Area[key1]["AreaName"]}
                    </label></summary>
                      {Object.keys(AreaDB.Area[key1]["Prefecture"]).map(key2 => 
                        <>
                          {key2.slice(2,8) !== "000000" ? (
                            <>
                              <details  className="area1"><summary>
                              <label for={key2}>
                                <input
                                  value={key2}
                                  // defaultValue={PSArea}
                                  type="checkbox"
                                  id={key2}
                                  onChange={evt => {
                                    if (PSArea[evt.target.value] === true ) {
                                      const copyPSArea = {...PSArea}
                                      delete copyPSArea[evt.target.value]
                                      setPSArea(copyPSArea)
                                      console.log("Delete:key2: ", evt.target.value, ": ", key2)
                                      
                                    } else {
                                      // setPSArea({...PSArea, [evt.target.value]:true})
                                      const copyPSArea = {...PSArea}
                                      const UpperArea = Math.floor(parseInt(evt.target.value)/1000000)*1000000
                                      delete copyPSArea[UpperArea]
                                      // setPSArea(copyPSArea)
                                      Object.keys(PSArea).map(key => {
                                        if (parseInt(evt.target.value) < parseInt(key) &&  parseInt(key) < parseInt(evt.target.value) + 10000) {
                                          delete copyPSArea[key]
                                          // setPSArea(copyPSArea)
                                        }
                                        return <></>
                                      })
                                      setPSArea({...copyPSArea, [evt.target.value]:true})
                                      console.log("Add:key2: ", evt.target.value, ": ", key2)
                                    }
                                  }}
                                  checked={
                                    PSArea["secondRead"] === true ?
                                    (
                                      PSArea[key2] === "undefined" ? (
                                            false
                                        ) : (
                                          PSArea[key2]
                                        )
                                    ) : (
                                        false,
                                        setPSArea({...PSArea, "secondRead" : true})
                                    )
                                  }
                                />
                                {AreaDB.Area[key1]["Prefecture"][key2]["PrefectureName"]}
                              </label></summary>
                              {Object.keys(AreaDB.Area[key1]["Prefecture"][key2]["City"]).map(key3 => 
                                <>
                                  {key3.slice(4,8) !== "0000" ? (
                                    AreaDB.Area[key1]["Prefecture"][key2]["City"][key3]["CityName"] === undefined ? (
                                      <>
                                        <label for={key3} className="area2">
                                          <input
                                            value={key3}
                                            // defaultValue={PSArea}
                                            type="checkbox"
                                            id={key3}
                                            onChange={evt => {
                                              if (PSArea[evt.target.value] === true ) {
                                                const copyPSArea = {...PSArea}
                                                delete copyPSArea[evt.target.value]
                                                setPSArea(copyPSArea)
                                                console.log("Delete:key3: ", evt.target.value, ": ", key3)
                                              } else {
                                                // setPSArea({...PSArea, [evt.target.value]:true})
                                                const copyPSArea = {...PSArea}
                                                const UpperArea = Math.floor(parseInt(evt.target.value)/1000000)*1000000
                                                delete copyPSArea[UpperArea]
                                                const UpperPrefecture = Math.floor(parseInt(evt.target.value)/10000)*10000
                                                delete copyPSArea[UpperPrefecture]
                                                // setPSArea(copyPSArea)
                                                Object.keys(PSArea).map(key => {
                                                  if (parseInt(evt.target.value) < parseInt(key) &&  parseInt(key) < parseInt(evt.target.value) + 100) {
                                                    delete copyPSArea[key]
                                                    // setPSArea(copyPSArea)
                                                  }
                                                  return <></>
                                                })
                                                setPSArea({...copyPSArea, [evt.target.value]:true})
                                                console.log("Add:key3: ", evt.target.value, ": ", key3)
                                              }
                                            }}
                                            checked={
                                              PSArea["secondRead"] === true ?
                                              (
                                                PSArea[key3] === "undefined" ? (
                                                      false
                                                  ) : (
                                                    PSArea[key3]
                                                  )
                                              ) : (
                                                  false,
                                                  setPSArea({...PSArea, "secondRead" : true})
                                              )
                                            }
                                          />
                                          {AreaDB.Area[key1]["Prefecture"][key2]["City"][key3]}
                                        </label><br />
                                      </>
                                    ):(
                                      <>
                                        <details className="area1"><summary>
                                          <label for={key3}>
                                            <input
                                              value={key3}
                                              // defaultValue={PSArea}
                                              type="checkbox"
                                              id={key3}
                                              onChange={evt => {
                                                if (PSArea[evt.target.value] === true ) {
                                                  const copyPSArea = {...PSArea}
                                                  delete copyPSArea[evt.target.value]
                                                  setPSArea(copyPSArea)
                                                  console.log("Delete:key3: ", evt.target.value, ": ", key3)
                                                } else {
                                                  // setPSArea({...PSArea, [evt.target.value]:true})
                                                  // console.log("Add:key3: ", evt.target.value, ": ", key3)
                                                  const copyPSArea = {...PSArea}
                                                  const UpperArea = Math.floor(parseInt(evt.target.value)/1000000)*1000000
                                                  delete copyPSArea[UpperArea]
                                                  // console.log("Delete:key3:UpperArea: ", UpperArea)
                                                  // console.log("Delete:key3:copyPSArea[UpperArea]: ", copyPSArea)
                                                  const UpperPrefecture = Math.floor(parseInt(evt.target.value)/10000)*10000
                                                  delete copyPSArea[UpperPrefecture]
                                                  // console.log("Delete:key3:UpperPrefecture: ", UpperPrefecture)
                                                  // console.log("Delete:key3:copyPSArea[UpperPrefecture]: ", copyPSArea)
                                                  // setPSArea(copyPSArea)
                                                  Object.keys(PSArea).map(key => {
                                                    if (parseInt(evt.target.value) < parseInt(key) &&  parseInt(key) < parseInt(evt.target.value) + 100) {
                                                      delete copyPSArea[key]
                                                      // setPSArea(copyPSArea)
                                                    }
                                                    return <></>
                                                  })
                                                  setPSArea({...copyPSArea, [evt.target.value]:true})
                                                  
                                                }
                                              }}
                                              checked={
                                                PSArea["secondRead"] === true ?
                                                (
                                                  PSArea[key3] === "undefined" ? (
                                                        false
                                                    ) : (
                                                      PSArea[key3]
                                                    )
                                                ) : (
                                                    false,
                                                    setPSArea({...PSArea, "secondRead" : true})
                                                )
                                              }
                                            />
                                            {AreaDB.Area[key1]["Prefecture"][key2]["City"][key3]["CityName"]}
                                          </label></summary>
                                          {Object.keys(AreaDB.Area[key1]["Prefecture"][key2]["City"][key3]["Ward"]).map(key4 => 
                                            <>
                                              {key4.slice(6,8) !== "00" ? (
                                                <>
                                                  <label for={key4} className="area2">
                                                    <input
                                                      value={key4}
                                                      // defaultValue={PSArea}
                                                      type="checkbox"
                                                      id={key4}
                                                      onChange={evt => {
                                                        if (PSArea[evt.target.value] === true ) {
                                                          const copyPSArea = {...PSArea}
                                                          delete copyPSArea[evt.target.value]
                                                          setPSArea(copyPSArea)
                                                        } else {
                                                          // setPSArea({...PSArea, [evt.target.value]:true})
                                                          const copyPSArea = {...PSArea}
                                                          const UpperArea = Math.floor(parseInt(evt.target.value)/1000000)*1000000
                                                          delete copyPSArea[UpperArea]
                                                          const UpperPrefecture = Math.floor(parseInt(evt.target.value)/10000)*10000
                                                          delete copyPSArea[UpperPrefecture]
                                                          const UpperCity = Math.floor(parseInt(evt.target.value)/100)*100
                                                          delete copyPSArea[UpperCity]
                                                          setPSArea({...copyPSArea, [evt.target.value]:true})
                                                        }
                                                      }}
                                                      checked={
                                                        PSArea["secondRead"] === true ?
                                                        (
                                                          PSArea[key4] === "undefined" ? (
                                                                false
                                                            ) : (
                                                              PSArea[key4]
                                                            )
                                                        ) : (
                                                            false,
                                                            setPSArea({...PSArea, "secondRead" : true})
                                                        )
                                                      }
                                                    />
                                                    {AreaDB.Area[key1]["Prefecture"][key2]["City"][key3]["Ward"][key4]}
                                                  </label><br />
                                                </>
                                              ) : (<></>)}
                                            </>
                                          )}
                                        </details>
                                      </>
                                    )
                                  ): (<></>)}
                                </>
                              )}
                              </details>
                            </>
                          ): (<></>)}
                        </>
                      )}
                    </details>
                  </>
                ): (<></>)}
              </>
            )}
            </span>
          </li>
          <li>
            <FormSelectRange
              title="身長" 
              originalRange={ProfileDB.Height}
              Range={PSHeight}
              setRange={setPSHeight}
            />
          </li>
          <li>
            <FormMultiSelect2
              title="スタイル"
              keyValue={ProfileDB.Style}
              defaultValue={PSStyle}
              setValue={setPSStyle}
            />
          </li>
          <li>
            <FormMultiSelect2
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
              Range={PSCup}
              setRange={setPSCup}
            />
          </li>
          {/* <li>
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
          </li> */}
          <li>
            <FormMultiSelect2
              title="血液型"
              keyValue={ProfileDB.BloodType}
              defaultValue={PSBloodType}
              setValue={setPSBloodType}
            />
          </li>
          <li>
            <FormMultiSelect2
              title="職業"
              keyValue={ProfileDB.Job}
              defaultValue={PSJob}
              setValue={setPSJob}
            />
          </li>
          <li>
            <FormMultiSelect2
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
            <FormMultiSelect2
              title="星座"
              keyValue={ProfileDB.Zodiac}
              defaultValue={PSZodiac}
              setValue={setPSZodiac}
            />
          </li>
          <li>
            <FormMultiSelect2
              title="交際状況"
              keyValue={ProfileDB.MarriageStatus}
              defaultValue={PSMarriageStatus}
              setValue={setPSMarriageStatus}
            />
          </li>
          <li>
            <FormMultiSelect2
              title="子供"
              keyValue={ProfileDB.Kids}
              defaultValue={PSKids}
              setValue={setPSKids}
            />
          </li>
          <li>
            <FormMultiSelect2
              title="タバコ"
              keyValue={ProfileDB.Tabacco}
              defaultValue={PSTabacco}
              setValue={setPSTabacco}
            />
          </li>
          <li>
            <FormMultiSelect2
              title="お酒"
              keyValue={ProfileDB.Alchole}
              defaultValue={PSAlchole}
              setValue={setPSAlchole}
            />
          </li>
          <li>
            <FormMultiSelect2
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
            <FormMultiSelect2
              title="プロフィール写真"
              keyValue={ProfileDB.Car} // プロフィール写真あり／なしだけの判断
              defaultValue={PSProfilePicture}
              setValue={setPSProfilePicture}
            />
          </li>
          <li>
            <FormMultiSelect2
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
              Range={PSCute}
              setRange={setPSCute}
            />
          </li>
          <li>
            {/* 星で表現したい。 */}
            <FormSelectRange
              title="セクシーさ" 
              originalRange={ProfileDB.Self}
              Range={PSSexy}
              setRange={setPSSexy}
            />
          </li>
          <li>
            {/* 星で表現したい。 */}
            <FormSelectRange
              title="優しさ" 
              originalRange={ProfileDB.Self}
              Range={PSKindness}
              setRange={setPSKindness}
            />
          </li>
          <li>
            {/* 星で表現したい。 */}
            <FormSelectRange
              title="賢さ" 
              originalRange={ProfileDB.Self}
              Range={PSSmartness}
              setRange={setPSSmartness}
            />
          </li>
          <li>
            {/* 星で表現したい。 */}
            <FormSelectRange
              title="清楚さ" 
              originalRange={ProfileDB.Self}
              Range={PSNeatness}
              setRange={setPSNeatness}
            />
          </li>
          <li>
            {/* 星で表現したい。 */}
            <FormSelectRange
              title="ファッション" 
              originalRange={ProfileDB.Self}
              Range={PSFashionable}
              setRange={setPSFashionable}
            />
          </li>
          <li>
            {/* 星で表現したい。 */}
            <FormSelectRange
              title="明るさ" 
              originalRange={ProfileDB.Self}
              Range={PSBrightness}
              setRange={setPSBrightness}
            />
          </li>
          <li>
            {/* 星で表現したい。 */}
            <FormSelectRange
              title="エレガンス" 
              originalRange={ProfileDB.Self}
              Range={PSElegance}
              setRange={setPSElegance}
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
