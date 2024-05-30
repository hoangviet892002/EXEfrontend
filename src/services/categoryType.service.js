import axios from "axios";
import { api } from "../configs";
import { toast } from "react-toastify";

const api_url = api + "/category_type";
class CategoryTypeService {
  static async CreateCategoryTypes(id, name) {
    try {
      const response = await axios.post(`${api_url}`, {
        name: name,
        category_id: id,
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
  static async getCategoryTypes() {
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
  static async getCategoryTypesByCategory(id) {
    try {
      const response = await axios.get(`${api_url}/${id}`);
      if (response.data.statusCode === 200) {
        return response.data.data;
      }
      return [];
    } catch (error) {
      return [];
    }
  }
  static async deleteCategoryType(id) {
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
  //   static async EditCategoryType(data) {
  //     try {
  //       const response = await axios.put(`${api_url}/${id}`);
  //       if (response.data.statusCode === 200) {
  //         toast.success(response.data.message);
  //       } else {
  //         toast.error(response.data.message);
  //       }
  //     } catch (error) {
  //       // toast.error("ERROR!!");
  //     }
  //   }
}
export default CategoryTypeService;
