import { useState } from "react";
import ModelDelete from "./ModelDelete";

import useHook from "./hooks/useHook";
import { useDispatch, useSelector } from "react-redux";
import { pickAddress } from "../../redux/actions/addressAction";

const Item = ({ address }) => {
  const dispatch = useDispatch();
  const { setDefaultAddress } = useHook();
  return (
    <>
      <div className="col-lg-5 col-xxl-4 col-12 mb-4">
        <div className="border p-6 rounded-3">
          <div className="form-check mb-4">
            <label
              className="form-check-label text-dark fw-semi-bold"
              htmlFor="homeRadio"
            >
              Home
            </label>
          </div>

          <p className="mb-6">
            {address.firstName} {address.lastName}
            <br />
            {address.streetAddress}, {address.wardName} <br />
            {address.districtName},{address.provinceName},
            <br />
            {address.phoneNumber}
          </p>
          {address.defaultAddress ? (
            <a className="btn btn-info btn-sm">Default address</a>
          ) : (
            <a
              href="javascript:void(0);"
              class="link-primary"
              onClick={(e) => {
                e.preventDefault();
                setDefaultAddress(address.id);
              }}
            >
              Set as Default
            </a>
          )}

          <div className="mt-4">
            <a
              href="#"
              className="text-danger ms-3"
              onClick={(e) => {
                e.preventDefault();
                dispatch(pickAddress(address));
              }}
              data-bs-toggle="modal"
              data-bs-target="#deleteModal"
            >
              Delete
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Item;
