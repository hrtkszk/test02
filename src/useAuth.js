import * as React from "react";
import { AuthContext } from "./AuthContext";

// let AuthContext = React.createContext();

export function useAuth() {
  return React.useContext(AuthContext);
}
