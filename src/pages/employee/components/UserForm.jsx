import { useDispatch } from "react-redux";
import { addUserRequest } from "../userSlice";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("Name required"),
  email: yup.string().email().required("Email required"),
  mobile: yup.string().matches(/^\d{10}$/, "10 digit mobile"),
});

const UserForm = ({ onClose }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    dispatch(addUserRequest(data));
    onClose();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-6 rounded-xl shadow mb-8 
             max-w-lg "
    >
      <h2 className="font-semibold mb-4">Add User</h2>

      <input {...register("name")} placeholder="Name" className="border p-2 w-full mb-1" />
      <p className="text-red-500 text-xs">{errors.name?.message}</p>

      <input {...register("email")} placeholder="Email" className="border p-2 w-full mb-1" />
      <p className="text-red-500 text-xs">{errors.email?.message}</p>

      <input {...register("mobile")} placeholder="Mobile" className="border p-2 w-full mb-1" />
      <p className="text-red-500 text-xs">{errors.mobile?.message}</p>

      <div className="flex gap-3 mt-4">
        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Save
        </button>
        <button
          type="button"
          onClick={onClose}
          className="bg-gray-400 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </form>
  );
};

export default UserForm;
