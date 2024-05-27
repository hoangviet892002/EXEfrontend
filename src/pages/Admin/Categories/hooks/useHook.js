import { useState } from "react";
import useHookUploadImage from "../../../../hook/useHookUploadImage";
import { CategoryService } from "../../../../services";

const useHook = () => {
  const [loading, setLoading] = useState(false);
  const { UploadImage } = useHookUploadImage();
  const submit = async (name, file) => {
    setLoading(true);
    const img_url = (await UploadImage(file)) + "";
    await CategoryService.CreateCategory(img_url, name);
    setLoading(false);
  };
  return { submit, loading };
};

export default useHook;
