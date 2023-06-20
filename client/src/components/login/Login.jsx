import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "../../context/AuthContext";

function Login() {
  const { register, handleSubmit } = useForm();
  const { loginUser, user, setUser } = useContext(AuthContext);
  let navigate = useNavigate();

  const notify = (msg) => toast(msg);

  const onSubmit = async (data) => {
    await loginUser(data);
    navigate("/", { replace: true });
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <div className="px-[20rem] py-10">
        <h3 className="text-[#737070]">LOGIN</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
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
          <div className="flex py-2 justify-center">
            <button
              type="submit"
              className="justify-center bg-black text-white px-3 py-2 rounded-md shadow-xl"
            >
              Login
            </button>
          </div>
        </form>
        <h3 className="text-[#737070]">
          Don't have an account ?{"  "}
          <Link to={"/register"} className="underline">
            Create One
          </Link>
        </h3>
      </div>
    </>
  );
}
export default Login;
