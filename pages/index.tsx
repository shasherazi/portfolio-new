import Head from "next/head";
import styles from "../styles/Home.module.css";
import Nav from "../src/Nav";

export default function Home() {
  return (
    <>
      <Head>
        <title>shasherazi&apos;s website</title>
        <meta name="description" content="a personal website for shasherazi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Nav />
      <main className={styles.main}>
        <h1 className={styles.title}>shasherazi</h1>
        <p className={styles.description}>
          this is my personal website. it&apos;s a work in progress. Lorem ipsum
          dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore
          culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet.
          Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud
          ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est
          proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea
          nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis
          laboris cupidatat officia voluptate. Culpa proident adipisicing id
          nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua
          reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate
          laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa
          duis. Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
          sint cillum sint consectetur cupidatat.
        </p>
      </main>
    </>
  );
}
