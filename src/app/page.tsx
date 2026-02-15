import Grid from '@/components/Grid';
import Hero from '@/components/Hero';
import Clients from '@/components/Clients';
import RecentProject from '@/components/RecentProject';
import { FloatingNav } from '@/components/ui/FloatingNav';
import { navItems } from '@/data/index';
import { FaHome } from 'react-icons/fa';
import Experience from '@/components/Experience';
import Approach from '@/components/Approach';

export default function Home() {
  return (
    <main
      className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto
    sm:px-10 px-5 "
    >
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProject />
        <Clients />
        <Experience />
        <Approach />
      </div>
    </main>
  );
}
