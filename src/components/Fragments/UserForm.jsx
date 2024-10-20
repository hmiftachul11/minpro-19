import InputForm from "../Elements/Input/InputForm";
import { hide } from "../../redux/reducers/modalShowReducer";
import { useDispatch, useSelector } from "react-redux";
import { addUser, editUser } from "../../redux/reducers/usersReducer";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserForm = ({ formFor, data }) => {
  const modalShow = useSelector((state) => state.modalShow.modalShow);
  const [user, setUser] = useState({
    id: data?.id || "",
    first_name: data?.first_name || "",
    last_name: data?.last_name || "",
    email: data?.email || "",
    avatar: data?.avatar || "",
  });
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    dispatch(addUser(user));
    toast.success(`${user.first_name} Added Successfully`);
    resetForm(e);
    dispatch(hide());
  };

  const handleEditUser = (e) => {
    e.preventDefault();
    dispatch(editUser(user));
    toast.info(`${user.first_name} Updated Successfully`);
    dispatch(hide());
  };

  const resetForm = (e) => {
    e.target.reset();
    setUser({ first_name: "", last_name: "", email: "", avatar: "" });
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-all duration-300 ${
          modalShow ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg w-full max-w-lg p-6 relative z-50">
          <button
            className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-gray-900 dark:text-white"
            onClick={() => dispatch(hide())}
          >
            &times;
          </button>
          <h1 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
            {formFor === "edit" ? "Edit User" : "Add User"}
          </h1>
          <form
            onSubmit={formFor === "edit" ? handleEditUser : handleAddUser}
            className="space-y-4"
          >
            <InputForm
              name="first_name"
              label="First Name"
              type="text"
              placeholder="Enter First Name"
              value={user.first_name}
              onChange={handleInputChange}
            />
            <InputForm
              name="last_name"
              label="Last Name"
              type="text"
              placeholder="Enter Last Name"
              value={user.last_name}
              onChange={handleInputChange}
            />
            <InputForm
              name="email"
              label="Email"
              type="email"
              placeholder="Enter Email"
              value={user.email}
              onChange={handleInputChange}
            />
            <InputForm
              name="avatar"
              label="Avatar Link"
              type="text"
              placeholder="Enter Avatar Link"
              value={user.avatar}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition"
            >
              {formFor === "edit" ? (
                <i className="bi bi-pencil mr-2"></i>
              ) : (
                <i className="bi bi-check-circle mr-2"></i>
              )}
              {formFor === "edit" ? "Edit" : "Save"}
            </button>
          </form>
        </div>
      </div>

      <ToastContainer position="bottom-right" theme="dark" autoClose={1000} />
    </>
  );
};

export default UserForm;
