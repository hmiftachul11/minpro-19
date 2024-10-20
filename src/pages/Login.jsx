import LoginForm from "../components/Fragments/LoginForm";
import AuthLayout from "../components/Layouts/AuthLayout";

const Login = () => {
  return (
    <AuthLayout>
      <div className="flex min-h-screen">
        {/* Kolom Formulir */}
        <div className="w-full md:w-1/2 bg-[#A9CBFF] flex flex-col justify-center px-12 py-16">
          <LoginForm />
        </div>

        {/* Kolom Gambar */}
        <div className="hidden md:flex md:w-1/2 items-center justify-center bg-white">
          <img
            src="https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?t=st=1729443248~exp=1729446848~hmac=7b24c87b4af423d131d7e5116e7dedb6997d946a5157b69c298f0dddf14d2609&w=1480"
            alt="Login Illustration"
            className="w-3/4 h-auto"
            data-aos="fade-left"
          />
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
