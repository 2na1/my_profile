import Link from "next/link";

export default function Like() {
  return (
    <>
      <div>Like페이지</div>
      <ul>
        <li>
          <Link href="/culturalLife/1">데스노트</Link>
        </li>
        <li>
          <Link href="/culturalLife/2">물랑루즈</Link>
        </li>
        <li>
          <Link href="/culturalLife/3">러브레터</Link>
        </li>
      </ul>
    </>
  );
}
