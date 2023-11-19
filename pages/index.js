import styles from "@/styles/Home.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div>
        <img src="" alt="기린 사진" />
        <h1 className={styles.title}>LEE NA WON</h1>
      </div>
      <div>
        <ul>
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
    </>
  );
}
