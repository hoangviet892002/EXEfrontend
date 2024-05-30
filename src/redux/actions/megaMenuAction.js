import { combineReducers } from "redux";
import megaMenuReducer from "../reducers/megaMenuReducer";

export default combineReducers({
  menu: megaMenuReducer,
});

export const storeMenu = (data) => ({
  type: "STORE_MENU",
  payload: data,
});
export const pickType = (data) => ({
  type: "PICK_TYPE",
  payload: data,
});
export const pickProduct = (data) => ({
  type: "PICK_PRODUCT",
  payload: data,
});
