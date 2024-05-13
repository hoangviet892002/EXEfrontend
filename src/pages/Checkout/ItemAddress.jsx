const ItemAddress = () => {
  return (
    <div class="col-lg-6 col-12 mb-4">
      <div class="border p-6 rounded-3">
        <div class="form-check mb-4">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="homeRadio"
            checked
          />
          <label class="form-check-label text-dark" for="homeRadio">
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
        <span class="text-danger">Default address </span>
      </div>
    </div>
  );
};
export default ItemAddress;
