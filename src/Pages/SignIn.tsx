import { Link } from "react-router-dom";
import { FaGoogle, FaFacebookF, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
    <Header/>
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* Left Illustration */}
          <div className="hidden lg:flex items-center justify-center bg-blue-50 p-10">
            <img
              src="./assets/login-banner.webp"
              alt="Signin"
              className="max-w-full h-auto"
            />
          </div>

          {/* Right Form */}
          <div className="p-8 sm:p-10">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Sign In <span className="text-blue-600">Doccure</span>
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Welcome back. Please login to your account
              </p>
            </div>

            <form className="space-y-5">
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
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <Link
                    to="/forgot-password"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>

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

              {/* Remember & OTP */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-gray-600">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  Remember me
                </label>

                <label className="flex items-center gap-2 text-gray-600">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  Login with OTP
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 py-2.5 font-semibold text-white hover:bg-blue-700 transition"
              >
                Sign In
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
                  Sign in with Google
                </button>

                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 py-2.5 text-sm font-medium hover:bg-gray-50"
                >
                  <FaFacebookF className="text-blue-600" />
                  Sign in with Facebook
                </button>
              </div>

              {/* Footer */}
              <p className="text-center text-sm text-gray-600">
                Don’t have an account?{" "}
                <Link to="/signup" className="text-blue-600 hover:underline">
                  Sign up
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

export default SignIn;