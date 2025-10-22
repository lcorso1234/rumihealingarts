'use client';

import { ReactNode, useEffect, useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';

type PageLoaderProps = {
  children: ReactNode;
};

export default function PageLoader({ children }: PageLoaderProps) {
  const pathname = usePathname();
  const [isAnimating, setIsAnimating] = useState(true);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    // Restart the loader on every navigation, including the initial paint.
    setIsAnimating(true);
    setAnimationKey((prev) => prev + 1);

    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, [pathname]);

  const overlayClasses = useMemo(
    () =>
      [
        'fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-500',
        isAnimating ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
      ].join(' '),
    [isAnimating]
  );

  const contentClasses = useMemo(
    () =>
      [
        'transition-opacity duration-500',
        isAnimating ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto',
      ].join(' '),
    [isAnimating]
  );

  return (
    <>
      <div className={overlayClasses} aria-hidden={isAnimating ? 'false' : 'true'}>
        <RubikCube key={animationKey} />
      </div>
      <div className={contentClasses}>{children}</div>
    </>
  );
}

function RubikCube() {
  const squares = [
    '#ef4444',
    '#3b82f6',
    '#facc15',
    '#22c55e',
    '#f97316',
    '#22d3ee',
    '#f97316',
    '#22c55e',
    '#f8fafc',
  ];

  return (
    <div className="relative flex flex-col items-center text-center gap-6">
      <div className="cube-wrapper">
        <div className="cube-grid">
          {squares.map((color, index) => (
            <span
              key={color + index}
              className="cube-cell"
              style={{ ['--cube-color' as string]: color, animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
      </div>
      <p className="text-white/80 text-xs sm:text-sm tracking-[0.4em] uppercase">
        Assembling Wellness
      </p>

      <style jsx>{`
        .cube-wrapper {
          width: min(220px, 60vw);
          aspect-ratio: 1 / 1;
          display: flex;
          align-items: center;
          justify-content: center;
          filter: drop-shadow(0 0 25px rgba(56, 189, 248, 0.45));
          animation: cube-tilt 2.2s ease-in-out infinite alternate;
        }

        .cube-grid {
          position: relative;
          width: 100%;
          height: 100%;
          padding: 18px;
          border-radius: 24px;
          background: linear-gradient(145deg, rgba(15, 23, 42, 0.28), rgba(8, 47, 73, 0.4));
          border: 4px solid rgba(148, 163, 184, 0.25);
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          overflow: hidden;
        }

        .cube-cell {
          border-radius: 10px;
          background: var(--cube-color);
          box-shadow:
            inset 0 0 14px rgba(15, 23, 42, 0.25),
            0 10px 18px rgba(15, 23, 42, 0.35);
          opacity: 0;
          transform: scale(0.3) rotate(-12deg);
          animation: cube-piece 0.9s cubic-bezier(0.26, 0.54, 0.32, 1.35) forwards;
        }

        @keyframes cube-piece {
          0% {
            opacity: 0;
            transform: translateY(40px) scale(0.3) rotate(-18deg);
          }
          45% {
            opacity: 1;
            transform: translateY(-6px) scale(1.05) rotate(4deg);
          }
          70% {
            transform: translateY(3px) scale(0.98) rotate(-1deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1) rotate(0deg);
          }
        }

        @keyframes cube-tilt {
          0% {
            transform: rotateX(12deg) rotateY(-18deg);
          }
          100% {
            transform: rotateX(-8deg) rotateY(12deg);
          }
        }

        @media (max-width: 640px) {
          .cube-grid {
            padding: 14px;
            gap: 10px;
            border-radius: 18px;
          }

          .cube-cell {
            border-radius: 8px;
          }
        }
      `}</style>
    </div>
  );
}
