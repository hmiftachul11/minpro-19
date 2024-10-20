import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../../redux/reducers/usersReducer";
import UserForm from "./UserForm";
import { show } from "../../redux/reducers/modalShowReducer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserDetailCard = (props) => {
  const { first_name, last_name, email, avatar, id } = props;
  const dispatch = useDispatch();
  const listUser = useSelector((state) => state.users.users);

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
    toast.success(`${first_name} Deleted Successfully`);
    setTimeout(() => {
      const firstUserId = listUser[0].id;
      if (firstUserId === id) {
        window.location.href = `/user/${listUser[1]?.id || "/"}`;
      } else {
        window.location.href = `/user/${listUser[0].id}`;
      }
    }, 2000);
  };

  return (
    <>
      <UserForm formFor="edit" data={props} />
      <ToastContainer position="bottom-right" autoClose={2000} theme="dark" />

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-8 mt-20">
        {/* Avatar Image */}
        <div className="w-full max-w-xs">
          <img
            src={avatar}
            className="w-full h-auto rounded-lg shadow-md"
            alt={`${first_name}'s avatar`}
            data-aos="fade-right"
          />
        </div>

        {/* User Details */}
        <div
          className="w-full max-w-md space-y-4"
          data-aos="fade-left"
        >
          <ul className="space-y-2">
            <li className="text-lg font-medium">
              <span className="text-blue-500 font-semibold">ID: </span> {id}
            </li>
            <li className="text-lg font-medium">
              <span className="text-blue-500 font-semibold">First Name: </span>
              {first_name}
            </li>
            <li className="text-lg font-medium">
              <span className="text-blue-500 font-semibold">Last Name: </span>
              {last_name}
            </li>
            <li className="text-lg font-medium">
              <span className="text-blue-500 font-semibold">Email: </span>
              {email}
            </li>
          </ul>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mt-6 px-8">
        <button
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          onClick={() => dispatch(show())}
        >
          <i className="bi bi-pencil-fill"></i> Edit
        </button>
        <button
          className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
          onClick={() => handleDelete(id)}
        >
          <i className="bi bi-trash3-fill"></i> Delete
        </button>
        <Link
          to={`/`}
          className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition"
        >
          Back
        </Link>
      </div>
    </>
  );
};

export default UserDetailCard;
