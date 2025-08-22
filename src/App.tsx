import React from 'react';
import { ArrowRight, Heart, Users, Utensils, Globe, Phone, Mail, MapPin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Utensils className="h-8 w-8 text-green-700" />
              <span className="text-xl font-bold text-green-700">Zero Hunger</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-green-700 transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-green-700 transition-colors">About</a>
              <a href="#impact" className="text-gray-700 hover:text-green-700 transition-colors">Impact</a>
              <a href="#action" className="text-gray-700 hover:text-green-700 transition-colors">Take Action</a>
              <a href="#contact" className="text-gray-700 hover:text-green-700 transition-colors">Contact</a>
            </div>
            <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors">
              Donate Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-green-50 to-orange-50 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Together We Can
                <span className="text-green-700 block">End Hunger</span>
                <span className="text-orange-600">Forever</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Join the global movement to achieve Zero Hunger by 2030. Every action counts, 
                every donation matters, and every voice can make a difference in creating a world 
                where no one goes to bed hungry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-green-700 text-white px-8 py-4 rounded-lg hover:bg-green-800 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center group">
                  Start Making Impact
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg hover:bg-orange-600 hover:text-white transition-all duration-300 hover:shadow-lg">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/6994973/pexels-photo-6994973.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Community sharing food"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Heart className="h-6 w-6 text-green-700" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">828M+</p>
                    <p className="text-gray-600">People helped</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Understanding the <span className="text-green-700">Challenge</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Zero Hunger is the second UN Sustainable Development Goal, aiming to end hunger, 
              achieve food security, improve nutrition, and promote sustainable agriculture by 2030.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="bg-green-700 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Global Impact</h3>
              <p className="text-gray-600 leading-relaxed">
                828 million people worldwide face acute hunger, with children being the most vulnerable. 
                Our mission is to reach every corner of the globe with sustainable solutions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="bg-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Community Driven</h3>
              <p className="text-gray-600 leading-relaxed">
                We work directly with local communities to build sustainable food systems, 
                empower farmers, and create lasting change from the ground up.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 md:col-span-2 lg:col-span-1">
              <div className="bg-yellow-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Utensils className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Sustainable Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                Beyond immediate relief, we focus on sustainable agriculture, nutrition education, 
                and building resilient food systems for the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="impact" className="py-20 bg-gradient-to-r from-green-700 to-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Together, we're making measurable progress toward ending hunger worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-300">
              <p className="text-5xl lg:text-6xl font-bold text-white mb-4">828M</p>
              <p className="text-green-100 text-lg">People facing hunger</p>
              <p className="text-green-200 text-sm mt-2">We're working to reach them all</p>
            </div>

            <div className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-300">
              <p className="text-5xl lg:text-6xl font-bold text-white mb-4">45M</p>
              <p className="text-green-100 text-lg">Children under 5</p>
              <p className="text-green-200 text-sm mt-2">Suffering from wasting</p>
            </div>

            <div className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-300">
              <p className="text-5xl lg:text-6xl font-bold text-white mb-4">149M</p>
              <p className="text-green-100 text-lg">Children stunted</p>
              <p className="text-green-200 text-sm mt-2">Due to chronic malnutrition</p>
            </div>

            <div className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-300">
              <p className="text-5xl lg:text-6xl font-bold text-white mb-4">2030</p>
              <p className="text-green-100 text-lg">Target Year</p>
              <p className="text-green-200 text-sm mt-2">For achieving Zero Hunger</p>
            </div>
          </div>
        </div>
      </section>

      {/* Action Section */}
      <section id="action" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Take <span className="text-orange-600">Action</span> Today
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every contribution, no matter how small, brings us closer to a world without hunger
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-center">
                <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-10 w-10 text-orange-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Donate</h3>
                <p className="text-gray-600 mb-6">
                  Your financial support helps us provide immediate food relief and build sustainable programs.
                </p>
                <button className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg hover:bg-orange-700 transition-colors">
                  Make a Donation
                </button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-10 w-10 text-green-700" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Volunteer</h3>
                <p className="text-gray-600 mb-6">
                  Join our community of volunteers and make a direct impact in your local area and beyond.
                </p>
                <button className="w-full bg-green-700 text-white py-3 px-6 rounded-lg hover:bg-green-800 transition-colors">
                  Get Involved
                </button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-center">
                <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-10 w-10 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Advocate</h3>
                <p className="text-gray-600 mb-6">
                  Spread awareness and advocate for policies that support food security and nutrition.
                </p>
                <button className="w-full bg-yellow-600 text-white py-3 px-6 rounded-lg hover:bg-yellow-700 transition-colors">
                  Spread the Word
                </button>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-green-700 to-orange-600 p-8 rounded-2xl text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Make a Difference?</h3>
            <p className="text-green-100 mb-6 text-lg">
              Join thousands of supporters working toward a world without hunger
            </p>
            <button className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Start Your Impact Journey
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Get in <span className="text-green-700">Touch</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Have questions about our mission? Want to partner with us? 
                We'd love to hear from you and explore how we can work together.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-green-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email Us</p>
                    <p className="text-gray-600">contact@zerohunger.org</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Call Us</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Visit Us</p>
                    <p className="text-gray-600">123 Hope Street, Global City, GC 12345</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <button className="w-full bg-green-700 text-white py-3 px-6 rounded-lg hover:bg-green-800 transition-colors font-semibold">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <Utensils className="h-8 w-8 text-green-400" />
                <span className="text-2xl font-bold">Zero Hunger</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                Working towards a world where every person has access to nutritious food and no one goes to bed hungry.
              </p>
              <div className="flex space-x-4">
                <button className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg transition-colors">
                  Donate Today
                </button>
                <button className="border border-gray-600 hover:border-gray-500 px-6 py-2 rounded-lg transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#impact" className="text-gray-300 hover:text-white transition-colors">Our Impact</a></li>
                <li><a href="#action" className="text-gray-300 hover:text-white transition-colors">Get Involved</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Support</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Donate</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Volunteer</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Partner</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Advocate</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Zero Hunger Initiative. All rights reserved. Together for a hunger-free world.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;