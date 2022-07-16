import * as React from "react";
// import {
//   Link,
//   // Outlet
//   useNavigate
// } from "react-router-dom";
import { useAuth } from "./useAuth";

export function ProfileSetting() {
  let auth = useAuth();

  return (
    <>
        <h3>Profile Setting</h3>
        <p>
            This is Profile Setting! {auth.user}
        </p>
    </>
  );
}
