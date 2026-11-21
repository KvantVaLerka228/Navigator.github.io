"use client";

import { softwareDetails, platformDirections, benefits } from "@/data/software";
import "./SoftwareChoice.css";

const benefitIcons = [
  "/Navigator.github.io/icons/friendly.svg",
  "/Navigator.github.io/icons/community.svg",
  "/Navigator.github.io/icons/standsrds.svg",
  "/Navigator.github.io/icons/needs.svg",
];

export default function SoftwareChoice() {
  return (
    <section className="software-choice" id="software-choice">
      <div className="software-bg-decor">
        <div className="glow glow-yellow"></div>
        <div className="glow glow-red"></div>
        <div className="grid-pattern"></div>
      </div>

      <div className="software-container">
        {/* Шапка и Блок 1 */}
        <div className="software-heading">
          <span className="software-eyebrow">ВЫБОР СОФТА</span>
          <h2>
            Почему именно <span className="text-accent">1С?</span>
          </h2>
          <p>
            Представь, что разработка ИС — это конструктор, который ты собираешь
            в одно целое с нуля, а вместо деталей — программы и базы данных.
            Разберем некоторые детали.
          </p>
        </div>

        <div className="software-block">
          <div className="block-header">
            <h3 className="software-subtitle">Как работают данные</h3>
            <p className="software-subtitle-desc">
              Четыре этапа обработки информации
            </p>
          </div>

          <div className="details-flow">
            {softwareDetails.map((detail, index) => (
              <div className="detail-item-wrapper" key={detail.id}>
                <div className="detail-item">
                  <div className="detail-icon-wrap">
                    <div className="detail-icon">
                      <span>{index + 1}</span>
                    </div>
                  </div>
                  <h4>{detail.title}</h4>
                  <p>{detail.description}</p>
                </div>
                {index < softwareDetails.length - 1 && (
                  <div className="detail-arrow">
                    <img src="/Navigator.github.io/icons/arrowright.svg" alt="Стрелка" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="detail-footer-note">
            <div className="note-icon-wrap">
              <img src="/Navigator.github.io/icons/exclamation.svg" alt="Внимание" />
            </div>
            <p>
              Все эти процессы объединяет одно — они требуют надежной
              программной среды.
            </p>
          </div>
        </div>

        <div className="why-1c-block">
          <div className="why-1c-bg-text">1C</div>
          <div className="why-1c-content">
            <h3>Почему именно 1С?</h3>
            <p>
              Сегодня писать ИС с нуля сложно и дорого, проще внедрить готовое
              решение, доработав его под нужды компании. С этим отлично
              справляется платформа 1С, объединяя в себе большинство задач.
            </p>
          </div>
          <div className="why-1c-highlight">
            <span>Большой выбор решений</span>
            <span className="highlight-line"></span>
            <span>Открытый код</span>
            <span className="highlight-line"></span>
            <span>Автообновления</span>
          </div>
        </div>
      </div>

      {/* ===== БЛОК 3: НАПРАВЛЕНИЯ (BENTO СХЕМА) ===== */}
      <div className="platform-directions-fullwidth">
        <div className="platform-bg-decor">
          <div className="platform-glow-1"></div>
          <div className="platform-glow-2"></div>
          <div className="platform-grid"></div>
        </div>

        <div className="software-container">
          <div className="block-header">
            <h3 className="software-subtitle text-white">
              Направления платформы 1С
            </h3>
            <p className="software-subtitle-desc text-gray">
              Каждое решение под конкретные задачи бизнеса
            </p>
          </div>

          <div className="bento-wrapper">
            <div className="bento-grid">
              {/* Ядро */}
              <div className="bento-card bento-center item-1">
                <div className="bento-center-glow"></div>
                <div className="bento-center-circle">
                  <span>1С</span>
                </div>
                <h4 className="bento-center-title">Ядро платформы</h4>
                <p className="bento-center-desc">
                  Фундамент для любых бизнес-решений
                </p>
              </div>

              {/* Карточки направлений */}
              <div className="bento-card bento-item item-2">
                <div className="bento-icon-wrap">
                  <img
                    src={platformDirections[0].icon}
                    alt={platformDirections[0].label}
                  />
                </div>
                <h4 className="bento-label">{platformDirections[0].label}</h4>
                <p className="bento-text">{platformDirections[0].desc}</p>
              </div>

              <div className="bento-card bento-item item-3">
                <div className="bento-icon-wrap">
                  <img
                    src={platformDirections[1].icon}
                    alt={platformDirections[1].label}
                  />
                </div>
                <h4 className="bento-label">{platformDirections[1].label}</h4>
                <p className="bento-text">{platformDirections[1].desc}</p>
              </div>

              <div className="bento-card bento-item item-4">
                <div className="bento-icon-wrap">
                  <img
                    src={platformDirections[2].icon}
                    alt={platformDirections[2].label}
                  />
                </div>
                <h4 className="bento-label">{platformDirections[2].label}</h4>
                <p className="bento-text">{platformDirections[2].desc}</p>
              </div>

              <div className="bento-card bento-item item-5">
                <div className="bento-icon-wrap">
                  <img
                    src={platformDirections[3].icon}
                    alt={platformDirections[3].label}
                  />
                </div>
                <h4 className="bento-label">{platformDirections[3].label}</h4>
                <p className="bento-text">{platformDirections[3].desc}</p>
              </div>

              <div className="bento-card bento-item item-6">
                <div className="bento-icon-wrap">
                  <img
                    src={platformDirections[4].icon}
                    alt={platformDirections[4].label}
                  />
                </div>
                <h4 className="bento-label">{platformDirections[4].label}</h4>
                <p className="bento-text">{platformDirections[4].desc}</p>
              </div>

              <div className="bento-card bento-item item-7">
                <div className="bento-icon-wrap">
                  <img
                    src={platformDirections[5].icon}
                    alt={platformDirections[5].label}
                  />
                </div>
                <h4 className="bento-label">{platformDirections[5].label}</h4>
                <p className="bento-text">{platformDirections[5].desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="software-container">
        <div className="software-benefits" style={{ marginTop: "100px" }}>
          <div className="block-header">
            <h3 className="software-subtitle">Преимущества</h3>
            <p className="software-subtitle-desc">
              Почему миллионы компаний выбирают эту платформу
            </p>
          </div>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div className="benefit-item" key={index}>
                <div className="benefit-check">
                  <img src={benefitIcons[index]} alt="Иконка" />
                </div>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
