import { SideBarCus } from "../../components";
import Item from "./Item";

const Container = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="p-6 d-flex justify-content-between align-items-center d-md-none">
              <h3 className="fs-5 mb-0">Account Setting</h3>

              <button
                className="btn btn-outline-gray-400 text-muted d-md-none btn-icon"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasAccount"
                aria-controls="offcanvasAccount"
              >
                <i className="feather-icon icon-menu fs-4"></i>
              </button>
            </div>
          </div>

          <SideBarCus />
          <div className="col-lg-9 col-md-8 col-12">
            <div className="p-6 p-lg-10">
              <h2 className="mb-6">Your Orders</h2>

              <div className="table-responsive border-0">
                <table className="table mb-0 text-nowrap">
                  <thead className="table-light">
                    <tr>
                      <th className="border-0">&nbsp;</th>
                      <th className="border-0">Product</th>
                      <th className="border-0">Order</th>

                      <th className="border-0">Items</th>

                      <th className="border-0">Amount</th>

                      <th className="border-0"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Container;
