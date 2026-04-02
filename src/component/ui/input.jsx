import React from "react";

const Input = ({
  label,
  type = "text",
  placeholder,
  name,
  value,
  onChange,
  error,
  className = "",
  ...props // বাকি সব প্রপস (যেমন: onBlur, required ইত্যাদি) এখানে চলে আসবে
}) => {
  // ডিফল্ট স্টাইলগুলো এখানে রাখা হয়েছে
  const defaultClasses =
    "px-4 py-2 border border-gray-300 rounded-md outline-none transition-all w-full";

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...props}
        /* এখানে ${className} শেষে থাকায় এটি আগের বর্ডার বা প্যাডিংকে ওভাররাইড করবে */
        className={`${defaultClasses} ${className} ${error ? "border-red-500" : ""}`}
      />

      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default Input;
