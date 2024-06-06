import { useTranslation } from "react-i18next";
const CardProductV2 = () => {
  const { t } = useTranslation();
  return (
    <div className="col">
      <div className="card card-product">
        <div className="card-body">
          <div className="text-center  position-relative ">
            {" "}
            <a href="#!">
              <img
                src="assets/images/products/product-img-11.jpg"
                alt="Grocery Ecommerce Template"
                className="mb-3 img-fluid"
              />
            </a>
            <div className="card-product-action">
              <a
                href="#!"
                className="btn-action"
                data-bs-toggle="modal"
                data-bs-target="#quickViewModal"
                title="Quick View"
              >
                <i className="bi bi-eye"></i>
              </a>
              <a
                href="#!"
                className="btn-action"
                data-bs-toggle="tooltip"
                data-bs-html="true"
                title="Wishlist"
              >
                <i className="bi bi-heart"></i>
              </a>
              <a
                href="#!"
                className="btn-action"
                data-bs-toggle="tooltip"
                data-bs-html="true"
                title="Compare"
              >
                <i className="bi bi-arrow-left-right"></i>
              </a>
            </div>
          </div>
          <div className="text-small mb-1">
            <a href="#!" className="text-decoration-none text-muted">
              <small>Tea, Coffee & Drinks</small>
            </a>
          </div>
          <h2 className="fs-6">
            <a href="#!" className="text-inherit text-decoration-none">
              Roast Ground Coffee
            </a>
          </h2>

          <div className="d-flex justify-content-between align-items-center mt-3">
            <div>
              <span className="text-dark">$13</span>{" "}
              <span className="text-decoration-line-through text-muted">
                $18
              </span>
            </div>
            <div>
              <small className="text-warning">
                {" "}
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-half"></i>
              </small>
              <span>
                <small>4.5</small>
              </span>
            </div>
          </div>
          <div className="d-grid mt-2">
            <a href="#!" className="btn btn-primary ">
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
                className="feather feather-plus"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>{" "}
              {t("Add to cart")}{" "}
            </a>
          </div>
          <div className="d-flex justify-content-start text-center mt-3">
            <div
              className="deals-countdown w-100"
              data-countdown="2022/10/10 00:00:00"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardProductV2;
