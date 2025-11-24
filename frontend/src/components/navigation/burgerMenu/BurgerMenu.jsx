import React, { useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import loginService from "../../../services/login";
import userService from "../../../services/userService";
import LoginForm from "../../forms/LoginForm";
import RegistrationForm from "../../forms/RegistrationForm";
import "./burgerMenu.css";

const BurgerMenu = ({ menuOpen, setMenuOpen }) => {
  const { isAuth, userInfo, logout } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registrationFormOpen, setRegistrationFormOpen] = useState(false);

  const { setUserAuthState, setUserToken, setUserInformation } = useAuth();

  const navigate = useNavigate();

  const handleAccountClick = () => {
    if (!isAuth) {
      alert("Please log in to your account.");
      return;
    }

    if (userInfo?.role === "admin") {
      navigate("/admin");
    } else {
      navigate("/account");
    }

    setMenuOpen(false);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await loginService.login({ username, password });

      if (response.status != 200) {
        console.log("User is not authenticated", response.statusText);
        setUserAuthState(false);
        return;
      }

      setUserAuthState(true);
      setUserToken(response.data.token);
      setUserInformation(response.data);

      setUsername("");
      setPassword("");
    } catch (error) {
      console.log("Error: wrong credentials", error);
    }
  };

  const handleLogoutClick = () => {
    logout();
    setMenuOpen(false);
  };

  const registerUser = async (newUserData) => {
    try {
      await userService.register(newUserData);
      console.log("User has been added to database");
    } catch (error) {
      console.log("Registration error", error);
    }
  };

  return (
    <>
      <div className={`burgerMenu ${menuOpen ? "burgerMenu--open" : ""}`}>
        <button
          className="burgerMenu__close"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>
        <ul className="burgerMenu__list">
          <li>
            <button
              className="burgerMenu__link-btn"
              onClick={handleAccountClick}
            >
              Account
            </button>
          </li>
          <li>
            <button
              className="burgerMenu__link-btn"
              onClick={() => {
                navigate("/");
                setMenuOpen(false);
              }}
            >
              About us
            </button>
          </li>
          <li>
            <button
              className="burgerMenu__link-btn"
              onClick={() => {
                navigate("/tours");
                setMenuOpen(false);
              }}
            >
              Routes & Prices
            </button>
          </li>
          <li>
            <button
              className="burgerMenu__link-btn"
              onClick={() => {
                navigate("/blogs");
                setMenuOpen(false);
              }}
            >
              Our Blog
            </button>
          </li>
          <li>
            {isAuth ? (
              <button onClick={handleLogoutClick} className="loginBtn">
                Logout
              </button>
            ) : (
              <div className="authentication">
                <div className="authentication__login-block">
                  Login to account
                  <LoginForm
                    handleLogin={handleLogin}
                    username={username}
                    setUsername={setUsername}
                    password={password}
                    setPassword={setPassword}
                    subbutton={"Login"}
                  />
                </div>
                <div className="authentication__registration-block">
                  <p className="registration-text">
                    Don't have a profile yet?{" "}
                    <a
                      className="registration-link"
                      onClick={() =>
                        setRegistrationFormOpen(!registrationFormOpen)
                      }
                    >
                      Sign up now.
                    </a>
                  </p>
                </div>
                {registrationFormOpen && (
                  <div className="authentication__login-block">
                    Register here
                    <RegistrationForm registerUser={registerUser} subbutton={"Join us"}/>
                  </div>
                )}
              </div>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default BurgerMenu;
