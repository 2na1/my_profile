import styles from "@/styles/Profile.module.css";

export default function Profile() {
  return (
    <div className={styles.container}>
      <p className={styles.emoji}>🦒</p>
      <div className={styles.Card}>
        <img src="/images/me.png" alt="Face" className={styles.cardImg} />
        <div>
          <h1>이나원</h1>
          <p>멋쟁이 사자처럼 11기 프론트엔드</p>
          <p>전공: 통계학과 / 컴퓨터공학과</p>
          <p>메일: dlskdnjs030425@likelion.org</p>
        </div>
      </div>
    </div>
  );
}
