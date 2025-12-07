
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const UpcomingEvents: React.FC = () => {
  const events = [
    {
      id: 1,
      title: "Youth Conference",
      date: "June 10-12, 2024",
      time: "9:00 AM - 5:00 PM",
      description: "Three days of worship, teaching, and fellowship for young people ages 13-25.",
      image: "https://images.unsplash.com/photo-1526976668912-1a811878dd37"
    },
    {
      id: 2,
      title: "Women's Prayer Breakfast",
      date: "May 28, 2024",
      time: "7:30 AM - 9:30 AM",
      description: "Join us for a morning of prayer, encouragement, and fellowship for all women.",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac"
    },
    {
      id: 3,
      title: "Community Outreach",
      date: "June 5, 2024",
      time: "10:00 AM - 2:00 PM",
      description: "Serving our local community through food distribution and medical check-ups.",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Upcoming Events</h2>
          <p className="text-xl text-gray-600">Join us for these special gatherings</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map(event => (
            <div key={event.id} className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                  src={event.image} 
                  alt={event.title} 
                />
              </div>
              <div className="p-5">
                <div className="flex items-center mb-3 text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{event.date} • {event.time}</span>
                </div>
                <h5 className="text-xl font-bold tracking-tight text-gray-800 mb-2">{event.title}</h5>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Register Now</Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/events">
            <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              View All Events
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
