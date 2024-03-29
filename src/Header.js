// import * as React from "react";
import {
  Link,
  Outlet
  // useNavigate
} from "react-router-dom";
// import { useAuth } from "./useAuth";

export function Header() {
  // let auth = useAuth();
  // let navigate = useNavigate();

  return (
    <>
      <h3>Protected</h3>
      <p>
          {/* Welcome {auth.user}!
          <button
          onClick={() => {
              auth.signout(() => navigate("/"));
          }}
          >
          Sign out
          </button> */}
          <ul>
            <li>
              <Link to="PicULTest">PicULTest</Link>
            </li>
            <li>
              <Link to="BoshuList">Boshu List</Link>
            </li>
            <li>
              <Link to="BoshuSearchSetting">募集検索設定</Link>
            </li>
            <li>
              <Link to="BoshuPost">募集投稿</Link>
            </li>
            <li>
              <Link to="ProfileSearchSetting1">Set Profile Search1</Link>
            </li>
            <li>
              <Link to="ProfileList">Show Profile List</Link>
            </li>
            <li>
              <Link to="MessageList">Show Message List</Link>
            </li>
            <li>
              <Link to="MyProfile">プロフィール設定</Link>
            </li>
            <li>
              <Link to="logout">Logout Page</Link>
            </li>
          </ul>
      </p>
      <Outlet />
    </>
  );
}
