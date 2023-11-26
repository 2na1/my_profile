import styles from "@/styles/Home.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className={styles.main}>
        <img src="/images/Group 1.png" alt="기린 사진" />
        <div>
          <h1 className={styles.title}>LEE NA WON</h1>
          <div>
            <ul className={styles.menu}>
              <li>
                <Link href="/profile">About Me</Link>
              </li>
              <li>
                <Link href="/like">Like</Link>
              </li>
              <li>
                <Link href="/record">Record</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
