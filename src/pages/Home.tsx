import React from 'react';
import Generator from '../components/Generator';
import SEOSection from '../components/SEOSection';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Gift Exchange Generator
          </h1>
          <p className="text-xl text-gray-600">
            Make your gift exchange easy and fun!
          </p>
        </div>

        <Generator />
        <SEOSection />
      </div>
    </div>
  );
};

export default Home;