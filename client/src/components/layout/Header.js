import React from "react";
import { Link } from "react-router-dom";
export default () => {
  return (
    <div className="container mt-3">
      <Link to="/">
        <img
          className="col-md-12 col-sm-12 img-fluid"
          src="/uploads/adopte-un-dev.png"
          alt="Adopte un dev logo"
        />
      </Link>
    </div>
  );
};
