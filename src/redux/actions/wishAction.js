import { combineReducers } from "redux";
import wishReducer from "../reducers/wishReducer";

export default combineReducers({
  wish: wishReducer,
});
export const addWish = (item) => ({
  type: "ADD_WISH",
  payload: item,
});

export const removeWish = (id) => ({
  type: "REMOVE_WISH",
  payload: { id },
});

export const clearWishlist = () => ({
  type: "CLEAR_WISHLIST",
});
