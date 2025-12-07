import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import Navigation from '@/components/Navigation';

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Youth Conference",
      date: "June 10-12, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Main Sanctuary",
      description: "Three days of worship, teaching, and fellowship for young people ages 13-25. Join us for dynamic speakers, powerful worship, and opportunities to connect with other youth from across the region.",
      image: "https://images.unsplash.com/photo-1526976668912-1a811878dd37",
      featured: true
    },
    {
      id: 2,
      title: "Women's Prayer Breakfast",
      date: "May 28, 2024",
      time: "7:30 AM - 9:30 AM",
      location: "Fellowship Hall",
      description: "Join us for a morning of prayer, encouragement, and fellowship for all women. Enjoy a delicious breakfast and an inspiring message from our guest speaker.",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac",
      featured: false
    },
    {
      id: 3,
      title: "Community Outreach",
      date: "June 5, 2024",
      time: "10:00 AM - 2:00 PM",
      location: "Embu Town Center",
      description: "Serving our local community through food distribution and medical check-ups. We'll be partnering with local healthcare providers to offer basic health screenings and consultations.",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433",
      featured: false
    },
    {
      id: 4,
      title: "Marriage Enrichment Weekend",
      date: "June 17-18, 2024",
      time: "Friday 6:00 PM - Saturday 5:00 PM",
      location: "Church Retreat Center",
      description: "A special weekend designed to strengthen marriages through Biblical teaching, communication workshops, and quality time together. Childcare will be provided.",
      image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b",
      featured: false
    },
    {
      id: 5,
      title: "Bible Study Leadership Training",
      date: "June 24, 2024",
      time: "9:00 AM - 3:00 PM",
      location: "Education Building",
      description: "A comprehensive training for current and aspiring small group leaders. Learn effective teaching methods, group facilitation, and pastoral care skills.",
      image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65",
      featured: false
    },
    {
      id: 6,
      title: "Children's VBS Program",
      date: "July 3-7, 2024",
      time: "8:30 AM - 12:30 PM",
      location: "Children's Wing",
      description: "Our annual Vacation Bible School program for children ages 4-12. This year's theme is 'Ocean Adventure: Exploring God's Depths' with games, crafts, music, and Bible lessons.",
      image: "https://images.unsplash.com/photo-1536337005238-94b997371b40",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50">
      <Navigation />
      
      {/* Header */}
      <div className="bg-blue-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Events & Calendar</h1>
          <p className="text-xl max-w-3xl mx-auto">Join us for special events, gatherings, and opportunities to grow in faith and fellowship</p>
        </div>
      </div>

      {/* Featured Event */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Event</h2>
          
          {events.filter(event => event.featured).map(event => (
            <div key={event.id} className="bg-white shadow-xl rounded-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">{event.title}</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <Calendar className="h-5 w-5 text-blue-600 mt-0.5 mr-3" />
                      <div>
                        <h4 className="font-semibold text-gray-700">Date</h4>
                        <p className="text-gray-600">{event.date}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-blue-600 mt-0.5 mr-3" />
                      <div>
                        <h4 className="font-semibold text-gray-700">Time</h4>
                        <p className="text-gray-600">{event.time}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-blue-600 mt-0.5 mr-3" />
                      <div>
                        <h4 className="font-semibold text-gray-700">Location</h4>
                        <p className="text-gray-600">{event.location}</p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-8">{event.description}</p>
                  
                  <Button className="bg-blue-600 hover:bg-blue-700">Register Now</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.filter(event => !event.featured).map(event => (
              <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                    src={event.image} 
                    alt={event.title} 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{event.title}</h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                      <span>{event.date}</span>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2 text-blue-600" />
                      <span>{event.time}</span>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Register Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar View (Placeholder) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Church Calendar</h2>
          
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <p className="text-lg text-gray-700 mb-4">
              View our full calendar of services, meetings, and events
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700">
              View Full Calendar
            </Button>
          </div>
        </div>
      </section>

      {/* Event Registration */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Event Notifications</h2>
            <p className="text-xl opacity-90">Stay updated on all upcoming events and activities</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg text-gray-800">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <Input 
                    id="name"
                    type="text" 
                    placeholder="Your name" 
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <Input 
                    id="email"
                    type="email" 
                    placeholder="Your email" 
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number (optional)</label>
                  <Input 
                    id="phone"
                    type="tel" 
                    placeholder="Your phone number" 
                  />
                </div>
                
                <div>
                  <label htmlFor="interests" className="block text-sm font-medium text-gray-700 mb-1">Areas of Interest</label>
                  <select 
                    id="interests"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  >
                    <option value="">Select your interests</option>
                    <option value="worship">Worship Services</option>
                    <option value="youth">Youth Events</option>
                    <option value="womens">Women's Ministry</option>
                    <option value="mens">Men's Fellowship</option>
                    <option value="community">Community Outreach</option>
                    <option value="all">All Events</option>
                  </select>
                </div>
              </div>
              
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                Subscribe to Event Updates
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <p className="text-xs text-gray-500 text-center">
                By subscribing, you'll receive email notifications about upcoming events that match your interests.
                You can unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
