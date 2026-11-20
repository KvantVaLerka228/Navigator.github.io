"use client";

import { useEffect } from "react";
import "./Modal.css";

export default function Modal({ isOpen, onClose, children, variant = "default" }) {
  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={`modal-overlay modal-overlay--${variant}`} onClick={onClose}>
      <div
        className={`modal-content modal-content--${variant}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Закрыть">
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}