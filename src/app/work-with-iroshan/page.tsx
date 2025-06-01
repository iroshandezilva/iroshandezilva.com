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
          <h1 className="font-heading text-center text-4xl leading-12 text-gray-900 lg:text-5xl lg:leading-16">
            How to Work with Me
          </h1>
        </div>
      </section>

      <section
        className="mx-auto max-w-3xl px-6 lg:px-0"
        aria-labelledby="about-intro"
      >
        <div className="flex flex-col gap-20">
          <section aria-labelledby="about-story" className="mb-0">
            <h2 className="font-heading mb-4 text-3xl text-stone-700">
              My Personality
            </h2>
            <div className="flex flex-col space-y-8">
              <div className="space-y-4 text-base leading-7 tracking-wide text-stone-600">
                <p>
                  I’m someone who works best in calm, focused spaces. I recharge
                  in solitude, not through constant back-and-forth.
                </p>

                <p>
                  I’m thoughtful, clear, and intentional. I don’t rush into
                  decisions. I like to give things space to breathe Then act
                  with focus.
                </p>

                <p>
                  I’m self-disciplined, but I value flow over force. If
                  something feels off, I pause and figure out why before pushing
                  through.
                </p>
              </div>
              <div>
                <h3 className="font-heading mb-2 text-xl text-stone-700">
                  My Strengths
                </h3>
                <ul className="list-inside list-disc tracking-wide text-stone-600">
                  <li>I bring clarity when things get messy</li>
                  <li>I design from a place of empathy, not ego</li>
                  <li> I stay grounded and present when it matters</li>
                </ul>
              </div>
              <div>
                <h3 className="font-heading mb-2 text-xl text-stone-700">
                  What I’m Working On
                </h3>
                <ul className="list-inside list-disc tracking-wide text-stone-600">
                  <li>Being quicker when the situation calls for it</li>
                  <li>Saying what I need without overexplaining</li>
                  <li>Letting small things stay small</li>
                </ul>
              </div>
            </div>
          </section>

          <section aria-labelledby="about-style" className="mb-0">
            <h2
              id="about-style"
              className="font-heading mb-4 text-3xl text-stone-700"
            >
              What I Care About
            </h2>
            <div className="flex flex-col space-y-8">
              <div className="space-y-4 text-base leading-7 tracking-wide text-stone-600">
                <p>
                  I care about environments where people can be real. Where you
                  don’t have to wear a mask to be taken seriously.
                </p>
                <p>
                  I care about doing meaningful work — not just shipping fast or
                  making things pretty.
                </p>
                <p>
                  And I care about momentum. Not in a productivity sense, but in
                  an energy sense. Are we growing? Are we learning?
                </p>
              </div>
              <div>
                <h3 className="font-heading mb-2 text-xl text-stone-700">
                  You’ll get along with me if you:
                </h3>
                <ul className="list-inside list-disc tracking-wide text-stone-600">
                  <li>Take ownership of your time and your outcomes</li>
                  <li>Ask thoughtful questions</li>
                  <li>Show up with care</li>
                </ul>
              </div>
              <div>
                <h3 className="font-heading mb-2 text-xl text-stone-700">
                  You’ll struggle with me if you:
                </h3>
                <ul className="list-inside list-disc tracking-wide text-stone-600">
                  <li>Fake enthusiasm or agreement</li>
                  <li>Cut corners</li>
                  <li>Keep repeating the same mistake without reflection</li>
                </ul>
              </div>
            </div>
          </section>

          <section aria-labelledby="about-style" className="mb-0">
            <h2
              id="about-style"
              className="font-heading mb-4 text-3xl text-stone-700"
            >
              How I Like to Work Together
            </h2>
            <div className="flex flex-col space-y-8">
              <div className="space-y-4 text-base leading-7 tracking-wide text-stone-600">
                <p>
                  I work best in async flow. My mind is clear in the mornings
                  and again at night. Afternoons are slower — avoid meetings
                  during that window if possible.
                </p>
                <p>
                  If you need me, message me with context. A clear ask. A voice
                  note works great too.
                </p>
                <p>
                  If I don’t reply fast, it’s not personal. I’m probably
                  thinking through it. You can always nudge me.
                </p>
              </div>
              <div>
                <h3 className="font-heading mb-2 text-xl text-stone-700">
                  What builds my trust:
                </h3>
                <ul className="list-inside list-disc tracking-wide text-stone-600">
                  <li>You say what’s real, even when it’s hard</li>
                  <li>You follow through on what you say you’ll do</li>
                  <li>
                    You think about the person on the other side of the screen
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-heading mb-2 text-xl text-stone-700">
                  What breaks it:
                </h3>
                <ul className="list-inside list-disc tracking-wide text-stone-600">
                  <li>You say yes but don’t mean it</li>
                  <li>
                    You make the same mistake again and again without adjusting
                  </li>
                  <li>
                    You treat the work like a checklist instead of something
                    that should matter
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section aria-labelledby="about-style" className="mb-0">
            <h2
              id="about-style"
              className="font-heading mb-4 text-3xl text-stone-700"
            >
              Feedback & Recognition
            </h2>
            <div className="flex flex-col space-y-8">
              <div className="space-y-4 text-base leading-7 tracking-wide text-stone-600">
                <p>
                  I give feedback through conversation. Usually in context, not
                  as a performance.
                </p>
                <p>
                  Sometimes it’ll sound like a small suggestion. Sometimes I’ll
                  go deeper if I think it’ll help.
                </p>
                <p>
                  I’m always honest, but never unkind. I’d rather help you grow
                  than protect your feelings for the short term.
                </p>
                <p>
                  I take feedback best when it’s thoughtful. Write it if it’s
                  easier. I’ll read it carefully.
                </p>
                <p>
                  Recognition isn’t something I need in public, but when it’s
                  genuine, I really appreciate it.
                </p>
              </div>
            </div>
          </section>

          <section aria-labelledby="about-style" className="mb-0">
            <h2
              id="about-style"
              className="font-heading mb-4 text-3xl text-stone-700"
            >
              Working With Me Is Simple
            </h2>
            <div className="flex flex-col space-y-8">
              <div className="space-y-4 text-base leading-7 tracking-wide text-stone-600">
                <p>Just bring care. Show up like it matters.</p>
                <p>
                  Don’t try to impress me. Try to understand the problem. Try to
                  help others.
                </p>
                <p>That’s what I notice. That’s who I work best with.</p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
