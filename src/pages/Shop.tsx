import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/products';

interface ShopProps {
  searchQuery?: string;
}

export default function Shop({ searchQuery = '' }: ShopProps) {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Filter products based on search query
  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) {
      return products;
    }

    const query = searchQuery.toLowerCase();
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.scent.toLowerCase().includes(query) ||
        product.type.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-100 via-stone-50 to-stone-100">
      {/* Hero Section */}
      <div className="relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-rose-100/20 rounded-full blur-3xl" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className={`text-center mb-20 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-block mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-rose-300 to-transparent mb-8" />
            </div>
            <h1 className="text-6xl md:text-7xl font-extralight text-gray-900 mb-6 tracking-tight">
              Our Collection
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
              Discover our curated selection of premium fragrances,
              <br />
              each crafted to inspire and captivate.
            </p>
            {searchQuery && (
              <p className="text-lg text-gray-500 mt-6 font-light">
                Showing results for "<span className="text-rose-500">{searchQuery}</span>"
              </p>
            )}
          </div>

          {/* No Results Message */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-500 font-light mb-4">
                No products found matching "{searchQuery}"
              </p>
              <p className="text-gray-400 font-light">
                Try adjusting your search terms
              </p>
            </div>
          )}

          {/* Products Grid */}
          {filteredProducts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mb-20">
              {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => navigate(`/product/${product.id}`)}
              >
                {/* Product Card */}
                <div className="relative">
                  {/* Image Container */}
                  <div className="relative mb-6 overflow-hidden bg-gradient-to-br from-stone-100 to-stone-50">
                    <div className="aspect-[3/4] overflow-hidden">
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                      />
                    </div>

                    {/* Overlay gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Scent badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-xs font-light tracking-wider text-gray-700 uppercase">
                        {product.scent}
                      </span>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="text-center space-y-3">
                    <h3 className="text-2xl font-light text-gray-900 tracking-wide">
                      {product.name}
                    </h3>

                    <p className="text-sm text-gray-500 font-light tracking-wider uppercase">
                      {product.type} • {product.size}
                    </p>

                    <p className="text-sm text-gray-600 font-light leading-relaxed px-4 min-h-[3rem]">
                      {product.description}
                    </p>

                    {/* Price and CTA */}
                    <div className="pt-4 space-y-4">
                      <div className="text-3xl font-extralight text-gray-900 tracking-wide">
                        ${product.price}
                      </div>

                      <button className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white px-8 py-3 text-sm font-light tracking-widest uppercase transition-all duration-300 hover:shadow-2xl hover:shadow-gray-900/20 group-hover:from-rose-400 group-hover:to-amber-400">
                        Add to Collection
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          )}
        </div>
      </div>
    </div>
  );
}