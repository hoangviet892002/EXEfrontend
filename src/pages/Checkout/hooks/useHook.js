import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddressService from "../../../services/address.service";
import { pickAddress } from "../../../redux/actions/checkoutAction";
import { addAddress } from "../../../redux/actions/addressAction";

const useHook = () => {
  const dispatch = useDispatch();
  const listCart = useSelector((state) => state.cart.items);
  const addresses = useSelector((state) => state.address.addresses);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  let totalQuantity = listCart.reduce(
    (total, item) => total + item.quantity,
    0
  );
  let totalWeight = listCart.reduce(
    (total, item) => total + item.quantity * 200,
    0
  );
  const fetchAddress = async () => {
    const response = await AddressService.getAddress();
    if (response) {
      dispatch(addAddress(response));
    }
  };
  useEffect(() => {
    fetchAddress();
  }, []);
  const pickDefaultAddress = (address) => {
    dispatch(pickAddress(address));
  };

  useEffect(() => {
    dispatch(pickAddress(null));
    if (addresses.length > 0) {
      let defaultAddress = addresses.find(
        (item) => item.defaultAddress === true
      );
      pickDefaultAddress(defaultAddress);
    }
  }, [listCart]);

  return { listCart, totalAmount };
};

export default useHook;
