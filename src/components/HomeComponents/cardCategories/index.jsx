import { Link } from "react-router-dom";

const CardCategories = ({ category }) => {
  return (
    <div className="col-lg-2 col-md-4 col-6">
      <div className="text-center mb-10">
        <img
          src={category.imgUrl}
          alt=""
          className="card-image rounded-circle w-50 h-100"
        />

        <div className="mt-4">
          <h5 className="fs-6 mb-0">
            <a href="shop-grid.html" className="text-inherit">
              {category.name}
            </a>
          </h5>
        </div>
      </div>
    </div>
  );
};
export default CardCategories;
