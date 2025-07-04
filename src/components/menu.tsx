import React, { useState } from "react";
import { Link } from "react-router-dom";

function Menu() {
  const [activeItem, setActiveItem] = useState("Main Screen");

  const menuItems = [
    { name: "Главная", path: "/" },
    { name: "Список станций", path: "/table" },
    { name: "Диаграмы", path: "/diagrams" },
    { name: "Статистика", path: "/station/list" },
    { name: "Логи", path: "/logs" },
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

