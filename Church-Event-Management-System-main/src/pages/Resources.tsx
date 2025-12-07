import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Book, Download, FileText, ExternalLink, Search, Globe, Calendar, BookOpen } from 'lucide-react';
import { Input } from '@/components/ui/input';
import Navigation from '@/components/Navigation';

const Resources = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50">
      <Navigation />
      
      {/* Header */}
      <div className="bg-blue-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Resources</h1>
          <p className="text-xl max-w-3xl mx-auto">Tools to help you grow in your faith and walk with Christ</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white py-8 px-4 shadow-md">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input 
              type="text"
              placeholder="Search resources by title, author, or topic..."
              className="pl-10"
            />
          </div>
        </div>
      </div>

      {/* Bible Study Resources */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Bible Study Resources</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <Book className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Daily Devotionals</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Start your day with our daily devotionals that include Scripture readings, reflections, and prayers 
                  to help you connect with God.
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  View Devotionals
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-2 rounded-lg mr-4">
                    <BookOpen className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Bible Reading Plans</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Follow structured reading plans that guide you through books of the Bible or specific themes 
                  with accompanying questions for reflection.
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Browse Reading Plans
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 p-2 rounded-lg mr-4">
                    <FileText className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Study Guides</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  In-depth study materials on various biblical topics, books, and characters to deepen your 
                  understanding of Scripture.
                </p>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Download Study Guides
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Resource */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Featured Resource</h2>
          
          <div className="bg-blue-50 rounded-lg overflow-hidden shadow-lg">
            <div className="md:flex">
              <div className="md:w-1/3 p-8 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c" 
                  alt="Book Cover" 
                  className="w-48 shadow-xl rounded-lg"
                />
              </div>
              <div className="md:w-2/3 p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Foundations of Faith</h3>
                <p className="text-blue-600 mb-4">By Pastor James Mwangi</p>
                <p className="text-gray-600 mb-6">
                  This comprehensive guide explores the foundational principles of Christian faith and practice. 
                  Perfect for new believers or those looking to strengthen their spiritual foundations, this resource 
                  covers essential topics like prayer, Bible study, fellowship, and sharing your faith.
                </p>
                <div className="space-y-4">
                  <div className="bg-white p-3 rounded-md flex items-center">
                    <Download className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">PDF Version (2.4 MB)</span>
                    <Button variant="outline" className="ml-auto">Download</Button>
                  </div>
                  <div className="bg-white p-3 rounded-md flex items-center">
                    <FileText className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Study Guide (1.8 MB)</span>
                    <Button variant="outline" className="ml-auto">Download</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Downloadable Materials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Downloadable Materials</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Sermon Notes</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Walking in Divine Favor</span>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-1" />
                    PDF
                  </Button>
                </div>
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Overcoming Life's Challenges</span>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-1" />
                    PDF
                  </Button>
                </div>
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">The Power of Prayer</span>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-1" />
                    PDF
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Building Strong Families</span>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-1" />
                    PDF
                  </Button>
                </div>
              </div>
              <div className="mt-6">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  View All Sermon Notes
                </Button>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Bible Study Materials</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <div className="flex items-center">
                    <Book className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Book of John Study Guide</span>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-1" />
                    PDF
                  </Button>
                </div>
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <div className="flex items-center">
                    <Book className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Psalms Devotional Guide</span>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-1" />
                    PDF
                  </Button>
                </div>
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <div className="flex items-center">
                    <Book className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">New Believers Course</span>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-1" />
                    PDF
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Book className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Prayer Journal Template</span>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-1" />
                    PDF
                  </Button>
                </div>
              </div>
              <div className="mt-6">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  View All Study Materials
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Resources */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Recommended External Resources</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Globe className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-800">Bible Study Websites</h3>
              </div>
              <ul className="space-y-3">
                <li>
                  <a href="https://www.biblegateway.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Bible Gateway
                  </a>
                </li>
                <li>
                  <a href="https://www.blueletterbible.org" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Blue Letter Bible
                  </a>
                </li>
                <li>
                  <a href="https://www.biblestudytools.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Bible Study Tools
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Calendar className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-800">Bible Reading Apps</h3>
              </div>
              <ul className="space-y-3">
                <li>
                  <a href="https://www.youversion.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    YouVersion Bible App
                  </a>
                </li>
                <li>
                  <a href="https://www.bible.com/reading-plans" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Bible.com Reading Plans
                  </a>
                </li>
                <li>
                  <a href="https://readingplans.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Daily Scripture Reading
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <BookOpen className="h-6 w-6 text-amber-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-800">Recommended Books</h3>
              </div>
              <ul className="space-y-3">
                <li className="text-gray-700">
                  <strong>Purpose Driven Life</strong> by Rick Warren
                </li>
                <li className="text-gray-700">
                  <strong>Mere Christianity</strong> by C.S. Lewis
                </li>
                <li className="text-gray-700">
                  <strong>My Utmost for His Highest</strong> by Oswald Chambers
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Sign Up for Weekly Resources</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join our mailing list to receive weekly devotionals, Bible reading plans, and other spiritual growth resources directly in your inbox.
          </p>
          <div className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input 
                type="email"
                placeholder="Your email address"
                className="bg-white text-gray-800"
              />
              <Button className="bg-amber-500 hover:bg-amber-600 text-white sm:w-auto">
                Subscribe
              </Button>
            </div>
            <p className="text-xs mt-4 opacity-80">
              We respect your privacy and will never share your email address. You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
