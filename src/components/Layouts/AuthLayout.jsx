import { useSelector } from "react-redux";
import Navbar from "../Fragments/Navbar";
import { ToastContainer } from "react-toastify";

const AuthLayout = ({ children }) => {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  return (
    <div className={`container-fluid p-0 m-0 ${isDarkMode && "dark-mode"}`}>
      {children}
      <ToastContainer position="top-center" theme="dark" autoClose={1000} />
    </div>
  );
};

export default AuthLayout;
