const ItemAddress = () => {
  return (
    <div className="col-lg-6 col-12 mb-4">
      <div className="border p-6 rounded-3">
        <div className="form-check mb-4">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="homeRadio"
            checked
          />
          <label className="form-check-label text-dark" for="homeRadio">
            Home
          </label>
        </div>

        <address>
          <strong>Jitu Chauhan</strong> <br />
          4450 North Avenue Oakland, <br />
          Nebraska, United States,
          <br />
          <abbr title="Phone">P: 402-776-1106</abbr>
        </address>
        <span className="text-danger">Default address </span>
      </div>
    </div>
  );
};
export default ItemAddress;
