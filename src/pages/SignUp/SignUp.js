import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useToken from '../../hooks/useToken';
import toast from 'react-hot-toast';

const SignUp = () => {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const {createUser, updateUser } = useContext(AuthContext);
    console.log(createUser);
    const [createUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createUserEmail);
    const navigate = useNavigate();


    if(token){
      navigate('/');
    }

    const handleSignUp = (data) => {
      console.log(data)
    
      createUser(data.email, data.password)
      .then(result => {
        const user = result.user;
        const userInfo = {
            displayName: data.name
        }
        updateUser(userInfo)
        .then( () => {
          saveUser(data.name, data.email);
          toast.success('Welcome to Wen Dental Studio')
        })
        .catch(error => {
            console.log(error)
        })
        console.log(user);
      })
      .catch(err => {
        console.log(err);
      })
    }

    const saveUser = (name, email) => {
      const user = {name, email};
      fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setCreatedUserEmail(email);
      })

    }

    return (
        <section className='min-h-screen bg-[#D0CCBF] flex justify-center items-center pb-8'>
        <div className="w-3/4 md:w-2/4 lg:w-1/4 mx-auto bg-[#fff] mt-8 px-8 py-16">
          <form className="w-5/6 mx-auto" onSubmit={handleSubmit(handleSignUp)}>
            <h2 className="text-3xl py-4 text-center">Register Here</h2>
            
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full rounded-none"
                {...register("name")}
              />
    
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full rounded-none"
                {...register("email" , {required: 'Please enter your email'})}
              />
              {errors.email && <p role="alert">{errors.email.message}</p>}
    
            </div>
    
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full rounded-none"
                {...register("password", {required: 'Please enter your password'})}
              />
              {errors.password && <p role='alert'>{errors.password.message}</p>}
            </div>

            <button className="btn btn-primary w-full my-4 rounded-none border-none bg-[#FC5400] hover:bg-[#FC5800]">Sign in</button>
          </form>
          <p className="w-3/4 mx-auto text-center">Already have an account? <Link to='/login' className="text-blue-400">Log in</Link></p>
        </div>
        </section>
    );
};

export default SignUp;