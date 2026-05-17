import Navigation from '@/components/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Residential Solar Installation',
      description: 'Custom solar panel systems for homes. Maximize energy savings while increasing property value.',
      image: 'https://images.unsplash.com/photo-1545221227-be67f85ba50e?w=500&h=400&fit=crop',
      features: ['Custom design', 'Professional installation', '25-year warranty'],
    },
    {
      id: 2,
      title: 'Commercial Solar Solutions',
      description: 'Scalable solar systems designed for businesses to reduce operational costs significantly.',
      image: 'https://images.unsplash.com/photo-1509391366360-2e938d440220?w=500&h=400&fit=crop',
      features: ['High capacity systems', 'ROI analysis', 'Government incentives'],
    },
    {
      id: 3,
      title: 'Industrial Solar Systems',
      description: 'Large-scale solar installations for industrial facilities and manufacturing plants.',
      image: 'https://images.unsplash.com/photo-1486784185308-c8b6d59ef5d7?w=500&h=400&fit=crop',
      features: ['Heavy-duty equipment', 'Rapid deployment', 'Technical support'],
    },
    {
      id: 4,
      title: 'Solar Maintenance',
      description: 'Comprehensive maintenance services to ensure optimal performance of your solar system.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f70504504?w=500&h=400&fit=crop',
      features: ['Regular inspections', 'Cleaning services', 'Repairs & upgrades'],
    },
    {
      id: 5,
      title: 'Battery Storage Solutions',
      description: 'Store your solar energy with advanced battery systems for 24/7 power availability.',
      image: 'https://images.unsplash.com/photo-1578359381514-4b164246ba95?w=500&h=400&fit=crop',
      features: ['Energy backup', 'Peak shaving', 'Grid independence'],
    },
    {
      id: 6,
      title: 'Energy Consultation',
      description: 'Expert consultation to analyze your energy needs and recommend optimal solar solutions.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop',
      features: ['Energy audit', 'Custom recommendations', 'Financial planning'],
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Page Header */}
      <section className="relative w-full h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1517420879713-6d4944e880c7?w=1600&h=900&fit=crop"
          alt="Solar services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Our Services</h1>
            <p className="text-xl text-gray-100 mt-4 max-w-2xl">
              Comprehensive solar solutions tailored to your specific needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="inline-block px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity duration-200"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need a Custom Solution?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Our experts will design a tailored solar system for your unique requirements and budget.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:opacity-90 transition-opacity duration-200"
          >
            Get Free Consultation
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
