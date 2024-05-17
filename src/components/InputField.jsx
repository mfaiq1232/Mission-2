import React from "react";

const InputField = ({ name, type, placeholder }) => {
  return (
    <div>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border bg-gray-5 px-3 py-2 text-gray-800 outline-none ring-indigo-300 focus:ring dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500"
      />
    </div>
  );
};

export default InputField;
