const initialState = {
  wishlist: [],
};

const wishReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_WISH":
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };
    case "REMOVE_WISH":
      return {
        ...state,
        wishlist: state.wishlist.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case "CLEAR_WISHLIST":
      return {
        ...state,
        wishlist: [],
      };
    default:
      return state;
  }
};

export default wishReducer;
