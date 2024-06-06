import { useNavigate } from "react-router-dom";
import Item from "./Item";
import useHook from "./hooks/useHook";
import { useTranslation } from "react-i18next";

const ShopCart = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { listCart, handleClearCart, totalAmount } = useHook();
  return (
    <>
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header border-bottom">
          <div className="text-start">
            <h5 className="mb-0 fs-4">{t("Shop Cart")}</h5>
          </div>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="alert alert-danger" role="alert">
            {t("You’ve got FREE delivery. Start checkout now!")}
          </div>
          <button
            type="button"
            className="btn btn-primary mb-2"
            onClick={(e) => {
              e.preventDefault();
              handleClearCart();
            }}
          >
            {t("Clear")}
          </button>

          <div>
            <div className="py-3">
              <ul className="list-group list-group-flush">
                {listCart.map((item, index) => (
                  <Item item={item} key={index} />
                ))}
              </ul>
            </div>
            <div className="d-grid">
              <button
                className="btn btn-primary btn-lg d-flex justify-content-between align-items-center"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/check-out");
                }}
                data-bs-dismiss="offcanvas"
              >
                {t("Go to Checkout")}{" "}
                <span className="fw-bold">${totalAmount}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ShopCart;
