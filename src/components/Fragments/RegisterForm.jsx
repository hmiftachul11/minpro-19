import { useEffect } from "react";
import Animation from "../../../aos";
import InputForm from "../Elements/Input/InputForm";
import { registerProcess } from "../../utils/apiUtils";
import { Link, useNavigate } from "react-router-dom";
import PasswordField from "../Elements/PasswordField";

const RegisterForm = () => {
  const navigate = useNavigate();

  useEffect(() => {
    Animation();
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();
    const dataUser = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    const { email, password } = dataUser;
    registerProcess({ email, password }, navigate);
  };

  return (
    <div className="w-full max-w-md mx-auto" data-aos="fade-down">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">
        Welcome to{" "}
        <span className="italic underline text-[#0082E5]">TaRes</span>
      </h1>
      <p className="text-gray-600 mb-8">
        Creating your account is just one step away.
      </p>
      <form onSubmit={handleRegister} className="space-y-5">
        <InputForm
          name="firstName"
          label="First Name"
          type="text"
          placeholder="Enter Your First Name ..."
        />
        <InputForm
          name="lastName"
          label="Last Name"
          type="text"
          placeholder="Enter Your Last Name ..."
        />
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
          Let’s Get Started
        </button>
        <p className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-[#0082E5] hover:underline">
            Log In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
