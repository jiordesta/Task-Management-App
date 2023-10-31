import React, { useEffect } from "react";
import {
  HomeOutlined,
  UserOutlined,
  LogoutOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import { Button, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { authenticateUser, logout } from "../redux/authSlice";
import { error, success } from "../redux/notificationSlice";
import { setCreateDrawer } from "../redux/projectSlice";

export default function Navigation() {
  const user = useSelector((state) => state.auth.user);
  const projectDrawer = useSelector((state) => state.project.createDrawer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authenticateUser()).then((response) => {
      if (response.error) {
        dispatch(error(response.error.message));
      } else {
        dispatch(success("Logged in!"));
      }
    });
  }, []);

  const handleLogout = () => {
    dispatch(logout()).then((response) => {
      if (response.error) {
        dispatch(error(response.error.message));
      } else {
        dispatch(success("Logged out!"));
      }
    });
  };

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
                <Button
                  type="text"
                  onClick={() => dispatch(setCreateDrawer(true))}
                >
                  new project
                </Button>
              </li>
              <li className="nav-item p-2">
                <Button type="text">my projects</Button>
              </li>
              <li className="nav-item p-2">
                <Button type="text">my tasks</Button>
              </li>
            </ul>
            <ul className="navbar-nav w-25  d-flex justify-content-center">
              <li className="nav-item p-2">
                <Button type="text">Account</Button>
              </li>
              <li className="nav-item p-2">
                <Button type="text" onClick={() => handleLogout()}>
                  Logout
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };

  return <>{user && !projectDrawer ? <NavComponent /> : null}</>;
}
