const api = "https://online-gateway.ghn.vn/shiip/public-api/master-data";
import axios from "axios";
const headers = {
  "Content-Type": "application/json",
  Token: "05e9c956-d27f-11ee-9414-ce214539f696",
};
class OnlineGatewayService {
  static async getProvince() {
    return axios.get(`${api}/province`, { headers: headers });
  }
  static async getDistrict(provinceID) {
    return axios.get(`${api}/district?province_id=${provinceID}`, {
      headers: headers,
    });
  }
  static async getWard(districtID) {
    return axios.get(`${api}/ward?district_id=${districtID}`, {
      headers: headers,
    });
  }
  static async fee_service(data) {
    const dataBody = {
      ...data,
    };
    const response = await axios.post(
      `https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/available-services`,
      dataBody,
      { headers: headers }
    );
    return response.data.data;
  }
}
export default OnlineGatewayService;
