import React from "react";
import "./Dashboard.css";
import useHook from "./hook/useHook";

const Container = () => {
  const { totalOrder, totalUser, totalAmount } = useHook();
  return (
    <div class="row g-6 mb-6">
      <div class="col-xl-3 col-sm-6 col-12">
        <div class="card shadow border-0">
          <div class="card-body">
            <div class="row">
              <div class="col">
                <span class="h6 font-semibold text-muted text-sm d-block mb-2">
                  User
                </span>
                <span class="h3 font-bold mb-0">{totalUser}</span>
              </div>
              <div class="col-auto">
                <div class="icon icon-shape bg-primary text-white text-lg rounded-circle">
                  <i class="bi bi-people"></i>
                </div>
              </div>
            </div>
            <div class="mt-2 mb-0 text-sm">
              <span class="badge badge-pill bg-soft-success text-success me-2">
                <i class="bi bi-arrow-up me-1"></i>100%
              </span>
              <span class="text-nowrap text-xs text-muted">
                Since last month
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-sm-6 col-12">
        <div class="card shadow border-0">
          <div class="card-body">
            <div class="row">
              <div class="col">
                <span class="h6 font-semibold text-muted text-sm d-block mb-2">
                  Total Order
                </span>
                <span class="h3 font-bold mb-0">{totalOrder}</span>
              </div>
              <div class="col-auto">
                <div class="icon icon-shape bg-info text-white text-lg rounded-circle">
                  <i class="bi bi-clock-history"></i>
                </div>
              </div>
            </div>
            <div class="mt-2 mb-0 text-sm">
              <span class="badge badge-pill bg-soft-danger text-success me-2">
                <i class="bi bi-arrow-up me-1"></i>100%
              </span>
              <span class="text-nowrap text-xs text-muted">
                Since last month
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-sm-6 col-12">
        <div class="card shadow border-0">
          <div class="card-body">
            <div class="row">
              <div class="col">
                <span class="h6 font-semibold text-muted text-sm d-block mb-2">
                  Total Revenue
                </span>
                <span class="h3 font-bold mb-0">
                  {totalAmount ? totalAmount : 0}
                </span>
              </div>
              <div class="col-auto">
                <div class="icon icon-shape bg-warning text-white text-lg rounded-circle">
                  <i class="bi bi-minecart-loaded"></i>
                </div>
              </div>
            </div>
            <div class="mt-2 mb-0 text-sm">
              <span class="badge badge-pill bg-soft-success text-success me-2">
                <i class="bi bi-arrow-up me-1"></i>100%
              </span>
              <span class="text-nowrap text-xs text-muted">
                Since last month
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
