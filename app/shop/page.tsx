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
    <div className="min-h-screen bg-black">
      
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
      `}</style>
      
      {/* HERO - Golden Ratio */}
      <section className="grid grid-cols-1 md:grid-cols-[1fr_1.618fr] min-h-screen">
        
        {/* Left - Green */}
        <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 border-r-8 border-b-8 border-black flex items-center justify-center p-12 animate-on-scroll transition-all duration-500 hover:scale-[1.02] hover:brightness-110">
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: 'radial-gradient(circle, black 2px, transparent 2px)',
            backgroundSize: '20px 20px',
          }}></div>
          
          <div className="relative z-10 text-center">
            <div className="text-9xl mb-8 transition-all duration-500 hover:scale-125 hover:rotate-12">💊</div>
            <h1 className="text-[10vw] md:text-8xl font-black text-black uppercase leading-none transition-all duration-300 hover:scale-105" style={{
              fontFamily: 'Arial Black, sans-serif',
              textShadow: '5px 5px 0px rgba(0,0,0,0.3)',
            }}>
              SHOP<br/>HEALING
            </h1>
          </div>
        </div>

        {/* Right - Purple */}
        <div className="relative bg-gradient-to-br from-purple-600 to-violet-700 border-b-8 border-black flex items-center justify-center p-12 animate-on-scroll transition-all duration-500 hover:scale-[1.02] hover:brightness-110" style={{ animationDelay: '0.2s' }}>
          <div className="text-center max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase mb-8 leading-tight" style={{
              fontFamily: 'Arial Black, sans-serif',
              textShadow: '4px 4px 0px rgba(0,0,0,0.5)',
            }}>
              NATURAL SUPPLEMENTS
            </h2>
            <p className="text-3xl text-white/90 font-bold">
              100% Organic • Medical Grade • Proven Results
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID - Golden Ratio */}
      <section className="grid grid-cols-1 md:grid-cols-[1.618fr_1fr]">
        
        {/* Product 1 - Red/Orange */}
        <div className="relative bg-gradient-to-br from-red-500 to-orange-600 border-r-8 border-b-8 border-black min-h-[500px] flex items-center justify-center p-12 animate-on-scroll transition-all duration-500 hover:scale-[1.02] hover:brightness-110">
          <div className="text-center max-w-xl">
            <h3 className="text-6xl md:text-7xl font-black text-black uppercase mb-6 leading-none" style={{
              fontFamily: 'Arial Black, sans-serif',
              textShadow: '4px 4px 0px rgba(0,0,0,0.3)',
            }}>
              IMMUNITY<br/>BOOST
            </h3>
            <p className="text-2xl text-black/90 font-bold mb-6">
              Elderberry • Zinc • Vitamin C • Echinacea
            </p>
            <div className="text-5xl font-black text-black">$39</div>
          </div>
        </div>

        {/* Blue/Yellow Split */}
        <div className="grid grid-rows-[1fr_1.618fr] border-b-8 border-black">
          <div className="relative bg-gradient-to-br from-blue-600 to-cyan-500 border-b-8 border-black flex items-center justify-center p-8 animate-on-scroll transition-all duration-500 hover:scale-[1.02] hover:brightness-110" style={{ animationDelay: '0.2s' }}>
            <div className="text-center">
              <h3 className="text-4xl font-black text-black uppercase mb-3" style={{
                fontFamily: 'Arial Black, sans-serif',
              }}>
                ENERGY BLEND
              </h3>
              <p className="text-xl text-black/80 font-bold mb-3">
                B-Complex • Ginseng • Ashwagandha
              </p>
              <div className="text-4xl font-black text-black">$45</div>
            </div>
          </div>
          
          <div className="relative bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center p-12 animate-on-scroll transition-all duration-500 hover:scale-[1.02] hover:brightness-110" style={{ animationDelay: '0.3s' }}>
            <div className="text-center">
              <h3 className="text-5xl md:text-6xl font-black text-black uppercase mb-6 leading-none" style={{
                fontFamily: 'Arial Black, sans-serif',
                textShadow: '4px 4px 0px rgba(0,0,0,0.3)',
              }}>
                SLEEP<br/>SUPPORT
              </h3>
              <p className="text-2xl text-black/90 font-bold mb-4">
                Melatonin • Magnesium • Valerian Root
              </p>
              <div className="text-5xl font-black text-black">$35</div>
            </div>
          </div>
        </div>
      </section>

      {/* MORE PRODUCTS */}
      <section className="grid grid-cols-1 md:grid-cols-[1fr_1.618fr]">
        
        {/* Pink Product */}
        <div className="relative bg-gradient-to-br from-pink-500 to-rose-600 border-r-8 border-b-8 border-black min-h-[500px] flex items-center justify-center p-12 animate-on-scroll transition-all duration-500 hover:scale-[1.02] hover:brightness-110">
          <div className="text-center">
            <div className="text-8xl mb-6">🌸</div>
            <h3 className="text-5xl font-black text-black uppercase mb-4 leading-tight" style={{
              fontFamily: 'Arial Black, sans-serif',
            }}>
              STRESS<br/>RELIEF
            </h3>
            <p className="text-xl text-black/90 font-bold mb-4">
              Adaptogenic Formula
            </p>
            <div className="text-5xl font-black text-black">$42</div>
          </div>
        </div>

        {/* Orange/Cyan Split */}
        <div className="grid grid-rows-[1.618fr_1fr] border-b-8 border-black">
          <div className="relative bg-gradient-to-br from-orange-500 to-red-500 border-b-8 border-black flex items-center justify-center p-12 animate-on-scroll transition-all duration-500 hover:scale-[1.02] hover:brightness-110" style={{ animationDelay: '0.2s' }}>
            <div className="text-center max-w-xl">
              <h3 className="text-5xl md:text-6xl font-black text-black uppercase mb-6 leading-none" style={{
                fontFamily: 'Arial Black, sans-serif',
                textShadow: '4px 4px 0px rgba(0,0,0,0.3)',
              }}>
                JOINT<br/>HEALTH
              </h3>
              <p className="text-2xl text-black/90 font-bold mb-4">
                Turmeric • Glucosamine • MSM • Collagen
              </p>
              <div className="text-5xl font-black text-black">$48</div>
            </div>
          </div>
          
          <div className="relative bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center p-8 animate-on-scroll transition-all duration-500 hover:scale-[1.02] hover:brightness-110" style={{ animationDelay: '0.3s' }}>
            <div className="text-center">
              <h3 className="text-4xl font-black text-black uppercase mb-3" style={{
                fontFamily: 'Arial Black, sans-serif',
              }}>
                DIGESTION
              </h3>
              <p className="text-xl text-black/80 font-bold mb-3">
                Probiotics • Enzymes • Ginger
              </p>
              <div className="text-4xl font-black text-black">$38</div>
            </div>
          </div>
        </div>
      </section>

      {/* QUALITY GUARANTEE */}
      <section className="grid grid-cols-1 md:grid-cols-[1.618fr_1fr]">
        
        {/* Purple Statement */}
        <div className="relative bg-gradient-to-br from-purple-500 to-violet-600 border-r-8 border-b-8 border-black min-h-[500px] flex items-center justify-center p-12 animate-on-scroll transition-all duration-500 hover:scale-[1.02] hover:brightness-110">
          <div className="text-center max-w-2xl">
            <h3 className="text-6xl md:text-8xl font-black text-white uppercase mb-8 leading-none" style={{
              fontFamily: 'Arial Black, sans-serif',
              textShadow: '5px 5px 0px rgba(0,0,0,0.5)',
            }}>
              100%<br/>PURE
            </h3>
            <p className="text-3xl text-white/90 font-bold">
              No Fillers • No Additives • Just Results
            </p>
          </div>
        </div>

        {/* Green/Yellow Split */}
        <div className="grid grid-rows-[1fr_1.618fr] border-b-8 border-black">
          <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 border-b-8 border-black flex items-center justify-center p-8 animate-on-scroll transition-all duration-500 hover:scale-[1.02] hover:brightness-110" style={{ animationDelay: '0.2s' }}>
            <div className="text-center">
              <div className="text-7xl mb-4">✓</div>
              <h3 className="text-3xl font-black text-black uppercase" style={{
                fontFamily: 'Arial Black, sans-serif',
              }}>
                CERTIFIED
              </h3>
            </div>
          </div>
          
          <div className="relative bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center p-12 animate-on-scroll transition-all duration-500 hover:scale-[1.02] hover:brightness-110" style={{ animationDelay: '0.3s' }}>
            <div className="text-center">
              <h3 className="text-5xl md:text-6xl font-black text-black uppercase mb-6 leading-none" style={{
                fontFamily: 'Arial Black, sans-serif',
                textShadow: '4px 4px 0px rgba(0,0,0,0.3)',
              }}>
                TESTED<br/>PROVEN
              </h3>
              <p className="text-2xl text-black/90 font-bold">
                Third-Party Lab Verified
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ORDER CTA */}
      <section className="grid grid-cols-1 md:grid-cols-[1fr_1.618fr]">
        
        {/* Red CTA */}
        <div className="relative bg-gradient-to-br from-red-600 to-rose-700 border-r-8 border-b-8 border-black min-h-[500px] flex items-center justify-center p-12 animate-on-scroll transition-all duration-500 hover:scale-[1.02] hover:brightness-110">
          <div className="text-center">
            <div className="text-8xl mb-6">📦</div>
            <h3 className="text-4xl font-black text-white uppercase mb-6" style={{
              fontFamily: 'Arial Black, sans-serif',
              textShadow: '3px 3px 0px rgba(0,0,0,0.5)',
            }}>
              ORDER NOW
            </h3>
            <a 
              href="mailto:lawrencecorso1@gmail.com?subject=Supplement Order"
              className="inline-block bg-black text-green-400 px-8 py-4 border-4 border-black font-black text-xl uppercase hover:bg-green-400 hover:text-black transition-all"
            >
              EMAIL ORDER
            </a>
          </div>
        </div>

        {/* Blue/Orange Final */}
        <div className="grid grid-rows-[1.618fr_1fr] border-b-8 border-black">
          <div className="relative bg-gradient-to-br from-blue-600 to-cyan-600 border-b-8 border-black flex items-center justify-center p-12 animate-on-scroll transition-all duration-500 hover:scale-[1.02] hover:brightness-110" style={{ animationDelay: '0.2s' }}>
            <div className="text-center max-w-xl">
              <h3 className="text-5xl md:text-6xl font-black text-black uppercase mb-6 leading-none" style={{
                fontFamily: 'Arial Black, sans-serif',
                textShadow: '4px 4px 0px rgba(0,0,0,0.3)',
              }}>
                FREE<br/>SHIPPING
              </h3>
              <p className="text-2xl text-black/90 font-bold">
                On Orders Over $50
              </p>
            </div>
          </div>
          
          <div className="relative bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center p-8 animate-on-scroll transition-all duration-500 hover:scale-[1.02] hover:brightness-110" style={{ animationDelay: '0.3s' }}>
            <div className="text-center">
              <p className="text-2xl font-black text-black mb-3" style={{
                fontFamily: 'Arial Black, sans-serif',
              }}>
                Questions?
              </p>
              <p className="text-xl text-black/90 font-bold">
                lawrencecorso1@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />

      {/* NAVIGATION - Bottom Fixed */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t-8 border-black">
        <div className="bg-black/95 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            
            {/* Logo */}
            <div className="text-2xl font-black text-white uppercase" style={{
              fontFamily: 'Arial Black, sans-serif',
            }}>
              RUMI
            </div>

            {/* Menu */}
            <div className="flex gap-4">
              <a href="/" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-black px-8 py-3 font-black text-base uppercase border-4 border-black hover:scale-105 transition-all" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                HOME
              </a>
              <a href="/shop" className="bg-gradient-to-r from-green-500 to-emerald-500 text-black px-8 py-3 font-black text-base uppercase border-4 border-black hover:scale-105 transition-all" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                SHOP
              </a>
              <a href="/blog" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-3 font-black text-base uppercase border-4 border-black hover:scale-105 transition-all" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                BLOG
              </a>
              <button
                onClick={() => document.getElementById('connect-modal')?.classList.toggle('hidden')}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-black px-8 py-3 font-black text-base uppercase border-4 border-black hover:scale-105 transition-all" style={{ fontFamily: 'Arial Black, sans-serif' }}
              >
                CONNECT
              </button>
            </div>

            {/* Icons */}
            <div className="flex gap-3">
              <button 
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({ title: 'Rumi Healing Shop', url: window.location.href }).catch(() => {});
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Link copied!');
                  }
                }}
                className="bg-gradient-to-br from-orange-500 to-red-500 text-white p-3 border-4 border-black hover:scale-110 transition-all"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* CONNECT MODAL */}
      <div id="connect-modal" className="hidden fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
        <div className="relative bg-gradient-to-br from-purple-600 to-pink-600 border-8 border-black max-w-2xl w-full p-12 rounded-3xl" style={{
          boxShadow: '0 0 60px rgba(236,72,153,0.8)',
        }}>
          <button 
            onClick={() => document.getElementById('connect-modal')?.classList.add('hidden')}
            className="absolute top-4 right-4 text-black bg-yellow-400 hover:bg-yellow-300 rounded-full w-12 h-12 flex items-center justify-center text-3xl font-black border-4 border-black transition-all hover:scale-110"
          >
            ×
          </button>
          
          <h2 className="text-6xl md:text-7xl font-black text-black uppercase mb-8 text-center leading-none" style={{
            fontFamily: 'Arial Black, sans-serif',
            textShadow: '4px 4px 0px rgba(0,0,0,0.3)',
          }}>
            CONNECT<br/>WITH US
          </h2>

          <div className="space-y-6">
            <div className="bg-black/30 p-8 border-4 border-black rounded-2xl">
              <div className="flex items-center gap-4 mb-3">
                <div className="text-5xl">📧</div>
                <h3 className="text-3xl font-black text-white uppercase" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                  EMAIL
                </h3>
              </div>
              <a href="mailto:lawrencecorso1@gmail.com" className="text-2xl font-bold text-yellow-300 hover:text-yellow-400 transition-colors break-all">
                lawrencecorso1@gmail.com
              </a>
            </div>

            <div className="bg-black/30 p-8 border-4 border-black rounded-2xl">
              <div className="flex items-center gap-4 mb-3">
                <div className="text-5xl">📱</div>
                <h3 className="text-3xl font-black text-white uppercase" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                  PHONE
                </h3>
              </div>
              <a href="tel:+15551234567" className="text-2xl font-bold text-yellow-300 hover:text-yellow-400 transition-colors">
                (555) 123-4567
              </a>
            </div>

            <div className="bg-black/30 p-8 border-4 border-black rounded-2xl">
              <div className="flex items-center gap-4 mb-3">
                <div className="text-5xl">📍</div>
                <h3 className="text-3xl font-black text-white uppercase" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                  LOCATION
                </h3>
              </div>
              <p className="text-2xl font-bold text-yellow-300">
                Chicago, Illinois
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-xl font-bold text-white/90">
              Book your consultation today!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
