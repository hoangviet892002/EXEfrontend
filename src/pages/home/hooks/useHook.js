import React, { useEffect, useState } from "react";
import { CategoryService, ProductService } from "../../../services";

const useHook = () => {
  const [categories, setCategories] = useState([]);
  const [newProduct, setNewProduct] = useState([]);
  const fetchCategories = async () => {
    const response = await CategoryService.getCategories();
    setCategories(response);
  };
  const fetchNewProducts = async () => {
    const response = await ProductService.getNewProducts();
    setNewProduct(response);
  };
  useEffect(() => {
    fetchCategories();
    fetchNewProducts();
  }, []);
  return { categories, newProduct };
};

export default useHook;
