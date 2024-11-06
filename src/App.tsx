import React, { FormEvent, useState } from 'react';
import {
  Globe,
  MonitorSmartphone,
  Server,
  Users,
  Cpu,
  MessageSquare,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Send,
} from 'lucide-react';
import Jobs from './pages/Jobs';
import ContactForm from './components/ContactForm';
import WebDevelopment from './pages/services/WebDevelopment';
import MobileSolutions from './pages/services/MobileSolutions';
import CloudServices from './pages/services/CloudServices';
import ITConsulting from './pages/services/ITConsulting';
import SoftwareDevelopment from './pages/services/SoftwareDevelopment';
import AIChatbots from './pages/services/AIChatbots';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'jobs':
        return <Jobs />;
      case 'web-development':
        return <WebDevelopment />;
      case 'mobile-solutions':
        return <MobileSolutions />;
      case 'cloud-services':
        return <CloudServices />;
      case 'it-consulting':
        return <ITConsulting />;
      case 'software-development':
        return <SoftwareDevelopment />;
      case 'ai-chatbots':
        return <AIChatbots />;
      default:
        return (
          <>
            {/* Hero Section */}
            <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
              <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
                <span className="text-xl font-bold">
                  Gowtham Cloud Solutions Pvt Ltd
                </span>
                <div className="hidden md:flex space-x-8">
                  <button
                    onClick={() => setCurrentPage('home')}
                    className="hover:text-blue-200 transition"
                  >
                    Home
                  </button>
                  <a href="#services" className="hover:text-blue-200 transition">
                    Services
                  </a>
                  <a href="#about" className="hover:text-blue-200 transition">
                    About
                  </a>
                  <button
                    onClick={() => setCurrentPage('jobs')}
                    className="hover:text-blue-200 transition"
                  >
                    Jobs
                  </button>
                  <a href="#contact" className="hover:text-blue-200 transition">
                    Contact
                  </a>
                </div>
              </nav>

              <div className="container mx-auto px-6 py-24">
                <div className="max-w-3xl">
                  <h1 className="text-5xl font-bold mb-6">
                    Transforming Businesses Through Technology
                  </h1>
                  <p className="text-xl mb-8">
                    Delivering innovative IT and Cloud solutions that drive growth
                    and efficiency for businesses worldwide.
                  </p>
                  <a 
                    href="#contact" 
                    className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition flex items-center space-x-2 inline-flex"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </div>
              </div>
            </header>

            {/* Services Section */}
            <section id="services" className="py-20 bg-gray-50">
              <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-16">
                  Our Services
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      icon: Globe,
                      title: 'Web Development',
                      desc: 'Custom web applications and responsive websites built with cutting-edge technologies.',
                      page: 'web-development',
                    },
                    {
                      icon: MonitorSmartphone,
                      title: 'Mobile Solutions',
                      desc: 'Native and cross-platform mobile applications for iOS and Android.',
                      page: 'mobile-solutions',
                    },
                    {
                      icon: Server,
                      title: 'Cloud Services',
                      desc: 'Secure and scalable cloud infrastructure solutions and management.',
                      page: 'cloud-services',
                    },
                    {
                      icon: Users,
                      title: 'IT Consulting and Support',
                      desc: 'Strategic technology consulting to optimize your business processes with 24/7 technical support and maintenance services.',
                      page: 'it-consulting',
                    },
                    {
                      icon: Cpu,
                      title: 'Software Development',
                      desc: 'Custom software solutions tailored to your business needs.',
                      page: 'software-development',
                    },
                    {
                      icon: MessageSquare,
                      title: 'AI Chatbots',
                      desc: 'Deliver intelligent, real-time customer interactions, enhancing user experience and streamlining support by automating responses and personalizing engagements across platforms.',
                      page: 'ai-chatbots',
                    },
                  ].map((service, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPage(service.page)}
                      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition text-left w-full"
                    >
                      <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                      <h3 className="text-xl font-semibold mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600">{service.desc}</p>
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20">
              <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                      alt="Team collaboration"
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-6">About Us</h2>
                    <p className="text-gray-600 mb-6">
                      With over a decade of experience, Gowtham Cloud Solutions Pvt
                      Ltd. has been at the forefront of digital transformation,
                      helping businesses leverage technology to achieve their goals.
                      Our team of experts combines technical excellence with
                      industry knowledge to deliver solutions that make a
                      difference.
                    </p>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-2xl font-bold text-blue-600">500+</h4>
                        <p className="text-gray-600">Projects Completed</p>
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-blue-600">200+</h4>
                        <p className="text-gray-600">Happy Clients</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-gray-50">
              <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-16">
                  Get in Touch
                </h2>
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <div className="space-y-8">
                      <div className="flex items-center space-x-4">
                        <Mail className="w-6 h-6 text-blue-600" />
                        <div>
                          <h4 className="font-semibold">Email Us</h4>
                          <p className="text-gray-600">
                            support@gowthamcloudsolutions.com
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Phone className="w-6 h-6 text-blue-600" />
                        <div>
                          <h4 className="font-semibold">Call Us</h4>
                          <p className="text-gray-600">+91 6303 652 991</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <MapPin className="w-6 h-6 text-blue-600" />
                        <div>
                          <h4 className="font-semibold">Visit Us</h4>
                          <p className="text-gray-600">
                            Samatha Nagar, 10th Line, Ongole, Andhra Pradesh, India,
                            PIN - 523002
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <ContactForm />
                  </div>
                </div>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {renderPage()}

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><button onClick={() => setCurrentPage('home')} className="hover:text-blue-200 transition">Home</button></li>
                <li><a href="#services" className="hover:text-blue-200 transition">Services</a></li>
                <li><a href="#about" className="hover:text-blue-200 transition">About</a></li>
                <li><button onClick={() => setCurrentPage('jobs')} className="hover:text-blue-200 transition">Jobs</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><button onClick={() => setCurrentPage('web-development')} className="hover:text-blue-200 transition">Web Development</button></li>
                <li><button onClick={() => setCurrentPage('mobile-solutions')} className="hover:text-blue-200 transition">Mobile Solutions</button></li>
                <li><button onClick={() => setCurrentPage('cloud-services')} className="hover:text-blue-200 transition">Cloud Services</button></li>
                <li><button onClick={() => setCurrentPage('it-consulting')} className="hover:text-blue-200 transition">IT Consulting</button></li>
                <li><button onClick={() => setCurrentPage('software-development')} className="hover:text-blue-200 transition">Software Development</button></li>
                <li><button onClick={() => setCurrentPage('ai-chatbots')} className="hover:text-blue-200 transition">AI Chatbots</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-2 rounded-l-lg text-gray-900"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700 transition"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-200 transition">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-blue-200 transition">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-blue-200 transition">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-blue-200 transition">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="https://wa.me/916303652991" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition">
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a4 4 0 0 1-4-4" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-800 pt-8">
            <div className="text-center">
              <p>© 2024 Gowtham Cloud Solutions Pvt Ltd. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;