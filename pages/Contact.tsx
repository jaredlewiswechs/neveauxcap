import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Ready to start your project? Get in touch with our team for a free consultation.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Phone</h3>
                    <a href="tel:936-499-8772" className="text-slate-600 hover:text-amber-600">
                      936-499-8772
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Email</h3>
                    <a href="mailto:sirneveaux@gmail.com" className="text-slate-600 hover:text-amber-600">
                      sirneveaux@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Service Area</h3>
                    <p className="text-slate-600">
                      Katy, TX &amp; Greater Houston Area
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Business Hours</h3>
                    <p className="text-slate-600">
                      Mon - Fri: 7:00 AM - 6:00 PM<br />
                      Sat: 8:00 AM - 2:00 PM<br />
                      Sun: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-slate-900 rounded-2xl text-white">
                <h3 className="font-bold mb-2">Emergency Services</h3>
                <p className="text-slate-400 text-sm mb-4">
                  For urgent construction issues, we offer 24/7 emergency support.
                </p>
                <a href="tel:936-499-8772" className="text-amber-500 font-semibold hover:text-amber-400">
                  Call Now →
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Thank You!</h2>
                    <p className="text-slate-600 mb-8">
                      We've received your message and will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
                      }}
                      className="text-amber-600 font-semibold hover:text-amber-700"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Send Us a Message</h2>
                    <p className="text-slate-600 mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                            placeholder="(555) 123-4567"
                          />
                        </div>
                        <div>
                          <label htmlFor="projectType" className="block text-sm font-semibold text-slate-700 mb-2">
                            Project Type
                          </label>
                          <select
                            id="projectType"
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all bg-white"
                          >
                            <option value="">Select a project type</option>
                            <option value="custom-home">Custom Home</option>
                            <option value="kitchen">Kitchen Remodel</option>
                            <option value="bathroom">Bathroom Remodel</option>
                            <option value="addition">Room Addition</option>
                            <option value="commercial">Commercial</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all resize-none"
                          placeholder="Tell us about your project..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg"
                      >
                        <Send size={20} />
                        Send Message
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-slate-200 relative">
        <div className="absolute inset-0 flex items-center justify-center bg-slate-900/5">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-amber-500 mx-auto mb-4" />
            <p className="text-lg font-semibold text-slate-700">Serving Katy, TX &amp; Greater Houston Area</p>
            <p className="text-slate-500">Contact us for service in your area</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
