import React from "react";
import { useSelector } from "react-redux";

const useHook = () => {
  const listCart = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return { listCart, totalAmount };
};

export default useHook;
