
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Church, Heart, Users } from 'lucide-react';
import Navigation from '@/components/Navigation';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50">
      <Navigation />
      
      {/* Header */}
      <div className="bg-blue-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Wonders of God Church</h1>
          <p className="text-xl max-w-3xl mx-auto">A community of believers united by faith and dedicated to sharing God's love in Embu County and beyond.</p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Wonders of God Church was founded in 1998 by Bishop Wilson Muchangi with just 20 dedicated members. 
                What began as a small prayer group meeting in a school classroom has grown into a vibrant 
                community of over 500 believers.
              </p>
              <p className="text-gray-600 mb-4">
                Through faith, perseverance, and God's grace, we were able to build our current sanctuary 
                in 2010, creating a permanent home for our congregation in Embu County. Over the years, 
                our ministry has expanded to include youth programs, community outreach, and mission work.
              </p>
              <p className="text-gray-600">
                Today, Wonders of God Church continues to grow as we remain committed to our founding vision: 
                bringing people into a life-changing relationship with Jesus Christ and making a positive 
                impact in our community.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1606314634642-c1e57170e35e" 
                alt="Church Building" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl leading-relaxed">
                To transform lives through the power of God's Word, cultivate a loving community 
                of believers, and spread the Gospel in Embu County and beyond.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-xl leading-relaxed">
                To be a beacon of hope and transformation, where people from all walks of life 
                can experience God's love, discover their purpose, and be equipped to make 
                a difference in their world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do as a church family
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-t-blue-600">
              <CardContent className="pt-6">
                <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Church className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Biblical Teaching</h3>
                <p className="text-gray-600">
                  We are committed to the authority of Scripture and teaching God's Word 
                  in a way that is relevant and applicable to daily life.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-red-600">
              <CardContent className="pt-6">
                <div className="bg-red-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Loving Community</h3>
                <p className="text-gray-600">
                  We value authentic relationships, caring for one another, and creating 
                  a welcoming environment for everyone.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-amber-600">
              <CardContent className="pt-6">
                <div className="bg-amber-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Serving Others</h3>
                <p className="text-gray-600">
                  We are dedicated to serving those in need both within our church 
                  and throughout our community with compassion and generosity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated individuals who guide our church
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-80 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296" 
                  alt="Bishop Wilson Muchangi" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Bishop Wilson Muchangi</h3>
                <p className="text-blue-600 mb-4">Senior Pastor</p>
                <p className="text-gray-600">
                  Bishop Wilson has led our congregation for over 20 years with wisdom, 
                  compassion, and an unwavering commitment to God's Word.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-80 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1601931935821-5fbe71157695" 
                  alt="Minister Faith Njoki" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Minister Faith Njoki</h3>
                <p className="text-blue-600 mb-4">Worship Pastor</p>
                <p className="text-gray-600">
                  Minister Faith oversees our worship ministry, creating meaningful 
                  experiences that help people connect with God through music and praise.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-80 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573497161161-c3e73707e25c" 
                  alt="Elder John Kiarie" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Elder John Kiarie</h3>
                <p className="text-blue-600 mb-4">Outreach Coordinator</p>
                <p className="text-gray-600">
                  Elder John leads our community service initiatives, organizing programs 
                  that meet the practical needs of people throughout Embu County.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statement of Faith */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Statement of Faith</h2>
            <p className="text-xl text-gray-600">The core beliefs that unite us</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-800">The Bible</h3>
                <p className="text-gray-600">We believe the Bible is the inspired, infallible Word of God and our ultimate authority for faith and practice.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">God</h3>
                <p className="text-gray-600">We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">Jesus Christ</h3>
                <p className="text-gray-600">We believe in the deity of Jesus Christ, His virgin birth, sinless life, miracles, atoning death, bodily resurrection, and future return in power and glory.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">Salvation</h3>
                <p className="text-gray-600">We believe salvation is a gift of God received through faith in Jesus Christ, whose blood was shed for the forgiveness of sins.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">The Holy Spirit</h3>
                <p className="text-gray-600">We believe in the present ministry of the Holy Spirit, who indwells Christians and empowers them to live a godly life.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">The Church</h3>
                <p className="text-gray-600">We believe the Church is the body of Christ, composed of all who have placed their faith in Jesus Christ.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">Eternity</h3>
                <p className="text-gray-600">We believe in the resurrection of both the saved and the lost; the saved to eternal life with Christ, and the lost to eternal separation from God.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
