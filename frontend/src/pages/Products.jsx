// pages/Products.jsx
import ProductCard from "../components/ProductCard";

const Products = () => {
  return (
    <div className="container mx-auto px-4 mt-44">
      <h2 className="text-center mt-10 font-bold text-[32px]">Best Selling Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5 mt-5">
        <ProductCard />
      </div>
    </div>
  );
};

export default Products;