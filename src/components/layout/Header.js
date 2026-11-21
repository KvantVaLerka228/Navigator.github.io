"use client";

import { useState } from "react";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-bg-decor"></div>
      
      <div className="header-container">
        {/* Логотип */}
        <a href="#home" className="header-logo" onClick={closeMenu}>
          <div className="logo-mark">
            <img src="/Navigator.github.io/icons/community.svg" alt="Логотип" />
          </div>
              <div className="logo-text">
                <span className="logo-title">СПЕЦИАЛИСТ</span>
                <span className="logo-subtitle">ПО ИНФОРМАЦИОННЫМ СИСТЕМАМ</span>
              </div>
        </a>

        {/* Кнопка мобильного меню */}
        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Открыть меню"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Навигация */}
        <nav className={`header-nav ${menuOpen ? "open" : ""}`}>
          <a href="#profession-ladder" onClick={closeMenu}>Профессии</a>
          <a href="#profession-map" onClick={closeMenu}>Карта профессий</a>
          <a href="#software-choice" onClick={closeMenu}>Программное обеспечение</a>
          <a href="#profile-section" onClick={closeMenu}>Обучение</a>
          <a href="#myth-buster" onClick={closeMenu}>Мифы и правда</a>

          <a href="#profession-map" className="header-cta" onClick={closeMenu}>
            Исследовать
            <img src="/Navigator.github.io/icons/arrow.svg" alt="" className="cta-arrow" />
          </a>
        </nav>
      </div>
    </header>
  );
}