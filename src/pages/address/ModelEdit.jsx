import { useTranslation } from "react-i18next";
const ModelEdit = () => {
  const { t } = useTranslation();
  return (
    <div
      className="modal fade"
      id="editModal"
      tabIndex="-1"
      aria-labelledby="addAddressModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body p-6">
            <div className="d-flex justify-content-between mb-5">
              <div>
                <h5 className="h6 mb-1" id="addAddressModalLabel">
                  {t("Edit Shipping Address")}
                </h5>
                <p className="small mb-0">
                  {t("Edit shipping address for your order delivery.")}
                </p>
              </div>
              <div>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
            </div>

            <div className="row g-3">
              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder={t("First name")}
                  aria-label={t("First name")}
                  required=""
                />
              </div>

              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder={t("Last name")}
                  aria-label={t("Last name")}
                  required=""
                />
              </div>

              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder={t("Address Line 1")}
                />
              </div>

              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder={t("Address Line 2")}
                />
              </div>

              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder={t("City")}
                />
              </div>

              <div className="col-12">
                <select className="form-select">
                  <option selected="">{t("India")}</option>
                  <option value="1">{t("UK")}</option>
                  <option value="2">{t("USA")}</option>
                  <option value="3">{t("UAE")}</option>
                </select>
              </div>

              <div className="col-12">
                <select
                  className="form-select"
                  aria-label={t("Default select example")}
                >
                  <option selected="">{t("Gujarat")}</option>
                  <option value="1">{t("Northern Ireland")}</option>
                  <option value="2">{t("Alaska")}</option>
                  <option value="3">{t("Abu Dhabi")}</option>
                </select>
              </div>

              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder={t("Zip Code")}
                />
              </div>

              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder={t("Business Name")}
                />
              </div>

              <div className="col-12 text-end">
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  data-bs-dismiss="modal"
                >
                  {t("Cancel")}
                </button>
                <button className="btn btn-primary" type="button">
                  {t("Save Address")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModelEdit;
