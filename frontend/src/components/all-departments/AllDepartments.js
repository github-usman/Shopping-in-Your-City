import React, { useState } from "react";
import ListOfMenus from "./ListOfMenus";
import { RiMenu2Line } from "react-icons/ri";
import "./all-department.css";

const AllDepartments = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleHover = () => {
    setShowMenu(true);
  };

  const handleLeave = () => {
    setShowMenu(false);
  };

  return (
    <div className="btn-alldepartment-container">
      <button className="btn-alldepartment-btn" onMouseEnter={handleHover} onMouseLeave={handleLeave}>
        <RiMenu2Line/>All Departments
      </button>
      {showMenu && <ListOfMenus onMouseEnter={handleHover} onMouseLeave={handleLeave} />}
    </div>
  );
};

export default AllDepartments;