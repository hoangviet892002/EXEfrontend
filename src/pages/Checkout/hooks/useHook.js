import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddressService from "../../../services/address.service";
import { pickAddress } from "../../../redux/actions/checkoutAction";
import { addAddress } from "../../../redux/actions/addressAction";
import { OnlineGatewayService, OrderService } from "../../../services";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../../redux/actions/cartAction";

const useHook = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const listCart = useSelector((state) => state.cart.items);
  const addresses = useSelector((state) => state.address.addresses);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const address = useSelector((state) => state.checkout.address);
  const [isVaild, setIsVaild] = useState(false);
  const [instructions, setInstructions] = useState("");
  const [selectPayment, setSelectPayment] = useState("");

  const [totalWeight, setTotalWeight] = useState(1);
  useEffect(() => {
    let total = 0;
    let weight = 0;
    listCart.forEach((item) => {
      total += item.number;
    });
    weight = total * 200;
    setTotalWeight(weight);
  }, [listCart]);
  const [fee, setFee] = useState(0);
  const fetchAddress = async () => {
    const response = await AddressService.getAddress();
    if (response) {
      dispatch(addAddress(response));
    }
  };
  const fetchFee = async () => {
    if (address) {
      const data = {
        service_id: 53320,
        service_type_id: 2,
        from_district_id: 1443,
        to_district_id: address.districtCode,
        to_ward_code: address.wardCode,
        weight: totalWeight,
      };
      try {
        const res = await OnlineGatewayService.fee_service(data);
        setFee(res.data.data.service_fee);
        setIsVaild(true);
      } catch (error) {
        setIsVaild(false);
      }
    }
  };

  useEffect(() => {
    fetchFee();
  }, [totalWeight, address]);
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

  const placeOrder = async () => {
    if (address && selectPayment) {
      try {
        const res = await OrderService.checkOut({
          province: address.provinceName,
          district: address.districtName,
          ward: address.wardName,
          address: address.streetAddress,
          total_amount: totalAmount,
          sub_total: totalAmount + fee,
          payment_method: selectPayment,
          notes: instructions,
          full_name: address.firstName + " " + address.lastName,
          phone_number: address.phoneNumber,
          cart_items: listCart.map((item) => {
            return {
              product_id: item.id,
              quantity: item.number,
              price: item.price,
              total_product: item.price * item.number,
            };
          }),
        });
        if (res) {
          if (res.body.qrCodeLink) {
            window.open(res.body.qrCodeLink, "_blank");
          }
          dispatch(clearCart());
          navigation("/orders");
        }
      } catch (error) {}
    }
  };

  return {
    listCart,
    totalAmount,
    fee,
    isVaild,
    instructions,
    setInstructions,
    selectPayment,
    setSelectPayment,
    placeOrder,
  };
};

export default useHook;
