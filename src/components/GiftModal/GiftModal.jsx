import { useEffect } from "react";
import { FaGift, FaTimes } from "react-icons/fa";
import styles from "./GiftModal.module.scss";

export default function GiftModal({ gifts = [], onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={styles.overlay}
      role="presentation"
      onMouseDown={handleOverlayClick}
    >
      <article
        className={styles.card}
        role="dialog"
        aria-modal="true"
        aria-labelledby="gift-modal-title"
      >
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Fechar sugestões de presentes"
        >
          <FaTimes />
        </button>

        <div className={styles.icon}>
          <FaGift />
        </div>

        <h2 id="gift-modal-title">Sugestões de Presentes</h2>
        <p className={styles.subtitle}>
          Caso deseje presentear, separamos algumas ideias com carinho.
        </p>

        <ul className={styles.giftList}>
          {gifts.map((gift) => (
            <li key={gift}>{gift}</li>
          ))}
        </ul>

        <p className={styles.footer}>
          O mais importante será celebrar esse momento com você.
        </p>
      </article>
    </div>
  );
}
