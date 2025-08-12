import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Modal from "./modal";

const ExpirenceAndCertificates = () => {
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const education = [
    {
      image: "",
      center: "Brototype",
      duration: "8 months",
      type: "Bootcamp",
    },
    {
      image: "",
      center: "Unified mentor",
      duration: "3 months",
      type: "Internship",
      certificates: "/pdf/Unified Mentor Certificate.pdf",
    },
  ];

  return (
    <>
      <div
        className="bg-white text-black flex flex-col md:flex-row p-10 justify-center gap-10"
        data-aos="fade-up"
      >
        <div data-aos="fade-right">
          <h2 className="font-extrabold">My Resume</h2>
          <p className="text-gray-600 text-sm p-5 max-w-lg">
            Passionate Web Developer with hands-on experience in building
            responsive and user-friendly websites using the MERN stack.
            Completed an intensive 8-month bootcamp at Brototype and a 3-month
            internship at Unified Mentor PVLTD, gaining practical experience in
            real-world projects and team collaboration.
          </p>
          <button
            onClick={() => setModalImage("/pdf/Vishnu_Anil_Resume.pdf")}
            className="text-white bg-black rounded-[25px] px-4 py-2 hover:bg-white hover:text-gray-400 border border-black transition duration-300"
          >
            Show Resume
          </button>
        </div>

        <div className="flex flex-col p-5" data-aos="fade-left">
          {education.map((data, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start md:items-center gap-5 p-5 border-b border-gray-200"
              data-aos="zoom-in-up"
            >
              {data?.image ? (
                <img
                  src={data.image}
                  alt="logo"
                  className="p-4 w-24 h-24 object-contain"
                />
              ) : (
                <div className="p-3 flex items-center justify-center w-14 h-14 bg-black text-white text-3xl rounded-full">
                  {data?.center?.charAt(0).toUpperCase()}
                </div>
              )}

              <div className="flex-1 flex flex-col p-2">
                <h5 className="font-semibold text-lg">
                  {data?.center}{" "}
                  <span className="text-sm text-gray-500">
                    ({data?.duration})
                  </span>
                </h5>
                <p className="text-gray-600">{data?.type}</p>
              </div>

              {data?.certificates && (
                <button
                  onClick={() => setModalImage(data.certificates)}
                  className="bg-black text-white hover:bg-white hover:text-gray-400 rounded-full px-4 py-2 text-sm transition border border-black"
                >
                  See Certificate
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalImage && (
        <Modal pdfUrl={modalImage} onClose={() => setModalImage(null)} />
      )}
    </>
  );
};

export default ExpirenceAndCertificates;
