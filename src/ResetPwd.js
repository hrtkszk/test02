import React from 'react';
import {
  Link,
  useParams,
  useNavigate
} from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from "./useAuth";
import PasswordStrengthBar from 'react-password-strength-bar';

export function ResetPwd(){
  const [initialized, setinitialized] = useState(false);
  const [TempPwd, setTempPwd] = useState("");
  const [NewPwd, setNewPwd] = useState("");
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
      auth.resetPwd(userId, TempPwd, NewPwd, () => {
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
              type="password"
              // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              // 特殊文字を弾く必要がある。
              // title="8文字以上で、数字・小文字アルファベット・大文字アルファベットを含めてください"
              onChange={evt => {
                setTempPwd(evt.target.value.replace(/"/g, '”').replace(/#/g, '＃').replace(/\$/g, '＄').replace(/&/g, '＆').replace(/'/g, '’').replace(/\(/g,'（').replace(/\)/g,'）').replace(/\\/g, '＼').replace(/</g, '＜').replace(/>/g, '＞').replace(/\*/g, '＊').replace(/`/g, '｀').replace(/\|/g, '｜'))
              }}
              placeholder='仮パスワード'
              required
            /><br />
            <input
              type="password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              // 特殊文字を弾く必要がある。
              title="8文字以上で、数字・小文字アルファベット・大文字アルファベットを含めてください"
              onChange={evt => {
                setNewPwd(evt.target.value.replace(/"/g, '”').replace(/#/g, '＃').replace(/\$/g, '＄').replace(/&/g, '＆').replace(/'/g, '’').replace(/\(/g,'（').replace(/\)/g,'）').replace(/\\/g, '＼').replace(/</g, '＜').replace(/>/g, '＞').replace(/\*/g, '＊').replace(/`/g, '｀').replace(/\|/g, '｜'))
              }}
              placeholder='新パスワード'
              required
            /><br />
            <PasswordStrengthBar
              minLength={8}
              style={{ width: 200 }}
              password={NewPwd}
            /><br />
            <button type='submit'>登録する</button>
          </form>
          <br />
          <Link to="../../">戻る</Link>  
        </div>
      </div>
  )
}