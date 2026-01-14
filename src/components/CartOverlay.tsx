// // import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
// // import { CartItem } from './ProductDetailPage';

// // interface CartOverlayProps {
// //   isOpen: boolean;
// //   onClose: () => void;
// //   cartItems: CartItem[];
// //   onUpdateQuantity: (id: string, newQuantity: number) => void;
// //   onRemoveItem: (id: string) => void;
// // }

// // export function CartOverlay({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }: CartOverlayProps) {
// //   const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
// //   const shipping = subtotal > 0 ? (subtotal > 15000 ? 0 : 200) : 0;
// //   const total = subtotal + shipping;
// //   console.log("item", cartItems);
// //   return (
// //     <>
// //       {/* Backdrop */}
// //       {isOpen && (
// //         <div
// //           className="fixed inset-0 bg-black/50 z-50 transition-opacity"
// //           onClick={onClose}
// //         />
// //       )}

// //       {/* Cart Overlay - Slides from Right */}
// //       <div
// //         className={`fixed top-0 right-0 h-full w-full sm:w-[420px] md:w-[480px] bg-[#fdfcf9] shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
// //           isOpen ? 'translate-x-0' : 'translate-x-full'
// //         }`}
// //       >
// //         {/* Header */}
// //         <div className="flex items-center justify-between p-4 sm:p-6 border-b border-[#2c1810]/10">
// //           <h2 className="text-[20px] sm:text-[24px] tracking-[1.5px] sm:tracking-[2px] font-['Cinzel_Decorative',serif] text-[#2c1810]">
// //             Shopping Cart
// //           </h2>
// //           <button
// //             onClick={onClose}
// //             className="text-[#2c1810] hover:text-[#c9a060] transition-colors"
// //             aria-label="Close cart"
// //           >
// //             <X className="w-5 h-5 sm:w-6 sm:h-6" />
// //           </button>
// //         </div>

// //         {/* Cart Items */}
// //         <div className="flex-1 overflow-y-auto p-4 sm:p-6 h-[calc(100vh-320px)] sm:h-[calc(100vh-280px)]">
// //           {cartItems.length === 0 ? (
// //             <div className="flex flex-col items-center justify-center h-full text-center">
// //               <ShoppingBag className="w-12 h-12 sm:w-16 sm:h-16 text-[#2c1810]/20 mb-4" />
// //               <p className="text-[14px] sm:text-[16px] tracking-[1px] font-['Cormorant_Garamond',serif] text-[#2c1810]/60">
// //                 Your cart is empty
// //               </p>
// //             </div>
// //           ) : (
// //             <div className="space-y-3 sm:space-y-4">
// //               {cartItems.map((item) => (
// //                 <div
// //                   key={item.id}
// //                   className="flex gap-2 sm:gap-3 bg-white rounded-lg p-2.5 sm:p-3 shadow-md"
// //                 >
// //                   {/* Product Image */}
// //                   <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#f5f1e8] rounded-lg overflow-hidden flex-shrink-0">
// //                     <img
// //                       src={item.image}
// //                       alt={item.name}
// //                       className="w-full h-full object-cover"
// //                     />
// //                   </div>

// //                   {/* Product Info */}
// //                   <div className="flex-1 flex flex-col justify-between min-w-0">
// //                     <div>
// //                       <h3 className="text-[12px] sm:text-[13px] tracking-[0.5px] font-['Cinzel_Decorative',serif] text-[#2c1810] mb-0.5 truncate">
// //                         {item.name}
// //                       </h3>
// //                       <p className="text-[9px] sm:text-[10px] tracking-[1px] text-[#2c1810]/60 font-['Cormorant_Garamond',serif] uppercase">
// //                         {item.collection} • Size: {item.size}
// //                       </p>
// //                     </div>

// //                     <div className="flex items-center justify-between mt-1.5 sm:mt-2">
// //                       {/* Quantity Controls */}
// //                       <div className="flex items-center gap-1">
// //                         <button
// //                           onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
// //                           className="w-6 h-6 bg-[#f5f1e8] rounded text-[#2c1810] hover:bg-[#c9a060] hover:text-white transition-colors flex items-center justify-center"
// //                           aria-label="Decrease quantity"
// //                         >
// //                           <Minus className="w-3 h-3" />
// //                         </button>
// //                         <span className="text-[11px] sm:text-[12px] tracking-[0.5px] font-['Cormorant_Garamond',serif] text-[#2c1810] w-6 text-center">
// //                           {item.quantity}
// //                         </span>
// //                         <button
// //                           onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
// //                           className="w-6 h-6 bg-[#f5f1e8] rounded text-[#2c1810] hover:bg-[#c9a060] hover:text-white transition-colors flex items-center justify-center"
// //                           aria-label="Increase quantity"
// //                         >
// //                           <Plus className="w-3 h-3" />
// //                         </button>
// //                       </div>

// //                       {/* Price */}
// //                       <p className="text-[12px] sm:text-[13px] tracking-[0.5px] font-['Cormorant_Garamond',serif] text-[#2c1810]">
// //                         ₹ {(item.price * item.quantity).toLocaleString('en-IN')}
// //                       </p>
// //                     </div>
// //                   </div>

// //                   {/* Remove Button */}
// //                   <button
// //                     onClick={() => onRemoveItem(item.id)}
// //                     className="text-[#2c1810]/40 hover:text-red-600 transition-colors self-start"
// //                     aria-label="Remove item"
// //                   >
// //                     <X className="w-4 h-4" />
// //                   </button>
// //                 </div>
// //               ))}
// //             </div>
// //           )}
// //         </div>

// //         {/* Footer with Total */}
// //         {cartItems.length > 0 && (
// //           <div className="border-t border-[#2c1810]/10 p-4 sm:p-6 bg-white">
// //             <div className="space-y-2 sm:space-y-3 mb-4">
// //               <div className="flex justify-between text-[12px] sm:text-[13px] tracking-[0.5px] font-['Cormorant_Garamond',serif] text-[#2c1810]">
// //                 <span>Subtotal</span>
// //                 <span>₹ {subtotal.toLocaleString('en-IN')}</span>
// //               </div>
// //               <div className="flex justify-between text-[12px] sm:text-[13px] tracking-[0.5px] font-['Cormorant_Garamond',serif] text-[#2c1810]">
// //                 <span>Shipping</span>
// //                 <span>{shipping === 0 ? 'Free' : `₹ ${shipping.toLocaleString('en-IN')}`}</span>
// //               </div>
// //               <div className="flex justify-between text-[16px] sm:text-[18px] tracking-[1px] font-['Cinzel_Decorative',serif] text-[#2c1810] pt-3 border-t border-[#2c1810]/10">
// //                 <span>Total</span>
// //                 <span>₹ {total.toLocaleString('en-IN')}</span>
// //               </div>
// //             </div>

// //             <button className="w-full bg-[#c9a060] text-white py-3 sm:py-4 rounded-lg text-[12px] sm:text-[13px] tracking-[2px] font-['Cormorant_Garamond',serif] uppercase hover:bg-[#b8914f] transition-all shadow-lg">
// //               Proceed to Checkout
// //             </button>
// //           </div>
// //         )}
// //       </div>
// //     </>
// //   );
// // }
// import { X, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import { CartItem } from './ProductDetailPage';

// interface CartOverlayProps {
//   isOpen: boolean;
//   onClose: () => void;
//   cartItems: CartItem[];
//   onUpdateQuantity: (id: string, newQuantity: number) => void;
//   onRemoveItem: (id: string) => void;
// }

// export function CartOverlay({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }: CartOverlayProps) {
//   const navigate = useNavigate();
  
//   const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
//   const shipping = subtotal > 0 ? (subtotal > 2999 ? 0 : 99) : 0; // Updated shipping logic
//   const total = subtotal + shipping;

//   const handleProceedToCheckout = () => {
//     onClose(); // Close cart overlay first
//     navigate('/checkout'); // Navigate to checkout page
//   };

//   return (
//     <>
//       {/* Backdrop */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black/50 z-50 transition-opacity"
//           onClick={onClose}
//         />
//       )}

//       {/* Cart Overlay - Slides from Right */}
//       <div
//         className={`fixed top-0 right-0 h-full w-full sm:w-[420px] md:w-[480px] bg-[#fdfcf9] shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
//           isOpen ? 'translate-x-0' : 'translate-x-full'
//         }`}
//       >
//         {/* Header */}
//         <div className="flex items-center justify-between p-4 sm:p-6 border-b border-[#2c1810]/10">
//           <div className="flex items-center gap-3">
//             <div className="relative">
//               <ShoppingBag className="w-6 h-6 text-[#2c1810]" />
//               {cartItems.length > 0 && (
//                 <span className="absolute -top-2 -right-2 w-5 h-5 bg-[#c9a060] text-white text-xs rounded-full flex items-center justify-center">
//                   {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
//                 </span>
//               )}
//             </div>
//             <h2 className="text-[20px] sm:text-[24px] tracking-[1.5px] sm:tracking-[2px] font-['Cinzel_Decorative',serif] text-[#2c1810]">
//               Shopping Cart
//             </h2>
//           </div>
//           <button
//             onClick={onClose}
//             className="text-[#2c1810] hover:text-[#c9a060] transition-colors"
//             aria-label="Close cart"
//           >
//             <X className="w-5 h-5 sm:w-6 sm:h-6" />
//           </button>
//         </div>

//         {/* Cart Items */}
//         <div className="flex-1 overflow-y-auto p-4 sm:p-6 h-[calc(100vh-320px)] sm:h-[calc(100vh-280px)]">
//           {cartItems.length === 0 ? (
//             <div className="flex flex-col items-center justify-center h-full text-center">
//               <ShoppingBag className="w-12 h-12 sm:w-16 sm:h-16 text-[#2c1810]/20 mb-4" />
//               <p className="text-[14px] sm:text-[16px] tracking-[1px] font-['Cormorant_Garamond',serif] text-[#2c1810]/60 mb-8">
//                 Your cart is empty
//               </p>
//               <button
//                 onClick={onClose}
//                 className="px-6 py-2 border border-[#2c1810] text-[#2c1810] rounded-lg hover:bg-[#2c1810] hover:text-white transition-colors text-sm"
//               >
//                 Continue Shopping
//               </button>
//             </div>
//           ) : (
//             <div className="space-y-3 sm:space-y-4">
//               {cartItems.map((item) => (
//                 <div
//                   key={item.id}
//                   className="flex gap-2 sm:gap-3 bg-white rounded-lg p-2.5 sm:p-3 shadow-md border border-[#2c1810]/10 hover:shadow-lg transition-shadow"
//                 >
//                   {/* Product Image */}
//                   <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#f5f1e8] rounded-lg overflow-hidden flex-shrink-0">
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="w-full h-full object-cover"
//                       onError={(e) => {
//                         e.currentTarget.src = 'https://images.unsplash.com/photo-1568259550238-762d5f3d8e7f';
//                       }}
//                     />
//                   </div>

//                   {/* Product Info */}
//                   <div className="flex-1 flex flex-col justify-between min-w-0">
//                     <div>
//                       <h3 className="text-[12px] sm:text-[13px] tracking-[0.5px] font-['Cinzel_Decorative',serif] text-[#2c1810] mb-0.5 truncate">
//                         {item.name}
//                       </h3>
//                       <p className="text-[9px] sm:text-[10px] tracking-[1px] text-[#2c1810]/60 font-['Cormorant_Garamond',serif] uppercase">
//                         {item.collection} • Size: {item.size}
//                       </p>
//                       {item.discount > 0 && (
//                         <span className="inline-block bg-red-100 text-red-800 text-[9px] px-2 py-0.5 rounded-full mt-1">
//                           {item.discount}% OFF
//                         </span>
//                       )}
//                     </div>

//                     <div className="flex items-center justify-between mt-1.5 sm:mt-2">
//                       {/* Quantity Controls */}
//                       <div className="flex items-center gap-1">
//                         <button
//                           onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
//                           className="w-6 h-6 bg-[#f5f1e8] rounded text-[#2c1810] hover:bg-[#c9a060] hover:text-white transition-colors flex items-center justify-center"
//                           aria-label="Decrease quantity"
//                         >
//                           <Minus className="w-3 h-3" />
//                         </button>
//                         <span className="text-[11px] sm:text-[12px] tracking-[0.5px] font-['Cormorant_Garamond',serif] text-[#2c1810] w-6 text-center">
//                           {item.quantity}
//                         </span>
//                         <button
//                           onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
//                           className="w-6 h-6 bg-[#f5f1e8] rounded text-[#2c1810] hover:bg-[#c9a060] hover:text-white transition-colors flex items-center justify-center"
//                           aria-label="Increase quantity"
//                         >
//                           <Plus className="w-3 h-3" />
//                         </button>
//                       </div>

//                       {/* Price */}
//                       <div className="text-right">
//                         <p className="text-[12px] sm:text-[13px] tracking-[0.5px] font-['Cormorant_Garamond',serif] text-[#2c1810]">
//                           ₹ {(item.price * item.quantity).toLocaleString('en-IN')}
//                         </p>
//                         {item.discount > 0 && (
//                           <p className="text-[10px] text-green-600">
//                             Saved: ₹ {((item.price - (item.price - (item.price * item.discount / 100))) * item.quantity).toLocaleString('en-IN')}
//                           </p>
//                         )}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Remove Button */}
//                   <button
//                     onClick={() => onRemoveItem(item.id)}
//                     className="text-[#2c1810]/40 hover:text-red-600 transition-colors self-start"
//                     aria-label="Remove item"
//                   >
//                     <X className="w-4 h-4" />
//                   </button>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Footer with Total */}
//         {cartItems.length > 0 && (
//           <div className="border-t border-[#2c1810]/10 p-4 sm:p-6 bg-white">
//             <div className="space-y-2 sm:space-y-3 mb-4">
//               <div className="flex justify-between text-[12px] sm:text-[13px] tracking-[0.5px] font-['Cormorant_Garamond',serif] text-[#2c1810]">
//                 <span>Subtotal</span>
//                 <span>₹ {subtotal.toLocaleString('en-IN')}</span>
//               </div>
//               <div className="flex justify-between text-[12px] sm:text-[13px] tracking-[0.5px] font-['Cormorant_Garamond',serif] text-[#2c1810]">
//                 <span>Shipping</span>
//                 <span className={shipping === 0 ? 'text-green-600 font-medium' : ''}>
//                   {shipping === 0 ? 'FREE' : `₹ ${shipping.toLocaleString('en-IN')}`}
//                 </span>
//               </div>
              
//               {/* Free Shipping Progress */}
//               {subtotal < 2999 && (
//                 <div className="mt-2 mb-1">
//                   <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
//                     <div 
//                       className="h-full bg-green-500 transition-all duration-300"
//                       style={{ width: `${(subtotal / 2999) * 100}%` }}
//                     />
//                   </div>
//                   <p className="text-xs text-gray-600 mt-1 text-center">
//                     Add ₹{(2999 - subtotal).toLocaleString()} more for free shipping!
//                   </p>
//                 </div>
//               )}
              
//               <div className="flex justify-between text-[16px] sm:text-[18px] tracking-[1px] font-['Cinzel_Decorative',serif] text-[#2c1810] pt-3 border-t border-[#2c1810]/10">
//                 <span>Total</span>
//                 <span>₹ {total.toLocaleString('en-IN')}</span>
//               </div>
//             </div>

//             <div className="space-y-3">
//               <button
//                 onClick={handleProceedToCheckout}
//                 className="w-full bg-[#c9a060] text-white py-3 sm:py-4 rounded-lg text-[12px] sm:text-[13px] tracking-[2px] font-['Cormorant_Garamond',serif] uppercase hover:bg-[#b8914f] transition-all shadow-lg flex items-center justify-center gap-2 group"
//               >
//                 Proceed to Checkout
//                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//               </button>
              
//               <button
//                 onClick={onClose}
//                 className="w-full border border-[#2c1810] text-[#2c1810] py-2 rounded-lg hover:bg-[#2c1810] hover:text-white transition-colors text-sm"
//               >
//                 Continue Shopping
//               </button>
//             </div>

//             {/* Security Badges */}
//             <div className="flex justify-center gap-6 mt-6 pt-6 border-t border-gray-200">
//               <div className="text-center">
//                 <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-1">
//                   <span className="text-green-600 text-xs font-bold">✓</span>
//                 </div>
//                 <p className="text-xs text-gray-600">Secure Payment</p>
//               </div>
//               <div className="text-center">
//                 <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-1">
//                   <span className="text-blue-600 text-xs">🚚</span>
//                 </div>
//                 <p className="text-xs text-gray-600">Free Shipping</p>
//               </div>
//               <div className="text-center">
//                 <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-1">
//                   <span className="text-purple-600 text-xs">↩️</span>
//                 </div>
//                 <p className="text-xs text-gray-600">Easy Returns</p>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }
import { X, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { CartItem } from './ProductDetailPage';

interface CartOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, newQuantity: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void; // Add this new prop
}

export function CartOverlay({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem,
  onCheckout // Add this
}: CartOverlayProps) {
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 0 ? (subtotal > 2999 ? 0 : 99) : 0;
  const total = subtotal + shipping;

  const handleProceedToCheckout = () => {
    onClose(); // Close cart overlay
    onCheckout(); // Navigate to checkout page
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Cart Overlay */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] md:w-[480px] bg-[#fdfcf9] shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-[#2c1810]/10">
          <h2 className="text-[20px] sm:text-[24px] tracking-[1.5px] sm:tracking-[2px] font-['Cinzel_Decorative',serif] text-[#2c1810]">
            Shopping Cart
          </h2>
          <button
            onClick={onClose}
            className="text-[#2c1810] hover:text-[#c9a060] transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 h-[calc(100vh-320px)] sm:h-[calc(100vh-280px)]">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 sm:w-16 sm:h-16 text-[#2c1810]/20 mb-4" />
              <p className="text-[14px] sm:text-[16px] tracking-[1px] font-['Cormorant_Garamond',serif] text-[#2c1810]/60">
                Your cart is empty
              </p>
            </div>
          ) : (
            <div className="space-y-3 sm:space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-2 sm:gap-3 bg-white rounded-lg p-2.5 sm:p-3 shadow-md"
                >
                  {/* Product Image */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#f5f1e8] rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div>
                      <h3 className="text-[12px] sm:text-[13px] tracking-[0.5px] font-['Cinzel_Decorative',serif] text-[#2c1810] mb-0.5 truncate">
                        {item.name}
                      </h3>
                      <p className="text-[9px] sm:text-[10px] tracking-[1px] text-[#2c1810]/60 font-['Cormorant_Garamond',serif] uppercase">
                        {item.collection} • Size: {item.size}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-1.5 sm:mt-2">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          className="w-6 h-6 bg-[#f5f1e8] rounded text-[#2c1810] hover:bg-[#c9a060] hover:text-white transition-colors flex items-center justify-center"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-[11px] sm:text-[12px] tracking-[0.5px] font-['Cormorant_Garamond',serif] text-[#2c1810] w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 bg-[#f5f1e8] rounded text-[#2c1810] hover:bg-[#c9a060] hover:text-white transition-colors flex items-center justify-center"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Price */}
                      <p className="text-[12px] sm:text-[13px] tracking-[0.5px] font-['Cormorant_Garamond',serif] text-[#2c1810]">
                        ₹ {(item.price * item.quantity).toLocaleString('en-IN')}
                      </p>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-[#2c1810]/40 hover:text-red-600 transition-colors self-start"
                    aria-label="Remove item"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer with Total */}
        {cartItems.length > 0 && (
          <div className="border-t border-[#2c1810]/10 p-4 sm:p-6 bg-white">
            <div className="space-y-2 sm:space-y-3 mb-4">
              <div className="flex justify-between text-[12px] sm:text-[13px] tracking-[0.5px] font-['Cormorant_Garamond',serif] text-[#2c1810]">
                <span>Subtotal</span>
                <span>₹ {subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-[12px] sm:text-[13px] tracking-[0.5px] font-['Cormorant_Garamond',serif] text-[#2c1810]">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : `₹ ${shipping.toLocaleString('en-IN')}`}</span>
              </div>
              <div className="flex justify-between text-[16px] sm:text-[18px] tracking-[1px] font-['Cinzel_Decorative',serif] text-[#2c1810] pt-3 border-t border-[#2c1810]/10">
                <span>Total</span>
                <span>₹ {total.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Updated Checkout Button */}
            <button 
              onClick={handleProceedToCheckout}
              className="w-full bg-[#c9a060] text-white py-3 sm:py-4 rounded-lg text-[12px] sm:text-[13px] tracking-[2px] font-['Cormorant_Garamond',serif] uppercase hover:bg-[#b8914f] transition-all shadow-lg flex items-center justify-center gap-2"
            >
              Proceed to Checkout
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </>
  );
}