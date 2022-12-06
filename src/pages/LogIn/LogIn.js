import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useToken from "../../hooks/useToken";

const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signIn } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  const [loginUserEmail, setLoginUserEmail] = useState('');
  const [token] = useToken(loginUserEmail);
  if(token) {
    navigate(from, {replace: true});
  }

  const handleLogin = (data) => {
    console.log(data);

    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        setLoginUserEmail(data.email);
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="min-h-screen">
      <div className="max-w-[1440px] mx-auto flex justify-center mt-8">
        <form className="w-96" onSubmit={handleSubmit(handleLogin)}>
          <h2 className="text-blue-400 text-3xl py-4">Login Here</h2>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              {...register("email", { required: "Please enter your email" })}
            />
            {errors.email && <p role="alert">{errors.email.message}</p>}
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              {...register("password", {
                required: "Please enter your password",
              })}
            />
            {errors.password && <p role="alert">{errors.password.message}</p>}
          </div>
          <button className="btn btn-primary w-full my-4">Sign in</button>
        </form>
      </div>
      <p className="max-w-[1440px] mx-auto text-center">
        Don't have an account{" "}
        <Link to="/signup" className="text-blue-400">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default LogIn;
