import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [result, setResult] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");

    const formPayload = new FormData();
    formPayload.append("access_key", "a9bce620-9964-4b68-ba37-050db3ca8745"); // Replace with your Web3Forms Access Key
    formPayload.append("name", formData.name);
    formPayload.append("email", formData.email);
    formPayload.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload,
      });
      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResult(`Error: ${data.message}`);
      }
    } catch (error) {
      setResult("Failed to send the message. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="py-16 flex flex-col items-center">
      <div className="max-w-6xl w-full bg-white p-8 rounded-lg shadow-2xl">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
          Get In Touch
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-lg font-semibold text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="mt-2 p-4 w-full rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label className="block text-lg font-semibold text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="mt-2 p-4 w-full rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label className="block text-lg font-semibold text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              className="mt-2 p-4 w-full rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white py-4 rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            Send Message
          </button>
        </form>
        {result && <p className="mt-4 text-center text-gray-700">{result}</p>}
      </div>

      {/* Contact Information Section */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">
          Contact Information
        </h3>
        <div className="flex flex-wrap justify-center gap-6">
          {/* Email */}
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-blue-500 text-2xl" />
            <span>your-email@example.com</span>
          </div>
          {/* Phone */}
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-blue-500 text-2xl" />
            <span>+1 234 567 890</span>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-8 mt-8">
          <a
            href="https://www.instagram.com/yaa.its_sainaidu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-gray-600 hover:text-blue-500 text-3xl transition transform hover:scale-110" />
          </a>
          <a
            href="https://www.facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-gray-600 hover:text-blue-500 text-3xl transition transform hover:scale-110" />
          </a>
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-gray-600 hover:text-blue-500 text-3xl transition transform hover:scale-110" />
          </a>
          <a
            href="https://github.com/sainaidu401"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-gray-600 hover:text-blue-500 text-3xl transition transform hover:scale-110" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
