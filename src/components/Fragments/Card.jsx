import { Link } from "react-router-dom";
import Animation from "../../../aos";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Card = (props) => {
  const { avatar, id, first_name, email } = props;
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  useEffect(() => {
    Animation();
  }, [isDarkMode]);

  return (
    <div
      className={`shadow-md rounded-lg p-4 transition-all hover:shadow-lg ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
      data-aos="fade-up"
      data-aos-delay={`${(id % 7) * 100}`}
    >
      <Link to={`/user/${id}`} className="no-underline text-inherit">
        {/* Image Container */}
        <div className="flex justify-center mb-4">
          <img
            src={avatar}
            alt={`${first_name}'s avatar`}
            className="rounded-full w-32 h-32 object-cover"
          />
        </div>

        {/* Card Body */}
        <div className="text-center">
          <p className="font-semibold text-lg border-b-2 border-blue-500 pb-2">
            {first_name}
          </p>
          <p className="text-sm ">{email}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
