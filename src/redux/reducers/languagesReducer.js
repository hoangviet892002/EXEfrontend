const initialState = {
  languages: "en",
};

const languagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_LANGUAGE":
      return {
        ...state,
        languages: action.payload,
      };
    default:
      return state;
  }
};

export default languagesReducer;
