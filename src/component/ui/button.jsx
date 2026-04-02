import React from "react";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  onClick,
  type = "button",
  className = "",
}) => {
  const base =
    "px-6 py-3 flex w-fit cursor-pointer items-center justify-center rounded-lg font-medium transition-all focus:outline-none";

  const variants = {
    primary: "bg-brand text-white ",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
    outline: "border border-gray-400 text-gray-800 hover:bg-gray-100",
    danger: "bg-red-600 text-white hover:bg-red-700",
    success: "bg-green-600 text-white hover:bg-green-700",
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-5 py-2 text-base",
    lg: "px-7 py-3 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${base} ${variants[variant]} ${sizes[size]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};

export default Button;
