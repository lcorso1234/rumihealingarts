import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import ScrollAnimation from "@/components/ScrollAnimation";

export const metadata: Metadata = {
  title: "Our Services - Rumi Healing Arts",
  description:
    "Explore our comprehensive range of holistic healthcare services including acupuncture, naturopathic medicine, nutrition counseling, and energy healing.",
  keywords: [
    "holistic healthcare services",
    "acupuncture",
    "naturopathic medicine",
    "nutrition counseling",
    "energy healing",
  ],
};

export default function Services() {
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
                  OUR SERVICES
                </span>
              </h1>
            </ScrollAnimation>

            {/* Intro */}
            <ScrollAnimation animation="fadeInUp" delay={0.4}>
              <p className="text-xl sm:text-2xl text-gray-700 text-center mb-16 max-w-4xl mx-auto">
                We offer a comprehensive range of holistic healthcare services designed to support your journey to optimal wellness.
              </p>
            </ScrollAnimation>

            {/* Services Grid */}
            <div className="space-y-12">
              {/* Naturopathic Medicine */}
              <ScrollAnimation animation="fadeInLeft" delay={0.5}>
                <div className="p-8 bg-white/80 backdrop-blur-sm border-2 border-teal-400 rounded-3xl shadow-xl">
                  <div className="flex items-start gap-6">
                    <div className="text-6xl">🌿</div>
                    <div className="flex-1">
                      <h2 className="text-3xl sm:text-4xl font-black text-teal-700 mb-4">
                        Naturopathic Medicine
                      </h2>
                      <p className="text-lg text-gray-700 mb-4">
                        Our licensed naturopathic doctors provide comprehensive primary care using natural therapies and lifestyle medicine. We address the root causes of illness rather than just treating symptoms.
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Complete health assessments and physical exams</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Herbal medicine and botanical therapies</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Homeopathy and nutritional supplementation</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Chronic disease management</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Acupuncture & TCM */}
              <ScrollAnimation animation="fadeInRight" delay={0.6}>
                <div className="p-8 bg-white/80 backdrop-blur-sm border-2 border-blue-400 rounded-3xl shadow-xl">
                  <div className="flex items-start gap-6">
                    <div className="text-6xl">⚕️</div>
                    <div className="flex-1">
                      <h2 className="text-3xl sm:text-4xl font-black text-blue-700 mb-4">
                        Acupuncture & Traditional Chinese Medicine
                      </h2>
                      <p className="text-lg text-gray-700 mb-4">
                        Experience the ancient healing art of acupuncture, practiced for thousands of years to restore balance and promote the body's natural healing abilities.
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Pain management and injury recovery</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Stress reduction and mental health support</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Fertility and women's health</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Digestive and immune system support</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Holistic Nutrition */}
              <ScrollAnimation animation="fadeInLeft" delay={0.7}>
                <div className="p-8 bg-white/80 backdrop-blur-sm border-2 border-purple-400 rounded-3xl shadow-xl">
                  <div className="flex items-start gap-6">
                    <div className="text-6xl">🥗</div>
                    <div className="flex-1">
                      <h2 className="text-3xl sm:text-4xl font-black text-purple-700 mb-4">
                        Holistic Nutrition Counseling
                      </h2>
                      <p className="text-lg text-gray-700 mb-4">
                        Food is medicine. Our nutritionists create personalized dietary plans that nourish your body and support your specific health goals.
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Personalized nutrition assessments</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Food sensitivity testing and elimination diets</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Weight management and metabolic health</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Therapeutic meal planning</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Energy Healing */}
              <ScrollAnimation animation="fadeInRight" delay={0.8}>
                <div className="p-8 bg-white/80 backdrop-blur-sm border-2 border-green-400 rounded-3xl shadow-xl">
                  <div className="flex items-start gap-6">
                    <div className="text-6xl">✨</div>
                    <div className="flex-1">
                      <h2 className="text-3xl sm:text-4xl font-black text-green-700 mb-4">
                        Energy Healing & Bodywork
                      </h2>
                      <p className="text-lg text-gray-700 mb-4">
                        Gentle, non-invasive therapies that work with your body's energy systems to promote deep healing and relaxation.
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Reiki energy healing sessions</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Craniosacral therapy</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Sound healing and vibrational therapy</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Chakra balancing and clearing</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Wellness Programs */}
              <ScrollAnimation animation="fadeInUp" delay={0.9}>
                <div className="p-8 bg-gradient-to-r from-teal-100 via-blue-100 to-purple-100 rounded-3xl shadow-xl">
                  <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-black mb-6">
                      <span className="bg-gradient-to-r from-teal-700 to-purple-700 bg-clip-text text-transparent">
                        WELLNESS PROGRAMS
                      </span>
                    </h2>
                    <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
                      In addition to individual services, we offer comprehensive wellness programs designed to address specific health concerns and goals.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="p-6 bg-white rounded-2xl shadow-lg">
                        <h3 className="text-xl font-bold text-teal-700 mb-3">Detox & Cleanse Programs</h3>
                        <p className="text-gray-700">Guided cleansing protocols to reset your system</p>
                      </div>
                      <div className="p-6 bg-white rounded-2xl shadow-lg">
                        <h3 className="text-xl font-bold text-blue-700 mb-3">Stress Management</h3>
                        <p className="text-gray-700">Multi-modal approach to reducing stress and anxiety</p>
                      </div>
                      <div className="p-6 bg-white rounded-2xl shadow-lg">
                        <h3 className="text-xl font-bold text-purple-700 mb-3">Women's Wellness</h3>
                        <p className="text-gray-700">Specialized care for all stages of women's health</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            {/* CTA */}
            <ScrollAnimation animation="scaleIn" delay={1.0}>
              <div className="text-center mt-16">
                <p className="text-xl text-gray-700 mb-8">
                  Ready to begin your healing journey?
                </p>
                <a
                  href="/connect"
                  className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-12 py-4 rounded-full font-bold text-lg shadow-lg transform hover:scale-105 transition-all"
                >
                  BOOK YOUR APPOINTMENT
                </a>
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
