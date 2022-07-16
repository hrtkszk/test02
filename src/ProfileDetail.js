import * as React from "react";
// import {
//   Link,
//   // Outlet
//   useNavigate
// } from "react-router-dom";
import { useAuth } from "./useAuth";

export function ProfileDetail() {
  let auth = useAuth();

  return (
    <>
        <h3>Profile Detail</h3>
        <p>
            This is Profile Detail! {auth.user}
        </p>
    </>
  );
}
