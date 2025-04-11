export default function Navbar() {
  return (
    <header className="w-full border-b">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        <span className="font-bold">Iroshan</span>
        <nav className="space-x-4">
          {/* <a href="/">Home</a> */}
          <a href="/about">About</a>
          <a href="/blog">Writings</a>
          <a href="/stack">Stack</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
