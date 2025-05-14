import Image from "next/image";
import ClientLogo from "@/components/shared/ClientLogo";

export default function AboutPage() {
  return (
    <>
      <section
        className="mx-auto max-w-3xl px-6 py-16 lg:px-0 lg:py-24"
        aria-labelledby="about-hero"
      >
        <div className="inline-flex flex-col items-start justify-start gap-10">
          <h1
            id="about-hero"
            className="font-heading text-center text-4xl leading-12 text-gray-900 lg:text-5xl lg:leading-16"
          >
            I’m a product designer who helps people feel,{" "}
            <span className="italic" aria-label="oh, that makes sense">
              “oh, that makes sense”
            </span>
          </h1>
          <figure className="flex flex-col items-start justify-start gap-8 self-stretch border-stone-100">
            <Image
              src="/images/portrait-iroshandezilva.webp"
              alt="Portrait of Iroshan De Zilva"
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto w-full rounded-xl border border-black/10"
              priority
            />
            <figcaption className="sr-only">
              Iroshan De Zilva, Product Designer
            </figcaption>
          </figure>
        </div>
      </section>

      <section
        className="mx-auto max-w-3xl px-6 lg:px-0"
        aria-labelledby="about-intro"
      >
        <div className="flex flex-col gap-20">
          <section aria-labelledby="about-story" className="mb-0">
            <h2 id="about-intro" className="sr-only">
              About Iroshan De Zilva
            </h2>
            <div className="space-y-4 text-base leading-7 tracking-wide text-stone-600">
              <p>
                When I was a kid, I took apart a toy just to see how it worked.
                Didn’t manage to put it back together. Still remember how that
                felt—curious, messy, kinda proud.
              </p>
              <p>That hasn’t changed much.</p>
              <p>
                These days, I design interfaces for SaaS tools, early-stage
                products, and teams who care about clarity. I don’t do “make it
                pretty.” I do <em>make it make sense</em>.
              </p>
              <p>
                I ask a lot of questions. Fix flows. Move things around until
                everything feels right. It’s not about showing off. It’s about
                helping someone think,
                <span className="font-semibold italic">
                  “Oh… yeah, that’s what I was trying to do.”
                </span>
              </p>
            </div>
          </section>

          <section aria-labelledby="about-style" className="mb-0">
            <h2
              id="about-style"
              className="font-heading mb-4 text-3xl text-stone-700"
            >
              My Style
            </h2>
            <div className="space-y-4 text-base leading-7 tracking-wide text-stone-600">
              <p>
                I work quietly and quickly. I collaborate when it counts, but I
                won’t slow anyone down.
              </p>
              <p>
                If something’s unclear, I’ll ask. If not, I just keep moving.
              </p>
              <p>
                What keeps me going? Figuring things out. That moment when it
                finally clicks. That’s the good part.
              </p>
              <blockquote
                className="font-hand mt-6 border-l-4 border-blue-300 pl-4 text-2xl text-gray-600 italic"
                aria-label="Personal motto"
              >
                Make it clear. Make it work. Keep it fun 🤓
              </blockquote>
            </div>
          </section>

          <section aria-labelledby="about-approach">
            <h2
              id="about-approach"
              className="mb-6 text-sm font-medium tracking-widest text-stone-600 uppercase"
            >
              PRIVILEGED TO COLLABORATE WITH 30+ TEAMS INCLUDING
            </h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              <ClientLogo
                src="/images/client-logos/client_amplifyn.webp"
                alt="Amplifyn logo"
                website="https://amplifyn.com"
                priority
              />
              <ClientLogo
                src="/images/client-logos/client_brolly.webp"
                alt="Brolly logo"
                website="https://brolly.com"
              />
              <ClientLogo
                src="/images/client-logos/client_cimplk.webp"
                alt="Cimplk logo"
                website="https://cimplk.com"
              />
              <ClientLogo
                src="/images/client-logos/client_helakuru.webp"
                alt="Helakuru logo"
                website="https://helakuru.lk"
              />
              <ClientLogo
                src="/images/client-logos/client_leavedates.webp"
                alt="Leave Dates logo"
              />
              <ClientLogo
                src="/images/client-logos/client_payhere.webp"
                alt="Payhere logo"
              />
              <ClientLogo
                src="/images/client-logos/client_rooster.webp"
                alt="Rooster logo"
              />
              <ClientLogo
                src="/images/client-logos/client_sneakertub.webp"
                alt="Sneakertub logo"
              />
            </div>
          </section>

          <section className="mb-0 space-y-4" aria-labelledby="about-care">
            <h2
              id="about-care"
              className="font-heading mb-4 text-3xl text-stone-700"
            >
              What I Care About
            </h2>
            <ul className="list-inside list-disc space-y-1 text-base leading-7 tracking-wide text-stone-600">
              <li>Clear structure</li>
              <li>Calm communication</li>
              <li>No fluff</li>
              <li>Honest feedback</li>
              <li>Kind people who care about their craft</li>
            </ul>
          </section>

          <section className="mb-0 space-y-4" aria-labelledby="about-outside">
            <h2
              id="about-outside"
              className="font-heading mb-4 text-3xl text-stone-700"
            >
              Outside of Design
            </h2>
            <div className="space-y-6 text-base leading-7 tracking-wide text-stone-600">
              <p>
                I spend a lot of time reading. Usually nonfiction—stuff about
                how people think, how we work, and how to talk without
                overthinking every word. It helps. Quietly.
              </p>
              <p>
                I collect Hot Wheels too. Been doing it for years. There’s
                something about how tiny and well-designed they are. Over 200
                now. Still feels exciting when I find a good one.
              </p>
              <p>
                Lately, I’ve been working on soft skills. Listening better.
                Talking clearer. Saying less, but meaning more.
              </p>
              <p>
                I live with my wife and our dog, Milo. We go hiking or camping
                when we can. Not for the views—mostly for the quiet. It resets
                me.
              </p>
            </div>
          </section>

          <div aria-hidden="true"></div>
        </div>
      </section>
    </>
  );
}
