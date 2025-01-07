import React from 'react';
import Link from 'next/link';

const Contact = () => {
  return (
    <div className="px-6 py-10 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">We'd Love to Hear from You</h2>
        <p className="text-lg text-gray-700">
          Whether you have a question about our services, need assistance, or just want to give us feedback, our team is here to help! Reach out to us, and we’ll do our best to get back to you promptly.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
        <ul className="list-none text-lg text-gray-700">
          <li className="mb-2">
            <strong>Email:</strong> <a href="mailto:support@bitlinks.com" className="text-blue-600 hover:underline">support@bitlinks.com</a>
          </li>
          <li className="mb-2">
            <strong>Phone:</strong> <a href="tel:+1234567890" className="text-blue-600 hover:underline">+1 (234) 567-890</a>
          </li>
          <li className="mb-2">
            <strong>Address:</strong> 123 Link Shortener Avenue, Suite 456, WebCity, WC 78901
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
        <p className="text-lg text-gray-700 mb-4">
          Fill out the form below, and our team will get back to you as soon as possible.
        </p>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="John Doe" />
          </div>
          <div>
            <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="john.doe@example.com" />
          </div>
          <div>
            <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Write your message here..."></textarea>
          </div>
          <button type="submit" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg p-3 px-6">
            Send Message
          </button>
        </form>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
        <p className="text-lg text-gray-700 mb-4">
          Stay connected and follow us on social media for updates, tips, and more!
        </p>
        <div className="flex gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Twitter</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a>
        </div>
      </section>

      <section className="text-center mt-10">
        <h2 className="text-2xl font-semibold mb-4">Your Feedback Matters</h2>
        <p className="text-lg text-gray-700">
          We're always working to improve our service and provide the best experience possible. Your feedback helps us grow, so please don't hesitate to reach out!
        </p>
      </section>
    </div>
  );
}

export default Contact;
