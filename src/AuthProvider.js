import * as React from "react";
// import { fakeAuthProvider } from "./auth";
import { AuthContext } from "./AuthContext";

// export let AuthContext = React.createContext();

export function AuthProvider({ children }) {
  let [user, setUser] = React.useState();
  let [aite, setAite] = React.useState();

  let signin = (newUser, passWord, callback) => {
    const initialRequestOptions ={
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({"email":newUser, "pwd":passWord})
    }
    
    fetch("../login.php",initialRequestOptions)
    .then((response)=> response.json())
    .then(result =>{
      console.log(result)
      setUser(result.UUID);
      // setAite(null);
      callback();

    })

    // return fakeAuthProvider.signin(() => {
    //   setUser(newUser);
    //   setAite(null);
    //   callback();
    // });
  };

  let signout = (callback) => {
    setUser(null);
    // setAite(null);
    callback();
    // return fakeAuthProvider.signout(() => {
    //   setUser(null);
    //   setAite(null);
    //   callback();
    // });
  };

  let value = { user, aite, signin, signout, setAite };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
