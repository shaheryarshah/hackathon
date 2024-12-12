import Image from "next/image";
import React from "react";

const Products = () => {
  return (
    <div className="bg-gray-50 container px-5 mx-auto">
    {/* Trending Products Section */}
<section className="py-16 px-4">
  <h2 className="text-3xl font-bold text-center mb-8">Trending Products</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {[
      { img: "/tp1.png", name: "Comfort Chair", price: "Under $100" },
      { img: "/tp2.png", name: "Modern Lamp", price: "Under $50" },
      { img: "/tp3.png", name: "Desk Organizer", price: "Under $30" },
      { img: "/tp4.png", name: "Bluetooth Speaker", price: "Under $80" }
    ].map((product, idx) => (
      <div key={idx} className="bg-white p-4 rounded-lg shadow-md text-center">
        <img
          src={product.img}
          alt="Product Image"
          className="h-32 mx-auto mb-4"
        />
        <h3 className="font-medium">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.price}</p>
      </div>
    ))}
  </div>
</section>

     
      {/* Discount Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">90% Discount Of All Products</h2>
            <p className="text-gray-500 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              exercitationem rerum.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-pink-500 mr-2">✔</span>
                High-quality materials
              </li>
              <li className="flex items-center">
                <span className="text-pink-500 mr-2">✔</span>
                Unique designs
              </li>
              <li className="flex items-center">
                <span className="text-pink-500 mr-2">✔</span>
                Affordable prices
              </li>
            </ul>
            <button className="mt-6 px-6 py-2 bg-pink-500 text-white rounded-full shadow-md">
              Shop Now
            </button>
          </div>
          <div className="flex justify-center">
            <img
              src="/chair.png"
              alt="Discount Chair"
              className="h-64 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Top Categories Section */}
<section className="py-16 px-4 ">
  <h2 className="text-3xl font-bold text-center mb-8">Top Categories</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {[
      { img:  "/tc1.png", title: "Mini LCW Chair", price: "$300"   },
      { img: "/tc2.png", title: "Modern Sofa", price: "$500" },
      { img: "/tc3.png", title: "Office Desk", price: "$200" },
      { img: "/tc4.png", title: "Wooden Coffee Table", price: "$150" },
     
    ].map((category, idx) => (
      <div
        key={idx}
        className="flex flex-col border-2 m-4 items-center rounded-lg bg-slate-200 shadow-lg"
      >
        <img
          src={category.img}
          alt={category.title}
          className="h-80 mb-4"
        />
        <h3 className="font-medium">{category.title}</h3>
        <p className="text-sm text-gray-500">{category.price}</p>
      </div>
    ))}
  </div>
</section>


      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-white">
       
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-4">Get Latest Updates By Subscribing</h2>
          <p className="text-gray-500 mb-6">
            Stay updated with the latest trends and exclusive discounts.
          </p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border rounded-l-md focus:outline-none"
            />
            <button className="px-6 py-2 bg-pink-500 text-white rounded-r-md">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Latest Blog Section */}
      <section className="py-16 px-4">
  <h2 className="text-3xl font-bold text-center mb-8">Latest Blog</h2>
  <div className="grid  grid-cols-1 md:grid-cols-3 gap-6">
    {[
      { img: "/1a.png", title: "How to Choose the Right Chair", description: "Learn how to choose the best chair for comfort and style." },
      { img: "/1b.png", title: "Top Home Decor Trends", description: "Discover the latest trends in home decor for 2024." },
      { img: "/1c.png", title: "5 Tips for Organizing Your Home", description: "Get organized with these simple and effective home organization tips." }
    ].map((blog, idx) => (
      <div key={idx} className="bg-white p-4 rounded-lg shadow-md">
        <img
          src={blog.img}
          alt="Blog Post"
          className="h-80 w-full object-cover rounded-lg mb-4"
        />
        <h3 className="font-medium text-lg mb-2">{blog.title}</h3>
        <p className="text-sm text-gray-500 mb-4">
          {blog.description}
        </p>
        <button className="text-pink-500 font-medium">Read More</button>
      </div>
    ))}
  </div>
</section>

    </div>
  );
};

export default Products;
