import React from 'react';
import { MessageSquare, CheckCircle } from 'lucide-react';

export default function AIChatbots() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">AI Chatbots</h1>
          <p className="text-xl">Intelligent conversational AI solutions for enhanced customer engagement</p>
        </div>
      </header>

      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Smart Conversational AI</h2>
            <p className="text-gray-600 mb-6">
              Our AI chatbots provide intelligent, automated customer interactions that enhance user experience and streamline support operations. We leverage cutting-edge AI technologies to create sophisticated conversational interfaces.
            </p>
            <div className="space-y-4">
              {[
                'Natural Language Processing',
                'Multi-platform Integration',
                'Custom AI Training',
                'Analytics & Reporting',
                '24/7 Automated Support',
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80"
              alt="AI Chatbots"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: 'Intelligent Responses',
              description: 'Natural language processing for human-like conversations.',
              icon: MessageSquare,
            },
            {
              title: 'Multi-channel Support',
              description: 'Integration with various platforms and communication channels.',
              icon: MessageSquare,
            },
            {
              title: 'Analytics',
              description: 'Detailed insights into customer interactions and bot performance.',
              icon: MessageSquare,
            },
          ].map((feature, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-lg">
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/#contact"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </div>
  );
}