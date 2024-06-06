import React from "react";
import Item from "./Item";
import { useSelector } from "react-redux";
import useHook from "./hooks/useHook";
import { useTranslation } from "react-i18next";

const Container = () => {
  const category = useSelector((state) => state.category.category);
  const { categoryTypes } = useHook();
  const { t } = useTranslation();
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="page-title-box">
            <h4 className="page-title">{category.name}</h4>
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
                    {t("Add new a category type")}
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
                      <th className="all">{t("Category Type")}</th> 
                      <th>{t("Action")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categoryTypes.map((type) => (
                      <Item type={type} key={type.id} /> 
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
