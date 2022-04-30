import * as React from "react";

export let AuthContext = React.createContext();

export function useAuth() {
  return React.useContext(AuthContext);
}
