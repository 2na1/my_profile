// Like.js
import Link from "next/link";
import styles from "@/styles/Like.module.css";

export default function Like() {
  return (
    <div className={styles.container}>
      <p className={styles.emoji}>🦒🦒</p>
      <ul className={styles.list}>
        <li>
          <Link href="/culturalLife/1" className={styles.icon}>
            📸
          </Link>
        </li>
        <li>
          <Link href="/culturalLife/2" className={styles.icon}>
            📽️
          </Link>
        </li>
        <li>
          <Link href="/culturalLife/3" className={styles.icon}>
            📖
          </Link>
        </li>
      </ul>
    </div>
  );
}
