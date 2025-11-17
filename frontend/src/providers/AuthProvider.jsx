import { useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState({})

  useEffect(() => {
    const isAuthFromStorage = localStorage.getItem("isAuth");
    const tokenFromStorage = localStorage.getItem("token");
    const userInfoFromStorage = localStorage.getItem("userInfo");

    isAuthFromStorage && setIsAuth(isAuthFromStorage);
    tokenFromStorage && setToken(tokenFromStorage);
    userInfoFromStorage && JSON.parse(userInfoFromStorage) && setUserInfo(JSON.parse(userInfoFromStorage));
  }, []);

  useEffect(() => {
    if (!isAuth) return;
    
    localStorage.setItem("isAuth", isAuth);
  }, [isAuth]);

  useEffect(() => {
    if (!token) return;

    localStorage.setItem("token", token);
  }, [token]);

  useEffect(() => {
    if (!userInfo || Object.keys(userInfo).length == 0) return;

    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  }, [userInfo]);

  const setUserAuthState = (userAuthState) => {
    userAuthState && setIsAuth(userAuthState);
  };

  const setUserToken = (userToken) => {
    userToken && setToken(userToken);
  };

  const setUserInformation = (info) => {
    info && Object.keys(info).length > 0 && setUserInfo(info);
  };

  const value = {
    isAuth,
    token,
    userInfo,
    setUserAuthState,
    setUserToken,
    setUserInformation,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
