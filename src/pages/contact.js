import React, { useState } from "react";
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillPhone } from "react-icons/ai";



const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/xldgppnz", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    }
  };

  return (
    <div style={{ background: "#f0f0f0" }}>
      <section className="text-gray-700 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              CONTACT US
            </h1>
          </div>

          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            {submitted ? (
              <div className="text-center text-green-600 text-lg font-semibold">
                ✅ Thank you! Your message has been sent.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8"
                      />
                    </div>
                  </div>

                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8"
                      />
                    </div>
                  </div>

                  <div className="p-2 w-full">
                    <div className="relative">
                      <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6"
                      ></textarea>
                    </div>
                  </div>

                  {error && <p className="text-red-500 text-center w-full">{error}</p>}

                  <div className="p-2 w-full text-center">
                    <button
                      type="submit"
                      style={{ background: "black" }}
                      className="text-white py-2 px-8 rounded"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* Social Media & Call Icons */}
          <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
            <p className="leading-normal my-2 text-lg font-semibold">Need Help? Call Us</p>
            <a href="tel:+1234567890" className="text-indigo-500 flex justify-center items-center gap-2 text-lg">
              <AiFillPhone size={24} className="text-blue-500" /> +91 9994434026
            </a>

            {/* Social Media Icons */}
            <div className="flex justify-center gap-4 mt-4">
              <a
                href="https://www.facebook.com/p/DWARA-infras-100064145345898/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillFacebook size={30} className="text-blue-700 hover:scale-110 transition-transform duration-200" />
              </a>

              <a
                href="https://www.instagram.com/dwara_infras/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram size={30} className="text-pink-500 hover:scale-110 transition-transform duration-200" />
              </a>
              
              <a href="https://www.linkedin.com/company/dwara-infras/" target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin size={30} className="text-blue-800 hover:scale-110 transition-transform duration-200" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
