import { SideBarCus } from "../../components";
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
              <div className="mb-6">
                <h2 className="mb-0">{t("Account Setting")}</h2>
              </div>
              <div>
                <h5 className="mb-4">{t("Account details")}</h5>
                <div className="row">
                  <div className="col-lg-5">
                    <form>
                      <div className="mb-3">
                        <label className="form-label">{t("Name")}</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder={t("Name")}
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">{t("Email")}</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="example@gmail.com"
                        />
                      </div>

                      <div className="mb-5">
                        <label className="form-label">{t("Phone")}</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder={t("Phone number")}
                        />
                      </div>

                      <div className="mb-3">
                        <button className="btn btn-primary">
                          {t("Save Details")}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <hr className="my-10" />
              <div className="pe-lg-14">
                <h5 className="mb-4">{t("Password")}</h5>
                <form className="row row-cols-1 row-cols-lg-2">
                  <div className="mb-3 col">
                    <label className="form-label">{t("New Password")}</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="**********"
                    />
                  </div>

                  <div className="mb-3 col">
                    <label className="form-label">
                      {t("Current Password")}
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="**********"
                    />
                  </div>
                </form>
              </div>
              <hr className="my-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Container;
