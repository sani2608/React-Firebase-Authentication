import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";


export const PrivateRoute = () => {
  const { currentUser } = useAuth();


  return typeof currentUser === "undefined" ? (
    <h1>Loading.....</h1>
  ) : currentUser ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};
export default PrivateRoute;
