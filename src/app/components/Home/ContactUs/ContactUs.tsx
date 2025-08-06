"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactUs = () => {
  const [state, handleSubmit] = useForm("xdkdwpge");

  if (state.succeeded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
        <p className="text-green-600 text-2xl font-bold text-center px-6 py-3 bg-white rounded-lg shadow-lg">
          Thank you for your message! We'll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-2xl p-6 sm:p-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mb-8">
          We'd love to hear from you! Please fill out the form below.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                id="fullName"
                type="text"
                name="fullName"
                required
                placeholder="Full Name*"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              />
              <ValidationError prefix="Full Name" field="fullName" errors={state.errors} />
            </div>
            <div>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="Email*"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                id="phone"
                type="tel"
                name="phone"
                required
                placeholder="Phone*"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              />
              <ValidationError prefix="Phone" field="phone" errors={state.errors} />
            </div>
            <div>
              <input
                id="businessUrl"
                type="url"
                name="businessUrl"
                required
                placeholder="Business URL*"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              />
              <ValidationError prefix="Business URL" field="businessUrl" errors={state.errors} />
            </div>
          </div>

          <div>
            <input
              id="subject"
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            />
            <ValidationError prefix="Subject" field="subject" errors={state.errors} />
          </div>

          <div>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {state.submitting ? "Submitting..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;