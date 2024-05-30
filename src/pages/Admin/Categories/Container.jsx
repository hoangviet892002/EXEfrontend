import React, { useState } from "react";
import Item from "./Item";
import { Link } from "react-router-dom";
import { Pagination } from "../../../components";
import useHook from "./hooks/useHook";

const Container = () => {
  const [selectedPage, setSelectedPage] = useState(1);
  const { categories } = useHook();
  const handlePageChange = (page) => {
    setSelectedPage(page);
    console.log(`Selected page: ${page}`);
  };
  return (
    <>
      <div class="row">
        <div class="col-12">
          <div class="page-title-box">
            <h4 class="page-title">Categories</h4>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <div class="row mb-2">
                <div class="col-xl-5">
                  <a
                    href="#"
                    class="btn btn-outline-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#addCategoryModal"
                  >
                    Add new a categories
                  </a>
                </div>
                <div class="col-sm-7">
                  <div class="text-sm-end">
                    <form class="row gy-2 gx-2 align-items-center justify-content-xl-start justify-content-between"></form>
                  </div>
                </div>
              </div>

              <div class="table-responsive">
                <table class="table table-centered table-nowrap mb-0">
                  <thead class="table-light">
                    <tr>
                      <th class="all">Category</th>

                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories.map((category) => (
                      <Item category={category} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Container;
