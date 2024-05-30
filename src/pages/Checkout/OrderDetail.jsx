import Product from "./Product";
import useHook from "./hooks/useHook";

const OrderDetail = () => {
  const { listCart, totalAmount } = useHook();
  return (
    <div class="col-12 col-md-12 offset-lg-1 col-lg-4">
      <div class="mt-4 mt-lg-0">
        <div class="card shadow-sm">
          <h5 class="px-6 py-4 bg-transparent mb-0">Order Details</h5>
          <ul class="list-group list-group-flush">
            {listCart.map((item) => (
              <Product item={item} />
            ))}

            {/* <li class="list-group-item px-4 py-3">
              <div class="d-flex align-items-center justify-content-between mb-2">
                <div>Item Subtotal</div>
                <div class="fw-bold">$70.00</div>
              </div>
              <div class="d-flex align-items-center justify-content-between">
                <div>
                  Service Fee
                  <i
                    class="feather-icon icon-info text-muted"
                    data-bs-toggle="tooltip"
                    title="Default tooltip"
                  ></i>
                </div>
                <div class="fw-bold">$3.00</div>
              </div>
            </li> */}

            <li class="list-group-item px-4 py-3">
              <div class="d-flex align-items-center justify-content-between fw-bold">
                <div>Subtotal</div>
                <div>${totalAmount}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default OrderDetail;
