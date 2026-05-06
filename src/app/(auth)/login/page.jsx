"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const searchParams = useSearchParams();
  const callback = searchParams.get("callback");

  const handleSubmit = async(e) => {
    e.preventDefault();
     await signIn("credentials", {email, password, redirect: true, callbackUrl: callback || '/'})
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-blue-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl">
        
        {/* Left Side: Branding/Illustration (Hidden on mobile) */}
        <div className="hidden w-1/2 flex-col justify-center bg-blue-600 p-12 text-white lg:flex">
          <h2 className="mb-6 text-4xl font-black">Welcome Back, Hero!</h2>
          <p className="text-lg opacity-90">
            Log in to access your dashboard, track your progress, and jump back into the adventure.
          </p>
          <div className="mt-12 h-64 w-full rounded-2xl bg-blue-500/50 flex items-center justify-center border-2 border-dashed border-blue-300">
             {/* You can place a playful Lottie animation or Hero Image here */}
             <span className="text-sm font-medium italic text-blue-100 italic">Playful Illustration Space</span>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="w-full p-8 md:p-12 lg:w-1/2">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold text-slate-900">Login</h1>
            <p className="mt-2 text-sm text-slate-500">
              New to Herokidz?{' '}
              <Link href="/signup" className="font-bold text-orange-500 hover:underline">
                Create an account
              </Link>
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  placeholder="superhero@email.com"
                />
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-semibold text-slate-700">
                    Password
                  </label>
                  <Link href="/forgot-password" className="text-xs font-medium text-blue-600 hover:underline">
                    Forgot?
                  </Link>
                </div>
                <input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="remember-me" className="ml-2 text-sm text-slate-600">
                Remember me
              </label>
            </div>

            <button
              type="submit"
              className="w-full transform rounded-xl bg-orange-500 py-3 text-lg font-bold text-white shadow-lg transition-all hover:scale-[1.02] hover:bg-orange-600 active:scale-95"
            >
              Sign In
            </button>

            {/* Social Login Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-slate-500">Or continue with</span>
              </div>
            </div>

            <button
              type="button"
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 py-3 font-semibold text-slate-700 transition-colors hover:bg-slate-50"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;