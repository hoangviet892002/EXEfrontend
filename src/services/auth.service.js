import { api } from "../configs";
import axios from "axios";
const api_url = api + "/user";
import { toast } from "react-toastify";
class AuthService {
  static async Login(userName, password) {
    const data = {
      email: userName,
      password: password,
    };
    const response = {
      status: 200,
      data: {},
      message: "",
    };
    try {
      const res = await axios.post(api_url + "/login", data);
      response.status = res.data.status;
      response.message = res.data.message;
      if (response.status === 200) {
        toast.success(response.message);
        return res.data.data;
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error("Error");
    }
  }
  static async register(input) {
    const data = {
      phoneNumber: input.phone,
      fullName: input.fullName,
      email: input.username,
      password: input.password,
      address: "hihdias,b hdaisdhu, jdijashi",
    };
    const response = {
      status: 200,
      data: {},
      message: "",
    };
    try {
      const res = await axios.post(api_url, data);
      response.status = res.data.status;
      response.message = res.data.message;
      if (response.status === 200) {
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error("Error");
    }
  }
}
export default AuthService;
