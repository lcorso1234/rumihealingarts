'use client';

export default function Footer() {
  return (
    <footer className="border-t-8 border-black mt-0">
      {/* Footer Grid - Golden Ratio */}
      <div className="grid grid-cols-1 md:grid-cols-[1.618fr_1fr]">
        
        {/* Left Section - Contact & Logo */}
        <div className="relative bg-gradient-to-br from-cyan-500 to-blue-600 border-r-8 border-b-8 border-black min-h-[400px] flex items-center justify-center p-12">
          <div className="text-center max-w-2xl">
            <h3 className="text-6xl md:text-7xl font-black text-black uppercase mb-6 leading-none" style={{
              fontFamily: 'Arial Black, sans-serif',
              textShadow: '4px 4px 0px rgba(0,0,0,0.3)',
            }}>
              RUMI<br/>HEALING
            </h3>
            <p className="text-2xl text-black/90 font-bold mb-4">
              Natural Healthcare Revolution
            </p>
            <p className="text-xl text-black/80 font-bold">
              📧 lawrencecorso1@gmail.com<br/>
              📍 Chicago, Illinois
            </p>
          </div>
        </div>

        {/* Right Section - Split Links */}
        <div className="grid grid-rows-[1fr_1.618fr] border-b-8 border-black">
          
          {/* Top - Quick Links */}
          <div className="relative bg-gradient-to-br from-purple-600 to-pink-600 border-b-8 border-black flex items-center justify-center p-8">
            <div className="text-center">
              <h4 className="text-3xl font-black text-white uppercase mb-4" style={{
                fontFamily: 'Arial Black, sans-serif',
                textShadow: '3px 3px 0px rgba(0,0,0,0.5)',
              }}>
                QUICK LINKS
              </h4>
              <div className="grid grid-cols-3 gap-4">
                <a href="/" className="text-white font-bold text-sm uppercase hover:text-yellow-400 transition-colors">
                  HOME
                </a>
                <a href="/shop" className="text-white font-bold text-sm uppercase hover:text-yellow-400 transition-colors">
                  SHOP
                </a>
                <a href="/blog" className="text-white font-bold text-sm uppercase hover:text-yellow-400 transition-colors">
                  BLOG
                </a>
              </div>
            </div>
          </div>

          {/* Bottom - Services & Copyright */}
          <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center p-12">
            <div className="text-center max-w-xl">
              <h4 className="text-4xl md:text-5xl font-black text-black uppercase mb-4 leading-none" style={{
                fontFamily: 'Arial Black, sans-serif',
                textShadow: '3px 3px 0px rgba(0,0,0,0.3)',
              }}>
                SERVICES
              </h4>
              <p className="text-lg text-black/90 font-bold mb-6">
                Health Checkups • Natural Supplements<br/>
                Acupressure Therapy • Wellness Coaching
              </p>
              <p className="text-sm text-black/70 font-bold">
                © 2025 Rumi Healing Arts. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Full Width */}
      <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 border-b-8 border-black p-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-black text-black uppercase" style={{
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
