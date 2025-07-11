import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = ({ current }) => {
  return (
    <nav className="text-sm text-gray-500 mb-2">
      <Link to="/" className="hover:underline text-gray-400">
        Home
      </Link>
      <span className="mx-1">&gt;</span>
      <span className="text-gray-700 font-medium">{current}</span>
    </nav>
  );
};

export default BreadCrumb;