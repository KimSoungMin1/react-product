import { NavLink } from "react-router-dom";
import { useState } from "react";
const Nav = () => {
  const [color, setColor] = useState("black");
  const activeStyle = {
    color: "green",
  };
  return (
    <div className="Nav">
      <ul>
        <NavLink
          to={"/"}
          style={({ isActive }) => (isActive ? activeStyle : {})}
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          to={"/about"}
          style={({ isActive }) => (isActive ? activeStyle : {})}
        >
          <li>about</li>
        </NavLink>
        <NavLink
          to={"/product"}
          style={({ isActive }) => (isActive ? activeStyle : {})}
        >
          <li>product</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Nav;
