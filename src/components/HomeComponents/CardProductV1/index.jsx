import { useNavigate } from "react-router-dom";

const CardProduct = () => {
  const navigate = useNavigate();

  return (
    <div class="col">
      <div class="card card-product-v2 h-100">
        <div class="card-body position-relative">
          <div class="text-center position-relative">
            <a
              onClick={() => {
                navigate("/shop/id");
              }}
            >
              <img
                src="../assets/images/products/product-img-6.jpg"
                alt="Grocery Ecommerce Template"
                class="mb-3 img-fluid"
              />
            </a>

            <div class="product-action-btn">
              <a
                href="#!"
                class="btn-action mb-1"
                data-bs-toggle="modal"
                data-bs-target="#quickViewModal"
              >
                <i class="bi bi-eye"></i>
              </a>
              <a
                href="#!"
                class="btn-action mb-1"
                data-bs-toggle="tooltip"
                data-bs-html="true"
                title="Wishlist"
              >
                <i class="bi bi-heart"></i>
              </a>
              <a
                href="#!"
                class="btn-action"
                data-bs-toggle="tooltip"
                data-bs-html="true"
                title="Compare"
              >
                <i class="bi bi-arrow-left-right"></i>
              </a>
            </div>
          </div>

          <h2 class="fs-6">
            <a href="#!" class="text-inherit text-decoration-none">
              Epigamia Blueberry Greek Yogurt, 90g
            </a>
          </h2>
          <div>
            <small class="text-warning">
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-half"></i>
            </small>
            <span class="text-muted small">4.4(694)</span>
          </div>

          <div class="d-flex justify-content-between align-items-center mt-3">
            <div>
              <span class="text-dark">$17</span>
            </div>
            <div>
              <span class="text-uppercase small text-primary">In Stock</span>
            </div>
          </div>

          <div class="product-fade-block">
            <div class="d-grid mt-4">
              <a href="#" class="btn btn-primary rounded-pill">
                Add to Cart
              </a>
            </div>
          </div>
        </div>

        <div
          class="product-content-fade border-info"
          style={{ marginBottom: "-60px" }}
        ></div>
      </div>
    </div>
  );
};
export default CardProduct;
