import React, { useEffect, useState } from "react";
import { OnlineGatewayService } from "../../../services";
import AddressService from "../../../services/address.service";
import { useDispatch } from "react-redux";
import { addAddress } from "../../../redux/actions/addressAction";

const useHook = () => {
  const dispatch = useDispatch();
  const [optionProvice, setOptionProvice] = useState([]);
  const [optionDistrict, setOptionDistrict] = useState([]);
  const [optionWard, setOptionWard] = useState([]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    stressAddress: "",
    phoneNumber: "",
    provinceID: "",
    districtID: "",
    wardID: "",
    provinceName: "",
    districtName: "",
    wardName: "",
    id: 1,
  });
  const [address, setAddress] = useState([]);
  const fetchAddress = async () => {
    const response = await AddressService.getAddress();
    if (response) {
      setAddress(response);
      dispatch(addAddress(response));
    }
  };
  useEffect(() => {
    setLoading(true);
    fetchAddress();
    setLoading(false);
  }, []);
  const fetchProvice = async () => {
    const responseProvice = await OnlineGatewayService.getProvince();

    if (responseProvice) {
      setOptionProvice(responseProvice.data.data);
      setInput({
        ...input,
        provinceID: responseProvice.data.data[0].ProvinceID,
        provinceName: responseProvice.data.data[0].ProvinceName,
      });
    }
  };
  const fetchDistrict = async (provinceID) => {
    const responseDistrict = await OnlineGatewayService.getDistrict(provinceID);
    if (responseDistrict) {
      setOptionDistrict(responseDistrict.data.data);
      setInput({
        ...input,
        districtID: responseDistrict.data.data[0].DistrictID,
        districtName: responseDistrict.data.data[0].DistrictName,
      });
    }
  };
  const fetchWard = async (districtID) => {
    const responseWard = await OnlineGatewayService.getWard(districtID);
    if (responseWard) {
      setOptionWard(responseWard.data.data);
      setInput({
        ...input,
        wardID: responseWard.data.data[0].WardCode,
        wardName: responseWard.data.data[0].WardName,
      });
    }
  };
  useEffect(() => {
    setLoading(true);
    fetchProvice();
    setLoading(false);
  }, []);
  useEffect(() => {
    setLoading(true);
    if (input.provinceID !== "") {
      fetchDistrict(input.provinceID);
    }
    setLoading(false);
  }, [input.provinceID]);
  useEffect(() => {
    setLoading(true);
    if (input.districtID !== "") {
      fetchWard(input.districtID);
    }
    setLoading(false);
  }, [input.districtID]);
  const submitAddForm = async () => {
    setLoading(true);

    const response = await AddressService.addAddress(input);

    if (response) {
      setInput({
        ...input,
        firstName: "",
        lastName: "",
        stressAddress: "",
        phoneNumber: "",
        provinceID: optionProvice[0].ProvinceID,
        provinceName: optionProvice[0].ProvinceName,
        id: 1,
      });
      fetchAddress();
    }

    setLoading(false);
  };
  const deleteAddress = async (id) => {
    setLoading(true);
    const response = await AddressService.deleteAddress(id);
    if (response) {
      fetchAddress();
    }
    setLoading(false);
  };

  const setDefaultAddress = async (id) => {
    setLoading(true);
    const response = await AddressService.setDefaultAddress(id);
    if (response) {
      fetchAddress();
    }
    setLoading(false);
  };
  return {
    input,
    setInput,
    optionDistrict,
    optionProvice,
    optionWard,
    loading,
    submitAddForm,
    address,
    deleteAddress,
    setDefaultAddress,
  };
};

export default useHook;
