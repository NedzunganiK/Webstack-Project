import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 text-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Contact Us</h1>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
        Reach out to us for any inquiries, emergency towing, or service requests.
      </p>
      <form className="max-w-lg mx-auto bg-white p-6 shadow-lg rounded-lg">
        <input type="text" placeholder="Your Name" className="w-full p-2 mb-4 border border-gray-300 rounded" />
        <input type="email" placeholder="Your Email" className="w-full p-2 mb-4 border border-gray-300 rounded" />
        <textarea placeholder="Your Message" className="w-full p-2 mb-4 border border-gray-300 rounded"></textarea>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
