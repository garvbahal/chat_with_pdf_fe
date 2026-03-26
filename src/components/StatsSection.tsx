const stats = [
  { label: "Average answer time", value: "< 2 sec" },
  { label: "Supported file types", value: "PDF" },
  { label: "Typical time saved", value: "70%" },
];

export const StatsSection = () => {
  return (
    <section className="mt-10 grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:grid-cols-3 sm:p-8">
      {stats.map((item) => (
        <article key={item.label}>
          <p className="font-display text-4xl text-slate-800">{item.value}</p>
          <p className="mt-2 text-base text-slate-600">{item.label}</p>
        </article>
      ))}
    </section>
  );
};
