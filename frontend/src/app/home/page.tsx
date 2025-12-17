import HeroInteractive from '@/components/ui/interactive-selector';
import AboutSection from '@/components/ui/about';
import ExperienceFeatures from '@/components/ui/parallax-scroll-feature-section';

export default function HomePage() {
    const sections = Array.from({ length: 10 }).map((_, i) => ({
        id: i + 1,
        title: `Section ${i + 1}`,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    }));

    const cards = Array.from({ length: 24 }).map((_, i) => ({
        id: i + 1,
        title: `Card ${i + 1}`,
        text: 'This is placeholder content to test scrolling behavior, sticky header, and UX elements like back-to-top.',
    }));

    return (
        <>
            <section className="w-full">
                <HeroInteractive />
                <ExperienceFeatures />
                <AboutSection />
            </section>
            <main
                id="main"
                className="mx-auto max-w-7xl space-y-16 px-4 py-10 sm:px-6"
            >
                {sections.map((s) => (
                    <section
                        key={s.id}
                        id={`section-${s.id}`}
                        className="border-border bg-background scroll-mt-24 space-y-6 rounded-2xl border p-6 sm:p-8"
                    >
                        <div className="space-y-2">
                            <h2 className="text-2xl font-semibold">
                                {s.title}
                            </h2>
                            <p className="text-muted-foreground">{s.desc}</p>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {cards
                                .slice((s.id - 1) * 2, (s.id - 1) * 2 + 6)
                                .map((c) => (
                                    <article
                                        key={c.id}
                                        className="border-border hover:bg-accent/40 rounded-2xl border p-5 transition-colors"
                                    >
                                        <h3 className="font-medium">
                                            {c.title}
                                        </h3>
                                        <p className="text-muted-foreground mt-2 text-sm">
                                            {c.text}
                                        </p>

                                        <div className="bg-muted mt-4 h-2 w-full overflow-hidden rounded-full">
                                            <div className="bg-primary/40 h-full w-2/3 rounded-full" />
                                        </div>
                                    </article>
                                ))}
                        </div>
                    </section>
                ))}
            </main>
        </>
    );
}
