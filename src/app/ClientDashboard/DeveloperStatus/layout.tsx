"use client";
import React, { useState, ReactNode } from "react";
import Sidebar from "../component/Sidebar";
import Nav3 from "../component/Nav3";
// Ensure that the import paths for Nav3 and Sidebar are correct


interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sortBy, setSortBy] = useState<string>("newest");

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row">
      <Sidebar />
      <div className="flex-1 lg:pl-56">
        <Nav3 />
        <div className="text-black p-4 rounded-lg shadow">{children}</div>
      </div>
    </div>
  );
}

export default Layout;