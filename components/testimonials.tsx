import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'James Mitchell',
      role: 'Homeowner, Los Angeles',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      text: 'SolarPro transformed our home! Our energy bills dropped by 75% and the installation team was incredibly professional. Highly recommend!',
      rating: 5,
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'Business Owner, San Francisco',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      text: 'The ROI on our commercial solar system has been fantastic. SolarPro handled everything from design to installation with expertise.',
      rating: 5,
    },
    {
      id: 3,
      name: 'David Chen',
      role: 'Factory Manager, Houston',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      text: 'Our industrial facility is now fully powered by solar. The support team continues to be amazing even after installation.',
      rating: 5,
    },
    {
      id: 4,
      name: 'Emily Rodriguez',
      role: 'Homeowner, Phoenix',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      text: 'Best decision we made for our home. The free consultation was invaluable and the warranty gives us peace of mind.',
      rating: 5,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">What Our Customers Say</h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Join thousands of satisfied customers who have switched to solar energy
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">
                    ★
                  </span>
                ))}
              </div>

              {/* Testimonial */}
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
