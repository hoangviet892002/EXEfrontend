import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CategoryTypeService, ProductService } from "../../../../services";
import { useDispatch, useSelector } from "react-redux";
import { storeCategoryTypes } from "../../../../redux/actions/categoryAction";

const useHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    id: "",
    productName: "",
    createdAt: "",
    product_detail: "",
    cost: "",
    product_dimensions: "",
    productImages: [
      {
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/exe2-tera-candle.appspot.com/o/files%2Ff3763148-a708-45b6-b35d-3354a510504d?alt=media&token=79633f89-4a36-46c5-9c4c-6b0f06731022",
      },
    ],
    discount: null,
    category_type_id: [],
  });
  const categoryTypes = useSelector((state) => state.category.categoryTypes);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const fetchProduct = async () => {
    const response = await ProductService.getProduct(id);
    setProduct(response);
  };
  useEffect(() => {
    fetchProduct();
  }, [id]);
  const fetchCategoryTypes = async () => {
    const response = await CategoryTypeService.getCategoryTypes();
    dispatch(storeCategoryTypes(response));
  };
  useEffect(() => {
    fetchCategoryTypes();
  }, []);
  const submit = async (product, type) => {
    setLoading(true);
    const response = await ProductService.updateProduct(product, type);
    setLoading(false);
    if (response) {
      navigate(`/admin/products/${product.id}`);
    }
  };
  return { product, setProduct, loading, categoryTypes, submit };
};

export default useHook;
