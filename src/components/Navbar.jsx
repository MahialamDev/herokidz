"use client"; // Required for useState in Next.js App Router

import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = (
    <>
      <li>
        <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
      </li>
      <li>
        <Link href="/activities" className="hover:text-orange-500 transition-colors">Activities</Link>
      </li>
      <li>
        <Link href="/about" className="hover:text-orange-500 transition-colors">About Us</Link>
      </li>
      <li>
        <Link href="/contact" className="hover:text-orange-500 transition-colors">Contact</Link>
      </li>
    </>
  );

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm font-sans">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <div className="text-2xl font-black tracking-tighter text-blue-600">
          <Link href="/">HERO<span className="text-orange-500">KIDZ</span></Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 font-bold text-slate-700">
            {links}
          </ul>
        </nav>

        {/* Desktop Action Button */}
        <div className="hidden md:block">
                  <Link href={'/login'}>
                   <button className="rounded-full bg-blue-600 px-6 py-2 font-bold text-white transition-transform hover:scale-105 active:scale-95">
            Login
          </button>
                  </Link>
        </div>

        {/* Mobile Menu Icon (Hamburger) */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="flex flex-col items-center space-y-4 bg-blue-50 py-6 font-bold text-slate-700">
          {links}
          <li className="pt-2">
            <button className="rounded-full bg-blue-600 px-10 py-3 text-white shadow-md">
              Login
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;