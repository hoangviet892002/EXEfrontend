import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { loginSuccess } from "../../redux/actions/userAction";
import { AuthService } from "../../services";
import { useNavigate } from "react-router-dom";
const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async (username, password) => {
    setLoading(true);
    try {
      const response = await AuthService.Login(username, password);
      if (response.onSuccess === false) toast.error(response.message);
      else {
        dispatch(loginSuccess(response.data));
        toast.success(response.message);
        navigate("/admin/products");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};
export default useLogin;
