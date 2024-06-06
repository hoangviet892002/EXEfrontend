import React, { useState } from "react";
import { useLogin } from "../../../hook";
import { AuthService } from "../../../services";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../../redux/actions/userAction";

const useHook = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    const response = await AuthService.Login(input.email, input.password);
    if (response) {
      localStorage.setItem("token", response.token);
      dispatch(loginSuccess(response));
    }
    setLoading(false);
  };
  return { input, setInput, handleSubmit, loading };
};

export default useHook;
