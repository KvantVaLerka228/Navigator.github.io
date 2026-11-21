"use client";

import { useRef, useState } from "react";
import Modal from "@/components/ui/Modal";
import "./ProfileSection.css";

export default function ProfileSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalVideoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const openModal = () => {
    setIsPlaying(false);
    if (videoRef.current) videoRef.current.pause();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    if (modalVideoRef.current) modalVideoRef.current.pause();
  };

  return (
    <section className="profile-section" id="profile-section">
      <div className="profile-bg-decor"></div>

      <div className="profile-container">
        <div className="profile-grid">
          
          {/* ЛЕВАЯ ЧАСТЬ: МИНИ-ВИДЕО */}
          <div className="profile-video-wrapper">
            <div className="video-glow"></div>
            
            <div className="video-frame">
              <video
                ref={videoRef}
                className="profile-video"
                src="/Navigator.github.io/videos/travel.mp4"
                loop
                muted
                playsInline
                onClick={togglePlay}
              />
              
              <button 
                className={`video-play-btn ${isPlaying ? "playing" : ""}`} 
                onClick={openModal}
                aria-label="Открыть видео"
              >
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M8 5v14l11-7z" fill="currentColor"/>
                </svg>
              </button>
              
              <div className="video-badge">
                <span>Видео о профессии</span>
              </div>
            </div>
          </div>

          {/* ПРАВАЯ ЧАСТЬ: ТЕКСТ */}
          <div className="profile-content">
            <span className="profile-eyebrow">ВИЗИТНАЯ КАРТОЧКА</span>
            
            <h2 className="profile-title">
              Выполнению таких задач учат в<br />
              <span className="text-accent">Набережночелнинском педагогическом колледже!</span>
            </h2>
            
            <p className="profile-lead">
              Специалист по информационным системам — это профессия будущего, 
              которая требует глубоких знаний и практических навыков.
            </p>           
          </div>

        </div>
      </div>

      {/* МОДАЛКА С ВИДЕО */}
      <Modal isOpen={isModalOpen} onClose={closeModal} variant="video">
        <video
          ref={modalVideoRef}
          className="modal-video"
          src="/Navigator.github.io/videos/travel.mp4"
          controls
          autoPlay
          playsInline
        />
      </Modal>
    </section>
  );
}