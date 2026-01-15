import Navbar from '@/components/Navbar';
import Hero from '@/app/(home)/_components/Hero';
import About from '@/app/(home)/_components/About';
import ProjectsSection from '@/app/(home)/_components/ProjectsSection';
import SkillsSection from '@/app/(home)/_components/SkillsSection';
import EducationSection from '@/app/(home)/_components/EducationSection';
import WorkExperienceSection from '@/app/(home)/_components/WorkExperienceSection';
import ContactSection from '@/app/(home)/_components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <WorkExperienceSection />
      <ContactSection />
      <footer className="py-8 text-center border-t border-border">
        <p className="text-muted-foreground text-sm">
          © 2024 Arafa N. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
