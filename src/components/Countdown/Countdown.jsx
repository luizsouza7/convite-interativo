import { useEffect, useMemo, useState } from "react";
import styles from "./Countdown.module.scss";

const targetDate = new Date("2026-08-22T12:30:00");

function getRemainingTime() {
  const difference = Math.max(targetDate.getTime() - Date.now(), 0);

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(() => getRemainingTime());
  const items = useMemo(
    () => [
      { label: "Dias", value: timeLeft.days },
      { label: "Horas", value: timeLeft.hours },
      { label: "Minutos", value: timeLeft.minutes },
      { label: "Segundos", value: timeLeft.seconds },
    ],
    [timeLeft],
  );

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTimeLeft(getRemainingTime());
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className={styles.countdown} aria-label="Contagem regressiva">
      <span className={styles.kicker}>Faltam</span>

      <div className={styles.grid}>
        {items.map((item) => (
          <div className={styles.item} key={item.label}>
            <strong>{String(item.value).padStart(2, "0")}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
