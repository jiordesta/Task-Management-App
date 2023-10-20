import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Typography, Upload } from "antd";

export default function Authentication() {
  const viewportHeight = window.innerHeight;
  const { Dragger } = Upload;
  const { Title } = Typography;

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [description, setDescription] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);

  const [showRegister, setShowRegister] = useState(false);

  const Register = () => {
    return (
      <div
        className="row d-flex justify-content-center align-items-center"
        style={{ height: `${viewportHeight}px` }}
      >
        <div className="col"></div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-header" style={{ height: "50px" }}></div>
            <div className="card-body p-1">
              <Form>
                <Input placeholder="first name.." className="mb-1" />
                <Input placeholder="last name.." className="mb-1" />
                <Input placeholder="description.." className="mb-1" />
                <Input placeholder="user name.." className="mb-1" />
                <Input.Password
                  autoComplete="on"
                  placeholder="password.."
                  className="mb-1"
                />
                <Dragger
                  customRequest={({ file }) => {
                    if (!file.type.startsWith("image/")) {
                      dispatch(error("Enter a valid Image (.jpeg .jpg .png) "));
                      return;
                    }

                    setImage(file);
                  }}
                  showUploadList={false}
                >
                  <p className="ant-upload-text">
                    {image ? (
                      <>{image.name}</>
                    ) : (
                      <>Click or drag image file in this area!</>
                    )}
                  </p>
                </Dragger>
              </Form>
            </div>
            <div className="card-footer p-1 text-center">
              <Button className="w-100">Register</Button>
              <a
                type="button"
                className="w-100 text-dark p-2"
                onClick={() => setShowRegister(false)}
              >
                already have an account
              </a>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    );
  };

  const Login = () => {
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
  };

  return (
    <div className="container">{showRegister ? <Register /> : <Login />}</div>
  );
}
