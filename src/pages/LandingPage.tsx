import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, PlayIcon } from '@heroicons/react/24/outline';
import { getPublicAssetUrl } from '../utils/assetHelper';

interface LandingPageProps {
  customLogo?: string;
  customCompanyName?: string;
}

const LandingPage: React.FC<LandingPageProps> = ({ 
  customLogo, 
  customCompanyName = "Breeze AI" 
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col justify-center">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 px-6 py-4 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {customLogo ? (
              <img src={customLogo} alt={customCompanyName} className="h-8 w-auto" />
            ) : (
              <div className="h-8 w-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
            )}
            <span className="text-xl font-semibold text-gray-900">{customCompanyName}</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mt-6 mb-6">
              UI Rationalization
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Made Simple
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Transform your enterprise product portfolio with our four-ontology framework. 
              Identify inconsistencies, standardize components, and accelerate development 
              across your entire UI ecosystem.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="/technical-debt"
                className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-xl hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105 shadow-lg"
              >
                Technical Debt Analysis
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Portfolio Rationalization
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Demo Video/Screenshot */}
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
              {/* Video with title overlay */}
              <div className="relative aspect-video">
                <video 
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={getPublicAssetUrl("assets/ai-driven-ux-rationalization.mp4")} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Title overlay at the top */}
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/70 to-transparent p-8">
                  <h2 className="text-3xl lg:text-4xl font-bold text-white text-center">
                    Breeze.AI UI Rationalization
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;