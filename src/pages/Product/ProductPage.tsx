import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Send, ShoppingBag, ArrowLeft } from 'lucide-react';
import { products } from '../../data/products';

type SizeOption = '10ml' | '20ml' | '30ml';

interface SizePrice {
  size: SizeOption;
  price: number;
}

const sizePricing: SizePrice[] = [
  { size: '10ml', price: 50 },
  { size: '20ml', price: 90 },
  { size: '30ml', price: 120 },
];

export default function ProductPage() {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedSize, setSelectedSize] = useState<SizeOption>('20ml');
  const [quantity, setQuantity] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Find the product
  const product = products.find((p) => p.id === productId);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-stone-100 via-stone-50 to-stone-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-4">Product Not Found</h2>
          <button
            onClick={() => navigate('/shop')}
            className="text-rose-400 hover:text-rose-500 transition-colors"
          >
            Return to Shop
          </button>
        </div>
      </div>
    );
  }

  const getCurrentPrice = () => {
    const sizeData = sizePricing.find((s) => s.size === selectedSize);
    return sizeData ? sizeData.price : 90;
  };

  const handleQuantityChange = (action: 'increase' | 'decrease') => {
    if (action === 'increase') {
      setQuantity((prev) => prev + 1);
    } else if (action === 'decrease' && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleInquiry = () => {
    setIsSubmitting(true);

    const inquiryDetails = {
      product: product.name,
      size: selectedSize,
      quantity: quantity,
      totalPrice: getCurrentPrice() * quantity,
    };

    // Simulate sending inquiry
    setTimeout(() => {
      console.log('Inquiry sent:', inquiryDetails);
      alert(
        `Thank you for your inquiry!\n\nProduct: ${inquiryDetails.product}\nSize: ${inquiryDetails.size}\nQuantity: ${inquiryDetails.quantity}\nEstimated Total: $${inquiryDetails.totalPrice}\n\nWe'll get back to you shortly.`
      );
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-100 via-stone-50 to-stone-100">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-rose-100/20 rounded-full blur-3xl" />
      <div className="absolute top-40 right-1/3 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-12">
        {/* Back Button */}
        <button
          onClick={() => navigate('/shop')}
          className={`mb-8 flex items-center gap-2 text-gray-600 hover:text-rose-400 transition-all duration-300 font-light tracking-wide ${
            isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
          }`}
        >
          <ArrowLeft size={20} strokeWidth={1.5} />
          Back to Shop
        </button>

        {/* Product Details */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Product Image */}
          <div className="relative">
            <div className="sticky top-8">
              <div className="relative overflow-hidden bg-gradient-to-br from-stone-100 to-stone-50 aspect-[3/4]">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />

                {/* Scent badge */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-5 py-3 rounded-full">
                  <span className="text-xs font-light tracking-wider text-gray-700 uppercase">
                    {product.scent}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Information */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="inline-block">
                <div className="h-px w-12 bg-gradient-to-r from-rose-300 to-transparent mb-6" />
              </div>
              <h1 className="text-5xl md:text-6xl font-extralight text-gray-900 tracking-tight">
                {product.name}
              </h1>
              <p className="text-lg text-gray-500 font-light tracking-wider uppercase">
                {product.type}
              </p>
            </div>

            {/* Description */}
            <div className="border-t border-b border-stone-200 py-6">
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Size Selection */}
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-900 tracking-widest uppercase">
                Select Size
              </label>
              <div className="grid grid-cols-3 gap-4">
                {sizePricing.map((sizeOption) => (
                  <button
                    key={sizeOption.size}
                    onClick={() => setSelectedSize(sizeOption.size)}
                    className={`py-4 px-6 border-2 transition-all duration-300 text-center ${
                      selectedSize === sizeOption.size
                        ? 'border-green-500 bg-green-50/50 text-gray-900'
                        : 'border-stone-300 bg-white hover:border-green-400 text-gray-600'
                    }`}
                  >
                    <div className="text-lg font-light">{sizeOption.size}</div>
                    <div className="text-sm text-gray-500 mt-1">${sizeOption.price}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selection */}
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-900 tracking-widest uppercase">
                Quantity
              </label>
              <div className="flex items-center gap-6">
                <button
                  onClick={() => handleQuantityChange('decrease')}
                  disabled={quantity === 1}
                  className="w-12 h-12 border-2 border-stone-300 hover:border-green-500 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center text-2xl font-light text-gray-700"
                >
                  -
                </button>
                <span className="text-3xl font-extralight text-gray-900 w-16 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange('increase')}
                  className="w-12 h-12 border-2 border-stone-300 hover:border-green-500 transition-all duration-300 flex items-center justify-center text-2xl font-light text-gray-700"
                >
                  +
                </button>
              </div>
            </div>

            {/* Price Display */}
            <div className="bg-gradient-to-br from-stone-50 to-rose-50/20 border border-stone-200/50 p-6">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-600 tracking-widest uppercase">
                  Total Price
                </span>
                <span className="text-4xl font-extralight text-gray-900">
                  ${getCurrentPrice() * quantity}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4 pt-4">
              <button
                onClick={handleInquiry}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white px-8 py-5 text-sm font-light tracking-widest uppercase transition-all duration-500 hover:shadow-2xl hover:shadow-gray-900/20 hover:from-rose-400 hover:to-amber-400 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  'Sending Inquiry...'
                ) : (
                  <>
                    <Send size={18} strokeWidth={1.5} />
                    Send Inquiry
                  </>
                )}
              </button>

              <button
                onClick={() => navigate('/shop')}
                className="w-full border-2 border-stone-300 text-gray-700 px-8 py-5 text-sm font-light tracking-widest uppercase transition-all duration-300 hover:border-rose-400 hover:text-rose-400 flex items-center justify-center gap-3"
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                Continue Shopping
              </button>
            </div>

            {/* Additional Info */}
            <div className="text-center text-sm text-gray-500 font-light pt-4 border-t border-stone-200">
              Need help choosing?{' '}
              <Link
                to="/contact"
                className="text-rose-400 hover:text-rose-500 transition-colors underline"
              >
                Contact us
              </Link>{' '}
              for personalized recommendations.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
