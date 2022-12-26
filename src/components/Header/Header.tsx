import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";
import style from "./Header.module.scss";

const Header = () => {
  const isMobile = useMediaQuery("(max-width:767px)");
  const [burgerOpen, setBurgerOpen] = useState(false);
  const location = useLocation();

  const toggleBurger = () => {
    const body = document.querySelector("body");
    if (body?.classList.contains("lock")) {
      body?.classList.remove("lock");
    } else {
      body?.classList.add("lock");
    }
    setBurgerOpen(!burgerOpen);
  };

  const toSecton = (sectionId: string) => {
    const section = document.querySelector(`#${sectionId}`);
    const body = document.querySelector("body");

    setBurgerOpen(false);
    if (body?.classList.contains("lock")) {
      body?.classList.remove("lock");
    }

    section?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const toTop = () => {
    const body = document.querySelector("body");

    setBurgerOpen(false);
    if (body?.classList.contains("lock")) {
      body?.classList.remove("lock");
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  if (location.pathname !== "/policy") {
    if (!isMobile) {
      return (
        <div className={style.header}>
          <div className="container">
            <div className={style.headerBody}>
              <div
                onClick={() => toTop()}
                className={`${style.headerBody__item} ${style.active}`}
              >
                HOME
              </div>
              <div
                onClick={() => toSecton("games")}
                className={style.headerBody__item}
              >
                GAMES
              </div>
              <div
                onClick={() => toSecton("features")}
                className={style.headerBody__item}
              >
                FEATURES
              </div>
              <div
                onClick={() => toSecton("reviews")}
                className={style.headerBody__item}
              >
                REVIEWS
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className={style.header}>
          <div className="container">
            <div className={style.headerBody}>
              <div
                onClick={toggleBurger}
                className={`${style.headerBody__burger} ${
                  burgerOpen ? style.active : ""
                }`}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div
              className={`${style.headerMenu} ${
                burgerOpen ? style.active : ""
              }`}
            >
              <div
                onClick={() => toTop()}
                className={`${style.headerBody__item} ${style.active}`}
              >
                HOME
              </div>
              <div
                onClick={() => toSecton("games")}
                className={style.headerBody__item}
              >
                GAMES
              </div>
              <div
                onClick={() => toSecton("features")}
                className={style.headerBody__item}
              >
                FEATURES
              </div>
              <div
                onClick={() => toSecton("reviews")}
                className={style.headerBody__item}
              >
                REVIEWS
              </div>
            </div>
          </div>
        </div>
      );
    }
  } else {
    return <></>;
  }
};

export default Header;
