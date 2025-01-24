import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>Frontend Mentor Challenges</header>
      <header>Easy</header>
      <ul>
        <li>
          <Link href="/3-column-layout">1. 3-Column Layout</Link>
        </li>
        <li>
          <Link href="/advice-generator-app">2. Advice Generator App</Link>
        </li>
      </ul>
    </>
  );
}
