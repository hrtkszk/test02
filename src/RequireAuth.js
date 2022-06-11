// import * as React from "react";
import {
  // useLocation,
  useNavigate
} from "react-router-dom";
import { useAuth } from "./useAuth";

export function RequireAuth({ children }) {
  let auth = useAuth();
  // let location = useLocation();
  let navigate = useNavigate();

  console.log(auth.user)
  if (!auth.user) {
    console.log(auth.user)
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    navigate("../", { replace: true })
    // return <Navigate to="login" state={{ from: location }} replace />;
  } else {
    return children;
  }
}
