"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log("Registering User:", formData);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-orange-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl">
        
        {/* Left Side: Registration Form */}
        <div className="w-full p-8 md:p-12 lg:w-1/2">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-black text-slate-900 sm:text-4xl">Create Account</h1>
            <p className="mt-2 text-slate-500">
              Already have an account?{' '}
              <Link href="/login" className="font-bold text-blue-600 hover:underline">
                Log in here
              </Link>
            </p>
          </div>

          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-slate-700">Parent's Full Name</label>
                <input
                  id="fullName"
                  type="text"
                  required
                  onChange={handleChange}
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition-all focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700">Email Address</label>
                <input
                  id="email"
                  type="email"
                  required
                  onChange={handleChange}
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition-all focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                  placeholder="name@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-slate-700">Phone Number</label>
              <input
                id="phone"
                type="tel"
                required
                onChange={handleChange}
                className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition-all focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-slate-700">Create Password</label>
              <input
                id="password"
                type="password"
                required
                onChange={handleChange}
                className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition-all focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center ">
              <input
                id="terms"
                type="checkbox"
                required
                className=" h-4 w-4 rounded border border-slate-300 text-orange-600 focus:ring-orange-500"
              />
              <label htmlFor="terms" className="ml-2 text-xs text-slate-500 leading-tight ">
                By signing up, I agree to the <Link href="/terms" className="underline hover:text-orange-600">Terms of Service</Link> and <Link href="/privacy" className="underline hover:text-orange-600">Privacy Policy</Link>.
              </label>
            </div>

            <button
              type="submit"
              className="w-full transform rounded-xl bg-blue-600 py-3 text-lg font-bold text-white shadow-lg transition-all hover:scale-[1.02] hover:bg-blue-700 active:scale-95"
            >
              Start the Journey
            </button>
          </form>
        </div>

        {/* Right Side: Welcome/Info Panel (Hidden on mobile) */}
        <div className="hidden w-1/2 flex-col justify-center bg-orange-500 p-12 text-white lg:flex">
          <div className="space-y-6">
            <h2 className="text-4xl font-black leading-tight">Ready to unleash your child's inner hero?</h2>
            <ul className="space-y-4">
              {[
                "Access to exclusive workshops",
                "Progress tracking and badges",
                "Community of like-minded parents",
                "Safe and secure environment"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 font-medium">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-400">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-12 rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
            <p className="text-sm italic">"Herokidz has completely transformed how my son interacts with technology and learning. Highly recommended!"</p>
            <p className="mt-2 text-xs font-bold uppercase">— Sarah J., Parent</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RegisterPage;