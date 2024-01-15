import React from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Navigate to "/signup"
    navigate("/signup");
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-yellow-500 to-red-500">
      <div className="bg-gray-100 p-8 rounded-md shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Forgot Password</h1>
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Enter your Email:
        </label>
        <input
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          type="password"
          id="password"
          placeholder="Password"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-4"
          type="button"
          onClick={handleButtonClick}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
