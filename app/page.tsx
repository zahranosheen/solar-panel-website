import Navigation from '@/components/navigation';
import Testimonials from '@/components/testimonials';
import Newsletter from '@/components/newsletter';
import FAQ from '@/components/faq';
import BackToTop from '@/components/back-to-top';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const stats = [
    { label: 'Happy Customers', value: '5,000+' },
    { label: 'Projects Completed', value: '3,200+' },
    { label: 'Years Experience', value: '15+' },
    { label: 'Energy Saved (MWh)', value: '45,000+' },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1509391366360-2e938d440220?w=1600&h=900&fit=crop"
            alt="Solar panels on roof"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Power Your Future with Clean Solar Energy
              </h1>
              <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-xl leading-relaxed">
                Transform your home or business with cutting-edge solar technology. Reduce energy costs, increase property value, and protect the environment.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity duration-200 text-center"
                >
                  Get Free Quote
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-3 bg-white/20 text-white font-semibold rounded-lg hover:bg-white/30 transition-colors duration-200 text-center border border-white/30"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose SolarPro?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive solar solutions backed by expertise, quality products, and exceptional customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '⚡',
                title: 'Advanced Technology',
                description: 'Latest solar panel technology with maximum efficiency and durability.',
              },
              {
                icon: '💰',
                title: 'Cost Savings',
                description: 'Reduce your energy bills by up to 80% with our proven solutions.',
              },
              {
                icon: '🌍',
                title: 'Environmental Impact',
                description: 'Make a difference by switching to clean, renewable energy sources.',
              },
              {
                icon: '🔧',
                title: 'Expert Installation',
                description: 'Professional team with over 15 years of combined experience.',
              },
              {
                icon: '📞',
                title: '24/7 Support',
                description: 'Dedicated customer support available round the clock for assistance.',
              },
              {
                icon: '✓',
                title: 'Warranty Guarantee',
                description: '25-year manufacturer warranty on all solar panels and systems.',
              },
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* Newsletter Section */}
      <Newsletter />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Go Solar?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Get a free quote today and discover how much you can save with solar energy.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:opacity-90 transition-opacity duration-200"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4">SolarPro</h3>
              <p className="text-gray-400">Leading provider of premium solar solutions for homes and businesses.</p>
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

      <BackToTop />
    </main>
  );
}
