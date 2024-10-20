import { useEffect, useState } from "react";
import Pagination from "../components/Fragments/Pagination";
import Card from "../components/Fragments/Card";
import Layout from "../components/Layouts/Layout";
import UserForm from "../components/Fragments/UserForm";
import { show } from "../redux/reducers/modalShowReducer";
import { useDispatch, useSelector } from "react-redux";
import { getListUsers } from "../utils/apiUtils";
import { setUsers } from "../redux/reducers/usersReducer";

const ListUser = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const listUsers = useSelector((state) => state.users.users);
  const [totalPages, setTotalPages] = useState(2);
  const dispatch = useDispatch();
  useEffect(() => {
    let users = JSON.parse(localStorage.getItem("users"));
    if (!users) {
      users = getListUsers().then((res) => {
        localStorage.setItem("users", JSON.stringify(res));
        dispatch(setUsers(res));
        window.location.reload();
        return res;
      });
    }
  }, []);
  useEffect(() => {
    setTotalPages(Math.ceil(listUsers.length / itemsPerPage));
  }, [listUsers]);

  return (
    <Layout navActive="List User">
      <UserForm />
      <div className="container mx-auto p-8 h-screen">
        <h1 className="text-center text-3xl font-semibold text-blue-500">
          Hello TaRes Users!
        </h1>

        {/* Button Add User */}
        <button
          className="flex items-center justify-center gap-2 mx-auto my-5 bg-blue-500 text-white text-lg py-2 px-6 rounded-md hover:bg-blue-600"
          onClick={() => dispatch(show())}
        >
          <i className="bi bi-person-plus-fill"></i>
          Add User
        </button>

        {/* User List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {listUsers.slice(startIndex, endIndex).map((user) => (
            <Card key={user.id} {...user} />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-6">
          <Pagination page={page} setPage={setPage} pages={totalPages} />
        </div>
      </div>
    </Layout>
  );
};

export default ListUser;
