import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Item = ({ order }) => {
  const { t } = useTranslation();
  return (
    <tr>
      <td>
        <a
          href="apps-ecommerce-orders-details.html"
          className="text-body fw-bold"
        >
          #{order.id}
        </a>
      </td>{" "}
      <td>{order.fullName}</td>
      <td>
        {order.createdAt}
        <small className="text-muted">{order.timeOrder}</small>
      </td>
      <td className="align-middle border-top-0">
        {order.paymentStatus === "PENDING" && (
          <span className="badge bg-primary">PENDING</span>
        )}
        {order.paymentStatus === "CANCELLED" && (
          <span className="badge bg-danger">CANCELLED</span>
        )}
        {order.paymentStatus === "CONFIRMED" && (
          <span className="badge bg-success">CONFIRMED</span>
        )}
      </td>
      <td>{order.subTotal}</td>
      <td>{order.paymentMethod}</td>
      <td>
        <h5>
          {order.orderStatus === "PENDING" && (
            <span className="badge bg-primary">PENDING</span>
          )}
          {order.orderStatus === "PACKED" && (
            <span className="badge bg-primary">PACKED</span>
          )}
          {order.orderStatus === "SHIPPING" && (
            <span className="badge bg-primary">SHIPPING</span>
          )}
          {order.orderStatus === "RETURN" && (
            <span className="badge bg-primary">RETURN</span>
          )}
          {order.orderStatus === "CANCEL" && (
            <span className="badge bg-primary">CANCEL</span>
          )}
        </h5>
      </td>
      <td className="text-muted align-middle border-top-0">
        <Link to={`${order.id}`} className="text-inherit">
          <i className="feather-icon icon-eye"></i>
        </Link>
      </td>
    </tr>
  );
};
export default Item;
