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
              <Link to="page1">Show Page 1</Link>
            </li>
            <li>
              <Link to="page2">Show Page 2</Link>
            </li>
            <li>
              <Link to="Message">Show Message</Link>
            </li>
            <li>
              <Link to="MessageList">Show Message List</Link>
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
