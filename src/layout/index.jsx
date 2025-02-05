import React from "react";
import { Outlet } from "react-router-dom";
import NavigationRoute from "../navigation/NavigationRoute";

export default function Layout() {
  return (
    <div>
      {/* Unused component for now */}
      <NavigationRoute></NavigationRoute>
      <Outlet></Outlet>
    </div>
  );
}
