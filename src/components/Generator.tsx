import React, { useState } from 'react';
import { Shuffle } from 'lucide-react';

interface Participant {
  name: string;
  email: string;
}

const Generator = () => {
  const [participants, setParticipants] = useState<Participant[]>([
    { name: '', email: '' }
  ]);
  const [results, setResults] = useState<string[]>([]);

  const addParticipant = () => {
    setParticipants([...participants, { name: '', email: '' }]);
  };

  const handleChange = (index: number, field: keyof Participant, value: string) => {
    const newParticipants = [...participants];
    newParticipants[index][field] = value;
    setParticipants(newParticipants);
  };

  const generatePairs = () => {
    if (participants.length < 2) return;

    const names = participants.map(p => p.name).filter(name => name.trim() !== '');
    let shuffled = [...names];
    let results: string[] = [];

    // Fisher-Yates shuffle
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    // Ensure no one gets themselves
    for (let i = 0; i < names.length; i++) {
      if (shuffled[i] === names[i]) {
        const nextIndex = (i + 1) % names.length;
        [shuffled[i], shuffled[nextIndex]] = [shuffled[nextIndex], shuffled[i]];
      }
    }

    for (let i = 0; i < names.length; i++) {
      results.push(`${names[i]} → ${shuffled[i]}`);
    }

    setResults(results);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-xl p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Gift Exchange Generator</h2>
        
        <div className="space-y-4">
          {participants.map((participant, index) => (
            <div key={index} className="flex gap-4">
              <input
                type="text"
                placeholder="Name"
                value={participant.name}
                onChange={(e) => handleChange(index, 'name', e.target.value)}
                className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              />
              <input
                type="email"
                placeholder="Email"
                value={participant.email}
                onChange={(e) => handleChange(index, 'email', e.target.value)}
                className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              />
            </div>
          ))}
        </div>

        <div className="mt-6 flex gap-4">
          <button
            onClick={addParticipant}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
          >
            Add Participant
          </button>
          <button
            onClick={generatePairs}
            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors flex items-center gap-2"
          >
            <Shuffle className="h-5 w-5" />
            Generate Pairs
          </button>
        </div>

        {results.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Results:</h3>
            <ul className="space-y-2">
              {results.map((result, index) => (
                <li key={index} className="p-3 bg-purple-50 rounded-md">{result}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Generator;