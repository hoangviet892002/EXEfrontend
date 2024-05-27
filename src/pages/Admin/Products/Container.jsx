import React, { useState } from "react";
import Item from "./Item";
import { Link } from "react-router-dom";
import { Pagination } from "../../../components";

const Container = () => {
  const [selectedPage, setSelectedPage] = useState(1);

  const handlePageChange = (page) => {
    setSelectedPage(page);
    console.log(`Selected page: ${page}`);
  };
  return (
    <>
      <div class="row">
        <div class="col-12">
          <div class="page-title-box">
            <h4 class="page-title">Orders</h4>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <div class="row mb-2">
                <div class="col-xl-5">
                  <Link to="add" class="btn btn-danger mb-2">
                    <i class="mdi mdi-plus-circle me-2"></i> Add Products
                  </Link>
                </div>
                <div class="col-sm-7">
                  <div class="text-sm-end">
                    <form class="row gy-2 gx-2 align-items-center justify-content-xl-start justify-content-between">
                      <div class="col-auto">
                        <label for="inputPassword2" class="visually-hidden">
                          Search
                        </label>
                        <input
                          type="search"
                          class="form-control"
                          id="inputPassword2"
                          placeholder="Search..."
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div class="table-responsive">
                <table class="table table-centered table-nowrap mb-0">
                  <thead class="table-light">
                    <tr>
                      <th class="all">Product</th>
                      <th>Category</th>
                      <th>Added Date</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Status</th>
                      <th style={{ width: "85px" }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                  </tbody>
                </table>
                <Pagination
                  total={10}
                  selected={selectedPage}
                  onChange={handlePageChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Container;
