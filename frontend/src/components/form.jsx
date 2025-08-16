import { useState } from "react";
import api from "../api/axiosInstance";
import SuccessModal from "./successModal";
import ErrorModal from "./errorModal";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [successModal, setSuccessModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorModal, setErrorModal] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData?.firstName || !formData?.email || !formData?.message) return;

    try {
      const response = await api.post("/api/coustomerMessage", formData);
      if (response?.data?.success) {
        setSuccessMessage(response?.data?.message);
        return setSuccessModal(true);
      }
      setErrorMessage(response?.data?.message || "server error try later");
      return setErrorModal(true);
    } catch (error) {
      setErrorMessage(
        error?.response?.data?.message || "server error try later"
      );
      return setErrorModal(true);
    } finally {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <>
      <div className="px-4 sm:px-10 py-10">
        <form
          className="flex flex-col text-start justify-center gap-6"
          onSubmit={handleSubmit}
        >
          {/* Name Fields */}
          <div className="flex flex-col gap-6  sm:flex-col">
            <div className="flex flex-col flex-1">
              <label className="text-gray-400" htmlFor="firstName">
                First Name
              </label>
              <input
                value={formData?.firstName}
                name="firstName"
                onChange={handleChange}
                className="border-b border-gray-400 focus:outline-none py-2"
                type="text"
                id="firstName"
              />
            </div>
            <div className="flex flex-col flex-1">
              <label className="text-gray-400" htmlFor="lastName">
                Last Name
              </label>
              <input
                value={formData?.lastName}
                name="lastName"
                onChange={handleChange}
                className="border-b border-gray-400 focus:outline-none py-2"
                type="text"
                id="lastName"
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-gray-400" htmlFor="email">
              Email
            </label>
            <input
              value={formData?.email}
              name="email"
              onChange={handleChange}
              className="border-b border-gray-400 focus:outline-none py-2"
              type="email"
              id="email"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label className="text-gray-400" htmlFor="message">
              Message
            </label>
            <textarea
              value={formData?.message}
              name="message"
              onChange={handleChange}
              className="border-b border-gray-400 focus:outline-none py-2 h-40 resize-none"
              id="message"
            />
          </div>

          {/* Submit */}
          <button
            className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition w-fit self-start"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
      {successModal && (
        <SuccessModal
          message={successMessage}
          onClose={() => setSuccessModal(false)}
        />
      )}
      {errorModal && (
        <ErrorModal
          message={errorMessage}
          onClose={() => setErrorModal(false)}
        />
      )}
    </>
  );
};

export default Form;
