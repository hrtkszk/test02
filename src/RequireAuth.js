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

  if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    // navigate("/")
    // auth.signout(() => navigate("/"))
    
    auth.signout(()=>{})
    console.log(auth.user)
    // return <Navigate to="../login" />;
    return <Navigate to="../login" state={{ from: location }} replace />;
  } else {
    console.log(auth.user)
    return children;
  }
}
