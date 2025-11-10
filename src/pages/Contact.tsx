import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
        subject: '',
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
            Get In Touch
          </h1>
          <p
            className="text-xl text-white/90 max-w-3xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            We'd love to hear from you
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2
              className="text-3xl font-bold text-gray-800 mb-8"
              style={{ fontFamily: 'Fredoka, sans-serif' }}
            >
              Visit Us
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-pink-100 to-rose-100 p-3 rounded-lg">
                  <MapPin size={24} className="text-pink-500" />
                </div>
                <div style={{ fontFamily: 'Poppins, sans-serif' }}>
                  <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
                  <p className="text-gray-600">123 Sweet Street</p>
                  <p className="text-gray-600">Dessert City, DC 12345</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-pink-100 to-rose-100 p-3 rounded-lg">
                  <Phone size={24} className="text-pink-500" />
                </div>
                <div style={{ fontFamily: 'Poppins, sans-serif' }}>
                  <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-pink-100 to-rose-100 p-3 rounded-lg">
                  <Mail size={24} className="text-pink-500" />
                </div>
                <div style={{ fontFamily: 'Poppins, sans-serif' }}>
                  <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                  <p className="text-gray-600">hello@scoopsandsips.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-pink-100 to-rose-100 p-3 rounded-lg">
                  <Clock size={24} className="text-pink-500" />
                </div>
                <div style={{ fontFamily: 'Poppins, sans-serif' }}>
                  <h3 className="font-semibold text-gray-800 mb-1">Hours</h3>
                  <div className="text-gray-600 space-y-1">
                    <p>Monday - Thursday: 10am - 9pm</p>
                    <p>Friday - Saturday: 10am - 11pm</p>
                    <p>Sunday: 11am - 8pm</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8">
              <h3
                className="text-2xl font-bold text-gray-800 mb-4"
                style={{ fontFamily: 'Fredoka, sans-serif' }}
              >
                Location
              </h3>
              <div className="bg-gradient-to-br from-pink-200 to-rose-200 rounded-xl h-64 flex items-center justify-center">
                <MapPin size={60} className="text-white/80" />
              </div>
              <p className="text-gray-600 text-sm mt-4 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Located in the heart of downtown, near Central Park
              </p>
            </div>
          </div>

          <div>
            <h2
              className="text-3xl font-bold text-gray-800 mb-8"
              style={{ fontFamily: 'Fredoka, sans-serif' }}
            >
              Send Us a Message
            </h2>

            {submitted ? (
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8 text-center">
                <CheckCircle size={60} className="text-green-500 mx-auto mb-4" />
                <h3
                  className="text-2xl font-bold text-gray-800 mb-2"
                  style={{ fontFamily: 'Fredoka, sans-serif' }}
                >
                  Message Sent!
                </h3>
                <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
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

                <div>
                  <label
                    className="block text-gray-700 font-medium mb-2"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-pink-400 focus:outline-none transition-colors"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  />
                </div>

                <div>
                  <label
                    className="block text-gray-700 font-medium mb-2"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Message *
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-pink-400 focus:outline-none transition-colors"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-400 to-rose-400 text-white py-4 rounded-lg font-semibold hover:from-pink-500 hover:to-rose-500 transform hover:scale-[1.02] transition-all shadow-lg"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Send Message
                </button>
              </form>
            )}

            <div className="mt-8 bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6">
              <h3
                className="text-xl font-bold text-gray-800 mb-3"
                style={{ fontFamily: 'Fredoka, sans-serif' }}
              >
                Follow Us
              </h3>
              <p className="text-gray-600 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Stay connected for the latest flavors, promotions, and sweet updates!
              </p>
              <div className="flex gap-4">
                <button className="bg-white text-pink-500 px-6 py-2 rounded-lg hover:bg-pink-100 transition-colors font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Instagram
                </button>
                <button className="bg-white text-pink-500 px-6 py-2 rounded-lg hover:bg-pink-100 transition-colors font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
