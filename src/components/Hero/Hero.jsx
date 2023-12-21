import scss from "./Hero.module.scss";
import React from "react";
import "../../svg/tab1.svg";

const Hero = () => {
  return (
    <>
      <div className={scss.hero}>
        <svg className={scss.svg}>
          <use href="../../svg/tab1.svg#tab1"></use>
        </svg>
        <div className={scss["hero__bg"]}></div>
      </div>
      <div className={scss.dsc}>
        <p className={scss["dsc__title"]}>A Simple Bookmark Menager</p>
        <p className={scss["dsc__text"]}>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free
        </p>
      </div>
      <div className={scss.button}>
        <button className={scss["button__chrome"]}>Geit it on Chrome</button>
        <button className={scss["button__firefox"]}>Geit it on Firefox</button>
      </div>
    </>
  );
};

export default Hero;
