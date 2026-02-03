import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Award, Users, Target, ArrowRight, Shield, Clock, Heart } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541123603104-512919d6a96c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">About Neveaux Capital</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Building Greater Houston's future with integrity, craftsmanship, and an unwavering commitment to excellence.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-amber-100 text-amber-600 text-sm font-semibold px-4 py-2 rounded-full mb-6">
                OUR STORY
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Building Dreams Since Day One
              </h2>
              <div className="space-y-4 text-lg text-slate-600">
                <p>
                  Neveaux Capital was founded with a simple mission: to bring exceptional craftsmanship and 
                  integrity to every construction project in the Greater Houston area.
                </p>
                <p>
                  Based in Katy, Texas, we've grown from a small team of dedicated builders into a full-service 
                  construction company serving residential and commercial clients throughout the region.
                </p>
                <p>
                  Our success is built on strong relationships, transparent communication, and an uncompromising 
                  commitment to quality. Every project we undertake reflects our core values and dedication to 
                  exceeding client expectations.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800"
                alt="Our team"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-amber-500 text-slate-900 p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">Katy, TX</div>
                <div className="text-sm font-medium">Proudly Local</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Mission & Values</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Our Mission',
                description: 'To deliver exceptional construction services that transform our clients\' visions into reality, while maintaining the highest standards of quality, safety, and professionalism.',
              },
              {
                icon: Award,
                title: 'Our Vision',
                description: 'To be the most trusted construction company in Greater Houston, known for our integrity, craftsmanship, and commitment to client satisfaction.',
              },
              {
                icon: Users,
                title: 'Our Commitment',
                description: 'To build lasting relationships with our clients, partners, and community through honest communication, fair pricing, and exceptional service.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Core Values</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              The foundation of our business
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: 'Integrity', description: 'We do the right thing, even when no one is watching.' },
              { icon: Award, title: 'Excellence', description: 'We strive for perfection in every detail of our work.' },
              { icon: Clock, title: 'Reliability', description: 'We deliver on our promises, on time and on budget.' },
              { icon: Heart, title: 'Passion', description: 'We love what we do and it shows in our results.' },
            ].map((value, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-amber-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-slate-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800"
                alt="Construction site"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Why Choose Us?</h2>
              <p className="text-lg text-slate-600 mb-8">
                With years of experience serving the Greater Houston area, we've built our reputation on trust, 
                quality, and exceptional service.
              </p>
              <div className="space-y-4">
                {[
                  'Licensed, bonded, and fully insured',
                  'Transparent pricing with no hidden fees',
                  'Dedicated project manager for every job',
                  'Premium materials and skilled craftsmen',
                  'On-time completion guarantee',
                  'Comprehensive warranties on all work',
                  'Local business supporting local community',
                  '24/7 communication during active projects',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '15+', label: 'Years Experience' },
              { value: '200+', label: 'Projects Completed' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '50+', label: 'Team Members' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-slate-800">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Let's Build Together</h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Ready to start your next project? We'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all shadow-lg"
            >
              Contact Us <ArrowRight size={20} />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
