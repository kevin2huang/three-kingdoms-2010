import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeaderMenuItems from "./mega-menu/HeaderMenuItems";
import HeaderMenuItemsMobile from "./mega-menu/HeaderMenuItemsMobile";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 68) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <div
        className={
          navbar
            ? "theme-main-menu sticky-menu theme-menu-four bg-none fixed"
            : "theme-main-menu sticky-menu theme-menu-four bg-none"
        }
      >
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo">
            <Link to="/">
              <img src="images/logo/deski_05.svg" alt="brand logo" />
            </Link>
          </div>
          {/* End Logo */}

          <nav id="mega-menu-holder" className="navbar navbar-expand-lg">
            <div className="container nav-container">
              <div
                className="navbar-collapse collapse"
                id="navbarSupportedContent"
              >
                <div className="d-lg-flex align-items-center">
                  <HeaderMenuItems />
                  {/* End Header Menu */}

                  <ul className="right-button-group d-flex align-items-center justify-content-center">
                    <li>
                      <Link to="login" className="signIn-action">
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link to="signup" className="theme-btn-five">
                        Create your event
                      </Link>
                    </li>
                  </ul>
                  {/* End right-button-group  */}
                </div>
              </div>
            </div>
          </nav>
          {/* End nav */}
        </div>

        <HeaderMenuItemsMobile />
        {/* 	End Header Menu for Mobile */}
      </div>
      {/* /.theme-main-menu */}
    </>
  );
};

export default Header;
