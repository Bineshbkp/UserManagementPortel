import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import {
  getUsersRequest,
  deleteUserRequest,
  updateUserSuccess
} from '../action';

import {
  selectUserList,
  selectUserLoading,
  selectUserError
} from '../selector';

import { userSchema } from '../validate';

const UserList = () => {
  const dispatch = useDispatch();

  const users = useSelector(selectUserList);
  const loading = useSelector(selectUserLoading);
  const error = useSelector(selectUserError);

  const [editingUser, setEditingUser] = useState(null);

  // react-hook-form with yup validation
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  // Fetch users on load
  useEffect(() => {
    dispatch(getUsersRequest());
  }, [dispatch]);

  // ---------------- Delete ----------------
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      dispatch(deleteUserRequest(id));
    }
  };

  // ---------------- Edit ----------------
  const handleEditClick = (user) => {
    setEditingUser(user);
    reset({
      name: user.name,
      email: user.email,
      mobile: user.mobile,
    });
  };

  // ---------------- Update ----------------
  const onUpdate = (data) => {
    dispatch(updateUserSuccess({ id: editingUser.id, ...data }));
    setEditingUser(null);
    reset({ name: '', email: '', mobile: '' });
  };

  // ---------------- Loading / Error ----------------
  if (loading && users.length === 0) {
    return <div className="p-4 text-gray-600">Loading users...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-600">Error: {error}</div>;
  }

  return (
    <div className="max-w-6xl mx-auto mt-8 p-6 bg-white rounded-xl shadow-md">

      {/* ---------- Header ---------- */}
      <h2 className="text-2xl font-bold mb-4">All Users</h2>

      {/* ---------- Edit Form ---------- */}
      {editingUser && (
        <div className="mb-6 p-4 border rounded bg-gray-50">
          <h3 className="text-xl font-semibold mb-3">Edit User</h3>

          <form onSubmit={handleSubmit(onUpdate)} className="flex flex-col gap-3 max-w-md">
            <input
              {...register('name')}
              placeholder="Name"
              className="border px-2 py-1 rounded"
            />
            {errors.name && <p className="text-red-600">{errors.name.message}</p>}

            <input
              {...register('email')}
              placeholder="Email"
              className="border px-2 py-1 rounded"
            />
            {errors.email && <p className="text-red-600">{errors.email.message}</p>}

            <input
              {...register('mobile')}
              placeholder="Mobile"
              className="border px-2 py-1 rounded"
            />
            {errors.mobile && <p className="text-red-600">{errors.mobile.message}</p>}

            <div className="flex gap-2 mt-2">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
              >
                Update
              </button>

              <button
                type="button"
                className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => {
                  setEditingUser(null);
                  reset({ name: '', email: '', mobile: '' });
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ---------- Table ---------- */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Mobile</th>
              <th className="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr
                  key={user.id}
                  className={`border-b hover:bg-gray-50 ${
                    editingUser?.id === user.id ? 'bg-yellow-50' : ''
                  }`}
                >
                  <td className="px-4 py-2">{user.name}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2">{user.mobile}</td>
                  <td className="px-4 py-2 text-center">
                    <button
                      onClick={() => handleEditClick(user)}
                      className="text-blue-600 hover:underline mr-3"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(user.id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
