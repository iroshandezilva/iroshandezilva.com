"use client"; // Need to add this since we're using useEffect

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function ContactPage() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "client-consultation" });
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#0C66E4" },
          dark: { "cal-brand": "#579DFF" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <section className="flex flex-col items-center pt-28">
      <h1 className="font-heading mb-18 text-3xl text-stone-900 md:text-5xl">
        Book a Free Discovery Call
      </h1>
      <div className="w-full max-w-4xl">
        <Cal
          namespace="client-consultation"
          calLink="iroshandezilva/client-consultation"
          style={{ width: "100%", height: "100%", overflow: "hidden" }}
          config={{ layout: "month_view", theme: "light" }}
        />
      </div>
    </section>
  );
}
