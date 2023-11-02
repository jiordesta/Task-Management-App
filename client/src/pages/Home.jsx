import React, { useEffect } from "react";
import Authentication from "./Authentication";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import Dashboard from "./Dashboard";
import { fetchUsers } from "../redux/userSlice";

export default function Home() {
  const loadingUser = useSelector((state) => state.auth.loadingUser);
  const loadingLogout = useSelector((state) => state.auth.loadingLogout);
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      {user ? (
        <Dashboard />
      ) : loadingUser || loadingLogout ? (
        <Loading />
      ) : (
        <Authentication />
      )}
    </>
  );
}
