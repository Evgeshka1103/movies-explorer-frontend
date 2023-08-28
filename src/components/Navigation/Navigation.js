import UnAuthorizedUser from "./UnAuthorizedUser/UnAuthorizedUser";
import AuthorizedUser from "./AuthorizedUser/AuthorizedUser";
import "./Navigation.css";

export default function Navigation({ isLoggedIn }) {

  return(
<>
    {
      isLoggedIn ?
      <AuthorizedUser /> :
      <UnAuthorizedUser/>
    }
    </>
  )
};