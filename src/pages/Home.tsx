import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, IceCream, Coffee, Cake } from 'lucide-react';
import { useRouter } from '../router';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { navigate } = useRouter();

  const slides = [
    {
      title: 'Handcrafted Desserts',
      subtitle: 'Made with love and the finest ingredients',
      gradient: 'from-pink-300 to-rose-300',
      icon: IceCream,
    },
    {
      title: 'Artisan Beverages',
      subtitle: 'Perfectly paired with every sweet moment',
      gradient: 'from-rose-300 to-pink-400',
      icon: Coffee,
    },
    {
      title: 'Custom Cakes',
      subtitle: 'Making your celebrations unforgettable',
      gradient: 'from-pink-400 to-rose-400',
      icon: Cake,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[70vh] overflow-hidden">
        {slides.map((slide, index) => {
          const Icon = slide.icon;
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className={`h-full bg-gradient-to-br ${slide.gradient} flex items-center justify-center`}>
                <div className="text-center text-white px-4">
                  <Icon size={80} className="mx-auto mb-6 opacity-90" />
                  <h1
                    className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4"
                    style={{ fontFamily: 'Fredoka, sans-serif' }}
                  >
                    {slide.title}
                  </h1>
                  <p
                    className="text-xl sm:text-2xl opacity-90"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </div>
          );
        })}

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} className="text-pink-500" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all"
          aria-label="Next slide"
        >
          <ChevronRight size={24} className="text-pink-500" />
        </button>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4"
            style={{ fontFamily: 'Fredoka, sans-serif' }}
          >
            Welcome to Scoops & Sips
          </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Where every bite is a moment of pure joy. We craft exquisite desserts and beverages
            that transform ordinary moments into extraordinary memories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
              <IceCream size={32} className="text-pink-500" />
            </div>
            <h3
              className="text-2xl font-bold text-gray-800 mb-3 text-center"
              style={{ fontFamily: 'Fredoka, sans-serif' }}
            >
              Premium Ice Cream
            </h3>
            <p
              className="text-gray-600 text-center"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Handcrafted scoops made daily with organic ingredients and creative flavors.
            </p>
          </div>

          <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Coffee size={32} className="text-pink-500" />
            </div>
            <h3
              className="text-2xl font-bold text-gray-800 mb-3 text-center"
              style={{ fontFamily: 'Fredoka, sans-serif' }}
            >
              Artisan Drinks
            </h3>
            <p
              className="text-gray-600 text-center"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              From specialty coffees to refreshing smoothies, perfectly crafted for you.
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Cake size={32} className="text-pink-500" />
            </div>
            <h3
              className="text-2xl font-bold text-gray-800 mb-3 text-center"
              style={{ fontFamily: 'Fredoka, sans-serif' }}
            >
              Custom Creations
            </h3>
            <p
              className="text-gray-600 text-center"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Bespoke cakes and desserts tailored to make your special occasions memorable.
            </p>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate('/order')}
            className="bg-gradient-to-r from-pink-400 to-rose-400 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-pink-500 hover:to-rose-500 transform hover:scale-105 transition-all shadow-lg"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}
