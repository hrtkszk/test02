import * as React from "react";
import {
  Link,
  useNavigate,
//   useLocation
} from "react-router-dom";
import { useAuth } from "./useAuth";

export function LoginPage() {
  let navigate = useNavigate();
//   let location = useLocation();
  let auth = useAuth();

//   let from = location.state?.from?.pathname || "/";
  let from = "protected"

  function handleSubmit(event) {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let username = formData.get("username");
    console.log(username)

    if (username === "") {
        navigate("/", {replace:true})
    } else {
        auth.signin(username, () => {
        // Send them back to the page they tried to visit when they were
        // redirected to the login page. Use { replace: true } so we don't create
        // another entry in the history stack for the login page.  This means that
        // when they get to the protected page and click the back button, they
        // won't end up back on the login page, which is also really nice for the
        // user experience.
        navigate(from, { replace: true });
        });
    }
  }

  return (
    <div>
      <p>ログインしてください</p>

      <form onSubmit={handleSubmit}>
        <label>
          メールアドレス／電話番号<input name="username" type="text" />
        </label>
        <label>
          パスワード：<input name="password" type="text" />
        </label>
        <button type="submit">ログイン</button>
      </form>
      <Link to="../NewUser">新規登録</Link>
      <Link to="../ForgetPwd">パスワードを忘れた方はこちら</Link>
    </div>
  );
}
