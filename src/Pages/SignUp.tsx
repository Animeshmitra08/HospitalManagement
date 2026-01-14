import { Link } from "react-router-dom";
import { FaGoogle, FaFacebookF, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
    <Header/>
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 pt-18">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* Left Illustration */}
          <div className="hidden lg:flex items-center justify-center bg-blue-50 p-10">
            <img
              src="./assets/login-banner.webp"
              alt="Signup"
              className="max-w-full h-auto"
            />
          </div>

          {/* Right Form */}
          <div className="p-8 sm:p-10">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Sign Up <span className="text-blue-600">Doccure</span>
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Create your account to get started
              </p>
            </div>

            <form className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  E-mail
                </label>
                <input
                  type="email"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="you@example.com"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative mt-1">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              {/* Terms */}
              <div className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-600">
                  I agree to the{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Terms & Conditions
                  </a>
                </span>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 py-2.5 font-semibold text-white hover:bg-blue-700 transition"
              >
                Create Account
              </button>

              {/* Divider */}
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-gray-200" />
                <span className="text-sm text-gray-400">or</span>
                <div className="h-px flex-1 bg-gray-200" />
              </div>

              {/* Social */}
              <div className="space-y-3">
                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 py-2.5 text-sm font-medium hover:bg-gray-50"
                >
                  <FaGoogle className="text-red-500" />
                  Sign up with Google
                </button>

                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 py-2.5 text-sm font-medium hover:bg-gray-50"
                >
                  <FaFacebookF className="text-blue-600" />
                  Sign up with Facebook
                </button>
              </div>

              {/* Footer */}
              <p className="text-center text-sm text-gray-600">
                Already have an account?{" "}
                <Link to="/signin" className="text-blue-600 hover:underline">
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Signup;