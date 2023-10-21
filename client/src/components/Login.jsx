import React from "react";
import { Form, Input, Button, Checkbox } from "antd";

export default function Login({ setShowRegister, viewportHeight }) {
  return (
    <div
      className="row d-flex justify-content-center align-items-center"
      style={{ height: `${viewportHeight}px` }}
    >
      <div className="col"></div>
      <div className="col-md-4">
        <div className="card">
          <div className="card-header" style={{ height: "50px" }}></div>
          <div className="card-body text-center p-1">
            <Form>
              <Input placeholder="username.." className="mb-1" />
              <Input.Password
                autoComplete="on"
                placeholder="password.."
                className="mb-1"
              />
              <Checkbox name="remember-me!" className="m-5">
                Remember me!
              </Checkbox>
            </Form>
          </div>
          <div className="card-footer p-1 text-center">
            <Button className="w-100">Login</Button>
            <a
              type="button"
              className="w-100 text-dark p-2"
              onClick={() => setShowRegister(true)}
            >
              register an account
            </a>
          </div>
        </div>
      </div>
      <div className="col"></div>
    </div>
  );
}
