import * as React from "react";
import { fakeAuthProvider } from "./auth";
import { AuthContext } from "./AuthContext";

// export let AuthContext = React.createContext();

export function AuthProvider({ children }) {
  let [user, setUser] = React.useState();
  let [aite, setAite] = React.useState();

  let signin = (newUser, callback) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser);
      setAite(null);
      callback();
    });
  };

  let signout = (callback) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      setAite(null);
      callback();
    });
  };

  let value = { user, aite, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
