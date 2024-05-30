import { combineReducers } from "redux";
import categoryReducer from "../reducers/categoryReducer";

export default combineReducers({
  category: categoryReducer,
});

export const storeCategories = (data) => ({
  type: "STORE_CATEGORIES",
  payload: data,
});

export const storeCategory = (data) => ({
  type: "STORE_CATEGORY",
  payload: data,
});
export const storeCategoryTypes = (data) => ({
  type: "STORE_CATEGORYTYPES",
  payload: data,
});
export const storeCategoryType = (data) => ({
  type: "STORE_CATEGORYTYPE",
  payload: data,
});
