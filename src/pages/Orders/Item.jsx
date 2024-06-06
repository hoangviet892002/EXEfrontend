import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Item = () => {
  const { t } = useTranslation();
  return (
    <tr>
      <td>
        <a
          href="apps-ecommerce-orders-details.html"
          className="text-body fw-bold"
        >
          #BM9708
        </a>
      </td>
      <td>
        August 05 2018
        <small className="text-muted">10:29 PM</small>
      </td>
      <td className="align-middle border-top-0">
        <span className="badge bg-warning">Processing</span>
      </td>
      <td>$176.41</td>
      <td>Mastercard</td>
      <td>
        <h5>
          <span className="badge badge-info-lighten">Shipped</span>
        </h5>
      </td>
      <td className="text-muted align-middle border-top-0">
        <Link to="id" className="text-inherit">
          <i className="feather-icon icon-eye"></i>
        </Link>
      </td>
    </tr>
  );
};
export default Item;
