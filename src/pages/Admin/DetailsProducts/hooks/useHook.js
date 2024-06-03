import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductService from "../../../../services/product.service";
import useHookUploadImage from "../../../../hook/useHookUploadImage";
import { useDispatch, useSelector } from "react-redux";
import { storeProduct } from "../../../../redux/actions/productAction";

const useHook = () => {
  const productRedux = useSelector((state) => state.product.product);
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
  const [loading, setLoading] = useState();
  const { id } = useParams();
  const fetchProduct = async () => {
    const response = await ProductService.getProduct(id);
    dispatch(storeProduct(response));
  };
  const { UploadImage } = useHookUploadImage();
  useEffect(() => {
    fetchProduct();
  }, [id]);
  useEffect(() => {
    if (productRedux !== null) setProduct(productRedux);
  }, [productRedux]);
  const deleteImage = async (id) => {
    setLoading(true);
    await ProductService.deleteImage(id);
    setLoading(false);
    fetchProduct();
  };
  const addImage = async (file) => {
    setLoading(true);
    const img_url = await UploadImage(file);
    await ProductService.addImage(product.id, img_url);
    await fetchProduct();
    setLoading(false);
  };
  return { product, loading, deleteImage, addImage };
};

export default useHook;
