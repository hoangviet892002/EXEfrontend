import { useTranslation } from "react-i18next";
import useHook from "./hooks/useHook";
const Instructions = () => {
  const { t } = useTranslation();
  const { instructions, setInstructions } = useHook();
  return (
    <div className="accordion-item py-4">
      <a href="#" className="text-inherit h5">
        <i className="feather-icon icon-shopping-bag me-2 text-muted"></i>
        {t("Delivery instructions")}
      </a>
      <div
        id="flush-collapseThree"
        className="accordion-collapse collapse"
        data-bs-parent="#accordionFlushExample"
      >
        <div className="mt-5">
          <label for="DeliveryInstructions" className="form-label sr-only">
            {t("Delivery instructions")}
          </label>
          <textarea
            className="form-control"
            id="DeliveryInstructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            rows="3"
            placeholder={t("Write delivery instructions")}
          ></textarea>
          <p className="form-text">
            {t(
              "Add instructions for how you want your order shopped and/or delivered"
            )}
          </p>
          <div className="mt-5 d-flex justify-content-end">
            <a
              href="#"
              className="btn btn-outline-gray-400 text-muted"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              {t("Prev")}
            </a>
            <a
              href="#"
              className="btn btn-primary ms-2"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
            >
              {t("Next")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Instructions;
