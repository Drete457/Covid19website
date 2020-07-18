import React from "react";
import { useHistory } from "react-router-dom";
import "../Css/error.css";

export default function NoPage() {
  const link = useHistory();
  return (
    <div className="nopage">
      <div className="sep"></div>
      <h1>Page Not Found</h1>
      <h1>Error 404</h1>
      <button
        className="returnbutton"
        style={{ backgroundColor: "#9a4ef1" }}
        onClick={() => link.push("/Covid19website/")}
      >
        Return Home
      </button>
      <div className="container">
        <div className="loader loader1"></div>
        <div className="loader loader2"></div>
        <div className="loader loader3"></div>
        <div className="loader loader4"></div>
        <div className="loader loader5"></div>
        <div className="loader loader6"></div>
        <div className="loader loader7"></div>
        <div className="loader loader8"></div>
        <div className="loader loader9"></div>
        <div className="loader loader10"></div>
      </div>
    </div>
  );
}
