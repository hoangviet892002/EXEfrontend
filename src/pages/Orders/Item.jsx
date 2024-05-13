import { Link } from "react-router-dom";

const Item = () => {
  return (
    <tr>
      <td>
        <a href="apps-ecommerce-orders-details.html" class="text-body fw-bold">
          #BM9708
        </a>
      </td>
      <td>
        August 05 2018
        <small class="text-muted">10:29 PM</small>
      </td>
      <td class="align-middle border-top-0">
        <span class="badge bg-warning">Processing</span>
      </td>
      <td>$176.41</td>
      <td>Mastercard</td>
      <td>
        <h5>
          <span class="badge badge-info-lighten">Shipped</span>
        </h5>
      </td>
      <td class="text-muted align-middle border-top-0">
        <Link to="id" class="text-inherit">
          <i class="feather-icon icon-eye"></i>
        </Link>
      </td>
    </tr>
  );
};
export default Item;
