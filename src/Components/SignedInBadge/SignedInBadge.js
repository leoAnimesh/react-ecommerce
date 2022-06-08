import { auth } from "../../firebase/utils";
import "./SignedInBadge.scss";
const SignedInBadge = ({ user }) => {
  const UserName = user.displayName.split(" ");
  return (
    <div className="signedInBadge">
      <div className="signedInBadge__left">
        {user.photoURL ? (
          <img src={user.photoURL} alt="profile" />
        ) : (
          <div className="signedInBadge__left--alt-img">
            {user.displayName.slice(0, 1)}
          </div>
        )}
      </div>
      <div className="signedInBadge__right">
        <p className="signedInBadge__right--name">{UserName[0]}</p>
        <p
          className="signedInBadge__right--signout"
          onClick={() => {
            auth.signOut();
          }}
        >
          SignOut
        </p>
      </div>
    </div>
  );
};

export default SignedInBadge;
