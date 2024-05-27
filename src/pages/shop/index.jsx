import { useState } from "react";
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
    console.log(`Selected page: ${page}`);
  };
  return (
    <>
      <Navbar />
      <section class="mt-8 mb-lg-14 mb-8">
        <div class="container">
          <div class="row gx-10">
            <div class="col-12">
              <a
                class="btn btn-outline-gray-400 text-muted"
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
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-filter me-2"
                >
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                </svg>{" "}
                Filters
              </a>

              <div class="collapse mt-6 show" id="collapseFilter">
                <div class="row row-cols-lg-4 row-cols-1 row-cols-md-2">
                  <div class="col">
                    <div class="card mb-4 mb-lg-0">
                      <div class="card-body p-6">
                        <h5 class="mb-3">Categories</h5>

                        <ul class="nav nav-category">
                          {categories.map((item) => {
                            return (
                              <li class="nav-item border-bottom w-100">
                                <a href="#" class="nav-link">
                                  {item}
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="col">
                    <div class="card mb-4 mb-lg-0">
                      <div class="card-body p-6">
                        <MultiRangeSlider
                          min={0}
                          max={100}
                          onChange={handleRangeChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card mb-4 mb-lg-0">
                      <div class="card-body p-6">
                        <div>
                          <h5 class="mb-3">Rating</h5>
                          <div>
                            <div class="form-check mb-2">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="ratingFive"
                              />

                              <label class="form-check-label" for="ratingFive">
                                <i class="bi bi-star-fill text-warning"></i>
                                <i class="bi bi-star-fill text-warning "></i>
                                <i class="bi bi-star-fill text-warning "></i>
                                <i class="bi bi-star-fill text-warning "></i>
                                <i class="bi bi-star-fill text-warning "></i>
                              </label>
                            </div>
                            <div class="form-check mb-2">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="ratingFour"
                                checked
                              />

                              <label class="form-check-label" for="ratingFour">
                                <i class="bi bi-star-fill text-warning"></i>
                                <i class="bi bi-star-fill text-warning "></i>
                                <i class="bi bi-star-fill text-warning "></i>
                                <i class="bi bi-star-fill text-warning "></i>
                                <i class="bi bi-star text-warning"></i>
                              </label>
                            </div>
                            <div class="form-check mb-2">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="ratingThree"
                              />

                              <label class="form-check-label" for="ratingThree">
                                <i class="bi bi-star-fill text-warning"></i>
                                <i class="bi bi-star-fill text-warning "></i>
                                <i class="bi bi-star-fill text-warning "></i>
                                <i class="bi bi-star text-warning"></i>
                                <i class="bi bi-star text-warning"></i>
                              </label>
                            </div>
                            <div class="form-check mb-2">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="ratingTwo"
                              />

                              <label class="form-check-label" for="ratingTwo">
                                <i class="bi bi-star-fill text-warning"></i>
                                <i class="bi bi-star-fill text-warning"></i>
                                <i class="bi bi-star text-warning"></i>
                                <i class="bi bi-star text-warning"></i>
                                <i class="bi bi-star text-warning"></i>
                              </label>
                            </div>
                            <div class="form-check mb-2">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="ratingOne"
                              />

                              <label class="form-check-label" for="ratingOne">
                                <i class="bi bi-star-fill text-warning"></i>
                                <i class="bi bi-star text-warning"></i>
                                <i class="bi bi-star text-warning"></i>
                                <i class="bi bi-star text-warning"></i>
                                <i class="bi bi-star text-warning"></i>
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
            <div class="col-12 mt-10">
              <div class="d-md-flex justify-content-between align-items-center">
                <div>
                  <p class="mb-3 mb-md-0">
                    {" "}
                    <span class="text-dark">24 </span> Products found{" "}
                  </p>
                </div>

                <div class="d-flex justify-content-between align-items-center">
                  <div>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Sort by: Featured</option>
                      <option value="Low to High">Price: Low to High</option>
                      <option value="High to Low"> Price: High to Low</option>
                      <option value="Release Date"> Release Date</option>
                      <option value="Avg. Rating"> Avg. Rating</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="row g-4 row-cols-xl-5 row-cols-lg-3 row-cols-2 row-cols-md-2 mt-2">
                <CardProductV1 />
                <CardProductV1 />
                <CardProductV1 />
                <CardProductV1 />
                <CardProductV1 />
              </div>
              <div class="">
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
