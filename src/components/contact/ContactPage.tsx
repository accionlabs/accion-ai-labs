import React from 'react';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  GlobeAltIcon,
  CalendarIcon,
  ChatBubbleLeftRightIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold mb-4">
            Get Started
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Let's Build Your Solution</h1>
          <p className="mt-2 text-gray-600 max-w-3xl">
            Ready to transform your enterprise with custom AI agents? Get in touch with our team 
            to discuss your unique challenges and explore how we can help.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 mb-6">
              <div className="flex items-center mb-4">
                <BuildingOfficeIcon className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">Accion Labs</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Accion Labs is a technology services company specializing in AI-driven digital transformation. 
                We partner with enterprises to build custom solutions that leverage cutting-edge technology 
                to solve complex business challenges.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPinIcon className="h-5 w-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">United States Office</p>
                    <p className="text-sm text-gray-600">
                      1225 Washington Pike #401<br />
                      Bridgeville, PA 15017<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <EnvelopeIcon className="h-5 w-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <a href="mailto:info@accionlabs.com" className="text-sm text-blue-600 hover:text-blue-700">
                      info@accionlabs.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <GlobeAltIcon className="h-5 w-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Website</p>
                    <a href="https://www.accionlabs.com" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-700">
                      www.accionlabs.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* What Happens Next */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">What Happens Next?</h3>
              <ol className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-semibold mr-3">1</span>
                  <div>
                    <strong className="text-gray-900">Discovery Call</strong>
                    <p className="text-gray-600">We'll schedule a call to understand your challenges and objectives</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-semibold mr-3">2</span>
                  <div>
                    <strong className="text-gray-900">Solution Design</strong>
                    <p className="text-gray-600">Our team will design a custom AI agent solution for your needs</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-semibold mr-3">3</span>
                  <div>
                    <strong className="text-gray-900">Pilot Program</strong>
                    <p className="text-gray-600">Start with a pilot to demonstrate value and refine the approach</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-semibold mr-3">4</span>
                  <div>
                    <strong className="text-gray-900">Full Implementation</strong>
                    <p className="text-gray-600">Scale the solution across your enterprise with our support</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Start a Conversation</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
                    I'm interested in... *
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select an option</option>
                    <option value="technical-debt">Technical Debt Analysis</option>
                    <option value="portfolio">Portfolio Rationalization</option>
                    <option value="support-automation">Support Automation (L0/L1/L2)</option>
                    <option value="customer-onboarding">Customer Onboarding</option>
                    <option value="analytics">Intelligent Analytics</option>
                    <option value="custom">Custom Solution</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Tell us about your challenge
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Describe your current challenges and what you're hoping to achieve..."
                  />
                </div>
                
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    className="mt-1 mr-2"
                    required
                  />
                  <label htmlFor="consent" className="text-xs text-gray-600">
                    I agree to receive communications from Accion Labs about Breeze.AI and related services. 
                    I understand I can unsubscribe at any time.
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-[1.02]"
                >
                  Send Message
                </button>
              </form>
              
              <p className="text-xs text-gray-500 mt-4 text-center">
                * Required fields
              </p>
            </div>

            {/* Alternative Contact Methods */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-all">
                <CalendarIcon className="h-6 w-6 text-blue-600 mb-2" />
                <h4 className="font-semibold text-gray-900 mb-1">Schedule a Demo</h4>
                <p className="text-sm text-gray-600">
                  Book a personalized demo to see our solutions in action
                </p>
              </div>
              
              <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-all">
                <ChatBubbleLeftRightIcon className="h-6 w-6 text-purple-600 mb-2" />
                <h4 className="font-semibold text-gray-900 mb-1">Technical Discussion</h4>
                <p className="text-sm text-gray-600">
                  Speak with our architects about your technical requirements
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Global Presence */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Global Presence</h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Accion Labs serves clients worldwide with offices and delivery centers across multiple continents. 
            Our global presence ensures we can support your enterprise wherever you operate.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <MapPinIcon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900">North America</h3>
              <p className="text-sm text-gray-600">United States</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <MapPinIcon className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Asia Pacific</h3>
              <p className="text-sm text-gray-600">India, Singapore</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <MapPinIcon className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Europe</h3>
              <p className="text-sm text-gray-600">United Kingdom</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <MapPinIcon className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Middle East</h3>
              <p className="text-sm text-gray-600">UAE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;