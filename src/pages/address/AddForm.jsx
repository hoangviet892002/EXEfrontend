import { useTranslation } from "react-i18next";
import useHook from "./hooks/useHook";
const AddForm = () => {
  const { t } = useTranslation();
  const {
    input,
    loading,
    optionDistrict,
    optionProvice,
    optionWard,
    setInput,
    submitAddForm,
  } = useHook();
  return (
    <div
      className="modal fade"
      id="addAddressModal"
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
                  {t("New Shipping Address")}
                </h5>
                <p className="small mb-0">
                  {t("Add new shipping address for your order delivery.")}
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

            <form
              className="row g-3"
              onSubmit={(e) => {
                e.preventDefault();
                submitAddForm();
              }}
            >
              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder={t("First name")}
                  aria-label="First name"
                  value={input.firstName}
                  onChange={(e) => {
                    setInput({ ...input, firstName: e.target.value });
                  }}
                  required=""
                />
              </div>

              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder={t("Last name")}
                  aria-label="Last name"
                  value={input.lastName}
                  onChange={(e) => {
                    setInput({ ...input, lastName: e.target.value });
                  }}
                  required=""
                />
              </div>
              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder={t("Phone number")}
                  value={input.phoneNumber}
                  onChange={(e) => {
                    setInput({ ...input, phoneNumber: e.target.value });
                  }}
                  required=""
                />
              </div>
              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder={t("Address Line 1")}
                  value={input.stressAddress}
                  onChange={(e) => {
                    setInput({ ...input, stressAddress: e.target.value });
                  }}
                />
              </div>

              <div className="col-12">
                <select
                  className="form-select"
                  value={input.provinceID}
                  onChange={(e) => {
                    setInput({
                      ...input,
                      provinceID: e.target.value,
                      provinceName:
                        e.target.options[e.target.selectedIndex].text,
                    });
                  }}
                >
                  {optionProvice.map((province, index) => (
                    <option key={index} value={province.ProvinceID}>
                      {province.ProvinceName}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-12">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  value={input.districtID}
                  onChange={(e) => {
                    setInput({
                      ...input,
                      districtID: e.target.value,
                      districtName:
                        e.target.options[e.target.selectedIndex].text,
                    });
                  }}
                >
                  {optionDistrict.map((district, index) => (
                    <option key={index} value={district.DistrictID}>
                      {district.DistrictName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-12">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  value={input.wardID}
                  onChange={(e) => {
                    setInput({
                      ...input,
                      wardID: e.target.value,
                      wardName: e.target.options[e.target.selectedIndex].text,
                    });
                  }}
                >
                  {optionWard.map((ward, index) => (
                    <option key={index} value={ward.WardCode}>
                      {ward.WardName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder={t("Address Line 1")}
                  value={input.stressAddress}
                  onChange={(e) => {
                    setInput({ ...input, stressAddress: e.target.value });
                  }}
                />
              </div>

              <div className="col-12 text-end">
                {loading ? (
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  <>
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      data-bs-dismiss="modal"
                    >
                      {t("Cancel")}
                    </button>

                    <button
                      className="btn btn-primary"
                      type="submit"
                      data-bs-dismiss="modal"
                    >
                      {t("Save")}
                    </button>
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddForm;
