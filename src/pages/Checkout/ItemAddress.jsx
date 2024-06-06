import { useDispatch, useSelector } from "react-redux";
import { pickAddress } from "../../redux/actions/checkoutAction";

const ItemAddress = ({ address }) => {
  console.log(address);
  const dispatch = useDispatch();
  const isDefault = address.defaultAddress;
  const pickAddres = useSelector((state) => state.checkout.address);
  let isPick = pickAddres?.id === address.id;
  return (
    <div className="col-lg-6 col-12 mb-4">
      <div className="border p-6 rounded-3">
        <div className="form-check mb-4">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="homeRadio"
            checked={isPick}
            onChange={() => dispatch(pickAddress(address))}
          />
        </div>

        <address>
          <strong>
            {address.firstName} {address.lastName}
          </strong>{" "}
          <br />
          {address.streetAddress}, {address.wardName} <br />
          {address.districtName},{address.provinceName},
          <br />
          {address.phoneNumber}
          <abbr title="Phone">P: 402-776-1106</abbr>
        </address>
        {isDefault && <span className="text-danger">Default address </span>}
      </div>
    </div>
  );
};
export default ItemAddress;
