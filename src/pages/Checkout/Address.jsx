import AddForm from "../address/AddForm";
import ItemAddress from "./ItemAddress";
import { useTranslation } from "react-i18next";

const Address = () => {
  const { t } = useTranslation();
  return (
    <div className="accordion-item py-4">
      <div className="d-flex justify-content-between align-items-center">
        <a
          href="#"
          className="fs-5 text-inherit collapsed h4"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseOne"
          aria-expanded="true"
          aria-controls="flush-collapseOne"
        >
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
            <ItemAddress />
            <ItemAddress />
            <ItemAddress />
            <ItemAddress />
          </div>
        </div>
        <div className="mt-5 d-flex justify-content-end">
          <a
            href="#"
            className="btn btn-primary ms-2"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
          >
            {t("Next")}
          </a>
        </div>
      </div>
      <AddForm />
    </div>
  );
};
export default Address;
