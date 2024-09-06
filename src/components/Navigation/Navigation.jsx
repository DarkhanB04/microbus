import React, { useState, useEffect } from "react";
import "./Navigation.css";
import ToggleSwitch from "./ToggleSwitch/ToggleSwitch";
import Dropdown from "./Dropdown/Dropdown";
import Phone from "./Phone/Phone";
import RequestPopup from "../RequestPopup/RequestPopup";
import { useTranslation } from "react-i18next";

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem("darkMode") === "true"
  );
  const [language, setLanguage] = useState(
    () => localStorage.getItem("i18nextLng") || i18n.language
  );
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Hamburger menu toggle

  useEffect(() => {
    document.body.classList.add(`lang-${language}`);
  }, [language]);

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    if (i18n.language !== language) setLanguage(i18n.language);
    document.body.classList.remove("lang-en", "lang-kk", "lang-ru");
    document.body.classList.add(`lang-${i18n.language}`);
  }, [i18n.language]);

  const handleToggle = () => setIsDarkMode(!isDarkMode);

  const handleLanguageChange = (selectedLanguage) => {
    i18n.changeLanguage(selectedLanguage.toLowerCase());
    localStorage.setItem("i18nextLng", selectedLanguage.toLowerCase());
  };

  const togglePopup = () => setIsPopupOpen(!isPopupOpen);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <nav className="navigation">
        <div alt="Microbus Logo" className="logo" />
        <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <a href="#about" className="nav-item">
            {t("nav.aboutUs")}
          </a>
          <a href="#price" className="nav-item">
            {t("nav.price")}
          </a>
          <a href="#partners" className="nav-item">
            {t("nav.partners")}
          </a>
          <a href="#footer" className="nav-item">
            {t("nav.contacts")}
          </a>
        </div>
        <Phone />
        <button className="request-button" onClick={togglePopup}>
          {t("nav.request")}
        </button>
        <Dropdown
          options={["EN", "KK", "RU"]}
          defaultOption={language.toUpperCase()}
          selectedLanguage={language}
          onChange={handleLanguageChange}
        />
        <ToggleSwitch isOn={isDarkMode} handleToggle={handleToggle} />
        {/* <button className="hamburger" onClick={toggleMenu}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button> */}
        <button
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </nav>
      <RequestPopup isOpen={isPopupOpen} onClose={togglePopup} />
    </header>
  );
};

export default Navigation;
