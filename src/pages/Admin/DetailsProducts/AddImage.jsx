import React, { useState } from "react";
import useHook from "./hooks/useHook";
import { useTranslation } from "react-i18next";

const AddImage = () => {
  const { t } = useTranslation();
  const [img, setImage] = useState("");
  const { addImage, loading } = useHook();
  const submit = (e) => {
    e.preventDefault();
    addImage(img);
  };
  return (
    <div
      className="modal fade"
      id="addImage"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="input-group">
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="form-control"
              id="inputGroupFile04"
              aria-describedby="inputGroupFileAddon04"
              aria-label="Upload"
              required
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              {t("Close")} {/* Translate Close button */}
            </button>
            {loading ? (
              <button className="btn btn-primary" type="button" disabled>
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                {t("Loading...")} {/* Translate Loading text */}
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-primary"
                onClick={submit}
              >
                {t("Add Image")} {/* Translate Add Image button */}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddImage;
