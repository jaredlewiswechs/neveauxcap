import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, ArrowRight, Info, Phone } from 'lucide-react';
import { PRICING_CONSTANTS } from '../constants';
import { ProjectType, FinishLevel } from '../types';

const EstimatePage: React.FC = () => {
  const [projectType, setProjectType] = useState<ProjectType>('Kitchen');
  const [finishLevel, setFinishLevel] = useState<FinishLevel>('Mid-Range');
  const [squareFeet, setSquareFeet] = useState<number>(200);

  const pricing = PRICING_CONSTANTS[projectType];

  const minSqFt = pricing.minSqFt;
  const maxSqFt = pricing.maxSqFt;
  const rate = pricing.rates[finishLevel];
  const minProject = 'minProject' in pricing ? pricing.minProject : 0;

  const estimate = useMemo(() => {
    const rawEstimate = squareFeet * rate;
    const finalEstimate = Math.max(rawEstimate, minProject);
    const lowEstimate = Math.round(finalEstimate * 0.85);
    const highEstimate = Math.round(finalEstimate * 1.15);
    return { low: lowEstimate, mid: Math.round(finalEstimate), high: highEstimate };
  }, [squareFeet, rate, minProject]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Project Estimator</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Get an instant estimate for your construction project. Adjust the options below to see approximate costs.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Calculator Controls */}
            <div className="lg:col-span-3 bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Estimate Calculator</h2>
                  <p className="text-slate-500 text-sm">Adjust options to see your estimate</p>
                </div>
              </div>

              {/* Project Type */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-slate-700 mb-3">Project Type</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {(Object.keys(PRICING_CONSTANTS) as ProjectType[]).map((type) => (
                    <button
                      key={type}
                      onClick={() => {
                        setProjectType(type);
                        const newPricing = PRICING_CONSTANTS[type];
                        setSquareFeet(Math.max(newPricing.minSqFt, Math.min(squareFeet, newPricing.maxSqFt)));
                      }}
                      className={`px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
                        projectType === type
                          ? 'bg-amber-500 text-white'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Finish Level */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-slate-700 mb-3">Finish Level</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {(['Standard', 'Mid-Range', 'Premium', 'Luxury'] as FinishLevel[]).map((level) => (
                    <button
                      key={level}
                      onClick={() => setFinishLevel(level)}
                      className={`px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
                        finishLevel === level
                          ? 'bg-amber-500 text-white'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  Rate: {formatCurrency(rate)}/sq ft
                </p>
              </div>

              {/* Square Footage */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Square Footage: <span className="text-amber-600">{squareFeet.toLocaleString()} sq ft</span>
                </label>
                <input
                  type="range"
                  min={minSqFt}
                  max={maxSqFt}
                  value={squareFeet}
                  onChange={(e) => setSquareFeet(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-2">
                  <span>{minSqFt.toLocaleString()} sq ft</span>
                  <span>{maxSqFt.toLocaleString()} sq ft</span>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex gap-3">
                <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-amber-800">
                  This is a preliminary estimate only. Actual costs may vary based on specific project requirements, 
                  site conditions, material selections, and current market rates. Contact us for a detailed quote.
                </p>
              </div>
            </div>

            {/* Estimate Display */}
            <div className="lg:col-span-2">
              <div className="bg-slate-900 rounded-2xl shadow-lg p-8 text-white sticky top-28">
                <h3 className="text-lg font-semibold text-slate-400 mb-2">Estimated Cost Range</h3>
                
                <div className="mb-8">
                  <div className="text-5xl font-bold text-amber-500 mb-2">
                    {formatCurrency(estimate.mid)}
                  </div>
                  <div className="text-slate-400">
                    Range: {formatCurrency(estimate.low)} - {formatCurrency(estimate.high)}
                  </div>
                </div>

                <div className="space-y-4 mb-8 pt-6 border-t border-slate-800">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Project Type</span>
                    <span className="font-semibold">{projectType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Finish Level</span>
                    <span className="font-semibold">{finishLevel}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Square Footage</span>
                    <span className="font-semibold">{squareFeet.toLocaleString()} sq ft</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Rate</span>
                    <span className="font-semibold">{formatCurrency(rate)}/sq ft</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link
                    to="/contact"
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-lg font-bold text-center transition-all flex items-center justify-center gap-2"
                  >
                    Get Detailed Quote <ArrowRight size={20} />
                  </Link>
                  <a
                    href="tel:936-499-8772"
                    className="w-full bg-white/10 hover:bg-white/20 text-white py-4 rounded-lg font-semibold text-center transition-all flex items-center justify-center gap-2"
                  >
                    <Phone size={20} /> Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Guide */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Pricing Guide</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Typical price ranges for different project types and finish levels
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Project Type</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900">Standard</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900">Mid-Range</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900">Premium</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900">Luxury</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {(Object.keys(PRICING_CONSTANTS) as ProjectType[]).map((type) => (
                  <tr key={type} className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-semibold text-slate-900">{type}</td>
                    {(['Standard', 'Mid-Range', 'Premium', 'Luxury'] as FinishLevel[]).map((level) => (
                      <td key={level} className="px-6 py-4 text-center text-slate-600">
                        {formatCurrency(PRICING_CONSTANTS[type].rates[level])}/sq ft
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready for an Accurate Quote?</h2>
          <p className="text-xl text-slate-800 mb-10 max-w-2xl mx-auto">
            Our online estimator provides ballpark figures. For a detailed, accurate quote tailored to your 
            specific project, contact us today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all shadow-lg"
            >
              Request Detailed Quote
            </Link>
            <a
              href="tel:936-499-8772"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-lg text-lg font-bold transition-all shadow-lg"
            >
              <Phone size={20} /> 936-499-8772
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EstimatePage;