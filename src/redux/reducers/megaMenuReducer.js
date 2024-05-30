const initialState = {
  categories: [],
  typeId: "",
  product: {
    id: "",
    productName: "",
    price: "",
    productImages: [],
    status: true,
  },
};

const megaMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case "STORE_MENU":
      return {
        ...state,
        categories: action.payload,
      };
    case "PICK_TYPE":
      return {
        ...state,
        typeId: action.payload,
      };
    case "PICK_PRODUCT":
      return {
        ...state,
        product: action.payload,
      };
    default:
      return state;
  }
};

export default megaMenuReducer;
