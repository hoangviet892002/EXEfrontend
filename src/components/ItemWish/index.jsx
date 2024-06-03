import { useDispatch } from "react-redux";
import { removeWish } from "../../redux/actions/wishAction";

const ItemWish = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <>
      <tr>
        <td className="align-middle">
          <a href="#">
            <img
              src={product.thumbnail}
              className="img-fluid icon-shape icon-xxl"
              alt=""
            />
          </a>
        </td>
        <td className="align-middle">
          <div>
            <h5 className="fs-6 mb-0">
              <a href="#" className="text-inherit">
                {product.productName}
              </a>
            </h5>
          </div>
        </td>
        <td className="align-middle">${product.price}</td>

        <td className="align-middle">
          <div className="btn btn-primary btn-sm">Add to Cart</div>
        </td>
        <td className="align-middle text-center">
          <a
            href="#"
            className="text-muted"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Delete"
            onClick={(e) => {
              e.preventDefault();
              dispatch(removeWish(product.id));
            }}
          >
            <i className="feather-icon icon-trash-2"></i>
          </a>
        </td>
      </tr>
    </>
  );
};
export default ItemWish;
