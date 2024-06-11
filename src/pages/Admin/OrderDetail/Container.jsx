import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import useHook from "./hooks/useHook";
import Item from "./Item";

const Container = () => {
  const { t } = useTranslation();
  const { order, updateOrderStatus, updateOrderPaymentStatus, loading } =
    useHook();

  const handleChange = (event) => {
    updateOrderStatus(event.target.value);
  };
  const handleChangePayment = (event) => {
    updateOrderPaymentStatus(event.target.value);
  };
  return (
    <>
      <div className="col-lg-12 col-md-8 col-12">
        <div className="p-6 p-lg-10">
          <h2 className="mb-6">{t("Your Orders")}</h2>
          <div className="col-lg-12 col-md-8 col-12">
            <div
              className="horizontal-steps mt-4 mb-4 pb-5"
              id="tooltip-container"
            >
              <div className="horizontal-steps-content">
                {["PENDING", "PACKED", "SHIPPING"]
                  .concat(
                    order.orderStatus === "RETURN" ||
                      order.orderStatus === "CANCEL"
                      ? [order.orderStatus]
                      : []
                  )
                  .map((status, index) => (
                    <div
                      className={`step-item ${
                        status === order.orderStatus ? "current" : ""
                      }`}
                      key={index}
                    >
                      <span
                        data-bs-container="#tooltip-container"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title={status}
                      >
                        {status}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="container mt-4 py-4">
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <div className="form-group">
                  <label htmlFor="options" className="font-weight-bold">
                    ORDER STATUS:
                  </label>
                  <select
                    className="form-control btn btn-primary"
                    id="options"
                    value={order.orderStatus}
                    onChange={handleChange}
                  >
                    <option value="PACKED">PACKED</option>
                    <option value="PENDING">PENDING</option>
                    <option value="SHIPPING">SHIPPING </option>
                    <option value="RETURN">RETURN</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-4 py-4">
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <div className="form-group">
                  <label htmlFor="options" className="font-weight-bold">
                    Payment STATUS:
                  </label>
                  <select
                    className="form-control btn btn-primary"
                    id="options"
                    value={order.paymentStatus}
                    onChange={updateOrderPaymentStatus}
                  >
                    <option value="PENDING">PENDING</option>
                    <option value="CANCELLED">CANCELLED </option>
                    <option value="CONFIRMED">CONFIRMED</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <h4 className="header-title mb-3">{t("Order Items")}</h4>
          <div className="table-responsive border-0">
            <table className="table mb-0 text-nowrap">
              <thead className="table-light">
                <tr>
                  <th className="border-0">&nbsp;</th>
                  <th className="border-0">{t("Product")}</th>
                  <th className="border-0">{t("Items")}</th>
                  <th className="border-0">{t("Amount")}</th>
                  <th className="border-0"></th>
                </tr>
              </thead>
              <tbody>
                {order.cartItems &&
                  order.cartItems.map((item, index) => (
                    <Item key={index} item={item} />
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h4 class="header-title mb-3">Shipping Information</h4>

                <h5>{order.fullName}</h5>

                <address class="mb-0 font-14 address-lg">
                  {order.address}, {order.ward}
                  <br />
                  {order.district}, {order.province}
                  <br />
                  <abbr title="Phone">P:</abbr> {order.phoneNumber} <br />
                </address>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card">
              <div class="card-body">
                <h4 class="header-title mb-3">Order Summary</h4>

                <div class="table-responsive">
                  <table class="table mb-0">
                    <thead class="table-light">
                      <tr>
                        <th>Total</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Amount :</td>
                        <td>{order.totalAmount}</td>
                      </tr>
                      <tr>
                        <td>Service :</td>
                        <td>{order.subTotal - order.totalAmount}</td>
                      </tr>
                      <tr>
                        <th>Total :</th>
                        <th>{order.subTotal}</th>
                      </tr>
                      <tr>
                        <th>Status:</th>
                        <th>{order.paymentStatus}</th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Container;
