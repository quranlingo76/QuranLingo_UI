import React from 'react';
import BackgroundElements from '../components/home/BackgroundElements';
import NavigationHeader from '../components/home/NavigationHeader';
import HeroSection from '../components/home/HeroSection';
import FeatureCard from '../components/home/FeatureCard';
import StatCard from '../components/home/StatCard';
import CTASection from '../components/home/CTASection';
import Footer from '../components/home/Footer';
import { homeFeatures } from '../data/homeFeatures';
import { homeStats } from '../data/homeStats';

const HomePage: React.FC = () => {
  console.log("HomePage");
  return (
    <div className="min-h-screen bg-gradient-to-br from-duo-green/10 via-white to-duo-blue/10 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <BackgroundElements />
      
      {/* Navigation Header */}
      <NavigationHeader showGetStarted={false} />

      {/* Hero Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <HeroSection />

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-20">
          {homeFeatures.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white/60 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-gray-200 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {homeStats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <CTASection />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;


