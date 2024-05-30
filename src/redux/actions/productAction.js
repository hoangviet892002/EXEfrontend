import { combineReducers } from "redux";
import productReducer from "../reducers/productReducers";

export default combineReducers({
  product: productReducer,
});

export const storeProducts = (data) => ({
  type: "STORE_PRODUCTS",
  payload: data,
});
export const storeProduct = (data) => ({
  type: "STORE_PRODUCT",
  payload: data,
});
