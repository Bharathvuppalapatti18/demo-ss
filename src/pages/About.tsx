import { Heart, Award, Users, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-pink-300 to-rose-300 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-5xl sm:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: 'Fredoka, sans-serif' }}
          >
            Our Story
          </h1>
          <p
            className="text-xl text-white/90 max-w-3xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            A passion for sweetness that turned into a beloved destination for dessert lovers
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2
              className="text-4xl font-bold text-gray-800 mb-6"
              style={{ fontFamily: 'Fredoka, sans-serif' }}
            >
              Born from a Love of Desserts
            </h2>
            <div className="space-y-4 text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
              <p>
                Scoops & Sips began in 2018 with a simple dream: to create a place where people could
                escape the everyday and indulge in moments of pure sweetness. What started as a small
                ice cream parlor has blossomed into a full dessert destination.
              </p>
              <p>
                We believe dessert isn't just food—it's an experience. Every scoop, every sip, every
                slice is crafted with care, creativity, and the finest ingredients we can find. From
                our signature ice cream flavors to our artisan beverages and custom cakes, we pour our
                hearts into everything we make.
              </p>
              <p>
                Today, we're proud to serve our community with treats that bring smiles, celebrate
                milestones, and create sweet memories that last a lifetime.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-200 to-rose-200 rounded-3xl h-96 flex items-center justify-center">
            <Heart size={120} className="text-white/80" />
          </div>
        </div>

        <div className="mb-20">
          <h2
            className="text-4xl font-bold text-gray-800 mb-12 text-center"
            style={{ fontFamily: 'Fredoka, sans-serif' }}
          >
            What Makes Us Special
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-pink-100 to-rose-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={40} className="text-pink-500" />
              </div>
              <h3
                className="text-2xl font-bold text-gray-800 mb-3"
                style={{ fontFamily: 'Fredoka, sans-serif' }}
              >
                Quality First
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                We use only premium, locally-sourced ingredients to ensure every bite exceeds expectations.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-pink-100 to-rose-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles size={40} className="text-pink-500" />
              </div>
              <h3
                className="text-2xl font-bold text-gray-800 mb-3"
                style={{ fontFamily: 'Fredoka, sans-serif' }}
              >
                Creative Innovation
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Constantly experimenting with new flavors and combinations to surprise and delight you.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-pink-100 to-rose-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={40} className="text-pink-500" />
              </div>
              <h3
                className="text-2xl font-bold text-gray-800 mb-3"
                style={{ fontFamily: 'Fredoka, sans-serif' }}
              >
                Made with Love
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Every dessert is handcrafted with passion, care, and attention to detail.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 sm:p-12">
          <div className="text-center mb-8">
            <Users size={60} className="text-pink-500 mx-auto mb-4" />
            <h2
              className="text-4xl font-bold text-gray-800 mb-4"
              style={{ fontFamily: 'Fredoka, sans-serif' }}
            >
              Meet Our Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Behind every delicious creation is a team of passionate artisans dedicated to bringing joy
              through exceptional desserts and beverages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <div className="w-24 h-24 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl" style={{ fontFamily: 'Fredoka, sans-serif' }}>SA</span>
              </div>
              <h3
                className="text-xl font-bold text-gray-800 mb-1"
                style={{ fontFamily: 'Fredoka, sans-serif' }}
              >
                Sarah Anderson
              </h3>
              <p className="text-pink-500 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Founder & Head Pastry Chef
              </p>
              <p className="text-gray-600 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Trained in Paris, Sarah brings European elegance to every creation.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <div className="w-24 h-24 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl" style={{ fontFamily: 'Fredoka, sans-serif' }}>MC</span>
              </div>
              <h3
                className="text-xl font-bold text-gray-800 mb-1"
                style={{ fontFamily: 'Fredoka, sans-serif' }}
              >
                Marcus Chen
              </h3>
              <p className="text-pink-500 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Ice Cream Artisan
              </p>
              <p className="text-gray-600 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Marcus crafts innovative flavors that push the boundaries of traditional ice cream.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <div className="w-24 h-24 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl" style={{ fontFamily: 'Fredoka, sans-serif' }}>EP</span>
              </div>
              <h3
                className="text-xl font-bold text-gray-800 mb-1"
                style={{ fontFamily: 'Fredoka, sans-serif' }}
              >
                Emma Parker
              </h3>
              <p className="text-pink-500 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Beverage Specialist
              </p>
              <p className="text-gray-600 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Emma creates the perfect drinks to complement our sweet offerings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
