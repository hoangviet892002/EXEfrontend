import { SideBarCus } from "../../components";
import Item from "./Item";
import { useTranslation } from "react-i18next";
import useHook from "./hooks/useHook";

const Container = () => {
  const { t } = useTranslation();
  const { order, loading, cancelOrder } = useHook();
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="p-6 d-flex justify-content-between align-items-center d-md-none">
              <h3 className="fs-5 mb-0">{t("Account Setting")}</h3>

              <button
                className="btn btn-outline-gray-400 text-muted d-md-none btn-icon"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasAccount"
                aria-controls="offcanvasAccount"
              >
                <i className="feather-icon icon-menu fs-4"></i>
              </button>
            </div>
          </div>

          <SideBarCus />
          <div className="col-lg-9 col-md-8 col-12">
            <div className="p-6 p-lg-10">
              <h2 className="mb-6">{t("Your Orders")}</h2>
              <div className="col-lg-9 col-md-8 col-12">
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
                    {order.orderStatus === "PENDING" && (
                      <div>
                        <button
                          className="btn btn-danger"
                          onClick={cancelOrder}
                          disabled={loading}
                        >
                          {loading ? "Processing..." : "Cancel Order"}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
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
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Container;
