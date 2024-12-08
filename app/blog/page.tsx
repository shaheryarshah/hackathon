// components/ShoppingCart.js
const ShoppingCart = () => {
    return (
        <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Blog Page</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="/blog.png"
              alt="Blog Image"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">
                Mauris at orci non vulputate diam tincidunt nec.
              </h2>
              <p className="text-gray-700 text-base mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                facilisis quis lectus vitae condimentum. Curabitur eu malesuada
                libero, vitae semper magna. Proin dignissim, adipiscing magna, non
                varius volutpat, lectus ex.
              </p>
            </div>
          </div>
        </div>
      </div>
    
    );
};

export default ShoppingCart;