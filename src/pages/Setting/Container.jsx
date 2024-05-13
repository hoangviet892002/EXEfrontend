import { SideBarCus } from "../../components";

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
              <div class="mb-6">
                <h2 class="mb-0">Account Setting</h2>
              </div>
              <div>
                <h5 class="mb-4">Account details</h5>
                <div class="row">
                  <div class="col-lg-5">
                    <form>
                      <div class="mb-3">
                        <label class="form-label">Name</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Name"
                        />
                      </div>

                      <div class="mb-3">
                        <label class="form-label">Email</label>
                        <input
                          type="email"
                          class="form-control"
                          placeholder="example@gmail.com"
                        />
                      </div>

                      <div class="mb-5">
                        <label class="form-label">Phone</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Phone number"
                        />
                      </div>

                      <div class="mb-3">
                        <button class="btn btn-primary">Save Details</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <hr class="my-10" />
              <div class="pe-lg-14">
                <h5 class="mb-4">Password</h5>
                <form class="row row-cols-1 row-cols-lg-2">
                  <div class="mb-3 col">
                    <label class="form-label">New Password</label>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="**********"
                    />
                  </div>

                  <div class="mb-3 col">
                    <label class="form-label">Current Password</label>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="**********"
                    />
                  </div>
                </form>
              </div>
              <hr class="my-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Container;
