import { useEffect, useState } from "react";
import useHookUploadImage from "../../../../hook/useHookUploadImage";
import { CategoryService } from "../../../../services";
import { useDispatch, useSelector } from "react-redux";
import {
  storeCategories,
  storeCategory,
} from "../../../../redux/actions/categoryAction";

const useHook = () => {
  const dispactch = useDispatch();
  const categories = useSelector((state) => state.category.categories);
  const [loading, setLoading] = useState(false);
  const { UploadImage } = useHookUploadImage();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const submit = async (name, file) => {
    setLoading(true);
    const img_url = (await UploadImage(file)) + "";
    await CategoryService.CreateCategory(img_url, name);
    fetchCategories();
    setLoading(false);
  };
  const fetchCategories = async () => {
    const response = await CategoryService.getCategories();
    dispactch(storeCategories(response));
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  const deleteCategory = async (id) => {
    await CategoryService.deleteCategory(id);
    fetchCategories();
  };
  const selectCategory = async (data) => {
    dispactch(storeCategory(data));
  };

  return { submit, loading, categories, deleteCategory, selectCategory };
};

export default useHook;
