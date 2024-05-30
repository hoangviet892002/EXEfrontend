import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  removeFromCart,
} from "../../../redux/actions/cartAction";

const useHook = () => {
  const dispatch = useDispatch();
  const listCart = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };
  const UpdateQuantity = (item, quantity) => {
    dispatch(addToCart(item, quantity));
  };
  return {
    listCart,
    handleClearCart,
    totalAmount,
    handleRemoveItem,
    UpdateQuantity,
  };
};

export default useHook;
