import Navigation from '@/components/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  const teamMembers = [
    {
      id: 1,
      name: 'John Richardson',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      bio: 'Solar industry veteran with 20+ years of experience leading renewable energy initiatives.',
    },
    {
      id: 2,
      name: 'Sarah Chen',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      bio: 'Expert in solar system design and optimization with multiple patents to her name.',
    },
    {
      id: 3,
      name: 'Michael Torres',
      role: 'Director of Operations',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      bio: 'Operations specialist ensuring quality installations and customer satisfaction across all projects.',
    },
    {
      id: 4,
      name: 'Emma Wilson',
      role: 'Head of Customer Success',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      bio: 'Dedicated to providing exceptional support and ensuring long-term customer relationships.',
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Page Header */}
      <section className="relative w-full h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=900&fit=crop"
          alt="About SolarPro"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="text-4xl md:text-5xl font-bold text-white">About SolarPro</h1>
            <p className="text-xl text-gray-100 mt-4 max-w-2xl">
              Leading the renewable energy revolution with innovation and integrity
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Founded in 2008, SolarPro began with a simple mission: to make clean solar energy accessible to everyone. What started as a small team of passionate solar enthusiasts has grown into a leading provider of premium solar solutions.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Over the past 15 years, we&apos;ve helped over 5,000 residential and commercial customers reduce their energy costs and environmental impact. Our commitment to quality, innovation, and customer satisfaction has made us the trusted choice for solar energy in the region.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe in a sustainable future powered by renewable energy. Every solar installation we complete is a step toward that goal.
              </p>
            </div>
            <div className="relative h-96">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=500&fit=crop"
                alt="Company office"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-primary to-accent p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg leading-relaxed">
                To provide affordable, high-quality solar energy solutions that empower individuals and businesses to take control of their energy future while protecting the environment for generations to come.
              </p>
            </div>
            <div className="bg-gradient-to-br from-secondary to-primary p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg leading-relaxed">
                A world powered by clean, renewable solar energy where every home and business has the opportunity to be energy independent and sustainable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Integrity',
                description: 'We conduct business with honesty and transparency, building trust with every customer.',
                icon: '✓',
              },
              {
                title: 'Innovation',
                description: 'We stay at the forefront of solar technology, constantly improving our solutions.',
                icon: '💡',
              },
              {
                title: 'Sustainability',
                description: 'Environmental responsibility guides every decision we make and every project we undertake.',
                icon: '🌍',
              },
              {
                title: 'Excellence',
                description: 'We maintain the highest standards in quality, installation, and customer service.',
                icon: '⭐',
              },
              {
                title: 'Community',
                description: 'We actively support local communities and contribute to their sustainable development.',
                icon: '👥',
              },
              {
                title: 'Reliability',
                description: 'Our systems are built to last, and our support is always there when needed.',
                icon: '🔧',
              },
            ].map((value, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">Our Leadership Team</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Experienced professionals dedicated to delivering exceptional solar solutions
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="text-center">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Why Choose SolarPro?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: '15+ Years Experience', desc: 'Proven track record in solar installations' },
              { title: '5,000+ Happy Customers', desc: 'Trust and satisfaction from our client base' },
              { title: 'Expert Team', desc: 'Certified professionals with deep industry knowledge' },
              { title: '25-Year Warranty', desc: 'Comprehensive coverage on all solar panels' },
              { title: 'Competitive Pricing', desc: 'Best value without compromising quality' },
              { title: '24/7 Support', desc: 'Always available when you need us' },
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white text-xl font-bold">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="text-gray-600 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Join Our Solar Revolution</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Become part of a growing community of homeowners and businesses saving money while protecting the planet.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:opacity-90 transition-opacity duration-200"
          >
            Get Started Today
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4">SolarPro</h3>
              <p className="text-gray-400">Leading provider of premium solar solutions.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
                <li><Link href="/projects" className="hover:text-white transition">Projects</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition">About</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-400 mb-2">📧 info@solarpro.com</p>
              <p className="text-gray-400">📞 1-800-SOLAR-PRO</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SolarPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
