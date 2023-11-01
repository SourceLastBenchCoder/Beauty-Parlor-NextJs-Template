import React from 'react';

const ConfirmationModal = ({ isOpen, onCancel, onConfirm }) => {
  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 ${isOpen ? 'visible' : 'invisible'}`}>
      <div className="modal-container">
        <div className="modal-content bg-black p-6 rounded shadow-lg text-center">
          <p className="text-xl mb-4">Are you sure you want to delete this item?</p>
          <div className="flex justify-center">
            <button onClick={onCancel} className="mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Cancel</button>
            <button onClick={onConfirm} className="mx-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
