"use client";

import { useState } from "react";
import { professions } from "@/data/professions";
import Modal from "@/components/ui/Modal";
import ArrowIcon from "@/components/ui/ArrowIcon";
import "./ProfessionMap.css";

export default function ProfessionMap() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="profession-map" id="profession-map">
      <div className="map-heading">
        <span className="map-eyebrow">КАРТА ПРОФЕССИЙ</span>
        <h2>
          Кто создаёт <span>цифровые системы</span>
        </h2>
        <p>
          Шесть ключевых ролей в команде разработки. Нажмите на карточку, чтобы
          узнать подробнее о задачах и навыках.
        </p>
      </div>

      <div className="map-grid">
        {professions.map((profession) => (
          <button
            key={profession.id}
            className="map-card"
            onClick={() => setSelected(profession)}
            type="button"
          >
            <div className="map-card-icon">
              <img src={profession.iconFile} alt={profession.name} />
            </div>
            <h3 className="map-card-name">{profession.name}</h3>
            <p className="map-card-description">
              {profession.shortDescription}
            </p>
            <span className="map-card-link">
              Подробнее <ArrowIcon />
            </span>
          </button>
        ))}
      </div>

      <Modal isOpen={!!selected} onClose={() => setSelected(null)}>
        {selected && (
          <div className="profession-detail">
            <div className="profession-detail-header">
              <div className="profession-detail-icon">
                <img src={selected.iconFile} alt={selected.name} />
              </div>
              <h3>{selected.name}</h3>
            </div>
            <p className="profession-detail-description">
              {selected.fullDescription}
            </p>
            {selected.workPlace && (
              <div className="profession-detail-block work-place-block">
                <h4>Где работает</h4>
                <p>{selected.workPlace}</p>
              </div>
            )}

            <div className="profession-detail-block">
              <h4>Чем занимается</h4>
              <ul>
                {selected.duties.map((duty, i) => (
                  <li key={i}>{duty}</li>
                ))}
              </ul>
            </div>

            <div className="profession-detail-row">
              <div className="profession-detail-block">
                <h4>Ключевые навыки</h4>
                <ul>
                  {selected.skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
