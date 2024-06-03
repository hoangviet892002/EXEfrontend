import React from "react";
import { Link } from "react-router-dom";

const HomeContainer = () => {
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
                        background: `url(./assets/images/slider/slider-image-1.jpg) no-repeat`,
                        backgroundSize: "cover",
                        borderRadius: "0.5rem",
                      }}
                    >
                      <div className="ps-lg-12 py-lg-16 col-md-7 py-14 px-8 text-xs-center">
                        <div className="d-flex align-items-center mb-4">
                          <span>Exclusive Offer</span>
                          <span className="badge bg-danger ms-2">15%</span>
                        </div>

                        <h2 className="text-dark display-5 fw-bold mb-3">
                          Best Online Deals, Free Stuff
                        </h2>
                        <p className="fs-5 text-dark">
                          Only on this week... Don’t miss
                        </p>

                        <div className="mb-4 mt-4">
                          <span className="text-dark">
                            Start from
                            <span className="fs-4 text-danger ms-1">$5.99</span>
                          </span>
                        </div>

                        <a href="#!" className="btn btn-primary">
                          Get Best Deal
                          <i className="feather-icon icon-arrow-right ms-1"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div
                      className=" "
                      style={{
                        background: `url(../assets/images/slider/slider-image-2.jpg) no-repeat`,
                        backgroundSize: "cover",
                        borderRadius: "0.5rem",
                      }}
                    >
                      <div className="ps-lg-12 py-lg-16 col-md-7 py-14 ps-8 text-xs-center">
                        <div className="d-flex align-items-center mb-4">
                          <span>Exclusive Offer</span>
                          <span className="badge bg-danger ms-2">35%</span>
                        </div>

                        <h2 className="text-dark display-5 fw-bold mb-3">
                          Chocozay wafer-rolls Deals
                        </h2>

                        <p className="fs-5 text-dark">
                          Only on this week... Don’t miss
                        </p>
                        <div className="mb-4 mt-4">
                          <span className="text-dark">
                            Start from
                            <span className="fs-4 text-danger ms-1">
                              $34.99
                            </span>
                          </span>
                        </div>

                        <a href="#!" className="btn btn-primary">
                          Shop Deals Now
                          <i className="feather-icon icon-arrow-right ms-1"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div
                      className=" "
                      style={{
                        background: `url(../assets/images/slider/slider-image-3.jpg) no-repeat`,
                        backgroundSize: "cover",
                        borderRadius: "0.5rem",
                      }}
                    >
                      <div className="ps-lg-12 py-lg-16 col-md-7 py-14 ps-8 text-xs-center">
                        <div className="d-flex align-items-center mb-4">
                          <span>Exclusive Offer</span>
                          <span className="badge bg-danger ms-2">20%</span>
                        </div>

                        <h2 className="text-dark display-5 fw-bold mb-3">
                          Cokoladni Kolutici Lasta, 290g
                        </h2>

                        <p className="fs-5 text-dark">
                          Only on this week... Don’t miss
                        </p>
                        <div className="mb-4 mt-4">
                          <span className="text-dark">
                            Start from
                            <span className="fs-4 text-primary ms-1">
                              $5.99
                            </span>
                          </span>
                        </div>

                        <a href="#!" className="btn btn-primary">
                          Shop This Week Offer
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
                    src="../assets/images/banner/ad-banner-1.jpg"
                    alt=""
                    className="img-fluid rounded-3 w-100"
                  />

                  <div className="banner-text">
                    <h3 className="mb-0 fs-2 fw-bold">
                      10% cashback on personal care
                    </h3>
                    <div className="my-5 fs-5">
                      <p className="mb-0">Max cashback: $12</p>
                      <span>
                        Code: <span className="fw-bold text-dark">CARE12</span>
                      </span>
                    </div>
                    <>
                      <Link to="/shop" className="btn btn-dark">
                        Shop Now
                      </Link>
                    </>
                  </div>
                </div>
              </div>

              <div className="banner w-100">
                <div className="banner-img">
                  <img
                    src="../assets/images/banner/ad-banner-2.jpg"
                    alt=""
                    className="img-fluid rounded-3 w-100"
                  />
                  <div className="banner-text">
                    <h3 className="fs-2 fw-bold lh-1 mb-2">
                      Say yes to <br />
                      season’s fresh
                    </h3>

                    <p className="fs-5">
                      Refresh your day <br />
                      the fruity way
                    </p>
                    <Link to="/shop" className="btn btn-dark mt-2">
                      Shop Now
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
