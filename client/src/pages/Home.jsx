import React from "react";
import Authentication from "./Authentication";
import { useSelector } from "react-redux";
import Loading from "./Loading";

export default function Home() {
  const loadingUser = useSelector((state) => state.auth.loadingUser);
  const loadingLogout = useSelector((state) => state.auth.loadingLogout);
  const user = useSelector((state) => state.auth.user);
  return (
    <>
      {user ? null : loadingUser || loadingLogout ? (
        <Loading />
      ) : (
        <Authentication />
      )}
    </>
  );
}
