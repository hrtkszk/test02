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
    let password = formData.get("password");
    // console.log(username)
    // console.log(password)

    if (username === "") {
        navigate("/", {replace:true})
    } else {
        () => {//, () => {
        //   // Send them back to the page they tried to visit when they were
        //   // redirected to the login page. Use { replace: true } so we don't create
        //   // another entry in the history stack for the login page.  This means that
        //   // when they get to the protected page and click the back button, they
        //   // won't end up back on the login page, which is also really nice for the
        //   // user experience.
        //   console.log(auth.user)
        //   // if (auth.user!=="") {
        //   //   // navigate(from, { replace: true });
        //   // } else {
        //   //   console.log("Login Failed.")
        //   //   // navigate("", { replace: true });
        //   // }
        // })
        auth.signin(username, password)
        .then(
          console.log(auth.user),
          navigate(from, { replace: true })
        )}
    }
  }

  return (
    <div>
      <p>ログインしてください</p>

      <form onSubmit={handleSubmit}>
        <label>
          <input
            name="username"
            type="email"
            placeholder='メールアドレス'
            required
          />
        </label><br />
        <label>
          <input
            name="password"
            type="password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            // 特殊文字を弾く必要がある。
            title="8文字以上で、数字・小文字アルファベット・大文字アルファベットを含めてください"
            placeholder='パスワード'
            required
          />
        </label><br />
        <button type="submit">ログイン</button>
      </form>
      <Link to="../NewUser">新規登録</Link><br />
      <Link to="../ForgetPwd">パスワードを忘れた方はこちら</Link>
    </div>
  );
}
