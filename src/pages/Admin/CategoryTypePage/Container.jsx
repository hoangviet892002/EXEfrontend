import React from "react";
import Item from "./Item";
import { useSelector } from "react-redux";
import useHook from "./hooks/useHook";

const Container = () => {
  const category = useSelector((state) => state.category.category);
  const { categoryTypes } = useHook();
  return (
    <>
      <div class="row">
        <div class="col-12">
          <div class="page-title-box">
            <h4 class="page-title">{category.name}</h4>
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
                    Add new a category type
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
                      <th class="all">Category Type</th>

                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categoryTypes.map((type) => (
                      <Item type={type} />
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
