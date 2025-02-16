import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Footer from "./components/Footer";
import { useAuth } from "./context/AuthContext";
import Login from './components/Login.jsx'

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const { user } = useAuth();
  const [isBlurred, setIsBlurred] = useState(false);
  const [toastShown, setToastShown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const productSection = document.getElementById("products");

      if (productSection) {
        const rect = productSection.getBoundingClientRect();
        const isAtProducts = rect.top < window.innerHeight / 2;

        if (!user && isAtProducts) {
          setIsBlurred(true);
          if (!toastShown) {
            toast.warn("Please log in to view products.");
            setToastShown(true);
          }
        } else {
          setIsBlurred(false);
          setToastShown(false); // Reset so toast can be shown again if user scrolls back
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [user, toastShown]);

  return (
    <Router>
      <div>
        <Navbar setShowLogin={setShowLogin} />
        <section id="home">
          <Home />
        </section>
        <section id="products" className={`${isBlurred ? "blur-md" : ""}`}>
          <Products />
        </section>
        <Footer />
      </div>

      {/* Show login modal if user tries to access products */}
      {isBlurred && !user && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex justify-center items-center z-50">
          <div className="text-white text-2xl font-bold text-center">
            Please log in to view the products.
          </div>
        </div>
      )}

      {showLogin && <Login setShowLogin={setShowLogin} />}
    </Router>
  );
};

export default App;
