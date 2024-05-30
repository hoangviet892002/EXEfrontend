const initialState = {
  categories: [],
  category: null,
  categoryTypes: [],
  categoryType: null,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "STORE_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };
    case "STORE_CATEGORY":
      return {
        ...state,
        category: action.payload,
      };
    case "STORE_CATEGORYTYPES":
      return {
        ...state,
        categoryTypes: action.payload,
      };
    case "STORE_CATEGORYTYPE":
      return {
        ...state,
        categoryType: action.payload,
      };
    default:
      return state;
  }
};

export default categoryReducer;
