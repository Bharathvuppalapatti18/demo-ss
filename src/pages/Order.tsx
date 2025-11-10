import { useState } from 'react';
import { ShoppingBag, Plus, Minus, CheckCircle } from 'lucide-react';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
}

export default function Order() {
  const [cart, setCart] = useState<Record<string, number>>({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pickupTime: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const menuItems: MenuItem[] = [
    {
      id: 'vanilla',
      name: 'Classic Vanilla',
      description: 'Rich Madagascar vanilla bean ice cream',
      price: 5.99,
      category: 'Ice Cream',
    },
    {
      id: 'chocolate',
      name: 'Dark Chocolate',
      description: 'Decadent Belgian chocolate ice cream',
      price: 5.99,
      category: 'Ice Cream',
    },
    {
      id: 'strawberry',
      name: 'Fresh Strawberry',
      description: 'Made with local organic strawberries',
      price: 6.49,
      category: 'Ice Cream',
    },
    {
      id: 'salted-caramel',
      name: 'Salted Caramel',
      description: 'Sweet and salty perfection',
      price: 6.49,
      category: 'Ice Cream',
    },
    {
      id: 'latte',
      name: 'Specialty Latte',
      description: 'Handcrafted espresso with steamed milk',
      price: 4.99,
      category: 'Beverages',
    },
    {
      id: 'smoothie',
      name: 'Berry Smoothie',
      description: 'Mixed berries with yogurt and honey',
      price: 6.99,
      category: 'Beverages',
    },
    {
      id: 'cake-slice',
      name: 'Cake Slice',
      description: 'Daily featured cake flavor',
      price: 7.99,
      category: 'Desserts',
    },
    {
      id: 'brownie',
      name: 'Fudge Brownie',
      description: 'Warm chocolate brownie with ice cream',
      price: 8.99,
      category: 'Desserts',
    },
  ];

  const addToCart = (itemId: string) => {
    setCart({ ...cart, [itemId]: (cart[itemId] || 0) + 1 });
  };

  const removeFromCart = (itemId: string) => {
    if (cart[itemId] > 1) {
      setCart({ ...cart, [itemId]: cart[itemId] - 1 });
    } else {
      const newCart = { ...cart };
      delete newCart[itemId];
      setCart(newCart);
    }
  };

  const getTotal = () => {
    return Object.entries(cart).reduce((total, [itemId, quantity]) => {
      const item = menuItems.find((i) => i.id === itemId);
      return total + (item?.price || 0) * quantity;
    }, 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setCart({});
      setFormData({
        name: '',
        email: '',
        phone: '',
        pickupTime: '',
        notes: '',
      });
    }, 3000);
  };

  const categories = ['Ice Cream', 'Beverages', 'Desserts'];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-pink-300 to-rose-300 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-5xl sm:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: 'Fredoka, sans-serif' }}
          >
            Place Your Order
          </h1>
          <p
            className="text-xl text-white/90 max-w-3xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Select your favorites for pickup or delivery
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2
              className="text-3xl font-bold text-gray-800 mb-8"
              style={{ fontFamily: 'Fredoka, sans-serif' }}
            >
              Our Menu
            </h2>

            {categories.map((category) => (
              <div key={category} className="mb-8">
                <h3
                  className="text-2xl font-bold text-pink-600 mb-4"
                  style={{ fontFamily: 'Fredoka, sans-serif' }}
                >
                  {category}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {menuItems
                    .filter((item) => item.category === category)
                    .map((item) => (
                      <div
                        key={item.id}
                        className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4
                            className="text-lg font-bold text-gray-800"
                            style={{ fontFamily: 'Fredoka, sans-serif' }}
                          >
                            {item.name}
                          </h4>
                          <span
                            className="text-pink-600 font-semibold"
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                          >
                            ${item.price.toFixed(2)}
                          </span>
                        </div>
                        <p
                          className="text-gray-600 text-sm mb-4"
                          style={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                          {item.description}
                        </p>
                        <div className="flex items-center justify-between">
                          {cart[item.id] ? (
                            <div className="flex items-center gap-3">
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="bg-white text-pink-500 w-8 h-8 rounded-full flex items-center justify-center hover:bg-pink-100 transition-colors"
                              >
                                <Minus size={16} />
                              </button>
                              <span
                                className="font-semibold text-gray-800"
                                style={{ fontFamily: 'Poppins, sans-serif' }}
                              >
                                {cart[item.id]}
                              </span>
                              <button
                                onClick={() => addToCart(item.id)}
                                className="bg-white text-pink-500 w-8 h-8 rounded-full flex items-center justify-center hover:bg-pink-100 transition-colors"
                              >
                                <Plus size={16} />
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => addToCart(item.id)}
                              className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors flex items-center gap-2"
                              style={{ fontFamily: 'Poppins, sans-serif' }}
                            >
                              <Plus size={16} />
                              Add to Cart
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <ShoppingBag size={24} className="text-pink-500" />
                  <h3
                    className="text-2xl font-bold text-gray-800"
                    style={{ fontFamily: 'Fredoka, sans-serif' }}
                  >
                    Your Cart
                  </h3>
                </div>

                {Object.keys(cart).length === 0 ? (
                  <p className="text-gray-600 text-center py-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Your cart is empty
                  </p>
                ) : (
                  <>
                    <div className="space-y-3 mb-4">
                      {Object.entries(cart).map(([itemId, quantity]) => {
                        const item = menuItems.find((i) => i.id === itemId);
                        if (!item) return null;
                        return (
                          <div key={itemId} className="flex justify-between items-center">
                            <div style={{ fontFamily: 'Poppins, sans-serif' }}>
                              <div className="font-medium text-gray-800">{item.name}</div>
                              <div className="text-sm text-gray-600">
                                ${item.price.toFixed(2)} × {quantity}
                              </div>
                            </div>
                            <div className="font-semibold text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>
                              ${(item.price * quantity).toFixed(2)}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="border-t-2 border-pink-200 pt-4 mb-6">
                      <div className="flex justify-between items-center">
                        <span
                          className="text-xl font-bold text-gray-800"
                          style={{ fontFamily: 'Fredoka, sans-serif' }}
                        >
                          Total
                        </span>
                        <span
                          className="text-2xl font-bold text-pink-600"
                          style={{ fontFamily: 'Fredoka, sans-serif' }}
                        >
                          ${getTotal().toFixed(2)}
                        </span>
                      </div>
                    </div>

                    {submitted ? (
                      <div className="bg-white rounded-xl p-6 text-center">
                        <CheckCircle size={48} className="text-green-500 mx-auto mb-3" />
                        <h4
                          className="text-lg font-bold text-gray-800 mb-2"
                          style={{ fontFamily: 'Fredoka, sans-serif' }}
                        >
                          Order Received!
                        </h4>
                        <p className="text-gray-600 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          We'll contact you shortly to confirm your order.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <input
                            type="text"
                            required
                            placeholder="Your Name *"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-pink-400 focus:outline-none"
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                          />
                        </div>
                        <div>
                          <input
                            type="email"
                            required
                            placeholder="Email *"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-pink-400 focus:outline-none"
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                          />
                        </div>
                        <div>
                          <input
                            type="tel"
                            required
                            placeholder="Phone *"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-pink-400 focus:outline-none"
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                          />
                        </div>
                        <div>
                          <input
                            type="datetime-local"
                            required
                            value={formData.pickupTime}
                            onChange={(e) => setFormData({ ...formData, pickupTime: e.target.value })}
                            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-pink-400 focus:outline-none"
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                          />
                        </div>
                        <div>
                          <textarea
                            placeholder="Special instructions..."
                            rows={2}
                            value={formData.notes}
                            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-pink-400 focus:outline-none"
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full bg-gradient-to-r from-pink-400 to-rose-400 text-white py-3 rounded-lg font-semibold hover:from-pink-500 hover:to-rose-500 transition-all shadow-lg"
                          style={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                          Complete Order
                        </button>
                      </form>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
