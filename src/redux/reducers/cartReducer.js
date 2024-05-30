const initialState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const newItem = action.payload.item;
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === newItem.id
      );
      const existingItem = state.items[existingItemIndex];

      let updatedItems;

      if (existingItem) {
        // If the item already exists in the cart, increase its quantity
        const updatedItem = {
          ...existingItem,
          number: existingItem.number + action.payload.quantity,
        };
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        // If the item does not exist in the cart, add the new item
        updatedItems = [
          ...state.items,
          { ...newItem, number: action.payload.quantity },
        ];
      }

      return {
        ...state,
        items: updatedItems,
        totalAmount:
          state.totalAmount + newItem.price * action.payload.quantity,
      };

    case "REMOVE_FROM_CART":
      const itemId = action.payload;
      const itemToRemoveIndex = state.items.findIndex(
        (item) => item.id === itemId
      );
      const itemToRemove = state.items[itemToRemoveIndex];

      return {
        ...state,
        items: state.items.filter((item) => item.id !== itemId),
        totalAmount:
          state.totalAmount - itemToRemove.price * itemToRemove.number,
      };

    case "UPDATE_CART_QUANTITY":
      const { id, quantity } = action.payload;
      const itemToUpdateIndex = state.items.findIndex((item) => item.id === id);
      const itemToUpdate = state.items[itemToUpdateIndex];

      if (itemToUpdate) {
        const updatedItem = {
          ...itemToUpdate,
          quantity: quantity,
        };
        const updatedCartItems = [...state.items];
        updatedCartItems[itemToUpdateIndex] = updatedItem;

        const newTotalAmount = state.items.reduce((total, item) => {
          if (item.id === id) {
            return total + item.price * quantity;
          }
          return total + item.price * item.quantity;
        }, 0);

        return {
          ...state,
          items: updatedCartItems,
          totalAmount: newTotalAmount,
        };
      }
      return state;

    case "CLEAR_CART":
      return initialState;

    default:
      return state;
  }
};

export default cartReducer;
