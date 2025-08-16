import React from "react";

const ErrorModal = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center rounded-b-md bg-black bg-opacity-50 z-50 px-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6 text-center animate-fadeIn">
        {/* Error Icon */}
        <div className="flex justify-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-red-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l6.518 11.59c.75 1.335-.213 2.986-1.743 2.986H3.482c-1.53 0-2.493-1.65-1.743-2.986l6.518-11.59zM11 14a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v4a1 1 0 102 0V7a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {/* Message */}
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Error</h2>
        <p className="text-gray-600">{message}</p>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition-all"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ErrorModal;
