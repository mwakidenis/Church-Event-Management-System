
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { DollarSign, CreditCard, Smartphone, Heart, Users, Building, Globe } from 'lucide-react';
import { Input } from '@/components/ui/input';
import Navigation from '@/components/Navigation';

const Give = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50">
      <Navigation />
      
      {/* Header */}
      <div className="bg-blue-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Give & Support</h1>
          <p className="text-xl max-w-3xl mx-auto">Your generous giving helps us continue our mission of spreading God's love and serving our community</p>
        </div>
      </div>

      {/* Quick Give */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Give Online</h2>
          
          <div className="bg-blue-50 p-8 rounded-lg shadow-lg">
            <form className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <Button 
                  type="button" 
                  variant="outline" 
                  className="h-16 text-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  $25
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  className="h-16 text-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  $50
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  className="h-16 text-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  $100
                </Button>
              </div>
              
              <div>
                <label htmlFor="customAmount" className="block text-sm font-medium text-gray-700 mb-2">
                  Custom Amount
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input 
                    id="customAmount"
                    type="number" 
                    placeholder="Enter amount"
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="frequency" className="block text-sm font-medium text-gray-700 mb-2">
                  Frequency
                </label>
                <select 
                  id="frequency"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                >
                  <option value="one-time">One-time Gift</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="quarterly">Quarterly</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="designation" className="block text-sm font-medium text-gray-700 mb-2">
                  Designation
                </label>
                <select 
                  id="designation"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                >
                  <option value="general">General Fund</option>
                  <option value="tithe">Tithe</option>
                  <option value="missions">Missions</option>
                  <option value="building">Building Fund</option>
                  <option value="youth">Youth Ministry</option>
                  <option value="outreach">Community Outreach</option>
                </select>
              </div>
              
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg">
                <CreditCard className="mr-2 h-5 w-5" />
                Continue to Payment
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Ways to Give */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Ways to Give</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Online Giving</h3>
                <p className="text-gray-600 mb-6">
                  Give securely online using your credit card, debit card, or bank transfer. 
                  Set up one-time or recurring donations.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700">Give Online</Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Mobile Giving</h3>
                <p className="text-gray-600 mb-6">
                  Text to give or use our mobile app for quick and convenient giving 
                  from your smartphone or tablet.
                </p>
                <Button className="bg-green-600 hover:bg-green-700">Download App</Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-amber-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">In-Person Giving</h3>
                <p className="text-gray-600 mb-6">
                  Give during worship services using offering envelopes, or visit 
                  our church office during business hours.
                </p>
                <Button className="bg-amber-600 hover:bg-amber-700">Service Times</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Your Impact</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Worship & Teaching</h3>
              <p className="text-gray-600">
                Supporting inspiring worship services and biblical teaching that transforms lives.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Community Outreach</h3>
              <p className="text-gray-600">
                Feeding the hungry, caring for the sick, and serving those in need in Embu County.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Building className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Facility & Operations</h3>
              <p className="text-gray-600">
                Maintaining our church building and facilities to provide a welcoming space for all.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Globe className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Missions</h3>
              <p className="text-gray-600">
                Supporting missionaries and evangelism efforts locally and around the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Biblical Foundation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Biblical Foundation for Giving</h2>
          <blockquote className="text-xl mb-6 italic">
            "Each of you should give what you have decided in your heart to give, not reluctantly 
            or under compulsion, for God loves a cheerful giver."
          </blockquote>
          <p className="text-lg opacity-90">— 2 Corinthians 9:7</p>
          
          <div className="mt-12 bg-white/10 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Why We Give</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-2">Worship & Gratitude</h4>
                <p className="opacity-90">
                  Giving is an act of worship that expresses our gratitude to God for His countless blessings.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Trust & Faith</h4>
                <p className="opacity-90">
                  When we give, we demonstrate our trust in God's provision and faithfulness in our lives.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Kingdom Impact</h4>
                <p className="opacity-90">
                  Our gifts enable the church to fulfill its mission and make a lasting impact for God's kingdom.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Spiritual Growth</h4>
                <p className="opacity-90">
                  Generous giving helps us grow spiritually and aligns our hearts with God's priorities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Is online giving secure?</h3>
              <p className="text-gray-600">
                Yes, we use industry-leading security measures and encryption to protect your personal 
                and financial information. All transactions are processed through secure, PCI-compliant payment systems.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Can I get a receipt for tax purposes?</h3>
              <p className="text-gray-600">
                Absolutely! You'll receive an email receipt immediately after your donation, and we'll provide 
                annual giving statements for tax purposes by January 31st each year.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Can I cancel or modify recurring donations?</h3>
              <p className="text-gray-600">
                Yes, you can easily modify or cancel recurring donations at any time by contacting our church office 
                or using your online giving account dashboard.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-800 mb-2">What if I have questions about giving?</h3>
              <p className="text-gray-600">
                Our pastoral team is always available to discuss questions about giving, tithing, or financial stewardship. 
                Feel free to contact us at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Giving */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Need Help with Giving?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Our team is here to assist you with any questions about giving or financial stewardship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Contact Church Office
            </Button>
            <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              Schedule Meeting with Pastor
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Give;
