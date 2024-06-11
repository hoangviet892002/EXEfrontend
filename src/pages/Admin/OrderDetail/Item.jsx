const Item = ({ item }) => {
  return (
    <tr>
      <td className="align-middle border-top-0 w-0">
        <a href="#">
          <img
            src={item.productResponse.thumbnail}
            alt="Ecommerce"
            className="icon-shape icon-xl"
          />
        </a>
      </td>
      <td className="align-middle border-top-0">
        <a href="#" className="fw-semi-bold text-inherit">
          <h6 className="mb-0">{item.productResponse.productName}</h6>
        </a>
        <span>
          <small className="text-muted">200g</small>
        </span>
      </td>

      <td className="align-middle border-top-0">{item.quantity}</td>

      <td className="align-middle border-top-0">
        {item.quantity * item.productResponse.cost}
      </td>
    </tr>
  );
};
export default Item;
