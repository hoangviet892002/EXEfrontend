import React, { useState } from "react";
import Item from "./Item";
import { Link } from "react-router-dom";
import { Pagination } from "../../../components";
import useHook from "./hooks/useHook";
import { useTranslation } from "react-i18next";

const Container = () => {
  const { t } = useTranslation();
  const { products, totalPage, currentPage, setCurrentPage, query, setQuery } =
    useHook();

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="page-title-box">
            <h4 className="page-title">{t("Products")}</h4>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="row mb-2">
                <div className="col-xl-5">
                  <Link to="add" className="btn btn-danger mb-2">
                    <i className="mdi mdi-plus-circle me-2"></i> {t("Add Products")}
                  </Link>
                </div>
                <div className="col-sm-7">
                  <div className="text-sm-end">
                    <form className="row gy-2 gx-2 align-items-center justify-content-xl-start justify-content-between">
                      <div className="col-auto">
                        <label htmlFor="inputPassword2" className="visually-hidden">
                          {t("Search")}
                        </label>
                        <input
                          type="search"
                          className="form-control"
                          value={query}
                          onChange={(e) => setQuery(e.target.value)}
                          id="inputPassword2"
                          placeholder={`${t("Search")}...`}
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="table-responsive">
                <table className="table table-centered table-nowrap mb-0">
                  <thead className="table-light">
                    <tr>
                      <th className="all">{t("Product")}</th>
                      <th>{t("Added Date")}</th>
                      <th>{t("Price")}</th>
                      <th>{t("Status")}</th>
                      <th style={{ width: "85px" }}>{t("Action")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <Item key={product.id} product={product} />
                    ))}
                  </tbody>
                </table>
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
    </>
  );
};

export default Container;
