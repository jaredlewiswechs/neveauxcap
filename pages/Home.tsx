import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Phone, Star, Building, Hammer, PaintBucket } from 'lucide-react';
import { PROJECTS, TESTIMONIALS } from '../constants';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161f82cc7?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <div className="inline-block bg-amber-500/20 text-amber-500 text-sm font-semibold px-4 py-2 rounded-full mb-6">
              KATY, TX | GREATER HOUSTON AREA
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Building Your Vision with{' '}
              <span className="text-amber-500">Excellence</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Premium residential and commercial construction services. From custom homes to complete renovations, 
              we deliver exceptional craftsmanship with integrity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/estimate"
                className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all shadow-lg hover:shadow-amber-500/25"
              >
                Get Free Estimate <ArrowRight size={20} />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all border border-white/20"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-slate-900 py-8 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Years Experience', value: '15+' },
              { label: 'Projects Completed', value: '200+' },
              { label: 'Client Satisfaction', value: '98%' },
              { label: 'Licensed & Insured', value: '✓' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-amber-500">{stat.value}</div>
                <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive construction solutions tailored to your needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Building,
                title: 'Custom Homes',
                description: 'From concept to keys, we build your dream home with meticulous attention to detail and superior craftsmanship.',
              },
              {
                icon: Hammer,
                title: 'Renovations',
                description: 'Transform your existing space with expert remodeling services for kitchens, bathrooms, and whole-home updates.',
              },
              {
                icon: PaintBucket,
                title: 'Commercial',
                description: 'Professional commercial construction and tenant improvements to enhance your business space.',
              },
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <Link to="/services" className="text-amber-600 font-semibold hover:text-amber-700 inline-flex items-center gap-1">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
              <p className="text-xl text-slate-600">Examples of our exceptional work</p>
            </div>
            <Link to="/portfolio" className="text-amber-600 font-semibold hover:text-amber-700 mt-4 md:mt-0 inline-flex items-center gap-1">
              View All Projects <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-2xl">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-amber-500 text-sm font-semibold mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold text-white mb-1">{project.name}</h3>
                  <p className="text-slate-300 text-sm">{project.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why Choose Neveaux Capital?</h2>
              <p className="text-xl text-slate-300 mb-10">
                We combine decades of experience with modern techniques to deliver exceptional results on every project.
              </p>
              <div className="space-y-6">
                {[
                  'Licensed, bonded & fully insured',
                  'Transparent pricing with detailed estimates',
                  'Dedicated project management',
                  'Quality materials & skilled craftsmen',
                  'On-time completion guarantee',
                  'Comprehensive warranties',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <CheckCircle className="w-6 h-6 text-amber-500 flex-shrink-0" />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800"
                alt="Construction team"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-amber-500 text-slate-900 p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm font-medium">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Client Testimonials</h2>
            <p className="text-xl text-slate-600">What our clients say about our work</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-lg text-slate-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-500">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-slate-800 mb-10 max-w-2xl mx-auto">
            Contact us today for a free consultation and detailed estimate. Let's build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all shadow-lg"
            >
              <Phone size={20} /> Contact Us
            </Link>
            <Link
              to="/estimate"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-lg text-lg font-bold transition-all shadow-lg"
            >
              Get Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
