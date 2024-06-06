import React, { useState } from "react";
import { useSelector } from "react-redux";

const useHook = () => {
  const user = useSelector((state) => state.user.data.user);
  const [input, setInput] = useState(user);
  const handleSubmit = (event) => {};

  return { input, setInput };
};

export default useHook;
