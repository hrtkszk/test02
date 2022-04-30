import * as React from "react";

import { useNavigate } from "react-router-dom";
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
        </p>
    </>
  );
}
