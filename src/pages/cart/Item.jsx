const Item = () => {
  return (
    <li className="list-group-item py-3 py-lg-0 px-0 ">
      <div className="row align-items-center">
        <div className="col-3 col-md-2">
          <img
            src="../assets/images/products/product-img-1.jpg"
            alt="Ecommerce"
            className="img-fluid"
          />
        </div>
        <div className="col-4 col-md-6">
          <h6 className="mb-0">Haldiram's Sev Bhujia</h6>
          <span>
            <small className="text-muted">.98 / lb</small>
          </span>

          <div className="mt-2 small">
            <a href="#!" className="text-decoration-none text-inherit">
              <span className="me-1 align-text-bottom">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-trash-2 text-success"
                >
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  <line x1="10" y1="11" x2="10" y2="17"></line>
                  <line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>
              </span>
              <span className="text-muted">Remove</span>
            </a>
          </div>
        </div>

        <div className="col-3 col-md-3 col-lg-2">
          <div className="input-group flex-nowrap justify-content-center">
            <input
              type="button"
              value="-"
              className="button-minus form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0"
              data-field="quantity"
            />
            <input
              type="number"
              step="1"
              max="10"
              value="1"
              name="quantity"
              className="quantity-field form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0"
            />
            <input
              type="button"
              value="+"
              className="button-plus form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0"
              data-field="quantity"
            />
          </div>
        </div>

        <div className="col-2 text-lg-end text-start text-md-end col-md-2">
          <span className="fw-bold">$5.00</span>
        </div>
      </div>
    </li>
  );
};
export default Item;
