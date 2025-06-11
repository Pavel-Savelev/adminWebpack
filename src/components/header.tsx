import React from "react";
import { useState } from "react";
import WarningButton from "./warningHistory"
import {ThemeToggle,ThemeSettingsToggle} from "./theme";
import { useEffect} from "react";







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
        <ThemeToggle />
        <WarningButton />
        <ThemeSettingsToggle />
      </div>
    </header>
  );
}

export default Header
