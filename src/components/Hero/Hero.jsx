import styles from "./Hero.module.scss";

import invitation from "../../data/invitation";

import topFlowers from "../../assets/topFlowers.png";
import butterfly1 from "../../assets/butterfly1.png";
import butterfly2 from "../../assets/butterfly2.png";

export default function Hero() {

    const { name, message } = invitation;

    return (

        <section className={styles.hero}>

            <img
                src={topFlowers}
                alt=""
                className={styles.topFlowers}
            />

            <div className={styles.titleWrap}>
                <div className={styles.monogram}>
                    XV
                </div>

                <h1>
                    {name}
                </h1>
            </div>

            <p>
                {message}
            </p>

            <img
                src={butterfly1}
                alt=""
                className={styles.butterflyLeft}
            />

            <img
                src={butterfly2}
                alt=""
                className={styles.butterflyRight}
            />

        </section>

    );

}
