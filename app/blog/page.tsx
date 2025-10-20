import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import ScrollAnimation from "@/components/ScrollAnimation";

export const metadata: Metadata = {
  title: "Wellness Resources - Rumi Healing Arts",
  description:
    "Access our library of wellness resources, health tips, and educational content about holistic healthcare and natural healing.",
  keywords: [
    "wellness resources",
    "health tips",
    "holistic healthcare blog",
    "natural healing",
    "wellness education",
  ],
};

export default function Resources() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Soft background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `radial-gradient(circle, #10b981 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <section className="min-h-screen flex flex-col justify-center items-center px-8 pb-32 pt-20">
          <div className="max-w-6xl mx-auto">
            {/* Main Title */}
            <ScrollAnimation animation="slideInDown" delay={0.2}>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black mb-12 text-center">
                <span className="bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  WELLNESS RESOURCES
                </span>
              </h1>
            </ScrollAnimation>

            {/* Intro */}
            <ScrollAnimation animation="fadeInUp" delay={0.4}>
              <p className="text-xl sm:text-2xl text-gray-700 text-center mb-16 max-w-4xl mx-auto">
                Empowering you with knowledge and practical guidance for your wellness journey.
              </p>
            </ScrollAnimation>

            {/* Resource Categories */}
            <div className="space-y-12">
              {/* Health Tips */}
              <ScrollAnimation animation="fadeInLeft" delay={0.5}>
                <div className="p-8 bg-white/80 backdrop-blur-sm border-2 border-teal-400 rounded-3xl shadow-xl">
                  <h2 className="text-3xl sm:text-4xl font-black text-teal-700 mb-6 flex items-center gap-4">
                    <span className="text-5xl">💚</span>
                    Daily Wellness Tips
                  </h2>
                  <div className="space-y-4">
                    <div className="p-4 bg-teal-50 rounded-xl">
                      <h3 className="text-xl font-bold text-teal-700 mb-2">Morning Rituals for Optimal Health</h3>
                      <p className="text-gray-700">Start your day with intention: hydration, gentle movement, and mindful breathing set the tone for wellness.</p>
                    </div>
                    <div className="p-4 bg-teal-50 rounded-xl">
                      <h3 className="text-xl font-bold text-teal-700 mb-2">The Power of Sleep</h3>
                      <p className="text-gray-700">Quality sleep is the foundation of health. Learn how to optimize your sleep environment and bedtime routine.</p>
                    </div>
                    <div className="p-4 bg-teal-50 rounded-xl">
                      <h3 className="text-xl font-bold text-teal-700 mb-2">Stress-Busting Techniques</h3>
                      <p className="text-gray-700">Simple, effective strategies you can use anytime to calm your nervous system and restore balance.</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Nutrition Guides */}
              <ScrollAnimation animation="fadeInRight" delay={0.6}>
                <div className="p-8 bg-white/80 backdrop-blur-sm border-2 border-blue-400 rounded-3xl shadow-xl">
                  <h2 className="text-3xl sm:text-4xl font-black text-blue-700 mb-6 flex items-center gap-4">
                    <span className="text-5xl">🥗</span>
                    Nutrition Guides
                  </h2>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-xl">
                      <h3 className="text-xl font-bold text-blue-700 mb-2">Eating with the Seasons</h3>
                      <p className="text-gray-700">Discover how to nourish your body with seasonal, local foods that support optimal health year-round.</p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-xl">
                      <h3 className="text-xl font-bold text-blue-700 mb-2">Anti-Inflammatory Foods</h3>
                      <p className="text-gray-700">Learn which foods naturally reduce inflammation and support your body's healing processes.</p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-xl">
                      <h3 className="text-xl font-bold text-blue-700 mb-2">Gut Health Essentials</h3>
                      <p className="text-gray-700">Understanding the gut-brain connection and how to support your digestive health naturally.</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Healing Practices */}
              <ScrollAnimation animation="fadeInLeft" delay={0.7}>
                <div className="p-8 bg-white/80 backdrop-blur-sm border-2 border-purple-400 rounded-3xl shadow-xl">
                  <h2 className="text-3xl sm:text-4xl font-black text-purple-700 mb-6 flex items-center gap-4">
                    <span className="text-5xl">🧘</span>
                    Healing Practices
                  </h2>
                  <div className="space-y-4">
                    <div className="p-4 bg-purple-50 rounded-xl">
                      <h3 className="text-xl font-bold text-purple-700 mb-2">Introduction to Meditation</h3>
                      <p className="text-gray-700">Begin your meditation practice with simple, accessible techniques for beginners.</p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-xl">
                      <h3 className="text-xl font-bold text-purple-700 mb-2">Breathwork for Healing</h3>
                      <p className="text-gray-700">Harness the power of conscious breathing to reduce stress and enhance vitality.</p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-xl">
                      <h3 className="text-xl font-bold text-purple-700 mb-2">Self-Care Rituals</h3>
                      <p className="text-gray-700">Create meaningful self-care practices that nourish your body, mind, and spirit.</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Herbal Medicine */}
              <ScrollAnimation animation="fadeInRight" delay={0.8}>
                <div className="p-8 bg-white/80 backdrop-blur-sm border-2 border-green-400 rounded-3xl shadow-xl">
                  <h2 className="text-3xl sm:text-4xl font-black text-green-700 mb-6 flex items-center gap-4">
                    <span className="text-5xl">🌿</span>
                    Herbal Medicine Wisdom
                  </h2>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-xl">
                      <h3 className="text-xl font-bold text-green-700 mb-2">Common Healing Herbs</h3>
                      <p className="text-gray-700">A guide to everyday herbs and their therapeutic properties for home use.</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-xl">
                      <h3 className="text-xl font-bold text-green-700 mb-2">Herbal Teas for Wellness</h3>
                      <p className="text-gray-700">Discover healing herbal tea blends for various health concerns and conditions.</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-xl">
                      <h3 className="text-xl font-bold text-green-700 mb-2">Adaptogenic Herbs</h3>
                      <p className="text-gray-700">Learn about adaptogens that help your body cope with stress and maintain balance.</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Educational Resources */}
              <ScrollAnimation animation="fadeInUp" delay={0.9}>
                <div className="p-8 bg-gradient-to-r from-teal-100 via-blue-100 to-purple-100 rounded-3xl shadow-xl">
                  <h2 className="text-3xl sm:text-4xl font-black mb-6 text-center">
                    <span className="bg-gradient-to-r from-teal-700 to-purple-700 bg-clip-text text-transparent">
                      EDUCATIONAL RESOURCES
                    </span>
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    <div className="p-6 bg-white rounded-2xl shadow-lg">
                      <h3 className="text-2xl font-bold text-teal-700 mb-3 flex items-center gap-3">
                        <span className="text-3xl">📚</span>
                        Recommended Reading
                      </h3>
                      <p className="text-gray-700">Curated books and articles on holistic health, nutrition, and natural healing.</p>
                    </div>
                    <div className="p-6 bg-white rounded-2xl shadow-lg">
                      <h3 className="text-2xl font-bold text-blue-700 mb-3 flex items-center gap-3">
                        <span className="text-3xl">🎥</span>
                        Video Library
                      </h3>
                      <p className="text-gray-700">Educational videos on various wellness topics and healing practices.</p>
                    </div>
                    <div className="p-6 bg-white rounded-2xl shadow-lg">
                      <h3 className="text-2xl font-bold text-purple-700 mb-3 flex items-center gap-3">
                        <span className="text-3xl">🎧</span>
                        Guided Meditations
                      </h3>
                      <p className="text-gray-700">Audio recordings to support your meditation and relaxation practice.</p>
                    </div>
                    <div className="p-6 bg-white rounded-2xl shadow-lg">
                      <h3 className="text-2xl font-bold text-green-700 mb-3 flex items-center gap-3">
                        <span className="text-3xl">📝</span>
                        Health Worksheets
                      </h3>
                      <p className="text-gray-700">Downloadable tools to track your wellness journey and set health goals.</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            {/* Newsletter Signup */}
            <ScrollAnimation animation="scaleIn" delay={1.0}>
              <div className="text-center mt-16 p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl">
                <h2 className="text-3xl font-black text-teal-700 mb-4">
                  STAY CONNECTED
                </h2>
                <p className="text-xl text-gray-700 mb-6">
                  Subscribe to our newsletter for weekly wellness tips and updates
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-6 py-3 rounded-full border-2 border-teal-400 focus:outline-none focus:border-teal-600"
                  />
                  <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full font-bold shadow-lg transform hover:scale-105 transition-all">
                    SUBSCRIBE
                  </button>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </div>

      {/* Navigation */}
      <Navigation theme="blue" />
    </div>
  );
}
