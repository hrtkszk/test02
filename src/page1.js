import * as React from "react";
// import {
//   Link,
//   // Outlet
//   useNavigate
// } from "react-router-dom";
import { useAuth } from "./useAuth";

export function Page1() {
  let auth = useAuth();

  return (
    <>
        <h3>Page 1</h3>
        <p>
            This is page 1! {auth.user}
        </p>
    </>
  );
}
