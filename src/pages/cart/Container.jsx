import Item from "./Item";
const Container = () => {
  return (
    <section class="mb-lg-14 mb-8 mt-8">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="card py-1 border-0 mb-8">
              <div>
                <h1 class="fw-bold">Shop Cart</h1>
                <p class="mb-0">Shopping in 382480</p>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-8 col-md-7">
            <div class="py-3">
              <div class="alert alert-danger p-2" role="alert">
                You’ve got FREE delivery. Start
                <a href="#!" class="alert-link">
                  checkout now!
                </a>
              </div>
              <ul class="list-group list-group-flush">
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
              </ul>

              <div class="d-flex justify-content-between mt-4">
                <a href="#!" class="btn btn-primary">
                  Continue Shopping
                </a>
                <a href="#!" class="btn btn-dark">
                  Update Cart
                </a>
              </div>
            </div>
          </div>

          <div class="col-12 col-lg-4 col-md-5">
            <div class="mb-5 card mt-6">
              <div class="card-body p-6">
                <h2 class="h5 mb-4">Summary</h2>
                <div class="card mb-2">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item d-flex justify-content-between align-items-start">
                      <div class="me-auto">
                        <div>Item Subtotal</div>
                      </div>
                      <span>$70.00</span>
                    </li>

                    <li class="list-group-item d-flex justify-content-between align-items-start">
                      <div class="me-auto">
                        <div>Service Fee</div>
                      </div>
                      <span>$3.00</span>
                    </li>

                    <li class="list-group-item d-flex justify-content-between align-items-start">
                      <div class="me-auto">
                        <div class="fw-bold">Subtotal</div>
                      </div>
                      <span class="fw-bold">$67.00</span>
                    </li>
                  </ul>
                </div>
                <div class="d-grid mb-1 mt-4">
                  <button
                    class="btn btn-primary btn-lg d-flex justify-content-between align-items-center"
                    type="submit"
                  >
                    Go to Checkout <span class="fw-bold">$67.00</span>
                  </button>
                </div>

                <p>
                  <small>
                    By placing your order, you agree to be bound by the
                    Freshcart <a href="#!">Terms of Service</a> and
                    <a href="#!">Privacy Policy.</a>
                  </small>
                </p>

                <div class="mt-8">
                  <h2 class="h5 mb-3">Add Promo or Gift Card</h2>
                  <form>
                    <div class="mb-2">
                      <label for="giftcard" class="form-label sr-only">
                        Email address
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="giftcard"
                        placeholder="Promo or Gift Card"
                      />
                    </div>

                    <div class="d-grid">
                      <button type="submit" class="btn btn-outline-dark mb-1">
                        Redeem
                      </button>
                    </div>
                    <p class="text-muted mb-0">
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
