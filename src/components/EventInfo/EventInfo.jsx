import styles from "./EventInfo.module.scss";
import invitation from "../../data/invitation";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function EventInfo() {
  const { event, location } = invitation;

  return (
    <section className={styles.event}>
      <span className={styles.weekday}>{event.weekday}</span>

      <h2 className={styles.day}>{event.day}</h2>

      <span className={styles.month}>
        {event.month} • {event.year}
      </span>

      <p className={styles.hour}>{event.hour}</p>

      <div className={styles.location}>
        <FaMapMarkerAlt />

        <div>
          <strong>{location.title}</strong>
          <span>{location.city}</span>
        </div>
      </div>
    </section>
  );
}
