import * as React from "react";

import {
  Link,
  Outlet
  // useNavigate
} from "react-router-dom";
import { useAuth } from "./useAuth";

export function Profile() {
  let auth = useAuth();

  return (
    <>
        <h3>My Profile</h3>
        <p>
            This is {auth.user} profile page.
        </p>
        <ul>
          <li>
            <Link to="ProfileDetail">Profile Detail</Link>
          </li>
          <li>
            <Link to="ProfileSetting">Profile Setting</Link>
          </li>
          <li>
            <Link to="ChangePwd">Change Password</Link>
          </li>
          <li>
            <Link to="ChangeEmail">Change Email Address</Link>
          </li>
        </ul>
        <Outlet />
    </>
  );
}
