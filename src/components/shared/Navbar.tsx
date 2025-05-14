import Link from "next/link";
import NavLink from "./NavLink";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-6 px-4 py-6 md:flex-row md:gap-0 md:py-10">
        <Link
          className="mr-auto flex items-center gap-2 md:justify-center"
          href={"/"}
        >
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

        <nav className="flex rounded-xl border border-stone-200 bg-stone-200/20 p-1 md:border-0 md:bg-transparent">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/writings">Writings</NavLink>

          {/* <NavLink href="/stack">Stack</NavLink> */}
          <NavLink href="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}
