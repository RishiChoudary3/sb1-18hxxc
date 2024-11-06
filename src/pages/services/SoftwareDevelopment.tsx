import React from 'react';
import { Code, CheckCircle } from 'lucide-react';

export default function SoftwareDevelopment() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Software Development</h1>
          <p className="text-xl">
            Custom software solutions tailored to your business needs
          </p>
        </div>
      </header>

      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Custom Software Solutions
            </h2>
            <p className="text-gray-600 mb-6">
              We develop custom software solutions that streamline your business
              processes and drive efficiency. Our team of expert developers
              creates scalable, secure, and maintainable applications.
            </p>
            <div className="space-y-4">
              {[
                'Enterprise Software Development',
                'Custom CRM Solutions',
                'Business Process Automation',
                'Legacy System Modernization',
                'Quality Assurance & Testing',
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
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=800&q=80"
              alt="Software Development"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: 'Custom Development',
              description:
                'Tailored solutions designed specifically for your business needs.',
              icon: Code,
            },
            {
              title: 'Modern Architecture',
              description: 'Scalable and maintainable software architecture.',
              icon: Code,
            },
            {
              title: 'Quality Assurance',
              description:
                'Comprehensive testing and quality control processes.',
              icon: Code,
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
