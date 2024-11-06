import React from 'react';
import { Smartphone, CheckCircle } from 'lucide-react';

export default function MobileSolutions() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Mobile Solutions</h1>
          <p className="text-xl">Native and cross-platform mobile applications for iOS and Android</p>
        </div>
      </header>

      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Mobile-First Solutions</h2>
            <p className="text-gray-600 mb-6">
              We develop high-quality mobile applications that provide seamless user experiences across all platforms. Our mobile solutions help businesses reach their customers wherever they are.
            </p>
            <div className="space-y-4">
              {[
                'Native iOS Development',
                'Native Android Development',
                'Cross-Platform Solutions',
                'Mobile App UI/UX Design',
                'App Store Optimization',
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
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80"
              alt="Mobile Development"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: 'Native Performance',
              description: 'Optimized applications that leverage platform-specific features and capabilities.',
              icon: Smartphone,
            },
            {
              title: 'Cross-Platform',
              description: 'Unified codebases that work seamlessly across iOS and Android platforms.',
              icon: Smartphone,
            },
            {
              title: 'User Experience',
              description: 'Intuitive interfaces designed for optimal mobile user experience.',
              icon: Smartphone,
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