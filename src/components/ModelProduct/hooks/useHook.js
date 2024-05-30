import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../redux/actions/cartAction";

const useHook = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.menu.product);
  const [quantity, setQuantity] = useState(1);
  const handleAddtoCart = () => {
    dispatch(addToCart(product, quantity));
  };

  return { product, quantity, setQuantity, handleAddtoCart };
};

export default useHook;
