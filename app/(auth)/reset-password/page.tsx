import Link from "next/link";
import React from "react";

const ResetPassword = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-100">
     
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

      {/* Right Section (Reset Password Form) */}
      <div className="lg:w-1/2 w-full h-full flex items-center justify-center p-4 sm:p-6 md:p-10">
        <div className="bg-white p-6 md:p-8 shadow-lg rounded-lg w-full max-w-md">
          <h2 className="text-xl md:text-2xl font-semibold text-center text-gray-700 mb-4 md:mb-6">
            Reset Password
          </h2>

          <form className="space-y-4">
            {/* New Password */}
            <div>
              <label
                htmlFor="new-password"
                className="block text-sm font-medium text-gray-600"
              >
                New Password
              </label>
              <input
                type="password"
                id="new-password"
                className="mt-1 block w-full px-4 py-2 border rounded-md text-gray-700 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your new password"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-gray-600"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                className="mt-1 block w-full px-4 py-2 border rounded-md text-gray-700 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Confirm your new password"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-black border border-black text-white px-6 py-2 rounded-md hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
              >
                Update Password
              </button>
            </div>
          </form>

          {/* Back to Login */}
          <p className="text-sm text-gray-600 text-center mt-4">
            Go back to{" "}
            <Link
              href="/login"
              className="text-blue-500 hover:underline focus:outline-none"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
