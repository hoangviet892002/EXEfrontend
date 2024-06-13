import { useTranslation } from "react-i18next";
import useHook from "./hooks/useHook";
const Payment = () => {
  const { t } = useTranslation();
  const { selectPayment, setSelectPayment, placeOrder } = useHook();
  return (
    <div className="accordion-item py-4">
      <a href="#" className="text-inherit h5">
        <i className="feather-icon icon-credit-card me-2 text-muted"></i>
        {t("Payment Method")}
      </a>
      <div
        id="flush-collapseFour"
        className="accordion-collapse collapse"
        data-bs-parent="#accordionFlushExample"
      >
        <div className="mt-5">
          <div>
            <div className="card card-bordered shadow-none mb-2">
              <div className="card-body p-6">
                <div className="d-flex">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="paypal"
                      value={"PAYMENT_QR"}
                      checked={selectPayment === "PAYMENT_QR"}
                      onChange={(e) => setSelectPayment(e.target.value)}
                    />

                    <label
                      className="form-check-label ms-2"
                      for="paypal"
                    ></label>
                  </div>
                  <div>
                    <h5 className="mb-1 h6">{t("Payment with Paypal")}</h5>
                    <p className="mb-0 small">
                      {t(
                        "You will be redirected to PayPal website to complete your purchase securely."
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card card-bordered shadow-none">
              <div className="card-body p-6">
                <div className="d-flex">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="cashonDelivery"
                      value={"CRASH_ON_DELIVERY"}
                      checked={selectPayment === "CRASH_ON_DELIVERY"}
                      onChange={(e) => setSelectPayment(e.target.value)}
                    />
                    <label
                      className="form-check-label ms-2"
                      for="cashonDelivery"
                    ></label>
                  </div>
                  <div>
                    <h5 className="mb-1 h6">{t("Cash on Delivery")}</h5>
                    <p className="mb-0 small">
                      {t("Pay with cash when your order is delivered.")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 d-flex justify-content-end">
              <a
                href="#"
                className="btn btn-outline-gray-400 text-muted"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                {t("Prev")}
              </a>
              <a href="#" onClick={placeOrder} className="btn btn-primary ms-2">
                {t("Place Order")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Payment;
