import Link from "next/link";
// import NavLink from "./NavLink";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-10">
        <Link className="flex items-center justify-center gap-2" href={"/"}>
          <div className="h-12 w-12 overflow-hidden rounded-full bg-stone-200">
            <Image
              src="/images/Profile-Picture-Avatar.webp"
              alt="Hero image"
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto w-full rounded-lg"
              priority
            />
          </div>

          <div>
            <div className="text-md font-medium text-gray-700">
              Iroshan De Zilva
            </div>
            <div className="text-sm text-stone-600">Product Designer</div>
          </div>
        </Link>

        {/* <nav className="space-x-4">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/stack">Stack</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav> */}
      </div>
    </header>
  );
}
