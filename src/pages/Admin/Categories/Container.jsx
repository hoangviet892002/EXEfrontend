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
  };
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="page-title-box">
            <h4 className="page-title">Categories</h4>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="row mb-2">
                <div className="col-xl-5">
                  <a
                    href="#"
                    className="btn btn-outline-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#addCategoryModal"
                  >
                    Add new a categories
                  </a>
                </div>
                <div className="col-sm-7">
                  <div className="text-sm-end">
                    <form className="row gy-2 gx-2 align-items-center justify-content-xl-start justify-content-between"></form>
                  </div>
                </div>
              </div>

              <div className="table-responsive">
                <table className="table table-centered table-nowrap mb-0">
                  <thead className="table-light">
                    <tr>
                      <th className="all">Category</th>

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
