import { useSelector } from "react-redux";
import AddForm from "../address/AddForm";
import ItemAddress from "./ItemAddress";
import { useTranslation } from "react-i18next";
import useHook from "./hooks/useHook";

const Address = () => {
  const { t } = useTranslation();
  const address = useSelector((state) => state.address.addresses);
  const pickAddres = useSelector((state) => state.checkout.address);
  const { isVaild } = useHook();
  return (
    <div className="accordion-item py-4">
      <div className="d-flex justify-content-between align-items-center">
        <a href="#" className="fs-5 text-inherit collapsed h4">
          <i className="feather-icon icon-map-pin me-2 text-muted"></i>
          {t("Add delivery address")}
        </a>

        <a
          href="#"
          className="btn btn-outline-primary btn-sm"
          data-bs-toggle="modal"
          data-bs-target="#addAddressModal"
        >
          {t("Add a new address")}
        </a>
      </div>
      <div
        id="flush-collapseOne"
        className="accordion-collapse collapse show"
        data-bs-parent="#accordionFlushExample"
      >
        <div className="mt-5">
          <div className="row">
            {address.map((item, index) => (
              <ItemAddress key={index} address={item} />
            ))}
          </div>
        </div>
        {!isVaild && (
          <div className="alert alert-danger mt-5" role="alert">
            {t(
              "Your address is not supported for delivery. Please choose another address."
            )}
          </div>
        )}
        {isVaild && pickAddres && (
          <div className="mt-5 d-flex justify-content-end">
            <a
              href="#"
              className="btn btn-primary ms-2"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Next
            </a>
          </div>
        )}
      </div>
      <AddForm />
    </div>
  );
};
export default Address;
