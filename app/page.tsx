'use client';

import { useEffect } from 'react';
import Footer from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    // Scroll animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black border-8 border-white shadow-2xl">
      
      <style jsx global>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(0, 255, 255, 0.3); }
          50% { box-shadow: 0 0 40px rgba(0, 255, 255, 0.6); }
        }
        .glow-pulse {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
      
      {/* HERO GRID - Golden Ratio Layout - NO GAPS */}
      <section className="grid grid-cols-1 md:grid-cols-[1.618fr_1fr] min-h-screen">
        
        {/* Left Panel - Red/Orange */}
        <div className="relative bg-gradient-to-br from-red-600 to-orange-600 border-r-8 border-b-8 border-black flex items-center justify-center p-12 animate-on-scroll transition-all duration-500 hover:scale-[1.02] hover:brightness-110">
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: 'radial-gradient(circle, black 2px, transparent 2px)',
            backgroundSize: '20px 20px',
          }}></div>
          
          <div className="relative z-10 text-center max-w-2xl">
            <h1 className="text-[12vw] md:text-9xl font-black text-black uppercase leading-none mb-8 transition-all duration-300 hover:scale-105" style={{
              fontFamily: 'Arial Black, sans-serif',
              textShadow: '6px 6px 0px rgba(0,0,0,0.3)',
            }}>
              RUMI<br/>HEALING
            </h1>
            <p className="text-3xl md:text-4xl font-bold text-black/90 uppercase tracking-wider transition-all duration-300 hover:text-black">
              Natural Healthcare Revolution
            </p>
          </div>
        </div>

        {/* Right Panel - Yellow */}
        <div className="relative bg-gradient-to-br from-yellow-400 to-amber-500 border-b-8 border-black flex items-center justify-center p-12 animate-on-scroll transition-all duration-500 hover:scale-[1.02] hover:brightness-110" style={{ animationDelay: '0.2s' }}>
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, black 0px, black 3px, transparent 3px, transparent 15px)',
          }}></div>
          
          <div className="relative z-10 text-center">
            <div className="text-9xl mb-6 drop-shadow-2xl transition-all duration-300 hover:scale-110 hover:rotate-12">🌿</div>
            <h2 className="text-4xl md:text-5xl font-black text-black uppercase mb-4 transition-all duration-300 hover:scale-105" style={{
              fontFamily: 'Arial Black, sans-serif',
            }}>
              PURE HEALING
            </h2>
            <p className="text-xl text-black/80 font-bold">
              Checkups • Supplements • Acupressure
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES GRID - Golden Ratio - NO GAPS */}
      <section className="grid grid-cols-1 md:grid-cols-[1fr_1.618fr]">
        
        {/* Blue Panel */}
        <div className="relative bg-gradient-to-br from-blue-600 to-cyan-500 border-r-8 border-b-8 border-black min-h-[500px] flex items-center justify-center p-12 animate-on-scroll transition-all duration-500 hover:scale-[1.02] hover:brightness-110">
          <div className="text-center">
            <div className="text-8xl mb-6 transition-all duration-500 hover:scale-125 hover:rotate-12">🩺</div>
            <h3 className="text-5xl font-black text-black uppercase transition-all duration-300 hover:scale-105" style={{
              fontFamily: 'Arial Black, sans-serif',
            }}>
              HEALTH<br/>CHECKUPS
            </h3>
          </div>
        </div>

        {/* Purple/Red Split - NO GAPS */}
        <div className="grid grid-rows-[1fr_1.618fr] border-b-8 border-black">
          <div className="relative bg-gradient-to-br from-purple-600 to-pink-600 border-b-8 border-black flex items-center justify-center p-8 animate-on-scroll transition-all duration-500 hover:scale-[1.02] hover:brightness-110" style={{ animationDelay: '0.2s' }}>
            <div className="text-center">
              <h3 className="text-4xl font-black text-white uppercase mb-3 transition-all duration-300 hover:scale-105" style={{
                fontFamily: 'Arial Black, sans-serif',
                textShadow: '3px 3px 0px rgba(0,0,0,0.5)',
              }}>
                SUPPLEMENTS
              </h3>
              <p className="text-xl text-white/90 font-bold">
                100% Natural • Medical Grade
              </p>
            </div>
          </div>
          
          <div className="relative bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center p-12 animate-on-scroll transition-all duration-500 hover:scale-[1.02] hover:brightness-110" style={{ animationDelay: '0.3s' }}>
            <div className="text-center max-w-2xl">
              <h3 className="text-6xl md:text-7xl font-black text-black uppercase mb-6 leading-none transition-all duration-300 hover:scale-105" style={{
                fontFamily: 'Arial Black, sans-serif',
                textShadow: '4px 4px 0px rgba(0,0,0,0.3)',
              }}>
                ACUPRESSURE<br/>THERAPY
              </h3>
              <p className="text-2xl text-black/90 font-bold">
                Pain Relief • Energy Balance • Stress Reduction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION GRID - NO GAPS */}
      <section className="grid grid-cols-1 md:grid-cols-[1.618fr_1fr]">
        
        {/* Green Panel */}
        <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 border-r-8 border-b-8 border-black min-h-[500px] flex items-center justify-center p-12 animate-on-scroll transition-all duration-500 hover:scale-[1.02] hover:brightness-110">
          <div className="text-center max-w-2xl">
            <h3 className="text-6xl md:text-8xl font-black text-black uppercase mb-6 leading-none transition-all duration-300 hover:scale-105" style={{
              fontFamily: 'Arial Black, sans-serif',
              textShadow: '5px 5px 0px rgba(0,0,0,0.3)',
            }}>
              20+ YEARS<br/>EXPERIENCE
            </h3>
            <p className="text-3xl text-black/90 font-bold">
              10,000+ Lives Transformed
            </p>
          </div>
        </div>

        {/* Cyan/Orange Split - NO GAPS */}
        <div className="grid grid-rows-[1fr_1.618fr] border-b-8 border-black">
          <div className="relative bg-gradient-to-br from-cyan-500 to-blue-500 border-b-8 border-black flex items-center justify-center p-8 animate-on-scroll transition-all duration-500 hover:scale-[1.02] hover:brightness-110" style={{ animationDelay: '0.2s' }}>
            <div className="text-center">
              <div className="text-7xl mb-4 transition-all duration-500 hover:scale-125">⚡</div>
              <h3 className="text-3xl font-black text-black uppercase transition-all duration-300 hover:scale-105" style={{
                fontFamily: 'Arial Black, sans-serif',
              }}>
                FAST RESULTS
              </h3>
            </div>
          </div>
          
          <div className="relative bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center p-12 animate-on-scroll transition-all duration-500 hover:scale-[1.02] hover:brightness-110" style={{ animationDelay: '0.3s' }}>
            <div className="text-center">
              <h3 className="text-5xl md:text-6xl font-black text-black uppercase mb-6 leading-none transition-all duration-300 hover:scale-105" style={{
                fontFamily: 'Arial Black, sans-serif',
                textShadow: '4px 4px 0px rgba(0,0,0,0.3)',
              }}>
                SCIENCE<br/>BACKED
              </h3>
              <p className="text-2xl text-black/90 font-bold">
                Evidence-Based Natural Medicine
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA PANEL - NO GAPS */}
      <section className="grid grid-cols-1 md:grid-cols-[1fr_1.618fr]">
        
        {/* Purple CTA */}
        <div className="relative bg-gradient-to-br from-purple-500 to-violet-600 border-r-8 border-b-8 border-black min-h-[500px] flex items-center justify-center p-12 animate-on-scroll transition-all duration-500 hover:scale-[1.02] hover:brightness-110">
          <div className="text-center">
            <div className="text-8xl mb-6 transition-all duration-500 hover:scale-125">📧</div>
            <h3 className="text-4xl font-black text-white uppercase mb-4 transition-all duration-300 hover:scale-105" style={{
              fontFamily: 'Arial Black, sans-serif',
              textShadow: '3px 3px 0px rgba(0,0,0,0.5)',
            }}>
              BOOK NOW
            </h3>
            <a 
              href="mailto:lawrencecorso1@gmail.com"
              className="inline-block bg-black text-yellow-400 px-8 py-4 border-4 border-black font-black text-xl uppercase transition-all duration-300 hover:bg-yellow-400 hover:text-black hover:scale-110"
            >
              EMAIL US
            </a>
          </div>
        </div>

        {/* Yellow/Pink Final - NO GAPS */}
        <div className="grid grid-rows-[1.618fr_1fr] border-b-8 border-black">
          <div className="relative bg-gradient-to-br from-yellow-400 to-orange-500 border-b-8 border-black flex items-center justify-center p-12 animate-on-scroll transition-all duration-500 hover:scale-[1.02] hover:brightness-110" style={{ animationDelay: '0.2s' }}>
            <div className="text-center max-w-xl">
              <h3 className="text-5xl md:text-6xl font-black text-black uppercase mb-6 leading-none transition-all duration-300 hover:scale-105" style={{
                fontFamily: 'Arial Black, sans-serif',
                textShadow: '4px 4px 0px rgba(0,0,0,0.3)',
              }}>
                YOUR HEALTH<br/>YOUR POWER
              </h3>
              <p className="text-2xl text-black/90 font-bold">
                Take Control Today
              </p>
            </div>
          </div>
          
          <div className="relative bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center p-8 animate-on-scroll transition-all duration-500 hover:scale-[1.02] hover:brightness-110" style={{ animationDelay: '0.3s' }}>
            <div className="text-center">
              <p className="text-2xl font-black text-white mb-4 transition-all duration-300 hover:scale-105" style={{
                fontFamily: 'Arial Black, sans-serif',
              }}>
                lawrencecorso1@gmail.com
              </p>
              <p className="text-lg text-white/90 font-bold">
                Chicago • Natural Healthcare
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />

      {/* NAVIGATION - LP-BOX STYLE - RESPONSIVE */}
      <nav className="sticky bottom-0 z-50 border-t-8 border-black">
        {/* Desktop Navigation */}
        <div className="hidden md:grid grid-cols-[1fr_1.618fr_1fr] h-24">
          
          {/* Logo Block - Red */}
          <div className="relative bg-gradient-to-br from-red-600 to-orange-600 border-r-8 border-black flex items-center justify-center transition-all duration-300 hover:brightness-110">
            <a href="/" className="text-4xl font-black text-black uppercase transition-all duration-300 hover:scale-110" style={{
              fontFamily: 'Arial Black, sans-serif',
              textShadow: '3px 3px 0px rgba(0,0,0,0.3)',
            }}>
              RUMI
            </a>
          </div>

          {/* Menu Grid - Center */}
          <div className="grid grid-cols-4 border-r-8 border-black">
            <a href="/" className="bg-gradient-to-br from-cyan-500 to-blue-500 border-r-8 border-black flex items-center justify-center font-black text-lg text-black uppercase transition-all duration-300 hover:brightness-110 hover:scale-105" style={{ fontFamily: 'Arial Black, sans-serif' }}>
              HOME
            </a>
            <a href="/shop" className="bg-gradient-to-br from-green-500 to-emerald-500 border-r-8 border-black flex items-center justify-center font-black text-lg text-black uppercase transition-all duration-300 hover:brightness-110 hover:scale-105" style={{ fontFamily: 'Arial Black, sans-serif' }}>
              SHOP
            </a>
            <a href="/blog" className="bg-gradient-to-br from-yellow-400 to-orange-500 border-r-8 border-black flex items-center justify-center font-black text-lg text-black uppercase transition-all duration-300 hover:brightness-110 hover:scale-105" style={{ fontFamily: 'Arial Black, sans-serif' }}>
              BLOG
            </a>
            <button
              onClick={() => document.getElementById('connect-modal')?.classList.toggle('hidden')}
              className="bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-black text-lg text-black uppercase transition-all duration-300 hover:brightness-110 hover:scale-105" style={{ fontFamily: 'Arial Black, sans-serif' }}
            >
              CONNECT
            </button>
          </div>

          {/* Share Block - Pink */}
          <div className="relative bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center">
            <button 
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: 'Rumi Healing Arts', url: window.location.href }).catch(() => {});
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Link copied!');
                }
              }}
              className="text-white transition-all duration-300 hover:scale-125 hover:rotate-12"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="grid md:hidden grid-cols-2 h-auto">
          <a href="/" className="bg-gradient-to-br from-cyan-500 to-blue-500 border-r-8 border-b-8 border-black flex items-center justify-center font-black text-sm text-black uppercase py-4 transition-all hover:brightness-110" style={{ fontFamily: 'Arial Black, sans-serif' }}>
            HOME
          </a>
          <a href="/shop" className="bg-gradient-to-br from-green-500 to-emerald-500 border-b-8 border-black flex items-center justify-center font-black text-sm text-black uppercase py-4 transition-all hover:brightness-110" style={{ fontFamily: 'Arial Black, sans-serif' }}>
            SHOP
          </a>
          <a href="/blog" className="bg-gradient-to-br from-yellow-400 to-orange-500 border-r-8 border-black flex items-center justify-center font-black text-sm text-black uppercase py-4 transition-all hover:brightness-110" style={{ fontFamily: 'Arial Black, sans-serif' }}>
            BLOG
          </a>
          <button
            onClick={() => document.getElementById('connect-modal')?.classList.toggle('hidden')}
            className="bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-black text-sm text-black uppercase py-4 transition-all hover:brightness-110" style={{ fontFamily: 'Arial Black, sans-serif' }}
          >
            CONNECT
          </button>
        </div>
      </nav>

      {/* CONNECT MODAL */}
      <div id="connect-modal" className="hidden fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
        <div className="relative bg-gradient-to-br from-purple-600 to-pink-600 border-8 border-black max-w-lg w-full p-6 rounded-3xl max-h-[90vh] overflow-y-auto" style={{
          boxShadow: '0 0 60px rgba(236,72,153,0.8)',
        }}>
          <button 
            onClick={() => document.getElementById('connect-modal')?.classList.add('hidden')}
            className="absolute top-2 right-2 text-black bg-yellow-400 hover:bg-yellow-300 rounded-full w-10 h-10 flex items-center justify-center text-2xl font-black border-4 border-black transition-all hover:scale-110"
          >
            ×
          </button>
          
          <h2 className="text-4xl md:text-5xl font-black text-black uppercase mb-6 text-center leading-none" style={{
            fontFamily: 'Arial Black, sans-serif',
            textShadow: '3px 3px 0px rgba(0,0,0,0.3)',
          }}>
            CONNECT
          </h2>

          <div className="space-y-4">
            <div className="bg-black/30 p-4 border-4 border-black rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="text-3xl">📧</div>
                <h3 className="text-xl font-black text-white uppercase" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                  EMAIL
                </h3>
              </div>
              <a href="mailto:lawrencecorso1@gmail.com" className="text-base font-bold text-yellow-300 hover:text-yellow-400 transition-colors break-all">
                lawrencecorso1@gmail.com
              </a>
            </div>

            <div className="bg-black/30 p-4 border-4 border-black rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="text-3xl">📱</div>
                <h3 className="text-xl font-black text-white uppercase" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                  PHONE
                </h3>
              </div>
              <a href="tel:+15551234567" className="text-base font-bold text-yellow-300 hover:text-yellow-400 transition-colors">
                (555) 123-4567
              </a>
            </div>

            <div className="bg-black/30 p-4 border-4 border-black rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="text-3xl">📍</div>
                <h3 className="text-xl font-black text-white uppercase" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                  LOCATION
                </h3>
              </div>
              <p className="text-base font-bold text-yellow-300">
                Chicago, Illinois
              </p>
            </div>
          </div>

          <div className="mt-4 text-center">
            <p className="text-sm font-bold text-white/90">
              Book your consultation today!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
