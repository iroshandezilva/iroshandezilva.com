import Hero from "@/components/home/Hero";
import CaseStudyHighlight from "@/components/home/CaseStudyHighlight";
import ClientLists from "@/components/home/ClientsLists";
import MyServices from "@/components/home/MyServices";
import MyPackages from "@/components/home/MyPackages";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientLists />
      <CaseStudyHighlight />
      <MyServices />
      <MyPackages />
    </>
  );
}
