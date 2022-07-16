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
            <Link to="profile/ProfileDetail">Profile Detail</Link>
          </li>
          <li>
            <Link to="profile/ProfileSetting">Profile Setting</Link>
          </li>
          <li>
            <Link to="profile/ChangePwd">Change Password</Link>
          </li>
          <li>
            <Link to="profile/ChangeEmail">Change Email Address</Link>
          </li>
        </ul>
        <Outlet />
    </>
  );
}
