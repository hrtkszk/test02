import * as React from "react";
// import {
//   Link,
//   // Outlet
//   useNavigate
// } from "react-router-dom";
import { useAuth } from "./useAuth";

export function Profile() {
  let auth = useAuth();

  return (
    <>
        <h3>My Profile</h3>
        <p>
            This is {auth.user} profile page.
        </p>
    </>
  );
}
