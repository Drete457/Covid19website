import React from "react";
import { Link } from "react-router-dom";
import update from "../Controller/update";

export default function BackButton() {
  //const link = useHistory();
  return (
    <Link to="/">
    <button
      className="rainbow rainbow-1"
      onClick={() => {
        update("cases");
    }}
  >
        Go back
    </button>
    </Link>
  );
}