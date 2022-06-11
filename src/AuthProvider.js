import * as React from "react";
// import { fakeAuthProvider } from "./auth";
import { AuthContext } from "./AuthContext";

// export let AuthContext = React.createContext();

export function AuthProvider({ children }) {
  let [user, setUser] = React.useState("");
  let [aite, setAite] = React.useState("");
  let [AuthStatus, setAuthStatus] = React.useState(false);
  let [Message, setMessage] = React.useState("");

  let signin = (newUser, passWord, callback) => {
  // let signin = (newUser, passWord, callback) => {
    const initialRequestOptions ={
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({"email":newUser, "pwd":passWord})
    }
    // console.log(initialRequestOptions)
    fetch("../login.php",initialRequestOptions)
    .then((response)=> response.json())
    .then(result =>{
      // console.log(result.result[0])
      // console.log(result.result[1])
      // console.log(result.result(1))
      if (result.result[0]==="LS") {
        setUser(result.result[1]);
        setAuthStatus(true)
        setMessage("")
        // setTimeout(callback, 100);
        // setAite(null);
      } else {
        console.log("Login Failed in python")
      }
      callback();
    })
    // callback();
    // return fakeAuthProvider.signin(() => {
    //   setUser(newUser);
    //   setAite(null);
    //   callback();
    // });
  };

  let signout = (callback) => {
    setUser("");
    // setAite(null);
    callback();
    // return fakeAuthProvider.signout(() => {
    //   setUser(null);
    //   setAite(null);
    //   callback();
    // });
  };

  let value = { user, aite, AuthStatus, Message, signin, signout, setAite, setAuthStatus, setMessage };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
