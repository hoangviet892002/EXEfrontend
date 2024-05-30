import React, { useEffect, useState } from "react";
import { CategoryTypeService, ProductService } from "../../../../services";
import { useDispatch, useSelector } from "react-redux";
import { storeCategoryTypes } from "../../../../redux/actions/categoryAction";
import useHookUploadImage from "../../../../hook/useHookUploadImage";
import { toast } from "react-toastify";

const useHook = () => {
  const dispatch = useDispatch();
  const categoryTypes = useSelector((state) => state.category.categoryTypes);
  const { UploadImage } = useHookUploadImage();
  const [loading, setLoading] = useState(false);
  const fetchCategoryTypes = async () => {
    const response = await CategoryTypeService.getCategoryTypes();
    dispatch(storeCategoryTypes(response));
  };
  useEffect(() => {
    fetchCategoryTypes();
  }, []);

  const submit = async (images, input, type) => {
    setLoading(true);

    if (type.length === 0) {
      setLoading(false);
      toast.error("Select type please!!");
      return;
    }
    if (images.length === 0) {
      setLoading(false);
      toast.error("Select Image please!!");
      return;
    }
    if (images.length > 4) {
      setLoading(false);
      toast.error("Only 4 Images");
      return;
    }
    let productImages = [];

    const uploadPromises = images.map((image) =>
      UploadImage(image).then((uploadedImage) => ({
        image_url: uploadedImage,
      }))
    );

    await Promise.all(uploadPromises)
      .then((uploadedImages) => {
        productImages.push(...uploadedImages);
      })
      .catch((error) => {
        console.error("Error uploading images:", error);
      });
    await ProductService.CreateProduct(productImages, type, input);
    setLoading(false);
  };

  return { categoryTypes, submit, loading };
};

export default useHook;
