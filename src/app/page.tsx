import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By
          </a>
        </div>
      </div> */}

      <div className={styles.center}>Monikina oslava</div>

      <div className={styles.grid}>
        <a
          href=""
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Kedy <span>-&gt;</span>
          </h2>
          <p>Oslava sa bude konat XX.10.2023</p>
        </a>

        <a
          href=""
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Kde <span>-&gt;</span>
          </h2>
          <p>Bude to na tomto mieste</p>
        </a>

        <a
          href=""
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Co doniest <span>-&gt;</span>
          </h2>
          <p>Seba a dobru naladu</p>
        </a>

        <a
          href=""
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Program <span>-&gt;</span>
          </h2>
          <p>Liner, posedenie, a tak a to</p>
        </a>
      </div>
    </main>
  );
}
