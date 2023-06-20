import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "../../context/AuthContext";

function Register() {
  const { register, handleSubmit } = useForm();
  const { registerUser } = useContext(AuthContext);
  const notify = (msg) => toast(msg);

  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      notify("Password do not match!");
    } else {
      await registerUser({
        name: data.name,
        email: data.email,
        password: data.password,
      });
    }
  };
  return (
    <>
      <div className="px-[20rem] py-10">
        <h3 className="text-[#737070]">REGISTER</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="text-[#737070] pt-10">Name:</h3>
          <input
            className="border w-full border-black rounded-md text-center"
            placeholder="example@example.com"
            type="text"
            {...register("name", { required: true })}
          />
          <h3 className="text-[#737070] pt-10">Email:</h3>
          <input
            className="border w-full border-black rounded-md text-center"
            placeholder="example@example.com"
            type="email"
            {...register("email", { required: true })}
          />
          <h3 className="text-[#737070] py-5">Password</h3>
          <input
            className="border w-full border-black rounded-md text-center"
            type="password"
            {...register("password", { required: true })}
          />
          <h3 className="text-[#737070] py-5">Confirm Password</h3>
          <input
            className="border w-full border-black rounded-md text-center"
            type="password"
            {...register("confirmPassword", { required: true })}
          />
          <div className="flex py-2 justify-center">
            <button
              type="submit"
              className="justify-center bg-black text-white px-3 py-2 rounded-md shadow-xl"
            >
              RGISTER
            </button>
          </div>
        </form>
        <h3 className="text-[#737070]">
          Already have an account ?{"  "}
          <Link to={"/login"} className="underline">
            Sign In
          </Link>
        </h3>
      </div>
    </>
  );
}

export default Register;
