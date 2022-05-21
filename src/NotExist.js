import * as React from "react";
import {
  Link,
  // Outlet
  // useNavigate
} from "react-router-dom";

export function NotExist() {

  return (
    <>
        <h3>Page Not Exist</h3>
        <p>
          Not Exist!
        </p>
        <Link to="../">戻る</Link>
    </>
  );
}
