import {
  useNavigate
} from "react-router-dom";
import { useAuth } from "./useAuth";

export function LogOutPage() {
  let auth = useAuth();
  let navigate = useNavigate();

  return (
    <button
      onClick={() => {
          auth.signout(() => navigate("/"));
      }}
      >
      Sign out
    </button>
  );
}
