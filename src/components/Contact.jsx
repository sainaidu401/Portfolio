import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaPhoneAlt, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import 'animate.css';

function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });
  const [isVisible, setIsVisible] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, message } = formData;

    if (!email || !message) {
      alert('Please fill out both the email and message fields.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, message }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Message sent!');
      } else {
        alert('Failed to send the message. Please try again.');
      }
    } catch (error) {
      alert('There was an error sending your message.');
    }
  };

  useEffect(() => {
    // Set up Intersection Observer to trigger animation on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);  // Set visibility when section is in viewport
      },
      { threshold: 0.5 }  // Trigger when 50% of the section is visible
    );

    // Observe the contact section for visibility
    const contactSection = document.getElementById('contact');
    observer.observe(contactSection);

    // Clean up the observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="contact"
      className={`py-16 flex justify-center transition-all duration-500 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="max-w-6xl w-full bg-white p-8 rounded-lg shadow-2xl transform transition-all hover:scale-105 hover:shadow-xl animate__animated animate__fadeInUp">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-700">Have a question or just want to say hi? Reach out!</p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="text-lg font-semibold text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-2 p-4 w-full rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="text-lg font-semibold text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                className="mt-2 p-4 w-full rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white py-4 rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            Send Message
          </button>
        </form>

        {/* Contact Information */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
          <div className="flex justify-center gap-8 mb-6">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-gray-100 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                <FaEnvelope className="text-3xl text-blue-600 hover:text-blue-500 transition duration-300" />
              </div>
              <span className="text-lg text-gray-600">your-email@example.com</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-gray-100 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                <FaPhoneAlt className="text-3xl text-blue-600 hover:text-blue-500 transition duration-300" />
              </div>
              <span className="text-lg text-gray-600">+1 234 567 890</span>
            </div>
          </div>

          <div className="flex justify-center gap-8">
            <a
              href="https://www.instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500 transition-all duration-300 transform hover:scale-110"
            >
              <div className="p-4 bg-gray-100 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                <FaInstagram className="text-3xl" />
              </div>
            </a>
            <a
              href="https://www.facebook.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500 transition-all duration-300 transform hover:scale-110"
            >
              <div className="p-4 bg-gray-100 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                <FaFacebook className="text-3xl" />
              </div>
            </a>
            <a
              href="https://www.twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500 transition-all duration-300 transform hover:scale-110"
            >
              <div className="p-4 bg-gray-100 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                <FaTwitter className="text-3xl" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
