import React from 'react';

const PrivacyPolicy = () => {
  return (
    <section className="min-h-screen bg-white text-gray-800 px-6 py-12 md:px-16 lg:px-32">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-900">Privacy Policy</h1>

        <p className="mb-4 text-lg">
          At Brave Link Systems LLC, your privacy is critically important to us. This Privacy Policy document outlines the types of personal
          information that is received and collected by us and how it is used.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-2 text-blue-800">Information We Collect</h2>
        <p className="mb-4 text-lg">
          We collect information from you when you visit our website, subscribe to our newsletter, fill out a form, or enter information on our site.
          The information may include your name, email address, phone number, company name, and any other information you provide.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-2 text-blue-800">How We Use Your Information</h2>
        <ul className="list-disc pl-5 mb-4 text-lg">
          <li>To personalize your experience and respond better to your needs</li>
          <li>To improve our website and services</li>
          <li>To send periodic emails regarding your inquiries or other services</li>
          <li>To follow up with users after correspondence</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-2 text-blue-800">Data Security</h2>
        <p className="mb-4 text-lg">
          We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained
          behind secured networks and is only accessible by a limited number of persons who have special access rights.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-2 text-blue-800">Third-Party Disclosure</h2>
        <p className="mb-4 text-lg">
          We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties unless we provide you with advance notice.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-2 text-blue-800">Cookies</h2>
        <p className="mb-4 text-lg">
          We use cookies to understand and save your preferences for future visits and compile aggregate data about site traffic and interaction so that
          we can offer better site experiences and tools in the future.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-2 text-blue-800">Changes to This Policy</h2>
        <p className="mb-4 text-lg">
          Brave Link Systems LLC reserves the right to update or change this Privacy Policy at any time. Any changes will be posted on this page.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-2 text-blue-800">Contacting Us</h2>
        <p className="mb-4 text-lg">
          If there are any questions regarding this privacy policy, you may contact us at:
        </p>
        <p className="text-lg text-blue-700 font-semibold">
          support@bravelinksystemsllc.com
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
