import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; // Install: npm install react-icons

const ContactPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-8">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-2 text-center text-lg text-gray-600">
            For inquiries, project discussions, or to schedule a consultation, please reach out.
            We are dedicated to building your vision with excellence.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-lg p-8 sm:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information Section */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Our Contact Details
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaMapMarkerAlt className="h-5 w-5 text-yellow-700 mr-3" />
                  <p className="text-gray-700">
                    123 Royal Builders Avenue, Suite 200 <br />
                    City, State, Zip Code
                  </p>
                </div>
                <div className="flex items-center">
                  <FaPhoneAlt className="h-5 w-5 text-yellow-700 mr-3" />
                  <p className="text-gray-700">
                    <a href="tel:+15551234567">+1 (555) 123-4567</a>
                  </p>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="h-5 w-5 text-yellow-700 mr-3" />
                  <p className="text-gray-700">
                    <a href="mailto:info@royalconstruction.com">info@royalconstruction.com</a>
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Business Hours</h4>
                <p className="text-gray-700">
                  Monday - Friday: 9:00 AM - 5:00 PM <br />
                  Saturday: By Appointment <br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            {/* Contact Form Section */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Send Us a Message
              </h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Your Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="name"
                      className="shadow-sm focus:ring-yellow-500 focus:border-yellow-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="Your Full Name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      id="email"
                      className="shadow-sm focus:ring-yellow-500 focus:border-yellow-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number (Optional)
                  </label>
                  <div className="mt-1">
                    <input
                      type="tel"
                      id="phone"
                      className="shadow-sm focus:ring-yellow-500 focus:border-yellow-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="Your Phone Number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      rows={4}
                      className="shadow-sm focus:ring-yellow-500 focus:border-yellow-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="How can we help you?"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-700 hover:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;