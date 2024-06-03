import Item from "./Item";
const Container = () => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="page-title-box">
            <h4 className="page-title">Orders</h4>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="row mb-2">
                <div className="col-xl-8">
                  <form className="row gy-2 gx-2 align-items-center justify-content-xl-start justify-content-between">
                    <div className="col-auto">
                      <label for="inputPassword2" className="visually-hidden">
                        Search
                      </label>
                      <input
                        type="search"
                        className="form-control"
                        id="inputPassword2"
                        placeholder="Search..."
                      />
                    </div>
                    <div className="col-auto">
                      <div className="d-flex align-items-center">
                        <label for="status-select" className="me-2">
                          Status
                        </label>
                        <select className="form-select" id="status-select">
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

              <div className="table-responsive">
                <table className="table table-centered table-nowrap mb-0">
                  <thead className="table-light">
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
