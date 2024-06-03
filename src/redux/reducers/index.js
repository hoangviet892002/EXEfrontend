import { combineReducers } from "redux";
import userReducer from "./userReducer";
import categoryReducer from "./categoryReducer";
import productReducer from "./productReducers";
import megaMenuReducer from "./megaMenuReducer";
import wishReducer from "./wishReducer";
import cartReducer from "./cartReducer";
import languagesReducer from "./languagesReducer";

export default combineReducers({
  user: userReducer,
  category: categoryReducer,
  product: productReducer,
  menu: megaMenuReducer,
  wish: wishReducer,
  cart: cartReducer,
  languages: languagesReducer,
});
