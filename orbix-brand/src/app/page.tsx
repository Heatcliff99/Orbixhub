'use client';

import { useState, useEffect, Suspense } from 'react';
import dynamic from 'next/dynamic';
import { gsap } from 'gsap';
import Preloader from '@/components/Preloader';
import SmoothScroll from '@/components/SmoothScroll';

// Dynamically import Scene3D to avoid SSR issues
const Scene3D = dynamic(() => import('@/components/Scene3D'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
      <div className="text-white text-lg">Loading 3D Scene...</div>
    </div>
  ),
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showHero, setShowHero] = useState(false);

  // Hero animation triggered after preloader completes
  useEffect(() => {
    if (!isLoading && !showHero) {
      setShowHero(true);
      
      const tl = gsap.timeline({ delay: 0.2 });
      
      // Animate navigation
      tl.from('.nav-item', {
        y: -20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
      });
      
      // Animate hero text
      tl.from('.hero-title', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power4.out',
      }, '-=0.4');
      
      tl.from('.hero-subtitle', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
      }, '-=0.5');
      
      // Animate CTA buttons
      tl.from('.cta-button', {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.15,
        ease: 'power2.out',
      }, '-=0.4');
      
      // Animate product tags
      tl.from('.product-tag', {
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'back.out(1.7)',
      }, '-=0.3');
      
      // Animate 3D canvas fade in
      tl.from('.scene-container', {
        opacity: 0,
        duration: 1,
        ease: 'power2.inOut',
      }, '-=0.8');
    }
  }, [isLoading, showHero]);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {/* Preloader */}
      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
      
      {/* Main Content */}
      <SmoothScroll>
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-4 flex justify-between items-center">
          <div className="nav-item text-2xl font-bold tracking-wider">ORBIX</div>
          <div className="hidden md:flex space-x-8">
            <a href="#collections" className="nav-item text-sm uppercase tracking-widest hover:text-gray-300 transition-colors">Collections</a>
            <a href="#about" className="nav-item text-sm uppercase tracking-widest hover:text-gray-300 transition-colors">About</a>
            <a href="#contact" className="nav-item text-sm uppercase tracking-widest hover:text-gray-300 transition-colors">Contact</a>
          </div>
          <button className="nav-item px-6 py-2 border border-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
            Shop Now
          </button>
        </nav>

        {/* Hero Section */}
        <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* 3D Scene Background */}
          <div className="scene-container absolute inset-0 z-0">
            <Suspense fallback={null}>
              <Scene3D />
            </Suspense>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
            <h1 className="hero-title text-5xl md:text-7xl lg:text-9xl font-bold mb-6 tracking-tight leading-none">
              Streetwear.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Redefined.
              </span>
            </h1>
            
            <p className="hero-subtitle text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto font-light">
              Where cutting-edge design meets urban culture. Experience the future of fashion.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="cta-button px-8 py-4 bg-white text-black text-sm uppercase tracking-widest font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
                Explore Collection
              </button>
              <button className="cta-button px-8 py-4 border border-white text-white text-sm uppercase tracking-widest font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105">
                Watch Film
              </button>
            </div>

            {/* Floating Product Tags */}
            <div className="absolute top-1/4 left-10 product-tag hidden lg:block">
              <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-xs uppercase tracking-wider">
                New Arrival
              </div>
            </div>
            
            <div className="absolute bottom-1/3 right-10 product-tag hidden lg:block">
              <div className="bg-purple-500/20 backdrop-blur-md px-4 py-2 rounded-full text-xs uppercase tracking-wider text-purple-300">
                Limited Edition
              </div>
            </div>
            
            <div className="absolute top-1/3 right-1/4 product-tag hidden md:block">
              <div className="bg-blue-500/20 backdrop-blur-md px-4 py-2 rounded-full text-xs uppercase tracking-wider text-blue-300">
                Exclusive Drop
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
            <span className="text-xs uppercase tracking-widest mt-2 text-gray-400">Scroll</span>
          </div>
        </main>

        {/* Catalog Preview Section */}
        <section id="collections" className="py-24 px-6 bg-black">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">
              Latest Drops
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="group relative overflow-hidden bg-gray-900 aspect-[3/4]">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 group-hover:from-gray-700 group-hover:to-gray-800 transition-all duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-2xl"></div>
                  </div>
                  <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                    <h3 className="text-xl font-bold mb-2">Collection 00{item}</h3>
                    <p className="text-gray-400 text-sm mb-4">Urban essentials reimagined</p>
                    <button className="self-start px-6 py-2 border border-white/30 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="py-12 px-6 border-t border-gray-800">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-bold tracking-wider">ORBIX</div>
            <div className="text-sm text-gray-400">
              © 2024 Orbix Industries. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider">Discord</a>
            </div>
          </div>
        </footer>
      </SmoothScroll>
    </>
  );
}
