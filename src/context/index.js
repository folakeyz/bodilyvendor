import AsyncStorage from "@react-native-async-storage/async-storage";

import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({
  user: {},
  notVerified: {},
  token: "",
  isAuthenticated: false,
  authenticate: (token) => {},
  verification: (token) => {},
  logout: () => {},
});

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState();
  const [user, setUser] = useState({});
  const [notVerified, setNotVerified] = useState({});

  function authenticate(token) {
    setUser(token);
    AsyncStorage.setItem("user", JSON.stringify(token));
  }

  function verification(token) {
    setNotVerified(token);
    console.log(token, "testing token ");
    AsyncStorage.setItem("verification", JSON.stringify(token));
  }

  function logout() {
    setAuthToken(null);
    AsyncStorage.removeItem("user");
  }

  const value = {
    user: user,
    token: authToken,
    notVerified: notVerified,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    verification: verification,
    logout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
