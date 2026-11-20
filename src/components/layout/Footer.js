"use client";

import "./Footer.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">
        
        {/* ===== ВЕРХНЯЯ ЧАСТЬ: ЛОГО И НАВИГАЦИЯ ===== */}
        <div className="footer-top">
          
          {/* Логотип */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <div className="footer-logo-mark">
                <img src="/icons/community.svg" alt="Логотип" />
              </div>
              <div className="footer-logo-text">
                <span className="footer-logo-title">СПЕЦИАЛИСТ</span>
                <span className="footer-logo-subtitle">ПО ИНФОРМАЦИОННЫМ СИСТЕМАМ</span>
              </div>
            </a>
            <p className="footer-description">
              Твой путеводитель в мир профессий, связанных с информационными системами. 
              Узнай всё о задачах, инструментах и путях развития в IT.
            </p>
          </div>

          {/* Навигация */}
          <div className="footer-nav">
            <div className="footer-nav-col">
              <h4>Разделы</h4>
              <ul>
                <li><a href="#profession-ladder">Профессии</a></li>
                <li><a href="#profession-map">Карта профессий</a></li>
                <li><a href="#software-choice">Программное обеспечение</a></li>
              </ul>
            </div>
            <div className="footer-nav-col">
              <h4>Обучение</h4>
              <ul>
                <li><a href="#profile-section">Визитная карточка</a></li>
                <li><a href="#myth-buster">Мифы и правда</a></li>
              </ul>
            </div>
          </div>

          {/* Кнопка Наверх */}
          <div className="footer-actions">
            <button className="footer-up-btn" onClick={scrollToTop} aria-label="Наверх">
              <img src="/icons/arrow.svg" alt="Наверх" />
            </button>
          </div>
        </div>

        {/* ===== НИЖНЯЯ ЧАСТЬ: КОПИРАЙТ ===== */}
        <div className="footer-bottom">
          <p className="footer-copyright">
                © {new Date().getFullYear()} Навигатор профессии. <br className="mobile-br" />
               Все права защищены.
          </p>
          <div className="footer-legal">
            <a href="#">Политика конфиденциальности</a>
            <span className="footer-dot">•</span>
            <a href="#">Пользовательское соглашение</a>
          </div>
        </div>

      </div>
    </footer>
  );
}