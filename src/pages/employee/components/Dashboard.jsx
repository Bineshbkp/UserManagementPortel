import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersRequest } from "../userSlice";
import UserForm from "./UserForm";
import UserList from "./UserList";

const Dashboard = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.list);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    dispatch(fetchUsersRequest());
  }, [ ]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">User Management Portel</h1>
      <p className="text-gray-500 mb-6">Dashboard</p>

      <div
        className="bg-blue-600 text-white p-4 rounded cursor-pointer mb-6 w-48 "
        onClick={() => setShowForm(true)}
      >
        + Add User
      </div>

      {showForm && <UserForm onClose={() => setShowForm(false)} />}

      <UserList users={users} />
    </div>
  );
};

export default Dashboard;
