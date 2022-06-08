import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./CartIcon.scss";
import { connect } from "react-redux";
import { toggleCart } from "../../Redux/Cart/CartActions";
import { selectCartItemsCount } from "../../Redux/Cart/CartSelector";
import { createStructuredSelector } from "reselect";
const CartIcon = ({ toggleCardHidded, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCardHidded}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCardHidded: () => dispatch(toggleCart()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
