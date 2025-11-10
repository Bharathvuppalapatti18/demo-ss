import { useState } from 'react';
import { PartyPopper, Cake, Coffee, CheckCircle } from 'lucide-react';

export default function Catering() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    guestCount: '',
    eventType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventDate: '',
        guestCount: '',
        eventType: '',
        message: '',
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-pink-300 to-rose-300 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-5xl sm:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: 'Fredoka, sans-serif' }}
          >
            Catering Services
          </h1>
          <p
            className="text-xl text-white/90 max-w-3xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Let us make your special events even sweeter
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-bold text-gray-800 mb-4"
            style={{ fontFamily: 'Fredoka, sans-serif' }}
          >
            Perfect for Every Occasion
          </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            From intimate gatherings to grand celebrations, we bring delightful desserts and beverages
            to your event.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-2xl text-center">
            <PartyPopper size={48} className="text-pink-500 mx-auto mb-4" />
            <h3
              className="text-2xl font-bold text-gray-800 mb-3"
              style={{ fontFamily: 'Fredoka, sans-serif' }}
            >
              Corporate Events
            </h3>
            <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Impress clients and employees with premium dessert spreads and beverage stations.
            </p>
          </div>

          <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-2xl text-center">
            <Cake size={48} className="text-pink-500 mx-auto mb-4" />
            <h3
              className="text-2xl font-bold text-gray-800 mb-3"
              style={{ fontFamily: 'Fredoka, sans-serif' }}
            >
              Celebrations
            </h3>
            <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Weddings, birthdays, anniversaries—we create custom dessert experiences for your special day.
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-2xl text-center">
            <Coffee size={48} className="text-pink-500 mx-auto mb-4" />
            <h3
              className="text-2xl font-bold text-gray-800 mb-3"
              style={{ fontFamily: 'Fredoka, sans-serif' }}
            >
              Social Gatherings
            </h3>
            <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Parties, showers, reunions—add a sweet touch to any get-together.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 sm:p-12 mb-16">
          <h2
            className="text-3xl font-bold text-gray-800 mb-8 text-center"
            style={{ fontFamily: 'Fredoka, sans-serif' }}
          >
            Our Catering Menu
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3
                className="text-2xl font-bold text-pink-600 mb-4"
                style={{ fontFamily: 'Fredoka, sans-serif' }}
              >
                Dessert Options
              </h3>
              <ul className="space-y-3 text-gray-700" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-pink-500 flex-shrink-0 mt-1" />
                  <span>Ice cream bar with 12+ artisan flavors and toppings</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-pink-500 flex-shrink-0 mt-1" />
                  <span>Custom decorated cakes and cupcakes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-pink-500 flex-shrink-0 mt-1" />
                  <span>Gourmet cookie and brownie platters</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-pink-500 flex-shrink-0 mt-1" />
                  <span>Seasonal fruit tarts and pastries</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-pink-500 flex-shrink-0 mt-1" />
                  <span>Dessert shooters and mini portions</span>
                </li>
              </ul>
            </div>

            <div>
              <h3
                className="text-2xl font-bold text-pink-600 mb-4"
                style={{ fontFamily: 'Fredoka, sans-serif' }}
              >
                Beverage Stations
              </h3>
              <ul className="space-y-3 text-gray-700" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-pink-500 flex-shrink-0 mt-1" />
                  <span>Specialty coffee and espresso bar</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-pink-500 flex-shrink-0 mt-1" />
                  <span>Fresh fruit smoothies and shakes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-pink-500 flex-shrink-0 mt-1" />
                  <span>Premium hot chocolate station</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-pink-500 flex-shrink-0 mt-1" />
                  <span>Craft sodas and flavored lemonades</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-pink-500 flex-shrink-0 mt-1" />
                  <span>Custom beverage pairings</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <h2
            className="text-3xl font-bold text-gray-800 mb-8 text-center"
            style={{ fontFamily: 'Fredoka, sans-serif' }}
          >
            Request a Catering Quote
          </h2>

          {submitted ? (
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8 text-center">
              <CheckCircle size={60} className="text-green-500 mx-auto mb-4" />
              <h3
                className="text-2xl font-bold text-gray-800 mb-2"
                style={{ fontFamily: 'Fredoka, sans-serif' }}
              >
                Thank You!
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                We've received your catering inquiry and will contact you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    className="block text-gray-700 font-medium mb-2"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-pink-400 focus:outline-none transition-colors"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  />
                </div>

                <div>
                  <label
                    className="block text-gray-700 font-medium mb-2"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-pink-400 focus:outline-none transition-colors"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    className="block text-gray-700 font-medium mb-2"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-pink-400 focus:outline-none transition-colors"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  />
                </div>

                <div>
                  <label
                    className="block text-gray-700 font-medium mb-2"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Event Date
                  </label>
                  <input
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-pink-400 focus:outline-none transition-colors"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    className="block text-gray-700 font-medium mb-2"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Number of Guests
                  </label>
                  <input
                    type="number"
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-pink-400 focus:outline-none transition-colors"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  />
                </div>

                <div>
                  <label
                    className="block text-gray-700 font-medium mb-2"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Event Type
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-pink-400 focus:outline-none transition-colors"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    <option value="">Select event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="shower">Baby/Bridal Shower</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  className="block text-gray-700 font-medium mb-2"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Additional Details
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your event, dietary restrictions, preferences, etc."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-pink-400 focus:outline-none transition-colors"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-400 to-rose-400 text-white py-4 rounded-lg font-semibold hover:from-pink-500 hover:to-rose-500 transform hover:scale-[1.02] transition-all shadow-lg"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Submit Inquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
