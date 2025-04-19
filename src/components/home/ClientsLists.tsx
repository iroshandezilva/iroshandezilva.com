import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";
import Link from "next/link";

// Define clients data
const clients = [
  {
    name: "Brolly",
    href: "https://www.sneakertub.com",
    imageSrc: "/images/client_brolly.webp",
    alt: "Brolly logo",
  },
  {
    name: "SneakerTub",
    href: "https://www.sneakertub.com",
    imageSrc: "/images/client_sneakertub.webp",
    alt: "SneakerTub logo",
  },
  {
    name: "LeaveDates",
    href: "https://www.sneakertub.com",
    imageSrc: "/images/client_leavedates.webp",
    alt: "LeaveDates platform logo",
  },
  {
    name: "Helakuru",
    href: "https://www.helakuru.lk",
    imageSrc: "/images/client_helakuru.webp",
    alt: "Helakuru logo",
  },
  {
    name: "PayHere",
    href: "https://www.sneakertub.com",
    imageSrc: "/images/client_payhere.webp",
    alt: "PayHere logo",
  },
  {
    name: "Rooster",
    href: "https://www.rooster.org",
    imageSrc: "/images/client_rooster.webp",
    alt: "Rooster logo",
  },
];

// Client logo component
const ClientLogo = ({
  name,
  href,
  imageSrc,
  alt,
}: {
  name: string;
  href: string;
  imageSrc: string;
  alt: string;
}) => {
  return (
    <Link
      className="h-12 w-32 flex items-center justify-center"
      href={href}
      target="_blank"
    >
      <Image
        src={imageSrc}
        alt={alt}
        width={0}
        height={0}
        sizes="100vw"
        className="h-12 w-32 rounded-lg grayscale hover:grayscale-0 transition-all duration-300"
        priority
      />
    </Link>
  );
};

export default function ClientLists() {
  return (
    <section className="mx-auto max-w-3xl py-12 px-6">
      <div className="flex-col items-start justify-start gap-4">
        <div className="flex flex-col items-start justify-start gap-1 self-stretch">
          <div className="justify-start text-base leading-relaxed font-normal text-slate-600">
            From MVPs → Market Leaders
          </div>
          <div className="justify-start self-stretch leading-normal text-2xl lg:leading-relaxed font-medium text-slate-900 lg:mr-40">
            {" "}
            7+ Years of UX That Adapts to Every Scale & Phase — Here&apos;s Who
          </div>
        </div>
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover>
            {clients.map((client) => (
              <ClientLogo
                key={client.name}
                name={client.name}
                href={client.href}
                imageSrc={client.imageSrc}
                alt={client.alt}
              />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </section>
  );
}
