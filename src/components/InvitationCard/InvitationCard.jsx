import { Children, Fragment } from "react";
import styles from "./InvitationCard.module.scss";

import Hero from "../Hero/Hero";
import EventInfo from "../EventInfo/EventInfo";
import ActionButtons from "../ActionButtons/ActionButtons";

import bottomFlowers from "../../assets/bottomFlowers.png";
import butterfly1 from "../../assets/butterfly1.png";
import butterfly2 from "../../assets/butterfly2.png";
import esquerda from "../../assets/esquerda.png";
import direita from "../../assets/direita.png";

function Divider() {
  return (
    <div className={styles.divider} aria-hidden="true">
      <span>❀</span>
    </div>
  );
}

function BottomOrnament() {
  return (
    <img
      src={bottomFlowers}
      className={styles.bottomOrnament}
      alt=""
      aria-hidden="true"
    />
  );
}

export default function InvitationCard({ children }) {
  const sections = Children.toArray(children);

  return (
    <main className={styles.card}>
      <img src={esquerda} className={styles.leftFlowers} alt="" />
      <img src={direita} className={styles.rightFlowers} alt="" />
      <img src={butterfly1} className={`${styles.decorButterfly} ${styles.butterflyOne}`} alt="" />
      <img src={butterfly2} className={`${styles.decorButterfly} ${styles.butterflyTwo}`} alt="" />
      <img src={butterfly1} className={`${styles.decorButterfly} ${styles.butterflyThree}`} alt="" />
      <img src={butterfly2} className={`${styles.decorButterfly} ${styles.butterflyFour}`} alt="" />
      <img src={butterfly1} className={`${styles.decorButterfly} ${styles.butterflyFive}`} alt="" />

      <Hero />
      <Divider />

      <EventInfo />
      <Divider />

      <ActionButtons />

      {sections.map((section, index) => (
        <Fragment key={section.key}>
          <Divider />
          {section}
          {index === sections.length - 2 && <BottomOrnament />}
        </Fragment>
      ))}
    </main>
  );
}
