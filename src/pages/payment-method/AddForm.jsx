import { useTranslation } from "react-i18next";
const AddForm = () => {
  const { t } = useTranslation();
  return (
    <div
      className="modal fade"
      id="paymentModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="paymentModalLabel"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-lg modal-dialog-centered"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header align-items-center d-flex">
            <h5 className="modal-title" id="paymentModalLabel">
              {t("Add New Payment Method")}
            </h5>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body">
            <div>
              <form className="row mb-4">
                <div className="mb-3 col-12 col-md-12 mb-4">
                  <h5 className="mb-3">{t("Credit / Debit card")}</h5>

                  <div className="d-inline-flex">
                    <div className="form-check me-2">
                      <input
                        type="radio"
                        id="paymentRadioOne"
                        name="paymentRadioOne"
                        className="form-check-input"
                      />
                      <label className="form-check-label" for="paymentRadioOne">
                        <img
                          src="../assets/images/payment/american-express.svg"
                          alt=""
                        />
                      </label>
                    </div>

                    <div className="form-check me-2">
                      <input
                        type="radio"
                        id="paymentRadioTwo"
                        name="paymentRadioOne"
                        className="form-check-input"
                      />
                      <label className="form-check-label" for="paymentRadioTwo">
                        <img
                          src="../assets/images/payment/mastercard.svg"
                          alt=""
                        />
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        type="radio"
                        id="paymentRadioFour"
                        name="paymentRadioOne"
                        className="form-check-input"
                      />
                      <label
                        className="form-check-label"
                        for="paymentRadioFour"
                      >
                        <img src="../assets/images/payment/visa.svg" alt="" />
                      </label>
                    </div>
                  </div>
                </div>

                <div className="mb-3 col-12 col-md-4">
                  <label for="nameoncard" className="form-label">
                    {t("Name on card")}
                  </label>
                  <input
                    id="nameoncard"
                    type="text"
                    className="form-control"
                    name="nameoncard"
                    placeholder={t("Name")}
                    required
                  />
                </div>

                <div className="mb-3 col-12 col-md-4">
                  <label className="form-label">{t("Month")}</label>
                  <select className="form-select">
                    <option value="">{t("Month")}</option>
                    <option value="Jan">{t("Jan")}</option>
                    <option value="Feb">{t("Feb")}</option>
                    <option value="Mar">{t("Mar")}</option>
                    <option value="Apr">{t("Apr")}</option>
                    <option value="May">{t("May")}</option>
                    <option value="June">{t("June")}</option>
                    <option value="July">{t("July")}</option>
                    <option value="Aug">{t("Aug")}</option>
                    <option value="Sep">{t("Sep")}</option>
                    <option value="Oct">{t("Oct")}</option>
                    <option value="Nov">{t("Nov")}</option>
                    <option value="Dec">{t("Dec")}</option>
                  </select>
                </div>

                <div className="mb-3 col-12 col-md-4">
                  <label className="form-label">{t("Year")}</label>
                  <select className="form-select">
                    <option value="">{t("Year")}</option>
                    <option value="June">2022</option>
                    <option value="July">2023</option>
                    <option value="August">2024</option>
                    <option value="Sep">2025</option>
                    <option value="Oct">2026</option>
                  </select>
                </div>

                <div className="mb-3 col-md-8 col-12">
                  <label for="cc-mask" className="form-label">
                    {t("Card Number")}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-mask"
                    placeholder="xxxx-xxxx-xxxx-xxxx"
                    required
                  />
                </div>

                <div className="mb-3 col-md-4 col-12">
                  <div className="mb-3">
                    <label for="cvv" className="form-label">
                      {t("CVV Code")}
                      <i
                        className="feather-icon icon-help-circle ms-1"
                        data-bs-toggle="tooltip"
                        data-placement="top"
                        title={t(
                          "A 3-digit number, typically printed on the back of a card."
                        )}
                      ></i>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="cvv"
                      placeholder="xxx"
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6 col-12">
                  <button className="btn btn-primary" type="submit">
                    {t("Add New Card")}
                  </button>
                  <button
                    className="btn btn-outline-gray-400 text-muted"
                    type="button"
                    data-bs-dismiss="modal"
                  >
                    {t("Close")}
                  </button>
                </div>
              </form>
              <span>
                <strong>{t("Note")}: </strong>{" "}
                {t(
                  "that you can later remove your card at the account setting page."
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddForm;
