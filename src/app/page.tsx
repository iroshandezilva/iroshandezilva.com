import Hero from "@/components/home/Hero";
import CaseStudyHighlight from "@/components/home/CaseStudyHighlight";
import ClientLists from "@/components/home/ClientsLists";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CaseStudyHighlight />
      <ClientLists />
    </>
  );
}
