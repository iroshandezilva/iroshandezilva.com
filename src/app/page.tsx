import Hero from "@/components/home/Hero";
import CaseStudyHighlight from "@/components/home/CaseStudyHighlight";
import ClientLists from "@/components/home/ClientsLists";
import MyServices from "@/components/home/MyServices";
// import MyPackages from "@/components/home/MyPackages";
import Divider from "@/components/shared/Divider";

export default function HomePage() {
  return (
    <>
      <Hero />

      <ClientLists />
      <Divider />
      <CaseStudyHighlight />
      <MyServices />
      {/* <MyPackages /> */}
    </>
  );
}
