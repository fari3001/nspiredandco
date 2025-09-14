import React from 'react';

const products = [
    { id: 1, name: 'T-Shirt', price: 19.99 },
    { id: 2, name: 'Hoodie', price: 39.99 },
    { id: 3, name: 'Cap', price: 14.99 },
];

const Shop: React.FC = () => {
    return (
        <div style={{ padding: '2rem' }}>
            <h1>Shop</h1>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {products.map(product => (
                    <li key={product.id} style={{ marginBottom: '1rem', border: '1px solid #eee', padding: '1rem', borderRadius: '8px' }}>
                        <h2 style={{ margin: 0 }}>{product.name}</h2>
                        <p style={{ margin: '0.5rem 0' }}>${product.price.toFixed(2)}</p>
                        <button>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Shop;