import Image from "next/image";
import styles from "./page.module.css";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.bgTop} />

      <main className={styles.main}>
        <div className={styles.logo}>
          <Image src={"/logo.png"} alt="Monika" width={200} height={200} />
        </div>

        <div className={styles.description}>
          Drahí blízki, pozývam Vás na rodinno-priateľské posedenie pri
          príležitosti oslavy mojich narodenín.
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Kedy?</h2>
            <p>Oslava sa bude konať 21.10.2023 o 15:00</p>
          </div>

          <div className={styles.card}>
            <h2>Kde?</h2>
            <a
              href="https://www.google.com/maps/place/SP+Resort+%26+Spa/@49.2266,18.7050993,17z/data=!3m1!4b1!4m9!3m8!1s0x47145f724dc50191:0x2b58e785fd7dc297!5m2!4m1!1i2!8m2!3d49.2266!4d18.7076742!16s%2Fg%2F11stnn4d27?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>SP Resort</p>
            </a>
            <p>Pietna 11, 010 04 Žilina</p>
          </div>

          <div className={styles.card}>
            <h2>Čo si obliecť?</h2>
            <p>Čokoľvek v čom Vám je pohodlne, nemusíte mat kravaty a opätky</p>
          </div>

          <div className={styles.card}>
            <h2>Čo Vás čaká?</h2>
            <p>Neskorý obed,</p>
            <p>torta a káva,</p>
            <p>večerný bufet</p>
            <p>a ja!</p>
          </div>
        </div>

        <div className={styles.footer1}>Teším sa na Vás,</div>
        <div className={styles.footer2}>Monika.</div>
      </main>

      <div className={styles.bgBottom} />
    </div>
  );
};

export default Home;
