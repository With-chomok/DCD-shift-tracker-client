import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import SocialLogin from "../sociallogin/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router";
import axios from "axios";

const Register = () => {
  const location = useLocation();
  console.log(location.state);
  console.log("this location register", location);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { registerUser, updateUserProfile } = useAuth();
  const handleRegistrationForm = (data) => {
    console.log(data.photo[0]);
    registerUser(data.email, data.password, data.name, data.photo)
      .then((result) => {
        console.log(result.user);
        // 1. image store
        const formData = new FormData();
        formData.append("image", data.photo[0]);

        // 2. fetch image api
        const imageKey = ` https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_image_upload_token
        }`;
        axios
          .post(imageKey, formData)
          .then((res) => {
            console.log(res.data.data.url, "upload image success");

            // 3. save user info to firebase
            const displayUserInfo = {
              displayName: data.name,
              photoURL: res.data.data.url,
            };
            updateUserProfile(displayUserInfo)
              .then(() => {
                console.log("user profile updated");
                navigate(location.state || "/")
              })
              .catch((err) => {
                console.log(err);
              });
          })

          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="mx-35 my-20  flex justify-center items-center">
      <form onSubmit={handleSubmit(handleRegistrationForm)}>
        <h2 className="text-4xl font-extrabold text-center">
          Create an Account
        </h2>
        <p className="font-bold text-center">Register with DCD-Shift</p>
        <fieldset className="fieldset">
          <label className="label text-black">Your Name</label>
          <input
            {...register("name", { required: true })}
            type="text"
            className="input"
            placeholder="Your Full Name"
          />
          <label className="label text-black">Photo</label>
          <input
            {...register("photo", { required: true })}
            type="file"
            className="file-input"
            placeholder="Choose Your Photo"
          />

          <label className="label text-black">Email</label>
          <input
            {...register("email", { required: true })}
            type="email"
            className="input"
            placeholder="Email"
          />
          {errors.email && <p className="text-red-500">Error Required</p>}

          <label className="label text-black">Password</label>
          <input
            {...register("password", {
              required: true,
              minLength: 4,
              maxLength: 14,
              pattern:
                /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            })}
            type="password"
            className="input"
            placeholder="password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500">Password is wrong</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500">Password upto 4 character</p>
          )}
          {errors.password?.type === "maxLength" && (
            <p className="text-red-500"> password less then 7 character</p>
          )}

          {errors.password?.type === "pattern" && (
            <p className="text-red-500">
              Password must contain at least 1 capital letter, 1 small letter, 1
              number, 1 special character & minimum 8 characters
            </p>
          )}
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Register </button>
          <p>
            Have your an account?{" "}
            <Link
            state={location.state}
              className="underline font-semibold text-green-600"
              to="/login">
              Log in
            </Link>
          </p>
        </fieldset>
        <SocialLogin></SocialLogin>
      </form>
    </div>
  );
};

export default Register;
