import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Form from "./form";

const Contacts = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true, // run animation only once
    });
  }, []);

  return (
    <>
      <div
        className="bg-white text-black justify-center text-center flex flex-col px-4 py-10 sm:px-10"
        data-aos="fade-up"
      >
        <div data-aos="fade-down">
          <h1 className="font-bold text-xl sm:text-2xl">Contact Me</h1>
          <p className="text-gray-600 py-6 px-2 sm:px-10">
            Ready to get started? Feel free to reach out through the contact
            form, and let's embark on a journey of innovation and success.
          </p>
        </div>

        <div
          className="flex flex-col md:flex-row rounded-lg p-5 shadow-lg shadow-gray-500 gap-10"
          data-aos="zoom-in"
        >
          {/* Contact Info */}
          <div
            className="bg-black text-white p-4 rounded-[15px] w-full md:w-1/2 text-center flex flex-col items-center justify-center"
            data-aos="fade-right"
          >
            <h2 className="font-bold pb-2">Contact Information</h2>
            <p className="text-gray-400 pb-4">
              Fill up the form and I will get back to you within 24 hours
            </p>
            <div className="flex flex-col gap-4 w-full max-w-xs text-left">
              <div className="flex items-center gap-3">
                <img
                  src="/images/whatsapp.webp"
                  alt="Phone"
                  className="w-7 h-7"
                />
                <p className="text-sm">+91 7012143978</p>
              </div>
              <div className="flex items-center gap-3">
                <img src="/images/email.png" alt="Email" className="w-7 h-6" />
                <p className="text-sm">vishnuanil216@gmail.com</p>
              </div>

              <a
                href="https://github.com/6234vishnu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 mt-2"
              >
                <img
                  src="/images/github-logo-.webp"
                  alt="GitHub"
                  className="w-8 h-8"
                />
                <p className="text-sm break-words text-white hover:text-blue-600 underline">
                  Click To Visit
                </p>
              </a>

              <a
                href="https://www.linkedin.com/in/vishnu-anil-9222a3303"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <img
                  src="/images/linkedin.webp"
                  alt="LinkedIn"
                  className="w-7 h-9"
                />
                <p className="text-sm break-words text-white hover:text-blue-600 underline">
                  Click To Visit
                </p>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-1/2" data-aos="fade-left">
            <Form />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
