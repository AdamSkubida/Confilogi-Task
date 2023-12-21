// import scss from "./Hero.module.scss";
import React from "react";
import "../../svg/tab1.svg";

const Hero = () => {
  return (
    <>
      <div>
        <svg>
          <use href="../../svg/tab1.svg#tab1"></use>
        </svg>
      </div>
    </>
  );
};

export default Hero;
