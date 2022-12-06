import React from "react";

const ConfirmationModal = ({ title, closeModal, hadnleDelete, modalData }) => {
  return (
    <div>
      <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <label onClick={() => hadnleDelete(modalData)} htmlFor="confirmation-modal" className="btn btn-primary">
              Delete
            </label>
            <button onClick={closeModal} className="btn">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
