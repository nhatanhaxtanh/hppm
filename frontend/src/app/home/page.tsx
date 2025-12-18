import HeroInteractive from '@/components/ui/interactive-selector';
import AboutSection from '@/components/ui/about';
import ExperienceFeatures from '@/components/ui/parallax-scroll-feature-section';
import TeamSection from '@/components/ui/testimonials';
import ServicesAccordion from '@/components/ui/service-accordion';
import FeaturedProjectsGrid from '@/components/ui/feature-project';
import InsightsGrid from '@/components/ui/insight-grid';
export default function HomePage() {
    return (
        <>
            <section className="w-full">
                <HeroInteractive />
                <ExperienceFeatures />
                <AboutSection />
                <TeamSection />
                <ServicesAccordion />
                <FeaturedProjectsGrid />
                <InsightsGrid />
            </section>
        </>
    );
}
