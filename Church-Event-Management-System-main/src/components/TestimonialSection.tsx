
import React from 'react';

const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Wonders of God Church has transformed my life. The teaching is profound and the community is so welcoming. My family and I have found a true spiritual home here.",
      name: "Sarah Mwangi",
      role: "Member since 2018"
    },
    {
      id: 2,
      quote: "The youth ministry has helped my children grow spiritually and develop strong values. The leaders are dedicated mentors who truly care about each young person.",
      name: "John Kamau",
      role: "Parent & Church Elder"
    },
    {
      id: 3,
      quote: "I came as a visitor and stayed because of the genuine love I felt. The practical teaching and outreach programs are making a real difference in our community.",
      name: "Grace Njeri",
      role: "New Member"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Testimonials</h2>
          <p className="text-xl text-gray-600">Hear from our church family</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-md">
              <svg className="h-8 w-8 text-blue-500 mb-4" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8c-3.314 0-6 2.686-6 6s2.686 6 6 6c0 0 0.011 0.011 0.011 0v0c0 0 0.011-0.011 0.011-0.011 4.419 0 8-3.581 8-8 0-2.209-1.791-4-4-4v0zM26 8c-3.314 0-6 2.686-6 6s2.686 6 6 6c0 0 0.011 0.011 0.011 0v0c0 0 0.011-0.011 0.011-0.011 4.419 0 8-3.581 8-8 0-2.209-1.791-4-4-4v0z"></path>
              </svg>
              <p className="text-gray-600 italic mb-6">{testimonial.quote}</p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-gray-800">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
