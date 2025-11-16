import { products } from '../data/products';

export default function Shop() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-gray-800 mb-4">
            Our Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Discover our curated selection of premium fragrances, each crafted to inspire and captivate.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-3 gap-8 mb-16">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group cursor-pointer"
            >
              {/* Product Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-2xl font-light text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 font-light mb-4">
                  {product.type} • {product.size}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-light text-gray-800">
                    ${product.price}
                  </span>
                  <button className="bg-gradient-to-r from-rose-400 to-amber-400 text-white px-6 py-2 rounded-full text-sm font-light hover:shadow-lg transition-all duration-300 hover:scale-105">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

 
      </div>


    </div>
  );
}