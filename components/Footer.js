import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Branding */}
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-bold">BitLinks</h1>
        </div>
        {/* Navigation Links */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/features" className="hover:underline">
            Features
          </Link>
          <Link href="/shorten" className="hover:underline">
            Shorten
          </Link>
          <Link href="/About" className="hover:underline">
            About Us
          </Link>
          <Link href="/Contact" className="hover:underline">
            Contact
          </Link>
        </div>
        {/* Social Media Links */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <Link href="https://facebook.com" className="hover:underline">
            Facebook
          </Link>
          <Link href="https://twitter.com" className="hover:underline">
            Twitter
          </Link>
          <Link href="https://linkedin.com" className="hover:underline">
            LinkedIn
          </Link>
        </div>
        {/* Legal Links */}
        <div className="flex space-x-4">
          <Link href="/policy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:underline">
            Terms of Service
          </Link>
        </div>
      </div>
      {/* Call to Action */}
      <div className="text-center mt-4">
        <Link href="/shorten" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Get Started
        </Link>
      </div>
    </footer>
  );
}
