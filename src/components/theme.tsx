import React, { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    const body = document.body;
    body.classList.remove("theme_light", "theme_dark");
    body.classList.add("page", `theme_${theme}`);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <button onClick={toggleTheme} className="icon">
      <img
        className="style__icon"
        src={theme === "dark" ? "/sunHeader.svg" : "/moon.svg"}
        alt="theme-toggle-icon"
      />
    </button>
  );
};

export const ThemeSettingsToggle = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    const handleStorage = () => {
      setTheme(localStorage.getItem("theme") || "light");
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return (
    <button className="icon settings-icon">
      <img
        className="settings__icon"
        src={
          theme === "dark"
            ? "/dark-settings 1.svg"
            : "/white-settings 1.svg"
        }
        alt="settings-icon"
      />
    </button>
  );
};
    