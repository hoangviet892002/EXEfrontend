import { useNavigate } from "react-router-dom";
import Item from "./Item";

const ShopCart = () => {
  const navigate = useNavigate();
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
            <h5 id="offcanvasRightLabel" class="mb-0 fs-4">
              Shop Cart
            </h5>
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

          <div>
            <div class="py-3">
              <ul class="list-group list-group-flush">
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
              </ul>
            </div>
            <div class="d-grid">
              <button
                class="btn btn-primary btn-lg d-flex justify-content-between align-items-center"
                onClick={() => navigate("/check-out")}
              >
                Go to Checkout <span class="fw-bold">$120.00</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ShopCart;
