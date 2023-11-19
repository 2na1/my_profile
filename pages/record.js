import Link from "next/link";

export default function Record() {
  return (
    <>
      <div>Record페이지</div>
      <ul>
        <li>
          <Link href="/yearRecord/2023">2023</Link>
        </li>
        <li>
          <Link href="/yearRecord/2024">2024</Link>
        </li>
      </ul>
    </>
  );
}
