import React from "react";

export default function Authentication() {
  const viewportHeight = window.innerHeight;
  const Login = () => {
    return (
      <div
        className="row d-flex justify-content-center align-items-center"
        style={{ height: `${viewportHeight}px` }}
      >
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div className="card">dasdas</div>
        </div>
        <div className="col-md-4"></div>
      </div>
    );
  };

  return (
    <div className="container">
      <Login />
    </div>
  );
}
