import { Link, useNavigate } from "react-router-dom";
import { loginProcess } from "../../utils/apiUtils";
import InputForm from "../Elements/Input/InputForm";
import PasswordField from "../Elements/PasswordField";
import { useEffect } from "react";
import Animation from "../../../aos";

const LoginForm = () => {
  useEffect(() => {
    Animation();
  }, []);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    loginProcess(data, navigate);
  };

  return (
    <div className="w-full max-w-md mx-auto" data-aos="fade-down">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Login to <span className="italic underline text-[#0082E5]">TaRes</span></h1>
      <form onSubmit={handleLogin} className="space-y-6">
        <InputForm
          name="email"
          label="Email"
          type="email"
          placeholder="Enter Your Email ..."
        />
        <PasswordField
          name="password"
          label="Password"
          placeholder="Enter Your Password ..."
        />
        <button
          type="submit"
          className="w-full bg-[#0082E5] text-white py-3 rounded-md hover:bg-blue-700"
        >
          Login
        </button>
        <p className="mt-4 text-center text-sm">
          Don’t have an account?{" "}
          <Link to="/register" className="text-[#0082E5] hover:underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
