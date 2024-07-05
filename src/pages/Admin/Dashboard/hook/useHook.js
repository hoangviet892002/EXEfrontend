import React, { useEffect, useState } from "react";
import { DashboardService } from "../../../../services";

const useHook = () => {
  const [totalOrder, setTotalOrder] = useState(0);
  const [totalUser, setTotalUser] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const fetchTotalOrder = async () => {
    const response = await DashboardService.getTotalOrder();

    setTotalOrder(response);
  };
  const fetchTotalUser = async () => {
    const response = await DashboardService.getUserCount();
    setTotalUser(response);
  };
  const fetchTotalAmonut = async () => {
    const response = await DashboardService.getTotalAmount();
    setTotalAmount(response);
  };
  useEffect(() => {
    fetchTotalOrder();
    fetchTotalUser();
    fetchTotalAmonut();
  }, []);
  return { totalOrder, totalUser, totalAmount };
};

export default useHook;
