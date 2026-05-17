import Navigation from '@/components/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Sunny Heights Residential Complex',
      location: 'Los Angeles, CA',
      image: 'https://images.unsplash.com/photo-1509391366360-2e938d440220?w=600&h=400&fit=crop',
      description: 'Installation of 150 solar panels for a 50-unit residential complex.',
      capacity: '50 kW',
    },
    {
      id: 2,
      title: 'Downtown Business District',
      location: 'San Francisco, CA',
      image: 'https://images.unsplash.com/photo-1545221227-be67f85ba50e?w=600&h=400&fit=crop',
      description: 'Commercial solar array for a multi-building business complex.',
      capacity: '250 kW',
    },
    {
      id: 3,
      title: 'Industrial Manufacturing Hub',
      location: 'Houston, TX',
      image: 'https://images.unsplash.com/photo-1486784185308-c8b6d59ef5d7?w=600&h=400&fit=crop',
      description: 'Large-scale industrial solar system with battery storage.',
      capacity: '500 kW',
    },
    {
      id: 4,
      title: 'Eco-Friendly School Campus',
      location: 'Seattle, WA',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f70504504?w=600&h=400&fit=crop',
      description: 'Educational institution solar installation with monitoring system.',
      capacity: '100 kW',
    },
    {
      id: 5,
      title: 'Green Warehouse Project',
      location: 'Denver, CO',
      image: 'https://images.unsplash.com/photo-1578359381514-4b164246ba95?w=600&h=400&fit=crop',
      description: 'Warehouse rooftop solar system with smart energy management.',
      capacity: '320 kW',
    },
    {
      id: 6,
      title: 'Suburban Community Project',
      location: 'Phoenix, AZ',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      description: 'Community-wide residential solar program for 30 homes.',
      capacity: '75 kW',
    },
    {
      id: 7,
      title: 'Tech Campus Innovation Hub',
      location: 'Austin, TX',
      image: 'https://images.unsplash.com/photo-1509391366360-2e938d440220?w=600&h=400&fit=crop',
      description: 'Tech company headquarters solar installation with EV charging.',
      capacity: '400 kW',
    },
    {
      id: 8,
      title: 'Rural Farm Energy Solution',
      location: 'Iowa',
      image: 'https://images.unsplash.com/photo-1517420879713-6d4944e880c7?w=600&h=400&fit=crop',
      description: 'Agricultural facility solar system powering farm operations.',
      capacity: '60 kW',
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Page Header */}
      <section className="relative w-full h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1542774328-91a83f89b127?w=1600&h=900&fit=crop"
          alt="Solar projects"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Our Projects</h1>
            <p className="text-xl text-gray-100 mt-4 max-w-2xl">
              Showcase of completed solar installations across residential, commercial, and industrial sectors
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-gray-200">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-sm text-primary font-semibold mb-3 flex items-center">
                    📍 {project.location}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>

                  {/* Capacity Badge */}
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                    Capacity: {project.capacity}
                  </div>

                  <Link
                    href="/contact"
                    className="inline-block px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity duration-200"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">8+</div>
              <p className="text-white/80">Active Projects</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2,155</div>
              <p className="text-white/80">Total Capacity (kW)</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">$12M+</div>
              <p className="text-white/80">Total Investment</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">8,000+</div>
              <p className="text-white/80">Homes Powered</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Your Project Could Be Next</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their energy with SolarPro.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity duration-200"
          >
            Start Your Project Today
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
