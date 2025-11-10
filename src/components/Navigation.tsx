import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from '../router';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { navigate, currentPath } = useRouter();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/catering', label: 'Catering' },
    { path: '/order', label: 'Order' },
    { path: '/contact', label: 'Contact' },
  ];

  const handleNavigate = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button
            onClick={() => handleNavigate('/')}
            className="text-2xl sm:text-3xl font-bold text-pink-400 hover:text-pink-500 transition-colors"
            style={{ fontFamily: 'Fredoka, sans-serif' }}
          >
            Scoops & Sips
          </button>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavigate(link.path)}
                className={`text-lg transition-colors ${
                  currentPath === link.path
                    ? 'text-pink-500 font-semibold'
                    : 'text-gray-700 hover:text-pink-400'
                }`}
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {link.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-pink-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavigate(link.path)}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  currentPath === link.path
                    ? 'bg-pink-100 text-pink-600 font-semibold'
                    : 'text-gray-700 hover:bg-pink-50'
                }`}
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
