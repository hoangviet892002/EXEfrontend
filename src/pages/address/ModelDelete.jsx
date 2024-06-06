import { useEffect, useState } from "react";
import useHook from "./hooks/useHook";
import { useSelector } from "react-redux";

const ModelDelete = () => {
  const address = useSelector((state) => state.address.address);
  const { deleteAddress, loading } = useHook();
  return (
    <div
      className="modal fade"
      id="deleteModal"
      tabIndex="-1"
      aria-labelledby="deleteModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="deleteModalLabel">
              Delete address
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body">
            <h6>Are you sure you want to delete this address?</h6>
            <p className="mb-6">
              {address.firstName} {address.lastName}
              <br />
              {address.wardName} <br />
              {address.districtName}, {address.provinceName},
              <br />
              {address.phoneNumber}
            </p>
          </div>

          <div className="modal-footer">
            {loading ? (
              <>
                <button type="button" className="btn btn-danger" disabled>
                  Deleting...
                </button>
              </>
            ) : (
              <>
                <button type="button" className="btn btn-outline-gray-400">
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                  onClick={(e) => {
                    e.preventDefault();
                    deleteAddress(address.id);
                  }}
                >
                  Delete
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelDelete;
