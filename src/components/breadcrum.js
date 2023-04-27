import { useState } from "react";
import './breadcrumb.css';

function Breadcrumb() {
  const [page, setPage] = useState("calculator");

  function handleClick(pageName) {
    setPage(pageName);
  }

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <button className="btn btn-link" onClick={() => handleClick("home")}>
            Home
          </button>
        </li>
        <li className="breadcrumb-item">
          <button
            className="btn btn-link"
            onClick={() => handleClick("mortgage")}
          >
            Mortgage
          </button>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          {page === "calculator" ? "Calculator" : "Application"}
        </li>
      </ol>
    </nav>
  );
}

export default Breadcrumb;