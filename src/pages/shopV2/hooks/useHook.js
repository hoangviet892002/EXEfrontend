import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ProductService } from "../../../services";

const useHook = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(10000);
  const megaMenu = useSelector((state) => state.menu.categories);
  const typeId = useSelector((state) => state.menu.typeId);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const fetchProducts = async () => {
    const response = await ProductService.getProductsFilter(
      currentPage,
      min,
      max,
      typeId,
      query
    );

    setTotalPage(response.totalPages);
    setProducts(response.products);
  };
  useEffect(() => {
    fetchProducts();
  }, [currentPage, min, max, typeId, query]);
  return {
    megaMenu,
    setMax,
    setMin,
    totalPage,
    currentPage,
    setCurrentPage,
    products,
    query,
    setQuery,
  };
};

export default useHook;
