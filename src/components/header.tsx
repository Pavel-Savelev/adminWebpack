import React from "react";
import { useState } from "react";
import WarningButton from "./warningHistory"
function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <header className="header">
      <img className="logo" src="/logo-icon.svg" alt="Логотип" />
      <div className="search-container">
        <img className="search__icon" src="/searh.svg" alt="поиск" />
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>
      <div className="icons">
        <button className="icon">
          <img className="style__icon" src="/moon.svg" alt="style-icon" />
        </button>
        <WarningButton />
        <button className="icon settings-icon">
          <img
            className="settings__icon"
            src="/white-settings 1.svg"
            alt="settings-icon"
          />
        </button>
      </div>
    </header>
  );
}

export default Header
