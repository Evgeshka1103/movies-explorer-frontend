import UnAuthorizedUser from "./UnAuthorizedUser/UnAuthorizedUser";
import AuthorizedUser from "./AuthorizedUser/AuthorizedUser";

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