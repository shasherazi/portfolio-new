import Link from "next/link";
import styles from "../styles/Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.right}>
        <Link href="/">shasherazi</Link>
      </div>
      <div className={styles.left}>
        <Link href="/blog">blog</Link>
      </div>
    </nav>
  );
}
