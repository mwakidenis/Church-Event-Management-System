import React from 'react';
import { Church, Heart, Users, Calendar, Play, DollarSign, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServiceTimes from '@/components/ServiceTimes';
import FeaturedSermon from '@/components/FeaturedSermon';
import UpcomingEvents from '@/components/UpcomingEvents';
import TestimonialSection from '@/components/TestimonialSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50">
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Welcome Message and Service Times */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Welcome to Wonders of God Church</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
              "For where two or three gather in my name, there am I with them." — Matthew 18:20
            </p>
          </div>
          
          <ServiceTimes />
          
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Calendar className="mr-2 h-5 w-5" />
              Plan Your Visit
            </Button>
            <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              <Play className="mr-2 h-5 w-5" />
              Watch Live
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Sermon */}
      <FeaturedSermon />

      {/* Upcoming Events */}
      <UpcomingEvents />

      {/* Mission Statement */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            "To transform lives through the power of God's Word, cultivate a loving community of believers, 
            and spread the Gospel in Embu County and beyond. We are committed to creating a welcoming family 
            where everyone can experience God's love, grow in faith, and discover their purpose in His kingdom."
          </p>
        </div>
      </section>

      {/* Ministries Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Ministries</h2>
            <p className="text-xl text-gray-600">Serving our community through various ministries</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <CardTitle className="text-xl text-gray-800">Youth Ministry</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Empowering young people to grow in faith and leadership through fellowship, bible study, and fun activities.
                </CardDescription>
                <Button variant="link" className="w-full mt-4">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <CardTitle className="text-xl text-gray-800">Women's Fellowship</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Creating a supportive community for women to grow spiritually, build relationships, and serve others.
                </CardDescription>
                <Button variant="link" className="w-full mt-4">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <Church className="h-12 w-12 text-amber-500 mx-auto mb-4" />
                <CardTitle className="text-xl text-gray-800">Community Outreach</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Extending God's love to those in need through practical service and compassionate support throughout Embu County.
                </CardDescription>
                <Button variant="link" className="w-full mt-4">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/ministries">
              <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Explore All Ministries
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* Online Giving */}
      <section id="giving" className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Support Our Ministry</h2>
          <p className="text-xl mb-8 opacity-90">
            Your generous giving helps us continue our mission of spreading God's love and serving our community in Embu County.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/give">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                <DollarSign className="mr-2 h-5 w-5" />
                Give Online
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Learn About Tithing
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">We'd love to hear from you and answer any questions</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <MapPin className="h-10 w-10 text-blue-600 mx-auto mb-2" />
                <CardTitle>Visit Us</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                <p>Wonders of God Church</p>
                <p>Main Street, Embu Town</p>
                <p>Embu County, Kenya</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Clock className="h-10 w-10 text-blue-600 mx-auto mb-2" />
                <CardTitle>Service Times</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                <p>Sunday: 8:00 AM & 10:30 AM</p>
                <p>Wednesday Bible Study: 6:30 PM</p>
                <p>Friday Prayer: 7:00 PM</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Phone className="h-10 w-10 text-blue-600 mx-auto mb-2" />
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                <p>Phone: +254 123 456 789</p>
                <p>Email: info@wondersofgod.org</p>
                <p>Office Hours: Mon-Fri, 9AM-5PM</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link to="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Church className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">Wonders of God Church</span>
              </div>
              <p className="text-gray-300">
                A vibrant faith community in Embu County, Kenya, serving God and our neighbors with joy.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
                <li><Link to="/sermons" className="hover:text-blue-400 transition-colors">Sermons</Link></li>
                <li><Link to="/events" className="hover:text-blue-400 transition-colors">Events</Link></li>
                <li><Link to="/give" className="hover:text-blue-400 transition-colors">Online Giving</Link></li>
                <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <p className="text-gray-300 mb-2">Main Street, Embu Town, Embu County, Kenya</p>
              <p className="text-gray-300 mb-2">+254 123 456 789</p>
              <p className="text-gray-300">info@wondersofgod.org</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-300 hover:text-blue-400">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-blue-400">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-blue-400">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.045-1.064.218-1.504.344-1.857.182-.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-blue-400">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Wonders of God Church. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
