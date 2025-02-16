import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

const Navbar = ({ setShowLogin }) => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    toast.success("Logged out successfully!");
  };

  return (
    <nav className="navbar bg-[#1D232A] text-[#A6ADBB] shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Navbar Start */}
        <div className="flex items-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <GiHamburgerMenu className="h-6 w-6 text-[#A6ADBB]" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 w-44 bg-gray-800 text-[#A6ADBB] rounded-lg shadow-lg z-[1] p-2"
            >
              <li>
                <Link
                  to="home"
                  smooth={true}
                  duration={800}
                  offset={-80}
                  className="hover:text-gray-300 cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="products"
                  smooth={true}
                  duration={800}
                  offset={-80}
                  className="hover:text-gray-300 cursor-pointer"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link to="" className="hover:text-gray-300 cursor-pointer">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          <a className="text-2xl font-bold cursor-pointer tracking-wide text-[#A6ADBB] ml-3">
            ElectroStore
          </a>
        </div>

        {/* Navbar Center */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="home"
            smooth={true}
            duration={800}
            offset={-80}
            className="hover:text-gray-300 cursor-pointer transition"
          >
            Home
          </Link>
          <Link
            to="products"
            smooth={true}
            duration={800}
            offset={-80}
            className="hover:text-gray-300 cursor-pointer transition"
          >
            Products
          </Link>
          <Link to="" className="hover:text-gray-300 cursor-pointer transition">
            Cart
          </Link>
        </div>

        {/* Navbar End */}
        <div className="flex items-center space-x-3">
          {user ? (
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 rounded-lg shadow-md transition-all"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => setShowLogin(true)}
              className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 rounded-lg shadow-md transition-all"
            >
              Login
            </button>
          )}

          <div className="relative cursor-pointer p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
            <FaCartShopping className="text-xl text-gray-700" />
            <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0.5 shadow">
              3
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
