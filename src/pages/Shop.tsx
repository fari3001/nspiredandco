import React from 'react';
import {products} from '../data/products';

const Shop: React.FC = () => {
    return (
        <div className="shop-container">
            <div className="component-header">
                <h1>Our Collection</h1>
            </div>
        <div className="products-container">
            {products.map((product) => (
                <div className="product-wrapper">
                    <div
                        key={product.id}
                        className="shop-product-card">
                        <img
                            src={product.imageUrl}
                            alt={product.name}
                        />
                        <h2 style={{ fontSize: '1.2rem', margin: '0.5rem 0' }}>${product.price}</h2>
                        <p className='product-name'>{product.name}</p>
                        <p className='product-size'>{product.size}</p>
                        {/* <p style={{ fontWeight: 'bold' }}>${product.price.toFixed(2)}</p> */}
                    </div>
            </div>
                ))}
        </div>
        </div>
    );
};

export default Shop;