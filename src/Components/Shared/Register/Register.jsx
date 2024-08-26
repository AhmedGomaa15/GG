import React from 'react';

const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-center bg-cover" style={{ backgroundImage: "url(../)" }}>
      <div className="w-full max-w-md p-8 transition-all duration-500 transform bg-white shadow-2xl bg-opacity-80 rounded-3xl md:p-16 hover:scale-105">
        <h2 className="mb-4 text-3xl font-extrabold text-center text-gray-900">Create an Account</h2>
        <p className="mb-8 text-center text-gray-600">Sign up to get started</p>

        <form className="space-y-6">
          <div>
            <label className="block font-semibold text-gray-700">Username</label>
            <input 
              type="text" 
              placeholder="Enter your username" 
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e8e6f] focus:border-transparent transition-transform duration-300 transform hover:scale-105" 
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700">Email</label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e8e6f] focus:border-transparent transition-transform duration-300 transform hover:scale-105" 
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700">Password</label>
            <input 
              type="password" 
              placeholder="Enter your password" 
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e8e6f] focus:border-transparent transition-transform duration-300 transform hover:scale-105" 
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700">Confirm Password</label>
            <input 
              type="password" 
              placeholder="Confirm your password" 
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e8e6f] focus:border-transparent transition-transform duration-300 transform hover:scale-105" 
            />
          </div>

          <div className="flex items-center justify-between mt-4">
            <button className="px-4 py-2 bg-[#1e8e6f] hover:bg-[#166655] text-white font-bold rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 focus:outline-none">
              Sign Up
            </button>
          </div>
        </form>

        <p className="mt-8 text-sm text-center text-gray-700">
          Already have an account? 
          <a href="#" className="text-[#1e8e6f] hover:text-[#166655] font-bold hover:underline"> Sign in</a>
        </p>
      </div>
    </div>
  );
}

export default Register;
