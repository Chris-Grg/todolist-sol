import React from "react";

const Header = ({ show, setShow }) => {
  return (
    <div>
      <h1 className="heading">To-Do-List</h1>
      <button className="toggle" onClick={() => setShow(!show)}>
        {show ? "Hide All" : "Show All"}
      </button>
    </div>
  );
};

export default Header;
