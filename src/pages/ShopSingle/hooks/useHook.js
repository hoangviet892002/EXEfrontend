import React, { useEffect, useState } from "react";
import { ProductService } from "../../../services";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addWish, removeWish } from "../../../redux/actions/wishAction";
import { addToCart } from "../../../redux/actions/cartAction";

const useHook = () => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    id: "",
    productName: "",
    createdAt: "",
    product_detail: "",
    cost: "",
    productImages: [
      {
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/exe2-tera-candle.appspot.com/o/files%2Ff3763148-a708-45b6-b35d-3354a510504d?alt=media&token=79633f89-4a36-46c5-9c4c-6b0f06731022",
      },
    ],
    category_type_id: [],
    product_dimensions: "",
    discount: null,
  });
  const [quantity, setQuantity] = useState(1);
  const wishList = useSelector((state) => state.wish.wishlist);
  const isWish = wishList.some((item) => item.id === product.id);
  const { id } = useParams();
  const fetchProduct = async () => {
    const response = await ProductService.getProduct(id);
    setProduct(response);
  };
  const updateWish = () => {
    if (isWish) {
      dispatch(removeWish(product.id));
    } else {
      dispatch(addWish(product));
    }
  };
  useEffect(() => {
    fetchProduct();
  }, [id]);
  const handleAddtoCart = () => {
    dispatch(addToCart(product, quantity));
  };

  return {
    product,
    isWish,
    updateWish,
    quantity,
    setQuantity,
    handleAddtoCart,
  };
};

export default useHook;
