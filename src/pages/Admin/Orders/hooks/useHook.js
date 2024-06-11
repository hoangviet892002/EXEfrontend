import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getOrders } from "../../../../redux/actions/orderAction";
import { OrderService } from "../../../../services";

const useHook = () => {
  const [current, setCurrent] = useState(1);
  const [total, setTotal] = useState(0);
  const orders = useSelector((state) => state.order.orders);
  const fetchOrders = async () => {
    const response = await OrderService.getOrdersAdmin(current);
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
