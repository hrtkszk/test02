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

export function ProfileSearchSetting() {
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
    fetch("../../get_profilesearchsetting.php",initialRequestOptions)
    .then((response) => response.json())
    .then(result => {
      if (result.result !== "PSSND") {
        setPSGender({...PSGender, 0 : result.result[0].PSGender0})
        setPSGender({...PSGender, 1 : result.result[0].PSGender1})
        setPSGender({...PSGender, 2 : result.result[0].PSGender2})
        setPSGender({...PSGender, 3 : result.result[0].PSGender3})
        setPSGender({...PSGender, 4 : result.result[0].PSGender4})
        setPSGender({...PSGender, 5 : result.result[0].PSGender5})
        setPSGender({...PSGender, 6 : result.result[0].PSGender6})
        setPSGender({...PSGender, 7 : result.result[0].PSGender7})

        setPSAge({...PSAge, 0 : result.result[0].PSAge0})
        setPSAge({...PSAge, 1 : result.result[0].PSAge1})
        setPSAge({...PSAge, 2 : result.result[0].PSAge2})
        setPSAge({...PSAge, 3 : result.result[0].PSAge3})
        setPSAge({...PSAge, 4 : result.result[0].PSAge4})
        setPSAge({...PSAge, 5 : result.result[0].PSAge5})
        setPSAge({...PSAge, 6 : result.result[0].PSAge6})
        setPSAge({...PSAge, 7 : result.result[0].PSAge7})
        setPSAge({...PSAge, 8 : result.result[0].PSAge8})
        setPSAge({...PSAge, 9 : result.result[0].PSAge9})
        setPSAge({...PSAge, 10 : result.result[0].PSAge10})
        setPSAge({...PSAge, 11 : result.result[0].PSAge11})
        setPSAge({...PSAge, 12 : result.result[0].PSAge12})
        setPSAge({...PSAge, 13 : result.result[0].PSAge13})
        setPSAge({...PSAge, 14 : result.result[0].PSAge14})
        setPSAge({...PSAge, 15 : result.result[0].PSAge15})
        setPSAge({...PSAge, 16 : result.result[0].PSAge16})
        setPSAge({...PSAge, 17 : result.result[0].PSAge17})

        setPSProfilePicture({...PSProfilePicture, 0 : result.result[0].PSProfilePicture0})
        setPSProfilePicture({...PSProfilePicture, 1 : result.result[0].PSProfilePicture1})
        setPSProfilePicture({...PSProfilePicture, 2 : result.result[0].PSProfilePicture2})

        setPSProfileMessage({...PSProfileMessage, 0 : result.result[0].PSProfileMessage0})
        setPSProfileMessage({...PSProfileMessage, 1 : result.result[0].PSProfileMessage1})
        setPSProfileMessage({...PSProfileMessage, 2 : result.result[0].PSProfileMessage2})

        setPSHeight({...PSHeight, 0 : result.result[0].PSHeight0})
        setPSHeight({...PSHeight, 1 : result.result[0].PSHeight1})
        setPSHeight({...PSHeight, 2 : result.result[0].PSHeight2})
        setPSHeight({...PSHeight, 3 : result.result[0].PSHeight3})
        setPSHeight({...PSHeight, 4 : result.result[0].PSHeight4})
        setPSHeight({...PSHeight, 5 : result.result[0].PSHeight5})
        setPSHeight({...PSHeight, 6 : result.result[0].PSHeight6})
        setPSHeight({...PSHeight, 7 : result.result[0].PSHeight7})
        setPSHeight({...PSHeight, 8 : result.result[0].PSHeight8})
        setPSHeight({...PSHeight, 9 : result.result[0].PSHeight9})

        setPSStyle({...PSStyle, 0 : result.result[0].PSStyle0})
        setPSStyle({...PSStyle, 1 : result.result[0].PSStyle1})
        setPSStyle({...PSStyle, 2 : result.result[0].PSStyle2})
        setPSStyle({...PSStyle, 3 : result.result[0].PSStyle3})
        setPSStyle({...PSStyle, 4 : result.result[0].PSStyle4})
        setPSStyle({...PSStyle, 5 : result.result[0].PSStyle5})
        setPSStyle({...PSStyle, 6 : result.result[0].PSStyle6})
        setPSStyle({...PSStyle, 7 : result.result[0].PSStyle7})
        setPSStyle({...PSStyle, 8 : result.result[0].PSStyle8})
        setPSStyle({...PSStyle, 9 : result.result[0].PSStyle9})

        setPSLooks({...PSLooks, 0 : result.result[0].PSLooks0})
        setPSLooks({...PSLooks, 1 : result.result[0].PSLooks1})
        setPSLooks({...PSLooks, 2 : result.result[0].PSLooks2})
        setPSLooks({...PSLooks, 3 : result.result[0].PSLooks3})
        setPSLooks({...PSLooks, 4 : result.result[0].PSLooks4})
        setPSLooks({...PSLooks, 5 : result.result[0].PSLooks5})
        setPSLooks({...PSLooks, 6 : result.result[0].PSLooks6})
        setPSLooks({...PSLooks, 7 : result.result[0].PSLooks7})
        setPSLooks({...PSLooks, 8 : result.result[0].PSLooks8})
        setPSLooks({...PSLooks, 9 : result.result[0].PSLooks9})

        setPSCup({...PSCup, 0 : result.result[0].PSCup0})
        setPSCup({...PSCup, 1 : result.result[0].PSCup1})
        setPSCup({...PSCup, 2 : result.result[0].PSCup2})
        setPSCup({...PSCup, 3 : result.result[0].PSCup3})
        setPSCup({...PSCup, 4 : result.result[0].PSCup4})
        setPSCup({...PSCup, 5 : result.result[0].PSCup5})
        setPSCup({...PSCup, 6 : result.result[0].PSCup6})
        setPSCup({...PSCup, 7 : result.result[0].PSCup7})
        setPSCup({...PSCup, 8 : result.result[0].PSCup8})
        setPSCup({...PSCup, 9 : result.result[0].PSCup9})

        setPSBloodType({...PSBloodType, 0 : result.result[0].PSBloodType0})
        setPSBloodType({...PSBloodType, 1 : result.result[0].PSBloodType1})
        setPSBloodType({...PSBloodType, 2 : result.result[0].PSBloodType2})
        setPSBloodType({...PSBloodType, 3 : result.result[0].PSBloodType3})
        setPSBloodType({...PSBloodType, 4 : result.result[0].PSBloodType4})

        setPSJob({...PSJob, 0 : result.result[0].PSJob0})
        setPSJob({...PSJob, 1 : result.result[0].PSJob1})
        setPSJob({...PSJob, 2 : result.result[0].PSJob2})
        setPSJob({...PSJob, 3 : result.result[0].PSJob3})
        setPSJob({...PSJob, 4 : result.result[0].PSJob4})
        setPSJob({...PSJob, 5 : result.result[0].PSJob5})
        setPSJob({...PSJob, 6 : result.result[0].PSJob6})
        setPSJob({...PSJob, 7 : result.result[0].PSJob7})
        setPSJob({...PSJob, 8 : result.result[0].PSJob8})
        setPSJob({...PSJob, 9 : result.result[0].PSJob9})
        setPSJob({...PSJob, 10 : result.result[0].PSJob10})
        setPSJob({...PSJob, 11 : result.result[0].PSJob11})
        setPSJob({...PSJob, 12 : result.result[0].PSJob12})
        setPSJob({...PSJob, 13 : result.result[0].PSJob13})
        setPSJob({...PSJob, 14 : result.result[0].PSJob14})
        setPSJob({...PSJob, 15 : result.result[0].PSJob15})
        setPSJob({...PSJob, 16 : result.result[0].PSJob16})
        setPSJob({...PSJob, 17 : result.result[0].PSJob17})
        setPSJob({...PSJob, 18 : result.result[0].PSJob18})
        setPSJob({...PSJob, 19 : result.result[0].PSJob19})
        setPSJob({...PSJob, 20 : result.result[0].PSJob20})
        setPSJob({...PSJob, 21 : result.result[0].PSJob21})
        setPSJob({...PSJob, 22 : result.result[0].PSJob22})
        setPSJob({...PSJob, 23 : result.result[0].PSJob23})
        setPSJob({...PSJob, 24 : result.result[0].PSJob24})
        setPSJob({...PSJob, 25 : result.result[0].PSJob25})
        setPSJob({...PSJob, 26 : result.result[0].PSJob26})

        setPSEduBack({...PSEduBack, 0 : result.result[0].PSEduBack0})
        setPSEduBack({...PSEduBack, 1 : result.result[0].PSEduBack1})
        setPSEduBack({...PSEduBack, 2 : result.result[0].PSEduBack2})
        setPSEduBack({...PSEduBack, 3 : result.result[0].PSEduBack3})
        setPSEduBack({...PSEduBack, 4 : result.result[0].PSEduBack4})
        setPSEduBack({...PSEduBack, 5 : result.result[0].PSEduBack5})

        setPSZodiac({...PSZodiac, 0 : result.result[0].PSZodiac0})
        setPSZodiac({...PSZodiac, 1 : result.result[0].PSZodiac1})
        setPSZodiac({...PSZodiac, 2 : result.result[0].PSZodiac2})
        setPSZodiac({...PSZodiac, 3 : result.result[0].PSZodiac3})
        setPSZodiac({...PSZodiac, 4 : result.result[0].PSZodiac4})
        setPSZodiac({...PSZodiac, 5 : result.result[0].PSZodiac5})
        setPSZodiac({...PSZodiac, 6 : result.result[0].PSZodiac6})
        setPSZodiac({...PSZodiac, 7 : result.result[0].PSZodiac7})
        setPSZodiac({...PSZodiac, 8 : result.result[0].PSZodiac8})
        setPSZodiac({...PSZodiac, 9 : result.result[0].PSZodiac9})
        setPSZodiac({...PSZodiac, 10 : result.result[0].PSZodiac10})
        setPSZodiac({...PSZodiac, 11 : result.result[0].PSZodiac11})
        setPSZodiac({...PSZodiac, 12 : result.result[0].PSZodiac12})

        setPSMarriageStatus({...PSMarriageStatus, 0 : result.result[0].PSMarriageStatus0})
        setPSMarriageStatus({...PSMarriageStatus, 1 : result.result[0].PSMarriageStatus1})
        setPSMarriageStatus({...PSMarriageStatus, 2 : result.result[0].PSMarriageStatus2})
        setPSMarriageStatus({...PSMarriageStatus, 3 : result.result[0].PSMarriageStatus3})
        setPSMarriageStatus({...PSMarriageStatus, 4 : result.result[0].PSMarriageStatus4})
        setPSMarriageStatus({...PSMarriageStatus, 5 : result.result[0].PSMarriageStatus5})
        setPSMarriageStatus({...PSMarriageStatus, 6 : result.result[0].PSMarriageStatus6})

        setPSKids({...PSKids, 0 : result.result[0].PSKids0})
        setPSKids({...PSKids, 1 : result.result[0].PSKids1})
        setPSKids({...PSKids, 2 : result.result[0].PSKids2})
        setPSKids({...PSKids, 3 : result.result[0].PSKids3})

        setPSTabacco({...PSTabacco, 0 : result.result[0].PSTabacco0})
        setPSTabacco({...PSTabacco, 1 : result.result[0].PSTabacco1})
        setPSTabacco({...PSTabacco, 2 : result.result[0].PSTabacco2})
        setPSTabacco({...PSTabacco, 3 : result.result[0].PSTabacco3})
        setPSTabacco({...PSTabacco, 4 : result.result[0].PSTabacco4})

        setPSAlchole({...PSAlchole, 0 : result.result[0].PSAlchole0})
        setPSAlchole({...PSAlchole, 1 : result.result[0].PSAlchole1})
        setPSAlchole({...PSAlchole, 2 : result.result[0].PSAlchole2})
        setPSAlchole({...PSAlchole, 3 : result.result[0].PSAlchole3})

        setPSCar({...PSCar, 0 : result.result[0].PSCar0})
        setPSCar({...PSCar, 1 : result.result[0].PSCar1})
        setPSCar({...PSCar, 2 : result.result[0].PSCar2})

        setPSInterest({...PSInterest, 0 : result.result[0].PSInterest0})
        setPSInterest({...PSInterest, 1 : result.result[0].PSInterest1})
        setPSInterest({...PSInterest, 2 : result.result[0].PSInterest2})
        setPSInterest({...PSInterest, 3 : result.result[0].PSInterest3})
        setPSInterest({...PSInterest, 4 : result.result[0].PSInterest4})
        setPSInterest({...PSInterest, 5 : result.result[0].PSInterest5})
        setPSInterest({...PSInterest, 6 : result.result[0].PSInterest6})
        setPSInterest({...PSInterest, 7 : result.result[0].PSInterest7})
        setPSInterest({...PSInterest, 8 : result.result[0].PSInterest8})
        setPSInterest({...PSInterest, 9 : result.result[0].PSInterest9})
        setPSInterest({...PSInterest, 10 : result.result[0].PSInterest10})
        setPSInterest({...PSInterest, 11 : result.result[0].PSInterest11})
        setPSInterest({...PSInterest, 12 : result.result[0].PSInterest12})
        setPSInterest({...PSInterest, 13 : result.result[0].PSInterest13})
        setPSInterest({...PSInterest, 14 : result.result[0].PSInterest14})
        setPSInterest({...PSInterest, 15 : result.result[0].PSInterest15})
        setPSInterest({...PSInterest, 16 : result.result[0].PSInterest16})
        setPSInterest({...PSInterest, 17 : result.result[0].PSInterest17})
        setPSInterest({...PSInterest, 18 : result.result[0].PSInterest18})
        setPSInterest({...PSInterest, 19 : result.result[0].PSInterest19})
        setPSInterest({...PSInterest, 20 : result.result[0].PSInterest20})
        setPSInterest({...PSInterest, 21 : result.result[0].PSInterest21})
        setPSInterest({...PSInterest, 22 : result.result[0].PSInterest22})
        setPSInterest({...PSInterest, 23 : result.result[0].PSInterest23})
        setPSInterest({...PSInterest, 24 : result.result[0].PSInterest24})
        setPSInterest({...PSInterest, 25 : result.result[0].PSInterest25})
        setPSInterest({...PSInterest, 26 : result.result[0].PSInterest26})
        setPSInterest({...PSInterest, 27 : result.result[0].PSInterest27})
        setPSInterest({...PSInterest, 28 : result.result[0].PSInterest28})

        setPSPersonality({...PSPersonality, 0 : result.result[0].PSPersonality0})
        setPSPersonality({...PSPersonality, 1 : result.result[0].PSPersonality1})
        setPSPersonality({...PSPersonality, 2 : result.result[0].PSPersonality2})
        setPSPersonality({...PSPersonality, 3 : result.result[0].PSPersonality3})
        setPSPersonality({...PSPersonality, 4 : result.result[0].PSPersonality4})
        setPSPersonality({...PSPersonality, 5 : result.result[0].PSPersonality5})
        setPSPersonality({...PSPersonality, 6 : result.result[0].PSPersonality6})
        setPSPersonality({...PSPersonality, 7 : result.result[0].PSPersonality7})
        setPSPersonality({...PSPersonality, 8 : result.result[0].PSPersonality8})
        setPSPersonality({...PSPersonality, 9 : result.result[0].PSPersonality9})
        setPSPersonality({...PSPersonality, 10 : result.result[0].PSPersonality10})
        setPSPersonality({...PSPersonality, 11 : result.result[0].PSPersonality11})
        setPSPersonality({...PSPersonality, 12 : result.result[0].PSPersonality12})
        setPSPersonality({...PSPersonality, 13 : result.result[0].PSPersonality13})
        setPSPersonality({...PSPersonality, 14 : result.result[0].PSPersonality14})
        setPSPersonality({...PSPersonality, 15 : result.result[0].PSPersonality15})
        setPSPersonality({...PSPersonality, 16 : result.result[0].PSPersonality16})
        setPSPersonality({...PSPersonality, 17 : result.result[0].PSPersonality17})
        setPSPersonality({...PSPersonality, 18 : result.result[0].PSPersonality18})
        setPSPersonality({...PSPersonality, 19 : result.result[0].PSPersonality19})
        setPSPersonality({...PSPersonality, 20 : result.result[0].PSPersonality20})
        setPSPersonality({...PSPersonality, 21 : result.result[0].PSPersonality21})
        setPSPersonality({...PSPersonality, 22 : result.result[0].PSPersonality22})
        setPSPersonality({...PSPersonality, 23 : result.result[0].PSPersonality23})
        setPSPersonality({...PSPersonality, 24 : result.result[0].PSPersonality24})
        setPSPersonality({...PSPersonality, 25 : result.result[0].PSPersonality25})
        setPSPersonality({...PSPersonality, 26 : result.result[0].PSPersonality26})
        setPSPersonality({...PSPersonality, 27 : result.result[0].PSPersonality27})
        setPSPersonality({...PSPersonality, 28 : result.result[0].PSPersonality28})
        setPSPersonality({...PSPersonality, 29 : result.result[0].PSPersonality29})
        setPSPersonality({...PSPersonality, 30 : result.result[0].PSPersonality30})
        setPSPersonality({...PSPersonality, 31 : result.result[0].PSPersonality31})
        setPSPersonality({...PSPersonality, 32 : result.result[0].PSPersonality32})
        setPSPersonality({...PSPersonality, 33 : result.result[0].PSPersonality33})
        setPSPersonality({...PSPersonality, 34 : result.result[0].PSPersonality34})
        setPSPersonality({...PSPersonality, 35 : result.result[0].PSPersonality35})
        setPSPersonality({...PSPersonality, 36 : result.result[0].PSPersonality36})
        setPSPersonality({...PSPersonality, 37 : result.result[0].PSPersonality37})
        setPSPersonality({...PSPersonality, 38 : result.result[0].PSPersonality38})
        setPSPersonality({...PSPersonality, 39 : result.result[0].PSPersonality39})
        setPSPersonality({...PSPersonality, 40 : result.result[0].PSPersonality40})
        setPSPersonality({...PSPersonality, 41 : result.result[0].PSPersonality41})
        setPSPersonality({...PSPersonality, 42 : result.result[0].PSPersonality42})
        setPSPersonality({...PSPersonality, 43 : result.result[0].PSPersonality43})
        setPSPersonality({...PSPersonality, 44 : result.result[0].PSPersonality44})
        setPSPersonality({...PSPersonality, 45 : result.result[0].PSPersonality45})
        setPSPersonality({...PSPersonality, 46 : result.result[0].PSPersonality46})

        setPSAnnuIncome({...PSAnnuIncome, 0 : result.result[0].PSAnnuIncome0})
        setPSAnnuIncome({...PSAnnuIncome, 1 : result.result[0].PSAnnuIncome1})
        setPSAnnuIncome({...PSAnnuIncome, 2 : result.result[0].PSAnnuIncome2})
        setPSAnnuIncome({...PSAnnuIncome, 3 : result.result[0].PSAnnuIncome3})
        setPSAnnuIncome({...PSAnnuIncome, 4 : result.result[0].PSAnnuIncome4})
        setPSAnnuIncome({...PSAnnuIncome, 5 : result.result[0].PSAnnuIncome5})
        setPSAnnuIncome({...PSAnnuIncome, 6 : result.result[0].PSAnnuIncome6})
        setPSAnnuIncome({...PSAnnuIncome, 7 : result.result[0].PSAnnuIncome7})
        setPSAnnuIncome({...PSAnnuIncome, 8 : result.result[0].PSAnnuIncome8})
        setPSAnnuIncome({...PSAnnuIncome, 9 : result.result[0].PSAnnuIncome9})
        setPSAnnuIncome({...PSAnnuIncome, 10 : result.result[0].PSAnnuIncome10})

        setPSCute({...PSCute, 0 : result.result[0].PSCute0})
        setPSCute({...PSCute, 1 : result.result[0].PSCute1})
        setPSCute({...PSCute, 2 : result.result[0].PSCute2})
        setPSCute({...PSCute, 3 : result.result[0].PSCute3})
        setPSCute({...PSCute, 4 : result.result[0].PSCute4})
        setPSCute({...PSCute, 5 : result.result[0].PSCute5})
        setPSSexy({...PSSexy, 0 : result.result[0].PSSexy0})
        setPSSexy({...PSSexy, 1 : result.result[0].PSSexy1})
        setPSSexy({...PSSexy, 2 : result.result[0].PSSexy2})
        setPSSexy({...PSSexy, 3 : result.result[0].PSSexy3})
        setPSSexy({...PSSexy, 4 : result.result[0].PSSexy4})
        setPSSexy({...PSSexy, 5 : result.result[0].PSSexy5})
        setPSKindness({...PSKindness, 0 : result.result[0].PSKindness0})
        setPSKindness({...PSKindness, 1 : result.result[0].PSKindness1})
        setPSKindness({...PSKindness, 2 : result.result[0].PSKindness2})
        setPSKindness({...PSKindness, 3 : result.result[0].PSKindness3})
        setPSKindness({...PSKindness, 4 : result.result[0].PSKindness4})
        setPSKindness({...PSKindness, 5 : result.result[0].PSKindness5})
        setPSSmartness({...PSSmartness, 0 : result.result[0].PSSmartness1})
        setPSSmartness({...PSSmartness, 1 : result.result[0].PSSmartness2})
        setPSSmartness({...PSSmartness, 2 : result.result[0].PSSmartness2})
        setPSSmartness({...PSSmartness, 3 : result.result[0].PSSmartness2})
        setPSSmartness({...PSSmartness, 4 : result.result[0].PSSmartness2})
        setPSSmartness({...PSSmartness, 5 : result.result[0].PSSmartness2})
        setPSNeatness({...PSNeatness, 0 : result.result[0].PSNeatness0})
        setPSNeatness({...PSNeatness, 1 : result.result[0].PSNeatness1})
        setPSNeatness({...PSNeatness, 2 : result.result[0].PSNeatness2})
        setPSNeatness({...PSNeatness, 3 : result.result[0].PSNeatness3})
        setPSNeatness({...PSNeatness, 4 : result.result[0].PSNeatness4})
        setPSNeatness({...PSNeatness, 5 : result.result[0].PSNeatness5})
        setPSFashionable({...PSFashionable, 0 : result.result[0].PSFashionable0})
        setPSFashionable({...PSFashionable, 1 : result.result[0].PSFashionable1})
        setPSFashionable({...PSFashionable, 2 : result.result[0].PSFashionable2})
        setPSFashionable({...PSFashionable, 3 : result.result[0].PSFashionable3})
        setPSFashionable({...PSFashionable, 4 : result.result[0].PSFashionable4})
        setPSFashionable({...PSFashionable, 5 : result.result[0].PSFashionable5})
        setPSBrightness({...PSBrightness, 0 : result.result[0].PSBrightness0})
        setPSBrightness({...PSBrightness, 1 : result.result[0].PSBrightness1})
        setPSBrightness({...PSBrightness, 2 : result.result[0].PSBrightness2})
        setPSBrightness({...PSBrightness, 3 : result.result[0].PSBrightness3})
        setPSBrightness({...PSBrightness, 4 : result.result[0].PSBrightness4})
        setPSBrightness({...PSBrightness, 5 : result.result[0].PSBrightness5})
        setPSElegance({...PSElegance, 0 : result.result[0].PSElegance0})
        setPSElegance({...PSElegance, 1 : result.result[0].PSElegance1})
        setPSElegance({...PSElegance, 2 : result.result[0].PSElegance2})
        setPSElegance({...PSElegance, 3 : result.result[0].PSElegance3})
        setPSElegance({...PSElegance, 4 : result.result[0].PSElegance4})
        setPSElegance({...PSElegance, 5 : result.result[0].PSElegance5})

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
    fetch("../../set_profilesearchsetting.php",requestOptions1)
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
              Range1={PSAge1}
              setRange1={setPSAge1}
              Range2={PSAge2}
              setRange2={setPSAge2}
            />
          </li>
          <li>
            <span className="dan">エリア</span>
            <span className="dan2">
            {console.log("read:PSArea: ",PSArea)}
            {Object.keys(AreaDB.Area).map(key1 => 
              <>
                {key1 !== "0" ? (
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
                          {key2 !== "0" ? (
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
                                  {key3 !== "0" ? (
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
                                              {key4 !== "0" ? (
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
              Range1={PSHeight1}
              setRange1={setPSHeight1}
              Range2={PSHeight2}
              setRange2={setPSHeight2}
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
              Range1={PSCup1}
              setRange1={setPSCup1}
              Range2={PSCup2}
              setRange2={setPSCup2}
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
