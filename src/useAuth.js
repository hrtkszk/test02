import * as React from "react";
// import { AuthContext } from "./AuthContext";

export let AuthContext = React.createContext();

export function useAuth() {
  return React.useContext(AuthContext);
}
