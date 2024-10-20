const InputForm = ({ name, label, type, placeholder, value, onChange }) => {
  return (
    <div className="mb-6">
      <label htmlFor={name} className="text-gray-800 text-sm mb-2 block">
        {label}
      </label>
      <div className="relative flex items-center">
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required
          className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
        />
        {name === "email" && (
          <i className="bi bi-envelope-fill absolute right-4 text-gray-400"></i>
        )}
      </div>
    </div>
  );
};

export default InputForm;
