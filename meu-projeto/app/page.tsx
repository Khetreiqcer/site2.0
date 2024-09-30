// app/page.tsx

import Hero from './components/Hero';
import Bio from './components/Bio';
import Wiki from './components/Wiki';
import Contact from './components/Contact';
import NewModelScene from '@/app/components/Gundam';


export default function Home() {
  return (
    <>
      <NewModelScene />
      <Hero />
      <Bio />
      <Wiki />
      <Contact />
    </>
  );
}
