import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import ScrollAnimation from "@/components/ScrollAnimation";
import SubscribeForm from "@/components/SubscribeForm";

export const metadata: Metadata = {
  title: "Book Appointment - Rumi Healing Arts",
  description:
    "Schedule your appointment with our holistic healthcare practitioners. Begin your healing journey today.",
  keywords: [
    "book appointment",
    "holistic healthcare",
    "schedule consultation",
    "contact us",
    "wellness center",
  ],
};

export default function BookNow() {
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
          <div className="max-w-6xl mx-auto w-full">
            {/* Main Title */}
            <ScrollAnimation animation="slideInDown" delay={0.2}>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black mb-12 text-center">
                <span className="bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  BOOK YOUR APPOINTMENT
                </span>
              </h1>
            </ScrollAnimation>

            {/* Intro */}
            <ScrollAnimation animation="fadeInUp" delay={0.4}>
              <p className="text-xl sm:text-2xl text-gray-700 text-center mb-16 max-w-4xl mx-auto">
                Take the first step toward optimal wellness. We're here to support your healing journey.
              </p>
            </ScrollAnimation>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Contact Form */}
              <ScrollAnimation animation="fadeInLeft" delay={0.5}>
                <div className="p-8 bg-white/80 backdrop-blur-sm border-2 border-teal-400 rounded-3xl shadow-xl">
                  <h2 className="text-3xl font-black text-teal-700 mb-6">
                    Schedule a Consultation
                  </h2>
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-teal-300 focus:border-teal-600 focus:outline-none"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-teal-300 focus:border-teal-600 focus:outline-none"
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 rounded-xl border-2 border-teal-300 focus:border-teal-600 focus:outline-none"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-gray-700 font-semibold mb-2">
                        Service Interested In *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-teal-300 focus:border-teal-600 focus:outline-none"
                      >
                        <option value="">Select a service</option>
                        <option value="naturopathic">Naturopathic Medicine</option>
                        <option value="acupuncture">Acupuncture & TCM</option>
                        <option value="nutrition">Holistic Nutrition</option>
                        <option value="energy">Energy Healing</option>
                        <option value="consultation">General Consultation</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                        Tell Us About Your Health Goals
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border-2 border-teal-300 focus:border-teal-600 focus:outline-none resize-none"
                        placeholder="Share what brings you to Rumi Healing Arts..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg transform hover:scale-105 transition-all"
                    >
                      SUBMIT REQUEST
                    </button>
                    
                    <p className="text-sm text-gray-600 text-center">
                      We'll respond within 24 hours to schedule your appointment
                    </p>
                  </form>
                </div>
              </ScrollAnimation>

              {/* Contact Information */}
              <div className="space-y-8">
                <ScrollAnimation animation="fadeInRight" delay={0.6}>
                  <div className="p-8 bg-white/80 backdrop-blur-sm border-2 border-blue-400 rounded-3xl shadow-xl">
                    <h2 className="text-3xl font-black text-blue-700 mb-6">
                      Contact Information
                    </h2>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="text-3xl">📍</div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-1">Location</h3>
                          <p className="text-gray-700">
                            123 Wellness Way<br />
                            Healing City, HC 12345
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="text-3xl">📞</div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-1">Phone</h3>
                          <p className="text-gray-700">(555) 123-4567</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="text-3xl">✉️</div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-1">Email</h3>
                          <p className="text-gray-700">info@rumihealingarts.com</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="text-3xl">🕐</div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-1">Hours</h3>
                          <p className="text-gray-700">
                            Monday - Friday: 9am - 6pm<br />
                            Saturday: 10am - 4pm<br />
                            Sunday: Closed
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="fadeInRight" delay={0.7}>
                  <div className="p-8 bg-gradient-to-r from-purple-100 to-teal-100 rounded-3xl shadow-xl">
                    <h3 className="text-2xl font-black text-purple-700 mb-4">
                      New Patient Information
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-xl">✓</span>
                        <span>Free 15-minute consultation available</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-xl">✓</span>
                        <span>Most insurance plans accepted</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-xl">✓</span>
                        <span>Flexible payment options</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-xl">✓</span>
                        <span>Virtual appointments available</span>
                      </li>
                    </ul>
                  </div>
                </ScrollAnimation>
              </div>
            </div>

            {/* FAQ Section */}
            <ScrollAnimation animation="fadeInUp" delay={0.8}>
              <div className="p-8 bg-white/80 backdrop-blur-sm border-2 border-purple-400 rounded-3xl shadow-xl">
                <h2 className="text-3xl font-black text-center mb-8">
                  <span className="bg-gradient-to-r from-teal-700 to-purple-700 bg-clip-text text-transparent">
                    FREQUENTLY ASKED QUESTIONS
                  </span>
                </h2>
                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                  <div className="p-6 bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl">
                    <h3 className="text-xl font-bold text-teal-700 mb-3">
                      What should I expect at my first visit?
                    </h3>
                    <p className="text-gray-700">
                      Your first appointment includes a comprehensive health history review and consultation to understand your wellness goals and create a personalized treatment plan.
                    </p>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl">
                    <h3 className="text-xl font-bold text-blue-700 mb-3">
                      Do you accept insurance?
                    </h3>
                    <p className="text-gray-700">
                      We accept most major insurance plans and also offer flexible payment options for self-pay patients. Contact us to verify your coverage.
                    </p>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-br from-purple-50 to-teal-50 rounded-2xl">
                    <h3 className="text-xl font-bold text-purple-700 mb-3">
                      How long are appointments?
                    </h3>
                    <p className="text-gray-700">
                      Initial consultations are typically 60-90 minutes. Follow-up appointments range from 30-60 minutes depending on the service.
                    </p>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl">
                    <h3 className="text-xl font-bold text-green-700 mb-3">
                      Can I combine different services?
                    </h3>
                    <p className="text-gray-700">
                      Absolutely! We often recommend integrating multiple healing modalities for the most comprehensive and effective care.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Final CTA */}
            <ScrollAnimation animation="scaleIn" delay={0.9}>
              <div className="text-center mt-16">
                <p className="text-2xl font-bold text-gray-800 mb-4">
                  Ready to start your healing journey?
                </p>
                <p className="text-xl text-gray-700 mb-8">
                  Call us at <a href="tel:5551234567" className="text-teal-600 hover:text-teal-700 font-bold">(555) 123-4567</a> to book your appointment today
                </p>
                <div className="flex justify-center gap-6 text-4xl">
                  <span>🌿</span>
                  <span>💚</span>
                  <span>✨</span>
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
