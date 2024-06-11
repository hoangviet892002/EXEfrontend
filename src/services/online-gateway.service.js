const api = "https://online-gateway.ghn.vn/shiip/public-api";
import axios from "axios";
const headers = {
  "Content-Type": "application/json",
  Token: "05e9c956-d27f-11ee-9414-ce214539f696",
  ShopId: 4913806,
};
class OnlineGatewayService {
  static async getProvince() {
    return axios.get(`${api}/master-data/province`, { headers: headers });
  }
  static async getDistrict(provinceID) {
    return axios.get(`${api}/master-data/district?province_id=${provinceID}`, {
      headers: headers,
    });
  }
  static async getWard(districtID) {
    return axios.get(`${api}/master-data/ward?district_id=${districtID}`, {
      headers: headers,
    });
  }
  static async fee_service(data) {
    const dataBody = {
      ...data,
    };
    const response = await axios.get(`${api}/v2/shipping-order/fee`, {
      headers: headers,
      params: dataBody,
    });
    return response;
  }
}
export default OnlineGatewayService;
