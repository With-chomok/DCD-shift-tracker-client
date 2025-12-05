import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
    const {register, handleSubmit,formState: {errors}} =useForm()
    const handleRegistrationForm = (data) => {
        console.log(data);
    }
  return (
    <div className="mx-35 my-20">
        <form onSubmit={handleSubmit(handleRegistrationForm)}>

      <fieldset className="fieldset">

        <label className="label">Email</label>
        <input  {...register("email", {required: true})} type="email" className="input" placeholder="Email" />
        {errors.email  && <p className="text-red-500">Error Required</p>}
    
        
        <label className="label">Password</label>
        <input {...register("password", {required: true, minLength:4, maxLength:7})} type="password" className="input" placeholder="password" />
        {errors.password && <p className="text-red-500">Password is wrong</p>}
        {errors.password?.type ===  "minLength" && <p className="text-red-500">Password upto 4 character</p>}
        {errors.password?.type === "maxLength" && <p className="text-red-500"> password less then 7 character</p>}


        <div>
          <a className="link link-hover">Forgot password?</a>
        </div>
        <button  className="btn btn-neutral mt-4">Login</button>
      </fieldset>
        </form>
    </div>
  );
};

export default Register;
