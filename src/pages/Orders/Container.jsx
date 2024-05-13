import Item from "./Item";
const Container = () => {
  return (
    <>
      <div class="row">
        <div class="col-12">
          <div class="page-title-box">
            <h4 class="page-title">Orders</h4>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <div class="row mb-2">
                <div class="col-xl-8">
                  <form class="row gy-2 gx-2 align-items-center justify-content-xl-start justify-content-between">
                    <div class="col-auto">
                      <label for="inputPassword2" class="visually-hidden">
                        Search
                      </label>
                      <input
                        type="search"
                        class="form-control"
                        id="inputPassword2"
                        placeholder="Search..."
                      />
                    </div>
                    <div class="col-auto">
                      <div class="d-flex align-items-center">
                        <label for="status-select" class="me-2">
                          Status
                        </label>
                        <select class="form-select" id="status-select">
                          <option selected>Choose...</option>
                          <option value="1">Paid</option>
                          <option value="2">Awaiting Authorization</option>
                          <option value="3">Payment failed</option>
                          <option value="4">Cash On Delivery</option>
                          <option value="5">Fulfilled</option>
                          <option value="6">Unfulfilled</option>
                        </select>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div class="table-responsive">
                <table class="table table-centered table-nowrap mb-0">
                  <thead class="table-light">
                    <tr>
                      <th>Order ID</th>
                      <th>Date</th>
                      <th>Payment Status</th>
                      <th>Total</th>
                      <th>Payment Method</th>
                      <th>Order Status</th>
                      <th style={{ width: "125px" }}>Action</th>
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
    </>
  );
};
export default Container;
