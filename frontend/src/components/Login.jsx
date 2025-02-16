import { useState } from "react";
import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";


const Login = ({ setShowLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState("");

  // Google Sign-in
  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      toast.success(`Welcome, ${result.user.displayName || "User"}!`);
      setShowLogin(false);
    } catch (error) {
      toast.error("Google Sign-in failed. Try again.");
    }
  };

  // Email/Password Sign-in
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (isRegistering) {
        // If registering, create a new account
        await createUserWithEmailAndPassword(auth, email, password);
        toast.success("Account created successfully!");
      } else {
        // If logging in, sign in the user
        await signInWithEmailAndPassword(auth, email, password);
        toast.success("Logged in successfully!");
      }
      setShowLogin(false);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#1D232A] p-8 rounded-2xl shadow-lg text-white w-96 text-center border border-gray-700">
        <h2 className="text-2xl font-bold mb-6">{isRegistering ? "Create Account" : "Welcome Back"}</h2>

        {/* Error Message */}
        {error && <p className="text-red-500 mb-3">{error}</p>}

        {/* Email & Password Form */}
        <form onSubmit={handleEmailLogin} className="space-y-3">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 bg-gray-800 rounded-lg text-white border border-gray-600 focus:outline-none"
            required
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 bg-gray-800 rounded-lg text-white border border-gray-600 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition duration-300"
          >
            {isRegistering ? "Register" : "Login"}
          </button>
        </form>

        {/* Divider */}
        <div className="my-4 border-b border-gray-600"></div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center w-full bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition duration-300"
        >
          <FaGoogle className="mr-2" /> Sign in with Google
        </button>

        {/* Toggle Login/Register */}
        <p
          className="mt-4 text-gray-400 cursor-pointer hover:text-gray-300"
          onClick={() => setIsRegistering(!isRegistering)}
        >
          {isRegistering ? "Already have an account? Login" : "Don't have an account? Register"}
        </p>

        {/* Close Button */}
        <button
          onClick={() => setShowLogin(false)}
          className="mt-4 text-gray-400 hover:text-red-400 transition duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Login;
