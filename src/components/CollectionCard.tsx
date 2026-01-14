// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ChevronRight, ArrowRight, ShoppingBag, Loader } from 'lucide-react';

// interface Collection {
//   id: number;
//   name: string;
//   description: string;
//   image: string;
//   category: string;
//   productCount: number;
//   type: 'men' | 'women';
// }

// const API_BASE_URL = "https://sohwais-be.onrender.com/api";

// const CollectionCard = () => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState<boolean>(true);
//   const [stats, setStats] = useState({
//     men: 0,
//     women: 0,
//     total: 0
//   });

//   // Fetch product stats from API
//   useEffect(() => {
//     const fetchStats = async () => {
//       try {
//         const response = await fetch(`${API_BASE_URL}/products`);
//         if (response.ok) {
//           const data = await response.json();
//           if (data.success && data.data) {
//             const products: any[] = data.data;
//             const menCount = products.filter(p => p.category === 'Men').length;
//             const womenCount = products.filter(p => p.category === 'Women').length;
//             setStats({
//               men: menCount,
//               women: womenCount,
//               total: products.length
//             });
//           }
//         }
//       } catch (error) {
//         console.error('Error fetching stats:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStats();
//   }, []);

//   const featuredCollections: { men: Collection[], women: Collection[] } = {
//     men: [
//       {
//         id: 1,
//         name: 'Majestic Linen',
//         description: 'Premium linen collection for sophisticated men',
//         image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f',
//         category: 'Kurta, Sherwani, Jacket',
//         productCount: 28,
//         type: 'men'
//       },
//       {
//         id: 2,
//         name: 'Traditional Collection',
//         description: 'Classic traditional wear for men',
//         image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b',
//         category: 'Kurta, Dhoti, Pajama',
//         productCount: 35,
//         type: 'men'
//       },
//       {
//         id: 3,
//         name: 'Wedding Collection',
//         description: 'Royal wedding attire for men',
//         image: 'https://images.unsplash.com/photo-1568129516573-62ed8c6810c0',
//         category: 'Sherwani, Kurta',
//         productCount: 18,
//         type: 'men'
//       }
//     ],
//     women: [
//       {
//         id: 1,
//         name: 'Madhubani Collection',
//         description: 'Traditional Madhubani art on exquisite fabrics',
//         image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9',
//         category: 'Saree, Lehenga, Kurti',
//         productCount: 24,
//         type: 'women'
//       },
//       {
//         id: 2,
//         name: 'Sujini Collection',
//         description: 'Intricate Sujini embroidery work',
//         image: 'https://images.unsplash.com/photo-1585487000160-6eb9ce6b5a59',
//         category: 'Saree, Salwar Suit',
//         productCount: 18,
//         type: 'women'
//       },
//       {
//         id: 3,
//         name: 'Nakashi Collection',
//         description: 'Traditional Nakashi artwork',
//         image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8',
//         category: 'Lehenga, Saree',
//         productCount: 15,
//         type: 'women'
//       },
//       {
//         id: 4,
//         name: 'The Batik Archive',
//         description: 'Traditional Batik prints',
//         image: 'https://images.unsplash.com/photo-1582418702059-97ebafb35d09',
//         category: 'Kurti, Dupatta',
//         productCount: 42,
//         type: 'women'
//       },
//       {
//         id: 5,
//         name: 'Marble Collection',
//         description: 'Elegant marble print designs',
//         image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8',
//         category: 'Dupatta, Stole',
//         productCount: 32,
//         type: 'women'
//       },
//       {
//         id: 6,
//         name: 'Bridal Collection',
//         description: 'Exclusive bridal wear for special occasions',
//         image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b',
//         category: 'Lehenga, Saree',
//         productCount: 36,
//         type: 'women'
//       }
//     ]
//   };

//   const handleViewAll = (gender: 'men' | 'women') => {
//     navigate(`/products?category=${gender === 'men' ? 'Men' : 'Women'}`);
//   };

//   const handleCollectionClick = (collectionName: string) => {
//     navigate(`/products/collection/${encodeURIComponent(collectionName)}`);
//   };

//   if (loading) {
//     return (
//       <div className="min-h-[400px] flex items-center justify-center">
//         <Loader className="w-8 h-8 animate-spin text-[#c9a060]" />
//       </div>
//     );
//   }

//   return (
//     <div className="py-12 md:py-16 lg:py-20 bg-[#fdfcf9]">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Stats Overview */}
//         <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="bg-white rounded-xl p-6 shadow-sm border border-[#2c1810]/10">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-[#2c1810]/70 font-['Cormorant_Garamond',serif]">
//                   Total Products
//                 </p>
//                 <p className="text-3xl font-bold text-[#2c1810] mt-2">
//                   {stats.total}
//                 </p>
//               </div>
//               <ShoppingBag className="w-8 h-8 text-[#c9a060]" />
//             </div>
//           </div>
//           <div className="bg-white rounded-xl p-6 shadow-sm border border-[#2c1810]/10">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-[#2c1810]/70 font-['Cormorant_Garamond',serif]">
//                   Men's Wear
//                 </p>
//                 <p className="text-3xl font-bold text-blue-600 mt-2">
//                   {stats.men}
//                 </p>
//               </div>
//               <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
//                 <span className="text-blue-600 font-bold">♂</span>
//               </div>
//             </div>
//           </div>
//           <div className="bg-white rounded-xl p-6 shadow-sm border border-[#2c1810]/10">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-[#2c1810]/70 font-['Cormorant_Garamond',serif]">
//                   Women's Wear
//                 </p>
//                 <p className="text-3xl font-bold text-pink-600 mt-2">
//                   {stats.women}
//                 </p>
//               </div>
//               <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
//                 <span className="text-pink-600 font-bold">♀</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Men's Collections Section */}
//         <div className="mb-16 md:mb-20">
//           <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 md:mb-12 gap-4">
//             <div>
//               <h2 className="text-2xl md:text-3xl lg:text-4xl font-['Cinzel_Decorative',serif] text-[#2c1810] uppercase tracking-[2px] mb-2">
//                 Men's Collections
//               </h2>
//               <p className="text-[#2c1810]/70 font-['Cormorant_Garamond',serif] text-sm md:text-base max-w-2xl">
//                 Traditional attire crafted for the modern gentleman with premium fabrics and authentic craftsmanship.
//               </p>
//             </div>
//             <button
//               onClick={() => handleViewAll('men')}
//               className="flex items-center gap-2 text-[#c9a060] hover:text-[#b8914f] transition-colors group font-['Cormorant_Garamond',serif] tracking-[1px] text-sm md:text-base whitespace-nowrap"
//             >
//               View All Men's Collections
//               <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
//             </button>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//             {featuredCollections.men.map((collection: Collection) => (
//               <div
//                 key={collection.id}
//                 className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer border border-[#2c1810]/10"
//                 onClick={() => handleCollectionClick(collection.name)}
//               >
//                 <div className="relative h-64 md:h-72 overflow-hidden">
//                   <img
//                     src={collection.image}
//                     alt={collection.name}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
//                   {/* Category Badge */}
//                   <div className="absolute top-4 left-4">
//                     <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#2c1810] text-xs rounded-full font-['Cormorant_Garamond',serif] tracking-[0.5px]">
//                       {collection.category}
//                     </span>
//                   </div>
                  
//                   {/* Product Count */}
//                   <div className="absolute top-4 right-4">
//                     <span className="px-3 py-1 bg-[#c9a060] text-white text-xs rounded-full font-['Cormorant_Garamond',serif] tracking-[0.5px]">
//                       {collection.productCount} Products
//                     </span>
//                   </div>
                  
//                   {/* Hover Arrow */}
//                   <div className="absolute bottom-4 right-4 bg-white p-2 rounded-full transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
//                     <ChevronRight className="w-5 h-5 text-[#2c1810]" />
//                   </div>
//                 </div>
                
//                 <div className="p-6">
//                   <h3 className="text-xl md:text-2xl font-['Cinzel_Decorative',serif] text-[#2c1810] mb-2">
//                     {collection.name}
//                   </h3>
//                   <p className="text-[#2c1810]/70 font-['Cormorant_Garamond',serif] text-sm mb-4">
//                     {collection.description}
//                   </p>
//                   <button className="text-[#c9a060] hover:text-[#b8914f] font-['Cormorant_Garamond',serif] text-sm tracking-[1px] flex items-center gap-1 group/btn">
//                     Explore Collection
//                     <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Women's Collections Section */}
//         <div className="mb-16 md:mb-20">
//           <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 md:mb-12 gap-4">
//             <div>
//               <h2 className="text-2xl md:text-3xl lg:text-4xl font-['Cinzel_Decorative',serif] text-[#2c1810] uppercase tracking-[2px] mb-2">
//                 Women's Collections
//               </h2>
//               <p className="text-[#2c1810]/70 font-['Cormorant_Garamond',serif] text-sm md:text-base max-w-2xl">
//                 Exquisite traditional wear celebrating feminine elegance with intricate embroidery and timeless designs.
//               </p>
//             </div>
//             <button
//               onClick={() => handleViewAll('women')}
//               className="flex items-center gap-2 text-[#c9a060] hover:text-[#b8914f] transition-colors group font-['Cormorant_Garamond',serif] tracking-[1px] text-sm md:text-base whitespace-nowrap"
//             >
//               View All Women's Collections
//               <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
//             </button>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//             {featuredCollections.women.map((collection: Collection) => (
//               <div
//                 key={collection.id}
//                 className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer border border-[#2c1810]/10"
//                 onClick={() => handleCollectionClick(collection.name)}
//               >
//                 <div className="relative h-64 md:h-72 overflow-hidden">
//                   <img
//                     src={collection.image}
//                     alt={collection.name}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
//                   {/* Category Badge */}
//                   <div className="absolute top-4 left-4">
//                     <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#2c1810] text-xs rounded-full font-['Cormorant_Garamond',serif] tracking-[0.5px]">
//                       {collection.category}
//                     </span>
//                   </div>
                  
//                   {/* Product Count */}
//                   <div className="absolute top-4 right-4">
//                     <span className="px-3 py-1 bg-[#c9a060] text-white text-xs rounded-full font-['Cormorant_Garamond',serif] tracking-[0.5px]">
//                       {collection.productCount} Products
//                     </span>
//                   </div>
                  
//                   {/* Hover Arrow */}
//                   <div className="absolute bottom-4 right-4 bg-white p-2 rounded-full transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
//                     <ChevronRight className="w-5 h-5 text-[#2c1810]" />
//                   </div>
//                 </div>
                
//                 <div className="p-6">
//                   <h3 className="text-xl md:text-2xl font-['Cinzel_Decorative',serif] text-[#2c1810] mb-2">
//                     {collection.name}
//                   </h3>
//                   <p className="text-[#2c1810]/70 font-['Cormorant_Garamond',serif] text-sm mb-4">
//                     {collection.description}
//                   </p>
//                   <button className="text-[#c9a060] hover:text-[#b8914f] font-['Cormorant_Garamond',serif] text-sm tracking-[1px] flex items-center gap-1 group/btn">
//                     Explore Collection
//                     <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Call to Action */}
//         <div className="bg-gradient-to-r from-[#2c1810] to-[#3a2015] rounded-2xl overflow-hidden shadow-2xl">
//           <div className="p-8 md:p-12 text-center">
//             <h3 className="text-2xl md:text-3xl font-['Cinzel_Decorative',serif] text-white mb-4">
//               Discover Your Perfect Traditional Wear
//             </h3>
//             <p className="text-white/80 font-['Cormorant_Garamond',serif] text-lg mb-8 max-w-2xl mx-auto">
//               Browse through our exclusive collections curated for every occasion - from festive celebrations to everyday elegance.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button
//                 onClick={() => navigate('/products?category=Men')}
//                 className="px-8 py-3 bg-[#c9a060] text-white rounded-lg hover:bg-[#b8914f] transition-colors font-['Cormorant_Garamond',serif] tracking-[1px] text-sm md:text-base transform hover:scale-105 transition-transform"
//               >
//                 Shop Men's Collection
//               </button>
//               <button
//                 onClick={() => navigate('/products?category=Women')}
//                 className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-['Cormorant_Garamond',serif] tracking-[1px] text-sm md:text-base transform hover:scale-105 transition-transform"
//               >
//                 Shop Women's Collection
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CollectionCard;
import React from 'react';
// import { a } from 'react-router-dom';

interface CollectionCardProps {
  title: string;
  description: string;
  image: string;
  count: number;
  link: string;
  color: string;
}

const CollectionCard: React.FC<CollectionCardProps> = ({ 
  title, 
  description, 
  image, 
  count, 
  a, 
  color 
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
      <div className="relative h-64">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 ${color} text-white text-sm rounded-full`}>
            {count} Products
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a 
          href={a}
          className={`inline-block ${color} text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity`}
        >
          View Collection
        </a>
      </div>
    </div>
  );
};

const CollectionsSection: React.FC = () => {
  const collections = {
    men: [
      {
        title: "Majestic Linen",
        description: "Premium linen collection for sophisticated men",
        image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f",
        count: 28,
        a: "/products?category=Men&collection=Majestic+Linen",
        color: "bg-blue-600"
      },
      {
        title: "Traditional Collection",
        description: "Classic traditional wear for men",
        image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b",
        count: 35,
        a: "/products?category=Men",
        color: "bg-blue-600"
      }
    ],
    women: [
      {
        title: "Madhubani Collection",
        description: "Traditional Madhubani art on exquisite fabrics",
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9",
        count: 24,
        a: "/products?collection=Madhubani+Collection",
        color: "bg-pink-600"
      },
      {
        title: "Sujini Collection",
        description: "Intricate Sujini embroidery work",
        image: "https://images.unsplash.com/photo-1585487000160-6eb9ce6b5a59",
        count: 18,
        a: "/products?collection=Sujini+Collection",
        color: "bg-pink-600"
      }
    ]
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Men's Collections */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Men's Collections</h2>
            <a 
              to="/products?category=Men"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              View All →
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.men.map((collection, index) => (
              <CollectionCard key={index} {...collection} />
            ))}
          </div>
        </div>

        {/* Women's Collections */}
        <div>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Women's Collections</h2>
            <a 
              to="/products?category=Women"
              className="text-pink-600 hover:text-pink-800 font-medium"
            >
              View All →
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.women.map((collection, index) => (
              <CollectionCard key={index} {...collection} />
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            to="/products?category=Men"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-center hover:bg-blue-700 transition-colors"
          >
            Shop Men's Collection
          </a>
          <a 
            to="/products?category=Women"
            className="bg-pink-600 text-white px-8 py-3 rounded-lg text-center hover:bg-pink-700 transition-colors"
          >
            Shop Women's Collection
          </a>
        </div>
      </div>
    </div>
  );
};

export default CollectionsSection;