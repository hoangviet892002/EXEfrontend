import { useDispatch } from "react-redux";
import { removeWish } from "../../redux/actions/wishAction";

const ItemWish = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <>
      <tr>
        <td class="align-middle">
          <a href="#">
            <img
              src={product.thumbnail}
              class="img-fluid icon-shape icon-xxl"
              alt=""
            />
          </a>
        </td>
        <td class="align-middle">
          <div>
            <h5 class="fs-6 mb-0">
              <a href="#" class="text-inherit">
                {product.productName}
              </a>
            </h5>
          </div>
        </td>
        <td class="align-middle">${product.price}</td>

        <td class="align-middle">
          <div class="btn btn-primary btn-sm">Add to Cart</div>
        </td>
        <td class="align-middle text-center">
          <a
            href="#"
            class="text-muted"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Delete"
            onClick={(e) => {
              e.preventDefault();
              dispatch(removeWish(product.id));
            }}
          >
            <i class="feather-icon icon-trash-2"></i>
          </a>
        </td>
      </tr>
    </>
  );
};
export default ItemWish;
