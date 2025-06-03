import React, { useState } from "react";
import { Link } from "react-router-dom";

function Menu() {
  const [activeItem, setActiveItem] = useState("Main Screen");

  const menuItems = [
    { name: "Main Screen", path: "/" },
    { name: "Table", path: "/table" },
    { name: "Diagrams", path: "/statistica" },
    { name: "Транзакции", path: "/transactions" },
    { name: "Something", path: "/something" },
    { name: "Logs", path: "/logs" },
  ];

  return (
    <div className="menu">
      {menuItems.map((item) => (
        <div
          key={item.name}
          className={`menu-item ${activeItem === item.name ? "active" : ""}`}
          onClick={() => setActiveItem(item.name)}
        >
          <Link to={item.path}>
            <button className="button menu-button">{item.name}</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Menu;

