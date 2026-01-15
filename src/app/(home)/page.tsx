import Navbar from '@/components/Navbar';
import Hero from '@/app/(home)/_components/Hero';
import About from '@/app/(home)/_components/About';
import Projects from '@/app/(home)/_components/Projects';
import Skills from '@/app/(home)/_components/Skills';
import Education from '@/app/(home)/_components/Education';
import Experience from '@/app/(home)/_components/Experience';
import Contact from '@/app/(home)/_components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Experience />
      <Contact />
      <footer className="py-8 text-center">
        <p className="text-muted-foreground text-sm">
          © 2024 Arafa N. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
