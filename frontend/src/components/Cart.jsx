const Cart = () => {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#1D232A] to-[#2A323C] p-4">
        <div className="card lg:card-side bg-[#1D232A] shadow-2xl rounded-2xl max-w-2xl border border-gray-700">
          <figure className="w-1/2">
            <img
              src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
              alt="Album"
              className="w-full h-full object-cover rounded-l-2xl"
            />
          </figure>
          <div className="card-body w-1/2 p-6 flex flex-col justify-center">
            <h2 className="card-title text-xl font-bold text-white">
              New Album Released!
            </h2>
            <p className="text-gray-300">Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions mt-4">
              <button className="btn bg-blue-500 hover:bg-blue-600 text-white w-full">
                Listen Now
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Cart;
  