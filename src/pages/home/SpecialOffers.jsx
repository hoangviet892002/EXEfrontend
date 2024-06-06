import { CardProductV2 } from "../../components";
import { useTranslation } from "react-i18next";
const SpecialOffers = () => {
  const { t } = useTranslation();
  return (
    <section>
      <div className="container mb-9">
        <div className="row">
          <div className="col-md-12 mb-6">
            <h3 className="mb-0">{t("Daily Best Sells")}</h3>
          </div>
        </div>

        <div className="row row-cols-lg-4 row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div
              className=" pt-8 px-8 rounded-3"
              style={{
                background:
                  "url(assets/images/banner/banner-deal.jpg) no-repeat",
                backgroundSize: "cover",
                height: "400px",
              }}
            >
              <div>
                <h3 className="fw-bold text-white">
                  {t("100% Organic Coffee Beans.")}
                </h3>
                <p className="text-white">{t("Get the best deal before close.")}</p>
                <a href="#!" className="btn btn-primary">
                  {t("Shop Now")}{" "}
                  <i className="feather-icon icon-arrow-right ms-1"></i>
                </a>
              </div>
            </div>
          </div>
          <CardProductV2 />
          <CardProductV2 />
          <CardProductV2 />
        </div>
      </div>
    </section>
  );
};
export default SpecialOffers;
