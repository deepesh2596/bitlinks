import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="h-16 bg-purple-950 flex justify-between items-center px-4 sm:px-6 lg:px-10 text-white">
      {/* Logo */}
      <div className="logo font-bold text-lg">
        <Link href="/">BitLinks</Link>
      </div>

      {/* Navigation Links */}
      <ul className="flex flex-wrap justify-center items-center gap-4">
        <Link href="/"><li className="hover:underline">Home</li></Link>
        <Link href="/About"><li className="hover:underline">About</li></Link>
        <Link href="/shorten"><li className="hover:underline">Shorten</li></Link>
        <Link href="/Contact"><li className="hover:underline">Contact Us</li></Link>
        <li className="flex gap-3">
          <Link href="/shorten">
            <button className="bg-purple-500 rounded-lg shadow-lg px-4 py-2 font-bold hover:bg-purple-400">
              Try Now
            </button>
          </Link>
          <Link href="/github">
            <button className="bg-purple-500 rounded-lg shadow-lg px-4 py-2 font-bold hover:bg-purple-400">
              GitHub
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
