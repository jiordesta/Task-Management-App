import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register, login } from "../redux/authSlice";
import Login from "../components/Login";
import Register from "../components/Register";
import { error, success } from "../redux/notificationSlice";
export default function Authentication() {
  const viewportHeight = window.innerHeight;
  const [showRegister, setShowRegister] = useState(false);
  const dispatch = useDispatch();

  const handleRegister = (inputs) => {
    dispatch(register(inputs)).then((response) => {
      if (response.error) {
        dispatch(error(response.error.message));
      } else {
        dispatch(success("Successfully Registered an Account!"));
      }
    });
  };

  const handleLogin = (inputs) => {
    dispatch(login(inputs)).then((response) => {
      if (response.error) {
        dispatch(error(response.error.message));
      } else {
        dispatch(success("Successfull Login!"));
      }
    });
  };

  return (
    <div className="container">
      {showRegister ? (
        <Register
          setShowRegister={setShowRegister}
          viewportHeight={viewportHeight}
          register={handleRegister}
        />
      ) : (
        <Login
          setShowRegister={setShowRegister}
          viewportHeight={viewportHeight}
          login={handleLogin}
        />
      )}
    </div>
  );
}
