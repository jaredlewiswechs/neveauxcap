
import { Project, Testimonial } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    name: 'Typical Luxury Residence',
    category: 'Residential',
    location: 'Katy / Greater Houston',
    image: 'https://images.unsplash.com/photo-1600585154340-be6191ecdbb0?auto=format&fit=crop&q=80&w=800',
    description: 'A representative example of our full-scale custom residential capabilities, featuring modern architectural lines and high-end finishes common in our builds.',
    stats: { size: '4,500+ sq ft', duration: '12-18 months', value: 'Market Rate', completed: 'Representative' }
  },
  {
    id: '2',
    name: 'Typical Commercial Interior',
    category: 'Commercial',
    location: 'West Houston / Katy',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    description: 'An illustration of our commercial tenant improvement work, showcasing clean design and professional layout standards for modern office spaces.',
    stats: { size: '5,000+ sq ft', duration: '4-6 months', value: 'Bids vary', completed: 'Representative' }
  },
  {
    id: '3',
    name: 'Representative Modern Remodel',
    category: 'Remodeling',
    location: 'Katy, TX',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
    description: 'Typical high-end kitchen and living area renovation. This represents our approach to open-concept design and premium material integration.',
    stats: { size: '2,000+ sq ft', duration: '3-5 months', value: 'Project specific', completed: 'Representative' }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Local Homeowner',
    location: 'Katy, TX',
    text: "The professionalism and attention to detail were evident from start to finish. A standard of excellence we've come to expect from Neveaux Capital.",
    rating: 5
  },
  {
    id: 2,
    name: 'Business Owner',
    location: 'Houston, TX',
    text: "Reliable, transparent, and high-quality work. They managed our commercial build-out with extreme care for our timeline and budget.",
    rating: 5
  }
];

export const PRICING_CONSTANTS = {
  Kitchen: {
    minSqFt: 50,
    maxSqFt: 500,
    minProject: 15000,
    rates: { 'Standard': 175, 'Mid-Range': 275, 'Premium': 425, 'Luxury': 625 }
  },
  Bathroom: {
    minSqFt: 25,
    maxSqFt: 200,
    minProject: 8000,
    rates: { 'Standard': 250, 'Mid-Range': 375, 'Premium': 525, 'Luxury': 700 }
  },
  Addition: {
    minSqFt: 100,
    maxSqFt: 2000,
    rates: { 'Standard': 200, 'Mid-Range': 300, 'Premium': 400, 'Luxury': 500 }
  },
  'Custom Home': {
    minSqFt: 2000,
    maxSqFt: 15000,
    rates: { 'Standard': 225, 'Mid-Range': 325, 'Premium': 475, 'Luxury': 750 }
  },
  Commercial: {
    minSqFt: 500,
    maxSqFt: 50000,
    rates: { 'Standard': 100, 'Mid-Range': 175, 'Premium': 250, 'Luxury': 400 }
  }
};
