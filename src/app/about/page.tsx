import Divider from "@/components/shared/Divider";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 py-24 lg:px-0">
        <div className="inline-flex flex-col items-start justify-start gap-10">
          <h1 className="font-heading text-center text-4xl leading-12 text-gray-900 lg:text-5xl lg:leading-16">
            I'm a senior freelance product designer crafting intuitive,
            user-focused experiences.
          </h1>
          <div className="flex flex-col items-start justify-start gap-8 self-stretch border-stone-100">
            <Image
              src="/images/portrait-iroshandezilva.webp"
              alt="Iroshan De Zilva"
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto w-full rounded-xl border border-black/10"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-2xl">
        <div className="flex flex-col gap-18">
          <div>
            <p className="text-base leading-7 tracking-wide text-stone-600">
              As a kid, I once dismantled a perfectly good toy—not to break it,
              but to understand how it worked. (Spoiler: I didn’t quite manage
              to put it back together.) That same drive to explore and figure
              things out still guides me today. Design, for me, is about more
              than just creating something that works—it’s about crafting
              something that feels effortless, thoughtful, and even a little
              delightful. I dive deep into the details, tweaking and refining
              until every pixel earns its place. My motto? “Simplify the
              complex, one pixel at a time 🤓.” The emoji is non-negotiable—it’s
              a nod to keeping things fun while pushing boundaries in the work I
              love.
            </p>
          </div>
          <div>
            <h3 className="font-heading mb-3 text-3xl">
              My Philosophy and Drive
            </h3>
            <p className="text-base leading-7 tracking-wide text-stone-600">
              I’ve always believed that curiosity is the key to unlocking
              possibilities. As a kid, I once dismantled a perfectly good
              toy—not to break it, but to understand how it worked.
              <span className="italic">
                (Spoiler: I didn’t quite manage to put it back together.)
              </span>{" "}
              That same drive to explore and figure things out still guides me
              today. Design, for me, is about more than just creating something
              that works—it’s about crafting something that feels effortless,
              thoughtful, and even a little delightful. I dive deep into the
              details, tweaking and refining until every pixel earns its place.
              My motto? “Simplify the complex, one pixel at a time 🤓.” The
              emoji is non-negotiable—it’s a nod to keeping things fun while
              pushing boundaries in the work I love.
            </p>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-white p-6">
            <h3 className="text-sm font-medium tracking-widest text-stone-400 uppercase">
              My motto?{" "}
            </h3>
            <p className="font-hand py-3 text-3xl leading-10 text-stone-600">
              “Simplify the complex, one pixel at a time 🤓.” The emoji is
              non-negotiable—it’s a nod to keeping things fun while pushing
              boundaries in the work I love.
            </p>
          </div>
          <Divider className="py-8" />
          <div></div>
        </div>
      </section>
    </>
  );
}
