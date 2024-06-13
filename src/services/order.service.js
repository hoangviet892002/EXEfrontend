import axios from "axios";
import { toast } from "react-toastify";
import { api } from "../configs";
const api_url = api + "/order";
class OrderService {
  static async checkOut(data) {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("token")}`;
    data.returnUrl = "http://localhost:5173/orders";
    data.cancelUrl = "http://localhost:5173/orders";
    try {
      const response = await axios.post(`${api_url}`, data);

      if (response.data.statusCode === 200) {
        toast.success(response.data.message);
        console.log(response.data.data.body);
        return response.data.data;
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("ERROR!!");
    }
  }
  static async getOrders(page) {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("token")}`;
    try {
      const response = await axios.get(
        `${api_url}/order_by_user_id?page=${page - 1}&limit=10`
      );
      if (response.data.statusCode === 200) {
        return response.data;
      }
      return [];
    } catch (error) {
      return [];
    }
  }
  static getDetailOrder = async (id) => {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("token")}`;
    try {
      const response = await axios.get(`${api_url}/${id}`);
      if (response.data.statusCode === 200) {
        return response.data.data;
      }
      return null;
    } catch (error) {
      return null;
    }
  };
  static async updateOrder(id, orderStatus, paymentStatus) {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("token")}`;
    try {
      const response = await axios.patch(`${api_url}/${id}`, {
        params: {
          orderStatus: orderStatus,
          paymentStatus: paymentStatus,
        },
      });
      if (response.data.statusCode === 200) {
        toast.success(response.data.message);
        return response.data.data;
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("ERROR!!");
    }
  }
  static async getOrdersAdmin(page) {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("token")}`;
    try {
      const response = await axios.get(
        `${api_url}/get_all_order?page=${page - 1}&limit=10`
      );
      if (response.data.statusCode === 200) {
        return response.data;
      }
      return [];
    } catch (error) {
      return [];
    }
  }
}
export default OrderService;
