import React from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import "./burgerMenu.css";

const BurgerMenu = ({ menuOpen, setMenuOpen }) => {
  const { isAuth, userInfo, logout } = useAuth();

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

  const handleLogoutClick = () => {
    logout();
    setMenuOpen(false);
  };

  return (
    <div className={`burgerMenu ${menuOpen ? "burgerMenu--open" : ""}`}>
      <button className="burgerMenu__close" onClick={() => setMenuOpen(false)}>
        ✕
      </button>
      <ul className="burgerMenu__list">
        <li>
          <button className="burgerMenu__link" onClick={handleAccountClick}>
            Account
          </button>
        </li>
        <li>
          <button
            className="burgerMenu__link"
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
            className="burgerMenu__link"
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
            <button
              onClick={handleLogoutClick}
              className="loginBtn"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => console.log("login btn has clicked")}
              className="loginBtn"
            >
              Login or register
            </button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default BurgerMenu;
