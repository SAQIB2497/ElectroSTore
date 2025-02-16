// main.jsx
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { ProductsProvider } from "./context/ProductsContext"; // Import the ProductsProvider
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ProductsProvider> {/* Wrap your App with ProductsProvider */}
      <ToastContainer position="top-center" autoClose={3000} />
      <App />
    </ProductsProvider>
  </AuthProvider>
);