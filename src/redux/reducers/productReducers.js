const initialState = {
  products: [],
  product: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "STORE_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "STORE_PRODUCT":
      return {
        ...state,
        product: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
