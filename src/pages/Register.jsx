import RegisterForm from "../components/Fragments/RegisterForm";
import AuthLayout from "../components/Layouts/AuthLayout";

const Register = () => {
  return (
    // <AuthLayout>
      <div className="flex min-h-screen" >
        {/* Kolom Formulir */}
        <div className="w-full md:w-1/2 bg-[#A9CBFF] flex flex-col justify-center px-12 py-16">
          <RegisterForm />
        </div>

        {/* Kolom Gambar */}
        <div className="hidden md:flex md:w-1/2 items-center justify-center bg-white">
          <img
            src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7965.jpg?t=st=1729415582~exp=1729419182~hmac=5605b3468cf55fe7312b3d72991df6ad3bf5bf44d8fb38e4d967161240449b55&w=1480"
            alt="Register Illustration"
            className="w-3/4 h-auto"
            data-aos="fade-left"
          />
        </div>
      </div>
    // </AuthLayout>
  );
};

export default Register;
