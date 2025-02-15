import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className="navbar bg-[#1D232A] text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Navbar Start */}
        <div className="flex items-center">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <GiHamburgerMenu className="h-6 w-6 text-white" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 w-44 bg-gray-800 text-white rounded-lg shadow-lg z-[1] p-2"
            >
              <li><a className="hover:text-gray-300">Home</a></li>
              <li><a className="hover:text-gray-300">Products</a></li>
              <li><a className="hover:text-gray-300">Cart</a></li>
            </ul>
          </div>

          {/* Brand Name */}
          <a className="text-2xl font-bold tracking-wide text-white ml-3">
            ElectroStore
          </a>
        </div>

        {/* Navbar Center (Visible on larger screens) */}
        <div className="hidden md:flex space-x-6">
          <a className="hover:text-gray-300 transition">Home</a>
          <a className="hover:text-gray-300 transition">Products</a>
          <a className="hover:text-gray-300 transition">Cart</a>
        </div>

        {/* Navbar End (Buttons) */}
        <div className="flex items-center space-x-4">
          {/* Login Button */}
          <a className="btn bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 text-white">
            Login
          </a>

          {/* Cart Icon with Badge */}
          <div className="relative cursor-pointer">
            <FaCartShopping className="text-xl" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
              3
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
