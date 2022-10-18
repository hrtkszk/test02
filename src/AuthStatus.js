import * as React from "react";
import { useAuth } from "./useAuth";

export function AuthStatus() {
  let auth = useAuth();

  if (auth.user && auth.AuthStatus && auth.RegistrationStatus==="1") {
    // console.log(auth.user+", "+auth.AuthStatus+","+auth.RegistrationStatus)
    return <p>{auth.user}<br />{auth.Message}</p>;
  } else if (auth.user && auth.AuthStatus && auth.RegistrationStatus==="RIC") {
    // console.log(auth.user+", "+auth.AuthStatus+","+auth.RegistrationStatus)
    return <p>基本情報が未登録です。基本情報を登録してください</p>;
  }  else if (auth.Message!=="") {
    return <p>{auth.Message}</p>
  } else {
    return <p>ログインしてください</p>;
  }
}
