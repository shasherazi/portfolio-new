import Head from "next/head";
import styles from "../styles/Home.module.css";
import Nav from "../src/Nav";
import { playfairDisplay } from "../src/fonts";

export default function Home() {
  return (
    <>
      <Head>
        <title>shasherazi&apos;s website</title>
        <meta name="description" content="a personal website for shasherazi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Nav />
      <main className={`${styles.main} ${playfairDisplay.className}`}>
        <h1 className={`${styles.title} ${styles.shasherazi}`}>
          <a href="https://github.com/shasherazi" target="_blank">
            shasherazi
          </a>
        </h1>
        <p className={styles.description}>
          im shasherazi, a 20 year old{" "}
          <a
            className="underline"
            href="https://en.wikipedia.org/wiki/Pakistan"
            target="_blank"
          >
            pakistani{" "}
          </a>{" "}
          coder with too many interests, and almost all of them include
          computers one way or another. i like linux, python, rust, chess,
          reading, and learning new things.
        </p>

        <h2 className={`${styles.title} ${styles.projects}`}>projects</h2>
        <div className={styles.project}>
          <h3 className={styles.subtitle}>
            <a href="https://github.com/shasherazi/dotfiles" target="_blank">
              dotfiles
            </a>
          </h3>
          <p className={styles.description}>
            my dotfiles for my arch linux setup
          </p>
        </div>

        <div className={styles.project}>
          <h3 className={styles.subtitle}>
            <a href="https://github.com/shasherazi/dmenu-emoji" target="_blank">
              dmenu-emoji
            </a>
          </h3>
          <p className={styles.description}>
            A script to display and copy emojis for launchers like dmenu and
            rofi
          </p>
        </div>

        <h2 className={`${styles.title} ${styles.contact}`}>contact</h2>
        <ul className={styles.contact}>
          <li className={styles.contactItem}>shasherazi#1109 on discord</li>
          <li className={styles.contactItem}>
            <a href="https://twitter.com/shasherazi" target="_blank">
              shasherazi
            </a>{" "}
            on twitter
          </li>
          <li className={styles.contactItem}>
            <a href="https://gituhb.com/shasherazi" target="_blank">
              shasherazi
            </a>{" "}
            on github
          </li>
        </ul>
      </main>
    </>
  );
}
