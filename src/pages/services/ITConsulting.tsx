import React from 'react';
import { Users, CheckCircle } from 'lucide-react';

export default function ITConsulting() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">IT Consulting and Support</h1>
          <p className="text-xl">Strategic technology consulting and 24/7 technical support services</p>
        </div>
      </header>

      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Expert IT Consulting</h2>
            <p className="text-gray-600 mb-6">
              Our IT consulting services help businesses optimize their technology infrastructure and processes. We provide strategic guidance and hands-on support to drive digital transformation.
            </p>
            <div className="space-y-4">
              {[
                'Technology Strategy',
                'Digital Transformation',
                '24/7 Technical Support',
                'IT Infrastructure Planning',
                'Security Consulting',
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
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
              alt="IT Consulting"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: 'Strategic Planning',
              description: 'Comprehensive IT strategy aligned with your business goals.',
              icon: Users,
            },
            {
              title: '24/7 Support',
              description: 'Round-the-clock technical support and maintenance services.',
              icon: Users,
            },
            {
              title: 'Process Optimization',
              description: 'Streamline operations through technology implementation.',
              icon: Users,
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