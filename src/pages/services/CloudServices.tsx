import React from 'react';
import { Cloud, CheckCircle } from 'lucide-react';

export default function CloudServices() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Cloud Services</h1>
          <p className="text-xl">Secure and scalable cloud infrastructure solutions and management</p>
        </div>
      </header>

      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Cloud Infrastructure Solutions</h2>
            <p className="text-gray-600 mb-6">
              We provide comprehensive cloud services to help businesses leverage the power of cloud computing. Our solutions are designed to be secure, scalable, and cost-effective.
            </p>
            <div className="space-y-4">
              {[
                'Cloud Migration Services',
                'Infrastructure as Code',
                'Cloud Security Solutions',
                'DevOps Implementation',
                'Managed Cloud Services',
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
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
              alt="Cloud Services"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: 'Cloud Migration',
              description: 'Seamless migration of your infrastructure and applications to the cloud.',
              icon: Cloud,
            },
            {
              title: 'Cloud Security',
              description: 'Advanced security measures to protect your cloud infrastructure.',
              icon: Cloud,
            },
            {
              title: 'Scalability',
              description: 'Elastic infrastructure that grows with your business needs.',
              icon: Cloud,
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