import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import foodbg from "../assets/foodbg.png";

const SigninLogin = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-gray-100 px-6">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg">
        {/* Top Image */}
        <div className="flex justify-center mb-6">
          <img
            src={foodbg}
            alt="Food Illustration"
            className="rounded-lg w-full max-w-xs"
          />
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center border-b pb-2">
          <button
            className={`w-1/2 text-lg font-medium py-2 transition ${
              isSignUp
                ? "border-b-2 border-green-500 text-green-600"
                : "text-gray-500"
            }`}
            onClick={() => setIsSignUp(true)}
          >
            Create Account
          </button>
          <button
            className={`w-1/2 text-lg font-medium py-2 transition ${
              !isSignUp
                ? "border-b-2 border-green-500 text-green-600"
                : "text-gray-500"
            }`}
            onClick={() => setIsSignUp(false)}
          >
            Login
          </button>
        </div>

        {/* Form */}
        <form className="mt-6 flex flex-col gap-5">
          {isSignUp && (
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
          )}
          <input
            type="email"
            placeholder="Email Address"
            className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />

          {/* Forgot Password (Only for Login) */}
          {!isSignUp && (
            <p className="text-right text-sm text-green-600 cursor-pointer hover:underline">
              Forgot Password?
            </p>
          )}

          <button
            type="submit"
            className="bg-green-500 text-white py-4 rounded-lg font-medium hover:bg-green-600 transition shadow-md text-lg"
          >
            {isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center justify-center my-6">
          <div className="w-full border-b"></div>
          <span className="mx-4 text-gray-400">or</span>
          <div className="w-full border-b"></div>
        </div>

        {/* Google Sign In */}
        <button className="flex items-center justify-center border py-4 rounded-lg w-full hover:bg-gray-100 transition text-lg">
          <FcGoogle className="mr-3 text-2xl" />
          {isSignUp ? "Sign up with Google" : "Login with Google"}
        </button>
      </div>
    </div>
  );
};

export default SigninLogin;
