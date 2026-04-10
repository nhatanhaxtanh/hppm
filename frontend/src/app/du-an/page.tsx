import FeaturedProjectsGrid from '@/components/ui/feature-project';

export default function ProjectsPage() {
    return (
        <main className="min-h-screen pt-8">
            <FeaturedProjectsGrid
                className="pt-6"
                variant="enhanced"
                expandable
                initialCount={6}
            />
        </main>
    );
}
