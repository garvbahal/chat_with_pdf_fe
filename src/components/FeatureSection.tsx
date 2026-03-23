const features = [
    {
        title: "Ask instead of scroll",
        description:
            "Skip endless page hunting. Ask direct questions and jump to what matters instantly.",
        icon: "?",
    },
    {
        title: "Works with all PDFs",
        description:
            "Upload reports, contracts, lecture notes, invoices, and handbooks in one place.",
        icon: "[]",
    },
    {
        title: "Complex stuff made simple",
        description:
            "Translate technical details into clear plain language with quick summaries.",
        icon: "*",
    },
    {
        title: "Privacy-focused",
        description:
            "Your files stay private and secure while you work, ask, and explore insights.",
        icon: "#",
    },
];

export const FeatureSection = () => {
    return (
        <section
            id="features"
            className="mt-24"
            aria-label="Feature highlights"
        >
            <h2 className="font-display text-center text-5xl leading-tight text-slate-800 sm:text-6xl">
                Talk to your documents like they are human
            </h2>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
                {features.map((feature) => (
                    <article
                        key={feature.title}
                        className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                        <div className="mb-5 flex h-20 w-full items-center justify-center rounded-2xl bg-slate-100 text-4xl text-slate-500">
                            {feature.icon}
                        </div>
                        <h3 className="text-2xl font-bold leading-tight text-slate-800 sm:text-3xl">
                            {feature.title}
                        </h3>
                        <p className="mt-3 text-lg leading-relaxed text-slate-600 sm:text-xl">
                            {feature.description}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
};
