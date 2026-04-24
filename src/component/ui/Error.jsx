// ServerError.jsx
import React from "react";
import Button from "./button";

const Error = ({ onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">

      {/* Animated icon */}
      <div className="relative mb-8">
        <div className="w-28 h-28 rounded-full bg-red-50 flex items-center justify-center animate-pulse">
          <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center">
            <svg
              className="w-10 h-10 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>
          </div>
        </div>

        {/* Floating dots */}
        <span className="absolute top-1 right-1 w-3 h-3 rounded-full bg-red-400 animate-bounce" style={{ animationDelay: "0s" }} />
        <span className="absolute bottom-2 left-0 w-2 h-2 rounded-full bg-orange-300 animate-bounce" style={{ animationDelay: "0.2s" }} />
        <span className="absolute top-4 left-2 w-2 h-2 rounded-full bg-red-300 animate-bounce" style={{ animationDelay: "0.4s" }} />
      </div>

      {/* Error code */}
      <p className="text-xs font-semibold tracking-widest text-red-400 uppercase mb-2">
        500 — Server Error
      </p>

      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-800 mb-3">
        Something went wrong
      </h1>

      {/* Description */}
      <p className="text-gray-500 text-sm max-w-xs leading-relaxed mb-8">
        The server is not responding. Please try again later or reload the page.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          onClick={onRetry}
          variant="danger"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
          </svg>
          Try again
        </Button>

        <Button
          onClick={() => window.location.href = "/"}
          variant="primary"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          Home Page
        </Button>
      </div>

    </div>
  );
};

export default Error;