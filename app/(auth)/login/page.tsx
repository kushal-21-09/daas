import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-100">
      {/* Left Section (Info) */}
      {/* Left Section (Info) */}
      <div className="lg:flex w-1/2 hidden h-full bg-black flex-col justify-center items-center p-6 md:p-10 text-left">
        <h1
          id="auth_heading"
          className="text-white text-4xl md:text-6xl lg:text-8xl font-bold"
        >
          <span className="font-medium">
            Get <br />
            into
          </span>
          <br />
          DevOps.
        </h1>
      </div>

      {/* Right Section (Login Form) */}
      <div className="lg:w-1/2 w-full h-full flex items-center justify-center p-4 sm:p-6 md:p-10">
        <div className="bg-white p-6 md:p-8 shadow-lg rounded-lg w-full max-w-md">
          <h2 className="text-xl md:text-2xl font-semibold text-center text-gray-700 mb-4 md:mb-6">
            Login
          </h2>

          <form className="space-y-4">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-4 py-2 border rounded-md text-gray-700 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full px-4 py-2 border rounded-md text-gray-700 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
              />
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm text-gray-600">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="ml-2">Remember Me</span>
              </label>
              <Link
                href="/forgot-password"
                className="text-sm text-blue-500 hover:underline focus:outline-none"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-black border border-black text-white px-6 py-2 rounded-md hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
              >
                Login
              </button>
            </div>
          </form>

          {/* Sign Up Redirect */}
          <p className="text-sm text-gray-600 text-center mt-4">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="text-blue-500 hover:underline focus:outline-none"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
