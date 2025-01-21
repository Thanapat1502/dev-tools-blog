/* eslint-disable react/prop-types */
import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authState, setAuthState] = useState({
    userId: null,
    user: null,
    userRole: null,
    token: null,
  });
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  //function to set authstate, set loggedIn
  const handleSessionLogin = (savedToken, savedUser) => {
    setAuthState({
      userId: savedUser.sub,
      userEmail: savedUser.email,
      user: savedUser,
      userRole: savedUser.user_metadata.role,
      token: savedToken,
    });
    setIsLoggedIn(true);
  };

  //check localstorage for token/ if have one, set user state base on token payload
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedUser = savedToken
      ? JSON.parse(localStorage.getItem("user") || "{}")
      : null;
    // if (savedToken && savedUser) {
    //   const userRole = savedUser.user_metadata.role;
    //   handleSessionLogin(savedToken, savedUser, userRole);
    //   setIsAuthLoading(false);
    // } else {
    //   setIsAuthLoading(false);
    // }
  }, []);

  //define login function which will use to store userdata and token.
  const login = async (email, password) => {
    try {
      const response = await axios.post("api/auth/login", { email, password });
      //access token
      const authToken = response.data.access_token;
      //access userInfo
      const userInfo = jwtDecode(authToken);
      // NOT USE const userId = getUserId.userId.user_id;
      //store user info as string in local& store token
      localStorage.setItem("user", JSON.stringify(userInfo));
      localStorage.setItem("token", authToken);
      //setCookie("authToken", authToken);
      //setauth state to store user / token
      const userRole = userInfo.user_metadata.role;
      handleSessionLogin(authToken, userInfo, userRole);
      return true;
    } catch (error) {
      console.log(error.message);
      console.error("Invalid email or password");
      return false;
    }
  };

  //define logout function which will remove user and token
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    // removeCookie("authToken");
    setAuthState({
      userId: null,
      user: null,
      userRole: null,
      token: null,
    });
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        login,
        logout,
        isLoggedIn,
        isAuthLoading,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth() must be used within an AuthProvider");
  }
  return context;
};
