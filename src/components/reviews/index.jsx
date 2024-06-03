const reviews = () => {
  return (
    <div className="d-flex border-bottom pb-6 mb-6">
      <img
        src="../assets/images/avatar/avatar-10.jpg"
        alt=""
        className="rounded-circle avatar-lg"
      />
      <div className="ms-5">
        <h6 className="mb-1">Shankar Subbaraman</h6>

        <p className="small">
          <span className="text-muted">30 December 2022</span>
          <span className="text-primary ms-3 fw-bold">Verified Purchase</span>
        </p>

        <div className="mb-2">
          <i className="bi bi-star-fill text-warning"></i>
          <i className="bi bi-star-fill text-warning"></i>
          <i className="bi bi-star-fill text-warning"></i>
          <i className="bi bi-star-fill text-warning"></i>
          <i className="bi bi-star-fill text-warning"></i>
          <span className="ms-3 text-dark fw-bold">
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
          <div className="border rounded-3 icon-shape icon-lg border-2">
            <img
              src="../assets/images/products/product-img-1.jpg"
              alt=""
              className="img-fluid rounded-3"
            />
          </div>
          <div className="border rounded-3 icon-shape icon-lg border-2 ms-1">
            <img
              src="../assets/images/products/product-img-2.jpg"
              alt=""
              className="img-fluid rounded-3"
            />
          </div>
          <div className="border rounded-3 icon-shape icon-lg border-2 ms-1">
            <img
              src="../assets/images/products/product-img-3.jpg"
              alt=""
              className="img-fluid rounded-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default reviews;
