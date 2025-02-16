import { useProducts } from '../context/ProductsContext';
import { useNavigate } from "react-router-dom";

const ProductCard = () => {
  const { products, addToCart } = useProducts(); // Get addToCart from context
  const navigate = useNavigate();

  return (
    <>
      {products.map((product) => (
        <div
          key={product.id}
          className="card card-compact bg-base-100 shadow-xl transition duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
        >
          <figure className="px-4 pt-4">
            <img
              src={product.image}
              alt={product.name}
              className="rounded-xl h-48 w-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.name}</h2>
            <p className="text-sm text-gray-400">{product.description}</p>
            <div className="card-actions flex justify-between">
              <button className="btn bg-gradient-to-r from-gray-800 to-gray-900 hover:bg-gradient-to-br focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-800 text-white font-bold py-2 px-4 rounded-2xl transition duration-300 ease-in-out">
                <span className="bg-gray-700/50 px-2 py-1 rounded-md mr-1">
                  <span className="text-sm">$</span> {product.price}
                </span>
              </button>
              <button
                onClick={() => {
                  addToCart(product); // Add product to cart
                  navigate("/cart"); // Navigate to cart page
                }}
                className="btn bg-gradient-to-r from-blue-500 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 text-white font-bold py-2 px-4 rounded-2xl transition duration-300 ease-in-out"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
