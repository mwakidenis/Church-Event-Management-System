
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[600px] flex items-center">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: 'url(/lovable-uploads/6c32a2d7-e360-413a-af3b-76e515cc15cc.png)',
          filter: 'brightness(0.7)'
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Welcome to<br />
          <span className="text-amber-300">Wonders of God Church</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl leading-relaxed">
          Experience the transformative power of faith in a loving community dedicated to worship, fellowship, and service.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/about">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-6">
              Plan Your Visit
            </Button>
          </Link>
          <Link to="/live">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-6">
              Watch Live Service
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
