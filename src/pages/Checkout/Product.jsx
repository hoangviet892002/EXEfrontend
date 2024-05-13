const Product = () => {
  return (
    <li class="list-group-item px-4 py-3">
      <div class="row align-items-center">
        <div class="col-2 col-md-2">
          <img
            src="../assets/images/products/product-img-1.jpg"
            alt="Ecommerce"
            class="img-fluid"
          />
        </div>
        <div class="col-5 col-md-5">
          <h6 class="mb-0">Haldiram's Sev Bhujia</h6>
          <span>
            <small class="text-muted">.98 / lb</small>
          </span>
        </div>
        <div class="col-2 col-md-2 text-center text-muted">
          <span>1</span>
        </div>
        <div class="col-3 text-lg-end text-start text-md-end col-md-3">
          <span class="fw-bold">$5.00</span>
        </div>
      </div>
    </li>
  );
};
export default Product;
