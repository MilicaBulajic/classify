import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Context as UserContext } from "../../context/UserContext";

const RegisterForm = () => {
  const { login } = useContext(UserContext);
  const { register, handleSubmit, errors } = useForm();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form onSubmit={handleSubmit(login)}>
      <div>
        <div>
          <label htmlFor="name"></label>
          <input name="name" type="name" placeholder="Name"></input>
        </div>
        <label htmlFor="email">Email</label>
        <input
          {...register("email", { required: true })}
          name="email"
          type="email"
          placeholder="Email address"
        ></input>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input name="password" type="password" placeholder="password"></input>
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default RegisterForm;
