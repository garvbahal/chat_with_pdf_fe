const useCases = [
    { quote: '"Summarize this report into key points"', tag: "Summarize" },
    { quote: '"Break down the trends in this document"', tag: "Analyze" },
    { quote: '"Find troubleshooting steps in this manual"', tag: "Extract" },
    { quote: '"Explain this diagram in simple terms"', tag: "Simplify" },
    { quote: '"List important tasks and deadlines"', tag: "Organize" },
    { quote: '"Identify key concepts from this chapter"', tag: "Study" },
];

export const UseCasesSection = () => {
    return (
        <section id="pricing" className="mt-24">
            <h2 className="font-display text-center text-5xl leading-tight text-slate-800 sm:text-6xl">
                Real-life ways people use Chat to PDF
            </h2>
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {useCases.map((item) => (
                    <article
                        key={item.quote}
                        className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                    >
                        <p className="text-lg leading-relaxed text-slate-700 sm:text-xl">
                            {item.quote}
                        </p>
                        <p className="mt-4 text-lg font-semibold text-slate-800 sm:text-xl">
                            {item.tag}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
};
