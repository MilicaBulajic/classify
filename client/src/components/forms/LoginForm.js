import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Context as UserContext } from "../../context/UserContext";

const LoginForm = () => {

  const { login } = useContext(UserContext);
  const { register, handleSubmit, errors } = useForm();

  return (
    <form onSubmit={handleSubmit(login)}>
      <div>
        <label htmlFor="email">Email Address</label>
        <input
          {...register("email", { required: true })}
          name="email"
          type="email"
          placeholder="Email address"
        ></input>
        {errors.email && errors.email.type === "required" && (
          <span>This is required</span>
        )}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input name="password" type="password" placeholder="password"></input>
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
