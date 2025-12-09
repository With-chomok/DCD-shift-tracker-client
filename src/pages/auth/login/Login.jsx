import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import SocialLogin from "../sociallogin/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router";

const Login = () => {
  const { signInUser } = useAuth();
  const location = useLocation();
  console.log(location.state);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    console.log(data);
    signInUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state?.from?.pathname || "/", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="my-20 card bg-base-100 border flex   w-full mx-auto max-w-sm shrink-0 shadow-2xl ">
      <form onSubmit={handleSubmit(handleLogin)} className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
            {...register("email", { required: true })}
            type="email"
            className="input"
            placeholder="Email"
          />
          {errors.email && <p className="text-red-500">Error Required</p>}
          <label className="label">Password</label>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
              pattern: {
                value:
                  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Password must contain uppercase, lowercase, number, and special character (@$!%*?&)",
              },
            })}
            type="password"
            className="input"
            placeholder="Password"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
          <p>
            New here?{" "}
            <Link
            state={location.state}
              className="underline font-semibold text-green-600"
              to="/register">
              Create an SHIFT account
            </Link>
          </p>
        </fieldset>
      </form>
      <div className="mx-4">
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
