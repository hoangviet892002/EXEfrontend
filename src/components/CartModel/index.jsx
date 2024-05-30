import { useNavigate } from "react-router-dom";
import Item from "./Item";
import useHook from "./hooks/useHook";

const ShopCart = () => {
  const navigate = useNavigate();
  const { listCart, handleClearCart, totalAmount } = useHook();
  return (
    <>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header border-bottom">
          <div class="text-start">
            <h5 class="mb-0 fs-4">Shop Cart</h5>
          </div>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div class="alert alert-danger" role="alert">
            You’ve got FREE delivery. Start checkout now!
          </div>
          <button
            type="button"
            class="btn btn-primary mb-2"
            onClick={(e) => {
              e.preventDefault();
              handleClearCart();
            }}
          >
            Clear
          </button>

          <div>
            <div class="py-3">
              <ul class="list-group list-group-flush">
                {listCart.map((item) => (
                  <Item item={item} />
                ))}
              </ul>
            </div>
            <div class="d-grid">
              <button
                class="btn btn-primary btn-lg d-flex justify-content-between align-items-center"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/check-out");
                }}
                data-bs-dismiss="offcanvas"
              >
                Go to Checkout <span class="fw-bold">${totalAmount}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ShopCart;
