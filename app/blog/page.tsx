'use client';

import { useState } from 'react';
import Footer from '@/components/Footer';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const blogPosts = [
    { id: 1, category: 'blog', title: 'Natural Supplements Guide', description: 'How plant-based supplements enhance health', icon: '💊', color: 'from-red-500 to-rose-600' },
    { id: 2, category: 'podcast', title: 'Energy Transformation Ep.12', description: 'Acupressure for chronic pain relief', icon: '🎙️', color: 'from-blue-600 to-cyan-500' },
    { id: 3, category: 'video', title: 'Acupressure Tutorial', description: '5 pressure points for instant relief', icon: '📺', color: 'from-yellow-400 to-amber-500' },
    { id: 4, category: 'blog', title: 'Immune Boosting Guide', description: 'Strengthen immunity naturally', icon: '🛡️', color: 'from-green-500 to-emerald-600' },
    { id: 5, category: 'podcast', title: 'Sleep Better Ep.15', description: 'Natural remedies for quality sleep', icon: '🎙️', color: 'from-purple-500 to-violet-600' },
    { id: 6, category: 'video', title: 'Morning Wellness Routine', description: '10-min daily health routine', icon: '📺', color: 'from-orange-500 to-red-500' },
    { id: 7, category: 'blog', title: 'Gut Health Revolution', description: 'Probiotics transform wellness', icon: '🌿', color: 'from-pink-500 to-rose-600' },
    { id: 8, category: 'podcast', title: 'Pain-Free Living Ep.18', description: 'Patient stories of healing', icon: '🎙️', color: 'from-cyan-500 to-blue-500' },
    { id: 9, category: 'video', title: 'Supplement Basics', description: 'Essential vitamins explained', icon: '📺', color: 'from-lime-400 to-green-500' },
  ];

  const filteredPosts = activeCategory === 'all' ? blogPosts : blogPosts.filter(post => post.category === activeCategory);
  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);
  const displayedPosts = filteredPosts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="min-h-screen bg-black pb-24">
      
      {/* HERO - Compact */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[60vh]">
        <div className="relative bg-gradient-to-br from-orange-500 to-red-600 border-r-8 border-b-8 border-black flex items-center justify-center p-8">
          <div className="text-center">
            <div className="text-7xl mb-4">📚</div>
            <h1 className="text-6xl md:text-7xl font-black text-black uppercase leading-none" style={{ fontFamily: 'Arial Black, sans-serif', textShadow: '4px 4px 0px rgba(0,0,0,0.3)' }}>HEALTH<br/>BLOG</h1>
          </div>
        </div>
        <div className="relative bg-gradient-to-br from-cyan-500 to-blue-600 border-b-8 border-black flex items-center justify-center p-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-black text-black uppercase mb-4 leading-tight" style={{ fontFamily: 'Arial Black, sans-serif', textShadow: '3px 3px 0px rgba(0,0,0,0.3)' }}>LEARN • TRANSFORM • THRIVE</h2>
            <p className="text-2xl text-black/90 font-bold">Articles • Podcasts • Videos</p>
          </div>
        </div>
      </section>

      {/* CATEGORY TABS - Compact */}
      <section className="border-b-8 border-black bg-gradient-to-r from-purple-600 to-pink-600 p-4">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-3 justify-center">
          {[
            { key: 'all', label: 'ALL', icon: '📂' },
            { key: 'podcast', label: 'PODCAST', icon: '🎙️' },
            { key: 'video', label: 'VIDEO', icon: '📺' },
            { key: 'blog', label: 'BLOG', icon: '✍️' }
          ].map(cat => (
            <button key={cat.key} onClick={() => { setActiveCategory(cat.key); setCurrentPage(1); }} className={`px-6 py-3 font-black text-sm uppercase border-4 border-black transition-all ${activeCategory === cat.key ? 'bg-yellow-400 text-black' : 'bg-black text-white hover:bg-yellow-400 hover:text-black'}`} style={{ fontFamily: 'Arial Black, sans-serif' }}>
              {cat.icon} {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* BLOG GRID - Compact */}
      <section className="grid grid-cols-1 md:grid-cols-3">
        {displayedPosts.map((post) => (
          <div key={post.id} className={`relative bg-gradient-to-br ${post.color} border-r-8 border-b-8 border-black min-h-[300px] flex items-center justify-center p-6 hover:brightness-110 transition-all cursor-pointer`}>
            <div className="text-center">
              <div className="text-5xl mb-3">{post.icon}</div>
              <h3 className="text-2xl font-black text-black uppercase mb-2 leading-tight" style={{ fontFamily: 'Arial Black, sans-serif', textShadow: '2px 2px 0px rgba(0,0,0,0.3)' }}>{post.title}</h3>
              <p className="text-sm text-black/90 font-bold mb-3">{post.description}</p>
              <button className="bg-black text-white px-4 py-2 border-4 border-black font-black text-xs uppercase hover:bg-white hover:text-black transition-all">READ</button>
            </div>
          </div>
        ))}
      </section>

      {/* PAGINATION - Compact */}
      <section className="border-b-8 border-black bg-gradient-to-r from-green-500 to-emerald-600 p-4">
        <div className="max-w-6xl mx-auto flex gap-3 justify-center items-center flex-wrap">
          <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1} className="bg-black text-yellow-400 px-4 py-2 border-4 border-black font-black text-sm uppercase disabled:opacity-50 hover:bg-yellow-400 hover:text-black transition-all" style={{ fontFamily: 'Arial Black, sans-serif' }}>← PREV</button>
          {[...Array(totalPages)].map((_, i) => (
            <button key={i} onClick={() => setCurrentPage(i + 1)} className={`px-4 py-2 font-black text-sm border-4 border-black transition-all ${currentPage === i + 1 ? 'bg-yellow-400 text-black' : 'bg-black text-white hover:bg-yellow-400 hover:text-black'}`} style={{ fontFamily: 'Arial Black, sans-serif' }}>{i + 1}</button>
          ))}
          <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} className="bg-black text-yellow-400 px-4 py-2 border-4 border-black font-black text-sm uppercase disabled:opacity-50 hover:bg-yellow-400 hover:text-black transition-all" style={{ fontFamily: 'Arial Black, sans-serif' }}>NEXT →</button>
        </div>
      </section>

      <Footer />

      {/* NAV */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t-8 border-black">
        <div className="bg-black/95 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="text-2xl font-black text-white uppercase" style={{ fontFamily: 'Arial Black, sans-serif' }}>RUMI</div>
            <div className="flex gap-4">
              <a href="/" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-black px-8 py-3 font-black text-base uppercase border-4 border-black hover:scale-105 transition-all" style={{ fontFamily: 'Arial Black, sans-serif' }}>HOME</a>
              <a href="/shop" className="bg-gradient-to-r from-green-500 to-emerald-500 text-black px-8 py-3 font-black text-base uppercase border-4 border-black hover:scale-105 transition-all" style={{ fontFamily: 'Arial Black, sans-serif' }}>SHOP</a>
              <a href="/blog" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-3 font-black text-base uppercase border-4 border-black hover:scale-105 transition-all" style={{ fontFamily: 'Arial Black, sans-serif' }}>BLOG</a>
              <button onClick={() => document.getElementById('connect-modal')?.classList.toggle('hidden')} className="bg-gradient-to-r from-purple-500 to-pink-500 text-black px-8 py-3 font-black text-base uppercase border-4 border-black hover:scale-105 transition-all" style={{ fontFamily: 'Arial Black, sans-serif' }}>CONNECT</button>
            </div>
            <button onClick={() => { if (navigator.share) navigator.share({ title: 'Rumi Healing Blog', url: window.location.href }).catch(() => {}); else { navigator.clipboard.writeText(window.location.href); alert('Link copied!'); } }} className="bg-gradient-to-br from-orange-500 to-red-500 text-white p-3 border-4 border-black hover:scale-110 transition-all">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/></svg>
            </button>
          </div>
        </div>
      </nav>

      {/* CONNECT MODAL */}
      <div id="connect-modal" className="hidden fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
        <div className="relative bg-gradient-to-br from-purple-600 to-pink-600 border-8 border-black max-w-2xl w-full p-12 rounded-3xl" style={{ boxShadow: '0 0 60px rgba(236,72,153,0.8)' }}>
          <button onClick={() => document.getElementById('connect-modal')?.classList.add('hidden')} className="absolute top-4 right-4 text-black bg-yellow-400 hover:bg-yellow-300 rounded-full w-12 h-12 flex items-center justify-center text-3xl font-black border-4 border-black transition-all hover:scale-110">×</button>
          <h2 className="text-6xl md:text-7xl font-black text-black uppercase mb-8 text-center leading-none" style={{ fontFamily: 'Arial Black, sans-serif', textShadow: '4px 4px 0px rgba(0,0,0,0.3)' }}>CONNECT<br/>WITH US</h2>
          <div className="space-y-6">
            <div className="bg-black/30 p-8 border-4 border-black rounded-2xl">
              <div className="flex items-center gap-4 mb-3"><div className="text-5xl">📧</div><h3 className="text-3xl font-black text-white uppercase" style={{ fontFamily: 'Arial Black, sans-serif' }}>EMAIL</h3></div>
              <a href="mailto:lawrencecorso1@gmail.com" className="text-2xl font-bold text-yellow-300 hover:text-yellow-400 transition-colors break-all">lawrencecorso1@gmail.com</a>
            </div>
            <div className="bg-black/30 p-8 border-4 border-black rounded-2xl">
              <div className="flex items-center gap-4 mb-3"><div className="text-5xl">📱</div><h3 className="text-3xl font-black text-white uppercase" style={{ fontFamily: 'Arial Black, sans-serif' }}>PHONE</h3></div>
              <a href="tel:+15551234567" className="text-2xl font-bold text-yellow-300 hover:text-yellow-400 transition-colors">(555) 123-4567</a>
            </div>
            <div className="bg-black/30 p-8 border-4 border-black rounded-2xl">
              <div className="flex items-center gap-4 mb-3"><div className="text-5xl">📍</div><h3 className="text-3xl font-black text-white uppercase" style={{ fontFamily: 'Arial Black, sans-serif' }}>LOCATION</h3></div>
              <p className="text-2xl font-bold text-yellow-300">Chicago, Illinois</p>
            </div>
          </div>
          <div className="mt-8 text-center"><p className="text-xl font-bold text-white/90">Book your consultation today!</p></div>
        </div>
      </div>
    </div>
  );
}
