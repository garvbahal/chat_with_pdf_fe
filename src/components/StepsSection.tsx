const steps = [
    {
        title: "Upload your file",
        description: "Drag and drop your document or choose it manually.",
    },
    {
        title: "Ask naturally",
        description:
            "Use plain language to ask for summaries, answers, or explanations.",
    },
    {
        title: "Get instant clarity",
        description: "Receive focused responses without scanning every page.",
    },
];

export const StepsSection = () => {
    return (
        <section className="mt-24">
            <h2 className="font-display text-center text-5xl leading-tight text-slate-800 sm:text-6xl">
                How it works
            </h2>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
                {steps.map((step, index) => (
                    <article
                        key={step.title}
                        className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                    >
                        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
                            Step {index + 1}
                        </p>
                        <h3 className="mt-3 text-2xl font-bold text-slate-800">
                            {step.title}
                        </h3>
                        <p className="mt-3 text-lg leading-relaxed text-slate-600">
                            {step.description}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
};
