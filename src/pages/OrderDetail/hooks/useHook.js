import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { OrderService } from "../../../services";
import { getOrder } from "../../../redux/actions/orderAction";

const useHook = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const order = useSelector((state) => state.order.order);
  const [loading, setLoading] = useState(false);
  const fetchOrder = async () => {
    const response = await OrderService.getDetailOrder(id);
    if (response) {
      dispatch(getOrder(response));
    }
  };
  const cancelOrder = async () => {
    setLoading(true);
    const response = await OrderService.updateOrder(
      id,
      "CANCEL",
      order.paymentStatus
    );
    if (response) {
      fetchOrder();
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchOrder();
  }, []);
  return { order, cancelOrder, loading };
};

export default useHook;
