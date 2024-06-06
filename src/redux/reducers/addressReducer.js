const initialState = {
  address: {
    firstName: "",
    lastName: "",
    stressAddress: "",
    phoneNumber: "",
    provinceID: "",
    districtID: "",
    wardID: "",
    provinceName: "",
    districtName: "",
    wardName: "",
    id: 1,
  },
  addresses: [],
};

const addressReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PICK_ADDRESS":
      return {
        ...state,
        address: action.payload,
      };
    case "ADD_ADDRESS":
      return {
        ...state,
        addresses: action.payload,
      };
    default:
      return state;
  }
};
export default addressReducer;
