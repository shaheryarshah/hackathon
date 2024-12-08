// components/GridDefault.js
import React from 'react';

const GridDefault = () => {
    // Mock data for images and titles (could be fetched from an API)
    const items = [
        { imgSrc: '/g1.png', title: 'Head phone' },
        { imgSrc: '/g2.png', title: 'Sofa' },
        { imgSrc: '/g3.png', title: 'Camera' },
        { imgSrc: '/g4.png', title: 'Smart Sofa' },
        { imgSrc: '/g5.png', title: 'Chair' },
        { imgSrc: '/g6.png', title: 'chair 2' },
        { imgSrc: '/g7.png', title: 'Watch' },
        { imgSrc: '/g8.png', title: 'Bag' },
        { imgSrc: '/tp4.png', title: 'Smart chair' },
        { imgSrc: '/tp3.png', title: 'Stylish Chair' },
        { imgSrc: '/g11.png', title: 'Android Watch' },
        { imgSrc: '/tp2.png', title: 'Red Chair' },
    ];

    return (
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Ecommerce Accessories & Fashion Items</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {/* Map over the items array */}
                {items.map((item, index) => (
                    <div key={index} className="bg-gray-200 h-[600px] flex flex-col justify-between rounded-lg overflow-hidden shadow-lg">
                        <img 
                            src={item.imgSrc} 
                            alt={item.title} 
                            className="w-full h-[400px] object-cover"
                        />
                        <div className="p-2 flex flex-col justify-between h-full">
                            <span className="text-lg font-semibold text-center">{item.title}</span>
                            <button className="mt-2 py-1 px-4 bg-blue-500 text-white rounded-md w-full">
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GridDefault;
