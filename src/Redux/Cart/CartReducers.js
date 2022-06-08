import { addItemToCart, decreaseCartItem } from "./CartUtils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const CartReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_HIDE":
      return {
        ...state,
        hidden: !state.hidden,
      };
    case "ADD_ITEMS":
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case "REMOVE_CART_ITEMS":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case "DECREASE_ITEMS":
      return {
        ...state,
        cartItems: decreaseCartItem(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default CartReducers;
