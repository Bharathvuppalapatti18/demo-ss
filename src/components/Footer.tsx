import { MapPin, Phone, Mail } from 'lucide-react';
import { useRouter } from '../router';

export default function Footer() {
  const { navigate } = useRouter();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/catering', label: 'Catering' },
    { path: '/order', label: 'Order' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-gradient-to-br from-pink-50 to-rose-50 border-t border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3
              className="text-2xl font-bold text-pink-500 mb-4"
              style={{ fontFamily: 'Fredoka, sans-serif' }}
            >
              Scoops & Sips
            </h3>
            <p className="text-gray-700" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Crafting delightful desserts and beverages that bring joy to every moment.
            </p>
          </div>

          <div>
            <h4
              className="text-lg font-semibold text-gray-800 mb-4"
              style={{ fontFamily: 'Fredoka, sans-serif' }}
            >
              Quick Links
            </h4>
            <div className="space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => navigate(link.path)}
                  className="block text-gray-600 hover:text-pink-500 transition-colors"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4
              className="text-lg font-semibold text-gray-800 mb-4"
              style={{ fontFamily: 'Fredoka, sans-serif' }}
            >
              Contact Us
            </h4>
            <div className="space-y-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
              <div className="flex items-start gap-3 text-gray-600">
                <MapPin size={20} className="text-pink-400 mt-1 flex-shrink-0" />
                <span>123 Sweet Street, Dessert City, DC 12345</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Phone size={20} className="text-pink-400 flex-shrink-0" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Mail size={20} className="text-pink-400 flex-shrink-0" />
                <span>hello@scoopsandsips.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-pink-200 text-center">
          <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
            © 2025 Scoops & Sips Desserts. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
