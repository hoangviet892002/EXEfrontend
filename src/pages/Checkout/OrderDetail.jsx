import Product from "./Product";
import useHook from "./hooks/useHook";
import { useTranslation } from "react-i18next";

const OrderDetail = () => {
  const { listCart, totalAmount } = useHook();
  const { t } = useTranslation();
  return (
    <div className="col-12 col-md-12 offset-lg-1 col-lg-4">
      <div className="mt-4 mt-lg-0">
        <div className="card shadow-sm">
          <h5 className="px-6 py-4 bg-transparent mb-0">{t("Order Details")}</h5>
          <ul className="list-group list-group-flush">
            {listCart.map((item) => (
              <Product item={item} />
            ))}

            {/* <li className="list-group-item px-4 py-3">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <div>{t("Item Subtotal")}</div>
                <div className="fw-bold">$70.00</div>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  {t("Service Fee")}
                  <i
                    className="feather-icon icon-info text-muted"
                    data-bs-toggle="tooltip"
                    title={t("Default tooltip")}
                  ></i>
                </div>
                <div className="fw-bold">$3.00</div>
              </div>
            </li> */}

            <li className="list-group-item px-4 py-3">
              <div className="d-flex align-items-center justify-content-between fw-bold">
                <div>{t("Subtotal")}</div>
                <div>${totalAmount}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default OrderDetail;
