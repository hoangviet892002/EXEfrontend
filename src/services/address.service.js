import axios from "axios";
import { api } from "../configs";
import { toast } from "react-toastify";

const api_url = api + "/address";
class AddressService {
  static async addAddress(data) {
    const dataBody = {
      first_name: data.firstName,
      last_name: data.lastName,
      street_address: data.stressAddress,
      phone_number: data.phoneNumber,
      province_code: data.provinceID,
      district_code: data.districtID,
      ward_code: data.wardID,
      province_name: data.provinceName,
      district_name: data.districtName,
      ward_name: data.wardName,
    };
    try {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("token")}`;
      const response = await axios.post(`${api_url}`, dataBody);
      console.log(response.data);
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
  static async getAddress() {
    try {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("token")}`;
      const response = await axios.get(`${api_url}/address_by_user`);
      if (response.data.statusCode === 200) {
        return response.data.data;
      }
      return [];
    } catch (error) {
      return [];
    }
  }
  static async deleteAddress(id) {
    try {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("token")}`;
      const response = await axios.delete(`${api_url}/${id}`);
      if (response.data.statusCode === 200) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("ERROR!!");
    }
  }
  static async setDefaultAddress(id) {
    try {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("token")}`;
      const response = await axios.patch(
        `${api_url}/${id}?defaultAddress=true`
      );
      if (response.data.statusCode === 200) {
        return response.data.data;
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("ERROR!!");
    }
  }
}
export default AddressService;
