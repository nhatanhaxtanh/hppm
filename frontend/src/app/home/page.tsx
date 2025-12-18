import HeroInteractive from '@/components/ui/interactive-selector';
import AboutSection from '@/components/ui/about';
import ExperienceFeatures from '@/components/ui/parallax-scroll-feature-section';
import TeamSection from '@/components/ui/testimonials';
import ServicesAccordion from '@/components/ui/service-accordion';
export default function HomePage() {
    return (
        <>
            <section className="w-full">
                <HeroInteractive />
                <ExperienceFeatures />
                <AboutSection />
                <TeamSection />
                <ServicesAccordion />
            </section>
        </>
    );
}
