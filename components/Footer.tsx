'use client';

export default function Footer() {
  return (
    <footer className="border-t-8 border-black mt-0">
      {/* BEFORE & AFTER TRANSFORMATION - NO GAPS */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        
        {/* BEFORE - Left Column */}
        <div className="relative bg-gradient-to-br from-gray-600 to-slate-700 border-r-8 border-b-8 border-black min-h-[400px] sm:min-h-[450px] md:min-h-[500px] flex items-center justify-center px-6 py-12 sm:px-10 sm:py-14 lg:px-12 lg:py-16">
          <div className="text-center max-w-lg">
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6">😔</div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase mb-8 leading-none" style={{
              fontFamily: 'Arial Black, sans-serif',
              textShadow: '3px 3px 0px rgba(0,0,0,0.5)',
            }}>
              BEFORE<br/>RUMI HEALING
            </h3>
            <ul className="space-y-3 text-left max-w-md mx-auto">
              <li className="flex items-start gap-3">
                <span className="text-red-400 text-xl font-black flex-shrink-0">✗</span>
                <span className="text-base sm:text-lg text-white/90 font-bold">Chronic pain and fatigue</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 text-xl font-black flex-shrink-0">✗</span>
                <span className="text-base sm:text-lg text-white/90 font-bold">Feeling lost and overwhelmed</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 text-xl font-black flex-shrink-0">✗</span>
                <span className="text-base sm:text-lg text-white/90 font-bold">Dependent on medications</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 text-xl font-black flex-shrink-0">✗</span>
                <span className="text-base sm:text-lg text-white/90 font-bold">Low energy and motivation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 text-xl font-black flex-shrink-0">✗</span>
                <span className="text-base sm:text-lg text-white/90 font-bold">Disconnected from natural healing</span>
              </li>
            </ul>
          </div>
        </div>

        {/* AFTER - Right Column */}
        <div className="relative bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600 border-b-8 border-black min-h-[400px] sm:min-h-[450px] md:min-h-[500px] flex items-center justify-center px-6 py-12 sm:px-10 sm:py-14 lg:px-12 lg:py-16">
          <div className="text-center max-w-lg">
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6">😊</div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-black uppercase mb-8 leading-none" style={{
              fontFamily: 'Arial Black, sans-serif',
              textShadow: '3px 3px 0px rgba(255,255,255,0.3)',
            }}>
              AFTER<br/>RUMI HEALING
            </h3>
            <ul className="space-y-3 text-left max-w-md mx-auto">
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 text-xl font-black flex-shrink-0">✓</span>
                <span className="text-base sm:text-lg text-black font-bold">Pain-free and energized</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 text-xl font-black flex-shrink-0">✓</span>
                <span className="text-base sm:text-lg text-black font-bold">Clear direction and confidence</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 text-xl font-black flex-shrink-0">✓</span>
                <span className="text-base sm:text-lg text-black font-bold">Natural healing solutions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 text-xl font-black flex-shrink-0">✓</span>
                <span className="text-base sm:text-lg text-black font-bold">Vibrant energy daily</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 text-xl font-black flex-shrink-0">✓</span>
                <span className="text-base sm:text-lg text-black font-bold">Connected to your body's wisdom</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Grid - Golden Ratio */}
      <div className="grid grid-cols-1 md:grid-cols-[1.618fr_1fr]">
        
        {/* Left Section - Contact & Logo */}
        <div className="relative bg-gradient-to-br from-cyan-500 to-blue-600 border-r-8 border-b-8 border-black min-h-[320px] sm:min-h-[360px] md:min-h-[400px] flex items-center justify-center px-6 py-12 sm:px-10 sm:py-14 lg:px-12 lg:py-16">
          <div className="text-center max-w-2xl">
            <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black uppercase mb-6 leading-none" style={{
              fontFamily: 'Arial Black, sans-serif',
              textShadow: '4px 4px 0px rgba(0,0,0,0.3)',
            }}>
              RUMI<br/>HEALING
            </h3>
            <p className="text-lg sm:text-xl md:text-2xl text-black/90 font-bold mb-4">
              Natural Healthcare Revolution
            </p>
            <p className="text-base sm:text-lg md:text-xl text-black/80 font-bold">
              📧 lawrencecorso1@gmail.com<br/>
              📍 12803 Circle Pkwy<br/>
              Palos Park, IL 60464
            </p>
          </div>
        </div>

        {/* Right Section - Split Links */}
        <div className="grid grid-rows-[1fr_1.618fr] border-b-8 border-black">
          
          {/* Top - Quick Links */}
          <div className="relative bg-gradient-to-br from-purple-600 to-pink-600 border-b-8 border-black flex items-center justify-center px-5 py-8 sm:px-7 sm:py-10 lg:px-8 lg:py-12">
            <div className="text-center">
              <h4 className="text-2xl sm:text-3xl font-black text-white uppercase mb-4" style={{
                fontFamily: 'Arial Black, sans-serif',
                textShadow: '3px 3px 0px rgba(0,0,0,0.5)',
              }}>
                QUICK LINKS
              </h4>
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                <a href="/" className="text-white font-bold text-xs sm:text-sm uppercase hover:text-yellow-400 transition-colors">
                  HOME
                </a>
                <a href="/shop" className="text-white font-bold text-xs sm:text-sm uppercase hover:text-yellow-400 transition-colors">
                  SHOP
                </a>
                <a href="/blog" className="text-white font-bold text-xs sm:text-sm uppercase hover:text-yellow-400 transition-colors">
                  BLOG
                </a>
              </div>
            </div>
          </div>

          {/* Bottom - Services & Copyright */}
          <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center px-6 py-12 sm:px-10 sm:py-14 lg:px-12 lg:py-16">
            <div className="text-center max-w-xl">
              <h4 className="text-3xl sm:text-4xl md:text-5xl font-black text-black uppercase mb-4 leading-none" style={{
                fontFamily: 'Arial Black, sans-serif',
                textShadow: '3px 3px 0px rgba(0,0,0,0.3)',
              }}>
                SERVICES
              </h4>
              <p className="text-sm sm:text-base md:text-lg text-black/90 font-bold mb-6">
                Personalized consultations • Integrative wellness plans<br/>
                Restorative bodywork • Ongoing lifestyle support
              </p>
              <p className="text-xs sm:text-sm text-black/70 font-bold">
                © 2025 Rumi Healing Arts. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Full Width */}
      <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 border-b-8 border-black px-4 py-6 sm:px-6 sm:py-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xl sm:text-2xl md:text-3xl font-black text-black uppercase" style={{
            fontFamily: 'Arial Black, sans-serif',
            textShadow: '2px 2px 0px rgba(0,0,0,0.3)',
          }}>
            TRANSFORM YOUR HEALTH • RECLAIM YOUR POWER • LIVE NATURALLY
          </p>
        </div>
      </div>
    </footer>
  );
}
