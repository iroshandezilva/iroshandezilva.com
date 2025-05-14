"use client";

import Image from "next/image";

const tools = [
  {
    name: "Figma",
    icon: "https://cdn.sanity.io/images/599r6htc/regionalized/5094051dac77593d0f0978bdcbabaf79e5bb855c-1080x1080.png",
    url: "https://www.figma.com",
    description:
      "Where 90% of my work happens.<br /> I use it for wireframes, UI design, design systems, quick ideas—everything. It's fast, clean, and lets me move from messy to final without switching tools.",
  },
  {
    name: "ChatGPT",
    icon: "https://static.vecteezy.com/system/resources/previews/021/608/790/non_2x/chatgpt-logo-chat-gpt-icon-on-black-background-free-vector.jpg",
    url: "https://chat.openai.com",
    description:
      "My AI writing assistant. <br />I use it for drafting emails, generating ideas, and refining content for presentations and documentation.",
  },
  {
    name: "Cal",
    icon: "https://framerusercontent.com/images/fj5n7GU6Wl1m0uc8ylDDbaRiew.webp",
    url: "https://cal.com",
    description:
      "My scheduling tool of choice. <br />Saves me countless emails with <em>automatic timezone detection</em> and seamless calendar integration.",
  },
];

export default function StackPage() {
  return (
    <div className="container mx-auto max-w-3xl px-6 pt-16 pb-12 md:px-0 lg:pt-24">
      <section className="mb-16">
        <h1 className="font-heading mb-4 text-3xl text-stone-900 lg:text-5xl">
          A running list of tools that help me work, think, and keep the chaos
          low.
        </h1>

        <hr className="my-8 border-dashed" />
      </section>

      <section>
        <div className="flex flex-col gap-8">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="-mx-6 flex items-start gap-4 rounded-xl p-6 px-6 transition-colors duration-200 ease-in-out hover:bg-stone-200/60"
            >
              {tool.url ? (
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4"
                >
                  <div className="flex h-12 min-w-12 items-center justify-center overflow-hidden rounded-xl border border-stone-200">
                    <Image
                      src={tool.icon}
                      alt={tool.name}
                      width={36}
                      height={36}
                      className="contain w-auto rounded-md bg-contain transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium transition-colors group-hover:text-blue-600">
                      {tool.name}
                    </h3>
                    <p
                      className="text-base text-neutral-600"
                      dangerouslySetInnerHTML={{ __html: tool.description }}
                    />
                  </div>
                </a>
              ) : (
                <>
                  <Image
                    src={tool.icon}
                    alt={tool.name}
                    width={40}
                    height={40}
                    className="rounded-md"
                  />
                  <div>
                    <h3 className="font-semibold">{tool.name}</h3>
                    <p
                      className="text-sm text-neutral-600"
                      dangerouslySetInnerHTML={{ __html: tool.description }}
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
