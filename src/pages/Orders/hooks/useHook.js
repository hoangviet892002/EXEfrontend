import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OrderService } from "../../../services";
import { getOrders } from "../../../redux/actions/orderAction";

const useHook = () => {
  const orders = useSelector((state) => state.order.orders);
  const [current, setCurrent] = useState(1);
  const [total, setTotal] = useState(0);
  const dispacth = useDispatch();
  const fetchOrders = async () => {
    const response = await OrderService.getOrders(current);
    if (response) {
      setTotal(response.data.totalPages);
      dispacth(getOrders(response.data.data));
    }
  };
  useEffect(() => {
    fetchOrders();
  }, [current]);
  return { orders, current, setCurrent, total, setTotal };
};

export default useHook;
