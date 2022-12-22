import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const AddDoctor = () => {
  const imageHostKey = '9caa488ca234357abc947511219ed16f';
  console.log(imageHostKey);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddDoctor = (data) => {
    console.log(data.image[0]);
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);

    const url =(`https://api.imgbb.com/1/upload?key=${imageHostKey}`);
    fetch(url, {
        method: 'POST',
        body: formData
    })
    .then(res => res.json())
    .then(imgData => {
        if(imgData.success) {
            console.log(imgData.data.url);

        const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: imgData.data.url
        }
        fetch('http://localhost:5000/doctors', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(doctor)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            toast.success('New Doctor Added Successfully')
            navigate('/dashboard/managedoctors');
        })
        }
    })
  };

  const { data: specialties = [], isLoading } = useQuery({
    queryKey: ["specialties"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/appointmentspecialty");
      const data = await res.json();
      return data;
    },
  });

  if(isLoading) {
    return <div>Loading ...</div> 
  }
  return (
    <div>
      <h3 className="text-3xl">Add Doctor</h3>

      <form className="w-96" onSubmit={handleSubmit(handleAddDoctor)}>
        <h2 className="text-blue-400 text-3xl py-4">Login Here</h2>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            {...register("name", { required: "Please enter your name" })}
          />
          {errors.email && <p role="alert">{errors.email.message}</p>}
        </div>
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
            <span className="label-text">Specialty</span>
          </label>
          <select 
          {...register("specialty")}
          className="select select-bordered w-full max-w-xs">
            {specialties.map((specialty) => (
              <option key={specialty._id} value={specialty.name}>{specialty.name}</option>
            ))}
          </select>
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            className="input input-bordered w-full pt-2"
            {...register("image", { required: "Please upload your image" })}
          />
          {errors.email && <p role="alert">{errors.email.message}</p>}
        </div>
        <button className="btn btn-primary w-full my-4">Submit</button>
      </form>
    </div>
  );
};

export default AddDoctor;
