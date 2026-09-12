'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useProgress } from '@react-three/drei';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const { progress } = useProgress();
  const preloaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<SVGSVGElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if loading is complete (progress reaches 100)
    if (progress === 100 && !isLoaded) {
      setIsLoaded(true);
      runExitAnimation();
    }
  }, [progress, isLoaded]);

  const runExitAnimation = () => {
    if (!preloaderRef.current || !logoRef.current) return;

    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      },
    });

    // Lock body scroll
    tl.set(document.body, { overflow: 'hidden' });

    // Finish SVG draw animation (stroke-dashoffset to 0)
    const logoPaths = logoRef.current.querySelectorAll('path');
    logoPaths.forEach((path) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length} ${length}`;
      path.style.strokeDashoffset = `${length}`;
    });

    tl.to(logoPaths, {
      strokeDashoffset: 0,
      duration: 1.2,
      ease: 'power2.inOut',
    });

    // Pause after drawing completes
    tl.to({}, { duration: 0.4 });

    // Scale up and fade out the logo
    tl.to(logoRef.current, {
      scale: 1.5,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.in',
    });

    // Slide the white preloader curtain out of view
    tl.to(preloaderRef.current, {
      yPercent: -100,
      duration: 0.8,
      ease: 'power4.inOut',
    });

    // Unlock body scroll
    tl.set(document.body, { overflow: 'auto' });

    // Stagger in hero elements (triggered via callback in parent)
  };

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
    >
      <svg
        ref={logoRef}
        width="200"
        height="80"
        viewBox="0 0 200 80"
        className="text-black"
      >
        {/* Stylized signature/calligraphy logo */}
        <path
          d="M20,40 Q40,10 60,40 T100,40 T140,40 T180,40"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          style={{
            strokeDasharray: '0 0',
            strokeDashoffset: '0',
          }}
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-2xl font-light tracking-widest fill-current"
        >
          ORBIX
        </text>
      </svg>
      <div className="absolute bottom-10 text-sm text-gray-500">
        Loading assets... {Math.round(progress)}%
      </div>
    </div>
  );
}
