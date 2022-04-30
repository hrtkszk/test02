import {
  Link,
  Outlet
} from "react-router-dom";
import { AuthStatus } from "./AuthStatus";

export function Layout() {
  return (
    <div>
      <AuthStatus />

      <ul>
        <li>
          <Link to="/">Login Page</Link>
        </li>
        {/* <li>
          <Link to="/protected">Protected Page</Link>
        </li> */}
      </ul>

      <Outlet />
    </div>
  );
}
