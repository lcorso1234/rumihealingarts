import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import ScrollAnimation from "@/components/ScrollAnimation";

export const metadata: Metadata = {
  title: "About Us - Rumi Healing Arts",
  description:
    "Learn about our holistic healthcare approach, our experienced practitioners, and our commitment to your wellness journey.",
  keywords: [
    "holistic healthcare",
    "integrative medicine",
    "wellness practitioners",
    "healing arts",
    "about us",
  ],
};

export default function About() {
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
        <section className="min-h-screen flex flex-col justify-center items-center px-8 text-center pb-32 pt-20">
          <div className="max-w-6xl mx-auto">
            {/* Main Title */}
            <ScrollAnimation animation="slideInDown" delay={0.2}>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black mb-12">
                <span className="bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  ABOUT RUMI HEALING ARTS
                </span>
              </h1>
            </ScrollAnimation>

            {/* Our Story */}
            <ScrollAnimation animation="fadeInUp" delay={0.4}>
              <div className="mb-16 max-w-4xl mx-auto">
                <h2 className="text-3xl sm:text-5xl font-black mb-8 text-teal-700">
                  OUR STORY
                </h2>
                <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed mb-6">
                  Founded on the principles of holistic wellness, Rumi Healing Arts combines ancient healing traditions with modern medical knowledge. We believe that true health encompasses the body, mind, and spirit working in harmony.
                </p>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                  Our name is inspired by the 13th-century Persian poet Rumi, whose wisdom reminds us that healing is a journey of self-discovery and transformation.
                </p>
              </div>
            </ScrollAnimation>

            {/* Our Approach */}
            <ScrollAnimation animation="scaleIn" delay={0.6}>
              <div className="mb-20 p-8 sm:p-12 border-2 border-blue-400 rounded-3xl bg-white/80 backdrop-blur-sm shadow-2xl">
                <h2 className="text-3xl sm:text-5xl font-black mb-8">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    OUR HOLISTIC APPROACH
                  </span>
                </h2>
                <div className="grid md:grid-cols-3 gap-8 text-left">
                  <div className="space-y-4">
                    <div className="text-4xl">🌿</div>
                    <h3 className="text-2xl font-bold text-teal-700">Natural Healing</h3>
                    <p className="text-gray-700">
                      We harness the power of nature through herbal medicine, nutrition, and traditional healing practices.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="text-4xl">🧘</div>
                    <h3 className="text-2xl font-bold text-blue-700">Mind-Body Balance</h3>
                    <p className="text-gray-700">
                      Integrating meditation, breathwork, and movement therapies to restore inner harmony.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="text-4xl">💫</div>
                    <h3 className="text-2xl font-bold text-purple-700">Spiritual Wellness</h3>
                    <p className="text-gray-700">
                      Honoring the spiritual dimension of healing through energy work and mindfulness practices.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Our Team */}
            <ScrollAnimation animation="fadeInUp" delay={0.8}>
              <div className="mb-20">
                <h2 className="text-3xl sm:text-5xl font-black mb-12 text-purple-700">
                  OUR PRACTITIONERS
                </h2>
                <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                  Our team consists of licensed healthcare professionals, certified holistic practitioners, and experienced healers who are passionate about supporting your wellness journey.
                </p>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <div className="p-6 bg-gradient-to-br from-teal-100 to-blue-100 rounded-2xl shadow-lg">
                    <h3 className="text-2xl font-bold text-teal-700 mb-3">Licensed Naturopathic Doctors</h3>
                    <p className="text-gray-700">
                      Trained in both conventional and alternative medicine to provide comprehensive care.
                    </p>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl shadow-lg">
                    <h3 className="text-2xl font-bold text-blue-700 mb-3">Acupuncture Specialists</h3>
                    <p className="text-gray-700">
                      Expert practitioners in Traditional Chinese Medicine and acupuncture therapy.
                    </p>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-purple-100 to-teal-100 rounded-2xl shadow-lg">
                    <h3 className="text-2xl font-bold text-purple-700 mb-3">Holistic Nutritionists</h3>
                    <p className="text-gray-700">
                      Specialized in healing through personalized nutrition and dietary guidance.
                    </p>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl shadow-lg">
                    <h3 className="text-2xl font-bold text-green-700 mb-3">Energy Healers</h3>
                    <p className="text-gray-700">
                      Certified in Reiki, craniosacral therapy, and other energy healing modalities.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Our Values */}
            <ScrollAnimation animation="scaleIn" delay={1.0}>
              <div className="bg-gradient-to-r from-teal-100 via-blue-100 to-purple-100 p-8 sm:p-12 rounded-3xl shadow-xl">
                <h2 className="text-3xl sm:text-5xl font-black mb-10">
                  <span className="bg-gradient-to-r from-teal-700 to-purple-700 bg-clip-text text-transparent">
                    OUR CORE VALUES
                  </span>
                </h2>
                <div className="grid md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
                  <div className="flex items-start space-x-4">
                    <span className="text-3xl">💚</span>
                    <div>
                      <h3 className="text-xl font-bold text-teal-700 mb-2">Compassionate Care</h3>
                      <p className="text-gray-700">Every patient receives individualized attention and genuine compassion.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="text-3xl">🌟</span>
                    <div>
                      <h3 className="text-xl font-bold text-blue-700 mb-2">Evidence-Based Practice</h3>
                      <p className="text-gray-700">Combining traditional wisdom with modern scientific research.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="text-3xl">🤝</span>
                    <div>
                      <h3 className="text-xl font-bold text-purple-700 mb-2">Patient Partnership</h3>
                      <p className="text-gray-700">We work collaboratively with you to achieve your health goals.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="text-3xl">🌈</span>
                    <div>
                      <h3 className="text-xl font-bold text-green-700 mb-2">Whole-Person Healing</h3>
                      <p className="text-gray-700">Addressing physical, emotional, mental, and spiritual wellness.</p>
                    </div>
                  </div>
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
