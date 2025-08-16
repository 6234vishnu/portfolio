import React from "react";

const SuccessModal = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center rounded-b-md bg-black bg-opacity-50 z-50 px-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6 text-center animate-fadeIn">
        {/* Success Icon */}
        <div className="flex justify-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-green-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414L8.414 15 5.293 11.879a1 1 0 111.414-1.414L8.414 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {/* Message */}
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Success!</h2>
        <p className="text-gray-600">{message}</p>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-all"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
