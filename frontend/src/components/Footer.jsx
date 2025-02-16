import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import icons

const Footer = () => {
    return (
        <footer className="bg-[#1D232A] mt-32 text-gray-300 py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
                    {/* Brand Section */}
                    <div>
                        <h2 className="text-2xl font-semibold text-white">ElectroShop</h2>
                        <p className="text-gray-400 mt-2">
                            Your one-stop shop for the latest electronics at unbeatable prices.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold text-white">Quick Links</h3>
                        <ul className="mt-3 space-y-2">
                            <li>
                                <a href="#" className="hover:text-gray-400 transition">Home</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-400 transition">Shop</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-400 transition">About</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-400 transition">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div>
                        <h3 className="text-xl font-semibold text-white">Follow Us</h3>
                        <div className="flex justify-center md:justify-start mt-3 space-x-4">
                            <a href="#" className="hover:text-blue-400 transition text-2xl">
                                <FaFacebook /> {/* Use the imported icon */}
                            </a>
                            <a href="#" className="hover:text-blue-500 transition text-2xl">
                                <FaTwitter /> {/* Use the imported icon */}
                            </a>
                            <a href="#" className="hover:text-pink-500 transition text-2xl">
                                <FaInstagram /> {/* Use the imported icon */}
                            </a>
                            <a href="#" className="hover:text-blue-600 transition text-2xl">
                                <FaLinkedin /> {/* Use the imported icon */}
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 text-center text-gray-500 border-t border-gray-700 pt-4">
                    &copy; {new Date().getFullYear()} ElectroShop. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;