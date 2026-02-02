
export type ProjectType = 'Kitchen' | 'Bathroom' | 'Addition' | 'Custom Home' | 'Commercial';
export type FinishLevel = 'Standard' | 'Mid-Range' | 'Premium' | 'Luxury';

export interface Project {
  id: string;
  name: string;
  category: 'Residential' | 'Commercial' | 'Remodeling';
  location: string;
  image: string;
  description: string;
  stats: {
    size?: string;
    duration?: string;
    value?: string;
    completed?: string;
  };
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
}

export interface Service {
  title: string;
  description: string;
  items: string[];
  timeline: string;
  budget: string;
}
