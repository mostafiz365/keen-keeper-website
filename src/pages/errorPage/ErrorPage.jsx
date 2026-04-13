import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white px-4">
      <div className="text-center max-w-lg">
        {/* Error Code */}
        <h1 className="text-8xl font-extrabold tracking-widest">404</h1>

        {/* Subtitle */}
        <p className="mt-4 text-2xl font-semibold">
          Oops! Page not found
        </p>

        {/* Description */}
        <p className="mt-2 text-gray-200">
          The page you're looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <div className="mt-6">
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
          >
            Go Back Home
          </Link>
        </div>

        {/* Decorative Element */}
        <div className="mt-10 text-sm text-gray-200 opacity-80">
          Error Code: 404 | Not Found
        </div>
      </div>
    </div>
    );
};

export default ErrorPage;