import React from 'react';
import { Users } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <Users className="h-16 w-16 text-purple-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
      </div>

      <div className="prose lg:prose-xl mx-auto">
        <p className="text-lg text-gray-600 leading-relaxed">
          Welcome to Gift Exchange Generator, your go-to platform for organizing seamless and exciting gift exchanges. Our mission is to bring joy and simplicity to gift-giving events, whether they're for family gatherings, office parties, or friend groups.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Story</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Founded in 2024, Gift Exchange Generator was born from the simple idea that organizing gift exchanges should be fun, not stressful. What started as a small project has grown into a trusted tool used by thousands of people worldwide to coordinate their gift exchanges.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Values</h2>
        <ul className="space-y-4 text-lg text-gray-600">
          <li><strong>Simplicity:</strong> We believe in keeping things simple and user-friendly.</li>
          <li><strong>Reliability:</strong> Our generator ensures fair and random matching every time.</li>
          <li><strong>Privacy:</strong> We respect your privacy and keep your information secure.</li>
          <li><strong>Community:</strong> We're dedicated to bringing people together through thoughtful gift-giving.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Team</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          We're a small team of dedicated individuals who are passionate about creating tools that bring people together. Our diverse backgrounds in technology and event planning help us understand and meet the needs of our users.
        </p>
      </div>
    </div>
  );
};

export default About;