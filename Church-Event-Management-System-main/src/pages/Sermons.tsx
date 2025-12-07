
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Download, Calendar, Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import Navigation from '@/components/Navigation';

const Sermons = () => {
  const [featuredVideoPlaying, setFeaturedVideoPlaying] = useState(false);
  const [playingVideoId, setPlayingVideoId] = useState<number | null>(null);

  const sermons = [
    {
      id: 1,
      title: "Walking in Divine Favor",
      pastor: "Bishop Wilson Muchangi",
      date: "May 19, 2024",
      description: "Discover how to position yourself for God's supernatural favor in every area of your life.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      tags: ["Faith", "Blessings", "Favor"],
      youtubeId: "dQw4w9WgXcQ"
    },
    {
      id: 2,
      title: "Overcoming Life's Challenges",
      pastor: "Bishop Wilson Muchangi",
      date: "May 12, 2024",
      description: "Biblical strategies for facing and conquering the obstacles that stand in your path.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      tags: ["Challenges", "Victory", "Faith"],
      youtubeId: "kJQP7kiw5Fk"
    },
    {
      id: 3,
      title: "The Power of Prayer",
      pastor: "Minister Faith Njoki",
      date: "May 5, 2024",
      description: "Understanding how prayer connects us to God's power and transforms our circumstances.",
      image: "https://images.unsplash.com/photo-1594736797933-d0651ba42c6e",
      tags: ["Prayer", "Spiritual Growth"],
      youtubeId: "jNQXAC9IVRw"
    },
    {
      id: 4,
      title: "Building Strong Families",
      pastor: "Elder John Kiarie",
      date: "April 28, 2024",
      description: "Biblical principles for creating healthy, God-centered families in today's challenging world.",
      image: "https://images.unsplash.com/photo-1594736797933-d0651ba42c6e",
      tags: ["Family", "Relationships"],
      youtubeId: "9bZkp7q19f0"
    },
    {
      id: 5,
      title: "The Heart of Worship",
      pastor: "Minister Faith Njoki",
      date: "April 21, 2024",
      description: "Discovering what it means to worship God in spirit and truth.",
      image: "https://images.unsplash.com/photo-1594736797933-d0651ba42c6e",
      tags: ["Worship", "Devotion"],
      youtubeId: "fJ9rUzIMcZQ"
    },
    {
      id: 6,
      title: "Living with Purpose",
      pastor: "Bishop Wilson Muchangi",
      date: "April 14, 2024",
      description: "How to discover and fulfill God's unique purpose for your life.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      tags: ["Purpose", "Calling", "Vision"],
      youtubeId: "L_jWHffIx5E"
    }
  ];

  const handleFeaturedVideoPlay = () => {
    setFeaturedVideoPlaying(true);
  };

  const handleVideoPlay = (sermonId: number) => {
    setPlayingVideoId(sermonId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50">
      <Navigation />
      
      {/* Header */}
      <div className="bg-blue-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sermons & Media</h1>
          <p className="text-xl max-w-3xl mx-auto">Grow in your faith through our library of messages</p>
        </div>
      </div>

      {/* Featured Sermon with Video Player */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">This Week's Message</h2>
          <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 relative">
              {featuredVideoPlaying ? (
                <div className="w-full h-0 pb-[56.25%] relative">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${sermons[0].youtubeId}?autoplay=1`}
                    title={sermons[0].title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <div className="absolute inset-0 bg-gray-800">
                  <img 
                    src={sermons[0].image} 
                    alt={sermons[0].title} 
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button 
                      className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-20 h-20 flex items-center justify-center"
                      aria-label="Play sermon video"
                      onClick={handleFeaturedVideoPlay}
                    >
                      <Play size={36} />
                    </Button>
                  </div>
                </div>
              )}
            </div>
            <div className="p-8">
              <div className="flex items-center mb-4">
                <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-gray-500">{sermons[0].date} • {sermons[0].pastor}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{sermons[0].title}</h3>
              <p className="text-gray-600 mb-6">{sermons[0].description}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {sermons[0].tags.map((tag, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Button 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={handleFeaturedVideoPlay}
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Now
                </Button>
                <Button variant="outline">
                  <Download className="mr-2 h-5 w-5" />
                  Download Audio
                </Button>
                <Button variant="outline">Download Notes</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sermon Archive */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Sermon Archive</h2>
          
          {/* Search & Filter */}
          <div className="mb-8 flex flex-col md:flex-row gap-4">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                type="text"
                placeholder="Search sermons..."
                className="pl-10"
              />
            </div>
            <div className="flex-1 flex gap-4">
              <select className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm">
                <option value="">All Speakers</option>
                <option value="pastor-james">Pastor James Mwangi</option>
                <option value="minister-faith">Minister Faith Njoki</option>
                <option value="elder-john">Elder John Kiarie</option>
              </select>
              <select className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm">
                <option value="">All Topics</option>
                <option value="faith">Faith</option>
                <option value="prayer">Prayer</option>
                <option value="family">Family</option>
                <option value="worship">Worship</option>
              </select>
              <Button variant="outline" className="hidden md:flex items-center">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>
          </div>
          
          {/* Sermons Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sermons.slice(1).map(sermon => (
              <div key={sermon.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 relative">
                  {playingVideoId === sermon.id ? (
                    <div className="w-full h-full">
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${sermon.youtubeId}?autoplay=1`}
                        title={sermon.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  ) : (
                    <>
                      <img 
                        src={sermon.image} 
                        alt={sermon.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <Button 
                          className="bg-blue-600 hover:bg-blue-700 rounded-full w-12 h-12 flex items-center justify-center"
                          onClick={() => handleVideoPlay(sermon.id)}
                        >
                          <Play size={20} />
                        </Button>
                      </div>
                    </>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2 text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{sermon.date} • {sermon.pastor}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{sermon.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{sermon.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {sermon.tags.map((tag, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center"
                      onClick={() => handleVideoPlay(sermon.id)}
                    >
                      <Play className="mr-1 h-4 w-4" />
                      Watch
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center">
                      <Download className="mr-1 h-4 w-4" />
                      Audio
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center space-x-2">
              <Button variant="outline" size="sm" disabled>Previous</Button>
              <Button variant="outline" size="sm" className="bg-blue-600 text-white">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline" size="sm">Next</Button>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sermons;
