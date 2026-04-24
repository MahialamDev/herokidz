import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-16 lg:py-24">
      {/* Decorative background elements */}
      <div className="absolute top-10 left-10 h-20 w-20 rounded-full bg-yellow-200 opacity-50 blur-xl" />
      <div className="absolute bottom-10 right-10 h-32 w-32 rounded-full bg-pink-200 opacity-50 blur-xl" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          
          {/* Text Content */}
          <div className="text-center lg:w-1/2 lg:text-left">
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
              Where Every Kid Becomes a <span className="text-blue-600">Hero!</span>
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-slate-600">
              Empowering the next generation through play, learning, and unstoppable adventures. Join the Herokidz community today and unlock your child's potential.
            </p>
            
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
              <Link 
                href="/signup" 
                className="rounded-full bg-orange-500 px-8 py-4 text-lg font-bold text-white transition-transform hover:scale-105 hover:bg-orange-600 shadow-lg"
              >
                Join the Adventure
              </Link>
              <Link 
                href="/programs" 
                className="rounded-full border-2 border-blue-600 px-8 py-4 text-lg font-bold text-blue-600 transition-colors hover:bg-blue-50"
              >
                Explore Programs
              </Link>
            </div>
          </div>

          {/* Image Container */}
          <div className="relative lg:w-1/2">
            <div className="relative z-10 overflow-hidden rounded-3xl border-8 border-white shadow-2xl">
              {/* Replace with your actual hero image */}
              <Image 
                src="/hero-kids-play.jpg" 
                alt="Kids playing and learning" 
                width={600} 
                height={500}
                className="object-cover"
                priority
              />
            </div>
            {/* Playful Accent: Badge */}
            <div className="absolute -bottom-6 -left-6 z-20 hidden rounded-2xl bg-yellow-400 p-6 shadow-xl sm:block">
              <p className="text-2xl font-black text-slate-900">10k+</p>
              <p className="text-sm font-bold uppercase text-slate-700">Happy Heroes</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;