import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setDarkMode } from "../../redux/reducers/darkModeReducers";
import { useDispatch, useSelector } from "react-redux";

const Navbar = ({ active }) => {
  const token = localStorage.getItem("token");
  const [navStyle, setNavStyle] = useState("");
  const navigate = useNavigate();
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setNavStyle("bg-gray-800 shadow-md text-white");
      } else {
        setNavStyle("");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 shadow-lg ${navStyle} ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          className="text-xl font-bold italic text-blue-500"
          to="/"
        >
          TaRes
        </Link>

        {token ? (
          <>
            {/* Navbar Links */}
            <div className="hidden md:flex items-center space-x-6">
              <Link
                className={`text-sm font-medium ${
                  active === "List User" ? "text-blue-500" : "text-gray-600"
                } hover:text-blue-500`}
                to="/"
              >
                List User
              </Link>
              <Link
                className={`text-sm font-medium ${
                  active === "User" ? "text-blue-500" : "text-gray-600"
                } hover:text-blue-500`}
                to="/user/1"
              >
                User Profile
              </Link>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition"
                onClick={handleLogout}
              >
                Logout
              </button>
              <button
                className="flex items-center px-4 py-2 border rounded-full hover:bg-gray-200 transition"
                onClick={() => dispatch(setDarkMode())}
              >
                <i
                  className={`bi ${
                    isDarkMode
                      ? "bi-brightness-high-fill"
                      : "bi-moon-stars-fill"
                  } mr-2`}
                ></i>
                {isDarkMode ? "Light" : "Dark"}
              </button>
            </div>
          </>
        ) : (
          <div className="flex items-center space-x-4">
            <button
              className="flex items-center px-4 py-2 border rounded-full hover:bg-gray-200 transition"
              onClick={() => dispatch(setDarkMode())}
            >
              <i
                className={`bi ${
                  isDarkMode
                    ? "bi-brightness-high-fill"
                    : "bi-moon-stars-fill"
                } mr-2`}
              ></i>
              {isDarkMode ? "Light" : "Dark"}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
