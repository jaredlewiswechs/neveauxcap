import React from 'react';
import { Link } from 'react-router-dom';
import { Building, Hammer, PaintBucket, Home, Wrench, Ruler, ArrowRight, CheckCircle } from 'lucide-react';
import { Service } from '../types';

const SERVICES: Service[] = [
  {
    title: 'Custom Home Construction',
    description: 'Build your dream home from the ground up with our comprehensive custom home construction services.',
    items: [
      'Architectural planning & design consultation',
      'Foundation & structural work',
      'Framing & exterior finishes',
      'Electrical, plumbing & HVAC systems',
      'Interior finishes & custom details',
      'Landscaping & outdoor living spaces',
    ],
    timeline: '12-18 months',
    budget: '$225-750/sq ft',
  },
  {
    title: 'Kitchen Remodeling',
    description: 'Transform your kitchen into the heart of your home with modern design and premium finishes.',
    items: [
      'Custom cabinetry & countertops',
      'Appliance installation',
      'Lighting & electrical upgrades',
      'Plumbing fixtures & sinks',
      'Flooring & backsplash',
      'Island & storage solutions',
    ],
    timeline: '4-8 weeks',
    budget: '$175-625/sq ft',
  },
  {
    title: 'Bathroom Renovation',
    description: 'Create a spa-like retreat with our expert bathroom renovation services.',
    items: [
      'Custom tile work & stonework',
      'Vanity & cabinetry installation',
      'Shower & tub upgrades',
      'Plumbing & fixture replacement',
      'Lighting & ventilation',
      'Heated flooring options',
    ],
    timeline: '3-6 weeks',
    budget: '$250-700/sq ft',
  },
  {
    title: 'Room Additions',
    description: 'Expand your living space with seamless room additions that match your existing home.',
    items: [
      'Structural engineering & permits',
      'Foundation & framing',
      'Roof integration',
      'HVAC extension',
      'Electrical & plumbing',
      'Interior & exterior finishing',
    ],
    timeline: '2-4 months',
    budget: '$200-500/sq ft',
  },
  {
    title: 'Commercial Construction',
    description: 'Professional commercial construction and tenant improvement services for businesses.',
    items: [
      'Office build-outs & renovations',
      'Retail space construction',
      'Restaurant & hospitality builds',
      'Medical & professional offices',
      'Warehouse & industrial spaces',
      'ADA compliance & accessibility',
    ],
    timeline: '3-12 months',
    budget: '$100-400/sq ft',
  },
  {
    title: 'Whole Home Renovation',
    description: 'Complete transformation of your existing home with modern updates and improvements.',
    items: [
      'Open floor plan conversions',
      'Structural modifications',
      'Complete electrical rewiring',
      'Plumbing system updates',
      'Energy efficiency upgrades',
      'Smart home integration',
    ],
    timeline: '3-6 months',
    budget: 'Project specific',
  },
];

const ServicesPage: React.FC = () => {
  const icons = [Building, Hammer, PaintBucket, Home, Wrench, Ruler];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            From custom homes to renovations, we deliver exceptional craftsmanship and attention to detail on every project.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {SERVICES.map((service, index) => {
              const Icon = icons[index % icons.length];
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div className="inline-flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-amber-600" />
                      </div>
                      <span className="text-amber-600 font-semibold">0{index + 1}</span>
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                    <p className="text-lg text-slate-600 mb-6">{service.description}</p>
                    <ul className="space-y-3 mb-8">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-6 mb-6">
                      <div className="bg-slate-100 px-4 py-2 rounded-lg">
                        <span className="text-sm text-slate-500">Timeline:</span>
                        <span className="ml-2 font-semibold text-slate-900">{service.timeline}</span>
                      </div>
                      <div className="bg-slate-100 px-4 py-2 rounded-lg">
                        <span className="text-sm text-slate-500">Budget:</span>
                        <span className="ml-2 font-semibold text-slate-900">{service.budget}</span>
                      </div>
                    </div>
                  </div>
                  <div className={!isEven ? 'lg:order-1' : ''}>
                    <div className="relative rounded-2xl overflow-hidden shadow-xl">
                      <img
                        src={`https://images.unsplash.com/photo-${
                          ['1600585154340-be6191ecdbb0', '1556909114-f6e7ad7d3136', '1552321554-5fefe8c9ef14', '1600607687939-ce8a6c25118c', '1497366216548-37526070297c', '1600566753086-00f18fb6b3ea'][index % 6]
                        }?auto=format&fit=crop&q=80&w=800`}
                        alt={service.title}
                        className="w-full h-80 object-cover"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Process</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A streamlined approach to bring your vision to life
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'We discuss your vision, needs, and budget to understand your project goals.' },
              { step: '02', title: 'Design & Planning', description: 'Our team creates detailed plans and provides a comprehensive estimate.' },
              { step: '03', title: 'Construction', description: 'Expert craftsmen bring your project to life with precision and care.' },
              { step: '04', title: 'Completion', description: 'Final walkthrough, quality assurance, and project handover.' },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-bold text-slate-100 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 right-0 w-12 text-slate-200">
                    <ArrowRight size={32} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Contact us today for a free consultation and let's discuss how we can bring your project to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/estimate"
              className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all shadow-lg"
            >
              Get Free Estimate <ArrowRight size={20} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all border border-white/20"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
