import React, { useEffect, useState } from "react";
import ProductService from "../../../../services/product.service";
import { useDispatch, useSelector } from "react-redux";
import { storeProducts } from "../../../../redux/actions/productAction";

const useHook = () => {
  const dispactch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");
  const fetchProducts = async () => {
    const response = await ProductService.getProducts(currentPage, query);
    setTotalPage(response.totalPages);
    dispactch(storeProducts(response.products));
  };
  useEffect(() => {
    fetchProducts();
  }, [currentPage, query]);
  const deleteProduct = async (id) => {
    await ProductService.deleteProduct(id);
    fetchProducts();
  };
  return {
    totalPage,
    currentPage,
    query,
    products,
    setCurrentPage,
    setQuery,
    deleteProduct,
  };
};

export default useHook;
