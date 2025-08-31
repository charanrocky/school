import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

export default function AddSchool() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [msg, setMsg] = useState("");

  const onSubmit = async (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((key) => formData.append(key, data[key]));
    formData.append("image", data.image[0]);

    try {
      const res = await axios.post(
        "https://school-ndig.onrender.com/schools/add",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setMsg(res.data.message);
    } catch (err) {
      setMsg("Error: " + err.message);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add School</h1>
      {msg && <p className="text-green-600">{msg}</p>}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <input
          {...register("name", { required: true })}
          placeholder="School Name"
          className="w-full border p-2"
        />
        {errors.name && <span className="text-red-500">Required</span>}

        <input
          {...register("address", { required: true })}
          placeholder="Address"
          className="w-full border p-2"
        />
        <input
          {...register("city", { required: true })}
          placeholder="City"
          className="w-full border p-2"
        />
        <input
          {...register("state", { required: true })}
          placeholder="State"
          className="w-full border p-2"
        />
        <input
          {...register("contact", { required: true, pattern: /^[0-9]{10}$/ })}
          placeholder="Contact Number"
          className="w-full border p-2"
        />
        {errors.contact && <span className="text-red-500">Invalid</span>}

        <input
          {...register("email_id", { required: true, pattern: /^\S+@\S+$/i })}
          placeholder="Email"
          className="w-full border p-2"
        />
        {errors.email_id && <span className="text-red-500">Invalid</span>}

        <input type="file" {...register("image", { required: true })} />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}
