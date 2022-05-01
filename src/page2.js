import * as React from "react";
// import {
//   Link,
//   // Outlet
//   useNavigate
// } from "react-router-dom";
import { useAuth } from "./useAuth";

export function Page2() {
  let auth = useAuth();

  return (
    <>
        <h3>Page 2</h3>
        <p>
            This is page 2! {auth.user}
        </p>
    </>
  );
}
