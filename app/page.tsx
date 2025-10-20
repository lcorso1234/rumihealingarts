import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Rumi Healing Arts - Earth-Centered Holistic Healing",
  description:
    "Experience holistic healing that encompasses your entire life - business, wellness, fashion, movement, and spirit. Rooted in earth's ancient wisdom.",
  keywords: [
    "holistic healing",
    "business healing",
    "qi gong",
    "tai chi",
    "holistic fashion",
    "earth healing",
    "supplements",
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 px-8 py-12 space-y-12 max-w-[1400px] mx-auto">
        
        {/* Section 1: Business Healing - Text Left, Image Right */}
        <div className="relative rounded-[40px] border-4 border-blue-400 bg-gradient-to-br from-purple-300 via-blue-300 to-teal-300 overflow-hidden min-h-[600px]">
          <div className="grid grid-cols-2 h-full">
            {/* Left side - Text */}
            <div className="flex items-center p-16">
              <div>
                <h1 className="text-white font-bold text-7xl leading-tight uppercase tracking-wide mb-8">
                  HEAL YOUR<br />
                  BUSINESS<br />
                  FROM THE<br />
                  ROOTS UP.
                </h1>
                <p className="text-white text-xl leading-relaxed">
                  Transform toxic workplace cultures into thriving ecosystems. We guide leaders to align their business with earth-conscious values, creating sustainable growth that honors both profit and planet.
                </p>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="relative h-full">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop"
                alt="Team collaboration"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Qi Gong & Tai Chi - Image Left, Text Right */}
        <div className="relative rounded-[40px] border-4 border-green-400 bg-gradient-to-br from-green-300 via-emerald-300 to-teal-300 overflow-hidden min-h-[600px]">
          <div className="grid grid-cols-2 h-full">
            {/* Left side - Image */}
            <div className="relative h-full">
              <img 
                src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&h=800&fit=crop"
                alt="Person practicing Tai Chi in nature"
                className="w-full h-full object-cover opacity-80"
              />
            </div>

            {/* Right side - Text */}
            <div className="flex items-center p-16">
              <div>
                <h1 className="text-white font-bold text-7xl leading-tight uppercase tracking-wide mb-8">
                  CULTIVATE<br />
                  VITAL ENERGY<br />
                  THROUGH<br />
                  MOVEMENT.
                </h1>
                <p className="text-white text-xl leading-relaxed">
                  Ancient Chinese practices of Qi Gong and Tai Chi restore balance to your body's energy systems. Through slow, mindful movements and breathwork, reconnect with the life force that flows through all living things.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Supplements - Centered Text Over Image */}
        <div className="relative rounded-[40px] border-4 border-teal-400 bg-gradient-to-br from-teal-300 via-cyan-300 to-blue-300 overflow-hidden min-h-[600px] flex items-center justify-center">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1400&h=800&fit=crop"
              alt="Fresh herbs and botanical ingredients"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/40 via-cyan-500/40 to-blue-500/40"></div>
          </div>

          {/* Centered Text Content */}
          <div className="relative z-10 text-center px-16 max-w-4xl">
            <h1 className="text-white font-bold text-7xl leading-tight uppercase tracking-wide mb-8">
              NATURE'S<br />
              MEDICINE<br />
              FOR YOUR<br />
              WELLNESS.
            </h1>
            <p className="text-white text-2xl leading-relaxed">
              Pure botanical supplements sourced directly from the earth. Adaptogenic herbs, medicinal mushrooms, and plant-based nutrition support your body's innate healing wisdom. Every formula is organic, sustainably harvested, and energetically blessed.
            </p>
          </div>
        </div>

        {/* Section 4: Fashion - Split Layout with Text Bottom */}
        <div className="relative rounded-[40px] border-4 border-purple-400 bg-gradient-to-br from-purple-300 via-pink-300 to-rose-300 overflow-hidden min-h-[600px]">
          <div className="flex flex-col h-full">
            {/* Top - Image */}
            <div className="relative h-[350px]">
              <img 
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1400&h=500&fit=crop"
                alt="Sustainable natural fiber clothing"
                className="w-full h-full object-cover opacity-80"
              />
            </div>

            {/* Bottom - Text */}
            <div className="flex-1 flex items-center justify-center p-16">
              <div className="text-center max-w-4xl">
                <h1 className="text-white font-bold text-6xl leading-tight uppercase tracking-wide mb-6">
                  WEAR YOUR TRUTH WITH CONSCIOUS STYLE.
                </h1>
                <p className="text-white text-xl leading-relaxed">
                  What you wear affects your energy field. We curate sustainable fashion that aligns with your authentic self and honors the earth. Natural fibers, ethical production, and conscious style choices that support your personal transformation and planetary healing.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-end gap-6 mb-20">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="5" stroke="black" strokeWidth="2"/>
              <circle cx="12" cy="12" r="4" stroke="black" strokeWidth="2"/>
              <circle cx="18" cy="6" r="1" fill="black"/>
            </svg>
          </a>
          
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Navigation */}
      <Navigation theme="green" />
    </div>
  );
}
