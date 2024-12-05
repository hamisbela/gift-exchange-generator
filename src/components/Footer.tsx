import React from 'react';
import { Link } from 'react-router-dom';
import { Gift } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2">
              <Gift className="h-8 w-8 text-purple-400" />
              <span className="text-xl font-bold">Gift Exchange Generator</span>
            </div>
            <p className="mt-4 text-gray-400">
              Make your gift exchanges easy and fun with our simple generator.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-white">Home</Link>
              <Link to="/about" className="block text-gray-400 hover:text-white">About Us</Link>
              <Link to="/contact" className="block text-gray-400 hover:text-white">Contact</Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-400">
              <p>Email: info@giftexchangegenerator.com</p>
              <p>Follow us on social media</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Gift Exchange Generator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;