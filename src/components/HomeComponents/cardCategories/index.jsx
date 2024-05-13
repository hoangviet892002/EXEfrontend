import { Link } from "react-router-dom";

const CardCategories = () => {
  return (
    <div class="col-lg-2 col-md-4 col-6">
      <div class="text-center mb-10">
        <Link to="shop">
          <img
            src="../assets/images/category/atta-rice-dal.png"
            alt=""
            class="card-image rounded-circle"
          />
        </Link>

        <div class="mt-4">
          <h5 class="fs-6 mb-0">
            <a href="shop-grid.html" class="text-inherit">
              Atta, Rice & Dal
            </a>
          </h5>
        </div>
      </div>
    </div>
  );
};
export default CardCategories;
