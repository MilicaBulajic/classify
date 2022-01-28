import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import UserContext from "../../context/UserContext";
import apiServer from "../../service/apiServer";

const TeamForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const { setAuth } = useContext(UserContext);
  //hooks for handling errors
  const [errorMessage, setErrorMessage] = useState("");
  //email and teamName via put rest api method
  const onboard = async ({ teamName }) => {
    const email = localStorage.getItem("email");
    if (teamName) {
      try {
        const res = await apiServer.put("/register/onboard", {
          email,
          teamName,
        });
        //sets initial token
        localStorage.setItem("token");
        setErrorMessage("");
        setAuth(res.data.token);
      } catch (err) {
        console.log(err.status);
        setErrorMessage("Something went wrong");
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onboard)}>
        <div>
          <label htmlFor="teamName">Define and choose your team</label>
          <input
            ref={register({ required: true })}
            type="email"
            placeholder="Team name"
          ></input>
          {errors.teamName?.type === "minLengh" && (
            <p style={{ color: "red", margin: "1px" }}>
              Team name must be greater than 1 character
            </p>
          )}
          <button>Continue</button>
        </div>
        {errorMessage ? (
          <p style={{ color: "red", margin: "1px" }}>{errorMessage}</p>
        ) : null}
      </form>
    </div>
  );
};

export default TeamForm;
