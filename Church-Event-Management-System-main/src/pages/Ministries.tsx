
import React from 'react';
import { Button } from '@/components/ui/button';
import { Users, Heart, Church, Book, Music, Baby, Globe, Landmark, Calendar } from 'lucide-react';
import Navigation from '@/components/Navigation';

const Ministries = () => {
  const ministries = [
    {
      id: 1,
      title: "Youth Ministry",
      subtitle: "Growing in faith together",
      description: "Our youth ministry provides a safe and supportive environment where young people can grow spiritually, build meaningful relationships, and discover their God-given purpose. Through weekly gatherings, Bible studies, retreats, and service opportunities, we empower the next generation of leaders.",
      icon: Users,
      color: "blue",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac"
    },
    {
      id: 2,
      title: "Women's Fellowship",
      subtitle: "Supporting and uplifting each other",
      description: "The Women's Fellowship is dedicated to encouraging and equipping women of all ages and stages of life to grow in their relationship with God and with one another. Through Bible study, prayer, mentorship, and social gatherings, we create space for authentic connection and spiritual growth.",
      icon: Heart,
      color: "pink",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac"
    },
    {
      id: 3,
      title: "Men's Fellowship",
      subtitle: "Building men of integrity",
      description: "Our Men's Fellowship focuses on developing godly men who lead with integrity and purpose. Through regular meetings, accountability partnerships, and service projects, we challenge and support one another to live out our faith in all areas of life.",
      icon: Landmark,
      color: "amber",
      image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a"
    },
    {
      id: 4,
      title: "Children's Ministry",
      subtitle: "Nurturing young faith",
      description: "Our Children's Ministry creates fun, engaging, and age-appropriate environments where children can learn about God's love. Through interactive lessons, music, crafts, and games, we lay a foundation of faith that will last a lifetime.",
      icon: Baby,
      color: "green",
      image: "https://images.unsplash.com/photo-1536337005238-94b997371b40"
    },
    {
      id: 5,
      title: "Worship Ministry",
      subtitle: "Lifting hearts in praise",
      description: "The Worship Ministry leads our congregation in experiencing God's presence through music and creative arts. Whether through traditional hymns or contemporary worship songs, our team is committed to facilitating authentic worship that honors God.",
      icon: Music,
      color: "purple",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7"
    },
    {
      id: 6,
      title: "Bible Study Groups",
      subtitle: "Growing deeper together",
      description: "Our small group Bible studies provide opportunities for deeper study of God's Word, meaningful discussion, and personal application. Meeting in homes throughout the week, these groups foster community and spiritual growth in a more intimate setting.",
      icon: Book,
      color: "indigo",
      image: "https://images.unsplash.com/photo-1560439514-4e9645039924"
    },
    {
      id: 7,
      title: "Community Outreach",
      subtitle: "Serving our neighbors with love",
      description: "Our Community Outreach ministry extends God's love beyond our church walls through practical service, meeting physical needs, and building relationships. From food distribution to medical clinics to educational support, we demonstrate Christ's compassion in tangible ways.",
      icon: Church,
      color: "orange",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433"
    },
    {
      id: 8,
      title: "Missions & Evangelism",
      subtitle: "Sharing the gospel locally and globally",
      description: "The Missions and Evangelism ministry equips our members to share their faith with confidence and supports missionary efforts throughout Kenya and beyond. Through training, local outreach events, and international partnerships, we participate in fulfilling the Great Commission.",
      icon: Globe,
      color: "teal",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
    }
  ];

  // Helper function to get the background color based on the ministry's color
  const getBgColor = (color) => {
    const colorMap = {
      blue: "bg-blue-100",
      pink: "bg-pink-100",
      amber: "bg-amber-100",
      green: "bg-green-100",
      purple: "bg-purple-100",
      indigo: "bg-indigo-100",
      orange: "bg-orange-100",
      teal: "bg-teal-100"
    };
    return colorMap[color] || "bg-gray-100";
  };

  // Helper function to get the text color based on the ministry's color
  const getTextColor = (color) => {
    const colorMap = {
      blue: "text-blue-600",
      pink: "text-pink-600",
      amber: "text-amber-600",
      green: "text-green-600",
      purple: "text-purple-600",
      indigo: "text-indigo-600",
      orange: "text-orange-600",
      teal: "text-teal-600"
    };
    return colorMap[color] || "text-gray-600";
  };

  // Helper function to get the button background color
  const getButtonBg = (color) => {
    const colorMap = {
      blue: "bg-blue-600 hover:bg-blue-700",
      pink: "bg-pink-600 hover:bg-pink-700",
      amber: "bg-amber-600 hover:bg-amber-700",
      green: "bg-green-600 hover:bg-green-700",
      purple: "bg-purple-600 hover:bg-purple-700",
      indigo: "bg-indigo-600 hover:bg-indigo-700",
      orange: "bg-orange-600 hover:bg-orange-700",
      teal: "bg-teal-600 hover:bg-teal-700"
    };
    return colorMap[color] || "bg-gray-600 hover:bg-gray-700";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50">
      <Navigation />
      
      {/* Header */}
      <div className="bg-blue-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Ministries</h1>
          <p className="text-xl max-w-3xl mx-auto">Explore the many ways to connect, serve, and grow at Wonders of God Church</p>
        </div>
      </div>

      {/* Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Ministry Philosophy</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-10">
            At Wonders of God Church, we believe every believer is called to serve using their unique gifts and talents.
            Our various ministries provide opportunities for spiritual growth, meaningful fellowship, and service to others
            as we fulfill our mission of transforming lives through the power of God's Word.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-800">Connect</h3>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Book className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-800">Grow</h3>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Church className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="font-bold text-gray-800">Serve</h3>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-800">Share</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Ministries List */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Explore Our Ministries</h2>
          
          <div className="space-y-16">
            {ministries.map((ministry, index) => (
              <div 
                key={ministry.id}
                className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                  index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                } md:flex`}
              >
                <div className="md:w-2/5">
                  <img 
                    src={ministry.image} 
                    alt={ministry.title} 
                    className="w-full h-full object-cover"
                    style={{ minHeight: "300px" }}
                  />
                </div>
                <div className="md:w-3/5 p-8">
                  <div className={`${getBgColor(ministry.color)} rounded-full w-16 h-16 flex items-center justify-center mb-6`}>
                    <ministry.icon className={`h-8 w-8 ${getTextColor(ministry.color)}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{ministry.title}</h3>
                  <p className={`text-lg ${getTextColor(ministry.color)} mb-4`}>{ministry.subtitle}</p>
                  <p className="text-gray-600 mb-6">
                    {ministry.description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button className={`${getButtonBg(ministry.color)} text-white`}>
                      Get Involved
                    </Button>
                    <Button variant="outline" className={`border-2 ${getTextColor(ministry.color)} hover:bg-gray-50`}>
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Serve?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            God has given each of us unique gifts and talents to use for His glory and the benefit of others.
            Discover where you can make a difference in our church family and community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
              Take Our Spiritual Gifts Assessment
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Meet With a Ministry Leader
            </Button>
          </div>
        </div>
      </section>

      {/* Ministry Calendar */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Ministry Schedule</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Weekly meetings and regular activities for each ministry
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 md:p-8 shadow-md">
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Calendar className="h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-800">Sunday</h3>
                </div>
                <ul className="space-y-2 pl-9">
                  <li className="text-gray-700">
                    <span className="font-medium">8:00 AM - 9:30 AM:</span> First Service
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium">9:45 AM - 10:30 AM:</span> Sunday School (All Ages)
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium">10:30 AM - 12:00 PM:</span> Second Service
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium">4:00 PM - 5:30 PM:</span> Youth Service
                  </li>
                </ul>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Calendar className="h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-800">Wednesday</h3>
                </div>
                <ul className="space-y-2 pl-9">
                  <li className="text-gray-700">
                    <span className="font-medium">6:30 PM - 8:00 PM:</span> Bible Study & Prayer Meeting
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium">6:30 PM - 8:00 PM:</span> Children's Program
                  </li>
                </ul>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Calendar className="h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-800">Friday</h3>
                </div>
                <ul className="space-y-2 pl-9">
                  <li className="text-gray-700">
                    <span className="font-medium">7:00 PM - 9:00 PM:</span> Prayer Night
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium">7:00 PM - 9:00 PM:</span> Youth Fellowship (bi-weekly)
                  </li>
                </ul>
              </div>
              
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Calendar className="h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-800">Saturday</h3>
                </div>
                <ul className="space-y-2 pl-9">
                  <li className="text-gray-700">
                    <span className="font-medium">7:00 AM - 8:30 AM:</span> Men's Fellowship (1st & 3rd Saturday)
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium">9:00 AM - 11:00 AM:</span> Women's Bible Study (2nd & 4th Saturday)
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium">10:00 AM - 1:00 PM:</span> Community Outreach (Last Saturday)
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium">3:00 PM - 5:00 PM:</span> Choir Practice
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Download Complete Schedule
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ministries;
