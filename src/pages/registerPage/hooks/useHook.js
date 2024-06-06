import React, { useState } from "react";
import { AuthService } from "../../../services";

const useHook = () => {
  const [input, setInput] = useState({
    phone: "",
    fullName: "",
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    await AuthService.register(input);
    setLoading(false);
  };
  return { input, setInput, handleSubmit, loading };
};

export default useHook;
