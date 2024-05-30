import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useHookUploadImage from "../../../../hook/useHookUploadImage";
import {
  storeCategories,
  storeCategory,
  storeCategoryType,
  storeCategoryTypes,
} from "../../../../redux/actions/categoryAction";
import { CategoryService, CategoryTypeService } from "../../../../services";

const useHook = () => {
  const dispactch = useDispatch();
  const categoryTypes = useSelector((state) => state.category.categoryTypes);
  const [loading, setLoading] = useState(false);
  const { UploadImage } = useHookUploadImage();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const submit = async (name, id) => {
    setLoading(true);
    await CategoryTypeService.CreateCategoryTypes(id, name);
    fetchCategoryTypes();
    setLoading(false);
  };
  const fetchCategoryTypes = async () => {
    const response = await CategoryTypeService.getCategoryTypes();
    dispactch(storeCategoryTypes(response));
  };
  useEffect(() => {
    fetchCategoryTypes();
  }, []);
  const deleteCategoryType = async (id) => {
    await CategoryTypeService.deleteCategoryType(id);
    fetchCategoryTypes();
  };
  const selectCategoryType = async (data) => {
    dispactch(storeCategoryType(data));
  };
  const editType = async (data) => {};

  return {
    submit,
    loading,
    categoryTypes,
    deleteCategoryType,
    selectCategoryType,
  };
};

export default useHook;
