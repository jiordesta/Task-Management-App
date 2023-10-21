import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/authSlice";
import Login from "../components/Login";
import Register from "../components/Register";
export default function Authentication() {
  const viewportHeight = window.innerHeight;
  const [showRegister, setShowRegister] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="container">
      {showRegister ? (
        <Register
          setShowRegister={setShowRegister}
          viewportHeight={viewportHeight}
        />
      ) : (
        <Login
          setShowRegister={setShowRegister}
          viewportHeight={viewportHeight}
        />
      )}
    </div>
  );
}
