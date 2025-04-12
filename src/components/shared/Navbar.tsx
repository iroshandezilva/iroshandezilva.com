import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        <span className="font-bold">Iroshan</span>
        <nav className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Writings</Link>
          <Link href="/stack">Stack</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
