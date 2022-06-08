import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import "./CartDropDown.scss";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { selectCartItems } from "../../Redux/Cart/CartSelector";
import { createStructuredSelector } from "reselect";
import cartImage from "../../assets/cart1.png";
import { toggleCart } from "../../Redux/Cart/CartActions";
const CartDropDown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <div className="empty-message">
            <img src={cartImage} alt="cart is empty" />
          </div>
        )}
      </div>
      <Button
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCart());
        }}
      >
        go to checkout
      </Button>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
