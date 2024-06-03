import Item from "./Item";
const Container = () => {
  return (
    <section className="mb-lg-14 mb-8 mt-8">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card py-1 border-0 mb-8">
              <div>
                <h1 className="fw-bold">Shop Cart</h1>
                <p className="mb-0">Shopping in 382480</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8 col-md-7">
            <div className="py-3">
              <div className="alert alert-danger p-2" role="alert">
                You’ve got FREE delivery. Start
                <a href="#!" className="alert-link">
                  checkout now!
                </a>
              </div>
              <ul className="list-group list-group-flush">
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
              </ul>

              <div className="d-flex justify-content-between mt-4">
                <a href="#!" className="btn btn-primary">
                  Continue Shopping
                </a>
                <a href="#!" className="btn btn-dark">
                  Update Cart
                </a>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-4 col-md-5">
            <div className="mb-5 card mt-6">
              <div className="card-body p-6">
                <h2 className="h5 mb-4">Summary</h2>
                <div className="card mb-2">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                      <div className="me-auto">
                        <div>Item Subtotal</div>
                      </div>
                      <span>$70.00</span>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-start">
                      <div className="me-auto">
                        <div>Service Fee</div>
                      </div>
                      <span>$3.00</span>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-start">
                      <div className="me-auto">
                        <div className="fw-bold">Subtotal</div>
                      </div>
                      <span className="fw-bold">$67.00</span>
                    </li>
                  </ul>
                </div>
                <div className="d-grid mb-1 mt-4">
                  <button
                    className="btn btn-primary btn-lg d-flex justify-content-between align-items-center"
                    type="submit"
                  >
                    Go to Checkout <span className="fw-bold">$67.00</span>
                  </button>
                </div>

                <p>
                  <small>
                    By placing your order, you agree to be bound by the
                    Freshcart <a href="#!">Terms of Service</a> and
                    <a href="#!">Privacy Policy.</a>
                  </small>
                </p>

                <div className="mt-8">
                  <h2 className="h5 mb-3">Add Promo or Gift Card</h2>
                  <form>
                    <div className="mb-2">
                      <label for="giftcard" className="form-label sr-only">
                        Email address
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="giftcard"
                        placeholder="Promo or Gift Card"
                      />
                    </div>

                    <div className="d-grid">
                      <button
                        type="submit"
                        className="btn btn-outline-dark mb-1"
                      >
                        Redeem
                      </button>
                    </div>
                    <p className="text-muted mb-0">
                      <small>Terms & Conditions apply</small>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Container;
