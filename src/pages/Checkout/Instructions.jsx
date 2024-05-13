const Instructions = () => {
  return (
    <div class="accordion-item py-4">
      <a
        href="#"
        class="text-inherit h5"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapseThree"
        aria-expanded="false"
        aria-controls="flush-collapseThree"
      >
        <i class="feather-icon icon-shopping-bag me-2 text-muted"></i>
        Delivery instructions
      </a>
      <div
        id="flush-collapseThree"
        class="accordion-collapse collapse"
        data-bs-parent="#accordionFlushExample"
      >
        <div class="mt-5">
          <label for="DeliveryInstructions" class="form-label sr-only">
            Delivery instructions
          </label>
          <textarea
            class="form-control"
            id="DeliveryInstructions"
            rows="3"
            placeholder="Write delivery instructions "
          ></textarea>
          <p class="form-text">
            Add instructions for how you want your order shopped and/or
            delivered
          </p>
          <div class="mt-5 d-flex justify-content-end">
            <a
              href="#"
              class="btn btn-outline-gray-400 text-muted"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Prev
            </a>
            <a
              href="#"
              class="btn btn-primary ms-2"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
            >
              Next
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Instructions;
