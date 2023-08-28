import NavProfile from "../../NavProfile/NavProfile";
import BurgerMenu from "../../BurgerMenu/BurgerMenu";


export default function AuthorizedUser() {
  const windowWidth = document.documentElement.clientWidth;

  return(
    windowWidth > 768 ?
    <NavProfile />
    :
    <BurgerMenu />
  )
}