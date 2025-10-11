import React from 'react';
import { products } from '../data/products';

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
                            <div className='product-image'>
                                <img
                                    src={product.imageUrl}
                                    alt={product.name} />
                            </div>
                            <div className='product-info'>
                                <h2 className='product-name'>{product.name}</h2>
                                <span>{`${product.type} - ${product.size}`}</span>
                            </div>
                            <div className="product-price">
                                <h2 style={{ fontSize: '1.2rem' }}>${product.price}</h2>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shop;