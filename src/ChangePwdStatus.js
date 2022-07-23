import * as React from "react";

export function ChangePwdStatus(test) {
  if (test=true) {
    return <p>パスワードを変更しました</p>
  } else if(test=false) {
    return <p>パスワードを変更できませんでした</p>
  } else {
    return <p></p>
  }
}
