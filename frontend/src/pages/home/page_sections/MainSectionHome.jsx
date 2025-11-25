import React, { useState, useEffect } from "react";
import loginService from "../../../services/login";
import userService from "../../../services/userService";
import { toast } from "react-toastify";
import ArrowBlueButton from "../../../components/buttons/arrow_blue/ArrowBlueButton";
import SliderSmall from "../../../components/sliders/slider_small/SliderSmall";
import Modal from "../../../components/modals/modalLayout/Modal";
import UserAuthModal from "../../../components/modals/userAuthModal/UserAuthModal";
import SuccessRegistrationModal from "../../../components/modals/successRegistrationModal/SuccessRegistrationModal";
import "./mainSectionHome.css";
import { useAuth } from "../../../contexts/AuthContext";

const MainSectionHome = () => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [registrationModalOpen, setRegistrationModalOpen] = useState(false);
  const [newUserRegistered, setNewUserregistered] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const { setUserAuthState, setUserToken, setUserInformation, isAuth, logout } =
    useAuth();

  const closeAllModals = () => {
    setLoginModalOpen(false);
    setRegistrationModalOpen(false);
    setNewUserregistered(false);
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
      setLoginModalOpen(false);
    } catch (error) {
      console.log("Error: wrong credentials", error);
    }
  };

  const registerUser = async (newUserData) => {
    try {
      await userService.register(newUserData);

      toast.success("Registration successful!");

      setRegistrationModalOpen(false);
      setNewUserregistered(true);
      console.log("newUserRegistered", newUserRegistered);
    } catch (error) {
      console.log("Registration error", error);
      toast.error("Registration failed. Please try again.");
    }
  };

  const handleLogout = () => {
    logout();
    setUser(null);
    console.log(user);
  };

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      loginService.setToken(user.token);
    }
  }, []);

  return (
    <section id="sectionOne" className="home-main">
      <div className="home-content">
        <div className="home-content__image">
          <SliderSmall />
        </div>
        <div className="home-content__text">
          <h1 className="home-content__title">
            <span>kayaking </span>club
          </h1>
          <p className="home-content__description">
            Our tours are designed to fit your pace, your passion, <br />
            and adventure.
          </p>
          <ArrowBlueButton
            clickEvent={isAuth ? handleLogout : () => setLoginModalOpen(true)}
            text={isAuth ? "Logout" : "Join us here"}
          />
        </div>
      </div>
      <Modal
        closeModal={closeAllModals}
        isModalOpen={loginModalOpen}
        handleLogin={handleLogin}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        registrationModalOpen={registrationModalOpen}
        setRegistrationModalOpen={setRegistrationModalOpen}
        registerUser={registerUser}
      >
        <UserAuthModal registerUser={registerUser} />
      </Modal>
    </section>
  );
};

export default MainSectionHome;
