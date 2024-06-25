import { useSelector } from "react-redux";
import { SideBarCus } from "../../components";
import AddForm from "./AddForm";
import Item from "./Item";
import { useTranslation } from "react-i18next";
import ModelDelete from "./ModelDelete";

import useHook from "./hooks/useHook";
import { useState } from "react";

const Container = () => {
  const { t } = useTranslation();

  const address = useSelector((state) => state.address.addresses);
  const [addForm, setAddForm] = useState(false);

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
              <div className="d-flex justify-content-between mb-6">
                <h2 className="mb-0">{t("Address")}</h2>
                <a
                  href="#"
                  className="btn btn-outline-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    setAddForm(true);
                  }}
                >
                  {t("Add a new address")}
                </a>
              </div>
              <div className="row">
                {address.map((item, index) => (
                  <Item address={item} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddForm isActive={addForm} setIsActive={setAddForm} />
      <ModelDelete />
    </section>
  );
};
export default Container;
