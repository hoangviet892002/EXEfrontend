const reviews = () => {
  return (
    <div class="d-flex border-bottom pb-6 mb-6">
      <img
        src="../assets/images/avatar/avatar-10.jpg"
        alt=""
        class="rounded-circle avatar-lg"
      />
      <div class="ms-5">
        <h6 class="mb-1">Shankar Subbaraman</h6>

        <p class="small">
          <span class="text-muted">30 December 2022</span>
          <span class="text-primary ms-3 fw-bold">Verified Purchase</span>
        </p>

        <div class="mb-2">
          <i class="bi bi-star-fill text-warning"></i>
          <i class="bi bi-star-fill text-warning"></i>
          <i class="bi bi-star-fill text-warning"></i>
          <i class="bi bi-star-fill text-warning"></i>
          <i class="bi bi-star-fill text-warning"></i>
          <span class="ms-3 text-dark fw-bold">
            Need to recheck the weight at delivery point
          </span>
        </div>

        <p>
          Product quality is good. But, weight seemed less than 1kg. Since it is
          being sent in open package, there is a possibility of pilferage in
          between. FreshCart sends the veggies and fruits through sealed plastic
          covers and Barcode on the weight etc. .
        </p>
        <div>
          <div class="border rounded-3 icon-shape icon-lg border-2">
            <img
              src="../assets/images/products/product-img-1.jpg"
              alt=""
              class="img-fluid rounded-3"
            />
          </div>
          <div class="border rounded-3 icon-shape icon-lg border-2 ms-1">
            <img
              src="../assets/images/products/product-img-2.jpg"
              alt=""
              class="img-fluid rounded-3"
            />
          </div>
          <div class="border rounded-3 icon-shape icon-lg border-2 ms-1">
            <img
              src="../assets/images/products/product-img-3.jpg"
              alt=""
              class="img-fluid rounded-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default reviews;
