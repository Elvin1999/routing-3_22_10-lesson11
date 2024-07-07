import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  useEffect(() => {
    console.log("Home mounted");
  });
  return (
    <div className="frame">
      <h1 className="intro">It's time for Cocktails</h1>
      <Link to="/products" className="spec-btn">
        View Products
      </Link>
    </div>
  );
}
