import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <header className="w-full">
      <div className="max-w-3xl mx-auto px-4 py-3 flex justify-between items-center">
        <span className="font-bold">Iroshan</span>
        <nav className="space-x-4">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/stack">Stack</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}
