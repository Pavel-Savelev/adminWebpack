import React from "react";
import { useState } from "react";
import WarningButton from "./warningHistory"

import { useEffect} from "react";

// const themeButtons = document.querySelectorAll('.header__theme-menu-button');

// themeButtons.forEach((button) => {
//   button.addEventListener('click', () => {
//     themeButtons.forEach((btn) => {
//       btn.classList.remove('header__theme-menu-button_active');
//       btn.removeAttribute('disabled');
//     });
//     if (
//       [...button.classList].includes('header__theme-menu-button_type_light')
//     ) {
//       changeTheme('light');
//     } else if (
//       [...button.classList].includes('header__theme-menu-button_type_dark')
//     ) {
//       changeTheme('dark');
//     } else {
//       changeTheme('auto');
//     }
//     button.classList.add('header__theme-menu-button_active');
//     button.setAttribute('disabled', true);
//   });
// });

// function changeTheme(theme) {
//   document.body.className = 'page';
//   document.body.classList.add(`theme_${theme}`);
//   localStorage.setItem('theme', theme);
// }

// function initTheme() {
//   const theme = localStorage.getItem('theme');
//   if (theme) {
//     changeTheme(theme);
//     themeButtons.forEach((btn) => {
//       btn.classList.remove('header__theme-menu-button_active');
//       btn.removeAttribute('disabled');
//     });
//     document
//       .querySelector(`.header__theme-menu-button_type_${theme}`)
//       .classList.add('header__theme-menu-button_active');
//     document
//       .querySelector(`.header__theme-menu-button_type_${theme}`)
//       .setAttribute('disabled', true);
//   }
// }

// initTheme();

const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button onClick={toggleTheme} className="icon">
      <img
        className="style__icon"
        src={theme === "dark" ? "/moon.svg" : "/moon.svg"}
        alt="style-icon"
      />
    </button>
  );
};




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
