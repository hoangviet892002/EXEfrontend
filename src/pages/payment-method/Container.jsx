import { SideBarCus } from "../../components";
import AddForm from "./AddForm";
import Item from "./Item";
import { useTranslation } from "react-i18next";

const Container = () => {
  const { t } = useTranslation();
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="p-6 d-flex justify-content-between align-items-center d-md-none">
              <h3 className="fs-5 mb-0">{t("Account Setting")}</h3>

              <button
                className="btn btn-outline-gray-400 text-muted d-md-none"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasAccount"
                aria-controls="offcanvasAccount"
              >
                <i className="feather-icon icon-menu"></i>
              </button>
            </div>
          </div>
          <SideBarCus />
          <div className="col-lg-9 col-md-8 col-12">
            <div className="p-6 p-lg-10">
              <div className="d-flex justify-content-between mb-6 align-items-center">
                <h2 className="mb-0">{t("Payment Methods")}</h2>
                <a
                  href="#"
                  className="btn btn-outline-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#paymentModal"
                >
                  {t("Add Payment")}
                </a>
              </div>
              <ul className="list-group list-group-flush">
                <Item />
                <Item />
                <Item />
                <Item />
              </ul>
            </div>
          </div>
        </div>
      </div>
      <AddForm />
    </section>
  );
};
export default Container;
