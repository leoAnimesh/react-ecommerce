export const toggleCart = () => ({
  type: "SET_HIDE",
});

export const addItem = (item) => ({
  type: "ADD_ITEMS",
  payload: item,
});

export const clearItemfromCart = (item) => ({
  type: "REMOVE_CART_ITEMS",
  payload: item,
});

export const removeItem = (item) => ({
  type: "DECREASE_ITEMS",
  payload: item,
});
