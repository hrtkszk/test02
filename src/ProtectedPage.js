import * as React from "react";
import {
  Link,
  // Outlet
  useNavigate
} from "react-router-dom";
import { useAuth } from "./useAuth";

export function ProtectedPage() {
  let auth = useAuth();
  let navigate = useNavigate();

  return (
    <>
        <h3>Protected</h3>
        <p>
            Welcome {auth.user}!{" "}
            <button
            onClick={() => {
                auth.signout(() => navigate("/"));
            }}
            >
            Sign out
            </button>
            <ul>
              <li>
                <Link to="/">Go back to Login Page</Link>
              </li>
              {/* <li>
                <Link to="/protected">Protected Page</Link>
              </li> */}
            </ul>
        </p>
    </>
  );
}
