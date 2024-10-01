import Hero from "./components/Hero";
import Bio from "./components/Bio";
import Wiki from "./components/Wiki";
import Contact from "./components/Contact";
import NewModelScene from "@/app/components/Gundam";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
      <NewModelScene />
      <Hero />
      <Bio />
      <Skills />
      <Wiki />
      <Contact />
    </>
  );
}
