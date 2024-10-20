import { useState } from "react";

const PasswordField = ({ name, label, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-6">
      <label htmlFor={name} className="text-gray-800 text-sm mb-2 block">
        {label}
      </label>
      <div className="relative flex items-center">
        <input
          name={name}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          required
          className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
        />
        <i
          onClick={() => setShowPassword(!showPassword)}
          className={`bi ${
            showPassword ? "bi-eye-fill" : "bi-eye-slash-fill"
          } absolute right-4 text-gray-400 cursor-pointer`}
        ></i>
      </div>
    </div>
  );
};

export default PasswordField;
