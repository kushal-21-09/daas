import React from "react";

const Signup = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-100">
      {/* Left Section (Info) */}
      <div className="lg:w-1/2 w-full bg-black  flex flex-col justify-center items-center p-10 text-left">
      <div className="flex gap-10">
      <h1 id="signup_heading" className=" text-white text-3xl lg:text-8xl font-bold mb-6 mr-40">
            <span className="font-medium">Get <br />into</span><br />DevOps.
          </h1>
        {/* <div>
          
          <p className="text-base lg:text-lg text-gray-600 mb-4">
            Improve your DevOps experience with our cutting-edge solutions:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Enhanced uptime</li>
            <li>Setup compliance-ready infrastructure in minutes</li>
            <li>Automate your routine DevOps tasks</li>
            <li>Enhance productivity</li>
            <li>Increase efficiency</li>
          </ul>
        </div> */}
      </div>
      
      </div>

      {/* Right Section (Signup Form) */}
      <div className="lg:w-1/2 w-full flex items-center justify-center p-6 md:p-10">
        <div className="bg-white p-6 md:p-8 shadow-lg rounded-lg w-full max-w-md">
          <h2 className="text-xl md:text-2xl font-semibold text-center text-gray-700 mb-4 md:mb-6">
            Sign Up
          </h2>

          <form className="space-y-4">
            {/* First Name */}
            <div>
              <label
                htmlFor="firstname"
                className="block text-sm font-medium text-gray-600"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                className="mt-1 block w-full px-4 py-2 border rounded-md text-gray-700 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your first name"
              />
            </div>

            {/* Last Name */}
            <div>
              <label
                htmlFor="lastname"
                className="block text-sm font-medium text-gray-600"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                className="mt-1 block w-full px-4 py-2 border rounded-md text-gray-700 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your last name"
              />
            </div>

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

            {/* Mobile Number */}
            <div>
              <label
                htmlFor="mobile"
                className="block text-sm font-medium text-gray-600"
              >
                Mobile Number
              </label>
              <input
                type="text"
                id="mobile"
                className="mt-1 block w-full px-4 py-2 border rounded-md text-gray-700 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your mobile number"
              />
            </div>

            {/* Goal */}
            <div>
              <label
                htmlFor="goal"
                className="block text-sm font-medium text-gray-600"
              >
                What do you want to achieve?
              </label>
              <input
                type="text"
                id="goal"
                className="mt-1 block w-full px-4 py-2 border rounded-md text-gray-700 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your goal"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-black border border-black  text-white px-6 py-2 rounded-md hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
