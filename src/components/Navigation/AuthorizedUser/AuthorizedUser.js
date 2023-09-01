import NavProfile from "../../NavProfile/NavProfile";
import BurgerMenu from "../../BurgerMenu/BurgerMenu";
import React, { useEffect, useState } from "react";

export default function AuthorizedUser() {

  const [windowWidth, setWindowWidth] = useState(document.documentElement.clientWidth);

  useEffect(() => {
    const resize = (e) => setWindowWidth(document.documentElement.clientWidth);

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return(
    windowWidth > 768 ?
    <NavProfile />
    :
    <BurgerMenu />
  )
}