"use client";

import "./ProfessionLadder.css";
import ArrowIcon from "@/components/ui/ArrowIcon";

const professions = [
  {
    id: "tester",
    name: "Тестировщики",
    image: "/images/professions/tester.png",
    height: "180px",
    description: "Проверяют качество и надёжность программных продуктов.",
  },
  {
    id: "analyst",
    name: "Аналитики",
    image: "/images/professions/analyst.png",
    height: "260px",
    description: "Изучают задачи бизнеса и формируют требования к системе.",
  },
  {
    id: "developer",
    name: "Разработчики",
    image: "/images/professions/developer.png",
    height: "340px",
    description: "Создают и совершенствуют программные решения.",
  },
  {
    id: "manager",
    name: "Проект-менеджеры",
    image: "/images/professions/manager.png",
    height: "420px",
    description: "Организуют работу команды и управляют реализацией проекта.",
  },
];

const finalProfessions = [
  {
    id: "consultant",
    name: "Консультанты",
    image: "/images/professions/consultant.png",
    description: "Помогают внедрять системы и адаптировать их под задачи клиентов.",
  },
  {
    id: "support",
    name: "Специалисты технической поддержки",
    image: "/images/professions/support.png",
    description: "Помогают пользователям и решают технические проблемы.",
  },
];

// Компонент дугообразной стрелки
const ArcArrow = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Сама дуга */}
    <path 
      d="M 5 95 Q 50 20 85 20" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
      fill="none"
    />
    <path 
      d="M 72 10 L 87 19 L 75 32" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      fill="none"
    />
  </svg>
);

export default function ProfessionLadder() {
  const scrollToMap = () => {
    document
      .getElementById("profession-map")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="profession-ladder" id="profession-ladder">
      <div className="ladder-bg-decor">
        <div className="decor-circle decor-circle--left"></div>
        <div className="decor-circle decor-circle--right"></div>
        <div className="decor-grid"></div>
      </div>

      <div className="ladder-heading-wrapper">
        <div className="massive-decor massive-decor--left">
          <div className="ring ring-outer"></div>
          <div className="ring ring-inner"></div>
          <div className="glow-sphere"></div>
          <img src="/icons/analitics.svg" alt="Аналитика" className="levitating-icon" />
        </div>

        <div className="ladder-heading">
          <span className="ladder-eyebrow">КОМАНДА ИТ-ПРОЕКТА</span>
          <h2>
            За каждой разработанной <br />
            <span className="text-accent">
              <span className="highlight-text">информационной системой</span>
            </span>{" "}
            <br />
            стоит команда
          </h2>
          <p>
            Разные специалисты, единая цель. Познакомьтесь с теми, кто
            разрабатывает, внедряет и сопровождает информационные системы.
          </p>
        </div>

        <div className="massive-decor massive-decor--right">
          <div className="ring ring-outer"></div>
          <div className="ring ring-inner"></div>
          <div className="glow-sphere"></div>
          <img src="/icons/dev.svg" alt="Разработка" className="levitating-icon" />
        </div>
      </div>

      <div className="ladder-scroll">
        <div className="ladder-track">
          {professions.map((profession, index) => (
            <div className="ladder-item" key={profession.id}>
              <div className="ladder-person">
                <img
                  src={profession.image}
                  alt={profession.name}
                  className="ladder-person-image"
                  loading="lazy"
                />
              </div>

              <button
                className="ladder-pedestal"
                style={{ "--pedestal-height": profession.height }}
                type="button"
                onClick={scrollToMap}
              >
                <div className="pedestal-content">
                  <span className="pedestal-name">{profession.name}</span>
                  <span className="pedestal-description">
                    {profession.description}
                  </span>
                </div>
                <div className="pedestal-footer">
                  <span className="pedestal-link">
                    Подробнее <ArrowIcon />
                  </span>
                </div>
              </button>

              {index < professions.length - 1 && (
                <div 
                  className="arc-arrow-wrapper" 
                  style={{ bottom: `calc(${profession.height} - 20px)` }}
                >
                  <ArcArrow />
                </div>
              )}
            </div>
          ))}

          <div className="ladder-transition">
            <span className="transition-label">СДАЧА ГОТОВОГО ПРОДУКТА</span>
            <img src="/icons/arrowright.svg" alt="Стрелка вправо" className="transition-arrow-img" />
          </div>

          <div className="ladder-final">
            <div className="ladder-final-people">
              {finalProfessions.map((profession) => (
                <div className="ladder-final-person" key={profession.id}>
                  <img
                    src={profession.image}
                    alt={profession.name}
                    className="ladder-person-image"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            <div className="ladder-final-pedestal">
              {finalProfessions.map((profession) => (
                <button
                  className="ladder-final-role"
                  key={profession.id}
                  type="button"
                  onClick={scrollToMap}
                >
                  <div className="pedestal-content">
                    <span className="pedestal-name">{profession.name}</span>
                    <span className="pedestal-description">
                      {profession.description}
                    </span>
                  </div>
                  <div className="pedestal-footer">
                    <span className="pedestal-link">
                      Подробнее <ArrowIcon />
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
