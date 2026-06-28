import { useState } from "react";
import styles from "./ActionButtons.module.scss";
import invitation from "../../data/invitation";
import GiftModal from "../GiftModal/GiftModal";

import {
  FaMapMarkerAlt,
  FaCheck,
  FaGift,
} from "react-icons/fa";

export default function ActionButtons() {
  const [showGifts, setShowGifts] = useState(false);
  const whatsappText = encodeURIComponent(invitation.whatsapp.message);
  const whatsappLink = `https://wa.me/${invitation.whatsapp.number}?text=${whatsappText}`;

  return (
    <section className={styles.actions}>
      <div className={styles.buttons}>
        <a href={invitation.mapsUrl} className={styles.button} aria-label="Abrir localização">
          <div className={styles.icon}>
            <FaMapMarkerAlt />
          </div>
          <span>Localização</span>
        </a>

        <a
          href={whatsappLink}
          className={styles.button}
          target="_blank"
          rel="noreferrer"
          aria-label="Confirmar presença pelo WhatsApp"
        >
          <div className={styles.icon}>
            <FaCheck />
          </div>
          <span>Confirmar</span>
        </a>

        <button
          type="button"
          className={styles.button}
          onClick={() => setShowGifts(true)}
          aria-expanded={showGifts}
          aria-haspopup="dialog"
        >
          <div className={styles.icon}>
            <FaGift />
          </div>
          <span>Presentes</span>
        </button>
      </div>

      <p className={styles.hint}>✦ Clique nos ícones para interagir ✦</p>

      {showGifts && (
        <GiftModal
          gifts={invitation.gifts}
          onClose={() => setShowGifts(false)}
        />
      )}
    </section>
  );
}
