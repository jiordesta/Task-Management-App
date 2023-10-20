import React from "react";
import {
  HomeOutlined,
  UserOutlined,
  LogoutOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import { Button, Typography } from "antd";
import { useSelector } from "react-redux";

export default function Navigation() {
  const user = useSelector((state) => state.auth.user);

  const NavComponent = () => {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary p-4 sticky-top">
        <div className="container-fluid p-0">
          <ul className="navbar-nav w-25">
            <li className="nav-item p-2">
              <Button type="text">Home</Button>
            </li>
          </ul>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse w-100"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav w-75 d-flex justify-content-center">
              <li className="nav-item p-2">
                <Button type="text">Projects</Button>
              </li>
              <li className="nav-item p-2">
                <Button type="text">Tasks</Button>
              </li>
              <li className="nav-item p-2">
                <Button type="text">Users</Button>
              </li>
            </ul>
            <ul className="navbar-nav w-25  d-flex justify-content-center">
              <li className="nav-item p-2">
                <Button type="text">Account</Button>
              </li>
              <li className="nav-item p-2">
                <Button type="text">Logout</Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };

  return <>{user ? <NavComponent /> : null}</>;
}
