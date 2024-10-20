import { useSelector } from "react-redux";

const Footer = () => {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  return (
    <footer
      className={`text-center p-3 transition-all ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-blue-500 text-white"
      }`}
    >
      <p className="m-0 text-sm">
        Dibimbing.id | Bootcamp Front End Web Developer Batch 19 <br />
        &copy; Copyright 2024 Miftachul Huda
      </p>
    </footer>
  );
};

export default Footer;
