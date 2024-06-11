import Item from "./Item";
import { useTranslation } from "react-i18next";
import useHook from "./hooks/useHook";
import { Pagination } from "../../components";

const Container = () => {
  const { t } = useTranslation();
  const { current, orders, setCurrent, setTotal, total } = useHook();
  const handlePageChange = (page) => {
    setCurrent(page);
  };
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="page-title-box">
            <h4 className="page-title">Orders</h4>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="row mb-2">
                <div className="col-xl-8">
                  {/* <form className="row gy-2 gx-2 align-items-center justify-content-xl-start justify-content-between">
                    <div className="col-auto">
                      <label
                        htmlFor="inputPassword2"
                        className="visually-hidden"
                      >
                        {t("Search")}
                      </label>
                      <input
                        type="search"
                        className="form-control"
                        // value={searchQuery}
                        // onChange={handleSearchChange}
                        id="inputPassword2"
                        placeholder={t("Search")}
                      />
                    </div>
                    <div className="col-auto">
                      <div className="d-flex align-items-center">
                        <label htmlFor="status-select" className="me-2">
                          {t("Status")}
                        </label>
                        <select
                          className="form-select"
                          id="status-select"
                          // value={selectedStatus}
                          // onChange={handleStatusChange}
                        >
                          <option value="">{t("Choose")}</option>
                          <option value="1">{t("Paid")}</option>
                          <option value="2">
                            {t("Awaiting Authorization")}
                          </option>
                          <option value="3">{t("Payment failed")}</option>
                          <option value="4">{t("Cash On Delivery")}</option>
                          <option value="5">{t("Fulfilled")}</option>
                          <option value="6">{t("Unfulfilled")}</option>
                        </select>
                      </div>
                    </div>
                  </form> */}
                </div>
              </div>

              <div className="table-responsive">
                <table className="table table-centered table-nowrap mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>{t("Order ID")}</th>
                      <th>{t("Date")}</th>
                      <th>{t("Payment Status")}</th>
                      <th>{t("Total")}</th>
                      <th>{t("Payment Method")}</th>
                      <th>{t("Order Status")}</th>
                      <th style={{ width: "125px" }}>{t("Action")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((item, index) => (
                      <Item key={index} order={item} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <Pagination
          total={total}
          selected={current}
          onChange={handlePageChange}
        />
      </div>
    </>
  );
};
export default Container;
