import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearWishlist } from "../../../redux/actions/wishAction";

const useHook = () => {
  const dispatch = useDispatch();
  const wishList = useSelector((state) => state.wish.wishlist);
  const clearWish = () => {
    dispatch(clearWishlist());
  };
  return { wishList, clearWish };
};

export default useHook;
