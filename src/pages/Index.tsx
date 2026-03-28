import { Hero } from '@/components/home/Hero';
import { AboutPreview } from '@/components/home/AboutPreview';
import { ProgramsPreview } from '@/components/home/ProgramsPreview';
import { Testimonials } from '@/components/home/Testimonials';
import { CTASection } from '@/components/home/CTASection';

const Index = () => {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ProgramsPreview />
      <Testimonials />
      <CTASection />
    </>
  );
};

export default Index;
