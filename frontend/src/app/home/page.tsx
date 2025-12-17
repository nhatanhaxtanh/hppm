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
        <main
            id="main"
            className="mx-auto max-w-7xl space-y-16 px-4 py-10 sm:px-6"
        >
            {/* Hero */}
            <section className="space-y-4">
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                    Hello 👋 Scroll test page
                </h1>
                <p className="text-muted-foreground max-w-2xl">
                    Trang này chỉ để tạo nội dung dài nhằm test: sticky header,
                    blur khi scroll, active states, mobile sheet, và nút
                    back-to-top.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                    {sections.map((s) => (
                        <a
                            key={s.id}
                            href={`#section-${s.id}`}
                            className="border-border hover:bg-accent/60 rounded-full border px-3 py-1 text-sm transition-colors"
                        >
                            {s.title}
                        </a>
                    ))}
                </div>
            </section>

            {/* Sections */}
            {sections.map((s) => (
                <section
                    key={s.id}
                    id={`section-${s.id}`}
                    className="border-border bg-background scroll-mt-24 space-y-6 rounded-2xl border p-6 sm:p-8"
                >
                    <div className="space-y-2">
                        <h2 className="text-2xl font-semibold">{s.title}</h2>
                        <p className="text-muted-foreground">{s.desc}</p>
                    </div>

                    {/* Big grid to create scroll */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {cards
                            .slice((s.id - 1) * 2, (s.id - 1) * 2 + 6)
                            .map((c) => (
                                <article
                                    key={c.id}
                                    className="border-border hover:bg-accent/40 rounded-2xl border p-5 transition-colors"
                                >
                                    <h3 className="font-medium">{c.title}</h3>
                                    <p className="text-muted-foreground mt-2 text-sm">
                                        {c.text}
                                    </p>

                                    <div className="bg-muted mt-4 h-2 w-full overflow-hidden rounded-full">
                                        <div className="bg-primary/40 h-full w-2/3 rounded-full" />
                                    </div>
                                </article>
                            ))}
                    </div>

                    <div className="text-muted-foreground text-sm">
                        Tip: click các “chips” ở đầu trang để nhảy nhanh, xem
                        header có che nội dung không (scroll-mt-24).
                    </div>
                </section>
            ))}

            {/* Footer-ish */}
            <section className="space-y-3 py-16 text-center">
                <p className="text-lg font-medium">End of page</p>
                <p className="text-muted-foreground">
                    Nếu back-to-top hoạt động ổn, bạn sẽ thấy UX “đỡ cực” ngay.
                </p>
            </section>
        </main>
    );
}
