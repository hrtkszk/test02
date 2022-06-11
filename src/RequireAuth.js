// import * as React from "react";
import {
  useLocation,
  // useNavigate,
  Navigate
} from "react-router-dom";
import { useAuth } from "./useAuth";

export function RequireAuth({ children }) {
  let auth = useAuth();
  let location = useLocation();
  // let navigate = useNavigate();
  console.log(auth.user)
  if (!auth.user || !auth.AuthStatus) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    // navigate("/")
    // auth.signout(() => navigate("/"))
    auth.signout(()=>{})
    auth.setMessage("メールアドレス又はパスワードが間違っています。")
    // return <Navigate to="../login" />;
    return <Navigate to="../" state={{ from: location }} replace />;
  } else {
    console.log(auth.user)
    return children;
  }
}
