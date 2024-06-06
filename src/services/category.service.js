import axios from "axios";
import { api } from "../configs";
import { toast } from "react-toastify";

const api_url = api + "/category";
class CategoryService {
  static async CreateCategory(file, name) {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("token")}`;
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
  static async getCategories() {
    try {
      const response = await axios.get(`${api_url}`);
      if (response.data.statusCode === 200) {
        return response.data.data;
      }
      return [];
    } catch (error) {
      return [];
    }
  }
  static async deleteCategory(id) {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("token")}`;
    try {
      const response = await axios.delete(`${api_url}/${id}`);
      if (response.data.statusCode === 200) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      // toast.error("ERROR!!");
    }
  }
  static async getMegaMenu() {
    try {
      const response = await axios.get(`${api_url}/category_vs_category_type`);
      if (response.data.statusCode === 200) {
        return response.data.data;
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {}
  }
}
export default CategoryService;
