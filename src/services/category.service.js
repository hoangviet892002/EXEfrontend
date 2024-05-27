import axios from "axios";
import { api } from "../configs";
import { toast } from "react-toastify";

const api_url = api + "/category";
class CategoryService {
  static async CreateCategory(file, name) {
    try {
      const response = await axios.post(`${api_url}`, {
        name: name,
        img_url: file,
      });
      if (response.data.statusCode === 200) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("ERROR!!");
    }
  }
}
export default CategoryService;
