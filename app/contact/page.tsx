// components/ContactUs.js
const ContactUs = () => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>

            <div className="flex flex-col lg:flex-row justify-between mb-8">
                {/* Information About Us */}
                <div className="bg-white shadow-md rounded-lg p-6 mb-4 lg:mb-0 lg:w-1/2">
                    <h2 className="text-xl font-semibold mb-4">Information About Us</h2>
                    <p>
                        We provide exceptional services to meet your needs. Our dedicated team is 
                        always available for your questions and support.
                    </p>
                </div>

                {/* Contact Way */}
                <div className="bg-white shadow-md rounded-lg p-6 lg:w-1/2">
                    <h2 className="text-xl font-semibold mb-4">Contact Way</h2>
                    <ul className="space-y-3">
                        <li className="flex items-center">
                            <span className="text-blue-500 mr-2">📞</span>
                            <span>Phone: +123 456 7890</span>
                        </li>
                        <li className="flex items-center">
                            <span className="text-green-500 mr-2">📧</span>
                            <span>Email: info@example.com</span>
                        </li>
                        <li className="flex items-center">
                            <span className="text-red-500 mr-2">🌐</span>
                            <span>Website: www.example.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Get In Touch Form */}
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Get In Touch</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            className="w-full p-2 border border-gray-300 rounded" 
                            placeholder="Your Name" 
                            required 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            className="w-full p-2 border border-gray-300 rounded" 
                            placeholder="Your Email" 
                            required 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            className="w-full p-2 border border-gray-300 rounded" 
                            rows="4" 
                            placeholder="Your Message" 
                            required 
                        ></textarea>
                    </div>
                    <button className="bg-pink-500 text-white px-4 py-2 rounded">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;