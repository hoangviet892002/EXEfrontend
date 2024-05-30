export const addToCart = (item, quantity) => {
  return {
    type: "ADD_TO_CART",
    payload: { item, quantity },
  };
};

export const removeFromCart = (itemId) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: itemId,
  };
};

export const updateCartQuantity = (id, quantity) => {
  return {
    type: "UPDATE_CART_QUANTITY",
    payload: { id, quantity },
  };
};

export const clearCart = () => {
  return {
    type: "CLEAR_CART",
  };
};
