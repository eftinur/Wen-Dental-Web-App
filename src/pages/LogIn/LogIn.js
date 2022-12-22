import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useToken from "../../hooks/useToken";
import toast from 'react-hot-toast';


const LogIn = () => {
  const [err, setErr] = useState([]);
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
        toast.success('Login successful')
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
        setErr(err.message);
        toast.error('Something went wrong!')
      });
  };
  return (
    <section className="min-h-screen bg-[#D0CCBF] flex justify-center items-center pb-8">
      <div className="w-3/4 md:w-2/4 lg:w-1/4 mx-auto bg-[#fff] mt-8 py-16">
        <form className="w-5/6 mx-auto" onSubmit={handleSubmit(handleLogin)}>
          <h2 className="text-3xl py-4 text-center">Login Here</h2>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full rounded-none"
              {...register("email", { required: "Please enter your email" })}
            />
            {errors.email && <p role="alert">{errors.email.message}</p>}
          </div>

          <div className="form-control w-full pb-3">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full rounded-none"
              {...register("password", {
                required: "Please enter your password",
              })}
            />
            {errors.password && <p role="alert">{errors.password.message}</p>}
          </div>
          
          <span className='text-error'>{err}</span>
          <button className="btn btn-primary w-full my-4 rounded-none border-none bg-[#FC5400] hover:bg-[#FC5800]">Sign in</button>
        </form>
        <p className="w-3/4 mx-auto text-center">
        Don't have an account?{" "}
        <Link to="/signup" className="text-blue-400">
          Sign up
        </Link>
      </p>
      </div>
    </section>
  );
};

export default LogIn;
