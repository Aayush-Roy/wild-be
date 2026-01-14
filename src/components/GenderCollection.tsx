import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag, Users, ArrowRight, Star, Heart } from 'lucide-react';

interface Stats {
  men: number;
  women: number;
  total: number;
}

interface Collection {
  name: string;
  description: string;
  image: string;
  color: string;
  textColor: string;
  buttonColor: string;
}

const API_BASE_URL = "https://sohwais-be.onrender.com/api";

const GenderCollections = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState<Stats>({ men: 0, women: 0, total: 0 });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/products`);
        if (response.ok) {
          const data = await response.json();
          if (data.success && data.data) {
            const products: any[] = data.data;
            const menCount = products.filter(p => p.category === 'Men').length;
            const womenCount = products.filter(p => p.category === 'Women').length;
            setStats({
              men: menCount,
              women: womenCount,
              total: products.length
            });
          }
        }
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const collections: Collection[] = [
    {
      name: "Men's Collections",
      description: "Traditional and contemporary wear for the modern gentleman with premium fabrics and authentic craftsmanship.",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c",
      color: "from-blue-50 to-blue-100",
      textColor: "text-blue-900",
      buttonColor: "bg-blue-600 hover:bg-blue-700"
    },
    {
      name: "Women's Collections",
      description: "Exquisite traditional wear celebrating feminine elegance with intricate embroidery and timeless designs.",
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9",
      color: "from-pink-50 to-pink-100",
      textColor: "text-pink-900",
      buttonColor: "bg-pink-600 hover:bg-pink-700"
    }
  ];

  const handleGenderClick = (gender: 'Men' | 'Women') => {
    navigate(`/products?category=${gender}`);
  };

  const handleCollectionClick = (collectionName: string) => {
    const name = collectionName.replace("'s Collections", "").trim();
    navigate(`/products/collection/${encodeURIComponent(name)} Collection`);
  };

  if (loading) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#c9a060]"></div>
      </div>
    );
  }

  return (
    <div className="py-12 md:py-16 bg-gradient-to-b from-[#fdfcf9] to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-['Cinzel_Decorative',serif] text-[#2c1810] mb-4">
            Explore Traditional Collections
          </h1>
          <p className="text-[#2c1810]/70 font-['Cormorant_Garamond',serif] text-lg md:text-xl max-w-3xl mx-auto">
            Discover handcrafted traditional wear curated for every occasion, blending heritage with contemporary elegance.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 font-['Cormorant_Garamond',serif]">Total Products</p>
                <p className="text-3xl font-bold text-[#2c1810] mt-2">{stats.total}</p>
              </div>
              <ShoppingBag className="w-10 h-10 text-[#c9a060]" />
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 font-['Cormorant_Garamond',serif]">Men's Wear</p>
                <p className="text-3xl font-bold text-blue-600 mt-2">{stats.men}</p>
                <p className="text-xs text-gray-500 mt-1">Available Collections</p>
              </div>
              <div className="relative">
                <Users className="w-10 h-10 text-blue-400" />
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-blue-600">♂</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 font-['Cormorant_Garamond',serif]">Women's Wear</p>
                <p className="text-3xl font-bold text-pink-600 mt-2">{stats.women}</p>
                <p className="text-xs text-gray-500 mt-1">Available Collections</p>
              </div>
              <div className="relative">
                <Users className="w-10 h-10 text-pink-400" />
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-pink-600">♀</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gender Collections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {collections.map((collection, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${collection.color} rounded-2xl overflow-hidden shadow-xl border border-gray-300/30`}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className={`text-2xl md:text-3xl font-['Cinzel_Decorative',serif] ${collection.textColor}`}>
                    {collection.name}
                  </h2>
                  <div className={`px-4 py-1 ${collection.textColor.replace('text', 'bg')} bg-opacity-20 rounded-full`}>
                    <span className={`text-sm font-['Cormorant_Garamond',serif] font-semibold ${collection.textColor}`}>
                      {collection.name.includes('Men') ? stats.men : stats.women} Products
                    </span>
                  </div>
                </div>
                
                <p className={`${collection.textColor} font-['Cormorant_Garamond',serif] text-lg mb-8`}>
                  {collection.description}
                </p>

                <div className="space-y-4">
                  <button
                    onClick={() => handleGenderClick(collection.name.includes('Men') ? 'Men' : 'Women')}
                    className={`w-full ${collection.buttonColor} text-white py-3 rounded-lg font-['Cormorant_Garamond',serif] tracking-[1px] flex items-center justify-center gap-2 transition-all hover:shadow-lg transform hover:scale-[1.02]`}
                  >
                    Shop {collection.name.includes('Men') ? "Men's" : "Women's"} Collection
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  
                  <button
                    onClick={() => handleCollectionClick(collection.name)}
                    className="w-full bg-white text-gray-700 py-3 rounded-lg border border-gray-300 font-['Cormorant_Garamond',serif] tracking-[1px] flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
                  >
                    <Heart className="w-5 h-5 text-gray-400" />
                    View Featured Collections
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 mb-12">
          <h3 className="text-2xl font-['Cinzel_Decorative',serif] text-[#2c1810] text-center mb-8">
            Why Choose Our Collections
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-['Cormorant_Garamond',serif] font-semibold text-lg text-[#2c1810] mb-2">
                Premium Quality
              </h4>
              <p className="text-gray-600 text-sm">
                Handcrafted with finest fabrics and traditional techniques
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-pink-600" />
              </div>
              <h4 className="font-['Cormorant_Garamond',serif] font-semibold text-lg text-[#2c1810] mb-2">
                Artisan Made
              </h4>
              <p className="text-gray-600 text-sm">
                Supporting traditional artisans and their craft
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-8 h-8 text-amber-600" />
              </div>
              <h4 className="font-['Cormorant_Garamond',serif] font-semibold text-lg text-[#2c1810] mb-2">
                Easy Shopping
              </h4>
              <p className="text-gray-600 text-sm">
                Seamless online experience with secure payments
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button
            onClick={() => navigate('/products')}
            className="px-10 py-4 bg-[#2c1810] text-white rounded-lg hover:bg-[#3a2015] transition-colors font-['Cormorant_Garamond',serif] tracking-[1px] text-lg md:text-xl inline-flex items-center gap-3 shadow-lg transform hover:scale-105 transition-transform"
          >
            Explore All Collections
            <ArrowRight className="w-6 h-6" />
          </button>
          <p className="text-gray-600 mt-4 font-['Cormorant_Garamond',serif]">
            Free shipping on orders above ₹2999
          </p>
        </div>
      </div>
    </div>
  );
};

export default GenderCollections;