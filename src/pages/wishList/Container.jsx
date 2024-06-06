import { ItemWish } from "../../components";
import useHook from "./hooks/useHook";
import { useTranslation } from "react-i18next";

const WishContainer = () => {
  const { t } = useTranslation();
  const { wishList, clearWish } = useHook();
  return (
    <>
      <section className="my-14">
        <div className="container">
          <div className="row">
            <div className="offset-lg-1 col-lg-10">
              <div className="mb-8">
                <h1 className="mb-1">{t("My Wishlist")}</h1>
                <p>
                  {t("There are")} {wishList.length} {t("products in this wishlist.")}
                </p>
                <button
                  className="btn btn-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    clearWish();
                  }}
                >
                  {t("Clear")}
                </button>
              </div>
              <div>
                <div className="table-responsive">
                  <table className="table text-nowrap">
                    <thead className="table-light">
                      <tr>
                        <th></th>
                        <th>{t("Product")}</th> 
                        <th>{t("Amount")}</th>
                        <th>{t("Actions")}</th> 
                        <th>{t("Remove")}</th> 
                      </tr>
                    </thead>
                    <tbody>
                      {wishList.map((wish, index) => (
                        <ItemWish product={wish} key={index} />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WishContainer;
