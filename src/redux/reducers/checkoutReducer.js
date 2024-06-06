const initialState = {
  address: null,
};

const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PICK_ADDRESS_CHECKOUT":
      return {
        ...state,
        address: action.payload,
      };
    default:
      return state;
  }
};

export default checkoutReducer;
