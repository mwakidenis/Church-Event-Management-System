
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedSermon: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const featuredSermon = {
    title: "Walking in Divine Favor",
    pastor: "Bishop Wilson Muchangi",
    date: "May 19, 2024",
    description: "Discover how to position yourself for God's supernatural favor in every area of your life. This powerful message explores biblical principles that unlock divine blessings and favor.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    youtubeId: "dQw4w9WgXcQ",
    tags: ["Faith", "Blessings", "Favor"]
  };

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Message</h2>
          <p className="text-xl text-gray-600">This week's inspiring sermon</p>
        </div>

        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <div className="relative pb-[56.25%] h-0">
                {isVideoPlaying ? (
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${featuredSermon.youtubeId}?autoplay=1`}
                    title={featuredSermon.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                    <img 
                      src={featuredSermon.image} 
                      alt="Bishop preaching" 
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button 
                        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-16 h-16 flex items-center justify-center"
                        aria-label="Play sermon video"
                        onClick={handleVideoPlay}
                      >
                        <Play size={28} />
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="md:w-1/2 p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{featuredSermon.title}</h3>
              <p className="text-gray-500 mb-4">{featuredSermon.pastor} • {featuredSermon.date}</p>
              <p className="text-gray-600 mb-6">{featuredSermon.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {featuredSermon.tags.map((tag, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex items-center"
                  onClick={handleVideoPlay}
                >
                  <Play className="mr-1 h-4 w-4" />
                  Watch
                </Button>
                <Button variant="outline" size="sm">Download Notes</Button>
                <Link to="/sermons">
                  <Button variant="link" size="sm">All Sermons</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSermon;
