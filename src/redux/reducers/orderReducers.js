const initialState = {
  orders: [],
  order: {},
};
const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ORDERS":
      return {
        ...state,
        orders: action.payload,
      };
    case "GET_ORDER":
      return {
        ...state,
        order: action.payload,
      };
    default:
      return state;
  }
};
export default orderReducer;
