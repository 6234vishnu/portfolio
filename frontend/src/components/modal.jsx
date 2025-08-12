import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Modal = ({ pdfUrl, onClose }) => {
  useEffect(() => {
    AOS.init({ duration: 600 }); // animation duration in ms
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4"
      data-aos="fade-in"
    >
      <div
        className="bg-white w-full max-w-3xl max-h-[90vh] rounded-lg overflow-hidden shadow-lg relative flex flex-col"
        data-aos="zoom-in"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{ backgroundColor: "white" }}
          className="absolute top-5 right-5 bg-white text-black font-bold text-2xl p-2 rounded-full z-10 hover:bg-gray-200 transition"
        >
          &times;
        </button>

        {/* PDF Container */}
        <div className="w-full h-[80vh] overflow-y-auto mt-10">
          <iframe
            src={pdfUrl}
            title="PDF Viewer"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Modal;
