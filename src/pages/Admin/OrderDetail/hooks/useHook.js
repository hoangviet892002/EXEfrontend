import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOrder } from "../../../../redux/actions/orderAction";
import { OrderService } from "../../../../services";

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
  useEffect(() => {
    fetchOrder();
  }, []);
  const updateOrderStatus = async (data) => {
    setLoading(true);
    const response = await OrderService.updateOrder(
      id,
      data,
      order.paymentStatus
    );
    if (response) {
      fetchOrder();
    }
    setLoading(false);
  };
  const updateOrderPaymentStatus = async (data) => {
    setLoading(true);
    const response = await OrderService.updateOrder(
      id,
      order.orderStatus,
      data
    );
    if (response) {
      fetchOrder();
    }
    setLoading(false);
  };

  return { order, updateOrderStatus, loading, updateOrderPaymentStatus };
};

export default useHook;
