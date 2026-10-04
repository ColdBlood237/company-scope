export default function Loading() {
  return (
    <main
      aria-busy="true"
      aria-label="Loading company profile"
      className="min-h-screen bg-base-200/60 px-4 py-10 font-sans text-base-content sm:px-6"
    >
      <div className="mx-auto max-w-5xl">
        <div className="skeleton h-4 w-36" aria-hidden="true" />

        <header className="mt-8 border-b border-base-300 pb-6">
          <div className="flex gap-2">
            <div className="skeleton h-6 w-28" aria-hidden="true" />
            <div className="skeleton h-6 w-24" aria-hidden="true" />
          </div>
          <div className="skeleton mt-4 h-10 w-2/3" aria-hidden="true" />
          <div className="skeleton mt-3 h-5 w-40" aria-hidden="true" />
        </header>

        <section
          aria-label="Company metrics loading"
          className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-box border border-base-300 bg-base-300 sm:grid-cols-3"
        >
          {Array.from({ length: 3 }, (_, metricIndex) => (
            <div
              key={metricIndex}
              className="space-y-3 bg-base-100 p-6"
              aria-hidden="true"
            >
              <div className="skeleton h-4 w-20" />
              <div className="skeleton h-8 w-28" />
            </div>
          ))}
        </section>

        <section className="mt-10 max-w-3xl" aria-hidden="true">
          <div className="skeleton h-6 w-44" />
          <div className="skeleton mt-4 h-16 w-full" />
        </section>
      </div>
    </main>
  );
}
