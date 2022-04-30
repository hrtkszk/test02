import * as React from "react";
import { useAuth } from "./useAuth";

export function AuthStatus() {
  let auth = useAuth();

  if (auth.user) {
    return <p>You are logged in.</p>;
  } else {
    return <p>You are not logged in.</p>;
  }
}
