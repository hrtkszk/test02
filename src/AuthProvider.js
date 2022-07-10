import * as React from "react";
// import { fakeAuthProvider } from "./auth";
import { AuthContext } from "./AuthContext";

// export let AuthContext = React.createContext();

export function AuthProvider({ children }) {
  let [user, setUser] = React.useState("");
  let [aite, setAite] = React.useState("");
  let [AuthStatus, setAuthStatus] = React.useState(false);
  let [RegistrationStatus, setRegistrationStatus] = React.useState(false);
  let [Message, setMessage] = React.useState("");
  let NewRegistry = false;
  let registerResult = "";

  let signin = (newUser, passWord, callback) => {
  // let signin = (newUser, passWord, callback) => {
    const initialRequestOptions ={
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({"email":newUser, "pwd":passWord})
    }
    // console.log(initialRequestOptions)
    fetch("../login.php",initialRequestOptions)
    .then((response)=> response.json())
    .then(result =>{
      console.log(result.result)
      // console.log(result.result[1])
      // console.log(result.result(1))
      if (result.result[0]==="LS") {
        setUser(result.result[1])
        setRegistrationStatus(result.result[2])
        setAuthStatus(true)
        setMessage("")
        // setTimeout(callback, 100);
        // setAite(null);
      } else {
        setMessage("メールアドレス又はパスワードが間違っています。")
      }
      callback();
    })
    // callback();
    // return fakeAuthProvider.signin(() => {
    //   setUser(newUser);
    //   setAite(null);
    //   callback();
    // });
  };

  let signout = (callback) => {
    setUser("");
    // setAite(null);
    callback();
    // return fakeAuthProvider.signout(() => {
    //   setUser(null);
    //   setAite(null);
    //   callback();
    // });
  };

  let registration = (newUserID, NickName, Gender, Age, callback) => {
    const requestOptions1 ={
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({"UUID":newUserID, "nickname":NickName, "gender":Gender,"age":Age})
    }
    console.log(requestOptions1)
    fetch("../check_registry.php",requestOptions1)
    .then((response)=> response.json())
    .then(result =>{
      console.log(result)
      if (result.result[0]==="NRY") {
        NewRegistry = true;
      } else {
        console.log("登録済み")
        
        // Registration/UUIDでなりすましで入ってきた場合は、弾く必要がある。
        // auth.user=""とすることで、RequireAuth.jsで弾く（signoutする）
        newUserID = ""

      }
    })
    .then(() => {
      if (NewRegistry) {
        fetch("../register.php",requestOptions1)
        .then((response)=> response.json())
        .then(result =>{
          // setRegResult(result.result[0])
          console.log(result)
          registerResult = result.result[0]

          if (registerResult==="RC") {
            setUser(newUserID)
            setAuthStatus(true)
            setRegistrationStatus("1")
            setMessage("")
          } else {
            console.log("エラー：", registerResult)
            setUser("")
            setAuthStatus(false)
            setMessage("エラー："+registerResult)
          }

          callback()
          // ここだとnavigateが動かない。ここに書いた上で、navigateの後、判定する必要がありそう。
          // auth.signinを使いたいが、パスワードが必要。
          // （Registrationの時にパスワードが必要ないはセキュリティ上良くない・・・Registrationの時だけワンタイムパスワードを発行するか？）
          // ワンタイムパスワード（時間制限付き）を使う場合、結構大掛かりな見直しが必要となりそう。
          // if (result.result[0]==="RC") {
          //   setinitialized(true)
          //   auth.registration(userId, () => {
          //     navigate("../protected/", { replace: true })
          //   })
          // } else {
          //   console.log("エラー：", result.result[0])
          //   navigate("../")
          //   //登録エラー。ログアウト。
          // }
        })

        // ここだとダメ。fetchよりも先に実行されてしまう。
        // if (registerResult==="RC") {
        //   setUser(newUserID)
        //   setAuthStatus(true)
        //   setMessage("")
        // } else {
        //   console.log("エラー：", registerResult)
        //   //登録エラー。ログアウト。
        // }
        // callback()
        // setinitialized(true)
        // let username = userId
        // auth.setMessage("")
        // auth.signin(username, () => {
        //   navigate("../protected/", { replace: true });
        // });
      }
    })
  };

  let resetPwd = (UserID, TempPwd, NewPwd, callback) => {
    const requestOptions1 ={
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({"UUID":UserID, "TempPwd":TempPwd, "NewPwd":NewPwd})
    }
    console.log(requestOptions1)
    fetch("../check_reset_pwd.php",requestOptions1)
    .then((response)=> response.json())
    .then(result =>{
      console.log(result)
      PwdReset = result.result[0]
      // TempPwdが間違っていれば弾き(signoutでuserID=""にする)、
      // OKならパスワードをリセットして、そのままログインする。
      if (PwdReset==="PRC") {
        setUser(UserID)
        setAuthStatus(true)
        setRegistrationStatus(result.result[1])
        setMessage("")
      } else {
        console.log("エラー：", PwdReset)
        setUser("")
        setAuthStatus(false)
        setMessage("エラー："+PwdReset)
      }
      callback()
    })
  }

  let value = { user, aite, AuthStatus, RegistrationStatus, Message, signin, signout, registration, resetPwd, setAite, setMessage };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
