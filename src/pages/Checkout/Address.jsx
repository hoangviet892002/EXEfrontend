import AddForm from "../address/AddForm";
import ItemAddress from "./ItemAddress";

const Address = () => {
  return (
    <div class="accordion-item py-4">
      <div class="d-flex justify-content-between align-items-center">
        <a
          href="#"
          class="fs-5 text-inherit collapsed h4"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseOne"
          aria-expanded="true"
          aria-controls="flush-collapseOne"
        >
          <i class="feather-icon icon-map-pin me-2 text-muted"></i>
          Add delivery address
        </a>

        <a
          href="#"
          class="btn btn-outline-primary btn-sm"
          data-bs-toggle="modal"
          data-bs-target="#addAddressModal"
        >
          Add a new address
        </a>
      </div>
      <div
        id="flush-collapseOne"
        class="accordion-collapse collapse show"
        data-bs-parent="#accordionFlushExample"
      >
        <div class="mt-5">
          <div class="row">
            <ItemAddress />
            <ItemAddress />
            <ItemAddress />
            <ItemAddress />
          </div>
        </div>
        <div class="mt-5 d-flex justify-content-end">
          <a
            href="#"
            class="btn btn-primary ms-2"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
          >
            Next
          </a>
        </div>
      </div>
      <AddForm />
    </div>
  );
};
export default Address;
