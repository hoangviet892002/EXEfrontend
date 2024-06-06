import React, { useState } from "react";
import { CardProductV1, MultiRangeSlider, Pagination } from "../../components";
import Categories from "./Categories";
import useHook from "./hooks/useHook";
import { useDispatch } from "react-redux";
import { pickType } from "../../redux/actions/megaMenuAction";
import { useTranslation } from "react-i18next";

const Container = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    megaMenu,
    setMax,
    setMin,
    setCurrentPage,
    currentPage,
    totalPage,
    products,
    query,
    setQuery,
  } = useHook();
  const handleRangeChange = (minVal, maxVal) => {
    setMin(minVal);
    setMax(maxVal);
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section className="mt-8 mb-lg-14 mb-8">
      <div className="container">
        <div className="row gx-10">
          <div className="col-lg-3 col-md-4 mb-6 mb-md-0">
            <div className="py-4">
              <h5 className="mb-3">{t("Categories")}</h5> {/* Sử dụng hook useTranslation ở đây */}
              <button
                type="button"
                className="btn btn-primary mb-2"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(pickType(""));
                }}
              >
                {t("All")} {/* Sử dụng hook useTranslation ở đây */}
              </button>
              <ul className="nav nav-category" id="categoryCollapseMenu">
                {megaMenu.map((category, index) => (
                  <Categories
                    key={index}
                    index={"x" + category.id + "x"}
                    category={category}
                  />
                ))}
              </ul>
            </div>
			
			{/* <div className="py-4">
              <h5 className="mb-3">Stores</h5>
              <div className="my-4">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search by store"
                />
              </div>

              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="eGrocery"
                  checked
                />
                <label className="form-check-label" for="eGrocery">
                  E-Grocery
                </label>
              </div>

              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="DealShare"
                />
                <label className="form-check-label" for="DealShare">
                  DealShare
                </label>
              </div>

              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="Dmart"
                />
                <label className="form-check-label" for="Dmart">
                  {" "}
                  DMart{" "}
                </label>
              </div>

              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="Blinkit"
                />
                <label className="form-check-label" for="Blinkit">
                  {" "}
                  Blinkit{" "}
                </label>
              </div>

              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="BigBasket"
                />
                <label className="form-check-label" for="BigBasket">
                  BigBasket
                </label>
              </div>

              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="StoreFront"
                />
                <label className="form-check-label" for="StoreFront">
                  StoreFront
                </label>
              </div>

              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="Spencers"
                />
                <label className="form-check-label" for="Spencers">
                  Spencers
                </label>
              </div>

              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="onlineGrocery"
                />
                <label className="form-check-label" for="onlineGrocery">
                  Online Grocery
                </label>
              </div>
            </div> */}
            <div className="py-4">
              <h5 className="mb-3">{t("Price")}</h5> {/* Sử dụng hook useTranslation ở đây */}
              <MultiRangeSlider
                min={0}
                max={10000}
                onChange={handleRangeChange}
              />
            </div>
            <div className="py-4">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control border-end-0"
                  placeholder={t("Search for products..")} 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  aria-label={t("Search for products..")} 
                  aria-describedby="basic-addon2"
                />
                <span
                  className="input-group-text bg-transparent"
                  id="basic-addon2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-search"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </span>
              </div>
            </div>
			
			{/* <div className="py-4">
              <h5 className="mb-3">Rating</h5>
              <div>
                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="ratingFive"
                  />
                  <label className="form-check-label" for="ratingFive">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
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
                  <label className="form-check-label" for="ratingFour">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
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
                  <label className="form-check-label" for="ratingThree">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
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
                  <label className="form-check-label" for="ratingTwo">
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
                  <label className="form-check-label" for="ratingOne">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star text-warning"></i>
                    <i className="bi bi-star text-warning"></i>
                    <i className="bi bi-star text-warning"></i>
                    <i className="bi bi-star text-warning"></i>
                  </label>
                </div>
              </div>
            </div> */}
            <div className="py-4">
              <div className="position-absolute p-5 py-8">
                <h3 className="mb-0">{t("Fresh Fruits")}</h3> {/* Sử dụng hook useTranslation ở đây */}
                <p>{t("Get Upto 25% Off")}</p> {/* Sử dụng hook useTranslation ở đây */}
                <a href="#" className="btn btn-dark">
                  {t("Shop Now")}
                  <i className="feather-icon icon-arrow-right ms-1"></i>
                </a>
              </div>

              <img
                src="../assets/images/banner/assortment-citrus-fruits.png"
                alt=""
                className="img-fluid rounded-3"
              />
            </div>
          </div>
          <div className="col-lg-9 col-md-8">
            <div className="row g-4 row-cols-xl-4 row-cols-lg-3 row-cols-2 row-cols-md-2 mt-2">
              {products.map((product, index) => (
                <CardProductV1 product={product} key={index} />
              ))}
            </div>
            <div className="row mt-8">
              <div className="col">
                <Pagination
                  total={totalPage}
                  selected={currentPage}
                  onChange={handlePageChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Container;
