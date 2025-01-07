import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <div className="px-6 py-10 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700">
          At BitLinks, we believe in simplifying the way people share and manage links. Our mission is to empower individuals and businesses with a reliable, fast, and user-friendly URL shortener that makes link-sharing seamless and impactful. We strive to be the go-to platform for those looking to transform long, complicated URLs into short, memorable links that enhance engagement and drive results.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
        <p className="text-lg text-gray-700">
          In a digital world where first impressions matter, a clean and concise URL can make all the difference. BitLinks is designed to be the most user-centric link shortener available. With our platform, you gain access to powerful analytics, custom branding options, and advanced security features to help you maximize the impact of every link you share. Whether you're an individual looking to clean up your social media links or a business aiming to strengthen brand identity, BitLinks has the tools you need.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Features</h2>
        <ul className="list-disc pl-6 text-lg text-gray-700">
          <li className="mb-2">
            <strong>Customizable Short URLs</strong>: Personalize your links to make them memorable and unique.
          </li>
          <li className="mb-2">
            <strong>In-Depth Analytics</strong>: Gain insights on link performance with real-time data on clicks, locations, and devices.
          </li>
          <li className="mb-2">
            <strong>Secure Links</strong>: We prioritize your security by providing reliable, safe, and spam-free link management.
          </li>
          <li className="mb-2">
            <strong>Easy to Use</strong>: Our simple and intuitive interface allows anyone to shorten and manage links with ease.
          </li>
          <li className="mb-2">
            <strong>Branding Tools</strong>: Strengthen your online presence by incorporating your brand into your URLs.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="text-lg text-gray-700">
          Founded by a team of tech enthusiasts and marketers, BitLinks was born out of a desire to simplify the link-sharing process for everyone. We realized that short links do more than just save space—they enhance communication, improve branding, and add a touch of professionalism. From day one, we set out to build a platform that combines powerful features with an easy-to-use interface, and we continue to improve and innovate to meet the evolving needs of our users.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Join Us on Our Journey</h2>
        <p className="text-lg text-gray-700">
          At BitLinks, we’re constantly working on new ways to make URL shortening even more valuable for our users. We welcome feedback, suggestions, and ideas from our community, and we’re excited to keep building a product that makes a difference. Join us on our journey to redefine link sharing—let’s create shorter links, better experiences, and stronger connections together.
        </p>
      </section>

      <section className="text-center mt-10">
        <h2 className="text-2xl font-semibold mb-4">Get Started Today</h2>
        <p className="text-lg text-gray-700 mb-6">
          Ready to experience the best URL shortener on the market? Sign up today and discover how BitLinks can help you manage your links more effectively, boost your brand, and track your impact.
        </p>
        <Link href="/shorten"><button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg p-3 px-6">
          Try BitLinks Now
        </button></Link>
      </section>
    </div>
  );
}

export default About;
