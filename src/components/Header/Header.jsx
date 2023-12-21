import scss from "./Header.module.scss";
import React from "react";
import "../../svg/icons.svg";

const Header = () => {
  return (
    <>
      <div className={scss.header}>
        <div className={scss.bookmark}>
          <svg width="148px" height="25px">
            <use href="../../svg/icons.svg#bookmark"></use>
          </svg>
        </div>
        <div className={scss.hamburger}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15">
            <path
              fill="#242A45"
              fillRule="evenodd"
              d="M0 0h18v3H0V0zm0 6h18v3H0V6zm0 6h18v3H0v-3z"
            />
          </svg>
        </div>
        <div className={scss.nav}>
          <ul className={scss["nav__list"]}>
            <li className={scss["nav__item"]}>FEATURES</li>
            <li className={scss["nav__item"]}>PRICING</li>
            <li className={scss["nav__item"]}>CONTACT</li>
            <button className={scss["nav__button"]}>
              <li className={scss["nav__item"]}>LOGIN</li>
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
