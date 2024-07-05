import axios from "axios";
import { toast } from "react-toastify";
import { api } from "../configs";
const api_url = api + "/dashboard";

class DashboardService {
  static async getTotalOrder() {
    try {
      const response = await axios.get(`${api_url}/count_order`);
      if (response) {
        console.log(response);
        return response.data.totalOrder;
      } else return 0;
    } catch (error) {
      return 0;
    }
  }
  static async getUserCount() {
    try {
      const response = await axios.get(`${api_url}/count_user`);
      if (response) {
        return response.data.totalCustomer;
      } else return 0;
    } catch (error) {
      return 0;
    }
  }

  static async getTotalAmount() {
    try {
      const response = await axios.get(`${api_url}/sum_total_amount_order`);
      if (response) {
        return response.data.sumTotalOrder;
      } else return 0;
    } catch (error) {
      return 0;
    }
  }
}
export default DashboardService;
