import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-20 text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
        Ready to Begin?
      </h2>
      <p className="text-lg md:text-xl text-gray-600 font-medium mb-8 max-w-2xl mx-auto">
        Join thousands of learners unlocking the meanings of the Quran through scientifically-proven methods.
      </p>
      <button
        onClick={() => navigate('/learning')}
        className="group inline-flex items-center gap-3 px-10 py-5 bg-duo-blue text-white font-bold text-xl rounded-2xl hover:bg-duo-blue-dark transition-all hover:scale-105 shadow-2xl border-b-4 border-duo-blue-dark active:border-b-0 active:mt-1"
      >
        Start Learning Now
        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};

export default CTASection;

