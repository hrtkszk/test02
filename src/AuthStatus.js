import * as React from "react";
import { useAuth } from "./useAuth";

export function AuthStatus() {
  let auth = useAuth();

  if (auth.user && auth.AuthStatus) {
    return <p>You are logged in as {auth.user}.</p>;
  } else if (auth.Message!=="") {
    return <p>{auth.Message}</p>
  } else {
    return <p>You are not logged in.</p>;
  }
}
