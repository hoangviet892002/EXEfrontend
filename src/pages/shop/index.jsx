import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Footer,
  Navbar,
  CardProductV1,
  ModelProduct,
  ShopCart,
  Pagination,
  MultiRangeSlider,
} from "../../components";

const ShopPage = () => {
  const { t } = useTranslation();
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  const handleRangeChange = (minVal, maxVal) => {
    setMin(minVal);
    setMax(maxVal);
  };
  const categories = [
    "Dairy, Bread & Eggs",
    "Snacks & Munchies",
    "Fruits & Vegetables",
  ];
  const [selectedPage, setSelectedPage] = useState(1);

  const handlePageChange = (page) => {
    setSelectedPage(page);
  };
  return (
    <>
      <Navbar />
      <section className="mt-8 mb-lg-14 mb-8">
        <div className="container">
          <div className="row gx-10">
            <div className="col-12">
              <a
                className="btn btn-outline-gray-400 text-muted"
                data-bs-toggle="collapse"
                href="#collapseFilter"
                role="button"
                aria-expanded="true"
                aria-controls="collapseFilter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-filter me-2"
                >
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                </svg>{" "}
                {t("Filters")}
              </a>

              <div className="collapse mt-6 show" id="collapseFilter">
                <div className="row row-cols-lg-4 row-cols-1 row-cols-md-2">
                  <div className="col">
                    <div className="card mb-4 mb-lg-0">
                      <div className="card-body p-6">
                        <h5 className="mb-3">{t("Categories")}</h5>

                        <ul className="nav nav-category">
                          {categories.map((item) => {
                            return (
                              <li className="nav-item border-bottom w-100">
                                <a href="#" className="nav-link">
                                  {item}
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="card mb-4 mb-lg-0">
                      <div className="card-body p-6">
                        <MultiRangeSlider
                          min={0}
                          max={100}
                          onChange={handleRangeChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card mb-4 mb-lg-0">
                      <div className="card-body p-6">
                        <div>
                          <h5 className="mb-3">{t("Rating")}</h5>
                          <div>
                            <div className="form-check mb-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="ratingFive"
                              />

                              <label
                                className="form-check-label"
                                for="ratingFive"
                              >
                                <i className="bi bi-star-fill text-warning"></i>
                                <i className="bi bi-star-fill text-warning "></i>
                                <i className="bi bi-star-fill text-warning "></i>
                                <i className="bi bi-star-fill text-warning "></i>
                                <i className="bi bi-star-fill text-warning "></i>
                              </label>
                            </div>
                            <div className="form-check mb-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="ratingFour"
                                checked
                              />

                              <label
                                className="form-check-label"
                                for="ratingFour"
                              >
                                <i className="bi bi-star-fill text-warning"></i>
                                <i className="bi bi-star-fill text-warning "></i>
                                <i className="bi bi-star-fill text-warning "></i>
                                <i className="bi bi-star-fill text-warning "></i>
                                <i className="bi bi-star text-warning"></i>
                              </label>
                            </div>
                            <div className="form-check mb-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="ratingThree"
                              />

                              <label
                                className="form-check-label"
                                for="ratingThree"
                              >
                                <i className="bi bi-star-fill text-warning"></i>
                                <i className="bi bi-star-fill text-warning "></i>
                                <i className="bi bi-star-fill text-warning "></i>
                                <i className="bi bi-star text-warning"></i>
                                <i className="bi bi-star text-warning"></i>
                              </label>
                            </div>
                            <div className="form-check mb-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="ratingTwo"
                              />

                              <label
                                className="form-check-label"
                                for="ratingTwo"
                              >
                                <i className="bi bi-star-fill text-warning"></i>
                                <i className="bi bi-star-fill text-warning"></i>
                                <i className="bi bi-star text-warning"></i>
                                <i className="bi bi-star text-warning"></i>
                                <i className="bi bi-star text-warning"></i>
                              </label>
                            </div>
                            <div className="form-check mb-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="ratingOne"
                              />

                              <label
                                className="form-check-label"
                                for="ratingOne"
                              >
                                <i className="bi bi-star-fill text-warning"></i>
                                <i className="bi bi-star text-warning"></i>
                                <i className="bi bi-star text-warning"></i>
                                <i className="bi bi-star text-warning"></i>
                                <i className="bi bi-star text-warning"></i>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 mt-10">
              <div className="d-md-flex justify-content-between align-items-center">
                <div>
                  <p className="mb-3 mb-md-0">
                    {" "}
                    <span className="text-dark">24 </span> {t("Products found")}{" "}
                  </p>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>{t("Sort by: Featured")}</option>
                      <option value="Low to High">{t("Price: Low to High")}</option>
                      <option value="High to Low">{t("Price: High to Low")}</option>
                      <option value="Release Date">{t("Release Date")}</option>
                      <option value="Avg. Rating"> {t("Avg. Rating")}</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row g-4 row-cols-xl-5 row-cols-lg-3 row-cols-2 row-cols-md-2 mt-2">
                <CardProductV1 />
                <CardProductV1 />
                <CardProductV1 />
                <CardProductV1 />
                <CardProductV1 />
              </div>
              <div className="">
                <Pagination
                  total={10}
                  selected={selectedPage}
                  onChange={handlePageChange}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModelProduct />
      <ShopCart />
      <Footer />
    </>
  );
};

export default ShopPage;
