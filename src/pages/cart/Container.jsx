import Item from "./Item";
import { useTranslation } from "react-i18next";
import useHook from "./hook/useHook";
import { useNavigate } from "react-router-dom";

const Container = () => {
  const { t } = useTranslation();
  const { listCart, totalAmount } = useHook();
  const navigate = useNavigate();
  return (
    <section className="mb-lg-14 mb-8 mt-8">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card py-1 border-0 mb-8">
              <div>
                <h1 className="fw-bold">{t("Shop Cart")}</h1>
                <p className="mb-0">{t("Shopping in 382480")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8 col-md-7">
            <div className="py-3">
              <div className="alert alert-danger p-2" role="alert">
                {t("You’ve got FREE delivery. Start checkout now!")}
                <a href="#!" className="alert-link">
                  {t("checkout now!")}
                </a>
              </div>
              <ul className="list-group list-group-flush">
                {listCart.map((item, index) => (
                  <Item item={item} key={index} />
                ))}
              </ul>

              <div className="d-flex justify-content-between mt-4">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/shop");
                  }}
                  className="btn btn-primary"
                >
                  {t("Continue Shopping")}
                </a>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-4 col-md-5">
            <div className="mb-5 card mt-6">
              <div className="card-body p-6">
                <h2 className="h5 mb-4">{t("Summary")}</h2>
                <div className="card mb-2">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                      <div className="me-auto">
                        <div>{t("Item Subtotal")}</div>
                      </div>
                      <span>{totalAmount}</span>
                    </li>
                  </ul>
                </div>
                <div className="d-grid mb-1 mt-4">
                  <button
                    className="btn btn-primary btn-lg d-flex justify-content-between align-items-center"
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/check-out");
                    }}
                  >
                    {t("Go to Checkout")}{" "}
                    <span className="fw-bold">{totalAmount}</span>
                  </button>
                </div>

                <p>
                  <small>
                    {t(
                      "By placing your order, you agree to be bound by the Freshcart Terms of Service and Privacy Policy."
                    )}
                    <a href="#!">{t("Terms of Service")}</a>
                    <a href="#!">{t("Privacy Policy")}</a>
                  </small>
                </p>

                {/* <div className="mt-8">
                  <h2 className="h5 mb-3">{t("Add Promo or Gift Card")}</h2>
                  <form>
                    <div className="mb-2">
                      <label htmlFor="giftcard" className="form-label sr-only">
                        {t("Email address")}
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="giftcard"
                        placeholder={t("Promo or Gift Card")}
                      />
                    </div>

                    <div className="d-grid">
                      <button
                        type="submit"
                        className="btn btn-outline-dark mb-1"
                      >
                        {t("Redeem")}
                      </button>
                    </div>
                    <p className="text-muted mb-0">
                      <small>{t("Terms & Conditions apply")}</small>
                    </p>
                  </form>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Container;
