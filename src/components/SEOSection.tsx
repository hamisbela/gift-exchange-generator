import React from 'react';

const SEOSection = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">About Our Gift Exchange Generator</h2>
      
      <div className="space-y-6 text-gray-600">
        <p>
          Our gift exchange generator is the perfect tool for organizing Secret Santa, White Elephant, or any gift exchange event. Whether you're planning a holiday party, office celebration, or family gathering, our gift exchange generator makes the process simple and fun.
        </p>

        <h3 className="text-2xl font-semibold text-gray-900">How Our Gift Exchange Generator Works</h3>
        <p>
          Using our gift exchange generator is easy! Simply enter the names and emails of all participants, click generate, and our algorithm will randomly assign gift-giving pairs. Our smart matching system ensures no one gets assigned to themselves, making your gift exchange fair and exciting.
        </p>

        <h3 className="text-2xl font-semibold text-gray-900">Frequently Asked Questions</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900">What is a gift exchange generator?</h4>
            <p>A gift exchange generator is a tool that automatically assigns gift-giving pairs for events like Secret Santa. It eliminates the need for manual drawing of names and ensures fair, random assignments.</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">Why use our gift exchange generator?</h4>
            <p>Our gift exchange generator saves time, prevents duplicate assignments, and keeps the gift exchange organized. It's perfect for both small and large groups.</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">Can I use the gift exchange generator for different types of gift exchanges?</h4>
            <p>Yes! Our gift exchange generator works for any type of gift exchange, including Secret Santa, White Elephant, Kris Kringle, or custom gift-giving events.</p>
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-gray-900">Features of Our Gift Exchange Generator</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Random and fair participant matching</li>
          <li>Email functionality for notifying participants</li>
          <li>Easy-to-use interface</li>
          <li>Mobile-friendly design</li>
          <li>Instant results</li>
        </ul>
      </div>
    </div>
  );
};

export default SEOSection;