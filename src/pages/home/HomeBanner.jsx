import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HomeContainer = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="mt-8">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-7">
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div
                      style={{
                        background: `url(https://firebasestorage.googleapis.com/v0/b/bannerexe-639ce.appspot.com/o/4.png?alt=media&token=ad53c463-8998-4183-a366-f903fc384c91) no-repeat`,
                        backgroundSize: "cover",
                        borderRadius: "0.5rem",
                      }}
                    >
                      <div className="ps-lg-12 py-lg-16 col-md-7 py-14 px-8 text-xs-center">
                        <div className="d-flex align-items-center mb-4">
                          <span>{t("Exclusive Offer")}</span>
                          <span className="badge bg-danger ms-2">15%</span>
                        </div>

                        <h2 className="text-dark display-5 fw-bold mb-3">
                          {t("Best Online Deals, Free Stuff")}
                        </h2>
                        <p className="fs-5 text-dark">
                          {t("Only on this week... Don’t miss")}
                        </p>

                        <div className="mb-4 mt-4">
                          <span className="text-dark">
                            {t("Start from")}
                            <span className="fs-4 text-danger ms-1">$5.99</span>
                          </span>
                        </div>

                        <a href="#!" className="btn btn-primary">
                          {t("Shop Deals Now")}
                          <i className="feather-icon icon-arrow-right ms-1"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div
                      className=" "
                      style={{
                        background: `url(https://firebasestorage.googleapis.com/v0/b/bannerexe-639ce.appspot.com/o/3.png?alt=media&token=2f5bd840-0aaf-4792-96ea-45604f8d9150) no-repeat`,
                        backgroundSize: "cover",
                        borderRadius: "0.5rem",
                      }}
                    >
                      <div className="ps-lg-12 py-lg-16 col-md-7 py-14 ps-8 text-xs-center">
                        <div className="d-flex align-items-center mb-4">
                          <span>{t("Exclusive Offer")}</span>
                          <span className="badge bg-danger ms-2">35%</span>
                        </div>

                        <h2 className="text-dark display-5 fw-bold mb-3">
                          {t("Chocozay wafer-rolls Deals")}
                        </h2>

                        <p className="fs-5 text-dark">
                          {t("Only on this week... Don’t miss")}
                        </p>
                        <div className="mb-4 mt-4">
                          <span className="text-dark">
                            {t("Start from")}
                            <span className="fs-4 text-danger ms-1">
                              $34.99
                            </span>
                          </span>
                        </div>

                        <a href="#!" className="btn btn-primary">
                          {t("Shop Deals Now")}
                          <i className="feather-icon icon-arrow-right ms-1"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div
                      className=" "
                      style={{
                        background: `url(https://firebasestorage.googleapis.com/v0/b/bannerexe-639ce.appspot.com/o/5.png?alt=media&token=fac90084-982f-471b-9859-f6fc616ccca1) no-repeat`,
                        backgroundSize: "cover",
                        borderRadius: "0.5rem",
                      }}
                    >
                      <div className="ps-lg-12 py-lg-16 col-md-7 py-14 ps-8 text-xs-center">
                        <div className="d-flex align-items-center mb-4">
                          <span>{t("Exclusive Offer")}</span>
                          <span className="badge bg-danger ms-2">20%</span>
                        </div>

                        <h2 className="text-dark display-5 fw-bold mb-3">
                          {t("Cokoladni Kolutici Lasta, 290g")}
                        </h2>

                        <p className="fs-5 text-dark">
                          {t("Only on this week... Don’t miss")}
                        </p>
                        <div className="mb-4 mt-4">
                          <span className="text-dark">
                            {t("Start from")}
                            <span className="fs-4 text-primary ms-1">
                              $5.99
                            </span>
                          </span>
                        </div>

                        <a href="#!" className="btn btn-primary">
                          {t("Shop This Week Offer")}
                          <i className="feather-icon icon-arrow-right ms-1"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-5 col-12 d-md-flex d-xl-block">
              <div className="banner mb-6 w-100">
                <div className="banner-img">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/bannerexe-639ce.appspot.com/o/2.png?alt=media&token=90d4b51c-bef5-4368-bfd0-2918509fd70d"
                    alt=""
                    className="img-fluid rounded-3 w-100"
                  />

                  <div className="banner-text">
                    <h3 className="mb-0 fs-2 fw-bold">
                      {t("10% cashback on personal care")}
                    </h3>
                    <div className="my-5 fs-5">
                      <p className="mb-0">{t("Max cashback")}: $12</p>
                      <span>
                        {t("Code")}:{" "}
                        <span className="fw-bold text-dark">CARE12</span>
                      </span>
                    </div>
                    <>
                      <Link to="/shop" className="btn btn-dark">
                        {t("Shop Now")}
                      </Link>
                    </>
                  </div>
                </div>
              </div>

              <div className="banner w-100">
                <div className="banner-img">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/bannerexe-639ce.appspot.com/o/1.png?alt=media&token=5baf5d8c-7dcf-4ad6-af46-708926eb827a"
                    alt=""
                    className="img-fluid rounded-3 w-100"
                  />
                  <div className="banner-text">
                    <h3 className="fs-2 fw-bold lh-1 mb-2">
                      {t("Say yes to")}
                      <br />
                      {t("season’s fresh")}
                    </h3>

                    <p className="fs-5">
                      {t("Refresh your day")}
                      <br />
                      {t("the fruity way")}
                    </p>
                    <Link to="/shop" className="btn btn-dark mt-2">
                      {t("Shop Now")}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HomeContainer;
