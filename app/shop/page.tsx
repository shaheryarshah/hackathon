// components/ShopList.js
import React from 'react';

const products = [
    {
        name: 'Product 1',
        price: '$29.99',
        image: '/g1.png', // Path to the image in the public folder
    },
    {
        name: 'Product 2',
        price: '$39.99',
        image: '/g2.png',
    },
    {
        name: 'Product 3',
        price: '$49.99',
        image: '/g3.png',
    },
    {
        name: 'Product 4',
        price: '$59.99',
        image: '/g4.png',
    },
    {
        name: 'Product 5',
        price: '$69.99',
        image: '/g5.png',
    },
];

const ShopList = () => {
    return (
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Shop List</h2>
            <ul className="space-y-4">
                {products.map((product, index) => (
                    <li key={index} className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-4 rounded-md">
                        {/* Image */}
                        <div className="w-full md:w-1/3 mb-4 md:mb-0">
                            <img
                                src={product.image} // Using the image from the products array
                                alt={product.name}
                                className="w-[250px] h-[250px] object-cover rounded-md"
                            />
                        </div>
                        
                        {/* Product Name and Price */}
                        <div className="flex flex-col items-center md:items-start md:ml-4 w-full md:w-2/3">
                            <span className="text-lg font-semibold">{product.name}</span>
                            <span className="text-xl font-bold text-gray-700">{product.price}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShopList;

