import React from 'react';
import { Code2, ArrowLeft } from 'lucide-react';

export default function WebDevelopment() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-6">
          <a href="/" className="inline-flex items-center text-white hover:text-blue-200 mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </a>
          <h1 className="text-4xl font-bold mb-4">Web Development Services</h1>
          <p className="text-xl">Building powerful web solutions for modern businesses</p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Our Web Development Expertise</h2>
            <div className="space-y-4">
              <p>We create custom web applications and responsive websites that help businesses thrive in the digital age. Our solutions are built with modern technologies and best practices to ensure scalability, security, and optimal performance.</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Custom Web Applications</li>
                <li>E-commerce Solutions</li>
                <li>Progressive Web Apps (PWA)</li>
                <li>Content Management Systems</li>
                <li>API Development & Integration</li>
                <li>Web Portal Development</li>
              </ul>
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <Code2 className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-4">Technologies We Use</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Frontend</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>React.js</li>
                  <li>Vue.js</li>
                  <li>Angular</li>
                  <li>Next.js</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Backend</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>Node.js</li>
                  <li>Python</li>
                  <li>PHP</li>
                  <li>Java</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Our Development Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: 'Discovery',
                description: 'Understanding your requirements and business goals'
              },
              {
                title: 'Planning',
                description: 'Creating detailed project roadmap and architecture'
              },
              {
                title: 'Development',
                description: 'Building your solution with agile methodology'
              },
              {
                title: 'Deployment',
                description: 'Testing, launching, and maintaining your application'
              }
            ].map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4">
                  {index + 1}
                </div>
                <h3 className="font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}