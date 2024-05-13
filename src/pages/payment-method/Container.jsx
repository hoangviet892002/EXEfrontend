import { SideBarCus } from "../../components";
import AddForm from "./AddForm";
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
                class="btn btn-outline-gray-400 text-muted d-md-none"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasAccount"
                aria-controls="offcanvasAccount"
              >
                <i class="feather-icon icon-menu"></i>
              </button>
            </div>
          </div>
          <SideBarCus />
          <div class="col-lg-9 col-md-8 col-12">
            <div class="p-6 p-lg-10">
              <div class="d-flex justify-content-between mb-6 align-items-center">
                <h2 class="mb-0">Payment Methods</h2>
                <a
                  href="#"
                  class="btn btn-outline-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#paymentModal"
                >
                  Add Payment
                </a>
              </div>
              <ul class="list-group list-group-flush">
                <Item />
                <Item />
                <Item />
                <Item />
              </ul>
            </div>
          </div>
        </div>
      </div>
      <AddForm />
    </section>
  );
};
export default Container;
