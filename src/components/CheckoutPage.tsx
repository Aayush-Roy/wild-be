// import React, { useState, useEffect } from 'react';
// import { 
//   ArrowLeft, 
//   ShoppingBag, 
//   MapPin, 
//   CreditCard, 
//   CheckCircle,
//   Loader,
//   Truck,
//   Shield,
//   RefreshCw
// } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const API_BASE_URL = "https://sohwais-be.onrender.com/api";

// interface CartItem {
//   id: string;
//   name: string;
//   price: number;
//   discount: number;
//   finalPrice: number;
//   size: string;
//   color: string;
//   quantity: number;
//   image: string;
//   productId: string;
// }

// interface CheckoutFormData {
//   name: string;
//   email: string;
//   mobile: string;
//   addressLine1: string;
//   addressLine2: string;
//   city: string;
//   state: string;
//   pincode: string;
//   country: string;
// }

// interface OrderSummary {
//   subtotal: number;
//   shipping: number;
//   tax: number;
//   discount: number;
//   total: number;
// }

// const CheckoutPage: React.FC<{ cartItems: CartItem[], onBack: () => void }> = ({ 
//   cartItems, 
//   onBack 
// }) => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [step, setStep] = useState<'address' | 'payment' | 'confirmation'>('address');
//   const [orderId, setOrderId] = useState<string>('');
//   const [paymentSuccess, setPaymentSuccess] = useState(false);
//   const [error, setError] = useState<string>('');

//   const [formData, setFormData] = useState<CheckoutFormData>({
//     name: '',
//     email: '',
//     mobile: '',
//     addressLine1: '',
//     addressLine2: '',
//     city: '',
//     state: '',
//     pincode: '',
//     country: 'India'
//   });

//   const [orderSummary, setOrderSummary] = useState<OrderSummary>({
//     subtotal: 0,
//     shipping: 0,
//     tax: 0,
//     discount: 0,
//     total: 0
//   });

//   // Calculate order summary
//   useEffect(() => {
//     const subtotal = cartItems.reduce((sum, item) => 
//       sum + (item.finalPrice * item.quantity), 0);
    
//     const shipping = subtotal > 2999 ? 0 : 99;
//     const tax = subtotal * 0.18; // 18% GST
//     const discount = cartItems.reduce((sum, item) => 
//       sum + ((item.price - item.finalPrice) * item.quantity), 0);
    
//     const total = subtotal + shipping + tax - discount;

//     setOrderSummary({
//       subtotal,
//       shipping,
//       tax: Math.round(tax),
//       discount,
//       total: Math.round(total)
//     });
//   }, [cartItems]);

//   // Load Razorpay script
//   useEffect(() => {
//     const loadRazorpay = () => {
//       return new Promise((resolve) => {
//         const script = document.createElement('script');
//         script.src = 'https://checkout.razorpay.com/v1/checkout.js';
//         script.onload = () => resolve(true);
//         script.onerror = () => resolve(false);
//         document.body.appendChild(script);
//       });
//     };

//     loadRazorpay();
//   }, []);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const validateForm = (): boolean => {
//     if (!formData.name.trim()) {
//       setError('Please enter your name');
//       return false;
//     }
//     if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
//       setError('Please enter a valid email');
//       return false;
//     }
//     if (!formData.mobile.trim() || !/^\d{10}$/.test(formData.mobile)) {
//       setError('Please enter a valid 10-digit mobile number');
//       return false;
//     }
//     if (!formData.addressLine1.trim()) {
//       setError('Please enter your address');
//       return false;
//     }
//     if (!formData.city.trim()) {
//       setError('Please enter your city');
//       return false;
//     }
//     if (!formData.state.trim()) {
//       setError('Please enter your state');
//       return false;
//     }
//     if (!formData.pincode.trim() || !/^\d{6}$/.test(formData.pincode)) {
//       setError('Please enter a valid 6-digit pincode');
//       return false;
//     }
//     return true;
//   };

//   const proceedToPayment = () => {
//     if (validateForm()) {
//       setStep('payment');
//       setError('');
//     }
//   };

//   const initiatePayment = async () => {
//     try {
//       setLoading(true);
//       setError('');

//       // Create order on backend
//       const response = await fetch(`${API_BASE_URL}/orders/create-order`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           items: cartItems.map(item => ({
//             productId: item.productId,
//             name: item.name,
//             price: item.price,
//             discount: item.discount,
//             finalPrice: item.finalPrice,
//             quantity: item.quantity,
//             size: item.size,
//             color: item.color,
//             image: item.image
//           })),
//           customer: {
//             name: formData.name,
//             email: formData.email,
//             mobile: formData.mobile
//           },
//           shippingAddress: {
//             addressLine1: formData.addressLine1,
//             addressLine2: formData.addressLine2,
//             city: formData.city,
//             state: formData.state,
//             pincode: formData.pincode,
//             country: formData.country
//           },
//           subtotal: orderSummary.subtotal,
//           shippingCharge: orderSummary.shipping,
//           tax: orderSummary.tax,
//           discount: orderSummary.discount,
//           totalAmount: orderSummary.total
//         })
//       });

//       const data = await response.json();

//       if (!data.success) {
//         throw new Error(data.message || 'Failed to create order');
//       }

//       setOrderId(data.order.orderId);

//       // Initialize Razorpay payment
//       const options = {
//         key: data.order.key,
//         amount: data.order.amount,
//         currency: data.order.currency,
//         name: 'Sohwais',
//         description: 'Traditional Clothing Purchase',
//         order_id: data.order.id,
//         handler: async (response: any) => {
//           // Verify payment on backend
//           await verifyPayment(response);
//         },
//         prefill: {
//           name: formData.name,
//           email: formData.email,
//           contact: formData.mobile
//         },
//         notes: {
//           address: `${formData.addressLine1}, ${formData.city}, ${formData.state} - ${formData.pincode}`
//         },
//         theme: {
//           color: '#c9a060'
//         },
//         modal: {
//           ondismiss: () => {
//             setLoading(false);
//           }
//         }
//       };

//       const rzp = new (window as any).Razorpay(options);
//       rzp.open();

//     } catch (error: any) {
//       console.error('Payment initiation error:', error);
//       setError(error.message || 'Failed to initiate payment');
//       setLoading(false);
//     }
//   };

//   const verifyPayment = async (paymentResponse: any) => {
//     try {
//       const response = await fetch(`${API_BASE_URL}/orders/verify-payment`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           razorpay_order_id: paymentResponse.razorpay_order_id,
//           razorpay_payment_id: paymentResponse.razorpay_payment_id,
//           razorpay_signature: paymentResponse.razorpay_signature,
//           orderId: orderId
//         })
//       });

//       const data = await response.json();

//       if (data.success) {
//         setPaymentSuccess(true);
//         setStep('confirmation');
//       } else {
//         setError('Payment verification failed');
//       }
//     } catch (error) {
//       console.error('Payment verification error:', error);
//       setError('Payment verification failed');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleContinueShopping = () => {
//     navigate('/');
//   };

//   if (cartItems.length === 0) {
//     return (
//       <div className="min-h-screen bg-[#fdfcf9] py-12">
//         <div className="max-w-3xl mx-auto px-4 text-center">
//           <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-6" />
//           <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
//           <p className="text-gray-600 mb-8">Add some traditional pieces to your cart first</p>
//           <button
//             onClick={onBack}
//             className="bg-[#c9a060] text-white px-8 py-3 rounded-lg hover:bg-[#b8914f] transition-colors"
//           >
//             Continue Shopping
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#fdfcf9] py-8 md:py-12">
//       <div className="max-w-6xl mx-auto px-4">
//         {/* Back Button */}
//         <button
//           onClick={onBack}
//           className="flex items-center gap-2 text-[#2c1810] hover:text-[#c9a060] mb-8"
//         >
//           <ArrowLeft className="w-5 h-5" />
//           Back to Cart
//         </button>

//         {/* Progress Steps */}
//         <div className="mb-8 md:mb-12">
//           <div className="flex items-center justify-between max-w-2xl mx-auto">
//             <div className="flex flex-col items-center">
//               <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
//                 step === 'address' ? 'bg-[#c9a060] text-white' : 'bg-gray-200 text-gray-600'
//               }`}>
//                 <MapPin className="w-5 h-5" />
//               </div>
//               <span className="text-sm mt-2">Address</span>
//             </div>
//             <div className="flex-1 h-1 bg-gray-300 mx-4"></div>
//             <div className="flex flex-col items-center">
//               <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
//                 step === 'payment' ? 'bg-[#c9a060] text-white' : 'bg-gray-200 text-gray-600'
//               }`}>
//                 <CreditCard className="w-5 h-5" />
//               </div>
//               <span className="text-sm mt-2">Payment</span>
//             </div>
//             <div className="flex-1 h-1 bg-gray-300 mx-4"></div>
//             <div className="flex flex-col items-center">
//               <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
//                 step === 'confirmation' ? 'bg-[#c9a060] text-white' : 'bg-gray-200 text-gray-600'
//               }`}>
//                 <CheckCircle className="w-5 h-5" />
//               </div>
//               <span className="text-sm mt-2">Confirmation</span>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Left Column - Form */}
//           <div className="lg:col-span-2">
//             {error && (
//               <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
//                 <p className="text-red-700">{error}</p>
//               </div>
//             )}

//             {step === 'address' && (
//               <div className="bg-white rounded-xl shadow-lg p-6">
//                 <h2 className="text-2xl font-bold text-[#2c1810] mb-6">Shipping Address</h2>
                
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Full Name *
//                     </label>
//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleInputChange}
//                       className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#c9a060] focus:border-transparent"
//                       placeholder="Enter your full name"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Email Address *
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#c9a060] focus:border-transparent"
//                       placeholder="your@email.com"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Mobile Number *
//                     </label>
//                     <input
//                       type="tel"
//                       name="mobile"
//                       value={formData.mobile}
//                       onChange={handleInputChange}
//                       className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#c9a060] focus:border-transparent"
//                       placeholder="10-digit mobile number"
//                       maxLength={10}
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Pincode *
//                     </label>
//                     <input
//                       type="text"
//                       name="pincode"
//                       value={formData.pincode}
//                       onChange={handleInputChange}
//                       className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#c9a060] focus:border-transparent"
//                       placeholder="6-digit pincode"
//                       maxLength={6}
//                       required
//                     />
//                   </div>

//                   <div className="md:col-span-2">
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Address Line 1 *
//                     </label>
//                     <input
//                       type="text"
//                       name="addressLine1"
//                       value={formData.addressLine1}
//                       onChange={handleInputChange}
//                       className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#c9a060] focus:border-transparent"
//                       placeholder="House no., Building, Street"
//                       required
//                     />
//                   </div>

//                   <div className="md:col-span-2">
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Address Line 2
//                     </label>
//                     <input
//                       type="text"
//                       name="addressLine2"
//                       value={formData.addressLine2}
//                       onChange={handleInputChange}
//                       className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#c9a060] focus:border-transparent"
//                       placeholder="Area, Landmark (optional)"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       City *
//                     </label>
//                     <input
//                       type="text"
//                       name="city"
//                       value={formData.city}
//                       onChange={handleInputChange}
//                       className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#c9a060] focus:border-transparent"
//                       placeholder="Enter your city"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       State *
//                     </label>
//                     <input
//                       type="text"
//                       name="state"
//                       value={formData.state}
//                       onChange={handleInputChange}
//                       className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#c9a060] focus:border-transparent"
//                       placeholder="Enter your state"
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="mt-8">
//                   <button
//                     onClick={proceedToPayment}
//                     className="w-full bg-[#c9a060] text-white py-3 rounded-lg font-medium hover:bg-[#b8914f] transition-colors"
//                   >
//                     Proceed to Payment
//                   </button>
//                 </div>
//               </div>
//             )}

//             {step === 'payment' && (
//               <div className="bg-white rounded-xl shadow-lg p-6">
//                 <h2 className="text-2xl font-bold text-[#2c1810] mb-6">Payment Method</h2>
                
//                 <div className="mb-8">
//                   <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg mb-4">
//                     <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center">
//                       <CreditCard className="w-5 h-5 text-white" />
//                     </div>
//                     <div className="flex-1">
//                       <h3 className="font-medium">Credit/Debit Card</h3>
//                       <p className="text-sm text-gray-600">Pay securely with your card</p>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
//                     <div className="w-12 h-8 bg-orange-500 rounded flex items-center justify-center">
//                       <div className="text-white font-bold text-sm">₹</div>
//                     </div>
//                     <div className="flex-1">
//                       <h3 className="font-medium">UPI</h3>
//                       <p className="text-sm text-gray-600">Pay using any UPI app</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
//                   <p className="text-yellow-800 text-sm">
//                     You'll be redirected to Razorpay's secure payment page to complete your purchase.
//                   </p>
//                 </div>

//                 <div className="flex gap-4">
//                   <button
//                     onClick={() => setStep('address')}
//                     className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
//                   >
//                     Back
//                   </button>
//                   <button
//                     onClick={initiatePayment}
//                     disabled={loading}
//                     className="flex-1 bg-[#c9a060] text-white py-3 rounded-lg font-medium hover:bg-[#b8914f] transition-colors disabled:opacity-50"
//                   >
//                     {loading ? (
//                       <span className="flex items-center justify-center gap-2">
//                         <Loader className="w-5 h-5 animate-spin" />
//                         Processing...
//                       </span>
//                     ) : (
//                       'Pay Now'
//                     )}
//                   </button>
//                 </div>
//               </div>
//             )}

//             {step === 'confirmation' && (
//               <div className="bg-white rounded-xl shadow-lg p-6 text-center">
//                 <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                   <CheckCircle className="w-10 h-10 text-green-600" />
//                 </div>
                
//                 <h2 className="text-2xl font-bold text-[#2c1810] mb-4">
//                   Order Confirmed!
//                 </h2>
                
//                 <p className="text-gray-600 mb-2">
//                   Thank you for your purchase. Your order has been successfully placed.
//                 </p>
                
//                 <p className="text-sm text-gray-500 mb-8">
//                   Order ID: <span className="font-mono font-medium">{orderId}</span>
//                 </p>

//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
//                   <div className="p-4 bg-blue-50 rounded-lg">
//                     <Truck className="w-6 h-6 text-blue-600 mx-auto mb-2" />
//                     <p className="text-sm font-medium">Free Shipping</p>
//                     <p className="text-xs text-gray-600">On orders above ₹2999</p>
//                   </div>
                  
//                   <div className="p-4 bg-green-50 rounded-lg">
//                     <Shield className="w-6 h-6 text-green-600 mx-auto mb-2" />
//                     <p className="text-sm font-medium">Secure Payment</p>
//                     <p className="text-xs text-gray-600">100% secure & encrypted</p>
//                   </div>
                  
//                   <div className="p-4 bg-purple-50 rounded-lg">
//                     <RefreshCw className="w-6 h-6 text-purple-600 mx-auto mb-2" />
//                     <p className="text-sm font-medium">Easy Returns</p>
//                     <p className="text-xs text-gray-600">7-day return policy</p>
//                   </div>
//                 </div>

//                 <div className="space-y-4">
//                   <button
//                     onClick={handleContinueShopping}
//                     className="w-full bg-[#c9a060] text-white py-3 rounded-lg font-medium hover:bg-[#b8914f] transition-colors"
//                   >
//                     Continue Shopping
//                   </button>
                  
//                   <button
//                     onClick={() => window.print()}
//                     className="w-full border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition-colors"
//                   >
//                     Print Receipt
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Right Column - Order Summary */}
//           <div className="lg:col-span-1">
//             <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
//               <h2 className="text-xl font-bold text-[#2c1810] mb-6">Order Summary</h2>
              
//               {/* Cart Items */}
//               <div className="space-y-4 mb-6">
//                 {cartItems.map((item) => (
//                   <div key={item.id} className="flex items-center gap-4">
//                     <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
//                       <img 
//                         src={item.image} 
//                         alt={item.name}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                     <div className="flex-1">
//                       <h4 className="font-medium text-gray-900">{item.name}</h4>
//                       <p className="text-sm text-gray-600">
//                         Size: {item.size} • Color: {item.color}
//                       </p>
//                       <div className="flex items-center justify-between">
//                         <span className="text-gray-900 font-medium">
//                           ₹{item.finalPrice.toLocaleString()} × {item.quantity}
//                         </span>
//                         {item.discount > 0 && (
//                           <span className="text-xs text-red-600 line-through">
//                             ₹{(item.price * item.quantity).toLocaleString()}
//                           </span>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Order Summary */}
//               <div className="border-t border-gray-200 pt-6">
//                 <div className="space-y-3">
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Subtotal</span>
//                     <span className="font-medium">₹{orderSummary.subtotal.toLocaleString()}</span>
//                   </div>
                  
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Shipping</span>
//                     <span className={orderSummary.shipping === 0 ? 'text-green-600 font-medium' : 'font-medium'}>
//                       {orderSummary.shipping === 0 ? 'FREE' : `₹${orderSummary.shipping}`}
//                     </span>
//                   </div>
                  
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Tax (GST 18%)</span>
//                     <span className="font-medium">₹{orderSummary.tax.toLocaleString()}</span>
//                   </div>
                  
//                   {orderSummary.discount > 0 && (
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Discount</span>
//                       <span className="text-green-600 font-medium">-₹{orderSummary.discount.toLocaleString()}</span>
//                     </div>
//                   )}
//                 </div>

//                 <div className="border-t border-gray-200 mt-4 pt-4">
//                   <div className="flex justify-between items-center">
//                     <span className="text-lg font-bold text-[#2c1810]">Total</span>
//                     <span className="text-2xl font-bold text-[#c9a060]">
//                       ₹{orderSummary.total.toLocaleString()}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Free Shipping Banner */}
//                 {orderSummary.subtotal < 2999 && (
//                   <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
//                     <p className="text-sm text-blue-800 text-center">
//                       Add ₹{(2999 - orderSummary.subtotal).toLocaleString()} more for FREE shipping!
//                     </p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;
import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ShoppingBag, 
  MapPin, 
  CreditCard, 
  CheckCircle,
  Loader,
  Truck,
  Shield,
  RefreshCw
} from 'lucide-react';

const API_BASE_URL = "http://localhost:5000/api";

interface CartItem {
  id: string;
  name: string;
  price: number;
  discount: number;
  finalPrice: number;
  size: string;
  color: string;
  quantity: number;
  image: string;
  productId: string;
}

interface CheckoutFormData {
  name: string;
  email: string;
  mobile: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
}

interface OrderSummary {
  subtotal: number;
  shipping: number;
  tax: number;
  discount: number;
  total: number;
}

const CheckoutPage: React.FC<{ cartItems: CartItem[], onBack: () => void }> = ({ 
  cartItems, 
  onBack 
}) => {
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<'address' | 'payment' | 'confirmation'>('address');
  const [orderId, setOrderId] = useState<string>('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [error, setError] = useState<string>('');
  console.log("cart",cartItems);
  const [formData, setFormData] = useState<CheckoutFormData>({
    name: '',
    email: '',
    mobile: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    pincode: '',
    country: 'India'
  });

  const [orderSummary, setOrderSummary] = useState<OrderSummary>({
    subtotal: 0,
    shipping: 0,
    tax: 0,
    discount: 0,
    total: 0
  });

  // Calculate order summary
  useEffect(() => {
    const subtotal = cartItems.reduce((sum, item) => 
      sum + (item.finalPrice * item.quantity), 0);
    
    const shipping = subtotal > 2999 ? 0 : 99;
    const tax = subtotal * 0.18; // 18% GST
    const discount = cartItems.reduce((sum, item) => 
      sum + ((item.price - item.finalPrice) * item.quantity), 0);
    
    const total = subtotal + shipping + tax - discount;

    setOrderSummary({
      subtotal,
      shipping,
      tax: Math.round(tax),
      discount,
      total: Math.round(total)
    });
  }, [cartItems]);

  // Load Razorpay script
  useEffect(() => {
    const loadRazorpay = () => {
      return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
      });
    };

    loadRazorpay();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setError('Please enter your name');
      return false;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Please enter a valid email');
      return false;
    }
    if (!formData.mobile.trim() || !/^\d{10}$/.test(formData.mobile)) {
      setError('Please enter a valid 10-digit mobile number');
      return false;
    }
    if (!formData.addressLine1.trim()) {
      setError('Please enter your address');
      return false;
    }
    if (!formData.city.trim()) {
      setError('Please enter your city');
      return false;
    }
    if (!formData.state.trim()) {
      setError('Please enter your state');
      return false;
    }
    if (!formData.pincode.trim() || !/^\d{6}$/.test(formData.pincode)) {
      setError('Please enter a valid 6-digit pincode');
      return false;
    }
    return true;
  };

  const proceedToPayment = () => {
    if (validateForm()) {
      setStep('payment');
      setError('');
    }
  };

  const initiatePayment = async () => {
    try {
      setLoading(true);
      setError('');

      // Create order on backend
      const response = await fetch(`${API_BASE_URL}/orders/create-order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: cartItems.map(item => ({
            productId: item.productId,
            name: item.name,
            price: item.price,
            discount: item.discount,
            finalPrice: item.finalPrice,
            quantity: item.quantity,
            size: item.size,
            color: item.color,
            image: item.image
          })),
          customer: {
            name: formData.name,
            email: formData.email,
            mobile: formData.mobile
          },
          shippingAddress: {
            addressLine1: formData.addressLine1,
            addressLine2: formData.addressLine2,
            city: formData.city,
            state: formData.state,
            pincode: formData.pincode,
            country: formData.country
          },
          subtotal: orderSummary.subtotal,
          shippingCharge: orderSummary.shipping,
          tax: orderSummary.tax,
          discount: orderSummary.discount,
          totalAmount: orderSummary.total
        })
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message || 'Failed to create order');
      }

      setOrderId(data.order.orderId);

      // Initialize Razorpay payment
      const options = {
        key: data.order.key,
        amount: data.order.amount,
        currency: data.order.currency,
        name: 'Sohwais',
        description: 'Traditional Clothing Purchase',
        // order_id: data.order.id,
          order_id: data.order.razorpayOrderId,
        handler: async (response: any) => {
          // Verify payment on backend
          await verifyPayment(response);
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.mobile
        },
        notes: {
          address: `${formData.addressLine1}, ${formData.city}, ${formData.state} - ${formData.pincode}`
        },
        theme: {
          color: '#c9a060'
        },
        modal: {
          ondismiss: () => {
            setLoading(false);
          }
        }
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();

    } catch (error: any) {
      console.error('Payment initiation error:', error);
      setError(error.message || 'Failed to initiate payment');
      setLoading(false);
    }
  };

  const verifyPayment = async (paymentResponse: any) => {
    try {
      const response = await fetch(`${API_BASE_URL}/orders/verify-payment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          razorpay_order_id: paymentResponse.razorpay_order_id,
          razorpay_payment_id: paymentResponse.razorpay_payment_id,
          razorpay_signature: paymentResponse.razorpay_signature,
          orderId: orderId
        })
      });

      const data = await response.json();

      if (data.success) {
        setPaymentSuccess(true);
        setStep('confirmation');
      } else {
        setError('Payment verification failed');
      }
    } catch (error) {
      console.error('Payment verification error:', error);
      setError('Payment verification failed');
    } finally {
      setLoading(false);
    }
  };

  const handleContinueShopping = () => {
    // Use the onBack prop or window.history as fallback
    if (onBack) {
      onBack();
    } else {
      // Fallback to browser history if onBack not provided
      window.history.back();
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#fdfcf9] py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Add some traditional pieces to your cart first</p>
          <button
            onClick={onBack}
            className="bg-[#c9a060] text-white px-8 py-3 rounded-lg hover:bg-[#b8914f] transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fdfcf9] py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#2c1810] hover:text-[#c9a060] mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Cart
        </button>

        {/* Progress Steps */}
        <div className="mb-8 md:mb-12">
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step === 'address' ? 'bg-[#c9a060] text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-sm mt-2">Address</span>
            </div>
            <div className="flex-1 h-1 bg-gray-300 mx-4"></div>
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step === 'payment' ? 'bg-[#c9a060] text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                <CreditCard className="w-5 h-5" />
              </div>
              <span className="text-sm mt-2">Payment</span>
            </div>
            <div className="flex-1 h-1 bg-gray-300 mx-4"></div>
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step === 'confirmation' ? 'bg-[#c9a060] text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                <CheckCircle className="w-5 h-5" />
              </div>
              <span className="text-sm mt-2">Confirmation</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Form */}
          <div className="lg:col-span-2">
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <p className="text-red-700">{error}</p>
              </div>
            )}

            {step === 'address' && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-[#2c1810] mb-6">Shipping Address</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#c9a060] focus:border-transparent"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#c9a060] focus:border-transparent"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#c9a060] focus:border-transparent"
                      placeholder="10-digit mobile number"
                      maxLength={10}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pincode *
                    </label>
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#c9a060] focus:border-transparent"
                      placeholder="6-digit pincode"
                      maxLength={6}
                      required
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Address Line 1 *
                    </label>
                    <input
                      type="text"
                      name="addressLine1"
                      value={formData.addressLine1}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#c9a060] focus:border-transparent"
                      placeholder="House no., Building, Street"
                      required
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Address Line 2
                    </label>
                    <input
                      type="text"
                      name="addressLine2"
                      value={formData.addressLine2}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#c9a060] focus:border-transparent"
                      placeholder="Area, Landmark (optional)"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#c9a060] focus:border-transparent"
                      placeholder="Enter your city"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      State *
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#c9a060] focus:border-transparent"
                      placeholder="Enter your state"
                      required
                    />
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    onClick={proceedToPayment}
                    className="w-full bg-[#c9a060] text-white py-3 rounded-lg font-medium hover:bg-[#b8914f] transition-colors"
                  >
                    Proceed to Payment
                  </button>
                </div>
              </div>
            )}

            {step === 'payment' && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-[#2c1810] mb-6">Payment Method</h2>
                
                <div className="mb-8">
                  <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg mb-4">
                    <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">Credit/Debit Card</h3>
                      <p className="text-sm text-gray-600">Pay securely with your card</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
                    <div className="w-12 h-8 bg-orange-500 rounded flex items-center justify-center">
                      <div className="text-white font-bold text-sm">₹</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">UPI</h3>
                      <p className="text-sm text-gray-600">Pay using any UPI app</p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <p className="text-yellow-800 text-sm">
                    You'll be redirected to Razorpay's secure payment page to complete your purchase.
                  </p>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => setStep('address')}
                    className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={initiatePayment}
                    disabled={loading}
                    className="flex-1 bg-[#c9a060] text-white py-3 rounded-lg font-medium hover:bg-[#b8914f] transition-colors disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader className="w-5 h-5 animate-spin" />
                        Processing...
                      </span>
                    ) : (
                      'Pay Now'
                    )}
                  </button>
                </div>
              </div>
            )}

            {step === 'confirmation' && (
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                
                <h2 className="text-2xl font-bold text-[#2c1810] mb-4">
                  Order Confirmed!
                </h2>
                
                <p className="text-gray-600 mb-2">
                  Thank you for your purchase. Your order has been successfully placed.
                </p>
                
                <p className="text-sm text-gray-500 mb-8">
                  Order ID: <span className="font-mono font-medium">{orderId}</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <Truck className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-sm font-medium">Free Shipping</p>
                    <p className="text-xs text-gray-600">On orders above ₹2999</p>
                  </div>
                  
                  <div className="p-4 bg-green-50 rounded-lg">
                    <Shield className="w-6 h-6 text-green-600 mx-auto mb-2" />
                    <p className="text-sm font-medium">Secure Payment</p>
                    <p className="text-xs text-gray-600">100% secure & encrypted</p>
                  </div>
                  
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <RefreshCw className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                    <p className="text-sm font-medium">Easy Returns</p>
                    <p className="text-xs text-gray-600">7-day return policy</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <button
                    onClick={handleContinueShopping}
                    className="w-full bg-[#c9a060] text-white py-3 rounded-lg font-medium hover:bg-[#b8914f] transition-colors"
                  >
                    Continue Shopping
                  </button>
                  
                  <button
                    onClick={() => window.print()}
                    className="w-full border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Print Receipt
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
              <h2 className="text-xl font-bold text-[#2c1810] mb-6">Order Summary</h2>
              
              {/* Cart Items */}
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{item.name}</h4>
                      <p className="text-sm text-gray-600">
                        Size: {item.size} • Color: {item.color}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-900 font-medium">
                          ₹{item.finalPrice.toLocaleString()} × {item.quantity}
                        </span>
                        {item.discount > 0 && (
                          <span className="text-xs text-red-600 line-through">
                            ₹{(item.price * item.quantity).toLocaleString()}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="border-t border-gray-200 pt-6">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">₹{orderSummary.subtotal.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className={orderSummary.shipping === 0 ? 'text-green-600 font-medium' : 'font-medium'}>
                      {orderSummary.shipping === 0 ? 'FREE' : `₹${orderSummary.shipping}`}
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax (GST 18%)</span>
                    <span className="font-medium">₹{orderSummary.tax.toLocaleString()}</span>
                  </div>
                  
                  {orderSummary.discount > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Discount</span>
                      <span className="text-green-600 font-medium">-₹{orderSummary.discount.toLocaleString()}</span>
                    </div>
                  )}
                </div>

                <div className="border-t border-gray-200 mt-4 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-[#2c1810]">Total</span>
                    <span className="text-2xl font-bold text-[#c9a060]">
                      ₹{orderSummary.total.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Free Shipping Banner */}
                {orderSummary.subtotal < 2999 && (
                  <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-sm text-blue-800 text-center">
                      Add ₹{(2999 - orderSummary.subtotal).toLocaleString()} more for FREE shipping!
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;