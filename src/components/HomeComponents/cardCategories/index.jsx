import { Link } from "react-router-dom";

const CardCategories = ({ category }) => {
  return (
    <div class="col-lg-2 col-md-4 col-6">
      <div class="text-center mb-10">
        <img
          src={category.imgUrl}
          alt=""
          class="card-image rounded-circle w-50 h-100"
        />

        <div class="mt-4">
          <h5 class="fs-6 mb-0">
            <a href="shop-grid.html" class="text-inherit">
              {category.name}
            </a>
          </h5>
        </div>
      </div>
    </div>
  );
};
export default CardCategories;
