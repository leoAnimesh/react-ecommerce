import { Link } from "react-router-dom";
import SignedInBadge from "../SignedInBadge/SignedInBadge";
import "./Navbar.scss";
import { signInWithGoogle } from "../../firebase/utils";
import Button from "../Button/Button";
import { connect } from "react-redux";
import CartIcon from "../CartIcon/CartIcon";
import CartDropDown from "../CartDropDown/CartDropDown";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../Redux/Cart/CartSelector";
import { selectCurrentUser } from "../../Redux/User/UserSelector";
const Navbar = ({ currentUser, hidden }) => {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <Link to="/">
          <Logo className="logo" />
        </Link>
      </div>
      <div className="navbar__right">
        <Link to="/shop">Shop</Link>
        <CartIcon />
        {currentUser ? (
          <SignedInBadge user={currentUser} />
        ) : (
          <Button onClick={signInWithGoogle}>Sign In</Button>
        )}
        {hidden ? "" : <CartDropDown />}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Navbar);
