import Link from "next/link";

export default function Like() {
  return (
    <>
      <div>Like페이지</div>
      <ul>
        <li>
          <Link href="/culturalLife/1">사진</Link>
        </li>
        <li>
          <Link href="/culturalLife/2">공연 기록</Link>
        </li>
        <li>
          <Link href="/culturalLife/3">독서 기록</Link>
        </li>
      </ul>
    </>
  );
}
