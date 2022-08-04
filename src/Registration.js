import React from 'react';
import {
  Link,
  useParams,
  useNavigate
} from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from "./useAuth";
import ProfileDB from "./Profile.json";

export function Registration(){
  const [NickName, setNickName] = useState("");
  const [Gender, setGender] = useState("");
  const [Age, setAge] = useState("");
  // const [RegResult, setRegResult] = useState("");
  const [initialized, setinitialized] = useState(false);
  let { userId } = useParams();
  let SubmitStat = false;
  let navigate = useNavigate();
  let auth = useAuth();

  const submit = e => {
    e.preventDefault();
    SubmitStat = true;
  // }
  // const Register = () => {
    // 登録

    if (initialized===false && SubmitStat) {
      auth.registration(userId, NickName, Gender, Age, () => {
        setinitialized(true)
        navigate("../protected/", { replace: true });
      })
    }
  }

  return(
    <div>
      <p>パスパラメーター：{userId}</p>

      <div>
          <form onSubmit={e => submit(e)}>
            <input
              // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
              // title="有効なメールアドレスを入力してください"
              onChange={evt => {
                // 本当は、この段階で入力制限を設けたい。ポップアップなどで入力できないことを示す？
                //サーバー側でも入力制限を設けたい。
                setNickName(evt.target.value.replace(/"/g, '”').replace(/#/g, '＃').replace(/\$/g, '＄').replace(/&/g, '＆').replace(/'/g, '’').replace(/\(/g,'（').replace(/\)/g,'）').replace(/\\/g, '＼').replace(/</g, '＜').replace(/>/g, '＞').replace(/\*/g, '＊').replace(/`/g, '｀').replace(/\|/g, '｜'))
              }}
              placeholder='ニックネーム'
              required
            /><br />
            <select
              defaultValue=""
              pattern="^[0-9]+$"
              title="選択してください"
              onChange={evt => setGender(evt.target.value)}>
                <option value="">未選択</option>
                {Object.keys(ProfileDB.Gender).map(key => <option value={key}>{ProfileDB.Gender[key]}</option>)}
            </select><br />
            <input
              type='number'
              // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              // 特殊文字を弾く必要がある。
              // title="8文字以上で、数字・小文字アルファベット・大文字アルファベットを含めてください"
              onChange={evt => {
                setAge(evt.target.value)
              }}
              placeholder='年齢'
              required
            /><br />
            {/* <button onClick={Register}>登録する</button> */}
            <button type='submit'>登録する</button>
          </form>
          <br />
          <Link to="../../">戻る</Link>  
        </div>
      </div>
  )
}