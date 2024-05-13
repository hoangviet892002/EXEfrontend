import { SideBarCus } from "../../components";
import Item from "./Item";

const Container = () => {
  return (
    <section>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="p-6 d-flex justify-content-between align-items-center d-md-none">
              <h3 class="fs-5 mb-0">Account Setting</h3>

              <button
                class="btn btn-outline-gray-400 text-muted d-md-none btn-icon"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasAccount"
                aria-controls="offcanvasAccount"
              >
                <i class="feather-icon icon-menu fs-4"></i>
              </button>
            </div>
          </div>

          <SideBarCus />
          <div class="col-lg-9 col-md-8 col-12">
            <div class="p-6 p-lg-10">
              <h2 class="mb-6">Your Orders</h2>

              <div class="table-responsive border-0">
                <table class="table mb-0 text-nowrap">
                  <thead class="table-light">
                    <tr>
                      <th class="border-0">&nbsp;</th>
                      <th class="border-0">Product</th>
                      <th class="border-0">Order</th>

                      <th class="border-0">Items</th>

                      <th class="border-0">Amount</th>

                      <th class="border-0"></th>
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
