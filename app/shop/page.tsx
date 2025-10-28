'use client';

import { useEffect } from 'react';
import Footer from '@/components/Footer';

export default function Shop() {
  useEffect(() => {
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
    <div className="min-h-screen bg-black border-8 border-white shadow-2xl box-border overflow-x-hidden">
      
      <style jsx global>{`
        body {
          overflow-x: hidden;
        }
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
      
      {/* HERO */}
      <section className="grid grid-cols-1 min-h-[calc(100vh-24px)]">
        <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 border-b-8 border-black flex items-center justify-center px-6 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16 animate-on-scroll transition-all duration-500 hover:scale-[1.02] hover:brightness-110">
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: 'radial-gradient(circle, black 2px, transparent 2px)',
            backgroundSize: '20px 20px',
          }}></div>
          
          <div className="relative z-10 text-center max-w-2xl">
            <div className="text-[clamp(3.5rem,8vw,6rem)] mb-6 transition-all duration-500 hover:scale-125 hover:rotate-12">💊</div>
            <h1 className="text-[clamp(3.75rem,11vw,6.75rem)] font-black text-black uppercase leading-none mb-6 transition-all duration-300 hover:scale-105" style={{
              fontFamily: 'Arial Black, sans-serif',
              textShadow: '6px 6px 0px rgba(0,0,0,0.3)',
            }}>
              WELLNESS<br/>MARKET
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-black/90 uppercase tracking-wider">
              Curated Essentials For Everyday Balance
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION 1 - Golden Ratio */}
      <section className="grid grid-cols-1 md:grid-cols-[1fr_1.618fr]">
        
        {/* Product 1 - Red/Orange */}
        <div className="relative bg-gradient-to-br from-red-500 to-orange-600 border-r-8 border-b-8 border-black min-h-[360px] sm:min-h-[420px] md:min-h-[500px] flex items-center justify-center px-6 py-12 sm:px-10 sm:py-14 lg:px-12 lg:py-16 animate-on-scroll transition-all duration-500 hover:scale-[1.02] hover:brightness-110">
          <div className="text-center max-w-xl">
            <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black uppercase mb-6 leading-none transition-all duration-300 hover:scale-105" style={{
              fontFamily: 'Arial Black, sans-serif',
              textShadow: '4px 4px 0px rgba(0,0,0,0.3)',
            }}>
              DAILY VITALITY
            </h3>
            <p className="text-lg sm:text-xl md:text-2xl text-black/90 font-bold mb-6">
              Build resilience with nutrient-dense blends crafted to keep your momentum steady.
            </p>
            <p className="text-base sm:text-lg md:text-xl font-black text-black uppercase tracking-wide">
              Custom tailored sets
            </p>
          </div>
        </div>

        {/* Blue/Yellow Split */}
        <div className="grid grid-rows-[1fr_1.618fr] border-b-8 border-black">
          <div className="relative bg-gradient-to-br from-blue-600 to-cyan-500 border-b-8 border-black flex items-center justify-center px-5 py-10 sm:px-7 sm:py-12 lg:px-8 lg:py-14 animate-on-scroll transition-all duration-500 hover:scale-[1.02] hover:brightness-110" style={{ animationDelay: '0.2s' }}>
            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-black uppercase mb-3 transition-all duration-300 hover:scale-105" style={{
                fontFamily: 'Arial Black, sans-serif',
              }}>
                CLARITY & FOCUS
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-black/80 font-bold mb-3">
                Support productive days with botanicals selected to sharpen and sustain attention.
              </p>
              <p className="text-sm sm:text-base md:text-lg font-black text-black uppercase tracking-wide">
                Mix & match formulas
              </p>
            </div>
          </div>
          
          <div className="relative bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center px-6 py-12 sm:px-10 sm:py-14 lg:px-12 lg:py-16 animate-on-scroll transition-all duration-500 hover:scale-[1.02] hover:brightness-110" style={{ animationDelay: '0.3s' }}>
            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black uppercase mb-6 leading-none transition-all duration-300 hover:scale-105" style={{
                fontFamily: 'Arial Black, sans-serif',
                textShadow: '4px 4px 0px rgba(0,0,0,0.3)',
              }}>
                EVENING RESET
              </h3>
              <p className="text-lg sm:text-xl md:text-2xl text-black/90 font-bold mb-4">
                Drift into calm nights with gentle blends that settle the mind and soften tension.
              </p>
              <p className="text-base sm:text-lg md:text-xl font-black text-black uppercase tracking-wide">
                Crafted per consultation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION 2 - Golden Ratio Reversed */}
      <section className="grid grid-cols-1 md:grid-cols-[1.618fr_1fr]">
        
        {/* Pink/Orange Split */}
        <div className="grid grid-rows-[1fr_1.618fr] border-r-8 border-b-8 border-black">
          <div className="relative bg-gradient-to-br from-pink-500 to-rose-600 border-b-8 border-black flex items-center justify-center px-5 py-10 sm:px-7 sm:py-12 lg:px-8 lg:py-14 animate-on-scroll transition-all duration-500 hover:scale-[1.02] hover:brightness-110">
            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-black uppercase mb-3 transition-all duration-300 hover:scale-105" style={{
                fontFamily: 'Arial Black, sans-serif',
              }}>
                CALM MORNINGS
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-black/80 font-bold mb-3">
                Start grounded with adaptogenic support designed for centered, clear beginnings.
              </p>
              <p className="text-sm sm:text-base md:text-lg font-black text-black uppercase tracking-wide">
                Guided pairing suggestions
              </p>
            </div>
          </div>
          
          <div className="relative bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center px-6 py-12 sm:px-10 sm:py-14 lg:px-12 lg:py-16 animate-on-scroll transition-all duration-500 hover:scale-[1.02] hover:brightness-110" style={{ animationDelay: '0.2s' }}>
            <div className="text-center max-w-xl">
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black uppercase mb-6 leading-none transition-all duration-300 hover:scale-105" style={{
                fontFamily: 'Arial Black, sans-serif',
                textShadow: '4px 4px 0px rgba(0,0,0,0.3)',
              }}>
                ACTIVE RECOVERY
              </h3>
              <p className="text-lg sm:text-xl md:text-2xl text-black/90 font-bold mb-4">
                Move freely with restorative blends that tend to muscles, joints, and post-workout repair.
              </p>
              <p className="text-base sm:text-lg md:text-xl font-black text-black uppercase tracking-wide">
                Personalized recovery kits
              </p>
            </div>
          </div>
        </div>

        {/* Product 6 - Cyan */}
        <div className="relative bg-gradient-to-br from-cyan-500 to-blue-600 border-b-8 border-black min-h-[360px] sm:min-h-[420px] md:min-h-[500px] flex items-center justify-center px-6 py-12 sm:px-10 sm:py-14 lg:px-12 lg:py-16 animate-on-scroll transition-all duration-500 hover:scale-[1.02] hover:brightness-110" style={{ animationDelay: '0.3s' }}>
          <div className="text-center max-w-xl">
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6 transition-all duration-500 hover:scale-125">🌿</div>
            <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black uppercase mb-6 leading-none transition-all duration-300 hover:scale-105" style={{
              fontFamily: 'Arial Black, sans-serif',
              textShadow: '4px 4px 0px rgba(0,0,0,0.3)',
            }}>
              RENEW & RESTORE
            </h3>
            <p className="text-lg sm:text-xl md:text-2xl text-black/90 font-bold mb-6">
              Soothe from within with rituals that nurture digestion and long-term wellness habits.
            </p>
            <p className="text-base sm:text-lg md:text-xl font-black text-black uppercase tracking-wide">
              Available in seasonal cycles
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION - Golden Ratio */}
      <section className="grid grid-cols-1 md:grid-cols-[1fr_1.618fr]">
        
        {/* Order CTA */}
        <div className="relative bg-gradient-to-br from-red-600 to-rose-700 border-r-8 border-b-8 border-black min-h-[360px] sm:min-h-[420px] md:min-h-[500px] flex items-center justify-center px-6 py-12 sm:px-10 sm:py-14 lg:px-12 lg:py-16 animate-on-scroll transition-all duration-500 hover:scale-[1.02] hover:brightness-110">
          <div className="text-center">
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6 transition-all duration-500 hover:scale-125">📦</div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase mb-6 transition-all duration-300 hover:scale-105" style={{
              fontFamily: 'Arial Black, sans-serif',
              textShadow: '3px 3px 0px rgba(0,0,0,0.5)',
            }}>
              CURATE YOUR KIT
            </h3>
            <a 
              href="mailto:lawrencecorso1@gmail.com?subject=Wellness Shop Inquiry"
              className="inline-block bg-black text-green-400 px-6 py-3 sm:px-8 sm:py-4 border-4 border-black font-black text-base sm:text-lg md:text-xl uppercase transition-all duration-300 hover:bg-green-400 hover:text-black hover:scale-110"
            >
              START A CONVERSATION
            </a>
          </div>
        </div>

        {/* Purple/Blue Split */}
        <div className="grid grid-rows-[1.618fr_1fr] border-b-8 border-black">
          <div className="relative bg-gradient-to-br from-purple-500 to-violet-600 border-b-8 border-black flex items-center justify-center px-6 py-12 sm:px-10 sm:py-14 lg:px-12 lg:py-16 animate-on-scroll transition-all duration-500 hover:scale-[1.02] hover:brightness-110" style={{ animationDelay: '0.2s' }}>
            <div className="text-center max-w-xl">
              <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase mb-6 leading-none transition-all duration-300 hover:scale-105" style={{
                fontFamily: 'Arial Black, sans-serif',
                textShadow: '4px 4px 0px rgba(0,0,0,0.5)',
              }}>
                QUALITY YOU<br/>CAN TRUST
              </h3>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-bold">
                Every product is vetted for potency, purity, and alignment with holistic values.
              </p>
            </div>
          </div>
          
          <div className="relative bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center px-5 py-10 sm:px-7 sm:py-12 lg:px-8 lg:py-14 animate-on-scroll transition-all duration-500 hover:scale-[1.02] hover:brightness-110" style={{ animationDelay: '0.3s' }}>
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-black uppercase mb-3 transition-all duration-300 hover:scale-105" style={{
                fontFamily: 'Arial Black, sans-serif',
              }}>
                FLEXIBLE DELIVERY
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-black/90 font-bold">
                Pick up in studio or ship straight to your door—whatever supports your routine.
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
          <div className="relative bg-gradient-to-br from-red-600 to-orange-600 border-r-8 border-black flex items-center justify-center transition-all duration-300 hover:brightness-110">
            <a href="/" className="text-4xl font-black text-black uppercase transition-all duration-300 hover:scale-110" style={{
              fontFamily: 'Arial Black, sans-serif',
              textShadow: '3px 3px 0px rgba(0,0,0,0.3)',
            }}>
              RUMI
            </a>
          </div>
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
          <div className="relative bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center">
            <button 
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: 'Rumi Healing Shop', url: window.location.href }).catch(() => {});
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
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black uppercase mb-6 text-center leading-none" style={{
            fontFamily: 'Arial Black, sans-serif',
            textShadow: '3px 3px 0px rgba(0,0,0,0.3)',
          }}>
            CONNECT
          </h2>

          <div className="space-y-4">
            <div className="bg-black/30 p-4 border-4 border-black rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="text-3xl">📧</div>
                <h3 className="text-lg sm:text-xl font-black text-white uppercase" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                  EMAIL
                </h3>
              </div>
              <a href="mailto:lawrencecorso1@gmail.com" className="text-sm sm:text-base font-bold text-yellow-300 hover:text-yellow-400 transition-colors break-all">
                lawrencecorso1@gmail.com
              </a>
            </div>

            <div className="bg-black/30 p-4 border-4 border-black rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="text-3xl">📱</div>
                <h3 className="text-lg sm:text-xl font-black text-white uppercase" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                  PHONE
                </h3>
              </div>
              <a href="tel:+17089326851" className="text-sm sm:text-base font-bold text-yellow-300 hover:text-yellow-400 transition-colors">
                1.708.932.6851
              </a>
            </div>

            <div className="bg-black/30 p-4 border-4 border-black rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="text-3xl">📍</div>
                <h3 className="text-lg sm:text-xl font-black text-white uppercase" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                  LOCATION
                </h3>
              </div>
              <p className="text-sm sm:text-base font-bold text-yellow-300">
                12803 Circle Pkwy<br/>
                Palos Park, IL 60464
              </p>
            </div>
          </div>

          <div className="mt-4 text-center">
            <p className="text-xs sm:text-sm font-bold text-white/90">
              Book your consultation today!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
